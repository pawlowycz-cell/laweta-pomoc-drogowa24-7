/**
 * Geo (district / suburb / road) Google-style reviews.
 * Place name is injected; no shared boilerplate across locations.
 * Authors rotate by slug hash and do not overlap svc review names.
 */
import { districtBySlug, NAMES as DISTRICT_NAMES } from './districts-data.mjs';
import { ROADS, NAMES as ROAD_NAMES } from './roads-data.mjs';

/** Unique pool — must not overlap scripts/svc-google-reviews.mjs authors. */
const AUTHORS = [
  'Piotr K.', 'Olga N.', 'Jan M.', 'Beata S.', 'Krzysztof R.', 'Lena W.',
  'Marcin D.', 'Hanna P.', 'Stefan G.', 'Vera L.', 'Maciej T.', 'Nina C.',
  'Andrzej B.', 'Sofia J.', 'Rafał H.', 'Eliza F.', 'Łukasz M.', 'Daria V.',
  'Seweryn A.', 'Inna Z.', 'Patryk O.', 'Yulia R.', 'Konrad E.', 'Marta Y.',
  'Szymon U.', 'Nadia I.', 'Wojciech X.', 'Klara Q.', 'Dominik V.', 'Tamara S.',
  'Norbert C.', 'Alina B.', 'Cezary K.', 'Renata M.', 'Hubert L.', 'Weronika P.',
];

const TEMPLATES = {
  pl: {
    district: [
      '{place}: ewakuator INNSER przyjechał szybko. Dyspozytor od razu potwierdził adres — pomoc drogowa bez nerwów.',
      'Dzielnica {place} — potrzebowałem ewakuatora. INNSER odholował auto spokojnie, cena z góry. Polecam pomoc drogową.',
      'Dobrze, że ewakuator działał w rejonie {place}. Holownik szybko na miejscu, dyspozytor INNSER trzymał kontakt.',
    ],
    suburb: [
      '{place}: wezwałem ewakuator — INNSER dojechał sprawnie. Dyspozytor jasno podał cenę, pomoc drogowa 24/7.',
      'Awaria — {place}. Ewakuator przyjechał szybko, załadunek spokojny. Dziękuję INNSER za pomoc drogową.',
      'Szukałem holownika w rejonie {place}. Dyspozytor INNSER ogarnął wyjazd, ewakuator na miejscu bez stresu.',
    ],
    road: [
      'Awaria na trasie {place}. Ewakuator INNSER dojechał szybko, dyspozytor był w kontakcie — pomoc drogowa na szosie.',
      '{place}: potrzebny był holownik. INNSER odholował auto z pobocza spokojnie, cena z telefonu.',
      'Trasa {place} — liczy się czas. Ewakuator przyjechał szybko, pomoc drogowa INNSER bez niespodzianek.',
    ],
  },
  en: {
    district: [
      '{place}: INNSER tow truck arrived fast. The dispatcher confirmed the address — solid roadside assistance.',
      'Needed a tow truck in {place}. INNSER recovered the car calmly, price upfront. Recommend their roadside help.',
      'Glad a tow truck covered {place}. Fast arrival, INNSER dispatcher stayed in touch.',
    ],
    suburb: [
      '{place}: called a tow truck — INNSER arrived promptly. Clear price from the dispatcher, roadside assistance 24/7.',
      'Breakdown in {place}. Tow truck came quickly, calm loading. Thanks INNSER for the roadside help.',
      'Looked for towing near {place}. INNSER dispatcher sent a truck fast — no stress.',
    ],
    road: [
      'Breakdown on {place}. INNSER tow truck arrived quickly, dispatcher stayed on the line — roadside help on the highway.',
      '{place}: needed recovery from the shoulder. INNSER towed calmly, price quoted on the phone.',
      'On {place} every minute counts. Tow truck was fast — INNSER roadside assistance without surprises.',
    ],
  },
  ru: {
    district: [
      '{place}: эвакуатор INNSER приехал быстро. Диспетчер сразу подтвердил адрес — помощь на дороге без нервов.',
      'Район {place} — нужен был эвакуатор. INNSER эвакуировал авто спокойно, цену назвали заранее. Рекомендую.',
      'Хорошо, что эвакуатор работал в районе {place}. Приезд быстрый, диспетчер INNSER на связи — помощь на дороге 24/7.',
    ],
    suburb: [
      '{place}: вызвал эвакуатор — INNSER доехал нормально. Диспетчер ясно назвал цену, помощь на дороге без сюрпризов.',
      'Поломка — {place}. Эвакуатор приехал быстро, погрузка спокойная. Спасибо INNSER за помощь на дороге.',
      'Искал эвакуатор в районе {place}. Диспетчер INNSER организовал выезд, эвакуировали без стресса.',
    ],
    road: [
      'Поломка на трассе {place}. Эвакуатор INNSER быстро на месте, диспетчер на связи — помощь на дороге на шоссе.',
      '{place}: нужен был эвакуатор с обочины. INNSER эвакуировал спокойно, цену сказали по телефону.',
      'Трасса {place} — важна скорость. Эвакуатор приехал быстро, помощь на дороге INNSER без лишнего.',
    ],
  },
  ua: {
    district: [
      '{place}: евакуатор INNSER приїхав швидко. Диспетчер одразу підтвердив адресу — допомога на дорозі без нервів.',
      'Район {place} — потрібен був евакуатор. INNSER евакуював авто спокійно, ціну назвали заздалегідь. Рекомендую.',
      'Добре, що евакуатор працював у районі {place}. Приїзд швидкий, диспетчер INNSER на зв’язку — допомога на дорозі 24/7.',
    ],
    suburb: [
      '{place}: викликав евакуатор — INNSER доїхав нормально. Диспетчер ясно назвав ціну, допомога на дорозі без сюрпризів.',
      'Поломка — {place}. Евакуатор приїхав швидко, завантаження спокійне. Дякую INNSER за допомогу на дорозі.',
      'Шукав евакуатор у районі {place}. Диспетчер INNSER організував виїзд, евакуювали без стресу.',
    ],
    road: [
      'Поломка на трасі {place}. Евакуатор INNSER швидко на місці, диспетчер на зв’язку — допомога на дорозі на шосе.',
      '{place}: потрібен був евакуатор з узбіччя. INNSER евакуював спокійно, ціну сказали телефоном.',
      'Траса {place} — важлива швидкість. Евакуатор приїхав швидко, допомога на дорозі INNSER без зайвого.',
    ],
  },
};

