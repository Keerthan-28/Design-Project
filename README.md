# 🌱 AgriLearn - The Future of Virtual Farming

AgriLearn is a comprehensive virtual farming platform designed to empower farmers and agricultural enthusiasts with modern cultivation knowledge. It combines detailed learning modules, AI-driven yield analysis, and real-time weather data to promote sustainable and profitable farming practices.

![AgriLearn Banner](frontend/public/images/logo.png) *(Note: Placeholder path for logo if available)*

## 🚀 Features

### 🔍 Crop Doctor (New!)
- **AI Disease Detection**: Snap a photo of your crop, and our Hybrid AI (TensorFlow + Gemini) instantly diagnoses diseases.
- **Actionable Remedies**: Get immediate cure suggestions and prevention tips.
- **Offline Capability**: Uses a local Python model for crop identification to reduce API costs.

### 🚜 AI Yield & Multi-Cropping
- **Smart Yield Calculator**: Estimate income potential based on your specific land area and location.
- **Multi-Cropping Plans**: Get scientific, multi-layer cropping strategies (Canopy, Mid, Ground, Root layers) to maximize land efficiency.

### 📚 Interactive Learning Modules
- **Detailed Syllabi**: Comprehensive guides for major crops like Rice, Wheat, Maize, and more.
- **Stage-based Learning**: Modules are broken down into logical stages (e.g., Nursery Preparation, Transplanting, Harvesting).
- **Progress Tracking**: Your learning progress is saved automatically.

### 🌦️ Live Weather Dashboard
- **Real-time Data**: Current temperature, humidity, and forecast fetched via OpenWeatherMap.

### 🔐 Secure Authentication
- **Biometric Login**: Secure, passwordless login using WebAuthn (Passkeys/FaceID).

## 🏗️ Backend System Architecture

The backend is a **Hybrid AI System** that orchestrates three powerful engines:

1.  **The Manager (Node.js/Express)**: Handles API requests, security, and database interactions.
2.  **The Specialist (Python/TensorFlow)**: Runs a custom Deep Learning (CNN) model locally to identify crop types from images.
3.  **The Genius (Google Gemini)**: provides complex reasoning, diagnosing diseases based on the Specialist's findings and the image.

**Data Flow:**
User Uploads Image ➡️ Node.js Server ➡️ Python Script (Identifies "Tomato") ➡️ Google Gemini (Diagnoses "Early Blight") ➡️ User receives Result.

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15](https://nextjs.org/) (React)
- **Styling**: Vanilla CSS Modules (Glassmorphism design)
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT & SimpleWebAuthn (Passkeys)
- **AI Integration**: Google Generative AI SDK (Gemini 2.5)
- **Machine Learning**: Python 3, TensorFlow, Keras (CNN Architecture)
- **Process Management**: Node.js Child Process (to spawn Python scripts)

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v18+)
- Python (v3.8+) with TensorFlow installed
- MongoDB Atlas Account
- Google Gemini API Key

### 1. Clone the Repository
```bash
git clone https://github.com/Keerthan-28/Design-Project.git
cd agrilearn
```

### 2. Backend Setup
Navigate to the backend directory and install Node.js dependencies:
```bash
cd backend
npm install
```

Install Python dependencies for the AI model:
```bash
pip install -r requirements.txt
```

Create a `.env` file in `backend/` with:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
OPENWEATHER_API_KEY=your_openweather_api_key
RP_ID=localhost
RP_NAME=AgriLearn
RP_ORIGIN=http://localhost:3000
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
Open a new terminal, navigate to the frontend:
```bash
cd frontend
npm install
npm run dev
```

## 🧠 Model Training (Optional)
If you want to train your own Crop Identification Model:
1.  Place images in `backend/dataset/ClassName/image.jpg`.
2.  Run `python train_model.py`.
3.  The model will be saved to `backend/models/crop_model.keras`.

## 🤝 Contributing
Contributions are welcome! Please fork, create a branch, and submit a Pull Request.

## 📄 License
Distributed under the MIT License.

---
Built with 💚 by Team and the AgriLearn Team.
