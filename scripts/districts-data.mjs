/** Warsaw districts for local SEO landing pages (/pl/dzielnice/{slug}/). */

import { renderDistrictRichHtml } from './districts-content.mjs';

const LANGS = ['pl', 'en', 'ru', 'ua'];

const NAMES = {
  mokotow: { pl: 'Mokotów', en: 'Mokotów', ru: 'Мокотув', ua: 'Мокотув' },
  wola: { pl: 'Wola', en: 'Wola', ru: 'Воля', ua: 'Воля' },
  'praga-poludnie': { pl: 'Praga-Południe', en: 'Praga-Południe', ru: 'Прага-Полудне', ua: 'Прага-Полудне' },
  'praga-polnoc': { pl: 'Praga-Północ', en: 'Praga-Północ', ru: 'Прага-Пулноц', ua: 'Прага-Північ' },
  srodmiescie: { pl: 'Śródmieście', en: 'Śródmieście', ru: 'Срудместье', ua: 'Середмістя' },
  ursynow: { pl: 'Ursynów', en: 'Ursynów', ru: 'Урсынув', ua: 'Урсинув' },
  bielany: { pl: 'Bielany', en: 'Bielany', ru: 'Беляны', ua: 'Біляни' },
  bemowo: { pl: 'Bemowo', en: 'Bemowo', ru: 'Бемово', ua: 'Бемово' },
  targowek: { pl: 'Targówek', en: 'Targówek', ru: 'Таргувек', ua: 'Таргувек' },
  ochota: { pl: 'Ochota', en: 'Ochota', ru: 'Охота', ua: 'Охота' },
  wawer: { pl: 'Wawer', en: 'Wawer', ru: 'Вавер', ua: 'Вавер' },
  bialoleka: { pl: 'Białołęka', en: 'Białołęka', ru: 'Бялоленка', ua: 'Бялоленка' },
  wilanow: { pl: 'Wilanów', en: 'Wilanów', ru: 'Виланув', ua: 'Вілянув' },
  ursus: { pl: 'Ursus', en: 'Ursus', ru: 'Урсус', ua: 'Урсус' },
  wlochy: { pl: 'Włochy', en: 'Włochy', ru: 'Влохи', ua: 'Влохи' },
  rembertow: { pl: 'Rembertów', en: 'Rembertów', ru: 'Рембертув', ua: 'Рембертув' },
  wesola: { pl: 'Wesoła', en: 'Wesoła', ru: 'Весола', ua: 'Весола' },
  zoliborz: { pl: 'Żoliborz', en: 'Żoliborz', ru: 'Жолибож', ua: 'Жолібож' },
};

