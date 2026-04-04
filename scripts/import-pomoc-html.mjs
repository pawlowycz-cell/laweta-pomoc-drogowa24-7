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

// Top bar: full-width strip, message left / phone chip right (TOPBAR-STRIP)
if (!html.includes('TOPBAR-STRIP')) {
  html = html.replace(
    /\/\* TOPBAR \*\/\s*\.topbar\{[^}]+\}\s*\.topbar a\{[^}]+\}/,
    `/* TOPBAR — layout (TOPBAR-STRIP) */
.topbar{background:var(--r);padding:0;font-family:'Oswald',sans-serif;animation:pulse 2.5s ease infinite;width:100%}
.topbar-inner{max-width:1100px;margin:0 auto;padding:10px 20px;display:flex;align-items:center;justify-content:space-between;gap:16px 24px;flex-wrap:wrap}
.topbar-msg{color:#fff;font-size:.82rem;font-weight:600;letter-spacing:.06em;text-transform:uppercase;line-height:1.35;flex:1 1 auto;min-width:min(100%,220px)}
.topbar-dial{display:inline-flex;align-items:center;gap:8px;flex-shrink:0;color:#fff!important;text-decoration:none;font-weight:700;font-size:.88rem;letter-spacing:.04em;white-space:nowrap;padding:7px 16px;border-radius:999px;background:rgba(0,0,0,.22);border:1px solid rgba(255,255,255,.38);transition:background .2s,border-color .2s,transform .15s}
.topbar-dial:hover{background:rgba(0,0,0,.38);border-color:rgba(255,255,255,.6);transform:translateY(-1px)}
.topbar-dial-ico{line-height:1}
.topbar-dial-num{letter-spacing:.03em}`
  );
}
if (!html.includes('<div class="topbar-inner" id="tb">')) {
  html = html.replace(
    /<div class="topbar"><span id="tb">[\s\S]*?<\/span><\/div>/,
    `<div class="topbar"><div class="topbar-inner" id="tb"><span class="topbar-msg">🚨 Pracujemy 24/7 — Warszawa i cała Polska 🚨</span><a class="topbar-dial" href="tel:+48506001057"><span class="topbar-dial-ico">📞</span><span class="topbar-dial-num">+48 506 001 057</span></a></div></div>`
  );
}
if (!html.includes('.topbar-inner{justify-content:center')) {
  html = html.replace(
    /\.hamburger\{ display:flex; \}\s*\n/,
    `.hamburger{ display:flex; }\n  .topbar-inner{justify-content:center;text-align:center}\n  .topbar-msg{text-align:center;flex:1 1 100%}\n`
  );
}

// Hero: real tow truck image instead of emoji
if (!html.includes('hero-tow-truck.png')) {
  html = html.replace(
    /<div class="hero-truck">\s*🚛\s*<\/div>/,
    '<div class="hero-truck"><img class="hero-truck-img" src="/images/hero-tow-truck.png" width="640" height="360" alt="Laweta Warszawa — pomoc drogowa 24/7" decoding="async" fetchpriority="high"></div>'
  );
}
if (!html.includes('.hero-truck-img{')) {
  html = html.replace(
    /\.hero-truck\{font-size:clamp\(5rem[^}]+\}/,
    `.hero-truck{animation:fl 3s ease-in-out infinite;line-height:0;display:flex;align-items:center;justify-content:center}
.hero-truck-img{width:min(100%,420px);max-width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 14px 32px rgba(0,0,0,.5))}`
  );
}

// Desktop hero: image sizing (not emoji font-size)
if (html.includes('DESKTOP / TABLET WIDE') && html.includes('font-size:clamp(4.5rem,9vw,7.5rem)')) {
  html = html.replace(
    /\.hero-truck\{\s*flex-shrink:0;\s*align-self:center;\s*font-size:clamp\(4\.5rem,9vw,7\.5rem\);\s*line-height:1;\s*\}/,
    `.hero-truck{ flex-shrink:0; align-self:center; }\n  .hero-truck-img{ width:min(100%,min(520px,42vw)); }`
  );
}

// i18n topbar HTML (innerHTML on #tb)
const TB_PL =
  '<span class="topbar-msg">🚨 Pracujemy 24/7 — Warszawa i cała Polska 🚨</span><a class="topbar-dial" href="tel:+48506001057"><span class="topbar-dial-ico">📞</span><span class="topbar-dial-num">+48 506 001 057</span></a>';
