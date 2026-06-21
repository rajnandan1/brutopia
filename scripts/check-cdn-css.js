const fs = require("fs");

const cssPath = "dist/assets/compiled/css/app.css";

if (!fs.existsSync(cssPath)) {
  console.error(
    `Missing ${cssPath}. Keep this path stable for CDN users: https://cdn.jsdelivr.net/gh/rajnandan1/brutopia@latest/${cssPath}`
  );
  process.exit(1);
}

const css = fs.readFileSync(cssPath, "utf8");
const containerGutterMatch = /\.container,[\s\S]*?\{[\s\S]*?--bs-gutter-x:\s*([^;]+);/.exec(css);
const rowGutterMatch = /\.row\s*\{[\s\S]*?--bs-gutter-x:\s*([^;]+);/.exec(css);

if (!containerGutterMatch || !rowGutterMatch) {
  console.error("Unable to locate container/row gutter variables in app.css.");
  process.exit(1);
}

const containerGutter = containerGutterMatch[1].trim();
const rowGutter = rowGutterMatch[1].trim();

if (containerGutter !== rowGutter) {
  console.error(
    `Container gutter (${containerGutter}) and row gutter (${rowGutter}) do not match. This can reintroduce mobile overflow.`
  );
  process.exit(1);
}

console.log(
  `CDN stylesheet contract OK: ${cssPath} exists and keeps container/row gutter aligned (${rowGutter}).`
);
