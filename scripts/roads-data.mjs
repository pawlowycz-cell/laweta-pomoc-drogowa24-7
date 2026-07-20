/** Highways / national roads near Warsaw — landing pages (/pl/trasy/{slug}/). */

import { renderRoadRichHtml } from './roads-content.mjs';

const LANGS = ['pl', 'en', 'ru', 'ua'];

const NAMES = {
  "a2": {
    "pl": "A2 (Warszawa–Łódź)",
    "en": "A2 (Warsaw–Łódź)",
    "ru": "A2 (Варшава–Лодзь)",
    "ua": "A2 (Варшава–Лодзь)"
  },
  "s2": {
    "pl": "S2 (Południowa Obwodnica)",
    "en": "S2 (Southern Ring Road)",
    "ru": "S2 (Южная Окружная)",
    "ua": "S2 (Південна Об’їзна)"
  },
  "s7": {
    "pl": "S7 (Warszawa–Gdańsk)",
    "en": "S7 (Warsaw–Gdańsk)",
    "ru": "S7 (Варшава–Гданьск)",
    "ua": "S7 (Варшава–Гданськ)"
  },
  "s8": {
    "pl": "S8 (Warszawa–Wrocław)",
    "en": "S8 (Warsaw–Wrocław)",
    "ru": "S8 (Варшава–Вроцлав)",
    "ua": "S8 (Варшава–Вроцлав)"
  },
  "s17": {
    "pl": "S17 (Warszawa–Lublin)",
    "en": "S17 (Warsaw–Lublin)",
    "ru": "S17 (Варшава–Люблин)",
    "ua": "S17 (Варшава–Люблін)"
  },
  "s79": {
    "pl": "S79",
    "en": "S79",
    "ru": "S79",
    "ua": "S79"
  },
  "dk7": {
    "pl": "DK7",
    "en": "DK7",
    "ru": "DK7",
    "ua": "DK7"
  },
  "dk8": {
    "pl": "DK8",
    "en": "DK8",
    "ru": "DK8",
    "ua": "DK8"
  },
  "dk17": {
    "pl": "DK17",
    "en": "DK17",
    "ru": "DK17",
    "ua": "DK17"
  },
  "dk50": {
    "pl": "DK50",
    "en": "DK50",
    "ru": "DK50",
    "ua": "DK50"
  },
  "obwodnica": {
    "pl": "Obwodnica Warszawy",
    "en": "Warsaw Ring Road",
    "ru": "Окружная Варшавы",
    "ua": "Об’їзна Варшавы"
  }
};

