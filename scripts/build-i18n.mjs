#!/usr/bin/env node
/**
 * INNSER (warszawa-laweta.com): исходники в корне репо — innser-v6.html, assets/, public/.
 * Сборка в sites/innser/dist/ (Vercel: Root Directory = sites/innser).
 * sites/innser/vercel.json в git: мост laweta-pomoc-* → warszawa-laweta.com (без laweta-warszawa.net).
 */
import crypto from 'crypto';
import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  buildGalleryJsonLd,
  buildImageSitemapXml,
  collectGalleryItems,
  injectGalleryJsonLd,
  injectGalleryStaticHtml,
} from './gallery-seo.mjs';
import {
  districtSlugs,
  districtBySlug,
  districtsJsonForRuntime,
  getDistrictSeoMeta,
  getDistrictsIndexSeoMeta,
  renderDistrictStaticHtml,
  renderDistrictsIndexStaticHtml,
} from './districts-data.mjs';
import { districtRichJsonForRuntime } from './districts-content.mjs';
import {
  roadSlugs,
  roadsJsonForRuntime,
  getRoadSeoMeta,
  getRoadsIndexSeoMeta,
  renderRoadStaticHtml,
  renderRoadsIndexStaticHtml,
} from './roads-data.mjs';
import { roadRichJsonForRuntime } from './roads-content.mjs';
import { landingGalleryJsonForRuntime, loadLandingGallery } from './landing-photos.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
/** Куда кладём готовый сайт INNSER (не смешивать с laweta-warszawa.net). */
const INNSER_DIST_ROOT = path.join(REPO_ROOT, 'sites', 'innser');
const INNSER_PKG_JSON = path.join(INNSER_DIST_ROOT, 'package.json');
const SRC = path.join(REPO_ROOT, 'innser-v6.html');
const OUT = path.join(INNSER_DIST_ROOT, 'dist');
const ASSETS_SRC = path.join(REPO_ROOT, 'assets');
const IMAGES_SRC = path.join(REPO_ROOT, 'images');
/** Файлы из этой папки копируются в корень dist/ (например google123….html для Search Console). */
const PUBLIC_SRC = path.join(REPO_ROOT, 'public');

const SITE = 'https://www.warszawa-laweta.com';
/** SPA-вкладки меню с отдельным URL (как gallery/blog) — синхрон с INNSER_NAV_PAGES в innser-v6.html */
const NAV_PAGE_TAILS = ['services', 'prices', 'about', 'contact', 'partners'];
const PRIVACY_PAGE_TAIL = 'polityka-prywatnosci';

/**
 * Своя іконка (вкладка, Google, apple-touch з цього ж PNG):
 * ім’я файлу в assets/, наприклад 'innser-logo.png' або 'my-favicon.png'.
 * Залиш '' — тоді береться ланцюжок: SVG emergency → PNG triangle-alert → favicon.png → …
 * Перебити без правки файлу: змінна середовища INNSER_FAVICON (наприклад у Vercel).
 */
/** Світлий дорожній трикутник (без чорного квадрата в центрі, на відміну від innser-mark). */
const FAVICON_SOURCE_FILE = 'favicon-emergency-triangle.svg';
/**
 * Мост SEO: laweta-pomoc-drogowa24-7 → канонический INNSER (www.warszawa-laweta.com), путь сохраняется.
 * laweta-warszawa.net — окремий сайт (папка ~/Desktop/MINI COD, не цей репозиторій).
 */
const LEGACY_SITE_HOSTS = [
  'laweta-pomoc-drogowa24-7.com',
  'www.laweta-pomoc-drogowa24-7.com',
];
/** Apex primary brand host → www (301). Avoid Vercel default temporary 307. */
const PRIMARY_APEX_HOST = 'warszawa-laweta.com';
const PRIMARY_HOST = 'www.warszawa-laweta.com';
/** Open Graph / Twitter — innser-logo.png (окремо від favicon). */
const OG_IMAGE_PATH = '/assets/innser-logo.png';
const OG_IMAGE_WIDTH = '1024';
const OG_IMAGE_HEIGHT = '811';
/**
 * Джерело: assets/favicon-emergency-triangle.svg (або PNG у ланцюжку resolveFaviconSource).
 * Вкладка + Apple: один URL /assets/favicon-<hash>.png (без data-URI) — те саме зображення на всіх мовах;
 * інакше частина браузерів тягне /favicon.ico або інший розмір і іконка виглядає «іншою».
 * Корінь: favicon.ico з того ж PNG.
 */
let FAVICON_ASSET_NAME = 'favicon.png';
/** Маленький PNG для вкладки — Safari гірше малює великий favicon і дає «подвійний»/обрізаний трикутник. */
let FAVICON_TAB_ASSET_NAME = '';

/** Білий фон при ресайзі: прозорість у .ico / частини клієнтів дає «чорний квадрат». */
const FAVICON_RESIZE_BG = { r: 255, g: 255, b: 255, alpha: 1 };

