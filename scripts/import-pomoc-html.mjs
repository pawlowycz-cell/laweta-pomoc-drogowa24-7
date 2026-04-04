import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const src = process.argv[2] || path.join(process.env.HOME, 'Downloads/pomoc-drogowa-warszawa (5).html');
const dst = path.join(ROOT, 'web', 'index.html');

if (!fs.existsSync(src)) {
  console.error('Source not found:', src);
  process.exit(1);
}

let html = fs.readFileSync(src, 'utf8');

// Canonical site = laweta-warszawa.net; partner links stay warszawa-laweta.com
html = html.replaceAll('https://www.warszawa-laweta.com/?lang=', 'https://www.laweta-warszawa.net/?lang=');
html = html.replaceAll('href="https://www.warszawa-laweta.com/"', 'href="https://www.laweta-warszawa.net/"');
html = html.replaceAll('content="https://www.warszawa-laweta.com/"', 'content="https://www.laweta-warszawa.net/"');
html = html.replaceAll('"url": "https://www.warszawa-laweta.com/"', '"url": "https://www.laweta-warszawa.net/"');

// Mobile menu JS expects #hamburger
html = html.replace(
  '<div class="hamburger" onclick="toggleMenu()">',
  '<div class="hamburger" id="hamburger" onclick="toggleMenu()">'
);

// Favicon for static deploy
if (!html.includes('favicon.svg')) {
  html = html.replace(
    '<meta charset="UTF-8">',
    '<meta charset="UTF-8">\n  <link rel="icon" href="/favicon.svg" type="image/svg+xml">'
  );
}

fs.writeFileSync(dst, html);
console.log('Wrote', dst, '(' + html.length + ' bytes)');
