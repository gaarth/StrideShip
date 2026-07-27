import os
import shutil
import imageio
from PIL import Image

video_path = r"c:\hackathon_prac\StrideShip\Generated Video July 27, 2026 - 7_46PM.mp4"
output_dir = r"c:\hackathon_prac\StrideShip\public\assets\hero-frames"

# Clear existing heavy files
if os.path.exists(output_dir):
    shutil.rmtree(output_dir)
os.makedirs(output_dir, exist_ok=True)

print("Opening video with imageio...")
reader = imageio.get_reader(video_path)

count = 0
saved_count = 0
for i, frame in enumerate(reader):
    count += 1
    # Take every 2nd frame (96 frames total for 8 seconds = 12fps source, interpolated smoothly on canvas)
    if i % 2 != 0:
        continue
    
    img = Image.fromarray(frame)
    # Resize to 1280px max width for super fast load & crisp canvas rendering
    w, h = img.size
    if w > 1280:
        new_h = int(h * (1280 / w))
        img = img.resize((1280, new_h), Image.Resampling.LANCZOS)
    
    saved_count += 1
    filename = os.path.join(output_dir, f"frame_{saved_count:03d}.webp")
    # Save with quality=65 for ~30KB file size
    img.save(filename, "WEBP", quality=65, method=4)
    if saved_count % 20 == 0:
        print(f"Saved {saved_count} optimized frames...")

print(f"Extraction complete! Saved {saved_count} frames to {output_dir}")
