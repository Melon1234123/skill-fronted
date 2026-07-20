import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const required = ["SKILL.md", "README.md", "references/source-fingerprint.md", "references/signature-system.md", "references/adaptive-art-direction.md", "references/react-vite-engineering.md", "references/media-policy.md", "references/acceptance.md", "templates/vite-showcase-starter/package.json", "templates/vite-showcase-starter/src/App.tsx", "templates/vite-showcase-starter/src/styles.css"];
const missing = required.filter((path) => !existsSync(resolve(root, path)));
if (missing.length) throw new Error("Missing required files:\n" + missing.join("\n"));
const skill = readFileSync(resolve(root, "SKILL.md"), "utf8");
for (const term of ["signature", "adaptive", "starter", "prefers-reduced-motion", "React", "TypeScript", "Vite"]) if (!skill.includes(term)) throw new Error("SKILL.md missing " + term);
const starter = readFileSync(resolve(root, "templates/vite-showcase-starter/src/App.tsx"), "utf8");
for (const term of ["Autodrive", "智驾卫士", "nuScenes", "LiDAR"]) if (starter.includes(term)) throw new Error("Starter contains " + term);
console.log("skill package validation passed");
