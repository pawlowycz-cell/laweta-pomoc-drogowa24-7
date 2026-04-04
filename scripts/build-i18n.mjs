#!/usr/bin/env node
/**
 * INNSER (warszawa-laweta.com): исходники в корне репо — innser-v6.html, assets/, public/.
 * Сборка в sites/innser/dist/ (Vercel: Root Directory = sites/innser).
 * sites/innser/vercel.json в git: мост laweta-pomoc-* → warszawa-laweta.com (без laweta-warszawa.net).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
/** Куда кладём готовый сайт INNSER (не смешивать с laweta-warszawa.net). */
const INNSER_DIST_ROOT = path.join(REPO_ROOT, 'sites', 'innser');
const SRC = path.join(REPO_ROOT, 'innser-v6.html');
const OUT = path.join(INNSER_DIST_ROOT, 'dist');
const ASSETS_SRC = path.join(REPO_ROOT, 'assets');
const IMAGES_SRC = path.join(REPO_ROOT, 'images');
/** Файлы из этой папки копируются в корень dist/ (например google123….html для Search Console). */
const PUBLIC_SRC = path.join(REPO_ROOT, 'public');

const SITE = 'https://www.warszawa-laweta.com';
/**
 * Мост SEO: laweta-pomoc-drogowa24-7 → канонический INNSER (www.warszawa-laweta.com), путь сохраняется.
 * laweta-warszawa.net — отдельный сайт (визитка в web/), проект из корня репо, не этот dist.
 */
const LEGACY_SITE_HOSTS = [
  'laweta-pomoc-drogowa24-7.com',
  'www.laweta-pomoc-drogowa24-7.com',
];
/** Open Graph / Twitter — innser-logo.png (окремо від favicon). */
const OG_IMAGE_PATH = '/assets/innser-logo.png';
const OG_IMAGE_WIDTH = '1024';
const OG_IMAGE_HEIGHT = '811';
/** Вкладка браузера та іконка в Google — PNG трикутника. ?v= ламає кеш після заміни файлу. */
const FAVICON_PATH = '/assets/favicon-triangle-alert.png';
const FAVICON_CACHE_BUST = '11';
const FAVICON_MIME = 'image/png';
const faviconHref = () => `${FAVICON_PATH}?v=${FAVICON_CACHE_BUST}`;
const appleTouchHref = () => faviconHref();

