const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const publicDir = path.join(__dirname, "public");
const appDir = path.join(__dirname, "src", "app");

// Read the circular SVGs we just created
const darkCircularSvg = fs.readFileSync(path.join(publicDir, "icon.svg"));
const lightCircularSvg = fs.readFileSync(path.join(publicDir, "icon-light.svg"));

async function generateFavicons() {
  console.log("Generating circular favicon assets...\n");

  const darkBuf = Buffer.from(darkCircularSvg);
  const lightBuf = Buffer.from(lightCircularSvg);

  // Apple Touch Icon (180x180) - circular dark
  await sharp(darkBuf)
    .resize(180, 180)
    .png({ quality: 100 })
    .toFile(path.join(appDir, "apple-icon.png"));
  await sharp(darkBuf)
    .resize(180, 180)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, "apple-icon.png"));
  console.log("✓ apple-icon.png (180x180)");

  // Android Chrome icons - circular dark
  await sharp(darkBuf)
    .resize(192, 192)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, "android-chrome-192x192.png"));
  console.log("✓ android-chrome-192x192.png");

  await sharp(darkBuf)
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, "android-chrome-512x512.png"));
  console.log("✓ android-chrome-512x512.png");

  // Standard PNG sizes - circular dark
  for (const size of [16, 32, 48, 96, 128, 192, 256, 384, 512]) {
    await sharp(darkBuf)
      .resize(size, size)
      .png({ quality: 100 })
      .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));
    console.log(`✓ favicon-${size}x${size}.png`);
  }

  // Light mode PNG
  await sharp(lightBuf)
    .resize(32, 32)
    .png({ quality: 100 })
    .toFile(path.join(publicDir, "favicon-light-32x32.png"));
  console.log("✓ favicon-light-32x32.png");

  // Generate ICO (fallback only) - use higher res source for better quality
  const ico16 = await sharp(darkBuf).resize(16, 16).png().toBuffer();
  const ico32 = await sharp(darkBuf).resize(32, 32).png().toBuffer();
  const ico48 = await sharp(darkBuf).resize(48, 48).png().toBuffer();

  const icoBuffer = buildIco([ico16, ico32, ico48]);
  fs.writeFileSync(path.join(appDir, "favicon.ico"), icoBuffer);
  fs.writeFileSync(path.join(publicDir, "favicon.ico"), icoBuffer);
  console.log("✓ favicon.ico (16, 32, 48 - fallback only)");

  console.log("\n✅ All circular favicon assets generated!");
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

generateFavicons().catch(console.error);
