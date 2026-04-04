#!/usr/bin/env node
/**
 * Generates index.html from the pomoc landing HTML (same transforms as import-pomoc-html.mjs).
 * Run: node scripts/write-pomoc-index.mjs [path-to-source.html]
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.join(__dirname, '..');
const src = process.argv[2] || path.join(process.env.HOME || '', 'Downloads/pomoc-drogowa-warszawa (5).html');
const dst = path.join(SITE_ROOT, 'index.html');

if (!fs.existsSync(src)) {
  console.error('Source not found:', src);
  process.exit(1);
}

let html = fs.readFileSync(src, 'utf8');

html = html.replaceAll('https://www.warszawa-laweta.com/?lang=', 'https://www.laweta-warszawa.net/?lang=');
html = html.replaceAll('href="https://www.warszawa-laweta.com/"', 'href="https://www.laweta-warszawa.net/"');
html = html.replaceAll('content="https://www.warszawa-laweta.com/"', 'content="https://www.laweta-warszawa.net/"');
html = html.replaceAll('"url": "https://www.warszawa-laweta.com/"', '"url": "https://www.laweta-warszawa.net/"');

html = html.replace(
  '<div class="hamburger" onclick="toggleMenu()">',
  '<div class="hamburger" id="hamburger" onclick="toggleMenu()">'
);

if (!html.includes('favicon.svg')) {
  html = html.replace(
    '<meta charset="UTF-8">',
    '<meta charset="UTF-8">\n<link rel="icon" href="/favicon.svg" type="image/svg+xml">'
  );
}

fs.writeFileSync(dst, html);
console.log('Wrote', dst, '(' + html.length + ' bytes)');