/** @type {{ slug: string, neighbors: string[], feature: Record<string,string> }[]} */
export const DISTRICTS = [
  {
    slug: 'mokotow',
    neighbors: ['ochota', 'wilanow', 'ursynow'],
    feature: {
      pl: 'centra biurowe, Galeria Mokotów i aleje Puławska',
      en: 'business hubs, Galeria Mokotów and Puławska Avenue',
      ru: 'деловые кварталы, Galeria Mokotów и Puławska',
      ua: 'ділові квартали, Galeria Mokotów і Puławska',
    },
  },
  {
    slug: 'wola',
    neighbors: ['ochota', 'srodmiescie', 'bemowo'],
    feature: {
      pl: 'biurowce Mordoru, Wolska i okolice Dworca Zachodniego',
      en: 'office districts, Wolska Street and West Station area',
      ru: 'офисные кварталы, Wolska и Западный вокзал',
      ua: 'офісні квартали, Wolska і Західний вокзал',
    },
  },
  {
    slug: 'praga-poludnie',
    neighbors: ['praga-polnoc', 'wawer', 'rembertow'],
    feature: {
      pl: 'Stadion Narodowy, CH Promenada i zabytkowa Praga',
      en: 'National Stadium, Promenada mall and historic Praga',
      ru: 'Национальный стадион, ТЦ Promenada и историческая Прага',
      ua: 'Національний стадіон, ТЦ Promenada і історична Прага',
    },
  },
  {
    slug: 'praga-polnoc',
    neighbors: ['praga-poludnie', 'srodmiescie', 'zoliborz'],
    feature: {
      pl: 'Stara Praga, mosty na Wisłę i ulice Ząbkowska',
      en: 'Old Praga, Vistula bridges and Ząbkowska Street',
      ru: 'Старая Прага, мосты через Вислу и Ząbkowska',
      ua: 'Стара Прага, мости через Віслу і Ząbkowska',
    },
  },
  {
    slug: 'srodmiescie',
    neighbors: ['wola', 'praga-polnoc', 'ochota'],
    feature: {
      pl: 'centrum miasta, hotele, dworce i parkingi podziemne',
      en: 'city centre, hotels, stations and underground car parks',
      ru: 'центр города, отели, вокзалы и подземные паркинги',
      ua: 'центр міста, готелі, вокзали та підземні паркінги',
    },
  },
  {
    slug: 'ursynow',
    neighbors: ['mokotow', 'wilanow', 'wlochy'],
    feature: {
      pl: 'osiedla Kabaty, Imielin i aleje Puławska na południu',
      en: 'Kabaty and Imielin estates, southern Puławska corridor',
      ru: 'районы Kabaty, Imielin и южная Puławska',
      ua: 'райони Kabaty, Imielin і південна Puławska',
    },
  },
  {
    slug: 'bielany',
    neighbors: ['zoliborz', 'bemowo', 'bialoleka'],
    feature: {
      pl: 'Lasek Bielański, ulice Marymoncka i Młocinska',
      en: 'Bielański Forest, Marymoncka and Młocinska streets',
      ru: 'парк Bielański, Marymoncka и северные магистрали',
      ua: 'парк Bielański, Marymoncka і північні магістралі',
    },
  },
  {
    slug: 'bemowo',
    neighbors: ['wola', 'bielany', 'ursus'],
    feature: {
      pl: 'Lotnisko Chopina, osiedla Górce i Karolin',
      en: 'Chopin Airport vicinity, Górce and Karolin estates',
      ru: 'окрестности аэропорта Chopin, Górce и Karolin',
      ua: 'околиці аеропорту Chopin, Górce і Karolin',
    },
  },
  {
    slug: 'targowek',
    neighbors: ['praga-polnoc', 'bialoleka', 'zoliborz'],
    feature: {
      pl: 'CH Targówek, M1 Marki i trasa S8',
      en: 'Targówek malls, M1 Marki and S8 corridor',
      ru: 'ТЦ Targówek, M1 Marki и трасса S8',
      ua: 'ТЦ Targówek, M1 Marki і траса S8',
    },
  },
  {
    slug: 'ochota',
    neighbors: ['wola', 'mokotow', 'srodmiescie'],
    feature: {
      pl: 'Dworzec Zachodni, CH Blue City i ulice Grójecka',
      en: 'West Station, Blue City mall and Grójecka Street',
      ru: 'Западный вокзал, Blue City и Grójecka',
      ua: 'Західний вокзал, Blue City і Grójecka',
    },
  },
  {
    slug: 'wawer',
    neighbors: ['praga-poludnie', 'wesola', 'rembertow'],
    feature: {
      pl: 'Wał Miedzeszyński, Nadwiślańskie osiedla i trasa S2',
      en: 'Wał Miedzeszyński, riverside estates and S2 route',
      ru: 'Wał Miedzeszyński, набережные и трасса S2',
      ua: 'Wał Miedzeszyński, набережні та траса S2',
    },
  },
  {
    slug: 'bialoleka',
    neighbors: ['targowek', 'bielany', 'wesola'],
    feature: {
      pl: 'Modlińska, osiedla przy linii metra M1',
      en: 'Modlińska corridor and M1 metro line estates',
      ru: 'Modlińska и жилые кварталы у линии M1',
      ua: 'Modlińska і житлові квартали біля лінії M1',
    },
  },
  {
    slug: 'wilanow',
    neighbors: ['mokotow', 'ursynow', 'wlochy'],
    feature: {
      pl: 'Wilanów Pałac, Puławska południe i Wilanowska',
      en: 'Wilanów Palace area, southern Puławska and Wilanowska',
      ru: 'дворец Wilanów, южная Puławska и Wilanowska',
      ua: 'палац Wilanów, південна Puławska і Wilanowska',
    },
  },
  {
    slug: 'ursus',
    neighbors: ['bemowo', 'wlochy', 'wola'],
    feature: {
      pl: 'fabryczna historia, Skorosze i Traktorowa',
      en: 'industrial heritage, Skorosze and Traktorowa',
      ru: 'промышленный район, Skorosze и Traktorowa',
      ua: 'промисловий район, Skorosze і Traktorowa',
    },
  },
  {
    slug: 'wlochy',
    neighbors: ['ursus', 'ursynow', 'wilanow'],
    feature: {
      pl: 'Lotnisko Chopin, Rakowiec i 1. Sierpnia',
      en: 'Chopin Airport, Rakowiec and 1 Sierpnia Street',
      ru: 'аэропорт Chopin, Rakowiec и 1 Sierpnia',
      ua: 'аеропорт Chopin, Rakowiec і 1 Sierpnia',
    },
  },
  {
    slug: 'rembertow',
    neighbors: ['praga-poludnie', 'wawer', 'wesola'],
    feature: {
      pl: 'osiedla MDM, ulice Gen. Augustyna Emila Fieldorfa',
      en: 'MDM estates and Fieldorfa Street corridor',
      ru: 'жилые кварталы MDM и Fieldorfa',
      ua: 'житлові квартали MDM і Fieldorfa',
    },
  },
  {
    slug: 'wesola',
    neighbors: ['bialoleka', 'wawer', 'rembertow'],
    feature: {
      pl: 'Wesoła-Centrum, pętla tramwajowa i trasa S2',
      en: 'Wesoła centre, tram terminus and S2 route',
      ru: 'центр Wesoła, трамвайная петля и S2',
      ua: 'центр Wesoła, трамвайна петля і S2',
    },
  },
  {
    slug: 'zoliborz',
    neighbors: ['bielany', 'praga-polnoc', 'srodmiescie'],
    feature: {
      pl: 'Stare Żoliborz, Plac Wilsona i aleje Wojska Polskiego',
      en: 'Old Żoliborz, Wilson Square and Wojska Polskiego',
      ru: 'Старый Жолибож, Plac Wilsona и Wojska Polskiego',
      ua: 'Старий Жолібож, Plac Wilsona і Wojska Polskiego',
    },
  },
];