/** @type {{ slug: string, code: string, neighbors: string[], feature: Record<string,string> }[]} */
export const ROADS = [
  {
    slug: "a2",
    code: "A2",
    neighbors: ["s2", "s8", "dk8", "obwodnica"],
    feature: {"pl": "autostrada A2, węzły Konotopa, Pruszków i Grodzisk Mazowiecki", "en": "A2 motorway, Konotopa, Pruszków and Grodzisk Mazowiecki junctions", "ru": "автомагистраль A2, развязки Konotopa, Pruszków и Grodzisk Mazowiecki", "ua": "автомагістраль A2, розв’язки Konotopa, Pruszków і Grodzisk Mazowiecki"},
  },
  {
    slug: "s2",
    code: "S2",
    neighbors: ["a2", "s7", "s8", "s79", "obwodnica"],
    feature: {"pl": "Południowa Obwodnica Warszawy, węzły Puławska, Wilanów i Konotopa", "en": "Warsaw Southern Ring Road, Puławska, Wilanów and Konotopa junctions", "ru": "Южная окружная Варшавы, развязки Puławska, Wilanów и Konotopa", "ua": "Південна об’їзна Варшави, розв’язки Puławska, Wilanów і Konotopa"},
  },
  {
    slug: "s7",
    code: "S7",
    neighbors: ["s2", "s8", "dk7", "obwodnica"],
    feature: {"pl": "droga ekspresowa S7, kierunek Gdańsk / Kraków, węzły Czosnów i Modlin", "en": "S7 expressway towards Gdańsk / Kraków, Czosnów and Modlin junctions", "ru": "скоростная S7 на Гданьск / Краков, развязки Czosnów и Modlin", "ua": "швидкісна S7 на Гданськ / Краків, розв’язки Czosnów і Modlin"},
  },
  {
    slug: "s8",
    code: "S8",
    neighbors: ["a2", "s2", "s7", "dk8", "obwodnica"],
    feature: {"pl": "droga ekspresowa S8, Trasa Armii Krajowej, kierunek Wrocław / Białystok", "en": "S8 expressway, Armii Krajowej route, towards Wrocław / Białystok", "ru": "скоростная S8, трасса Armii Krajowej, направление Вроцлав / Белосток", "ua": "швидкісна S8, траса Armii Krajowej, напрямок Вроцлав / Білосток"},
  },
  {
    slug: "s17",
    code: "S17",
    neighbors: ["s2", "dk17", "dk50", "obwodnica"],
    feature: {"pl": "droga ekspresowa S17 w stronę Lublina, Wawer i Otwock", "en": "S17 expressway towards Lublin, Wawer and Otwock corridor", "ru": "скоростная S17 на Люблин, коридор Wawer и Otwock", "ua": "швидкісна S17 на Люблін, коридор Wawer і Otwock"},
  },
  {
    slug: "s79",
    code: "S79",
    neighbors: ["s2", "s7", "a2"],
    feature: {"pl": "S79 przy lotnisku Okęcie / Chopina, Marynarska i Salomea", "en": "S79 near Chopin Airport / Okęcie, Marynarska and Salomea", "ru": "S79 у аэропорта Окенче / Шопена, Marynarska и Salomea", "ua": "S79 біля аеропорту Окенче / Шопена, Marynarska і Salomea"},
  },
  {
    slug: "dk7",
    code: "DK7",
    neighbors: ["s7", "dk50", "s8"],
    feature: {"pl": "droga krajowa DK7 (Krakowska / Gdańska), miasta pod Warszawą", "en": "national road DK7 (Krakowska / Gdańska), towns near Warsaw", "ru": "национальная дорога DK7 (Krakowska / Gdańska), города у Варшавы", "ua": "національна дорога DK7 (Krakowska / Gdańska), міста біля Варшави"},
  },
  {
    slug: "dk8",
    code: "DK8",
    neighbors: ["a2", "s8", "dk7"],
    feature: {"pl": "droga krajowa DK8, kierunek Wrocław / Białystok poza ekspresówkami", "en": "national road DK8 towards Wrocław / Białystok off the expressways", "ru": "национальная дорога DK8 на Вроцлав / Белосток вне скоростных", "ua": "національна дорога DK8 на Вроцлав / Білосток поза швидкісними"},
  },
  {
    slug: "dk17",
    code: "DK17",
    neighbors: ["s17", "dk50"],
    feature: {"pl": "droga krajowa DK17 w stronę Lublina, Wawer i Józefów", "en": "national road DK17 towards Lublin, Wawer and Józefów", "ru": "национальная дорога DK17 на Люблин, Wawer и Józefów", "ua": "національна дорога DK17 на Люблін, Wawer і Józefów"},
  },
  {
    slug: "dk50",
    code: "DK50",
    neighbors: ["s17", "dk7", "dk17", "obwodnica"],
    feature: {"pl": "obwodnica mazowiecka DK50 — Grójec, Mszczonów, Sochaczew, Wyszków", "en": "Mazovian ring DK50 — Grójec, Mszczonów, Sochaczew, Wyszków", "ru": "мазовецкая окружная DK50 — Grójec, Mszczonów, Sochaczew, Wyszków", "ua": "мазовецька об’їзна DK50 — Grójec, Mszczonów, Sochaczew, Wyszków"},
  },
  {
    slug: "obwodnica",
    code: "Obwodnica",
    neighbors: ["a2", "s2", "s7", "s8", "s17"],
    feature: {"pl": "obwodnica Warszawy — S2, S8, A2 i łączniki wokół stolicy", "en": "Warsaw ring — S2, S8, A2 and link roads around the capital", "ru": "окружная Варшавы — S2, S8, A2 и связки вокруг столицы", "ua": "об’їзна Варшави — S2, S8, A2 і зв’язки навколо столиці"},
  }
];

export function roadSlugs() {
  return ROADS.map((d) => d.slug);
}

export function roadBySlug(slug) {
  return ROADS.find((d) => d.slug === slug) || null;
}

export function langClFromPathSeg(seg) {
  return seg === 'uk' ? 'ua' : seg;
}

function roadName(slug, lang) {
  return NAMES[slug]?.[lang] || NAMES[slug]?.pl || slug;
}

