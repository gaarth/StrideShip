import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/** Remove clip/mask/filter cruft that clips "Ship" or breaks small renders. */
function sanitizeSvgInner(inner) {
  return inner
    .replace(/<clipPath[\s\S]*?<\/clipPath>/g, "")
    .replace(/<mask[\s\S]*?<\/mask>/g, "")
    .replace(/<filter[\s\S]*?<\/filter>/g, "")
    .replace(/\sclip-path="[^"]*"/g, "")
    .replace(/\smask="[^"]*"/g, "");
}

const logos = [
  {
    src: path.join("Strideship logos", "strideship black transparent bg.svg"),
    out: path.join("public", "brand-logo.svg"),
    view: "180 620 1200 250",
  },
  {
    src: path.join("Strideship logos", "strideship white transparent bg.svg"),
    out: path.join("public", "brand-logo-dark.svg"),
    // Extra right padding — text clip was 928px inside group at x=425
    view: "35 605 1390 270",
  },
];

function makeLogo({ src, out, view }) {
  const srcPath = path.join(root, src);
  const outPath = path.join(root, out);
  const raw = fs.readFileSync(srcPath, "utf8");
  const inner = sanitizeSvgInner(raw.replace(/^<svg[^>]*>/, "").replace(/<\/svg>\s*$/, ""));
  const parts = view.split(/\s+/);
  const vw = parts[2];
  const vh = parts[3];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${view}" width="${vw}" height="${vh}" preserveAspectRatio="xMidYMid meet" role="img" aria-label="StrideShip">${inner}</svg>\n`;
  fs.writeFileSync(outPath, svg);
  console.log("Wrote", out, `(viewBox ${view})`);
}

for (const logo of logos) makeLogo(logo);
