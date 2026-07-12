/**
 * Gallery SEO: parse innser-v6.html, static crawlable grid, image sitemap, JSON-LD.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
const GALLERY_DIR = path.join(REPO_ROOT, 'assets', 'gallery');

const LANG_CL = { pl: 'pl', en: 'en', ru: 'ru', uk: 'ua' };

export function escHtmlAttr(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

export function slugifySeo(text, max = 52) {
  return String(text)
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .replace(/ł/g, 'l')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, max)
    .replace(/-+$/g, '');
}

export function seoFilenameFromAlt(plAlt, used) {
  const base = slugifySeo(plAlt) || 'galeria-innser';
  let name = `${base}-innser.jpg`;
  let n = 2;
  while (used.has(name)) {
    name = `${base}-innser-${n}.jpg`;
    n++;
  }
  used.add(name);
  return name;
}

export function parseGalPhotosExtra(raw) {
  const m = raw.match(/var GAL_PHOTOS_EXTRA=(\[[\s\S]*?\]);/);
  if (!m) return [];
  try {
    return new Function(`return ${m[1]}`)();
  } catch {
    return [];
  }
}

/** Home carousel #gal-scroll images with data-alt-* i18n. */
export function parseHomeGalleryImages(raw) {
  const start = raw.indexOf('id="gal-scroll"');
  if (start < 0) return [];
  const end = raw.indexOf('id="gal-scroll2"', start);
  const block = end > start ? raw.slice(start, end) : raw.slice(start, start + 20000);
  const items = [];
  const imgRe = /<img\b[^>]*\bsrc="(\/assets\/gallery\/[^"]+)"[^>]*>/gi;
  let m;
  while ((m = imgRe.exec(block)) !== null) {
    const tag = m[0];
    const pick = (name) => {
      const a = tag.match(new RegExp(`${name}="([^"]*)"`));
      return a ? a[1] : '';
    };
    const pl = pick('data-alt-pl') || pick('alt') || '';
    items.push({
      src: m[1],
      alt: {
        pl,
        en: pick('data-alt-en') || pl,
        ru: pick('data-alt-ru') || pl,
        ua: pick('data-alt-uk') || pl,
      },
    });
  }
  return items;
}

export function collectGalleryItems(raw) {
  const home = parseHomeGalleryImages(raw);
  const extra = parseGalPhotosExtra(raw);
  return [...home, ...extra];
}

export function altForLang(item, langSeg) {
  const cl = LANG_CL[langSeg] || 'pl';
  if (item.alt && typeof item.alt === 'object') {
    return item.alt[cl] || item.alt.pl || '';
  }
  return String(item.alt || '');
}

export function captionForLang(item, langSeg) {
  const cl = LANG_CL[langSeg] || 'pl';
  if (item.cap && typeof item.cap === 'object') {
    return item.cap[cl] || item.cap.pl || altForLang(item, langSeg);
  }
  return altForLang(item, langSeg);
}

export function buildStaticGalleryGrid(items, langSeg) {
  const cells = items
    .map((item) => {
      const src = escHtmlAttr(item.src);
      const alt = escHtmlAttr(altForLang(item, langSeg));
      const cap = escHtmlAttr(captionForLang(item, langSeg));
      return `<figure class="gal-seo-cell" style="width:calc(33% - 8px);min-width:140px;max-width:260px;margin:0;flex:1 1 140px;">
  <img src="${src}" alt="${alt}" title="${alt}" width="260" height="220" loading="lazy" decoding="async" style="width:100%;height:220px;object-fit:cover;border-radius:10px;display:block;">
  <figcaption class="gal-seo-cap" style="font-size:.85rem;line-height:1.45;color:#ddd;margin-top:8px;padding:0 4px 4px;">${cap}</figcaption>
</figure>`;
    })
    .join('\n');
  return `<div class="gal-seo-static" data-innser-gallery-static="1" style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;padding:8px 4px 16px;">\n${cells}\n</div>`;
}

export function injectGalleryStaticHtml(html, items, langSeg) {
  const grid = buildStaticGalleryGrid(items, langSeg);
  if (html.includes('<!--innser-gallery-static-->')) {
    return html.replace(
      /<!--innser-gallery-static-->[\s\S]*?<!--\/innser-gallery-static-->/,
      `<!--innser-gallery-static-->\n${grid}\n<!--/innser-gallery-static-->`
    );
  }
  return html.replace(
    /(<div id="gal-scroll2"[^>]*>)\s*(<\/div>)/,
    `$1\n<!--innser-gallery-static-->\n${grid}\n<!--/innser-gallery-static-->\n$2`
  );
}

