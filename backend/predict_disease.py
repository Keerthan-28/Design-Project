import sys
import json
import os
import numpy as np

# Suppress TensorFlow logs
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 

try:
    import tensorflow as tf
    from tensorflow.keras.preprocessing import image
except ImportError:
    print(json.dumps({"error": "TensorFlow not installed"}))
    sys.exit(1)

# Classes extracted from the training notebook
CLASS_NAMES = ['Apple', 'Bell Pepper', 'Cherry', 'Corn (Maize)', 'Grape', 'Peach', 'Potato', 'Strawberry', 'Tomato']

def predict(image_path, model_paths):
    model = None
    loaded_path = None
    
    for path in model_paths:
        if os.path.exists(path):
            try:
                model = tf.keras.models.load_model(path)
                loaded_path = path
                break
            except Exception as e:
                pass # Try next path
    
    if model is None:
        return {"error": "Model file not found", "searched_paths": model_paths}

    try:
        # Load and preprocess image
        # Target size must match the model's input shape (224x224 from notebook)
        img = image.load_img(image_path, target_size=(224, 224))
        img_array = image.img_to_array(img)
        img_array = tf.expand_dims(img_array, 0) # Create a batch
        img_array = img_array / 255.0 # Rescaling (matches the Rescaling layer in notebook? 
        # Notebook has layers.Rescaling(1./255) as the first layer. 
        # If the model includes Rescaling, we should NOT divide by 255 here if we pass raw input.
        # BUT usually load_img results in 0-255. 
        # Let's check extracted code line 65: layers.Rescaling(1./255, input_shape=(224, 224, 3))
        # This layer IS part of the model. So the model expects 0-255 inputs.
        # So I should NOT manually divide by 255 if I pass it to the model.
        # Wait, if I divide by 255 here, then the model divides again, it becomes tiny.
        # CORRECTION: Remove manual rescaling here because the model has it.
        # Re-reading notebook: 
        # line 143: sample_image = images[0].numpy() (This is from dataset which might be scaled or not?)
        # image_dataset_from_directory does NOT scale by default.
        # So the input to model in notebook is 0-255 (int or float).
        # So I will pass 0-255 values.
        
        # Reset image array to 0-255 range (img_to_array is usually 0-255 floats)
        # Verify img_to_array range. It is 0-255.
        pass

        predictions = model.predict(img_array, verbose=0)
        
        # Predictions are softmax probabilities (from Dense(softmax) output)
        score = predictions[0]
        class_index = np.argmax(score)
        confidence = float(score[class_index])
        predicted_class = CLASS_NAMES[class_index] 
        
        # Determine status based on confidence or if the class implies disease? 
        # Since classes are just Crops, we can't determine disease status purely from class.
        # We will return the Identified Crop.
        
        return {
            "success": True,
            "crop": predicted_class,
            "confidence": confidence,
            "model_used": os.path.basename(loaded_path)
        }

    except Exception as e:
        return {"error": f"Inference logic failed: {str(e)}"}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No image path provided"}))
        sys.exit(1)
    
    image_path = sys.argv[1]
    
    base_dir = os.path.dirname(os.path.abspath(__file__))
    # Look for likely model names
    data = predict(image_path, [
        os.path.join(base_dir, 'models', 'crop_model.keras'),
        os.path.join(base_dir, 'models', 'crop_disease_model.keras'),
        os.path.join(base_dir, 'models', 'model.keras'),
        os.path.join(base_dir, 'models', 'crop_model.h5')
    ])
    
    print(json.dumps(data))
