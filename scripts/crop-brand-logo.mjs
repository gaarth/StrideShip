import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/**
 * Source artboards are 1500² with boat + wordmark near y≈620.
 * Text group is translated to x=425 with a 928-wide clip → ends ~x=1353.
 * Boat placement differs between the two official files.
 */
const logos = [
  {
    // White marks for dark header glass
    src: path.join("Strideship logos", "strideship black transparent bg.svg"),
    out: path.join("public", "brand-logo.svg"),
    // Boat ~188; text to ~1353
    view: "180 620 1200 250",
  },
  {
    // Black marks for light footer
    src: path.join("Strideship logos", "strideship white transparent bg.svg"),
    out: path.join("public", "brand-logo-dark.svg"),
    // Boat ~48; text clip ends ~1353 — previous 1220-wide crop cut off the final "p"
    view: "40 610 1330 260",
  },
];

function makeLogo({ src, out, view }) {
  const srcPath = path.join(root, src);
  const outPath = path.join(root, out);
  const raw = fs.readFileSync(srcPath, "utf8");
  const inner = raw.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
  const parts = view.split(/\s+/);
  const vw = parts[2];
  const vh = parts[3];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${view}" width="${vw}" height="${vh}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="StrideShip">${inner}</svg>\n`;
  fs.writeFileSync(outPath, svg);
  console.log("Wrote", out, `(viewBox ${view})`);
}

for (const logo of logos) makeLogo(logo);