export function districtSlugs() {
  return DISTRICTS.map((d) => d.slug);
}

export function districtBySlug(slug) {
  return DISTRICTS.find((d) => d.slug === slug) || null;
}

export function langClFromPathSeg(seg) {
  return seg === 'uk' ? 'ua' : seg;
}

function districtName(slug, lang) {
  return NAMES[slug]?.[lang] || NAMES[slug]?.pl || slug;
}

const COPY = {
  pl: {
    h1: (n) => `Laweta Warszawa ${n} — pomoc drogowa 24h`,
    intro: (n, f) =>
      `INNSER — tania laweta i pomoc drogowa w dzielnicy ${n}. Znamy ${f}. Dojazd zwykle 20–30 minut, całodobowo.`,
    p2: (n) =>
      `Holowanie, awaryjne odpalanie, wymiana koła i otwieranie aut w ${n} i całej Warszawie. Cena ustalana z góry — bez ukrytych opłat. Zadzwoń: 506-001-057.`,
    svc: 'Nasze usługi w Warszawie',
    near: (n) => `Obsługujemy również dzielnice sąsiadujące z ${n}:`,
    linkLaweta: (n) => `Laweta Warszawa ${n}`,
    indexTitle: 'Laweta Warszawa — wszystkie dzielnice',
    indexDesc: 'Pomoc drogowa INNSER w każdej dzielnicy Warszawy. Wybierz swój rejon — dojazd 24/7.',
    seoTitle: (n) => `Laweta Warszawa ${n} — pomoc drogowa 24h | INNSER`,
    seoDesc: (n) =>
      `Laweta i pomoc drogowa ${n}, Warszawa 24/7. Holowanie od 250 zł, dojazd ~30 min. INNSER: 506-001-057.`,
    indexSeoTitle: 'Laweta Warszawa — dzielnice i dojazd 24/7 | INNSER',
    indexSeoDesc:
      'Pomoc drogowa i laweta w każdej dzielnicy Warszawy — Mokotów, Wola, Praga, Ursynów i inne. INNSER 24/7, 506-001-057.',
  },
  en: {
    h1: (n) => `Tow truck Warsaw ${n} — roadside assistance 24/7`,
    intro: (n, f) =>
      `INNSER — affordable tow truck and roadside help in ${n}. We know ${f}. Arrival usually 20–30 minutes, 24/7.`,
    p2: (n) =>
      `Towing, jump starts, tyre changes and car lockout service across ${n} and all of Warsaw. Fixed price upfront. Call: 506-001-057.`,
    svc: 'Our services in Warsaw',
    near: (n) => `We also serve districts next to ${n}:`,
    linkLaweta: (n) => `Tow truck Warsaw ${n}`,
    indexTitle: 'Tow truck Warsaw — all districts',
    indexDesc: 'INNSER roadside assistance in every Warsaw district. Pick your area — 24/7 arrival.',
    seoTitle: (n) => `Tow truck Warsaw ${n} — 24/7 roadside help | INNSER`,
    seoDesc: (n) =>
      `Tow truck & roadside assistance ${n}, Warsaw 24/7. Towing from 250 PLN, ~30 min ETA. INNSER: 506-001-057.`,
    indexSeoTitle: 'Tow truck Warsaw — districts & 24/7 coverage | INNSER',
    indexSeoDesc:
      'Roadside assistance in every Warsaw district — Mokotów, Wola, Praga, Ursynów and more. INNSER 24/7, 506-001-057.',
  },
  ru: {
    h1: (n) => `Эвакуатор Варшава ${n} — помощь на дороге 24/7`,
    intro: (n, f) =>
      `INNSER — лавета и эвакуатор в ${n}. Знаем ${f}. Приезд обычно 20–30 минут, круглосуточно.`,
    p2: (n) =>
      `Эвакуация, прикур, замена колеса и открытие авто на ${n} и по всей Варшаве. Цена согласована заранее. Звоните: 506-001-057.`,
    svc: 'Наши услуги в Варшаве',
    near: (n) => `Также обслуживаем соседние районы рядом с ${n}:`,
    linkLaweta: (n) => `Эвакуатор Варшава ${n}`,
    indexTitle: 'Эвакуатор Варшава — все районы',
    indexDesc: 'Помощь на дороге INNSER в каждом районе Варшавы. Выберите свой — приезд 24/7.',
    seoTitle: (n) => `Эвакуатор Варшава ${n} — помощь 24/7 | INNSER`,
    seoDesc: (n) =>
      `Эвакуатор и лавета ${n}, Варшава 24/7. Эвакуация от 250 zł, приезд ~30 мин. INNSER: 506-001-057.`,
    indexSeoTitle: 'Эвакуатор Варшава — районы и приезд 24/7 | INNSER',
    indexSeoDesc:
      'Эвакуатор во всех районах Варшавы — Мокotów, Воля, Прага, Урсынów и другие. INNSER 24/7, 506-001-057.',
  },
  ua: {
    h1: (n) => `Евакуатор Варшава ${n} — допомога на дорозі 24/7`,
    intro: (n, f) =>
      `INNSER — лавета та евакуатор у ${n}. Знаємо ${f}. Приїзд зазвичай 20–30 хвилин, цілодobово.`,
    p2: (n) =>
      `Евакуація, прикур, заміна колеса та відкриття авто на ${n} і по всій Варшаві. Ціна домовлена наперед. Телефон: 506-001-057.`,
    svc: 'Наші послуги у Варшаві',
    near: (n) => `Також обслуговуємо сусідні райони біля ${n}:`,
    linkLaweta: (n) => `Евакуатор Варшава ${n}`,
    indexTitle: 'Евакуатор Варшава — усі райони',
    indexDesc: 'Допомога на дорозі INNSER у кожному районі Варшави. Оберіть свій — приїзд 24/7.',
    seoTitle: (n) => `Евакуатор Варшава ${n} — допомога 24/7 | INNSER`,
    seoDesc: (n) =>
      `Евакуатор і лавета ${n}, Варшава 24/7. Евакуація від 250 zł, приїзд ~30 хв. INNSER: 506-001-057.`,
    indexSeoTitle: 'Евакуатор Варшава — райони та приїзд 24/7 | INNSER',
    indexSeoDesc:
      'Евакуатор у всіх районах Варшави — Mokotów, Wola, Praga, Ursynów та інші. INNSER 24/7, 506-001-057.',
  },
};

