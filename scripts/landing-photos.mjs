/**
 * Pick 2 gallery photos per district / suburb / road landing page.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { collectGalleryItems, escHtmlAttr } from './gallery-seo.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');

let galleryCache = null;

export function loadLandingGallery(rawHtml) {
  if (rawHtml != null) {
    galleryCache = collectGalleryItems(rawHtml);
    return galleryCache;
  }
  if (!galleryCache) {
    const raw = fs.readFileSync(path.join(REPO_ROOT, 'innser-v6.html'), 'utf8');
    galleryCache = collectGalleryItems(raw);
  }
  return galleryCache;
}

export function landingGalleryJsonForRuntime(gallery) {
  const items = gallery || loadLandingGallery();
  return JSON.stringify(
    items.map((item) => ({
      src: item.src,
      alt: item.alt || { pl: '', en: '', ru: '', ua: '' },
    }))
  );
}

function hashSlug(s) {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** Stable pair of gallery items for a landing slug (cycles when pages > photos/2). */
export function pickLandingPhotos(gallery, slug, namespace = 'landing', count = 2) {
  const n = gallery?.length || 0;
  if (!n || count < 1) return [];
  const start = hashSlug(`${namespace}:${slug}`) % n;
  const step = n > 1 ? Math.max(1, Math.floor(n / 3)) : 1;
  const out = [];
  const used = new Set();
  for (let i = 0; i < count; i++) {
    let idx = (start + i * step) % n;
    let guard = 0;
    while (used.has(idx) && guard < n) {
      idx = (idx + 1) % n;
      guard++;
    }
    used.add(idx);
    out.push(gallery[idx]);
  }
  return out;
}

function altForCl(item, langCl) {
  if (item?.alt && typeof item.alt === 'object') {
    return item.alt[langCl] || item.alt.pl || '';
  }
  return String(item?.alt || '');
}

/** Two figures in a responsive grid (reuses .bimg styles). */
export function renderLandingPhotosHtml(slug, langCl, namespace = 'landing', gallery) {
  const items = pickLandingPhotos(gallery || loadLandingGallery(), slug, namespace, 2);
  if (!items.length) return '';
  const figs = items
    .map((item) => {
      const alt = escHtmlAttr(altForCl(item, langCl));
      const src = escHtmlAttr(item.src);
      return `<figure class="bimg dist-photo"><img src="${src}" alt="${alt}" loading="lazy" decoding="async" width="560" height="420"></figure>`;
    })
    .join('');
  return `<div class="dist-photos">${figs}</div>`;
}
