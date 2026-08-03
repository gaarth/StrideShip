import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const root = path.dirname(fileURLToPath(import.meta.url));
const svgPath = path.join(root, "..", "public", "brand-logo-dark.svg");
const outDir = path.join(root, "..", "public");

async function render(name, svgText) {
  const out = path.join(outDir, name);
  const bg = { r: 255, g: 255, b: 255 };
  const logo = await sharp(Buffer.from(svgText)).resize({ height: 56 }).ensureAlpha().png().toBuffer();
  await sharp({
    create: { width: 320, height: 80, channels: 3, background: bg },
  })
    .composite([{ input: logo, left: 8, top: 12 }])
    .png()
    .toFile(out);
  console.log("wrote", name);
}

const original = fs.readFileSync(svgPath, "utf8");

// Hypothesis B: internal 928px text clip removes final "p"
const noTextClip = original
  .replace(/<clipPath id="0933a13ab4">[\s\S]*?<\/clipPath>/, "")
  .replace(/\sclip-path="url\(#0933a13ab4\)"/g, "")
  .replace(/viewBox="40 610 1330 260"/, 'viewBox="40 610 1380 260"')
  .replace(/width="1330"/, 'width="1380"');

await render("_logo-original.png", original);
await render("_logo-no-clip.png", noTextClip);