const LOCALES = {
  pl: {
    pathSeg: 'pl',
    htmlLang: 'pl',
    cl: 'pl',
    title: 'INNSER — Pomoc Drogowa Warszawa 24h | Holowanie | Awaryjne Odpalanie | Wymiana Koła',
    description:
      'Pomoc drogowa Warszawa 24/7 + laweta i holowanie. TANIO I RZETELNIE: szybki dojazd (~30 min), uczciwa wycena. 506-001-057.',
    ogTitle: 'INNSER — Pomoc Drogowa Warszawa 24h | Holowanie | Odpalanie',
    ogDescription:
      'Profesjonalna pomoc drogowa Warszawa 24/7 — tania laweta, tanie holowanie, autolaweta HDS, holowanie powypadkowe, skup aut, złomowanie pojazdów. Odpalanie, wymiana koła, otwieranie aut. Zadzwoń: 506-001-057',
    ogLocale: 'pl_PL',
    twitterTitle: 'INNSER — Pomoc Drogowa Warszawa 24h',
    twitterDescription:
      'Tania pomoc drogowa i tania laweta Warszawa — holowanie, autolaweta HDS, skup aut, złomowanie, odpalanie, wymiana koła 24/7. Zadzwoń: 506-001-057',
    ogImageAlt: 'INNSER — logo pomocy drogowej Warszawa 24/7',
  },
  en: {
    pathSeg: 'en',
    htmlLang: 'en',
    cl: 'en',
    title: 'INNSER — Roadside Assistance Warsaw 24h | Towing | Jump Start | Tire Change',
    description:
      'Roadside assistance Warsaw 24/7 + towing & flatbed. CHEAP & RELIABLE: fast arrival (~30 min), fair quote. Call 506-001-057.',
    ogTitle: 'INNSER — Roadside Assistance Warsaw 24h | Towing',
    ogDescription:
      'Professional roadside assistance Warsaw 24/7 — cheap tow truck, flatbed HDS, accident recovery, cash for cars, vehicle scrapping. Jump start, tire change, lockout. Call: 506-001-057',
    ogLocale: 'en_US',
    twitterTitle: 'INNSER — Roadside Assistance Warsaw 24h',
    twitterDescription:
      'Affordable tow truck and flatbed Warsaw — towing, HDS flatbed, car purchase, scrapping, jump start, tire change 24/7. Call: 506-001-057',
    ogImageAlt: 'INNSER — roadside assistance Warsaw logo',
  },
  ru: {
    pathSeg: 'ru',
    htmlLang: 'ru',
    cl: 'ru',
    title:
      'Эвакуатор Варшава 24/7 | Помощь на дороге | Лавета Варшава — INNSER',
    description:
      'Лавета - Эвакуатор Варшава 24/7. ДЁШЕВО И НАДЁЖНО: Тел. 506-001-057. Круглосуточно — ЗВОНИТЕ',
    ogTitle: 'INNSER — Эвакуатор Варшава 24/7 | Прикур кабелями и бустером',
    ogDescription:
      'Эвакуатор и помощь на дороге Варшава 24/7: прикурить машину кабелями, прикурить бустером, эвакуация, автовоз HDS, скупка авто, утилизация, замена колеса. Звоните: 506-001-057',
    ogLocale: 'ru_RU',
    twitterTitle: 'INNSER — Эвакуатор Варшава 24/7 | Прикур',
    twitterDescription:
      'Варшава: прикур кабелями, прикур бустером, эвакуатор HDS, эвакуация, скупка авто, утилизация, замена колеса 24/7. 506-001-057',
    ogImageAlt: 'INNSER — логотип помощи на дороге Варшава 24/7',
  },
  uk: {
    pathSeg: 'uk',
    htmlLang: 'uk',
    cl: 'ua',
    title:
      'INNSER — Цілодобовий евакуатор Варшава | Доступні ціни | Допомога на дорозі 24/7',
    description:
      'Допомога на дорозі Варшава 24/7 + евакуатор/лафета. ДЕШЕВО ТА НАДІЙНО: швидкий приїзд (~30 хв), чесна ціна. 506-001-057.',
    ogTitle: 'INNSER — Цілодобовий евакуатор Варшава | Доступні ціни 24/7',
    ogDescription:
      'Цілодобовий евакуатор у Варшаві. Доступні ціни на послуги евакуатора й допомогу на дорозі — швидко та безпечно. Прикурити авто, лафета HDS, викуп авто. 506-001-057, 24/7, виїзд до 500 км.',
    ogLocale: 'uk_UA',
    twitterTitle: 'INNSER — Евакуатор Варшава цілодобово | Доступні ціни',
    twitterDescription:
      'Варшава: цілодобовий евакуатор, доступні ціни на послуги евакуатора й допомогу на дорозі — 24/7. 506-001-057',
    ogImageAlt: 'INNSER — логотип допомоги на дорозі Варшава 24/7',
  },
};

const AUTO_DETECT_SNIPPET = `  // Auto-detect browser language (URL path wins for /{lang}/blog/…, /{lang}/svcN/)
var route0 = parsePathToPage();
var list = (typeof navigator.languages !== 'undefined' && navigator.languages && navigator.languages.length) ? Array.prototype.slice.call(navigator.languages) : [navigator.language || navigator.userLanguage || 'en'];
var detectedLang = 'en';
for (var ri = 0; ri < list.length; ri++) {
  var userLang = String(list[ri] || '').toLowerCase();
  if (userLang.startsWith('ru')) { detectedLang = 'ru'; break; }
  if (userLang.startsWith('uk') || userLang.startsWith('ua')) { detectedLang = 'ua'; break; }
  if (userLang.startsWith('pl')) { detectedLang = 'pl'; break; }
}
var startLang = route0 ? (route0.langSeg === 'uk' ? 'ua' : route0.langSeg) : detectedLang;
SL(startLang);
renderAreas(startLang);`;

