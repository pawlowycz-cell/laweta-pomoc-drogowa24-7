import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.join(__dirname, '..');
const src = process.argv[2] || path.join(process.env.HOME, 'Downloads/pomoc-drogowa-warszawa (5).html');
const dst = path.join(SITE_ROOT, 'index.html');

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

// Remove base64 logo injector from fresh pomoc (we use /images/logo-hazard.png in markup)
{
  const logoStart = '// ---- LOGO — load immediately ----';
  const logoEnd = '// ---- AUTO LANGUAGE DETECTION ----';
  const i = html.indexOf(logoStart);
  const j = html.indexOf(logoEnd);
  if (i !== -1 && j !== -1 && j > i) {
    const lineStart = html.lastIndexOf('\n', i) + 1;
    html = html.slice(0, lineStart) + html.slice(j);
  }
}

// Nav: ASSISTANCE + SVG triangle only (no text baked into raster)
const NAV_LOGO_ASSISTANCE =
  '<a href="#" class="nav-logo" aria-label="ASSISTANCE — pomoc drogowa 24/7"><img id="logo-img" class="nav-logo-img" src="/images/warning-triangle.svg" width="59" height="57" alt="" decoding="async"><span class="nav-logo-word">ASSISTANCE</span></a>';
if (!html.includes('nav-logo-word')) {
  html = html.replace(/<a href="#" class="nav-logo"[^>]*>ASSISTANCE<\/a>/, NAV_LOGO_ASSISTANCE);
}
if (!html.includes('.nav-logo-word')) {
  html = html.replace(
    /\.nav-logo\{flex-shrink:0;min-width:0\}\s*\.nav-logo img\{[^}]+\}/,
    `.nav-logo{display:flex;align-items:center;gap:10px 12px;text-decoration:none;color:var(--y);flex-shrink:0;min-width:0}
.nav-logo-img{height:46px;width:auto;max-height:52px;object-fit:contain;display:block;flex-shrink:0}
.nav-logo-word{font-family:'Oswald',sans-serif;font-size:clamp(1.05rem,2.5vw,1.35rem);font-weight:700;letter-spacing:.14em;color:var(--y);line-height:1;white-space:nowrap}`
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
  .hero-copy{ flex:1 1 42%; min-width:min(13rem,100%); max-width:640px; }
  .hero-sub{ margin-left:0; margin-right:0; max-width:none; }
  .badges, .cta{ justify-content:flex-start; }
  .hero-truck{ flex:0 0 auto; align-self:center; min-width:min(200px,38vw); display:flex; }
  .hero-truck-img{ width:min(100%,min(520px,42vw)); display:block; height:auto; }
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
.topbar-inner{max-width:1100px;margin:0 auto;padding:12px 22px;min-height:44px;display:flex;align-items:center;justify-content:space-between;gap:16px 28px;flex-wrap:wrap}
.topbar-msg{color:#fff;font-size:.84rem;font-weight:600;letter-spacing:.055em;text-transform:uppercase;line-height:1.4;flex:1 1 auto;min-width:min(100%,200px)}
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
// Base hero truck: pomoc uses emoji font-size rule; always rewrite if still present (desktop mq may already add .hero-truck-img)
if (/\.hero-truck\{font-size:clamp\(5rem/.test(html)) {
  html = html.replace(
    /\.hero-truck\{font-size:clamp\(5rem[^}]+\}/,
    `.hero-truck{animation:fl 3s ease-in-out infinite;line-height:0;display:flex;align-items:center;justify-content:center}
.hero-truck-img{width:min(100%,420px);max-width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 14px 32px rgba(0,0,0,.55));vertical-align:middle;display:block}`
  );
}

// Desktop hero: image sizing (not emoji font-size)
if (html.includes('DESKTOP / TABLET WIDE') && html.includes('font-size:clamp(4.5rem,9vw,7.5rem)')) {
  html = html.replace(
    /\.hero-truck\{\s*flex-shrink:0;\s*align-self:center;\s*font-size:clamp\(4\.5rem,9vw,7\.5rem\);\s*line-height:1;\s*\}/,
    `.hero-truck{ flex:0 0 auto; align-self:center; min-width:min(200px,38vw); display:flex; }\n  .hero-truck-img{ width:min(100%,min(520px,42vw)); display:block; height:auto; }`
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

// Hero: align-items:center in a column flex shrinks .hero-copy to content width (broken RU wraps)
html = html.replace(
  /\.hero-inner\{max-width:1100px;margin:0 auto;display:flex;flex-direction:column;align-items:center;text-align:center;gap:0;position:relative;z-index:2;width:100%\}/,
  '.hero-inner{max-width:1100px;margin:0 auto;display:flex;flex-direction:column;align-items:stretch;text-align:center;gap:0;position:relative;z-index:2;width:100%;min-width:0}'
);
if (!html.includes('.hero-copy{width:100%')) {
  html = html.replace(
    /(\.hero-inner\{[^}]+\})\n(\.hero-h1\{font-family:)/,
    '$1\n.hero-copy{width:100%;max-width:100%;min-width:0;box-sizing:border-box}\n$2'
  );
}
if (!html.includes('max-width:min(100%,36rem)')) {
  html = html.replace(
    /\.hero-sub\{font-size:\.95rem;color:rgba\(255,255,255,\.72\);margin:14px 0 22px;line-height:1\.65;max-width:560px\}/,
    '.hero-sub{font-size:.95rem;color:rgba(255,255,255,.72);margin:14px auto 22px;line-height:1.65;max-width:min(100%,36rem);width:100%;box-sizing:border-box;hyphens:none;word-break:normal;overflow-wrap:normal}'
  );
}
html = html.replace(
  /\.hero-truck-img\{width:min\(100%,420px\);max-width:100%;height:auto;object-fit:contain;filter:drop-shadow\(0 14px 32px rgba\(0,0,0,\.5\)\)\}/,
  '.hero-truck-img{width:min(100%,420px);max-width:100%;height:auto;object-fit:contain;filter:drop-shadow(0 14px 32px rgba(0,0,0,.55));vertical-align:middle}'
);
if (!html.includes('margin-top:28px')) {
  html = html.replace(
    /\.hero-truck\{ display:none; \}/,
    '.hero-truck{ display:flex; margin-top:28px; justify-content:center; align-self:center; width:100%; }\n  .hero-truck-img{ width:min(100%,min(92vw,420px)); }'
  );
}

// Desktop hero: min-width:0 on .hero-copy lets flex shrink text to ~1ch (broken Cyrillic)
html = html.replace(
  /\.hero-copy\{ flex:1; min-width:0; max-width:640px; \}/g,
  '.hero-copy{ flex:1 1 42%; min-width:min(13rem,100%); max-width:640px; }'
);
html = html.replace(
  /\.hero-sub\{[^}]*overflow-wrap:break-word\}/,
  (m) => m.replace('overflow-wrap:break-word', 'word-break:normal;overflow-wrap:normal')
);

// Nav / top bar rhythm (pomoc ships tighter defaults)
html = html.replace(
  /nav\{background:var\(--k\);border-bottom:3px solid var\(--y\);position:sticky;top:0;z-index:999;padding:0 10px;width:100%\}/,
  'nav{background:var(--k);border-bottom:3px solid var(--y);position:sticky;top:0;z-index:999;padding:0 16px;width:100%}'
);
html = html.replace(
  /\.nav-inner\{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;height:60px;gap:6px;width:100%\}/,
  '.nav-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;min-height:60px;gap:12px 20px;width:100%}'
);
html = html.replace(
  /\.nav-menu\{display:flex;align-items:center;gap:2px;list-style:none\}/,
  '.nav-menu{display:flex;align-items:center;gap:4px;list-style:none;flex:1 1 auto;justify-content:center;min-width:0;margin:0 8px}'
);
html = html.replace(
  /\.nav-actions\{display:flex;align-items:center;gap:10px 14px;flex-shrink:0\}/,
  '.nav-actions{display:flex;align-items:center;gap:12px 16px;flex-shrink:0;margin-left:auto}'
);

fs.writeFileSync(dst, html);
console.log('Wrote', dst, '(' + html.length + ' bytes)');