function resolveFaviconSource() {
  const override = (process.env.INNSER_FAVICON || FAVICON_SOURCE_FILE || '').trim();
  if (override) {
    const p = path.join(ASSETS_SRC, override);
    if (fs.existsSync(p)) return p;
    console.warn('Favicon: файл не знайдено (INNSER_FAVICON / FAVICON_SOURCE_FILE):', p);
  }
  for (const name of [
    'favicon-emergency-triangle.svg',
    'favicon-triangle-alert.png',
    'favicon.png',
    'favicon-emergency-triangle.png',
  ]) {
    const p = path.join(ASSETS_SRC, name);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

async function loadFaviconRasterBuffer(sourcePath) {
  const lower = sourcePath.toLowerCase();
  if (lower.endsWith('.svg')) {
    const requireInnser = createRequire(INNSER_PKG_JSON);
    const sharp = requireInnser('sharp');
    return sharp(sourcePath)
      .resize(512, 512, { fit: 'contain', background: FAVICON_RESIZE_BG })
      .png()
      .toBuffer();
  }
  return fs.readFileSync(sourcePath);
}

/** Підвантаження іконки вкладки дуже агресивно кешує Chrome; новий query після кожного деплою змушує підтягнути той самий PNG знову. */
function faviconCacheQuery() {
  const id =
    process.env.VERCEL_DEPLOYMENT_ID ||
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.FAVICON_CACHE_BUST ||
    '';
  const safe = String(id).replace(/[^a-zA-Z0-9_-]/g, '').slice(0, 24);
  return safe ? `?v=${safe}` : '';
}

function faviconPngHref() {
  return `/assets/${FAVICON_ASSET_NAME}${faviconCacheQuery()}`;
}

function faviconTabPngHref() {
  const name = FAVICON_TAB_ASSET_NAME || FAVICON_ASSET_NAME;
  return `/assets/${name}${faviconCacheQuery()}`;
}

/** Той самий файл, що й writeAppleTouchIconPng у корені dist — один URL для <link> і для автозапиту Safari. */
function appleTouchIconHref() {
  return `/apple-touch-icon.png${faviconCacheQuery()}`;
}

function faviconHeadBlock() {
  const tab = faviconTabPngHref();
  const full = faviconPngHref();
  const apple = appleTouchIconHref();
  return `<link rel="icon" type="image/png" href="${tab}" sizes="32x32">
<link rel="icon" type="image/png" href="${full}" sizes="64x64">
<link rel="apple-touch-icon" href="${apple}" sizes="180x180">`;
}

const LOCALES = {
  pl: {
    pathSeg: 'pl',
    htmlLang: 'pl',
    cl: 'pl',
    title: 'Tania laweta Warszawa 24/7 | Tanio ~30 min | 506-001-057',
    description:
      'Tania laweta i tanie holowanie Warszawa 24/7. Dojazd ok. 30 min, uczciwa wycena telefonem. Odpalanie, wymiana koła, otwieranie aut. 506-001-057.',
    keywords:
      'laweta warszawa, pomoc drogowa warszawa 24h, tania laweta warszawa, holowanie warszawa, ewakuator warszawa, autolaweta warszawa, evakuator warszawa, tow truck warszawa, INNSER',
    ogTitle: 'Tania laweta Warszawa 24/7 — INNSER',
    ogDescription:
      'Tanio: pomoc drogowa Warszawa 24/7 — laweta, holowanie, odpalanie, wymiana koła. Dojazd ~30 min. 506-001-057.',
    ogLocale: 'pl_PL',
    twitterTitle: 'Tania laweta Warszawa 24/7 | Tanio | 506-001-057',
    twitterDescription:
      'Tanio: laweta i holowanie Warszawa 24/7. Szybki dojazd, uczciwa wycena. 506-001-057.',
    ogImageAlt: 'INNSER — logo pomocy drogowej Warszawa 24/7',
  },
  en: {
    pathSeg: 'en',
    htmlLang: 'en',
    cl: 'en',
    title: 'Affordable Tow Truck Warsaw 24/7 | ~30 min | 506-001-057',
    description:
      'Affordable tow truck & towing Warsaw 24/7. ~30 min arrival, fair quote by phone. Jump start, tire change, lockout. Call 506-001-057.',
    keywords:
      'tow truck warsaw, towing warsaw 24h, affordable tow truck warsaw, roadside assistance warsaw, car recovery warsaw, tow truck, evakuator warszawa, ewakuator warszawa, INNSER',
    ogTitle: 'Affordable Tow Truck Warsaw 24/7 — INNSER',
    ogDescription:
      'Affordable tow truck & towing Warsaw 24/7: jump start, tire change, lockout. ~30 min ETA. Call 506-001-057.',
    ogLocale: 'en_US',
    twitterTitle: 'Affordable Tow Truck Warsaw 24/7 | 506-001-057',
    twitterDescription:
      'Affordable tow truck & towing Warsaw 24/7. Fast arrival, fair quote. 506-001-057.',
    ogImageAlt: 'INNSER — roadside assistance Warsaw logo',
  },
  ru: {
    pathSeg: 'ru',
    htmlLang: 'ru',
    cl: 'ru',
    title: 'Эвакуатор Варшава 24/7 | Лавета | 506-001-057',
    description:
      'Как заказать эвакуатор в Варшаве: звоните 506-001-057 или WhatsApp / Telegram / Viber. Услуги эвакуатора 24/7 — от 250 зл, приезд ~30 мин.',
    keywords:
      'эвакуатор варшава, как заказать эвакуатор в варшаве, как вызвать эвакуатор, как вызвать эвакуатор в варшаве, услуги эвакуатора в варшаве, услуги эвакуатора, заказать эвакуатор в варшаве, эвакуатор в варшаве, дешевый эвакуатор варшава, эвакуатор варшава 24/7, лавета варшава, помощь на дороге варшава, как вызвать эвакуатор в польше, автоэвакуатор, эвакуация автомобиля варшава, evakuator warszawa, ewakuator warszawa, INNSER',
    ogTitle: 'Эвакуатор Варшава 24/7 | Лавета | 506-001-057',
    ogDescription:
      'Как вызвать эвакуатор в Варшаве: телефон 506-001-057 или мессенджеры. Услуги эвакуатора 24/7, приезд ~30 мин.',
    ogLocale: 'ru_RU',
    twitterTitle: 'Эвакуатор Варшава 24/7 | Лавета | 506-001-057',
    twitterDescription:
      'Как заказать эвакуатор в Варшаве — звонок или WhatsApp / Telegram / Viber. 506-001-057.',
    ogImageAlt: 'INNSER — эвакуатор Варшава 24/7',
  },
  uk: {
    pathSeg: 'uk',
    htmlLang: 'uk',
    cl: 'ua',
    title: 'Евакуатор і лавета Варшава 24/7 | ~30 хв | 506-001-057',
    description:
      'Евакуатор і лавета Варшава 24/7: дешевий евакуатор, прикурити авто, евакуація. Фіксована ціна, без прихованих доплат. 506-001-057.',
    keywords:
      'евакуатор варшава, дешевий евакуатор варшава, евакуатор варшава 24/7, лавета варшава, лафета варшава, замовити евакуатор варшава, недорогий евакуатор варшава, допомога на дорозі варшава, евакуатор варшава ціна, евакуатор варшава 24 7, евакуатор в варшаве, евакуация автомобиля варшава, evakuator warszawa, ewakuator warszawa, tow truck warszawa, INNSER',
    ogTitle: 'Евакуатор і лавета Варшава 24/7 — INNSER',
    ogDescription:
      'Евакуатор і лавета Варшава 24/7: допомога на дорозі, прикур, евакуація. Приїзд ~30 хв. 506-001-057.',
    ogLocale: 'uk_UA',
    twitterTitle: 'Евакуатор і лавета Варшава 24/7 | 506-001-057',
    twitterDescription:
      'Евакуатор і лавета Варшава: прикур, евакуація. Фіксована ціна. 506-001-057.',
    ogImageAlt: 'INNSER — евакуатор і лавета Варшава 24/7',
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
  document.getElementById('svc-grid-home').innerHTML=SVCS.map(function(s){return buildSvcCard(s,'home');}).join('');
  document.getElementById('svc-grid-full').innerHTML=SVCS.map(function(s){return buildSvcCard(s,'services');}).join('');
  document.getElementById('blog-grid').innerHTML=BLOGS.map(buildBlogCard).join('');
    initReveals();
renderAreas(startLang);`;

function fixedLangSnippet(cl) {
  return `  // Locale fixed for this URL (/${cl === 'ua' ? 'uk' : cl}/)
var PAGE_FIXED_LANG = '${cl}';
SL(PAGE_FIXED_LANG);
  document.getElementById('svc-grid-home').innerHTML=SVCS.map(function(s){return buildSvcCard(s,'home');}).join('');
  document.getElementById('svc-grid-full').innerHTML=SVCS.map(function(s){return buildSvcCard(s,'services');}).join('');
  document.getElementById('blog-grid').innerHTML=BLOGS.map(buildBlogCard).join('');
    initReveals();
renderAreas(PAGE_FIXED_LANG);`;
}

function hreflangBlock(canonicalUrl, xDefaultUrl) {
  const xDefault = xDefaultUrl || `${SITE}/pl/`;
  const lines = [
    `<link rel="canonical" id="innser-canonical" href="${canonicalUrl}">`,
    `<link rel="alternate" id="innser-href-pl" hreflang="pl" href="${SITE}/pl/">`,
    `<link rel="alternate" id="innser-href-en" hreflang="en" href="${SITE}/en/">`,
    `<link rel="alternate" id="innser-href-ru" hreflang="ru" href="${SITE}/ru/">`,
    `<link rel="alternate" id="innser-href-uk" hreflang="uk" href="${SITE}/uk/">`,
    `<link rel="alternate" id="innser-href-xdefault" hreflang="x-default" href="${xDefault}">`,
  ];
  return lines.join('\n');
}

const LANG_BLOCK_START = { pl: 'pl:{', en: 'en:{', ru: 'ru:{', ua: 'ua:{' };

function langClFromPathSeg(seg) {
  return seg === 'uk' ? 'ua' : seg;
}

function extractTranslationField(raw, langCl, field) {
  const startMark = LANG_BLOCK_START[langCl];
  if (!startMark) return null;
  const start = raw.indexOf(startMark);
  if (start < 0) return null;
  let end = raw.length;
  for (const mark of Object.values(LANG_BLOCK_START)) {
    if (mark === startMark) continue;
    const i = raw.indexOf(mark, start + startMark.length);
    if (i > start && i < end) end = i;
  }
  const chunk = raw.slice(start, end);
  const esc = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`${esc}:"((?:\\\\.|[^"\\\\])*)"`);
  const m = chunk.match(re);
  if (!m) return null;
  return m[1]
    .replace(/\\n/g, '\n')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

function stripHtmlForSeo(s) {
  if (!s) return '';
  return String(s)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function truncSeoDesc(s, n = 158) {
  if (!s || s.length <= n) return s || '';
  return s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…';
}

/** Декодирует значение из JS-строки T{} в innser-v6.html */
function decodeJsTranslation(s) {
  if (!s) return '';
  return String(s)
    .replace(/\\n/g, '\n')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

function discoverDataTKeys(html) {
  const set = new Set();
  const re = /\sdata-t="([^"]+)"/g;
  let m;
  while ((m = re.exec(html)) !== null) set.add(m[1]);
  return [...set];
}

/** Подставляет переводы data-t в статический HTML (Google видит H1/тексты без ожидания JS). */
function replaceDataTContent(html, field, value) {
  const esc = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(
    `(<([a-zA-Z][a-zA-Z0-9]*)[^>]*data-t="${esc}"[^>]*>)([\\s\\S]*?)(<\\/\\2>)`,
    'g'
  );
  return html.replace(re, `$1${value}$4`);
}

function bakeDataTTranslations(html, raw, langCl) {
  let out = html;
  for (const key of discoverDataTKeys(html)) {
    const val = extractTranslationField(raw, langCl, key);
    if (val == null) continue;
    out = replaceDataTContent(out, key, decodeJsTranslation(val));
  }
  return out;
}

const LOCAL_BUSINESS_SCHEMA = {
  ru: {
    name: 'INNSER — Эвакуатор и лавета Варшава',
    alternateName: [
      'Эвакуатор Варшава',
      'Лавета Варшава',
      'Лафета Варшава',
      'Evakuator Warszawa',
      'Laweta Warszawa 24h',
    ],
    description:
      'Эвакуатор и лавета Варшава 24/7. Дешевый эвакуатор, помощь на дороге: прикурить машину, эвакуация авто, замена колеса. Приезд ~30 мин. 506-001-057.',
  },
  ua: {
    name: 'INNSER — Евакуатор і лавета Варшава',
    alternateName: [
      'Евакуатор Варшава',
      'Лавета Варшава',
      'Лафета Варшава',
      'Evakuator Warszawa',
      'Laweta Warszawa 24h',
    ],
    description:
      'Евакуатор і лавета Варшава 24/7. Дешевий евакуатор, допомога на дорозі: прикурити авто, евакуація, заміна колеса. Приїзд ~30 хв. 506-001-057.',
  },
};

function patchLocalBusinessSchema(html, langCl) {
  const patch = LOCAL_BUSINESS_SCHEMA[langCl];
  if (!patch) return html;
  const marker = '<script type="application/ld+json">';
  const idx = html.indexOf(marker);
  if (idx < 0) return html;
  const endIdx = html.indexOf('</script>', idx);
  if (endIdx < 0) return html;
  const block = html.slice(idx, endIdx + 9);
  const jsonStart = block.indexOf('{');
  const jsonEnd = block.lastIndexOf('}');
  if (jsonStart < 0 || jsonEnd < 0) return html;
  try {
    const obj = JSON.parse(block.slice(jsonStart, jsonEnd + 1));
    if (obj['@type'] !== 'LocalBusiness') return html;
    obj.name = patch.name;
    obj.alternateName = patch.alternateName;
    obj.description = patch.description;
    const newBlock =
      block.slice(0, jsonStart) + JSON.stringify(obj) + block.slice(jsonEnd + 1);
    return html.slice(0, idx) + newBlock + html.slice(endIdx + 9);
  } catch {
    return html;
  }
}

/** FAQPage JSON-LD из faq_q и faq_a переводов; ставим только на главную локали. */
function buildFaqJsonLd(raw, langCl) {
  const items = [];
  for (let i = 1; i <= 12; i++) {
    const q = extractTranslationField(raw, langCl, `faq_q${i}`);
    const a = extractTranslationField(raw, langCl, `faq_a${i}`);
    if (!q || !a) continue;
    items.push({
      '@type': 'Question',
      name: stripHtmlForSeo(decodeJsTranslation(q)),
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtmlForSeo(decodeJsTranslation(a)),
      },
    });
  }
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items,
  };
}