function fixedLangSnippet(cl) {
  return `  // Locale fixed for this URL (/${cl === 'ua' ? 'uk' : cl}/)
var PAGE_FIXED_LANG = '${cl}';
SL(PAGE_FIXED_LANG);
renderAreas(PAGE_FIXED_LANG);`;
}

function hreflangBlock(canonicalUrl) {
  const lines = [
    `<link rel="canonical" id="innser-canonical" href="${canonicalUrl}">`,
    `<link rel="alternate" id="innser-href-pl" hreflang="pl" href="${SITE}/pl/">`,
    `<link rel="alternate" id="innser-href-en" hreflang="en" href="${SITE}/en/">`,
    `<link rel="alternate" id="innser-href-ru" hreflang="ru" href="${SITE}/ru/">`,
    `<link rel="alternate" id="innser-href-uk" hreflang="uk" href="${SITE}/uk/">`,
    `<link rel="alternate" id="innser-href-xdefault" hreflang="x-default" href="${SITE}/pl/">`,
  ];
  return lines.join('\n');
}

/** Один и тот же SPA-файл отдаётся на все пути; без этого в сыром HTML каноникал = только главная локали → GSC «каноникал от пользователя отсутствует». */
function patchHtmlSeoForTail(html, localePathSeg, tail) {
  const trimmed = String(tail).replace(/^\/+|\/+$/g, '');
  function loc(langSeg) {
    return `${SITE}/${langSeg}/${trimmed}/`;
  }
  const block = [
    `<link rel="canonical" id="innser-canonical" href="${loc(localePathSeg)}">`,
    `<link rel="alternate" id="innser-href-pl" hreflang="pl" href="${loc('pl')}">`,
    `<link rel="alternate" id="innser-href-en" hreflang="en" href="${loc('en')}">`,
    `<link rel="alternate" id="innser-href-ru" hreflang="ru" href="${loc('ru')}">`,
    `<link rel="alternate" id="innser-href-uk" hreflang="uk" href="${loc('uk')}">`,
    `<link rel="alternate" id="innser-href-xdefault" hreflang="x-default" href="${loc('pl')}">`,
  ].join('\n');
  let out = html.replace(
    /<!--innser-seo-links-->[\s\S]*?<!--\/innser-seo-links-->/,
    `<!--innser-seo-links-->\n${block}\n<!--/innser-seo-links-->`
  );
  out = out.replace(
    /<meta property="og:url" id="innser-og-url" content="[^"]*">/,
    `<meta property="og:url" id="innser-og-url" content="${loc(localePathSeg)}">`
  );
  return out;
}

function writeDeepRouteHtmlCopies(raw) {
  const blogSlugs = discoverBlogPostSlugs(raw);
  const svcIds = discoverSvcPageIds(raw);
  const tails = ['blog', ...blogSlugs.map((b) => `blog/${b}`), ...svcIds];
  let n = 0;
  for (const key of Object.keys(LOCALES)) {
    const L = LOCALES[key];
    const seg = L.pathSeg;
    const basePath = path.join(OUT, seg, 'index.html');
    const baseHtml = fs.readFileSync(basePath, 'utf8');
    for (const tail of tails) {
      const parts = tail.split('/');
      const dir = path.join(OUT, seg, ...parts);
      fs.mkdirSync(dir, { recursive: true });
      const html = patchHtmlSeoForTail(baseHtml, seg, tail);
      fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
      n++;
    }
  }
  console.log(
    `Wrote ${n} deep-route copies (${Object.keys(LOCALES).length} locales × routes) — canonical + hreflang в static HTML`
  );
}

