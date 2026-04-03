#!/usr/bin/env node
/**
 * Replaces data:image/jpeg;base64,... in innser-v6.html with /assets/gallery/jpg-{hash}.jpg
 * and writes decoded files under assets/gallery/.
 */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const htmlPath = path.join(ROOT, 'innser-v6.html');
const galDir = path.join(ROOT, 'assets', 'gallery');

fs.mkdirSync(galDir, { recursive: true });

let html = fs.readFileSync(htmlPath, 'utf8');
const re = /data:image\/jpeg;base64,([A-Za-z0-9+/=]+)/g;
/** @type {Map<string, string>} */
const uriToPath = new Map();

let m;
while ((m = re.exec(html)) !== null) {
  const full = m[0];
  if (uriToPath.has(full)) continue;
  const buf = Buffer.from(m[1], 'base64');
  const h = crypto.createHash('sha256').update(buf).digest('hex').slice(0, 12);
  const fname = `jpg-${h}.jpg`;
  const diskPath = path.join(galDir, fname);
  if (!fs.existsSync(diskPath)) {
    fs.writeFileSync(diskPath, buf);
    console.error('wrote', fname, buf.length, 'bytes');
  }
  uriToPath.set(full, `/assets/gallery/${fname}`);
}

for (const [dataUri, url] of uriToPath) {
  const parts = html.split(dataUri);
  if (parts.length === 1) continue;
  html = parts.join(url);
}

// Gallery strip: lazy-load hashed JPEG thumbs (openLightbox rows)
html = html.replace(
  /(onclick="openLightbox\(\d+\)")><img (src="\/assets\/gallery\/jpg-[^"]+")/g,
  '$1><img loading="lazy" $2'
);

// «Лицо фирмы» — первый крупный статичный кадр после услуг
html = html.replace(
  /(<div style="border-radius:18px;overflow:hidden;box-shadow:0 20px 60px rgba\(0,0,0,\.5\);">\s*)<img (src="\/assets\/gallery\/jpg-[^"]+")/,
  '$1<img fetchpriority="high" decoding="async" $2'
);

fs.writeFileSync(htmlPath, html);
console.error('unique jpeg blobs:', uriToPath.size);
