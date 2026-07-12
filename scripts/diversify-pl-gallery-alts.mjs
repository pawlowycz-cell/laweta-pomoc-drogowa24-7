#!/usr/bin/env node
/**
 * Diversify Polish gallery alt texts — reduce "holowanie" repetition.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const HTML = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'innser-v6.html');

const TOW_LEADS = [
  'Pomoc drogowa Warszawa',
  'Holowanie w Warszawie',
  'Laweta w Warszawie',
  'Pomoc drogowa Warszawa 24/7',
  'Laweta w Warszawie — transport',
  'Holowanie w Warszawie — laweta INNSER',
];

const JUMP_LEADS = [
  'Usługa odpalenia na kable',
  'Odpalenie boosterem',
  'Odpalenie busterem',
];

const MID_SWAP = [
  'pomoc drogowa Warszawa',
  'laweta w Warszawie',
  'holowanie w Warszawie',
  'transport lawetą',
  'pomoc drogowa 24/7',
];

const JUMP_SPRINKLE = [
  { at: 6, phrase: 'usługa odpalenia na kable' },
  { at: 13, phrase: 'odpalenie boosterem' },
  { at: 20, phrase: 'odpalenie busterem' },
  { at: 27, phrase: 'odpalenie na kable' },
  { at: 34, phrase: 'odpalenie boosterem Warszawa' },
  { at: 41, phrase: 'odpalenie busterem Warszawa' },
  { at: 48, phrase: 'usługa odpalenia na kable INNSER' },
  { at: 55, phrase: 'odpalenie boosterem INNSER' },
  { at: 62, phrase: 'odpalenie busterem INNSER' },
  { at: 69, phrase: 'odpalenie na kable Warszawa' },
  { at: 76, phrase: 'odpalenie boosterem 24/7' },
  { at: 83, phrase: 'odpalenie busterem 24/7' },
];

function cleanBody(text, leadHasTransport) {
  let out = text
    .replace(/\bholowanie powypadkowego\b/gi, 'transport powypadkowego auta')
    .replace(/\bholowanie powypadkowe\b/gi, 'transport powypadkowego auta')
    .replace(/\bholowanie luksusowych aut\b/gi, 'transport aut premium')
    .replace(/\bholowanie sportowych aut\b/gi, 'transport aut sportowych')
    .replace(/\bholowanie 24\/7\b/gi, 'usługa 24/7');
  if (leadHasTransport) {
    out = out.replace(/\bholowanie\b/gi, '');
  } else {
    out = out.replace(/\bholowanie\b/gi, 'transport');
  }
  return out
    .replace(/\s+/g, ' ')
    .replace(/\s*,\s*,/g, ',')
    .replace(/\s*—\s*—/g, ' — ')
    .replace(/^\s*—\s*/, '')
    .trim();
}

function isJumpPhoto(src) {
  return /booster|buster|odpal/i.test(src);
}

function jumpLead(src, idx) {
  if (/booster/i.test(src)) return idx % 2 === 0 ? 'Odpalenie boosterem' : 'Odpalenie busterem';
  if (/buster/i.test(src)) return 'Odpalenie busterem';
  return JUMP_LEADS[idx % JUMP_LEADS.length];
}

function jumpCaption(src, pl, index) {
  const lead = jumpLead(src, index);
  if (/booster/i.test(src)) {
    return `${lead} — NOCO, pomoc drogowa Warszawa INNSER`;
  }
  if (/kabl/i.test(src)) {
    return `${lead} — pomoc drogowa Warszawa INNSER 506-001-057`;
  }
  const detail = cleanBody(pl.replace(/^Holowanie\s+/i, '').replace(/^Odpalanie\s+/i, ''), false);
  return `${lead} — ${detail}`;
}

function sprinkleJump(pl, index) {
  const rule = JUMP_SPRINKLE.find((r) => r.at === index);
  if (!rule || pl.toLowerCase().includes(rule.phrase.toLowerCase())) return pl;
  if (/booster|buster|kabl|odpal/i.test(pl)) return pl;
  return `${pl}, ${rule.phrase}`;
}

