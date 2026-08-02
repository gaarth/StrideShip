import sharp from "sharp";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "src", "app");

const tabSvg = fs.readFileSync(path.join(publicDir, "favicon.svg"));
const appleSvg = fs.readFileSync(path.join(publicDir, "favicon-apple.svg"));

async function generateFavicons() {
  console.log("Generating transparent-boat favicon assets...\n");

  const src = Buffer.from(tabSvg);
  const appleSrc = Buffer.from(appleSvg);

  await sharp(appleSrc)
    .resize(180, 180, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(path.join(publicDir, "apple-touch-icon.png"));
  await sharp(appleSrc)
    .resize(180, 180, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(path.join(appDir, "apple-icon.png"));
  console.log("✓ apple-touch-icon.png / apple-icon.png (180×180, opaque)");

  for (const size of [16, 32, 48, 96, 192, 512]) {
    await sharp(src)
      .resize(size, size, { fit: "fill", kernel: sharp.kernel.lanczos3 })
      .ensureAlpha()
      .png({ compressionLevel: 9, effort: 10 })
      .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));
    console.log(`✓ favicon-${size}x${size}.png (transparent)`);
  }

  await sharp(appleSrc)
    .resize(192, 192, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(path.join(publicDir, "web-app-manifest-192x192.png"));
  await sharp(appleSrc)
    .resize(512, 512, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(path.join(publicDir, "web-app-manifest-512x512.png"));
  await sharp(appleSrc)
    .resize(192, 192, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(path.join(publicDir, "android-chrome-192x192.png"));
  await sharp(appleSrc)
    .resize(512, 512, { fit: "fill", kernel: sharp.kernel.lanczos3 })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(path.join(publicDir, "android-chrome-512x512.png"));
  console.log("✓ web-app-manifest + android-chrome (opaque)");

  const ico16 = await sharp(src)
    .resize(16, 16, { kernel: sharp.kernel.lanczos3 })
    .ensureAlpha()
    .png()
    .toBuffer();
  const ico32 = await sharp(src)
    .resize(32, 32, { kernel: sharp.kernel.lanczos3 })
    .ensureAlpha()
    .png()
    .toBuffer();
  const ico48 = await sharp(src)
    .resize(48, 48, { kernel: sharp.kernel.lanczos3 })
    .ensureAlpha()
    .png()
    .toBuffer();
  const icoBuffer = buildIco([ico16, ico32, ico48]);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), icoBuffer);
  console.log("✓ favicon.ico (16 / 32 / 48, transparent)");

  console.log("\n✅ All favicon assets generated.");
}

function buildIco(pngBuffers) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let dataOffset = headerSize + dirEntrySize * numImages;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(numImages, 4);

  const dirEntries = [];
  const imageDataParts = [];

  for (const pngBuf of pngBuffers) {
    const w = pngBuf.readUInt32BE(16);
    const h = pngBuf.readUInt32BE(20);

    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(w >= 256 ? 0 : w, 0);
    entry.writeUInt8(h >= 256 ? 0 : h, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(pngBuf.length, 8);
    entry.writeUInt32LE(dataOffset, 12);

    dirEntries.push(entry);
    imageDataParts.push(pngBuf);
    dataOffset += pngBuf.length;
  }

  return Buffer.concat([header, ...dirEntries, ...imageDataParts]);
}

generateFavicons().catch((err) => {
  console.error(err);
  process.exit(1);
});