export function buildGalleryJsonLd(items, pageUrl, langSeg, siteOrigin) {
  const cl = LANG_CL[langSeg] || 'pl';
  const names = {
    pl: 'Galeria zdjęć — laweta i pomoc drogowa INNSER Warszawa',
    en: 'Photo gallery — INNSER tow truck & roadside assistance Warsaw',
    ru: 'Галерея фото — эвакуатор и помощь на дороге INNSER Варшава',
    ua: 'Галерея фото — евакуатор і допомога на дорозі INNSER Варшава',
  };
  const elements = items.slice(0, 120).map((item, i) => {
    const alt = altForLang(item, langSeg);
    const cap = captionForLang(item, langSeg);
    const imgUrl = item.src.startsWith('http') ? item.src : `${siteOrigin}${item.src}`;
    return {
      '@type': 'ImageObject',
      '@id': `${pageUrl}#img-${i + 1}`,
      url: imgUrl,
      contentUrl: imgUrl,
      name: alt,
      caption: cap,
      description: alt,
    };
  });
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    '@id': `${pageUrl}#gallery`,
    name: names[langSeg] || names.pl,
    url: pageUrl,
    image: elements,
    associatedMedia: elements,
  };
}

export function injectGalleryJsonLd(html, jsonLd) {
  const block = `<script type="application/ld+json" id="innser-gallery-jsonld">${JSON.stringify(jsonLd)}</script>`;
  if (html.includes('<!--innser-gallery-jsonld-->')) {
    return html.replace(
      /<!--innser-gallery-jsonld-->[\s\S]*?<!--\/innser-gallery-jsonld-->/,
      `<!--innser-gallery-jsonld-->\n${block}\n<!--/innser-gallery-jsonld-->`
    );
  }
  return html.replace(
    /(<div class="page" id="p-gallery">)/,
    `$1\n<!--innser-gallery-jsonld-->\n${block}\n<!--/innser-gallery-jsonld-->`
  );
}

export function buildImageSitemapXml(items, siteOrigin, galleryPageUrls) {
  const urlBlocks = galleryPageUrls.map((pageUrl) => {
    const seg = (pageUrl.match(/\/(pl|en|ru|uk)\/gallery\//) || [])[1] || 'pl';
    const images = items
      .map((item) => {
        const imgUrl = item.src.startsWith('http') ? item.src : `${siteOrigin}${item.src}`;
        const title = escHtmlAttr(altForLang(item, seg));
        const caption = escHtmlAttr(captionForLang(item, seg));
        return `    <image:image>
      <image:loc>${escHtmlAttr(imgUrl)}</image:loc>
      <image:title>${title}</image:title>
      <image:caption>${caption}</image:caption>
    </image:image>`;
      })
      .join('\n');
    return `  <url>
    <loc>${escHtmlAttr(pageUrl)}</loc>
${images}
  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlBlocks.join('\n')}
</urlset>
`;
}

/**
 * Rename gal-extra-* and generic jpg-* carousel files to SEO slugs.
 * Updates innser-v6.html paths. Safe to re-run (skips if target exists).
 */
export function applyGalleryFileRenames({ dryRun = false } = {}) {
  const srcPath = path.join(REPO_ROOT, 'innser-v6.html');
  let html = fs.readFileSync(srcPath, 'utf8');
  const items = collectGalleryItems(html);
  const used = new Set(fs.readdirSync(GALLERY_DIR));
  const renames = [];

  for (const item of items) {
    const oldName = path.basename(item.src);
    if (!/^(gal-extra-\d+|jpg-[a-f0-9]+)\.(jpg|png)$/i.test(oldName)) continue;
    const plAlt = item.alt?.pl || item.alt || 'galeria innser';
    const ext = path.extname(oldName).toLowerCase();
    let newName =
      ext === '.png'
        ? `${slugifySeo(plAlt)}-innser.png`
        : seoFilenameFromAlt(plAlt, used);
    if (ext === '.png') {
      let n = 2;
      while (used.has(newName)) {
        newName = `${slugifySeo(plAlt)}-innser-${n}.png`;
        n++;
      }
      used.add(newName);
    }
    if (oldName === newName) continue;
    const oldPath = path.join(GALLERY_DIR, oldName);
    const newPath = path.join(GALLERY_DIR, newName);
    if (!fs.existsSync(oldPath)) continue;
    if (fs.existsSync(newPath) && oldPath !== newPath) {
      newName = oldName;
      continue;
    }
    renames.push({ oldName, newName, oldSrc: item.src, newSrc: `/assets/gallery/${newName}` });
  }

  for (const r of renames) {
    html = html.split(r.oldSrc).join(r.newSrc);
    html = html.split(r.oldName).join(r.newName);
    if (!dryRun) {
      fs.renameSync(path.join(GALLERY_DIR, r.oldName), path.join(GALLERY_DIR, r.newName));
    }
    console.log(`${dryRun ? '[dry] ' : ''}rename ${r.oldName} -> ${r.newName}`);
  }

  if (!dryRun && renames.length) {
    fs.writeFileSync(srcPath, html, 'utf8');
    console.log(`Updated ${renames.length} gallery filenames in innser-v6.html`);
  }
  return renames.length;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const dry = process.argv.includes('--dry-run');
  applyGalleryFileRenames({ dryRun: dry });
}