function buildLocaleHtml(raw, key) {
  const L = LOCALES[key];
  const url = `${SITE}/${L.pathSeg}/`;

  let html = raw;

  html = html.replace(/<html lang="[^"]*">/, `<html lang="${L.htmlLang}">`);

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${L.title.replace(/</g, '&lt;')}</title>`
  );

  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${L.description.replace(/"/g, '&quot;')}">`
  );

  html = html.replace(
    /<!--innser-seo-links-->[\s\S]*?<!--\/innser-seo-links-->/,
    `<!--innser-seo-links-->\n${hreflangBlock(url)}\n<!--/innser-seo-links-->`
  );

  html = html.replace(
    /<meta property="og:title" content="[^"]*">/,
    `<meta property="og:title" content="${L.ogTitle.replace(/"/g, '&quot;')}">`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*">/,
    `<meta property="og:description" content="${L.ogDescription.replace(/"/g, '&quot;')}">`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*">/,
    `<meta property="og:url" content="${url}">`
  );
  html = html.replace(
    /<meta property="og:locale" content="[^"]*">/,
    `<meta property="og:locale" content="${L.ogLocale}">`
  );

  const ogImgAbs = `${SITE}${OG_IMAGE_PATH}`;
  html = html.replace(
    /<meta property="og:image" content="[^"]*">/,
    `<meta property="og:image" content="${ogImgAbs}">`
  );
  html = html.replace(
    /<meta property="og:image:width" content="[^"]*">/,
    `<meta property="og:image:width" content="${OG_IMAGE_WIDTH}">`
  );
  html = html.replace(
    /<meta property="og:image:height" content="[^"]*">/,
    `<meta property="og:image:height" content="${OG_IMAGE_HEIGHT}">`
  );
  html = html.replace(
    /<meta property="og:image:alt" content="[^"]*">/,
    `<meta property="og:image:alt" content="${L.ogImageAlt.replace(/"/g, '&quot;')}">`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*">/,
    `<meta name="twitter:image" content="${ogImgAbs}">`
  );

  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${L.twitterTitle.replace(/"/g, '&quot;')}">`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${L.twitterDescription.replace(/"/g, '&quot;')}">`
  );

  html = html.replace(
    new RegExp(`^let CL='pl';`, 'm'),
    `let CL='${L.cl}';`
  );

  html = html.replace(AUTO_DETECT_SNIPPET, fixedLangSnippet(L.cl));

  return html;
}

function writeRootRedirect() {
  const ogImg = `${SITE}${OG_IMAGE_PATH}`;
  const redirectHtml = `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<link rel="icon" href="${faviconHref()}" type="${FAVICON_MIME}">
<link rel="shortcut icon" href="${faviconHref()}" type="${FAVICON_MIME}">
<link rel="apple-touch-icon" href="${appleTouchHref()}" sizes="180x180">
<title>INNSER — Pomoc Drogowa Warszawa 24h | Holowanie | Awaryjne Odpalanie | Wymiana Koła</title>
<meta name="description" content="INNSER — Profesjonalna pomoc drogowa Warszawa i okolice 24/7. Tania laweta, holowanie, autolaweta HDS, skup aut, złomowanie. Odpalanie, wymiana koła, otwieranie aut. Zadzwoń: 506-001-057">
<link rel="canonical" href="${SITE}/pl/">
<meta property="og:title" content="INNSER — Pomoc Drogowa Warszawa 24h | Holowanie | Odpalanie">
<meta property="og:description" content="Profesjonalna pomoc drogowa Warszawa 24/7 — tania laweta, tanie holowanie, autolaweta HDS, holowanie powypadkowe, skup aut, złomowanie pojazdów. Odpalanie, wymiana koła, otwieranie aut. Zadzwoń: 506-001-057">
<meta property="og:type" content="website">
<meta property="og:url" content="${SITE}/pl/">
<meta property="og:locale" content="pl_PL">
<meta property="og:site_name" content="INNSER Pomoc Drogowa">
<meta property="og:image" content="${ogImg}">
<meta property="og:image:width" content="${OG_IMAGE_WIDTH}">
<meta property="og:image:height" content="${OG_IMAGE_HEIGHT}">
<meta property="og:image:alt" content="INNSER — logo pomocy drogowej Warszawa 24/7">
<meta property="og:image:type" content="image/jpeg">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="INNSER — Pomoc Drogowa Warszawa 24h">
<meta name="twitter:description" content="Tania pomoc drogowa i tania laweta Warszawa — holowanie, autolaweta HDS, skup aut, złomowanie, odpalanie, wymiana koła 24/7. Zadzwoń: 506-001-057">
<meta name="twitter:image" content="${ogImg}">
<script>
(function(){
  try{
    var saved = localStorage.getItem('innser_lang');
    if(saved === 'ua') saved = 'uk';
    if(saved && /^(pl|en|ru|uk)$/.test(saved)){
      location.replace('/' + saved + '/');
      return;
    }
  }catch(e){}
  var langs = (typeof navigator.languages !== 'undefined' && navigator.languages && navigator.languages.length) ? Array.prototype.slice.call(navigator.languages) : [navigator.language || navigator.userLanguage || 'pl'];
  var code = 'en';
  for (var li = 0; li < langs.length; li++) {
    var nav = String(langs[li] || '').toLowerCase();
    if (nav.indexOf('ru') === 0) { code = 'ru'; break; }
    if (nav.indexOf('uk') === 0 || nav.indexOf('ua') === 0) { code = 'uk'; break; }
    if (nav.indexOf('pl') === 0) { code = 'pl'; break; }
  }
  location.replace('/' + code + '/');
})();
</script>
<noscript><meta http-equiv="refresh" content="0;url=/pl/"></noscript>
</head>
<body>
<noscript>
  <p><a href="/pl/">INNSER — przejdź do serwisu (PL)</a></p>
  <p><a href="/en/">INNSER — go to site (EN)</a></p>
  <p><a href="/ru/">INNSER — перейти на сайт (RU)</a></p>
  <p><a href="/uk/">INNSER — перейти на сайт (UA)</a></p>
</noscript>
</body>
</html>`;
  fs.writeFileSync(path.join(OUT, 'index.html'), redirectHtml, 'utf8');
}