function injectFaqJsonLd(html, raw, langCl) {
  const faq = buildFaqJsonLd(raw, langCl);
  if (!faq) return html;
  const tag = `<script type="application/ld+json">${JSON.stringify(faq)}</script>\n`;
  if (html.includes('"@type":"FAQPage"')) return html;
  return html.replace('</head>', `${tag}</head>`);
}

/** HowTo JSON-LD («как заказать / вызвать эвакуатор») — только на главные локали. */
function buildHowToOrderJsonLd(raw, langCl) {
  const name = extractTranslationField(raw, langCl, 'howto_name');
  const desc = extractTranslationField(raw, langCl, 'howto_desc');
  if (!name) return null;
  const steps = [];
  for (let i = 1; i <= 3; i++) {
    const sn = extractTranslationField(raw, langCl, `howto_s${i}`);
    const st = extractTranslationField(raw, langCl, `howto_s${i}t`);
    if (!sn || !st) continue;
    steps.push({
      '@type': 'HowToStep',
      position: i,
      name: stripHtmlForSeo(decodeJsTranslation(sn)),
      text: stripHtmlForSeo(decodeJsTranslation(st)),
    });
  }
  if (steps.length < 2) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: stripHtmlForSeo(decodeJsTranslation(name)),
    description: desc
      ? stripHtmlForSeo(decodeJsTranslation(desc))
      : stripHtmlForSeo(decodeJsTranslation(name)),
    step: steps,
  };
}

function injectHowToOrderJsonLd(html, raw, langCl) {
  const howto = buildHowToOrderJsonLd(raw, langCl);
  if (!howto) return html;
  if (html.includes('"@type":"HowTo"')) return html;
  const tag = `<script type="application/ld+json">${JSON.stringify(howto)}</script>\n`;
  return html.replace('</head>', `${tag}</head>`);
}

/**
 * Remove one JSON-LD <script> by @type. Must not span across tags — a naive
 * [\s\S]*?"@type":"HowTo" match starts at LocalBusiness and eats <style> + fonts.
 */
function stripJsonLdByType(html, typeName) {
  const typeRe = new RegExp(`"@type"\\s*:\\s*"${typeName}"`);
  return html.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>\s*/g,
    (full, body) => (typeRe.test(body) ? '' : full)
  );
}

/** HowTo belongs only on locale homes — strip from deep-route copies. */
function stripHowToJsonLd(html) {
  return stripJsonLdByType(html, 'HowTo');
}

/** FAQPage belongs only on locale homes — strip from deep-route copies. */
function stripFaqJsonLd(html) {
  return stripJsonLdByType(html, 'FAQPage');
}

/** Подпись вкладки: ALL CAPS → первая буква заглавная, остальные строчные (как у галереи/главной). */
function tabTitleCase(s) {
  if (!s) return '';
  s = String(s).trim();
  const m = s.match(/^(.*?)(\s*\|\s*INNSER\s*)$/i);
  let main = (m ? m[1] : s).trim();
  const suffix = m ? m[2] : '';
  const letters = main.match(/\p{L}/gu);
  if (!letters?.length) return s;
  const upper = letters.filter((c) => /\p{Lu}/u.test(c)).length;
  if (upper / letters.length < 0.65) return s;
  main = main.toLocaleLowerCase('pl-PL');
  const fi = main.search(/\p{L}/u);
  if (fi >= 0) {
    main = main.slice(0, fi) + main.charAt(fi).toLocaleUpperCase('pl-PL') + main.slice(fi + 1);
  }
  return main + (suffix || '');
}

function seoPageTitle(title) {
  const raw = title.includes('INNSER') ? title : `${title} | INNSER`;
  return tabTitleCase(raw);
}

function seoMetaForTail(raw, localePathSeg, tail) {
  const langCl = langClFromPathSeg(localePathSeg);
  const trimmed = String(tail).replace(/^\/+|\/+$/g, '');
  if (!trimmed) return null;

  if (/^svc\d+$/.test(trimmed)) {
    const id = trimmed;
    const title =
      extractTranslationField(raw, langCl, `${id}_seo_title`) ||
      stripHtmlForSeo(extractTranslationField(raw, langCl, `${id}_t`));
    const desc =
      extractTranslationField(raw, langCl, `${id}_seo_desc`) ||
      stripHtmlForSeo(extractTranslationField(raw, langCl, `${id}_d`));
    const kw = extractTranslationField(raw, langCl, `${id}_keywords`);
    if (!title) return null;
    return {
      title: seoPageTitle(title),
      desc: truncSeoDesc(desc),
      kw,
    };
  }

  const blogM = /^blog\/(b\d+)$/.exec(trimmed);
  if (blogM) {
    const bid = blogM[1];
    const title = stripHtmlForSeo(extractTranslationField(raw, langCl, `${bid}_t`));
    const desc = stripHtmlForSeo(extractTranslationField(raw, langCl, `bp_${bid}_p1`));
    if (!title) return null;
    return { title: seoPageTitle(title), desc: truncSeoDesc(desc), kw: null };
  }

  if (trimmed === 'blog') {
    const title = stripHtmlForSeo(extractTranslationField(raw, langCl, 'blog_title'));
    const desc = stripHtmlForSeo(extractTranslationField(raw, langCl, 'blog_desc'));
    if (!title) return null;
    return { title: seoPageTitle(title), desc: truncSeoDesc(desc), kw: null };
  }

  if (trimmed === 'gallery') {
    const title =
      extractTranslationField(raw, langCl, 'gal_seo_title') ||
      stripHtmlForSeo(extractTranslationField(raw, langCl, 'gal_title'));
    const desc =
      extractTranslationField(raw, langCl, 'gal_seo_desc') ||
      stripHtmlForSeo(extractTranslationField(raw, langCl, 'gal_desc'));
    const kw = extractTranslationField(raw, langCl, 'gal_keywords');
    if (!title) return null;
    return {
      title: seoPageTitle(title),
      desc: truncSeoDesc(desc),
      kw,
    };
  }

  const NAV_SEO = {
    services: { title: 'svc_title', desc: 'svc_desc' },
    prices: { title: 'prices_title', desc: 'prices_desc' },
    about: { title: 'abt_title', desc: 'abt_desc' },
    map: { title: 'map_title', desc: 'map_desc' },
    contact: { title: 'cnt_title', desc: 'cnt_desc' },
    partners: { title: 'coop_seo_title', desc: 'coop_seo_desc', kw: 'coop_keywords' },
  };
  if (NAV_SEO[trimmed]) {
    const cfg = NAV_SEO[trimmed];
    const override = NAV_TITLE_OVERRIDE[langCl]?.[trimmed];
    const title =
      override || stripHtmlForSeo(extractTranslationField(raw, langCl, cfg.title));
    const desc = stripHtmlForSeo(extractTranslationField(raw, langCl, cfg.desc));
    const kw = cfg.kw ? extractTranslationField(raw, langCl, cfg.kw) : null;
    if (!title) return null;
    return {
      title: seoPageTitle(title),
      desc: truncSeoDesc(desc),
      kw,
    };
  }

  if (trimmed === 'dzielnice') {
    const meta = getDistrictsIndexSeoMeta(langCl);
    return { title: seoPageTitle(meta.title), desc: truncSeoDesc(meta.desc), kw: null };
  }

  if (trimmed === 'trasy') {
    const meta = getRoadsIndexSeoMeta(langCl);
    return { title: seoPageTitle(meta.title), desc: truncSeoDesc(meta.desc), kw: null };
  }

  if (trimmed === PRIVACY_PAGE_TAIL) {
    const title = extractTranslationField(raw, langCl, 'priv_seo_title');
    const desc = extractTranslationField(raw, langCl, 'priv_seo_desc');
    if (!title) return null;
    return { title: seoPageTitle(title), desc: truncSeoDesc(desc), kw: null };
  }

  const distM = /^dzielnice\/([a-z0-9-]+)$/.exec(trimmed);
  if (distM) {
    const meta = getDistrictSeoMeta(langCl, distM[1]);
    if (!meta) return null;
    return { title: seoPageTitle(meta.title), desc: truncSeoDesc(meta.desc), kw: null };
  }

  const roadM = /^trasy\/([a-z0-9-]+)$/.exec(trimmed);
  if (roadM) {
    const meta = getRoadSeoMeta(langCl, roadM[1]);
    if (!meta) return null;
    return { title: seoPageTitle(meta.title), desc: truncSeoDesc(meta.desc), kw: null };
  }

  return null;
}

