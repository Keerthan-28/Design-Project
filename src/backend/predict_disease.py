import sys
import json
import os
import numpy as np

# Suppress TensorFlow logs
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3'

try:
    import tensorflow as tf
    from tensorflow.keras.preprocessing import image
    from tensorflow.keras.applications.efficientnet import preprocess_input
except ImportError:
    print(json.dumps({"error": "TensorFlow not installed. Run: pip install tensorflow>=2.15.0"}))
    sys.exit(1)

# ============================================================
# PlantVillage Dataset - 15 Disease Classes
# Exact folder names from training, sorted alphabetically
# (as used by ImageDataGenerator.flow_from_directory)
# ============================================================
CLASS_NAMES = [
    'Pepper__bell___Bacterial_spot',
    'Pepper__bell___healthy',
    'Potato___Early_blight',
    'Potato___Late_blight',
    'Potato___healthy',
    'Tomato_Bacterial_spot',
    'Tomato_Early_blight',
    'Tomato_Late_blight',
    'Tomato_Leaf_Mold',
    'Tomato_Septoria_leaf_spot',
    'Tomato_Spider_mites_Two_spotted_spider_mite',
    'Tomato__Target_Spot',
    'Tomato__Tomato_YellowLeaf__Curl_Virus',
    'Tomato__Tomato_mosaic_virus',
    'Tomato_healthy'
]


def parse_class_label(class_name):
    """
    Parse PlantVillage folder name into crop and disease info.
    Handles various separator formats: ___, __, or single _
    """
    # Try splitting by '___' first (3 underscores)
    if '___' in class_name:
        parts = class_name.split('___', 1)
        crop = parts[0].replace('_', ' ').replace('  ', ' ').strip()
        disease_raw = parts[1].strip()
    elif '__' in class_name:
        # Some names use '__' (2 underscores) as separator
        # e.g., 'Tomato__Target_Spot', 'Tomato__Tomato_YellowLeaf__Curl_Virus'
        parts = class_name.split('__', 1)
        crop = parts[0].replace('_', ' ').strip()
        disease_raw = parts[1].strip()
    else:
        # Single underscore format: 'Tomato_Bacterial_spot', 'Tomato_healthy'
        # First word is the crop
        parts = class_name.split('_', 1)
        if len(parts) == 2:
            crop = parts[0].strip()
            disease_raw = parts[1].strip()
        else:
            return class_name, 'Unknown', 'Unknown'

    # Clean up disease name
    if disease_raw.lower() == 'healthy':
        return crop, 'Healthy', 'None'
    else:
        disease = disease_raw.replace('_', ' ').replace('  ', ' ').strip()
        return crop, 'Diseased', disease


def predict(image_path, model_paths):
    """Load model and run inference on the given image."""
    model = None
    loaded_path = None

    for path in model_paths:
        if os.path.exists(path):
            try:
                model = tf.keras.models.load_model(path)
                loaded_path = path
                break
            except Exception as e:
                continue  # Try next path

    if model is None:
        return {"error": "Model file not found", "searched_paths": model_paths}

    try:
        # Load and preprocess image (224x224 to match EfficientNetB0 input)
        img = image.load_img(image_path, target_size=(224, 224))
        img_array = image.img_to_array(img)  # Shape: (224, 224, 3), values 0-255
        img_array = np.expand_dims(img_array, axis=0)  # Shape: (1, 224, 224, 3)

        # CRITICAL: Use EfficientNet's preprocess_input, NOT rescale 1./255
        # This matches the training pipeline which used:
        #   preprocessing_function=preprocess_input from efficientnet
        img_array = preprocess_input(img_array)

        # Run prediction
        predictions = model.predict(img_array, verbose=0)

        # Get top prediction
        score = predictions[0]
        class_index = int(np.argmax(score))
        confidence = float(score[class_index])
        predicted_class = CLASS_NAMES[class_index]

        # Parse into structured result
        crop, status, disease = parse_class_label(predicted_class)

        # Get top 3 predictions for additional context
        top3_indices = np.argsort(score)[-3:][::-1]
        top3 = []
        for idx in top3_indices:
            c, s, d = parse_class_label(CLASS_NAMES[idx])
            top3.append({
                "class": CLASS_NAMES[idx],
                "crop": c,
                "disease": d,
                "status": s,
                "confidence": float(score[idx])
            })

        return {
            "success": True,
            "crop": crop,
            "status": status,
            "diseaseName": disease,
            "confidence": confidence,
            "raw_class": predicted_class,
            "top3_predictions": top3,
            "model_used": os.path.basename(loaded_path)
        }

    except Exception as e:
        return {"error": f"Inference failed: {str(e)}"}


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No image path provided. Usage: python predict_disease.py <image_path>"}))
        sys.exit(1)

    image_path = sys.argv[1]

    if not os.path.exists(image_path):
        print(json.dumps({"error": f"Image file not found: {image_path}"}))
        sys.exit(1)

    base_dir = os.path.dirname(os.path.abspath(__file__))

    # Search for model in likely locations
    result = predict(image_path, [
        os.path.join(base_dir, 'models', 'crop_disease_final_model.keras'),
        os.path.join(base_dir, 'models', 'crop_disease_best_model.keras'),
        os.path.join(base_dir, 'models', 'crop_disease_model.keras'),
        os.path.join(base_dir, 'models', 'crop_model.keras'),
    ])

    print(json.dumps(result))