/** Slugi постов из массива BLOGS: `post:'b1'` — добавили строку в innser-v6.html → пересобрали dist. */
function discoverBlogPostSlugs(html) {
  const set = new Set();
  const re = /post:'(b\d+)'/g;
  let m;
  while ((m = re.exec(html)) !== null) set.add(m[1]);
  return [...set].sort((a, b) => parseInt(a.slice(1), 10) - parseInt(b.slice(1), 10));
}

/** Страницы услуг: `id="p-svc7"` — новая услуга в HTML → после `node scripts/build-i18n.mjs` попадёт в sitemap и _redirects. */
function discoverSvcPageIds(html) {
  const set = new Set();
  const re = /id="p-(svc\d+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) set.add(m[1]);
  return [...set].sort(
    (a, b) => parseInt(a.replace(/^svc/, ''), 10) - parseInt(b.replace(/^svc/, ''), 10)
  );
}

/** Google sitemap: главные URL, блог, посты и услуги из innser-v6.html × 4 языка; в каждом url — hreflang */
function writeSitemapAndRobots(html) {
  const lastmod = new Date().toISOString().split('T')[0];
  const pathSegs = ['pl', 'en', 'ru', 'uk'];
  const blogSlugs = discoverBlogPostSlugs(html);
  const svcIds = discoverSvcPageIds(html);
  /** @type {(string|null)[]} null = корень локали */
  const tails = [null, 'blog', ...blogSlugs.map((b) => `blog/${b}`), ...svcIds];
  console.log(
    'Sitemap: blog posts',
    blogSlugs.join(', ') || '(none)',
    '| services',
    svcIds.join(', ') || '(none)'
  );

  function locFor(seg, tail) {
    if (tail == null) return `${SITE}/${seg}/`;
    return `${SITE}/${seg}/${tail}/`;
  }

  function alternateBlock(tail) {
    const lines = pathSegs.map(
      (h) =>
        `    <xhtml:link rel="alternate" hreflang="${h}" href="${locFor(h, tail)}"/>`
    );
    lines.push(
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${locFor('pl', tail)}"/>`
    );
    return lines.join('\n');
  }

  function changefreqFor(tail) {
    if (tail == null || tail === 'blog') return 'weekly';
    return 'monthly';
  }

  function priorityFor(tail) {
    if (tail == null) return '1.0';
    if (tail === 'blog') return '0.85';
    if (String(tail).startsWith('blog/')) return '0.75';
    return '0.8';
  }

  const urlChunks = [];
  for (const tail of tails) {
    const alt = alternateBlock(tail);
    const cf = changefreqFor(tail);
    const pr = priorityFor(tail);
    for (const seg of pathSegs) {
      urlChunks.push(`  <url>
    <loc>${locFor(seg, tail)}</loc>
${alt}
    <lastmod>${lastmod}</lastmod>
    <changefreq>${cf}</changefreq>
    <priority>${pr}</priority>
  </url>`);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlChunks.join('\n')}
</urlset>
`;
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), xml, 'utf8');

  const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
  fs.writeFileSync(path.join(OUT, 'robots.txt'), robots, 'utf8');
}

/**
 * Netlify: явные подстановки index.html для /pl, /en, /ru, /uk (иногда без этого — 404 при смене языка).
 * Файл _redirects должен лежать в корне заливки вместе с index.html.
 * Apex↔www не задаём здесь: в Netlify → Domain management основной домен должен совпадать с SITE
 * (https://www.…), иначе встроенный редирект Netlify и правила ниже дают цикл «слишком много перенаправлений».
 */
function writeNetlifyRedirects(html) {
  const svcIds = discoverSvcPageIds(html);
  const lines = [
    '# INNSER i18n — отдаём index.html внутри каждой языковой папки',
    '# SPA: блог и карточки услуг (история + прямые ссылки); svc* из разметки innser-v6.html',
    '# Мост: старые домены → www.warszawa-laweta.com (тот же :splat); laweta-warszawa.net отдельный проект',
  ];
  // Favicon на legacy-хості: той самий PNG без 301 на warszawa-laweta — інакше Google SERP для laweta-pomoc-* тримає стару іконку.
  for (const host of LEGACY_SITE_HOSTS) {
    lines.push(`https://${host}/favicon.ico  ${faviconHref()}  302!`);
  }
  for (const host of LEGACY_SITE_HOSTS) {
    lines.push(`https://${host}/*  ${SITE}/:splat  301!`);
  }
  lines.push(`/favicon.ico  ${faviconHref()}  302`);
  // Legacy /ua → canonical /uk/ (hreflang uk). Absolute URL + trailing slash = один 301 (без /ua/→/uk→/uk/).
  // Порядок: сначала /ua/* и /ua/, потом /ua — иначе Netlify может сопоставить /ua/ с правилом /ua и отдать Location: /uk (второй хоп).
  lines.push(`/ua/*  ${SITE}/uk/:splat  301`);
  lines.push(`/ua/  ${SITE}/uk/  301`);
  lines.push(`/ua  ${SITE}/uk/  301`);
  // Старые URL прежнего сайта/шаблона (product-page, book-online…) — не из innser-v6; 301 на корень локали.
  lines.push('# legacy paths (demo store) → locale home');
  for (const seg of ['pl', 'en', 'ru', 'uk']) {
    lines.push(`/${seg}/book-online  ${SITE}/${seg}/  301`);
    lines.push(`/${seg}/book-online/  ${SITE}/${seg}/  301`);
    lines.push(`/${seg}/category/all-products  ${SITE}/${seg}/  301`);
    lines.push(`/${seg}/category/all-products/  ${SITE}/${seg}/  301`);
    lines.push(`/${seg}/product-page/*  ${SITE}/${seg}/  301`);
  }
  lines.push(`# старый мусорный путь из индекса`);
  lines.push(`/uk/blog/evo1  ${SITE}/uk/blog/  301`);
  lines.push(`/uk/blog/evo1/  ${SITE}/uk/blog/  301`);
  for (const seg of ['pl', 'en', 'ru', 'uk']) {
    lines.push(`/${seg}  /${seg}/index.html  200`);
    lines.push(`/${seg}/  /${seg}/index.html  200`);
    lines.push(`/${seg}/blog  /${seg}/index.html  200`);
    lines.push(`/${seg}/blog/  /${seg}/index.html  200`);
    lines.push(`/${seg}/blog/*  /${seg}/index.html  200`);
    for (const svc of svcIds) {
      lines.push(`/${seg}/${svc}  /${seg}/index.html  200`);
      lines.push(`/${seg}/${svc}/  /${seg}/index.html  200`);
    }
  }
  fs.writeFileSync(path.join(OUT, '_redirects'), lines.join('\n') + '\n', 'utf8');
}

