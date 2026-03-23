import re
from pathlib import Path

# ===== CONFIG =====
DIRECTORY = r"."
IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp", ".gif", ".tiff", ".webp"}
# ==================

def clean_name(name):
    
    name = name.lower()
    name = name.replace("&", "and")
    name = name.replace(" ", "-")

    # remove anything not letter, number, or dash
    name = re.sub(r"[^a-z0-9\-]", "", name)

    # remove double dashes
    name = re.sub(r"-+", "-", name)

    return name.strip("-")

def rename_images(directory):

    directory = Path(directory)

    if not directory.exists():
        print("❌ Directory does not exist")
        return

    for file in directory.iterdir():

        if file.suffix.lower() in IMAGE_EXTENSIONS:

            new_stem = clean_name(file.stem)
            new_path = file.with_name(new_stem + file.suffix.lower())

            if new_path == file:
                continue

            if new_path.exists():
                print(f"⚠️ Skipped (exists): {new_path.name}")
                continue

            file.rename(new_path)
            print(f"✅ {file.name} → {new_path.name}")


if __name__ == "__main__":
    rename_images(DIRECTORY)