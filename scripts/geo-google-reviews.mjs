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
      '{place}: ewakuator INNSER przyjechał szybko. Dyspozytor od razu potwierdził adres — wszystko bez nerwów.',
      'Potrzebowałem ewakuatora w dzielnicy {place}. INNSER spokojnie odholował auto, cenę podali z góry. Polecam.',
      'Dobrze, że dało się wezwać ewakuator koło {place}. Holownik szybko był na miejscu, dyspozytor INNSER odbierał telefon.',
    ],
    suburb: [
      '{place}: zadzwoniłem po ewakuator — INNSER dojechał sprawnie. Dyspozytor jasno powiedział cenę, pomoc 24/7.',
      'Awaria w {place}. Ewakuator szybko przyjechał, załadunek spokojny. Dzięki INNSER.',
      'Szukałem holownika koło {place}. Dyspozytor INNSER ogarnął wyjazd, bez stresu.',
    ],
    road: [
      'Awaria na {place}. Ewakuator INNSER dojechał szybko, dyspozytor był w kontakcie — solidna pomoc na szosie.',
      '{place}: trzeba było zjechać z pobocza. INNSER spokojnie odholował, cenę powiedzieli przez telefon.',
      'Na trasie {place} liczy się czas. Ewakuator szybko był, INNSER bez niespodzianek.',
    ],
  },
  en: {
    district: [
      '{place}: INNSER tow truck got there fast. Dispatcher confirmed the address straight away — no stress.',
      'Needed a tow in {place}. INNSER loaded the car calmly, price upfront. Recommend.',
      'Glad I could get a tow near {place}. Fast arrival, INNSER dispatcher picked up.',
    ],
    suburb: [
      '{place}: called for a tow — INNSER arrived promptly. Clear price from the dispatcher, help 24/7.',
      'Broke down in {place}. Tow truck came quickly, calm loading. Thanks INNSER.',
      'Needed towing near {place}. INNSER dispatcher sent someone fast — sorted.',
    ],
    road: [
      'Broke down on {place}. INNSER tow truck arrived quickly, dispatcher stayed on the line.',
      '{place}: stuck on the hard shoulder. INNSER towed us calmly, price on the phone.',
      'On {place} you need speed. Tow truck was quick — INNSER, no surprises.',
    ],
  },
  ru: {
    district: [
      '{place}: эвакуатор INNSER приехал быстро. Диспетчер сразу подтвердил адрес — без нервов.',
      'В районе {place} нужен был эвакуатор. INNSER спокойно забрал машину, цену сказали заранее. Рекомендую.',
      'Хорошо, что в районе {place} можно быстро вызвать эвакуатор. Приехали оперативно, диспетчер INNSER на связи.',
    ],
    suburb: [
      '{place}: позвонил за эвакуатором — INNSER доехал быстро. Диспетчер нормально назвал цену, помощь круглосуточно.',
      'Поломка в {place}. Эвакуатор быстро приехал, погрузили спокойно. Спасибо INNSER.',
      'Искал эвакуатор рядом с {place}. Диспетчер INNSER отправил машину, всё без стресса.',
    ],
    road: [
      'Встал на трассе {place}. Эвакуатор INNSER быстро на месте, диспетчер на связи.',
      '{place}: нужно было снять с обочины. INNSER спокойно эвакуировал, цену сказали по телефону.',
      'На трассе {place} важны минуты. Эвакуатор приехал быстро — с INNSER без сюрпризов.',
    ],
  },
  ua: {
    district: [
      '{place}: евакуатор INNSER приїхав швидко. Диспетчер одразу підтвердив адресу — без нервів.',
      'У районі {place} потрібен був евакуатор. INNSER спокійно забрав авто, ціну сказали заздалегідь. Рекомендую.',
      'Добре, що в районі {place} можна швидко викликати евакуатор. Приїхали оперативно, диспетчер INNSER на зв’язку.',
    ],
    suburb: [
      '{place}: подзвонив по евакуатор — INNSER доїхав швидко. Диспетчер нормально назвав ціну, допомога цілодобово.',
      'Поломка в {place}. Евакуатор швидко приїхав, завантажили спокійно. Дякую INNSER.',
      'Шукав евакуатор біля {place}. Диспетчер INNSER вислав машину, усе без стресу.',
    ],
    road: [
      'Став на трасі {place}. Евакуатор INNSER швидко на місці, диспетчер на зв’язку.',
      '{place}: треба було зняти з узбіччя. INNSER спокійно евакуював, ціну сказали телефоном.',
      'На трасі {place} важливі хвилини. Евакуатор приїхав швидко — з INNSER без сюрпризів.',
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
