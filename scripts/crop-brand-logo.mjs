import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/**
 * Source artboards are 1500² with boat + wordmark near y≈620.
 * Boat placement differs between the two official files — crop each tightly.
 */
const logos = [
  {
    // White marks for dark header glass
    src: path.join("Strideship logos", "strideship black transparent bg.svg"),
    out: path.join("public", "brand-logo.svg"),
    view: "180 620 1180 250",
  },
  {
    // Black marks for light footer (boat sits further left in this file)
    src: path.join("Strideship logos", "strideship white transparent bg.svg"),
    out: path.join("public", "brand-logo-dark.svg"),
    view: "40 610 1220 260",
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
