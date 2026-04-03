#!/usr/bin/env node
/**
 * Ключевые фразы в svcN_p*, svcN_faq*, svcN_h* (все языки): <strong class="xb">…</strong>
 * Не трогает svcN_t, svcN_d, seo, keywords.
 * Все вхождения «24/7» оборачиваются в xb, если ещё не в <strong class="xb">24/7</strong>.
 * Старый <strong> без class → <strong class="xb">
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, '..', 'innser-v6.html');

const PHRASES = {
  pl: [
    'Warszawie i w promieniu 500 km',
    'w promieniu 500 km',
    'w promieniu około 50 km',
    'na terenie Warszawy',
    'na terenie całej Warszawy',
    'pomocy drogowej',
    'pomoc drogowa',
    'holowanie z parkingu podziemnego',
    'holowanie Warszawa',
    'holowanie',
    'laweta',
    'wymiana koła',
    'odpalanie boosterem',
    'odpalanie na kable',
    'otwieranie samochodów',
    'otwieranie',
    'skup samochodów',
    'skup aut',
    'złomowanie pojazdów',
    'utylizacja pojazdu',
    'wycena przez telefon',
    'wycena telefoniczna',
    'wstępnie przez telefon',
    'po zdjęciach',
    'gotówką',
    '20-30 minut',
    '30 minut',
    'całą dobę',
    '365 dni w roku',
    'profesjonalne narzędzia',
    'specjalistyczne narzędzia',
    'motocykle',
    'warsztatu',
    'wulkanizatora',
    'akumulator',
    'WhatsApp',
    'SMS',
    'dokumenty',
    '506-001-057',
    '24/7',
    'INNSER',
    'w nocy',
    'popularne marki',
    'przyjedziecie',
    'Rok produkcji',
    'niesprawne',
    'zdjęciach',
    'wycena',
    'podwórka',
    'złomujecie',
    'wyrejestrowaniu',
    'Copart',
    'Europie',
    'kabli rozruchowych',
    'elektroniki pojazdu',
    'Booster',
    'boostery',
    'komputera pokładowego',
    '-20°C',
    'Nasi technicy',
    'bezpieczeństwa',
    'wymiany koła',
    'koła zapasowego',
    'parkingu podziemnego',
    'specjalność',
    'holujecie',
    'skrzynia biegów',
    'marki otwieracie',
    'Ile to trwa',
    'w promieniu 50 km',
    'odpalanie',
    'kompletności dokumentów',
    'znów gaśnie',
  ],
  en: [
    'within 500 km',
    'within ~50 km',
    'within about 50 km',
    'Warsaw and surroundings',
    'in Warsaw',
    'across Warsaw',
    'roadside assistance',
    'underground parking',
    'flatbed',
    'towing',
    'jump start',
    'booster',
    'tire change',
    'car lockout',
    'cash for cars',
    'vehicle scrapping',
    'phone quote',
    'by phone',
    'same-day cash',
    '20-30 minutes',
    '30 minutes',
    '24 hours',
    '365 days',
    'professional tools',
    'motorcycles',
    'workshop',
    'battery',
    'WhatsApp',
    'SMS',
    'documents',
    '506-001-057',
    '24/7',
    'INNSER',
    'at night',
    'damage my car',
    'specialist tools',
    'car brands',
    'popular brands',
    'Year and mileage',
    'non-running',
    'photos',
    'pricing',
    'yard',
    'deregistration',
    'accident',
    'How long',
    'How far',
    'jump leads',
    'vehicle electronics',
    'Booster',
    '-20°C',
    'technicians',
    'spare tire',
    'busy road',
    'tire shop',
    'specialty',
    'Copart',
    'Europe',
    'car stalls',
    'How fast',
  ],
  ru: [
    'Варшаве и в радиусе 500 км',
    'в радиусе 500 км',
    'в радиусе около 50 км',
    'помощи на дороге',
    'помощь на дороге',
    'эвакуация',
    'эвакуатор',
    'прикурить машину кабелями',
    'прикурить бустером',
    'замена колеса',
    'вскрытие автомобиля',
    'скупка авто',
    'утилизация автомобилей',
    'лафета',
    'оценка по телефону',
    'по телефону',
    'по фото',
    'наличными',
    '20-30 минут',
    '30 минут',
    'круглосуточно',
    'профессиональные инструменты',
    'мотоциклы',
    'автосервис',
    'аккумулятор',
    'WhatsApp',
    'документы',
    '506-001-057',
    '24/7',
    'INNSER',
    'ночью',
    'открытие мой',
    'специальные инструменты',
    'популярные марки',
    'пробег',
    'неисправные авто',
    'после аварий',
    'краткого описания или фото',
    'сделать предложение',
    'Как проходит оценка',
    'с двора',
    'пригорода',
    'Утилизируете',
    'ДТП',
    'снятием с учёта',
    'лафеты',
    'комплект документов',
    'Copart',
    'Европе',
    'электроники',
    'Бустер',
    'бустер',
    '-20°C',
    'Наши техники',
    'безопасность',
    'замены колеса',
    'запасного колеса',
    'подземного паркинга',
    'СТО',
    'буксировки на СТО',
    'сломался в дороге',
    'городской службой',
    'серьёзных аварий',
    'Какие марки',
    'Как быстро',
    'электронику',
    'Сколько времени',
    'снова глохнет',
    'эвакуацию в сервис',
    'шиномонтажу',
    'подземной парковки',
    'наша специализация',
    'Как далеко эвакуируете',
    'Сколько это занимает',
    'Варшава +',
  ],
  ua: [
    'у Варшаві та в радіусі 500 км',
    'в радіусі 500 км',
    'в радіусі близько 50 км',
    'допомоги на дорозі',
    'допомога на дорозі',
    'евакуація',
    'евакуатор',
    'прикурити кабелями',
    'прикурити бустером',
    'заміна колеса',
    'відкриття авто',
    'викуп авто',
    'утилізація авто',
    'лафета',
    'оцінка телефоном',
    'за телефоном',
    'за фото',
    'готівкою',
    '20-30 хвилин',
    '30 хвилин',
    'цілодобово',
    'професійні інструменти',
    'мотоцикли',
    'акумулятор',
    'WhatsApp',
    'документи',
    '506-001-057',
    '24/7',
    'INNSER',
    'вночі',
    'відкриття мій',
    'спеціальні інструменти',
    'популярні марки',
    'пробіг',
    'несправні авто',
    'після зіткнень',
    'короткого опису або фото',
    'зробити пропозицію',
    'Як відбувається оцінка',
    'з двору',
    'передмістя',
    'утилізуєте',
    'ДТП',
    'зняттям з обліку',
    'лафети',
    'комплекту документів',
    'Copart',
    'Європі',
    'електроніки',
    'Бустер',
    'портативний',
    'бустер',
    '-20°C',
    'Наші техніки',
    'безпеку',
    'заміни колеса',
    'запасного колеса',
    'підземних паркінгів',
    'евакуації',
    'спеціалізація',
    'СТО',
    'буксирування',
    '500 км',
    'Які марки',
    'електроніку',
    'Скільки часу',
    'знову глохне',
    'евакуацію до сервісу',
    'шиномонтажу',
    'підземного паркінгу',
    'Як далеко евакуюєте',
    'Скільки це триває',
    'Як швидко',
  ],
};

/** Якщо основний список нічого не зловив — короткі якорі */
const FALLBACK = {
  pl: ['Warszawie', 'Warszawy', 'Warszawa', 'telefon', 'gotówką', 'technicy', 'nocy'],
  en: ['Warsaw', 'phone', 'cash', 'technicians', 'night'],
  ru: ['Варшаве', 'Варшавы', 'Варшава', 'телефон', 'наличными', 'техники', 'ночью', 'СТО', 'ДТП'],
  ua: ['Варшаві', 'Варшава', 'телефон', 'готівкою', 'техніки', 'вночі', 'СТО', 'ДТП'],
};