/**
 * Vercel (INNSER): те же SPA/i18n подстановки, что в _redirects.
 * Пишем sites/innser/vercel.json — второй проект Vercel: Root Directory = sites/innser.
 */
function writeVercelProjectJson(html) {
  const svcIds = discoverSvcPageIds(html);
  // Внешний destination: Vercel не подставляет :path* в абсолютный URL — только $1 из группы в source.
  const faviconDest = faviconHref();
  const legacyFaviconFirst = LEGACY_SITE_HOSTS.map((host) => ({
    source: '/favicon.ico',
    has: [{ type: 'host', value: host }],
    destination: faviconDest,
    permanent: false,
  }));
  const legacyRedirects = LEGACY_SITE_HOSTS.flatMap((host) => [
    { source: '/', has: [{ type: 'host', value: host }], destination: `${SITE}/`, permanent: true },
    { source: '/(.*)', has: [{ type: 'host', value: host }], destination: `${SITE}/$1`, permanent: true },
  ]);
  const redirects = [
    ...legacyFaviconFirst,
    ...legacyRedirects,
    { source: '/favicon.ico', destination: faviconDest, permanent: false },
    { source: '/ua/:path*', destination: '/uk/:path*', permanent: true },
    { source: '/ua/', destination: '/uk/', permanent: true },
    { source: '/ua', destination: '/uk/', permanent: true },
  ];
  for (const seg of ['pl', 'en', 'ru', 'uk']) {
    redirects.push(
      { source: `/${seg}/book-online`, destination: `/${seg}/`, permanent: true },
      { source: `/${seg}/book-online/`, destination: `/${seg}/`, permanent: true },
      { source: `/${seg}/category/all-products`, destination: `/${seg}/`, permanent: true },
      { source: `/${seg}/category/all-products/`, destination: `/${seg}/`, permanent: true },
      { source: `/${seg}/product-page/:path*`, destination: `/${seg}/`, permanent: true }
    );
  }
  redirects.push(
    { source: '/uk/blog/evo1', destination: '/uk/blog/', permanent: true },
    { source: '/uk/blog/evo1/', destination: '/uk/blog/', permanent: true }
  );
  const rewrites = [];
  for (const seg of ['pl', 'en', 'ru', 'uk']) {
    rewrites.push({ source: `/${seg}`, destination: `/${seg}/index.html` });
    rewrites.push({ source: `/${seg}/`, destination: `/${seg}/index.html` });
    rewrites.push({ source: `/${seg}/blog`, destination: `/${seg}/index.html` });
    rewrites.push({ source: `/${seg}/blog/`, destination: `/${seg}/index.html` });
    rewrites.push({ source: `/${seg}/blog/:path*`, destination: `/${seg}/index.html` });
    for (const svc of svcIds) {
      rewrites.push({ source: `/${seg}/${svc}`, destination: `/${seg}/index.html` });
      rewrites.push({ source: `/${seg}/${svc}/`, destination: `/${seg}/index.html` });
    }
  }
  const cfg = {
    $schema: 'https://openapi.vercel.sh/vercel.json',
    framework: null,
    buildCommand: 'npm run build',
    outputDirectory: 'dist',
    redirects,
    rewrites,
  };
  fs.writeFileSync(path.join(INNSER_DIST_ROOT, 'vercel.json'), JSON.stringify(cfg, null, 2) + '\n', 'utf8');
}

