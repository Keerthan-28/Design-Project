import json

try:
    with open(r"c:\Users\keert\OneDrive - Alliance University\Desktop\Design-Project\backend\crop_disease.ipynb", "r", encoding="utf-8") as f:
        nb = json.load(f)
    
    with open("extracted_code.py", "w", encoding="utf-8") as out_f:
        for i, cell in enumerate(nb.get("cells", [])):
            if cell.get("cell_type") == "code":
                source = "".join(cell.get("source", []))
                out_f.write(f"\n# --- Cell {i} ---\n")
                out_f.write(source)
                out_f.write("\n")
                
                # Extract outputs
                outputs = cell.get("outputs", [])
                if outputs:
                    out_f.write(f"\n# --- Output {i} ---\n")
                    for output in outputs:
                        if "text" in output:
                            text_output = "".join(output["text"])
                            out_f.write(f"# {text_output}\n")
                        elif "data" in output and "text/plain" in output["data"]:
                            text_output = "".join(output["data"]["text/plain"])
                            out_f.write(f"# {text_output}\n")
    print("Extraction complete.")
            
except Exception as e:
    print(f"Error reading notebook: {e}")
