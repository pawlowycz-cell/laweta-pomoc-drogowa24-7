#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'web');
const OUT = path.join(ROOT, 'dist');

// If the pomoc landing HTML exists locally, refresh web/index.html (canonical → laweta-warszawa.net, hamburger id, favicon).
const POMOC_DEFAULT = path.join(process.env.HOME || '', 'Downloads/pomoc-drogowa-warszawa (5).html');
const importScript = path.join(__dirname, 'import-pomoc-html.mjs');
if (fs.existsSync(POMOC_DEFAULT) && fs.existsSync(importScript)) {
  const r = spawnSync(process.execPath, [importScript, POMOC_DEFAULT], {
    cwd: ROOT,
    stdio: 'inherit',
  });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const name of fs.readdirSync(from)) {
    const s = path.join(from, name);
    const d = path.join(to, name);
    if (fs.statSync(s).isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

if (!fs.existsSync(SRC)) {
  console.error('Missing folder:', SRC);
  process.exit(1);
}

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
copyDir(SRC, OUT);
console.log('Built dist/ from web/ (laweta-warszawa.net)');