/** Копирует assets/ в dist/assets — на Netlify заливай только содержимое dist/ (и index.html будет рядом с assets/). */
function copyAssetsIntoDist() {
  if (!fs.existsSync(ASSETS_SRC)) {
    console.warn(
      'Нет папки assets/ рядом с innser-v6.html — картинки галереи не попадут в dist. Добавь assets/gallery/*.png и перезапусти сборку.'
    );
    return;
  }
  const dst = path.join(OUT, 'assets');
  fs.rmSync(dst, { recursive: true, force: true });
  fs.cpSync(ASSETS_SRC, dst, { recursive: true });
  console.log('Copied', path.relative(REPO_ROOT, ASSETS_SRC), '->', path.relative(REPO_ROOT, dst));
}

/** Фото для карточек услуг 7–9: skup-samochodow.png, zlomowanie-pojazdow.png, laweta-warszawa-24h.png */
function copyServiceImagesIntoDist() {
  if (!fs.existsSync(IMAGES_SRC)) {
    console.warn(
      'Нет папки images/ — положи рядом с innser-v6.html: images/skup-samochodow.png, zlomowanie-pojazdow.png, laweta-warszawa-24h.png и пересобери.'
    );
    return;
  }
  const dst = path.join(OUT, 'images');
  fs.rmSync(dst, { recursive: true, force: true });
  fs.cpSync(IMAGES_SRC, dst, { recursive: true });
  console.log('Copied', path.relative(REPO_ROOT, IMAGES_SRC), '->', path.relative(REPO_ROOT, dst));
}

