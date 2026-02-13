const fs = require('fs');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { spawn } = require('child_process');

// Helper function to run Python script
const runPythonModel = (imagePath) => {
    return new Promise((resolve, reject) => {
        const scriptPath = path.join(__dirname, '..', 'predict_disease.py');
        const pythonProcess = spawn('python', [scriptPath, imagePath]);

        let dataString = '';
        let errorString = '';

        pythonProcess.stdout.on('data', (data) => {
            dataString += data.toString();
        });

        pythonProcess.stderr.on('data', (data) => {
            errorString += data.toString();
        });

        pythonProcess.on('close', (code) => {
            if (code !== 0) {
                console.warn(`Python script exited with code ${code}: ${errorString}`);
                resolve(null); // Resolve null on error to allow fallback
                return;
            }
            try {
                const result = JSON.parse(dataString);
                resolve(result);
            } catch (e) {
                console.error("Failed to parse Python output:", dataString);
                resolve(null);
            }
        });

        pythonProcess.on('error', (err) => {
            console.error("Failed to start Python process:", err);
            resolve(null);
        });
    });
};

// @desc    Detect crop disease from image
// @route   POST /api/disease/detect
// @access  Public
const detectDisease = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'Please upload an image file' });
        }

        const imagePath = req.file.path;

        // 1. Run Python Model (Crop Identification)
        console.log("Running Python model analysis...");
        const pythonResult = await runPythonModel(imagePath);
        console.log("Python Result:", pythonResult);

        let identifiedCropInfo = "";
        let modelUsed = false;

        if (pythonResult && pythonResult.success) {
            identifiedCropInfo = `System identified crop as: ${pythonResult.crop} (Confidence: ${pythonResult.confidence}).`;
            modelUsed = true;
        } else if (pythonResult && pythonResult.error) {
            console.log("Python Model Check:", pythonResult.error);
        }

        // 2. Gemini Vision API Analysis (Primary Disease Detector)
        const apiKey = process.env.GEMINI_API_KEY;
        if (apiKey) {
            try {
                const genAI = new GoogleGenerativeAI(apiKey);
                const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash-lite" });

                const imageData = fs.readFileSync(imagePath);
                const imageBase64 = imageData.toString('base64');

                const prompt = `
                Analyze this crop image. 
                ${identifiedCropInfo}
                1. Identify or confirm the crop name.
                2. Detect if there is any disease or pest issue. If healthy, say "Healthy".
                3. If diseased, ensure you provide the correct scientific or common name of the disease.
                4. Provide 2-3 practical remedies or treatments if a disease is found.
                
                Provide the response in STRICT JSON format:
                {
                    "crop": "Crop Name",
                    "status": "Healthy/Diseased",
                    "diseaseName": "Name of disease or 'None'",
                    "confidence": 0.95,
                    "description": "Brief description of the issue",
                    "remedies": ["Remedy 1", "Remedy 2"]
                }
                `;

                const result = await model.generateContent([
                    prompt,
                    {
                        inlineData: {
                            data: imageBase64,
                            mimeType: req.file.mimetype
                        }
                    }
                ]);

                const response = await result.response;
                const text = response.text();
                const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();

                // Cleanup uploaded file after processing
                try {
                    if (fs.existsSync(imagePath)) {
                        fs.unlinkSync(imagePath);
                    }
                } catch (cleanupError) {
                    console.warn("Warning: Failed to delete temp file (Gemini block):", cleanupError.message);
                }

                const jsonResponse = JSON.parse(cleanText);

                // Inject internal model info if available
                if (modelUsed) {
                    jsonResponse.internal_model_prediction = pythonResult;
                }

                return res.json(jsonResponse);

            } catch (aiError) {
                console.error("Gemini Error:", aiError.message);
                // Fallthrough to mock if API fails
            }
        }

        // 3. Fallback Mock Response (if no API key or model)
        // Cleanup uploaded file safely
        try {
            if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
        } catch (cleanupError) {
            console.warn("Warning: Failed to delete temp file:", cleanupError.message);
        }

        res.json({
            crop: "Unknown (Simulated)",
            status: "Diseased",
            diseaseName: "Leaf Spot (Mock Result)",
            confidence: 0.85,
            description: "Simulated result because no model/API key was active.",
            remedies: [
                "Apply fungicide",
                "Remove infected leaves",
                "Improve air circulation"
            ]
        });

    } catch (error) {
        console.error("Critical Disease Detection Error:", error);
        // Ensure we don't try to send a response if one was already sent
        if (!res.headersSent) {
            res.status(500).json({
                message: 'Server Error during analysis',
                error: error.message
            });
        }
    }
};

module.exports = {
    detectDisease
};
