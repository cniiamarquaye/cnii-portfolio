import os
from pathlib import Path

# ====== CONFIG ======
DIRECTORY = r"."   # 🔁 change this
REMOVE_TEXT = "&"                     # 🔁 character or string to remove

IMAGE_EXTENSIONS = {".jpg", ".jpeg", ".png", ".bmp", ".gif", ".tiff", ".webp"}
# ====================


def clean_filenames(directory, remove_text):
    directory = Path(directory)

    if not directory.exists():
        print("❌ Directory does not exist.")
        return

    for file in directory.iterdir():

        if file.suffix.lower() in IMAGE_EXTENSIONS:

            new_name = file.stem.replace(remove_text, "") + file.suffix
            new_path = file.with_name(new_name)

            if new_path == file:
                continue  # nothing to change

            if new_path.exists():
                print(f"⚠️ Skipped (target exists): {new_path.name}")
                continue

            file.rename(new_path)
            print(f"✅ Renamed: {file.name} → {new_path.name}")


if __name__ == "__main__":
    clean_filenames(DIRECTORY, REMOVE_TEXT)