/** Keyword-rich <title> для nav-страниц (H1/data-t не меняем — только SEO title). */
const NAV_TITLE_OVERRIDE = {
  pl: {
    services: 'Laweta i pomoc drogowa Warszawa 24/7 — usługi | 506-001-057',
    prices: 'Ceny holowania Warszawa — kalkulator wyceny | INNSER 506-001-057',
    about: 'O nas — laweta i pomoc drogowa Warszawa 24/7 | INNSER',
    map: 'Laweta Warszawa — obszar działania i dojazd 24/7 | INNSER',
    contact: 'Kontakt — laweta i pomoc drogowa Warszawa 24/7 | 506-001-057',
  },
  ru: {
    services: 'Эвакуатор и лавета Варшава 24/7 — услуги | 506-001-057',
    prices: 'Цены эвакуатора Варшава — калькулятор стоимости | INNSER 506-001-057',
    about: 'О нас — эвакуатор и лавета Варшава 24/7 | INNSER',
    map: 'Эвакуатор Варшава — зона обслуживания и приезд 24/7 | INNSER',
    contact: 'Контакт — эвакуатор и лавета Варшава 24/7 | 506-001-057',
  },
  ua: {
    services: 'Евакуатор і лавета Варшава 24/7 — послуги | 506-001-057',
    prices: 'Ціни евакуатора Варшава — калькулятор вартості | INNSER 506-001-057',
    about: 'Про нас — евакуатор і лавета Варшава 24/7 | INNSER',
    map: 'Евакуатор Варшава — зона обслуговування та приїзд 24/7 | INNSER',
    contact: 'Контакт — евакуатор і лавета Варшава 24/7 | 506-001-057',
  },
  en: {
    services: 'Tow truck & roadside assistance Warsaw 24/7 — services | 506-001-057',
    prices: 'Tow truck prices Warsaw — price calculator | INNSER 506-001-057',
    about: 'About us — tow truck & roadside assistance Warsaw 24/7 | INNSER',
    map: 'Tow truck Warsaw — service area & arrival 24/7 | INNSER',
    contact: 'Contact — tow truck & roadside assistance Warsaw 24/7 | 506-001-057',
  },
};

function escHtmlAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

/** Один и тот же SPA-файл отдаётся на все пути; без этого в сыром HTML каноникал = только главная локали → GSC «каноникал от пользователя отсутствует». */
function tailToPageId(tail) {
  const trimmed = String(tail).replace(/^\/+|\/+$/g, '');
  if (!trimmed) return 'home';
  const blogM = /^blog\/(b\d+)$/.exec(trimmed);
  if (blogM) return `blog-post-${blogM[1]}`;
  if (trimmed === 'dzielnice') return 'districts';
  if (/^dzielnice\/[a-z0-9-]+$/.test(trimmed)) return 'district';
  if (trimmed === 'trasy') return 'roads';
  if (/^trasy\/[a-z0-9-]+$/.test(trimmed)) return 'road';
  if (trimmed === PRIVACY_PAGE_TAIL) return 'privacy';
  return trimmed;
}

function pageIdToPathTail(pageId, districtSlug, roadSlug) {
  if (pageId === 'home') return '';
  if (pageId === 'districts') return 'dzielnice';
  if (pageId === 'district' && districtSlug) return `dzielnice/${districtSlug}`;
  if (pageId === 'roads') return 'trasy';
  if (pageId === 'road' && roadSlug) return `trasy/${roadSlug}`;
  if (pageId === 'privacy') return PRIVACY_PAGE_TAIL;
  const blogM = /^blog-post-(b\d+)$/.exec(pageId);
  if (blogM) return `blog/${blogM[1]}`;
  return pageId;
}

function innserHrefForPage(pageId, localePathSeg, districtSlug, roadSlug) {
  const tail = pageIdToPathTail(pageId, districtSlug, roadSlug);
  return tail ? `/${localePathSeg}/${tail}/` : `/${localePathSeg}/`;
}

function injectDistrictStaticBlock(html, langCl, localePathSeg, tail) {
  const trimmed = String(tail).replace(/^\/+|\/+$/g, '');
  if (trimmed === 'dzielnice') {
    const inner = renderDistrictsIndexStaticHtml(langCl, localePathSeg);
    return html.replace(
      /<!--innser-districts-index-static-->[\s\S]*?<!--\/innser-districts-index-static-->/,
      `<!--innser-districts-index-static-->\n${inner}\n<!--/innser-districts-index-static-->`
    );
  }
  const m = /^dzielnice\/([a-z0-9-]+)$/.exec(trimmed);
  if (m) {
    const inner = renderDistrictStaticHtml(langCl, m[1], localePathSeg);
    return html.replace(
      /<!--innser-district-page-static-->[\s\S]*?<!--\/innser-district-page-static-->/,
      `<!--innser-district-page-static-->\n${inner}\n<!--/innser-district-page-static-->`
    );
  }
  return html;
}

function injectRoadStaticBlock(html, langCl, localePathSeg, tail) {
  const trimmed = String(tail).replace(/^\/+|\/+$/g, '');
  if (trimmed === 'trasy') {
    const inner = renderRoadsIndexStaticHtml(langCl, localePathSeg);
    return html.replace(
      /<!--innser-roads-index-static-->[\s\S]*?<!--\/innser-roads-index-static-->/,
      `<!--innser-roads-index-static-->\n${inner}\n<!--/innser-roads-index-static-->`
    );
  }
  const m = /^trasy\/([a-z0-9-]+)$/.exec(trimmed);
  if (m) {
    const inner = renderRoadStaticHtml(langCl, m[1], localePathSeg);
    return html.replace(
      /<!--innser-road-page-static-->[\s\S]*?<!--\/innser-road-page-static-->/,
      `<!--innser-road-page-static-->\n${inner}\n<!--/innser-road-page-static-->`
    );
  }
  return html;
}

/** Localize inactive district/road detail shells (View Source / crawlers on every locale page). */
function injectInactiveDetailShells(html, langCl) {
  const distH1 = {
    pl: 'Laweta Warszawa — dzielnica',
    en: 'Tow truck Warsaw — district',
    ru: 'Эвакуатор Варшава — район',
    ua: 'Евакуатор Варшава — район',
  };
  const roadH1 = {
    pl: 'Laweta — trasa',
    en: 'Tow truck — road',
    ru: 'Эвакуатор — трасса',
    ua: 'Евакуатор — траса',
  };
  const d = distH1[langCl] || distH1.pl;
  const r = roadH1[langCl] || roadH1.pl;
  html = html.replace(
    /<!--innser-district-page-static-->[\s\S]*?<!--\/innser-district-page-static-->/,
    `<!--innser-district-page-static-->\n  <h1 class="sh">${d}</h1>\n  <!--/innser-district-page-static-->`
  );
  html = html.replace(
    /<!--innser-road-page-static-->[\s\S]*?<!--\/innser-road-page-static-->/,
    `<!--innser-road-page-static-->\n  <h1 class="sh">${r}</h1>\n  <!--/innser-road-page-static-->`
  );
  return html;
}

function injectDistrictsRuntimeData(html, galleryItems) {
  const json = districtsJsonForRuntime();
  html = html.replace(/var DISTRICTS=\[\];/, `var DISTRICTS=${json};`);
  const richJson = districtRichJsonForRuntime();
  html = html.replace(/var DISTRICT_RICH=\{\};/, `var DISTRICT_RICH=${richJson};`);
  const roadsJson = roadsJsonForRuntime();
  html = html.replace(/var ROADS=\[\];/, `var ROADS=${roadsJson};`);
  const roadRichJson = roadRichJsonForRuntime();
  html = html.replace(/var ROAD_RICH=\{\};/, `var ROAD_RICH=${roadRichJson};`);
  const gal = galleryItems || loadLandingGallery();
  const galJson = landingGalleryJsonForRuntime(gal);
  return html.replace(/var LANDING_GALLERY=\[\];/, `var LANDING_GALLERY=${galJson};`);
}

/**
 * Remove inactive SPA .page sections from deep-route HTML so crawlers
 * do not see home/blog/services as hidden text on every URL.
 */
function pruneInactivePages(html, keepPageId) {
  if (!keepPageId || keepPageId === 'home') return html;
  const openRe = /<div class="page(?: on)?" id="p-([^"]+)">/g;
  let out = '';
  let last = 0;
  let m;
  while ((m = openRe.exec(html)) !== null) {
    const id = m[1];
    const start = m.index;
    const tagEnd = html.indexOf('>', start);
    if (tagEnd < 0) break;
    let depth = 1;
    let i = tagEnd + 1;
    while (i < html.length && depth > 0) {
      const nextOpen = html.indexOf('<div', i);
      const nextClose = html.indexOf('</div>', i);
      if (nextClose < 0) break;
      if (nextOpen >= 0 && nextOpen < nextClose) {
        // Only count real <div ...> tags (not strings in scripts casually — rare in .page)
        const ch = html[nextOpen + 4];
        if (ch === ' ' || ch === '>' || ch === '\n' || ch === '\r' || ch === '\t') {
          depth++;
        }
        i = nextOpen + 4;
      } else {
        depth--;
        i = nextClose + 6;
      }
    }
    const end = i;
    out += html.slice(last, start);
    if (id === keepPageId) {
      let block = html.slice(start, end);
      block = block.replace(
        /<div class="page(?: on)?" id="/,
        '<div class="page on" id="'
      );
      out += block;
    }
    last = end;
    openRe.lastIndex = end;
  }
  out += html.slice(last);
  return out;
}

