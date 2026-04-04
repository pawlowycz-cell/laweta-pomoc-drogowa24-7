#!/usr/bin/env node
/**
 * Копирует mini-site/ → .vercel-mini-out/ для деплоя визитки из корня репозитория
 * (когда в Vercel Root Directory пустой, а не mini-site).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const src = path.join(root, 'mini-site');
const out = path.join(root, '.vercel-mini-out');

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const name of fs.readdirSync(from)) {
    if (name === '.DS_Store') continue;
    const s = path.join(from, name);
    const d = path.join(to, name);
    if (fs.statSync(s).isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

if (!fs.existsSync(src)) {
  console.error('Missing', src);
  process.exit(1);
}
fs.rmSync(out, { recursive: true, force: true });
copyDir(src, out);
console.log('Laweta static →', out);
