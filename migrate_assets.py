import os
import shutil
import json

SOURCE_CERTS = r"C:\Users\Ruchit\Documents\certificate\Certificates"
SOURCE_ACHIEVEMENTS = r"C:\Users\Ruchit\Documents\certificate\Achievements"

DEST_BASE = r"c:\Users\Ruchit\Desktop\Code\2025\New resume\portfolio-website\public"
DEST_CERTS = os.path.join(DEST_BASE, "certificates")
DEST_ACHIEVEMENTS = os.path.join(DEST_BASE, "achievements")

# Ensure directories exist (redundant but safe)
os.makedirs(DEST_CERTS, exist_ok=True)
os.makedirs(DEST_ACHIEVEMENTS, exist_ok=True)

copied_certs = []
copied_achievements = []

def process_files(source_dir, dest_dir, category_list):
    if not os.path.exists(source_dir):
        print(f"Source dir not found: {source_dir}")
        return

    for filename in os.listdir(source_dir):
        if "offer letter" in filename.lower():
            continue # Skip sensitive info
        
        src_path = os.path.join(source_dir, filename)
        if os.path.isfile(src_path):
            dst_path = os.path.join(dest_dir, filename)
            shutil.copy2(src_path, dst_path)
            
            # Create a nice title
            name_no_ext = os.path.splitext(filename)[0]
            title = name_no_ext.replace("_", " ").replace("-", " ")
            
            # Clean up specific prefixes if any (like "CertificateOfCompletion")
            title = title.replace("CertificateOfCompletion", "").strip()
            
            category_list.append({
                "title": title,
                "filename": filename,
                "path": f"/{os.path.basename(dest_dir)}/{filename}", # Web path
                "type": "image" if filename.lower().endswith(('.jpg', '.jpeg', '.png')) else "pdf"
            })

process_files(SOURCE_CERTS, DEST_CERTS, copied_certs)
process_files(SOURCE_ACHIEVEMENTS, DEST_ACHIEVEMENTS, copied_achievements)

output = {
    "certificates": copied_certs,
    "achievements": copied_achievements
}

print(json.dumps(output, indent=2))