/** Replace `var NAME={...};` / `var NAME=[...];` with brace/bracket awareness (JSON may be one line). */
function replaceRuntimeVar(html, varName, newLiteral) {
  const needle = `var ${varName}=`;
  const start = html.indexOf(needle);
  if (start < 0) return html;
  let i = start + needle.length;
  while (i < html.length && /\s/.test(html[i])) i++;
  const open = html[i];
  if (open !== '{' && open !== '[') return html;
  const close = open === '{' ? '}' : ']';
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (; i < html.length; i++) {
    const ch = html[i];
    if (inStr) {
      if (esc) {
        esc = false;
        continue;
      }
      if (ch === '\\') {
        esc = true;
        continue;
      }
      if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') {
      inStr = true;
      continue;
    }
    if (ch === open) depth++;
    else if (ch === close) {
      depth--;
      if (depth === 0) {
        i++;
        if (html[i] === ';') i++;
        return `${html.slice(0, start)}var ${varName}=${newLiteral};${html.slice(i)}`;
      }
    }
  }
  return html;
}

/** Shrink DISTRICT_RICH / ROAD_RICH on deep copies to the active slug (or empty). */
function scopeRichRuntimeJson(html, tail) {
  const trimmed = String(tail || '').replace(/^\/+|\/+$/g, '');
  const distM = /^dzielnice\/([a-z0-9-]+)$/.exec(trimmed);
  const roadM = /^trasy\/([a-z0-9-]+)$/.exec(trimmed);
  const distJson = distM ? districtRichJsonForRuntime(distM[1]) : '{}';
  const roadJson = roadM ? roadRichJsonForRuntime(roadM[1]) : '{}';
  html = replaceRuntimeVar(html, 'DISTRICT_RICH', distJson);
  html = replaceRuntimeVar(html, 'ROAD_RICH', roadJson);
  return html;
}

/** Real href on a[data-p] for crawlers (nav, footer, CTAs). */
function patchHtmlLinkHrefs(html, localePathSeg) {
  return html.replace(/<a(\s[^>]*?\bdata-p="([^"]+)"[^>]*)>/gi, (match, attrs, pageId) => {
    const distM = attrs.match(/\bdata-district="([^"]+)"/);
    const roadM = attrs.match(/\bdata-road="([^"]+)"/);
    const href = innserHrefForPage(
      pageId,
      localePathSeg,
      distM ? distM[1] : '',
      roadM ? roadM[1] : ''
    );
    const cleaned = attrs.replace(/\bhref="[^"]*"/, '').trim();
    return `<a href="${href}" ${cleaned}>`;
  });
}

