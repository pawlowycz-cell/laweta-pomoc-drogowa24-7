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

// Desktop: hide fixed call pill (overlaps hero on wide screens); two-column hero
if (!html.includes('DESKTOP / TABLET WIDE')) {
  html = html.replace(
    '/* MOBILE OVERLAY MENU */',
    `/* ===== DESKTOP / TABLET WIDE — hero row, no floating pill overlap ===== */
@media (min-width:761px){
  .big-phone-pill{ display:none !important; }
  #hero{ padding:72px 24px 80px; }
  .hero-inner{
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    text-align:left;
    gap:40px 56px;
  }
  .hero-copy{ flex:1; min-width:0; max-width:640px; }
  .hero-sub{ margin-left:0; margin-right:0; max-width:none; }
  .badges, .cta{ justify-content:flex-start; }
  .hero-truck{
    flex-shrink:0;
    align-self:center;
    font-size:clamp(4.5rem,9vw,7.5rem);
    line-height:1;
  }
  .hero-bg{ font-size:min(18vw,240px); }
}

/* MOBILE OVERLAY MENU */`
  );
}
if (!html.includes('class="hero-copy"')) {
  html = html.replace(/<div class="hero-inner">\s*<div>/, '<div class="hero-inner">\n    <div class="hero-copy">');
}

fs.writeFileSync(dst, html);
console.log('Wrote', dst, '(' + html.length + ' bytes)');
