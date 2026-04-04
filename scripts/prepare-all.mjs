#!/usr/bin/env node
/**
 * Один прогон перед деплоем:
 * 1) импорт pomoc из ~/Downloads/… (если файл есть)
 * 2) web/ → dist/ (визитка laweta-warszawa.net)
 * 3) INNSER → sites/innser/dist + sites/innser/vercel.json
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const pomoc = path.join(process.env.HOME || '', 'Downloads/pomoc-drogowa-warszawa (5).html');
const importScript = path.join(__dirname, 'import-pomoc-html.mjs');

if (fs.existsSync(pomoc)) {
  const r = spawnSync(process.execPath, [importScript, pomoc], { cwd: ROOT, stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status ?? 1);
  console.log('Imported pomoc → web/index.html');
} else {
  console.warn('Skip import (file missing):', pomoc);
}

const run = (rel) => {
  const r = spawnSync(process.execPath, [path.join(__dirname, rel)], { cwd: ROOT, stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status ?? 1);
};

run('build.mjs');
run('build-i18n.mjs');
console.log('OK: dist/ (pomoc) + sites/innser/dist (INNSER). Push → Vercel.');