/** В сыром HTML только .page.on видна (display:block). Без этого GSC видит главную при URL /pl/svc3/ и т.д. */
function patchHtmlActivePage(html, tail) {
  const pageId = tailToPageId(tail);
  if (pageId === 'home') return html;
  html = html.replace(/<div class="page on" id="p-/g, '<div class="page" id="p-');
  const escaped = pageId.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  html = html.replace(
    new RegExp(`<div class="page" id="p-${escaped}">`),
    `<div class="page on" id="p-${pageId}">`
  );
  return html;
}

function patchHtmlSeoForTail(html, localePathSeg, tail, raw) {
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
  const pageUrl = loc(localePathSeg);
  out = out.replace(
    /<meta property="og:url" id="innser-og-url" content="[^"]*">/,
    `<meta property="og:url" id="innser-og-url" content="${pageUrl}">`
  );

  const meta = raw ? seoMetaForTail(raw, localePathSeg, tail) : null;
  if (meta?.title) {
    const t = escHtmlAttr(meta.title);
    out = out.replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`);
    out = out.replace(
      /<meta property="og:title" content="[^"]*">/,
      `<meta property="og:title" content="${t}">`
    );
    out = out.replace(
      /<meta name="twitter:title" content="[^"]*">/,
      `<meta name="twitter:title" content="${t}">`
    );
  }
  if (meta?.desc) {
    const d = escHtmlAttr(meta.desc);
    out = out.replace(
      /<meta name="description" content="[^"]*">/,
      `<meta name="description" content="${d}">`
    );
    out = out.replace(
      /<meta property="og:description" content="[^"]*">/,
      `<meta property="og:description" content="${d}">`
    );
    out = out.replace(
      /<meta name="twitter:description" content="[^"]*">/,
      `<meta name="twitter:description" content="${d}">`
    );
  }
  if (meta?.kw) {
    out = out.replace(
      /<meta name="keywords" content="[^"]*">/,
      `<meta name="keywords" content="${escHtmlAttr(meta.kw)}">`
    );
  }
  return out;
}

function writeDeepRouteHtmlCopies(raw) {
  const blogSlugs = discoverBlogPostSlugs(raw);
  const svcIds = discoverSvcPageIds(raw);
  const distSlugs = districtSlugs();
  const rdSlugs = roadSlugs();
  const galleryItems = collectGalleryItems(raw);
  loadLandingGallery(raw);
  const tails = [
    'blog',
    'gallery',
    'dzielnice',
    'trasy',
    PRIVACY_PAGE_TAIL,
    ...NAV_PAGE_TAILS,
    ...blogSlugs.map((b) => `blog/${b}`),
    ...svcIds,
    ...distSlugs.map((s) => `dzielnice/${s}`),
    ...rdSlugs.map((s) => `trasy/${s}`),
  ];
  let n = 0;
  for (const key of Object.keys(LOCALES)) {
    const L = LOCALES[key];
    const seg = L.pathSeg;
    const langCl = L.cl;
    const basePath = path.join(OUT, seg, 'index.html');
    const baseHtml = fs.readFileSync(basePath, 'utf8');
    for (const tail of tails) {
      const parts = tail.split('/');
      const dir = path.join(OUT, seg, ...parts);
      fs.mkdirSync(dir, { recursive: true });
      let html = patchHtmlSeoForTail(baseHtml, seg, tail, raw);
      html = stripFaqJsonLd(html);
      html = stripHowToJsonLd(html);
      html = patchHtmlActivePage(html, tail);
      html = patchHtmlLinkHrefs(html, seg);
      // Keep index shells localized on every deep page (baseHtml already has them from home bake).
      if (tail.startsWith('dzielnice')) {
        html = injectDistrictStaticBlock(html, langCl, seg, tail);
      }
      if (tail.startsWith('trasy')) {
        html = injectRoadStaticBlock(html, langCl, seg, tail);
      }
      if (tail === 'gallery' && galleryItems.length) {
        const pageUrl = `${SITE}/${seg}/gallery/`;
        html = injectGalleryStaticHtml(html, galleryItems, seg);
        html = injectGalleryJsonLd(
          html,
          buildGalleryJsonLd(galleryItems, pageUrl, seg, SITE)
        );
      }
      // SEO: drop hidden SPA pages + unused rich JSON (noise for Google on every URL).
      const keepId = tailToPageId(tail);
      html = pruneInactivePages(html, keepId);
      html = scopeRichRuntimeJson(html, tail);
      fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
      n++;
    }
  }
  console.log(
    `Wrote ${n} deep-route copies (${Object.keys(LOCALES).length} locales × routes) — pruned SPA + canonical/hreflang`
  );
}

function buildLocaleHtml(raw, key) {
  const L = LOCALES[key];
  const url = `${SITE}/${L.pathSeg}/`;

  let html = raw;

  html = html.replace(
    /(?:<link rel="icon"[^>]*>\s*\n)+(?:<link rel="shortcut icon"[^>]*>\s*\n)?<link rel="apple-touch-icon"[^>]*>/,
    faviconHeadBlock()
  );

  html = html.replace(/<html lang="[^"]*">/, `<html lang="${L.htmlLang}">`);

  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${L.title.replace(/</g, '&lt;')}</title>`
  );

  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${L.description.replace(/"/g, '&quot;')}">`
  );

  if (L.keywords) {
    html = html.replace(
      /<meta name="keywords" content="[^"]*">/,
      `<meta name="keywords" content="${L.keywords.replace(/"/g, '&quot;')}">`
    );
  }

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
  // Match id="innser-og-url" (source HTML) — bare content= pattern never hit.
  html = html.replace(
    /<meta property="og:url"(?:\s+id="[^"]*")?\s+content="[^"]*">/,
    `<meta property="og:url" id="innser-og-url" content="${url}">`
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

  const langCl = L.cl;
  html = bakeDataTTranslations(html, raw, langCl);
  html = patchLocalBusinessSchema(html, langCl);
  html = injectFaqJsonLd(html, raw, langCl);
  html = injectHowToOrderJsonLd(html, raw, langCl);
  html = injectDistrictsRuntimeData(html, collectGalleryItems(raw));
  // Localize inactive dzielnice/trasy shells so every locale HTML has correct H1s.
  html = injectDistrictStaticBlock(html, langCl, L.pathSeg, 'dzielnice');
  html = injectRoadStaticBlock(html, langCl, L.pathSeg, 'trasy');
  html = injectInactiveDetailShells(html, langCl);

  html = patchHtmlLinkHrefs(html, L.pathSeg);

  return html;
}

function writeRootRedirect() {
  // Fallback only: Vercel/Netlify should 301 / → /pl/ before this file is served.
  const ogImg = `${SITE}${OG_IMAGE_PATH}`;
  const redirectHtml = `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
${faviconHeadBlock()}
<title>INNSER — Pomoc Drogowa Warszawa 24h</title>
<meta name="description" content="INNSER — pomoc drogowa Warszawa 24/7. Zadzwoń: 506-001-057">
${hreflangBlock(`${SITE}/pl/`, `${SITE}/pl/`)}
<meta property="og:url" content="${SITE}/pl/">
<meta property="og:image" content="${ogImg}">
<link rel="alternate" hreflang="x-default" href="${SITE}/pl/">
<meta http-equiv="refresh" content="0;url=/pl/">
<script>location.replace('/pl/');</script>
</head>
<body>
<p><a href="/pl/">INNSER — Pomoc Drogowa Warszawa</a></p>
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

/** Один канонический URL со слэшем — Google не видит /ru и /ru/ как две страницы. */

/** Removed service: keep old /svc10 URLs alive → ditch/parking recovery (svc9). */
function appendRetiredSvcRedirects(redirects) {
  for (const seg of ['pl', 'en', 'ru', 'uk']) {
    // Must run before trailing-slash rules; both slash variants go straight to svc9.
    redirects.push({ source: `/${seg}/svc10`, destination: `/${seg}/svc9/`, permanent: true });
    redirects.push({ source: `/${seg}/svc10/`, destination: `/${seg}/svc9/`, permanent: true });
  }
}

/** Drop stale retired service folders left from previous builds (OUT is not wiped). */
function removeRetiredSvcOrphans() {
  for (const seg of ['pl', 'en', 'ru', 'uk']) {
    const dir = path.join(OUT, seg, 'svc10');
    if (fs.existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log('Removed orphan', path.relative(REPO_ROOT, dir));
    }
  }
}

function appendTrailingSlashRedirects(redirects, html) {
  const svcIds = discoverSvcPageIds(html);
  const blogSlugs = discoverBlogPostSlugs(html);
  const distSlugs = districtSlugs();
  const rdSlugs = roadSlugs();
  for (const seg of ['pl', 'en', 'ru', 'uk']) {
    redirects.push({ source: `/${seg}`, destination: `/${seg}/`, permanent: true });
    redirects.push({ source: `/${seg}/blog`, destination: `/${seg}/blog/`, permanent: true });
    redirects.push({ source: `/${seg}/gallery`, destination: `/${seg}/gallery/`, permanent: true });
    redirects.push({ source: `/${seg}/dzielnice`, destination: `/${seg}/dzielnice/`, permanent: true });
    redirects.push({ source: `/${seg}/trasy`, destination: `/${seg}/trasy/`, permanent: true });
    redirects.push({
      source: `/${seg}/${PRIVACY_PAGE_TAIL}`,
      destination: `/${seg}/${PRIVACY_PAGE_TAIL}/`,
      permanent: true,
    });
    for (const nav of NAV_PAGE_TAILS) {
      redirects.push({ source: `/${seg}/${nav}`, destination: `/${seg}/${nav}/`, permanent: true });
    }
    for (const svc of svcIds) {
      if (svc === 'svc10') continue;
      redirects.push({ source: `/${seg}/${svc}`, destination: `/${seg}/${svc}/`, permanent: true });
    }
    for (const slug of blogSlugs) {
      redirects.push({
        source: `/${seg}/blog/${slug}`,
        destination: `/${seg}/blog/${slug}/`,
        permanent: true,
      });
    }
    for (const dslug of distSlugs) {
      redirects.push({
        source: `/${seg}/dzielnice/${dslug}`,
        destination: `/${seg}/dzielnice/${dslug}/`,
        permanent: true,
      });
    }
    for (const rslug of rdSlugs) {
      redirects.push({
        source: `/${seg}/trasy/${rslug}`,
        destination: `/${seg}/trasy/${rslug}/`,
        permanent: true,
      });
    }
  }
}

function appendTrailingSlashNetlify(lines, html) {
  const svcIds = discoverSvcPageIds(html);
  const blogSlugs = discoverBlogPostSlugs(html);
  const distSlugs = districtSlugs();
  const rdSlugs = roadSlugs();
  lines.push('# canonical trailing slash — один URL на страницу для Google');
  for (const seg of ['pl', 'en', 'ru', 'uk']) {
    lines.push(`/${seg}  /${seg}/  301`);
    lines.push(`/${seg}/blog  /${seg}/blog/  301`);
    lines.push(`/${seg}/gallery  /${seg}/gallery/  301`);
    lines.push(`/${seg}/dzielnice  /${seg}/dzielnice/  301`);
    lines.push(`/${seg}/trasy  /${seg}/trasy/  301`);
    lines.push(`/${seg}/${PRIVACY_PAGE_TAIL}  /${seg}/${PRIVACY_PAGE_TAIL}/  301`);
    for (const nav of NAV_PAGE_TAILS) {
      lines.push(`/${seg}/${nav}  /${seg}/${nav}/  301`);
    }
    for (const svc of svcIds) {
      if (svc === 'svc10') continue;
      lines.push(`/${seg}/${svc}  /${seg}/${svc}/  301`);
    }
    lines.push(`/${seg}/svc10  /${seg}/svc9/  301`);
    lines.push(`/${seg}/svc10/  /${seg}/svc9/  301`);
    for (const slug of blogSlugs) {
      lines.push(`/${seg}/blog/${slug}  /${seg}/blog/${slug}/  301`);
    }
    for (const dslug of distSlugs) {
      lines.push(`/${seg}/dzielnice/${dslug}  /${seg}/dzielnice/${dslug}/  301`);
    }
    for (const rslug of rdSlugs) {
      lines.push(`/${seg}/trasy/${rslug}  /${seg}/trasy/${rslug}/  301`);
    }
  }
}

/** Google sitemap: главные URL, блог, посты и услуги из innser-v6.html × 4 языка; в каждом url — hreflang */
function writeSitemapAndRobots(html) {
  const lastmod = new Date().toISOString().split('T')[0];
  const pathSegs = ['pl', 'en', 'ru', 'uk'];
  const blogSlugs = discoverBlogPostSlugs(html);
  const svcIds = discoverSvcPageIds(html);
  const distSlugs = districtSlugs();
  const rdSlugs = roadSlugs();
  /** @type {(string|null)[]} null = корень локали */
  const tails = [
    null,
    'blog',
    'gallery',
    'dzielnice',
    'trasy',
    PRIVACY_PAGE_TAIL,
    ...NAV_PAGE_TAILS,
    ...blogSlugs.map((b) => `blog/${b}`),
    ...svcIds,
    ...distSlugs.map((s) => `dzielnice/${s}`),
    ...rdSlugs.map((s) => `trasy/${s}`),
  ];
  console.log(
    'Sitemap: blog posts',
    blogSlugs.join(', ') || '(none)',
    '| services',
    svcIds.join(', ') || '(none)',
    '| districts',
    distSlugs.length,
    '| roads',
    rdSlugs.length
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
    if (
      tail == null ||
      tail === 'blog' ||
      tail === 'gallery' ||
      tail === 'dzielnice' ||
      tail === 'trasy' ||
      NAV_PAGE_TAILS.includes(tail)
    )
      return 'weekly';
    return 'monthly';
  }

  function priorityFor(tail) {
    if (tail == null) return '1.0';
    if (
      tail === 'dzielnice' ||
      tail === 'trasy' ||
      tail === 'blog' ||
      tail === 'services' ||
      tail === 'contact' ||
      tail === 'prices'
    )
      return '0.85';
    if (String(tail).startsWith('dzielnice/')) {
      const slug = String(tail).slice('dzielnice/'.length);
      const kind = districtBySlug(slug)?.kind || 'district';
      // Suburbs slightly lower — reduces cannibalization vs core Warsaw districts.
      return kind === 'suburb' ? '0.70' : '0.80';
    }
    if (String(tail).startsWith('trasy/')) return '0.78';
    if (tail === 'gallery' || tail === 'about' || tail === 'partners' || tail === PRIVACY_PAGE_TAIL) return '0.82';
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
Sitemap: ${SITE}/sitemap-images.xml
`;
  fs.writeFileSync(path.join(OUT, 'robots.txt'), robots, 'utf8');
}

function writeImageSitemap(raw) {
  const items = collectGalleryItems(raw);
  if (!items.length) {
    console.warn('Image sitemap: no gallery items found in innser-v6.html');
    return;
  }
  const galleryPageUrls = ['pl', 'en', 'ru', 'uk'].map((seg) => `${SITE}/${seg}/gallery/`);
  const xml = buildImageSitemapXml(items, SITE, galleryPageUrls);
  fs.writeFileSync(path.join(OUT, 'sitemap-images.xml'), xml, 'utf8');
  console.log(`Wrote image sitemap (${items.length} images × ${galleryPageUrls.length} gallery pages)`);
}

/**
 * Netlify: явные подстановки index.html для /pl, /en, /ru, /uk (иногда без этого — 404 при смене языка).
 * Файл _redirects должен лежать в корне заливки вместе с index.html.
 * Apex↔www не задаём здесь: в Netlify → Domain management основной домен должен совпадать с SITE
 * (https://www.…), иначе встроенный редирект Netlify и правила ниже дают цикл «слишком много перенаправлений».
 */
function writeNetlifyRedirects(html) {
  const svcIds = discoverSvcPageIds(html);
  const distSlugs = districtSlugs();
  const rdSlugs = roadSlugs();
  const lines = [
    '# INNSER i18n — отдаём index.html внутри каждой языковой папки',
    '# SPA: блог и карточки услуг (история + прямые ссылки); svc* из разметки innser-v6.html',
    '# Мост: старые домены → www.warszawa-laweta.com (тот же :splat); laweta-warszawa.net — отдельный проект MINI COD',
  ];
  for (const host of LEGACY_SITE_HOSTS) {
    lines.push(`https://${host}/favicon.ico  /favicon.ico  200!`);
  }
  for (const host of LEGACY_SITE_HOSTS) {
    lines.push(`https://${host}/*  ${SITE}/:splat  301!`);
  }
  // Brand apex → www (permanent)
  lines.push(`https://${PRIMARY_APEX_HOST}/*  ${SITE}/:splat  301!`);
  lines.push(`https://${PRIMARY_APEX_HOST}/  ${SITE}/  301!`);
  // Netlify has no Vercel middleware — hard 301 to PL home (Vercel uses middleware.js instead).
  lines.push(`/  /pl/  301`);
  // Кореневий /favicon.ico у dist (copyRootFaviconIco); для Netlify — рядки 200! вище.
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
  // Карта перенесена в About — старые URL /map/ → /about/
  for (const seg of ['pl', 'en', 'ru', 'uk']) {
    lines.push(`/${seg}/map  ${SITE}/${seg}/about/  301`);
    lines.push(`/${seg}/map/  ${SITE}/${seg}/about/  301`);
  }
  appendTrailingSlashNetlify(lines, html);
  lines.push('# SPA: отдельный HTML на каждый URL (каноникал + title для Google)');
  for (const seg of ['pl', 'en', 'ru', 'uk']) {
    lines.push(`/${seg}/  /${seg}/index.html  200`);
    lines.push(`/${seg}/blog/  /${seg}/blog/index.html  200`);
    lines.push(`/${seg}/gallery/  /${seg}/gallery/index.html  200`);
    lines.push(`/${seg}/dzielnice/  /${seg}/dzielnice/index.html  200`);
    lines.push(`/${seg}/trasy/  /${seg}/trasy/index.html  200`);
    for (const nav of NAV_PAGE_TAILS) {
      lines.push(`/${seg}/${nav}/  /${seg}/${nav}/index.html  200`);
    }
    lines.push(`/${seg}/blog/*/  /${seg}/blog/:splat/index.html  200`);
    for (const svc of svcIds) {
      lines.push(`/${seg}/${svc}/  /${seg}/${svc}/index.html  200`);
    }
    for (const dslug of distSlugs) {
      lines.push(`/${seg}/dzielnice/${dslug}/  /${seg}/dzielnice/${dslug}/index.html  200`);
    }
    for (const rslug of rdSlugs) {
      lines.push(`/${seg}/trasy/${rslug}/  /${seg}/trasy/${rslug}/index.html  200`);
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
  const blogSlugs = discoverBlogPostSlugs(html);
  const distSlugs = districtSlugs();
  const rdSlugs = roadSlugs();
  // Внешний destination: Vercel не подставляет :path* в абсолютный URL — только $1 из группы в source.
  // Google «Смена адреса» проверяет именно 301 с главной; permanent:true в Vercel даёт 308.
  // ВАЖНО (Domains UI): для laweta-pomoc-* НЕ включать «Redirect to www» на том же домене —
  // иначе apex→www даст 308 и только потом сработает 301 на warszawa (2 хопа). Apex и www
  // старого домена должны оба идти одним 301 на www.warszawa-laweta.com (эти правила ниже).
  const legacyFaviconToCanonical = LEGACY_SITE_HOSTS.map((host) => ({
    source: '/favicon.ico',
    has: [{ type: 'host', value: host }],
    destination: `${SITE}/favicon.ico`,
    statusCode: 301,
  }));
  const legacyRedirects = LEGACY_SITE_HOSTS.flatMap((host) => [
    { source: '/', has: [{ type: 'host', value: host }], destination: `${SITE}/`, statusCode: 301 },
    { source: '/(.*)', has: [{ type: 'host', value: host }], destination: `${SITE}/$1`, statusCode: 301 },
  ]);
  // Apex brand host → www with real 301 (Google prefers permanent; Vercel Domains often emits 307).
  const primaryApexRedirects = [
    { source: '/', has: [{ type: 'host', value: PRIMARY_APEX_HOST }], destination: `${SITE}/`, statusCode: 301 },
    { source: '/(.*)', has: [{ type: 'host', value: PRIMARY_APEX_HOST }], destination: `${SITE}/$1`, statusCode: 301 },
  ];
  // Bare / language negotiation is Edge Middleware (sites/innser/middleware.js).
  // Do NOT add vercel.json `/` → `/pl/` here — config redirects run before middleware.
  const redirects = [
    ...primaryApexRedirects,
    ...legacyFaviconToCanonical,
    ...legacyRedirects,
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
  for (const seg of ['pl', 'en', 'ru', 'uk']) {
    redirects.push(
      { source: `/${seg}/map`, destination: `/${seg}/about/`, permanent: true },
      { source: `/${seg}/map/`, destination: `/${seg}/about/`, permanent: true }
    );
  }
  // Retired URLs first so /svc10 never becomes a trailing-slash rewrite to orphan HTML.
  appendRetiredSvcRedirects(redirects);
  appendTrailingSlashRedirects(redirects, html);
  const rewrites = [];
  for (const seg of ['pl', 'en', 'ru', 'uk']) {
    rewrites.push({ source: `/${seg}/`, destination: `/${seg}/index.html` });
    rewrites.push({ source: `/${seg}/blog/`, destination: `/${seg}/blog/index.html` });
    rewrites.push({ source: `/${seg}/gallery/`, destination: `/${seg}/gallery/index.html` });
    rewrites.push({ source: `/${seg}/dzielnice/`, destination: `/${seg}/dzielnice/index.html` });
    rewrites.push({ source: `/${seg}/trasy/`, destination: `/${seg}/trasy/index.html` });
    for (const nav of NAV_PAGE_TAILS) {
      rewrites.push({ source: `/${seg}/${nav}/`, destination: `/${seg}/${nav}/index.html` });
    }
    for (const slug of blogSlugs) {
      rewrites.push({
        source: `/${seg}/blog/${slug}/`,
        destination: `/${seg}/blog/${slug}/index.html`,
      });
    }
    for (const svc of svcIds) {
      if (svc === 'svc10') continue;
      rewrites.push({ source: `/${seg}/${svc}/`, destination: `/${seg}/${svc}/index.html` });
    }
    for (const dslug of distSlugs) {
      rewrites.push({
        source: `/${seg}/dzielnice/${dslug}/`,
        destination: `/${seg}/dzielnice/${dslug}/index.html`,
      });
    }
    for (const rslug of rdSlugs) {
      rewrites.push({
        source: `/${seg}/trasy/${rslug}/`,
        destination: `/${seg}/trasy/${rslug}/index.html`,
      });
    }
  }
  const cfg = {
    $schema: 'https://openapi.vercel.sh/vercel.json',
    framework: null,
    buildCommand: 'npm run build',
    outputDirectory: 'dist',
    redirects,
    rewrites,
    headers: [
      {
        source: '/favicon.ico',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/favicon.png',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
      {
        source: '/apple-touch-icon.png',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' },
        ],
      },
    ],
  };
  fs.writeFileSync(path.join(INNSER_DIST_ROOT, 'vercel.json'), JSON.stringify(cfg, null, 2) + '\n', 'utf8');
}

/** macOS junk / AppleDouble — cpSync+chmod often ENOENT on these during large gallery copies. */
function shouldSkipCopyName(name) {
  return name === '.DS_Store' || name === '.gitkeep' || name.startsWith('._') || name === 'Thumbs.db';
}

function sleepMs(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    /* retry backoff for flaky copyFile */
  }
}

/** Robust recursive copy (avoids fs.cpSync chmod races on large assets/gallery). */
function copyTreeRobust(srcRoot, dstRoot) {
  let copied = 0;
  let skipped = 0;
  function walk(srcDir, dstDir) {
    fs.mkdirSync(dstDir, { recursive: true });
    let entries;
    try {
      entries = fs.readdirSync(srcDir, { withFileTypes: true });
    } catch (e) {
      console.warn('copyTree: cannot read', srcDir, e.message);
      return;
    }
    for (const ent of entries) {
      if (shouldSkipCopyName(ent.name)) {
        skipped++;
        continue;
      }
      const s = path.join(srcDir, ent.name);
      const d = path.join(dstDir, ent.name);
      let st;
      try {
        st = fs.lstatSync(s);
      } catch (e) {
        console.warn('copyTree: skip missing', s, e.message);
        skipped++;
        continue;
      }
      if (st.isSymbolicLink()) {
        skipped++;
        continue;
      }
      if (st.isDirectory()) {
        walk(s, d);
        continue;
      }
      if (!st.isFile()) {
        skipped++;
        continue;
      }
      let ok = false;
      for (let attempt = 1; attempt <= 4; attempt++) {
        try {
          fs.copyFileSync(s, d);
          ok = true;
          copied++;
          break;
        } catch (e) {
          if (attempt === 4) {
            console.warn('copyTree: failed', path.relative(REPO_ROOT, s), e.message);
            skipped++;
          } else {
            sleepMs(40 * attempt);
          }
        }
      }
      void ok;
    }
  }
  walk(srcRoot, dstRoot);
  return { copied, skipped };
}

function replaceDirFromSource(src, dstLabel) {
  const dst = path.join(OUT, dstLabel);
  fs.rmSync(dst, { recursive: true, force: true });
  const { copied, skipped } = copyTreeRobust(src, dst);
  console.log(
    'Copied',
    path.relative(REPO_ROOT, src),
    '->',
    path.relative(REPO_ROOT, dst),
    `(${copied} files` + (skipped ? `, skipped ${skipped}` : '') + ')'
  );
}

/** Копирует assets/ в dist/assets — на Netlify заливай только содержимое dist/ (и index.html будет рядом с assets/). */
function copyAssetsIntoDist() {
  if (!fs.existsSync(ASSETS_SRC)) {
    console.warn(
      'Нет папки assets/ рядом с innser-v6.html — картинки галереи не попадут в dist. Добавь assets/gallery/*.png и перезапусти сборку.'
    );
    return;
  }
  replaceDirFromSource(ASSETS_SRC, 'assets');
}

/** Фото для карточек услуг 7–9: skup-samochodow.png, zlomowanie-pojazdow.png, laweta-warszawa-24h.png */
function copyServiceImagesIntoDist() {
  if (!fs.existsSync(IMAGES_SRC)) {
    console.warn(
      'Нет папки images/ — положи рядом с innser-v6.html: images/skup-samochodow.png, zlomowanie-pojazdow.png, laweta-warszawa-24h.png и пересобери.'
    );
    return;
  }
  replaceDirFromSource(IMAGES_SRC, 'images');
}

function copyPublicRootFiles() {
  if (!fs.existsSync(PUBLIC_SRC)) return;
  let n = 0;
  for (const name of fs.readdirSync(PUBLIC_SRC)) {
    if (name.startsWith('.')) continue;
    // Не класти public/favicon.png у dist — він часто старий/інший; кореневий favicon.png пишемо з assets у main().
    if (name === 'favicon.png') continue;
    // Safari тягне /apple-touch-icon.png окремо від <link>; public/ був інший файл → різні іконки в Safari.
    if (name === 'apple-touch-icon.png') continue;
    const src = path.join(PUBLIC_SRC, name);
    if (!fs.statSync(src).isFile()) continue;
    fs.copyFileSync(src, path.join(OUT, name));
    console.log('Copied', path.relative(REPO_ROOT, src), '->', path.join(path.relative(REPO_ROOT, OUT), name));
    n++;
  }
}

/** Кореневий /favicon.ico з того ж PNG (квадрат 256 через sharp → png-to-ico). Fallback: assets/favicon-root.ico. */
async function generateRootFavicons() {
  const outRoot = path.join(OUT, 'favicon.ico');
  const pngPath = path.join(OUT, 'assets', FAVICON_ASSET_NAME);
  const sqPath = path.join(OUT, '.favicon-256-square.png');
  const bundledIco = path.join(OUT, 'assets', 'favicon-root.ico');
  if (!fs.existsSync(pngPath)) {
    console.warn('dist/assets/favicon.png missing; skip favicon.ico');
    return;
  }
  try {
    const requireInnser = createRequire(INNSER_PKG_JSON);
    const sharp = requireInnser('sharp');
    const pngToIco = requireInnser('png-to-ico');
    await sharp(pngPath)
      .resize(256, 256, { fit: 'contain', background: FAVICON_RESIZE_BG })
      .png()
      .toFile(sqPath);
    const icoBuf = await pngToIco(sqPath);
    fs.writeFileSync(outRoot, icoBuf);
    fs.rmSync(sqPath, { force: true });
    console.log('Wrote', path.relative(REPO_ROOT, outRoot), '(sharp + png-to-ico)');
  } catch (e) {
    console.warn('favicon.ico generation failed:', e.message);
    if (fs.existsSync(bundledIco)) {
      fs.copyFileSync(bundledIco, outRoot);
      console.log('Fallback:', path.relative(REPO_ROOT, bundledIco), '→ favicon.ico');
    }
  }
}

/** 32×32 для rel=icon sizes=32x32 — краще для смуги вкладок Safari/Chrome. */
async function writeFaviconTabPng(pngBuffer) {
  const name = FAVICON_TAB_ASSET_NAME;
  if (!name) return;
  const outPath = path.join(OUT, 'assets', name);
  try {
    const requireInnser = createRequire(INNSER_PKG_JSON);
    const sharp = requireInnser('sharp');
    await sharp(pngBuffer)
      .resize(32, 32, { fit: 'contain', background: FAVICON_RESIZE_BG })
      .png()
      .toFile(outPath);
    console.log('Wrote', path.relative(REPO_ROOT, outPath), '(32×32 tab)');
  } catch (e) {
    console.warn('favicon-tab 32×32 (sharp) failed:', e.message);
    fs.writeFileSync(outPath, pngBuffer);
    console.log('Wrote', path.relative(REPO_ROOT, outPath), '(fallback: raw favicon)');
  }
}

/** 180×180 з того ж PNG, що й favicon — щоб Safari (який часто бере /apple-touch-icon.png) не показував іншу картинку. */
async function writeAppleTouchIconPng(pngBuffer) {
  const outPath = path.join(OUT, 'apple-touch-icon.png');
  try {
    const requireInnser = createRequire(INNSER_PKG_JSON);
    const sharp = requireInnser('sharp');
    await sharp(pngBuffer)
      .resize(180, 180, { fit: 'contain', background: FAVICON_RESIZE_BG })
      .png()
      .toFile(outPath);
    console.log('Wrote', path.relative(REPO_ROOT, outPath), '(180×180 from favicon)');
  } catch (e) {
    console.warn('apple-touch-icon.png (sharp) failed:', e.message);
    fs.writeFileSync(outPath, pngBuffer);
    console.log('Wrote', path.relative(REPO_ROOT, outPath), '(fallback: raw favicon bytes)');
  }
}

function escapeHtmlAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

async function main() {
  if (!fs.existsSync(SRC)) {
    console.error('Missing source:', SRC);
    process.exit(1);
  }
  let raw = fs.readFileSync(SRC, 'utf8');
  const mapsKey = (process.env.GOOGLE_MAPS_API_KEY || '').trim();
  raw = raw.replace(/__GOOGLE_MAPS_API_KEY__/g, escapeHtmlAttr(mapsKey));
  if (!mapsKey) {
    console.warn('GOOGLE_MAPS_API_KEY not set — svc1 tow calculator uses manual km input only.');
  }
  if (!raw.includes(AUTO_DETECT_SNIPPET)) {
    console.error('Source HTML: auto-detect block not found (file changed?)');
    process.exit(1);
  }

  const faviconSrc = resolveFaviconSource();
  if (!faviconSrc) {
    console.error('Немає джерела favicon: додай assets/favicon-emergency-triangle.svg або assets/favicon.png');
    process.exit(1);
  }
  const faviconBuf = await loadFaviconRasterBuffer(faviconSrc);
  FAVICON_ASSET_NAME =
    'favicon-' + crypto.createHash('sha256').update(faviconBuf).digest('hex').slice(0, 10) + '.png';
  FAVICON_TAB_ASSET_NAME =
    'favicon-tab-' + crypto.createHash('sha256').update(faviconBuf).update(':32').digest('hex').slice(0, 10) + '.png';

  fs.mkdirSync(OUT, { recursive: true });

  const galleryItems = collectGalleryItems(raw);

  for (const key of Object.keys(LOCALES)) {
    const L = LOCALES[key];
    const dir = path.join(OUT, L.pathSeg);
    fs.mkdirSync(dir, { recursive: true });
    let html = buildLocaleHtml(raw, key);
    if (galleryItems.length) {
      html = injectGalleryStaticHtml(html, galleryItems, L.pathSeg);
    }
    fs.writeFileSync(path.join(dir, 'index.html'), html, 'utf8');
    console.log('Wrote', path.relative(REPO_ROOT, path.join(dir, 'index.html')));
  }

  writeDeepRouteHtmlCopies(raw);
  removeRetiredSvcOrphans();

  writeRootRedirect();
  console.log('Wrote', path.relative(REPO_ROOT, path.join(OUT, 'index.html')));

  writeSitemapAndRobots(raw);
  writeImageSitemap(raw);
  console.log('Wrote', path.relative(REPO_ROOT, path.join(OUT, 'sitemap.xml')));
  console.log('Wrote', path.relative(REPO_ROOT, path.join(OUT, 'sitemap-images.xml')));
  console.log('Wrote', path.relative(REPO_ROOT, path.join(OUT, 'robots.txt')));

  writeNetlifyRedirects(raw);
  console.log('Wrote', path.relative(REPO_ROOT, path.join(OUT, '_redirects')));

  writeVercelProjectJson(raw);
  console.log('Wrote', path.relative(REPO_ROOT, path.join(INNSER_DIST_ROOT, 'vercel.json')));

  copyAssetsIntoDist();
  copyServiceImagesIntoDist();
  copyPublicRootFiles();
  fs.writeFileSync(path.join(OUT, 'assets', FAVICON_ASSET_NAME), faviconBuf);
  fs.writeFileSync(path.join(OUT, 'assets', 'favicon.png'), faviconBuf);
  fs.writeFileSync(path.join(OUT, 'favicon.png'), faviconBuf);
  console.log('Wrote', path.relative(REPO_ROOT, path.join(OUT, 'favicon.png')), '(same bytes as assets favicon)');
  await writeFaviconTabPng(faviconBuf);
  await generateRootFavicons();
  await writeAppleTouchIconPng(faviconBuf);

  console.log(
    '\nNetlify: перетащи на Deploy ОДНУ папку — ВСЁ СОДЕРЖИМОЕ папки dist/ (index.html, pl, en, ru, uk, assets, images, robots.txt, sitemap.xml, _redirects, файлы из public/).'
  );
  console.log('Не оборачивай в лишнюю папку: в корне заливки должен лежать index.html.');
  console.log(
    'Vercel (INNSER): отдельный проект, Root Directory = sites/innser, build: npm run build, output: dist; vercel.json лежит в sites/innser/.'
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