const COPY = {
  pl: {
    h1: (n) => `Laweta ${n} — pomoc drogowa 24h | Warszawa`,
    intro: (n, f) =>
      `INNSER — tania laweta i pomoc drogowa na trasie ${n}. Obszar: ${f}. Dojazd zwykle 20–40 minut, całodobowo.`,
    p2: (n) =>
      `Holowanie z pasa awaryjnego, awaryjne odpalanie, wymiana koła i otwieranie aut na ${n} i wokół Warszawy. Cena ustalana z góry — bez ukrytych opłat. Zadzwoń: 506-001-057.`,
    svc: 'Nasze usługi w Warszawie',
    near: (n) => `Obsługujemy również sąsiednie trasy obok ${n}:`,
    linkLaweta: (n) => `Laweta ${n}`,
    indexTitle: 'Laweta Warszawa — trasy i autostrady',
    indexDesc: 'Pomoc drogowa INNSER na A2, S2, S7, S8, S17, S79, DK7, DK8, DK17, DK50 i obwodnicy Warszawy. Wybierz trasę — dojazd 24/7.',
    seoTitle: (n) => `Laweta ${n} — pomoc drogowa 24h | INNSER`,
    seoDesc: (n) =>
      `Laweta i holowanie na ${n} przy Warszawie 24/7. Holowanie od 250 zł, dojazd ~30 min. INNSER: 506-001-057.`,
    indexSeoTitle: 'Laweta Warszawa — trasy A2 S2 S7 S8 24/7 | INNSER',
    indexSeoDesc:
      'Pomoc drogowa i laweta na autostradach i drogach wokół Warszawy — A2, S2, S7, S8, S17, DK50. INNSER 24/7, 506-001-057.',
  },
  en: {
    h1: (n) => `Tow truck ${n} — roadside assistance 24/7 | Warsaw`,
    intro: (n, f) =>
      `INNSER — affordable tow truck and roadside help on ${n}. We know ${f}. Arrival usually 20–40 minutes, 24/7.`,
    p2: (n) =>
      `Hard-shoulder towing, jump starts, tyre changes and car lockout on ${n} around Warsaw. Fixed price upfront. Call: 506-001-057.`,
    svc: 'Our services in Warsaw',
    near: (n) => `We also serve nearby roads next to ${n}:`,
    linkLaweta: (n) => `Tow truck ${n}`,
    indexTitle: 'Tow truck Warsaw — highways & roads',
    indexDesc: 'INNSER roadside assistance on A2, S2, S7, S8, S17, S79, DK7, DK8, DK17, DK50 and the Warsaw ring. Pick a road — 24/7 arrival.',
    seoTitle: (n) => `Tow truck ${n} — 24/7 roadside help | INNSER`,
    seoDesc: (n) =>
      `Towing on ${n} near Warsaw 24/7. From 250 PLN, ~30 min ETA. INNSER: 506-001-057.`,
    indexSeoTitle: 'Tow truck Warsaw — A2 S2 S7 S8 roads 24/7 | INNSER',
    indexSeoDesc:
      'Roadside assistance on motorways and roads around Warsaw — A2, S2, S7, S8, S17, DK50. INNSER 24/7, 506-001-057.',
  },
  ru: {
    h1: (n) => `Эвакуатор ${n} — помощь на дороге 24/7 | Варшава`,
    intro: (n, f) =>
      `INNSER — лавета и эвакуатор на трассе ${n}. Знаем ${f}. Приезд обычно 20–40 минут, круглосуточно.`,
    p2: (n) =>
      `Эвакуация с аварийной полосы, прикур, замена колеса и открытие авто на ${n} вокруг Варшавы. Цена согласована заранее. Звоните: 506-001-057.`,
    svc: 'Наши услуги в Варшаве',
    near: (n) => `Также обслуживаем соседние трассы рядом с ${n}:`,
    linkLaweta: (n) => `Эвакуатор ${n}`,
    indexTitle: 'Эвакуатор Варшава — трассы и автомагистрали',
    indexDesc: 'Помощь на дороге INNSER на A2, S2, S7, S8, S17, S79, DK7, DK8, DK17, DK50 и окружной Варшавы. Выберите трассу — приезд 24/7.',
    seoTitle: (n) => `Эвакуатор ${n} — помощь 24/7 | INNSER`,
    seoDesc: (n) =>
      `Эвакуатор на ${n} у Варшавы 24/7. От 250 zł, приезд ~30 мин. INNSER: 506-001-057.`,
    indexSeoTitle: 'Эвакуатор Варшава — трассы A2 S2 S7 S8 24/7 | INNSER',
    indexSeoDesc:
      'Эвакуатор на автомагистралях и дорогах вокруг Варшавы — A2, S2, S7, S8, S17, DK50. INNSER 24/7, 506-001-057.',
  },
  ua: {
    h1: (n) => `Евакуатор ${n} — допомога на дорозі 24/7 | Варшава`,
    intro: (n, f) =>
      `INNSER — лафета та евакуатор на трасі ${n}. Знаємо ${f}. Приїзд зазвичай 20–40 хвилин, цілодобово.`,
    p2: (n) =>
      `Евакуація з аварійної смуги, прикур, заміна колеса та відкриття авто на ${n} навколо Варшави. Ціна домовлена наперед. Телефон: 506-001-057.`,
    svc: 'Наші послуги у Варшаві',
    near: (n) => `Також обслуговуємо сусідні траси біля ${n}:`,
    linkLaweta: (n) => `Евакуатор ${n}`,
    indexTitle: 'Евакуатор Варшава — траси та автомагістралі',
    indexDesc: 'Допомога на дорозі INNSER на A2, S2, S7, S8, S17, S79, DK7, DK8, DK17, DK50 та об’їзній Варшави. Оберіть трасу — приїзд 24/7.',
    seoTitle: (n) => `Евакуатор ${n} — допомога 24/7 | INNSER`,
    seoDesc: (n) =>
      `Евакуатор на ${n} біля Варшави 24/7. Від 250 zł, приїзд ~30 хв. INNSER: 506-001-057.`,
    indexSeoTitle: 'Евакуатор Варшава — траси A2 S2 S7 S8 24/7 | INNSER',
    indexSeoDesc:
      'Евакуатор на автомагістралях і дорогах навколо Варшави — A2, S2, S7, S8, S17, DK50. INNSER 24/7, 506-001-057.',
  },
};