function diversifyPl(pl, index, src) {
  if (/wymiana koła|wymiana-kola/i.test(`${pl} ${src}`)) return pl;

  let out = pl;

  if (isJumpPhoto(src)) {
    out = jumpCaption(src, pl, index);
  } else if (/^Holowanie\s/i.test(pl)) {
    const lead = TOW_LEADS[index % TOW_LEADS.length];
    const body = cleanBody(pl.replace(/^Holowanie\s+/i, ''), /transport/i.test(lead));
    out = `${lead} — ${body}`;
  } else if (/holowanie/i.test(pl)) {
    const swap = MID_SWAP[index % MID_SWAP.length];
    if (/^holowanie/i.test(pl)) {
      out = pl.replace(/^holowanie/i, TOW_LEADS[index % TOW_LEADS.length]);
    } else {
      out = pl
        .replace(/\bholowanie powypadkowe\b/gi, `${swap} — transport powypadkowy`)
        .replace(/\bholowanie luksusowych aut\b/gi, `${swap} — aut premium`)
        .replace(/\bholowanie sportowych aut\b/gi, `${swap} — aut sportowych`)
        .replace(/\bholowanie\b/gi, swap);
    }
    out = out.replace(/\s+/g, ' ').trim();
  }

  return sprinkleJump(out, index);
}

function parseExtra(raw) {
  const m = raw.match(/var GAL_PHOTOS_EXTRA=(\[[\s\S]*?\]);/);
  if (!m) throw new Error('GAL_PHOTOS_EXTRA not found');
  return new Function(`return ${m[1]}`)();
}

function serializeExtra(items) {
  const lines = items.map((item) => {
    const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
    return `  {src:'${item.src}',alt:{pl:'${esc(item.alt.pl)}',en:'${esc(item.alt.en)}',ru:'${esc(item.alt.ru)}',ua:'${esc(item.alt.ua)}'}}`;
  });
  return `var GAL_PHOTOS_EXTRA=[\n${lines.join(',\n')}\n];`;
}

function escAttr(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

let raw = fs.readFileSync(HTML, 'utf8');
const extra = parseExtra(raw);
let globalIdx = 0;

const start = raw.indexOf('id="gal-scroll"');
const end = raw.indexOf('id="gal-scroll2"');
const before = raw.slice(0, start);
const homeBlock = raw.slice(start, end);
const afterStart = raw.slice(end);

const newHomeBlock = homeBlock.replace(/<img\b[^>]*>/gi, (tag) => {
  const plM = tag.match(/data-alt-pl="([^"]*)"/);
  if (!plM) return tag;
  const srcM = tag.match(/src="([^"]*)"/);
  const pl = plM[1];
  const src = srcM ? srcM[1] : '';
  const next = diversifyPl(pl, globalIdx++, src);
  return tag.replace(/data-alt-pl="[^"]*"/, `data-alt-pl="${escAttr(next)}"`).replace(
    /alt="[^"]*"/,
    `alt="${escAttr(next)}"`
  );
});

const newExtra = extra.map((item) => {
  const next = diversifyPl(item.alt.pl, globalIdx++, item.src);
  return { ...item, alt: { ...item.alt, pl: next } };
});

let out = before + newHomeBlock + afterStart;
out = out.replace(/var GAL_PHOTOS_EXTRA=\[[\s\S]*?\];/, serializeExtra(newExtra));

fs.writeFileSync(HTML, out, 'utf8');

const allPl = [];
(newHomeBlock.match(/data-alt-pl="([^"]*)"/g) || []).forEach((x) => {
  allPl.push(x.slice(14, -1).replace(/&quot;/g, '"').replace(/&amp;/g, '&'));
});
newExtra.forEach((x) => allPl.push(x.alt.pl));

console.log({
  total: allPl.length,
  holowanie: allPl.filter((s) => /holowanie/i.test(s)).length,
  pomoc: allPl.filter((s) => /pomoc drogowa warszawa/i.test(s)).length,
  holowW: allPl.filter((s) => /holowanie w warszawie/i.test(s)).length,
  laweta: allPl.filter((s) => /laweta w warszawie/i.test(s)).length,
  kable: allPl.filter((s) => /odpalenia na kable|odpalenie na kable/i.test(s)).length,
  booster: allPl.filter((s) => /boosterem|busterem/i.test(s)).length,
});
