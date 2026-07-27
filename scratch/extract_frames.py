import os
import imageio
from PIL import Image

video_path = r"c:\hackathon_prac\StrideShip\Generated Video July 27, 2026 - 7_46PM.mp4"
output_dir = r"c:\hackathon_prac\StrideShip\public\assets\hero-frames"

os.makedirs(output_dir, exist_ok=True)

print("Opening video with imageio...")
reader = imageio.get_reader(video_path)
meta = reader.get_meta_data()
fps = meta.get('fps', 24)
duration = meta.get('duration', 8.0)

print(f"Video metadata - FPS: {fps}, Duration: {duration}s")

count = 0
for i, frame in enumerate(reader):
    # Save as WebP for max quality and tiny file size
    img = Image.fromarray(frame)
    # Target resolution: 1920 wide (crisp 1080p for high-DPI displays)
    if img.width > 1920:
        h = int(img.height * (1920 / img.width))
        img = img.resize((1920, h), Image.Resampling.LANCZOS)
    
    filename = os.path.join(output_dir, f"frame_{i+1:03d}.webp")
    img.save(filename, "WEBP", quality=85, method=4)
    count += 1
    if count % 20 == 0:
        print(f"Extracted {count} frames...")

print(f"Successfully extracted {count} frames to {output_dir}!")