const SVC_LABELS = {
  pl: ['Pomoc drogowa 24h', 'Holowanie / laweta', 'Odpalanie na kable', 'Cennik lawety'],
  en: ['Roadside assistance 24/7', 'Towing / flatbed', 'Jump start', 'Price calculator'],
  ru: ['Помощь на дороге 24/7', 'Эвакуация / лавета', 'Прикур', 'Цены эвакуатора'],
  ua: ['Допомога на дорозі 24/7', 'Евакуація / лавета', 'Прикур', 'Ціни евакуатора'],
};

export function getDistrictSeoMeta(lang, slug) {
  const d = districtBySlug(slug);
  if (!d) return null;
  const c = COPY[lang] || COPY.pl;
  const n = districtName(slug, lang);
  return { title: c.seoTitle(n), desc: c.seoDesc(n) };
}

export function getDistrictsIndexSeoMeta(lang) {
  const c = COPY[lang] || COPY.pl;
  return { title: c.indexSeoTitle, desc: c.indexSeoDesc };
}

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

/** Static HTML for Googlebot (baked into /{lang}/dzielnice/{slug}/). */
export function renderDistrictStaticHtml(lang, slug, localePathSeg) {
  const d = districtBySlug(slug);
  if (!d) return '';
  const c = COPY[lang] || COPY.pl;
  const n = districtName(slug, lang);
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
      const nn = districtName(nb, lang);
      return `<a href="/${seg}/dzielnice/${nb}/" class="ar-tag">${esc(c.linkLaweta(nn))}</a>`;
    })
    .join('\n');
  return `<h1 class="sh">${esc(c.h1(n))}</h1>
${renderDistrictRichHtml(lang, slug)}
<h2 class="ar-title">${esc(c.svc)}</h2>
<ul class="dist-links">${svcItems}</ul>
<h2 class="ar-title">${esc(c.near(n))}</h2>
<div class="ar-list dist-near">${nearItems}</div>
<p style="text-align:center;margin-top:28px"><a href="tel:+48506001057" class="btn btn-y">📞 506-001-057</a></p>`;
}

export function renderDistrictsIndexStaticHtml(lang, localePathSeg) {
  const c = COPY[lang] || COPY.pl;
  const seg = localePathSeg;
  const tags = DISTRICTS.map((d) => {
    const n = districtName(d.slug, lang);
    return `<a href="/${seg}/dzielnice/${d.slug}/" class="ar-tag">${esc(c.linkLaweta(n))}</a>`;
  }).join('\n');
  return `<h1 class="sh">${esc(c.indexTitle)}</h1>
<p class="sd">${esc(c.indexDesc)}</p>
<div class="ar-list dist-all">${tags}</div>
<p style="text-align:center;margin-top:28px"><a href="tel:+48506001057" class="btn btn-y">📞 506-001-057</a></p>`;
}

/** JSON injected into SPA for runtime renderDistrict(). */
export function districtsJsonForRuntime() {
  return JSON.stringify(
    DISTRICTS.map((d) => ({
      slug: d.slug,
      neighbors: d.neighbors,
      names: NAMES[d.slug],
      feature: d.feature,
    }))
  );
}

export { COPY, NAMES, LANGS };
