#!/usr/bin/env node
/**
 * Один прогон перед деплоем INNSER (только большой сайт):
 * sites/innser/dist + sites/innser/vercel.json через build-i18n.
 * Визитка laweta-warszawa.net — отдельная папка на рабочем столе: ~/Desktop/MINI COD
 */
import path from 'path';
import { spawnSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

const run = (rel) => {
  const r = spawnSync(process.execPath, [path.join(__dirname, rel)], { cwd: ROOT, stdio: 'inherit' });
  if (r.status !== 0) process.exit(r.status ?? 1);
};

run('build-i18n.mjs');
console.log('OK: sites/innser/dist (INNSER). Визитка: ~/Desktop/MINI COD → отдельный деплой.');