const MAX_WRAP = 14;

function decodeFileString(s) {
  let out = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '\\' && i + 1 < s.length) {
      if (s[i + 1] === '\\') {
        out += '\\';
        i++;
        continue;
      }
      if (s[i + 1] === '"') {
        out += '"';
        i++;
        continue;
      }
    }
    out += s[i];
  }
  return out;
}

function encodeFileString(s) {
  return s.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
}

function extractLocale(raw, lang) {
  const needle = `${lang}:{`;
  const start = raw.indexOf(needle);
  if (start < 0) return null;
  let i = start + needle.length;
  let depth = 1;
  for (; i < raw.length && depth > 0; i++) {
    const c = raw[i];
    if (c === '"' && raw[i - 1] !== '\\') {
      i++;
      while (i < raw.length) {
        if (raw[i] === '\\') {
          i += 2;
          continue;
        }
        if (raw[i] === '"') break;
        i++;
      }
      continue;
    }
    if (c === '{') depth++;
    if (c === '}') depth--;
  }
  return { start, end: i + 1, slice: raw.slice(start, i + 1) };
}

function insideOpenStrong(s, pos) {
  const before = s.slice(0, pos);
  const lastOpen = before.lastIndexOf('<strong');
  const lastClose = before.lastIndexOf('</strong>');
  return lastOpen > lastClose;
}