const TB_EN =
  '<span class="topbar-msg">🚨 Working 24/7 — Warsaw &amp; all Poland 🚨</span><a class="topbar-dial" href="tel:+48506001057"><span class="topbar-dial-ico">📞</span><span class="topbar-dial-num">+48 506 001 057</span></a>';
const TB_RU =
  '<span class="topbar-msg">🚨 Работаем 24/7 — Варшава и вся Польша 🚨</span><a class="topbar-dial" href="tel:+48506001057"><span class="topbar-dial-ico">📞</span><span class="topbar-dial-num">+48 506 001 057</span></a>';

html = html.replace(/tb:'🚨 Pracujemy 24\/7[^']*'/, `tb:'${TB_PL}'`);
html = html.replace(/tb:'🚨 Working 24\/7[^']*'/, `tb:'${TB_EN}'`);
html = html.replace(/tb:'🚨 Работаем 24\/7[^']*'/, `tb:'${TB_RU}'`);

// Nav: languages + phone card (replace pomoc defaults; no duplicate CSS)
const NAV_CLUSTER_CSS = `.nav-actions{display:flex;align-items:center;gap:10px 14px;flex-shrink:0}
.lang-sw{display:flex;gap:5px;align-items:center;flex-shrink:0}
.lang-btn{background:none;border:1px solid rgba(255,200,0,.3);border-radius:6px;cursor:pointer;padding:4px 7px;display:flex;align-items:center;gap:4px;font-family:'Oswald',sans-serif;font-size:.65rem;color:rgba(255,255,255,.55);letter-spacing:.04em;transition:all .2s;flex-shrink:0;line-height:1}
.lang-btn:hover,.lang-btn.active{background:var(--y);color:var(--k);border-color:var(--y)}
.lang-btn .fl{font-size:.95rem;line-height:1}
.nav-phone{background:linear-gradient(180deg,var(--y) 0%,var(--y2) 100%);color:var(--k);font-family:'Oswald',sans-serif;text-decoration:none;display:inline-flex;align-items:center;gap:10px;flex-shrink:0;padding:8px 14px;border-radius:10px;border:1px solid rgba(0,0,0,.12);box-shadow:0 2px 14px rgba(255,215,0,.22);transition:transform .15s,box-shadow .2s;white-space:normal}
.nav-phone:hover{background:linear-gradient(180deg,var(--y2) 0%,#e6b800 100%);box-shadow:0 4px 18px rgba(255,215,0,.35);transform:translateY(-1px)}
.nav-phone-icon{font-size:1.2rem;line-height:1;filter:drop-shadow(0 1px 0 rgba(255,255,255,.4))}
.nav-phone-text{display:flex;flex-direction:column;align-items:flex-start;gap:1px;line-height:1.1;text-align:left}
.nav-phone-tag{font-size:.58rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;opacity:.88;color:rgba(0,0,0,.55)}
.ph-num{font-size:1.02rem;font-weight:800;letter-spacing:.08em;font-variant-numeric:tabular-nums}`;
const NAV_POMOC_CLUSTER =
  /\.lang-sw\{display:flex;gap:4px[^}]+\}\s*\.lang-btn\{[^}]+\}\s*\.lang-btn:hover,.lang-btn\.active\{[^}]+\}\s*\.lang-btn \.fl\{[^}]+\}\s*\.nav-phone\{[^}]+\}\s*\.nav-phone:hover\{[^}]+\}/;
if (!html.includes('nav-phone-text')) {
  if (NAV_POMOC_CLUSTER.test(html)) {
    html = html.replace(NAV_POMOC_CLUSTER, NAV_CLUSTER_CSS);
  }
  html = html.replace(
    /<div style="display:flex;align-items:center;gap:8px;flex-shrink:0">/g,
    '<div class="nav-actions">'
  );
  html = html.replace(
    /<a href="tel:\+48506001057" class="nav-phone">📞 <span class="ph-num">506-001-057<\/span><\/a>/,
    '<a href="tel:+48506001057" class="nav-phone" aria-label="Zadzwoń 506 001 057"><span class="nav-phone-icon" aria-hidden="true">📞</span><span class="nav-phone-text"><span class="nav-phone-tag">24/7</span><span class="ph-num">506-001-057</span></span></a>'
  );
  html = html.replace(/\.nav-phone span\{ display:none; \}/, '.nav-phone .nav-phone-text{ display:none; }');
}

fs.writeFileSync(dst, html);
console.log('Wrote', dst, '(' + html.length + ' bytes)');
