#!/usr/bin/env node
/**
 * SVG → PNG з прозорим фоном (без білого поля qlmanage). resvg (WASM), без native sharp.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const svgPath = path.join(ROOT, 'assets', 'favicon-emergency-triangle.svg');

function render(size, outFile) {
  const svg = fs.readFileSync(svgPath, 'utf8');
  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: size,
    },
  });
  const png = resvg.render();
  const buf = png.asPng();
  fs.writeFileSync(outFile, buf);
  console.log('Wrote', path.relative(ROOT, outFile), `${size}×${size}`);
}

render(64, path.join(ROOT, 'assets', 'favicon-emergency-triangle.png'));
render(180, path.join(ROOT, 'public', 'apple-touch-icon.png'));
render(64, path.join(ROOT, 'public', 'favicon.png'));