/** indexOf з урахуванням регістру (фрази в PHRASES часто lowercase, у тексті — з великої літери) */
function indexIgnoreCase(haystack, needle) {
  if (!needle) return -1;
  const h = haystack.toLowerCase();
  const n = needle.toLowerCase();
  return h.indexOf(n);
}

function emphasizePlain(text, lang) {
  const phrases = PHRASES[lang];
  if (!phrases) return text;
  let out = text;
  let wraps = 0;
  for (const phrase of phrases) {
    if (wraps >= MAX_WRAP) break;
    const idx = indexIgnoreCase(out, phrase);
    if (idx < 0) continue;
    if (insideOpenStrong(out, idx)) continue;
    const matched = out.slice(idx, idx + phrase.length);
    const wrap = `<strong class="xb">${matched}</strong>`;
    out = out.slice(0, idx) + wrap + out.slice(idx + phrase.length);
    wraps++;
  }
  if (!out.includes('class="xb"')) {
    for (const phrase of FALLBACK[lang] || []) {
      if (wraps >= MAX_WRAP) break;
      const idx = indexIgnoreCase(out, phrase);
      if (idx < 0) continue;
      if (insideOpenStrong(out, idx)) continue;
      const matched = out.slice(idx, idx + phrase.length);
      const wrap = `<strong class="xb">${matched}</strong>`;
      out = out.slice(0, idx) + wrap + out.slice(idx + phrase.length);
      wraps++;
    }
  }
  return out;
}

function upgradeStrongToXb(text) {
  if (!text.includes('<strong')) return text;
  if (text.includes('class="xb"')) return text;
  return text.replace(/<strong>/g, '<strong class="xb">');
}

const XB247_OPEN = '<strong class="xb">';
const NEEDLE247 = '24/7';

function isAlreadyXb247(text, idx) {
  if (text.slice(idx - XB247_OPEN.length, idx) !== XB247_OPEN) return false;
  return text.slice(idx + NEEDLE247.length, idx + NEEDLE247.length + 9) === '</strong>';
}

/** Кожне «24/7» поза вже обгорнутим xb-тегом і поза будь-яким <strong>… */
function wrapAll247(text) {
  let out = '';
  let i = 0;
  for (;;) {
    const j = text.indexOf(NEEDLE247, i);
    if (j < 0) {
      out += text.slice(i);
      return out;
    }
    out += text.slice(i, j);
    if (isAlreadyXb247(text, j) || insideOpenStrong(text, j)) {
      out += NEEDLE247;
    } else {
      out += `${XB247_OPEN}${NEEDLE247}</strong>`;
    }
    i = j + NEEDLE247.length;
  }
}

function transformBlock(blockSlice, lang) {
  const keyRe = /\b(svc[1-9]_(?:p\d+|faq\d+[aq]|h\d+)):"((?:[^"\\]|\\.)*)"/g;
  return blockSlice.replace(keyRe, (full, key, rawInner) => {
    const decoded = decodeFileString(rawInner);
    let next = decoded;

    if (!decoded.includes('class="xb"')) {
      if (decoded.includes('<')) {
        const u = upgradeStrongToXb(decoded);
        if (u !== decoded) next = u;
      } else {
        const e = emphasizePlain(decoded, lang);
        if (e !== decoded) next = e;
      }
    }

    next = wrapAll247(next);
    if (next === decoded) return full;
    return `${key}:"${encodeFileString(next)}"`;
  });
}

function main() {
  let raw = fs.readFileSync(SRC, 'utf8');
  let n = 0;
  for (const lang of ['pl', 'en', 'ru', 'ua']) {
    const loc = extractLocale(raw, lang);
    if (!loc) {
      console.error('Locale not found:', lang);
      process.exit(1);
    }
    const newSlice = transformBlock(loc.slice, lang);
    if (newSlice !== loc.slice) {
      raw = raw.slice(0, loc.start) + newSlice + raw.slice(loc.end);
      n++;
    }
  }
  fs.writeFileSync(SRC, raw, 'utf8');
  console.log('OK', SRC, 'locales updated:', n);
}

main();
