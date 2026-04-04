#!/usr/bin/env node
/**
 * Копирует ~/Desktop/MINI COD → репозиторий/mini-site/
 * Перед push на Vercel (если правили визитку на рабочем столе): npm run sync:mini-in
 */
import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.join(__dirname, '..');
const desktopMini = path.join(os.homedir(), 'Desktop', 'MINI COD');
const dst = path.join(REPO_ROOT, 'mini-site');

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

if (!fs.existsSync(desktopMini)) {
  console.error('Нет папки:', desktopMini);
  process.exit(1);
}
fs.rmSync(dst, { recursive: true, force: true });
copyDir(desktopMini, dst);
console.log('OK:', desktopMini, '→', dst);
