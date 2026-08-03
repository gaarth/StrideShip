import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));
const svg = fs.readFileSync(path.join(root, "..", "public", "brand-logo-dark.svg"), "utf8");
const vb = svg.match(/viewBox="([^"]+)"/)[1].split(/\s+/).map(Number);
const [vx, vy, vw, vh] = vb;

// Text group transform x=425, clip rect width=928 → hard clip at 425+928=1353 in doc space
const clipMatch = svg.match(/clipPath id="0933a13ab4"[\s\S]*?<rect x="0" width="(\d+)"/);
const textClipW = clipMatch ? Number(clipMatch[1]) : null;
const textGroupX = 425;
const textClipRight = textGroupX + textClipW;

console.log("viewBox:", { vx, vy, vw, vh, rightEdge: vx + vw });
console.log("text clip right (doc coords):", textClipRight);
console.log("margin past clip to viewBox right:", vx + vw - textClipRight);

// Ship path starts around x=48 in white logo file
const boatGroup = svg.match(/transform="matrix\(1, 0, 0, 1, (\d+), 616\)"/);
console.log("boat group x:", boatGroup ? boatGroup[1] : "n/a");