function copyPublicRootFiles() {
  if (!fs.existsSync(PUBLIC_SRC)) return;
  let n = 0;
  for (const name of fs.readdirSync(PUBLIC_SRC)) {
    if (name.startsWith('.')) continue;
    const src = path.join(PUBLIC_SRC, name);
    if (!fs.statSync(src).isFile()) continue;
    fs.copyFileSync(src, path.join(OUT, name));
    console.log('Copied', path.relative(REPO_ROOT, src), '->', path.join(path.relative(REPO_ROOT, OUT), name));
    n++;
  }
}

function main() {
  if (!fs.existsSync(SRC)) {
    console.error('Missing source:', SRC);
    process.exit(1);
  }
  const raw = fs.readFileSync(SRC, 'utf8');
  if (!raw.includes(AUTO_DETECT_SNIPPET)) {
    console.error('Source HTML: auto-detect block not found (file changed?)');
    process.exit(1);
  }

  fs.mkdirSync(OUT, { recursive: true });

  for (const key of Object.keys(LOCALES)) {
    const L = LOCALES[key];
    const dir = path.join(OUT, L.pathSeg);
    fs.mkdirSync(dir, { recursive: true });
    const html = buildLocaleHtml(raw, key);
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
    console.log('Wrote', path.relative(REPO_ROOT, path.join(dir, 'index.html')));
  }

  writeDeepRouteHtmlCopies(raw);

  writeRootRedirect();
  console.log('Wrote', path.relative(REPO_ROOT, path.join(OUT, 'index.html')));

  writeSitemapAndRobots(raw);
  console.log('Wrote', path.relative(REPO_ROOT, path.join(OUT, 'sitemap.xml')));
  console.log('Wrote', path.relative(REPO_ROOT, path.join(OUT, 'robots.txt')));

  writeNetlifyRedirects(raw);
  console.log('Wrote', path.relative(REPO_ROOT, path.join(OUT, '_redirects')));

  writeVercelProjectJson(raw);
  console.log('Wrote', path.relative(REPO_ROOT, path.join(INNSER_DIST_ROOT, 'vercel.json')));

  copyAssetsIntoDist();
  copyServiceImagesIntoDist();
  copyPublicRootFiles();

  console.log(
    '\nNetlify: перетащи на Deploy ОДНУ папку — ВСЁ СОДЕРЖИМОЕ папки dist/ (index.html, pl, en, ru, uk, assets, images, robots.txt, sitemap.xml, _redirects, файлы из public/).'
  );
  console.log('Не оборачивай в лишнюю папку: в корне заливки должен лежать index.html.');
  console.log(
    'Vercel (INNSER): отдельный проект, Root Directory = sites/innser, build: npm run build, output: dist; vercel.json лежит в sites/innser/.'
  );
}

main();