const SVC_LABELS = {
  pl: ['Pomoc drogowa 24h', 'Holowanie / laweta', 'Odpalanie na kable', 'Cennik lawety'],
  en: ['Roadside assistance 24/7', 'Towing / flatbed', 'Jump start', 'Price calculator'],
  ru: ['Помощь на дороге 24/7', 'Эвакуация / лавета', 'Прикур', 'Цены эвакуатора'],
  ua: ['Допомога на дорозі 24/7', 'Евакуація / лавета', 'Прикур', 'Ціни евакуатора'],
};

export function getRoadSeoMeta(lang, slug) {
  const d = roadBySlug(slug);
  if (!d) return null;
  const c = COPY[lang] || COPY.pl;
  const n = roadName(slug, lang);
  return { title: c.seoTitle(n), desc: c.seoDesc(n) };
}

export function getRoadsIndexSeoMeta(lang) {
  const c = COPY[lang] || COPY.pl;
  return { title: c.indexSeoTitle, desc: c.indexSeoDesc };
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

/** Static HTML for Googlebot (baked into /{lang}/trasy/{slug}/). */
export function renderRoadStaticHtml(lang, slug, localePathSeg) {
  const d = roadBySlug(slug);
  if (!d) return '';
  const c = COPY[lang] || COPY.pl;
  const n = roadName(slug, lang);
  const seg = localePathSeg;
  const labels = SVC_LABELS[lang] || SVC_LABELS.pl;
  const svcPaths = ['svc1', 'svc6', 'svc2', 'prices'];
  const svcItems = svcPaths
    .map(
      (p, i) =>
        `<li><a href="/${seg}/${p}/">${esc(labels[i])}</a></li>`
    )
    .join('\n');
  const nearItems = d.neighbors
    .map((nb) => {
      const nn = roadName(nb, lang);
      return `<a href="/${seg}/trasy/${nb}/" class="ar-tag">${esc(c.linkLaweta(nn))}</a>`;
    })
    .join('\n');
  return `<h1 class="sh">${esc(c.h1(n))}</h1>
${renderRoadRichHtml(lang, slug)}
<h2 class="ar-title">${esc(c.svc)}</h2>
<ul class="dist-links">${svcItems}</ul>
<h2 class="ar-title">${esc(c.near(n))}</h2>
<div class="ar-list dist-near">${nearItems}</div>
<p style="text-align:center;margin-top:28px"><a href="tel:+48506001057" class="btn btn-y">📞 506-001-057</a></p>`;
}

export function renderRoadsIndexStaticHtml(lang, localePathSeg) {
  const c = COPY[lang] || COPY.pl;
  const seg = localePathSeg;
  const tags = ROADS.map((d) => {
    const n = roadName(d.slug, lang);
    return `<a href="/${seg}/trasy/${d.slug}/" class="ar-tag">${esc(c.linkLaweta(n))}</a>`;
  }).join('\n');
  return `<h1 class="sh">${esc(c.indexTitle)}</h1>
<p class="sd">${esc(c.indexDesc)}</p>
<div class="ar-list dist-all">${tags}</div>
<p style="text-align:center;margin-top:28px"><a href="tel:+48506001057" class="btn btn-y">📞 506-001-057</a></p>`;
}

/** JSON injected into SPA for runtime renderRoad(). */
export function roadsJsonForRuntime() {
  return JSON.stringify(
    ROADS.map((d) => ({
      slug: d.slug,
      code: d.code,
      neighbors: d.neighbors,
      names: NAMES[d.slug],
      feature: d.feature,
    }))
  );
}

export { COPY, NAMES, LANGS };
