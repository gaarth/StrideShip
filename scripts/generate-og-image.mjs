import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const publicDir = path.join(root, "public");

const W = 1200;
const H = 630;

async function main() {
  const logoSvg = fs.readFileSync(path.join(publicDir, "brand-logo-dark.svg"));
  const logoPng = await sharp(logoSvg)
    .resize({ width: 520, height: 110, fit: "inside" })
    .png()
    .toBuffer();

  const logoMeta = await sharp(logoPng).metadata();
  const logoW = logoMeta.width ?? 520;
  const logoH = logoMeta.height ?? 110;
  const logoX = Math.round((W - logoW) / 2);
  const logoY = Math.round(H * 0.34);

  const taglineY = logoY + logoH + 56;
  const subY = logoY + logoH + 100;

  const svg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="g" cx="50%" cy="42%" r="58%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.95"/>
      <stop offset="50%" stop-color="#F5F4F0" stop-opacity="1"/>
      <stop offset="100%" stop-color="#E8E6DF" stop-opacity="1"/>
    </radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="50%" y="${taglineY}" text-anchor="middle"
    font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="500"
    fill="#475569" letter-spacing="0.4">AI Automation for Indian Logistics</text>
  <text x="50%" y="${subY}" text-anchor="middle"
    font-family="Arial, Helvetica, sans-serif" font-size="18"
    fill="#94A3B8">Customs · Freight · Exports</text>
</svg>`);

  const out = path.join(publicDir, "og.png");
  await sharp(svg)
    .composite([{ input: logoPng, left: logoX, top: logoY }])
    .png({ compressionLevel: 9 })
    .toFile(out);

  // Keep legacy filename in sync so old crawler references update
  await sharp(out).toFile(path.join(publicDir, "og-image.png"));

  const meta = await sharp(out).metadata();
  console.log("Wrote og.png + og-image.png", meta.width, "x", meta.height);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