function hashSlug(slug) {
  const s = String(slug || '');
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/**
 * @param {string} langCl pl|en|ru|ua
 * @param {string} placeName localized place/road label
 * @param {string} slug
 * @param {'district'|'suburb'|'road'} kind
 */
export function geoReviewsFor(langCl, placeName, slug, kind) {
  const lang = TEMPLATES[langCl] ? langCl : 'pl';
  const k = kind === 'suburb' || kind === 'road' ? kind : 'district';
  const templates = TEMPLATES[lang][k];
  const h = hashSlug(slug);
  const place = String(placeName || slug).trim();
  return [0, 1, 2].map((i) => {
    const name = AUTHORS[(h + i * 11) % AUTHORS.length];
    const text = templates[i].split('{place}').join(place);
    return { name, stars: 5, text };
  });
}

export function geoReviewsForDistrictSlug(langCl, slug) {
  const d = districtBySlug(slug);
  if (!d) return [];
  const names = DISTRICT_NAMES[slug] || d.names || {};
  const place = names[langCl] || names.pl || slug;
  const kind = d.kind === 'suburb' ? 'suburb' : 'district';
  return geoReviewsFor(langCl, place, slug, kind);
}

export function geoReviewsForRoadSlug(langCl, slug) {
  const names = ROAD_NAMES[slug] || {};
  const place = names[langCl] || names.pl || slug;
  const exists = ROADS.some((r) => r.slug === slug);
  if (!exists && !names.pl) return [];
  return geoReviewsFor(langCl, place, slug, 'road');
}

/** Compact runtime source for innser-v6.html (no Node imports). */
export function geoReviewsRuntimeJs() {
  return `/*__INNSER_GEO_GOOGLE_REVIEWS__*/
var INNSER_GEO_REVIEW_AUTHORS=${JSON.stringify(AUTHORS)};
var INNSER_GEO_REVIEW_TEMPLATES=${JSON.stringify(TEMPLATES)};
function innserHashSlug(slug){
  var s=String(slug||''),h=0;
  for(var i=0;i<s.length;i++) h=((h*31)+s.charCodeAt(i))>>>0;
  return h;
}
function innserGeoGoogleReviews(lang,placeName,slug,kind){
  var pack=INNSER_GEO_REVIEW_TEMPLATES[lang]||INNSER_GEO_REVIEW_TEMPLATES.pl;
  var k=(kind==='suburb'||kind==='road')?kind:'district';
  var templates=pack[k]||pack.district;
  var h=innserHashSlug(slug);
  var place=String(placeName||slug||'').trim();
  var out=[];
  for(var i=0;i<3;i++){
    out.push({
      name:INNSER_GEO_REVIEW_AUTHORS[(h+i*11)%INNSER_GEO_REVIEW_AUTHORS.length],
      stars:5,
      text:String(templates[i]||'').split('{place}').join(place)
    });
  }
  return out;
}
`;
}
