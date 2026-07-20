/** Warsaw districts + suburbs for local SEO landing pages (/pl/dzielnice/{slug}/). */

import { renderDistrictRichHtml } from './districts-content.mjs';
import { ROADS, COPY as ROAD_COPY, NAMES as ROAD_NAMES } from './roads-data.mjs';

const LANGS = ['pl', 'en', 'ru', 'ua'];

const NAMES = {
  'mokotow': { pl: "Mokotów", en: "Mokotów", ru: "Мокотув", ua: "Мокотув" },
  'wola': { pl: "Wola", en: "Wola", ru: "Воля", ua: "Воля" },
  'praga-poludnie': { pl: "Praga-Południe", en: "Praga-Południe", ru: "Прага-Полудне", ua: "Прага-Полудне" },
  'praga-polnoc': { pl: "Praga-Północ", en: "Praga-Północ", ru: "Прага-Пулноц", ua: "Прага-Північ" },
  'srodmiescie': { pl: "Śródmieście", en: "Śródmieście", ru: "Срудместье", ua: "Середмістя" },
  'ursynow': { pl: "Ursynów", en: "Ursynów", ru: "Урсынув", ua: "Урсинув" },
  'bielany': { pl: "Bielany", en: "Bielany", ru: "Беляны", ua: "Біляни" },
  'bemowo': { pl: "Bemowo", en: "Bemowo", ru: "Бемово", ua: "Бемово" },
  'targowek': { pl: "Targówek", en: "Targówek", ru: "Таргувек", ua: "Таргувек" },
  'ochota': { pl: "Ochota", en: "Ochota", ru: "Охота", ua: "Охота" },
  'wawer': { pl: "Wawer", en: "Wawer", ru: "Вавер", ua: "Вавер" },
  'bialoleka': { pl: "Białołęka", en: "Białołęka", ru: "Бялоленка", ua: "Бялоленка" },
  'wilanow': { pl: "Wilanów", en: "Wilanów", ru: "Виланув", ua: "Вілянув" },
  'ursus': { pl: "Ursus", en: "Ursus", ru: "Урсус", ua: "Урсус" },
  'wlochy': { pl: "Włochy", en: "Włochy", ru: "Влохи", ua: "Влохи" },
  'rembertow': { pl: "Rembertów", en: "Rembertów", ru: "Рембертув", ua: "Рембертув" },
  'wesola': { pl: "Wesoła", en: "Wesoła", ru: "Весола", ua: "Весола" },
  'zoliborz': { pl: "Żoliborz", en: "Żoliborz", ru: "Жолибож", ua: "Жолібож" },
  'zabki': { pl: "Ząbki", en: "Ząbki", ru: "Зомбки", ua: "Зомбки" },
  'marki': { pl: "Marki", en: "Marki", ru: "Марки", ua: "Маркі" },
  'otwock': { pl: "Otwock", en: "Otwock", ru: "Отвоцк", ua: "Отвоцьк" },
  'pruszkow': { pl: "Pruszków", en: "Pruszków", ru: "Прушкув", ua: "Прушкув" },
  'piaseczno': { pl: "Piaseczno", en: "Piaseczno", ru: "Пясечно", ua: "Пясечно" },
  'legionowo': { pl: "Legionowo", en: "Legionowo", ru: "Легионово", ua: "Легіоново" },
  'wolomin': { pl: "Wołomin", en: "Wołomin", ru: "Воломин", ua: "Воломін" },
  'zielonka': { pl: "Zielonka", en: "Zielonka", ru: "Зеленка", ua: "Зеленка" },
  'kobylka': { pl: "Kobyłka", en: "Kobyłka", ru: "Кобылка", ua: "Кобилка" },
  'jozefow': { pl: "Józefów", en: "Józefów", ru: "Юзефув", ua: "Юзефув" },
  'lomianki': { pl: "Łomianki", en: "Łomianki", ru: "Ломянки", ua: "Ломянки" },
  'konstancin-jeziorna': { pl: "Konstancin-Jeziorna", en: "Konstancin-Jeziorna", ru: "Констанцин-Езёрна", ua: "Констанцін-Єзьорна" },
  'piastow': { pl: "Piastów", en: "Piastów", ru: "Пястув", ua: "Пястув" },
  'sulejowek': { pl: "Sulejówek", en: "Sulejówek", ru: "Сулеювек", ua: "Сулєювек" },
  'milanowek': { pl: "Milanówek", en: "Milanówek", ru: "Миланувек", ua: "Міланувек" },
  'brwinow': { pl: "Brwinów", en: "Brwinów", ru: "Брвинув", ua: "Брвінув" },
  'nadarzyn': { pl: "Nadarzyn", en: "Nadarzyn", ru: "Надажин", ua: "Надажин" },
  'raszyn': { pl: "Raszyn", en: "Raszyn", ru: "Рашин", ua: "Рашин" },
  'grodzisk-mazowiecki': { pl: "Grodzisk Mazowiecki", en: "Grodzisk Mazowiecki", ru: "Гродзиск-Мазовецки", ua: "Гродзиськ-Мазовецький" },
  'nowy-dwor-mazowiecki': { pl: "Nowy Dwór Mazowiecki", en: "Nowy Dwór Mazowiecki", ru: "Новы-Двур-Мазовецки", ua: "Новий-Двір-Мазовецький" },
};

/** @type {{ slug: string, kind: 'district'|'suburb', neighbors: string[], feature: Record<string,string> }[]} */
export const DISTRICTS = [
  {
    slug: 'mokotow',
    kind: 'district',
    neighbors: ["ochota", "wilanow", "ursynow", "piaseczno"],
    feature: {
      pl: "centra biurowe, Galeria Mokotów i aleje Puławska",
      en: "business hubs, Galeria Mokotów and Puławska Avenue",
      ru: "деловые кварталы, Galeria Mokotów и Puławska",
      ua: "ділові квартали, Galeria Mokotów і Puławska"
    },
  },
  {
    slug: 'wola',
    kind: 'district',
    neighbors: ["ochota", "srodmiescie", "bemowo", "pruszkow"],
    feature: {
      pl: "biurowce Mordoru, Wolska i okolice Dworca Zachodniego",
      en: "office districts, Wolska Street and West Station area",
      ru: "офисные кварталы, Wolska и Западный вокзал",
      ua: "офісні квартали, Wolska і Західний вокзал"
    },
  },
  {
    slug: 'praga-poludnie',
    kind: 'district',
    neighbors: ["praga-polnoc", "wawer", "rembertow", "otwock"],
    feature: {
      pl: "Stadion Narodowy, CH Promenada i zabytkowa Praga",
      en: "National Stadium, Promenada mall and historic Praga",
      ru: "Национальный стадион, ТЦ Promenada и историческая Прага",
      ua: "Національний стадіон, ТЦ Promenada і історична Прага"
    },
  },
  {
    slug: 'praga-polnoc',
    kind: 'district',
    neighbors: ["praga-poludnie", "srodmiescie", "zoliborz", "zabki"],
    feature: {
      pl: "Stara Praga, mosty na Wisłę i ulice Ząbkowska",
      en: "Old Praga, Vistula bridges and Ząbkowska Street",
      ru: "Старая Прага, мосты через Вислу и Ząbkowska",
      ua: "Стара Прага, мости через Віслу і Ząbkowska"
    },
  },
  {
    slug: 'srodmiescie',
    kind: 'district',
    neighbors: ["wola", "praga-polnoc", "ochota", "zoliborz"],
    feature: {
      pl: "centrum miasta, hotele, dworce i parkingi podziemne",
      en: "city centre, hotels, stations and underground car parks",
      ru: "центр города, отели, вокзалы и подземные паркинги",
      ua: "центр міста, готелі, вокзали та підземні паркінги"
    },
  },
  {
    slug: 'ursynow',
    kind: 'district',
    neighbors: ["mokotow", "wilanow", "piaseczno", "konstancin-jeziorna"],
    feature: {
      pl: "osiedla Kabaty, Imielin i aleje Puławska na południu",
      en: "Kabaty and Imielin estates, southern Puławska corridor",
      ru: "районы Kabaty, Imielin и южная Puławska",
      ua: "райони Kabaty, Imielin і південна Puławska"
    },
  },
  {
    slug: 'bielany',
    kind: 'district',
    neighbors: ["zoliborz", "bemowo", "bialoleka", "lomianki"],
    feature: {
      pl: "Lasek Bielański, ulice Marymoncka i Młocinska",
      en: "Bielański Forest, Marymoncka and Młocinska streets",
      ru: "парк Bielański, Marymoncka и северные магистрали",
      ua: "парк Bielański, Marymoncka і північні магістралі"
    },
  },
  {
    slug: 'bemowo',
    kind: 'district',
    neighbors: ["wola", "bielany", "ursus", "pruszkow"],
    feature: {
      pl: "Lotnisko Chopina, osiedla Górce i Karolin",
      en: "Chopin Airport vicinity, Górce and Karolin estates",
      ru: "окрестности аэропорта Chopin, Górce и Karolin",
      ua: "околиці аеропорту Chopin, Górce і Karolin"
    },
  },
  {
    slug: 'targowek',
    kind: 'district',
    neighbors: ["praga-polnoc", "bialoleka", "marki", "zabki"],
    feature: {
      pl: "CH Targówek, M1 Marki i trasa S8",
      en: "Targówek malls, M1 Marki and S8 corridor",
      ru: "ТЦ Targówek, M1 Marki и трасса S8",
      ua: "ТЦ Targówek, M1 Marki і траса S8"
    },
  },
  {
    slug: 'ochota',
    kind: 'district',
    neighbors: ["wola", "mokotow", "srodmiescie", "raszyn"],
    feature: {
      pl: "Dworzec Zachodni, CH Blue City i ulice Grójecka",
      en: "West Station, Blue City mall and Grójecka Street",
      ru: "Западный вокзал, Blue City и Grójecka",
      ua: "Західний вокзал, Blue City і Grójecka"
    },
  },
  {
    slug: 'wawer',
    kind: 'district',
    neighbors: ["praga-poludnie", "wesola", "otwock", "jozefow"],
    feature: {
      pl: "Wał Miedzeszyński, Nadwiślańskie osiedla i trasa S2",
      en: "Wał Miedzeszyński, riverside estates and S2 route",
      ru: "Wał Miedzeszyński, набережные и трасса S2",
      ua: "Wał Miedzeszyński, набережні та траса S2"
    },
  },
  {
    slug: 'bialoleka',
    kind: 'district',
    neighbors: ["targowek", "bielany", "legionowo", "marki"],
    feature: {
      pl: "Modlińska, osiedla przy linii metra M1",
      en: "Modlińska corridor and M1 metro line estates",
      ru: "Modlińska и жилые кварталы у линии M1",
      ua: "Modlińska і житлові квартали біля лінії M1"
    },
  },
  {
    slug: 'wilanow',
    kind: 'district',
    neighbors: ["mokotow", "ursynow", "konstancin-jeziorna", "piaseczno"],
    feature: {
      pl: "Wilanów Pałac, Puławska południe i Wilanowska",
      en: "Wilanów Palace area, southern Puławska and Wilanowska",
      ru: "дворец Wilanów, южная Puławska и Wilanowska",
      ua: "палац Wilanów, південна Puławska і Wilanowska"
    },
  },
  {
    slug: 'ursus',
    kind: 'district',
    neighbors: ["bemowo", "wlochy", "piastow", "pruszkow"],
    feature: {
      pl: "fabryczna historia, Skorosze i Traktorowa",
      en: "industrial heritage, Skorosze and Traktorowa",
      ru: "промышленный район, Skorosze и Traktorowa",
      ua: "промисловий район, Skorosze і Traktorowa"
    },
  },
  {
    slug: 'wlochy',
    kind: 'district',
    neighbors: ["ursus", "ursynow", "raszyn", "nadarzyn"],
    feature: {
      pl: "Lotnisko Chopin, Rakowiec i 1. Sierpnia",
      en: "Chopin Airport, Rakowiec and 1 Sierpnia Street",
      ru: "аэропорт Chopin, Rakowiec и 1 Sierpnia",
      ua: "аеропорт Chopin, Rakowiec і 1 Sierpnia"
    },
  },
  {
    slug: 'rembertow',
    kind: 'district',
    neighbors: ["praga-poludnie", "wawer", "wesola", "sulejowek"],
    feature: {
      pl: "osiedla MDM, ulice Gen. Augustyna Emila Fieldorfa",
      en: "MDM estates and Fieldorfa Street corridor",
      ru: "жилые кварталы MDM и Fieldorfa",
      ua: "житлові квартали MDM і Fieldorfa"
    },
  },
  {
    slug: 'wesola',
    kind: 'district',
    neighbors: ["bialoleka", "wawer", "sulejowek", "zielonka"],
    feature: {
      pl: "Wesoła-Centrum, pętla tramwajowa i trasa S2",
      en: "Wesoła centre, tram terminus and S2 route",
      ru: "центр Wesoła, трамвайная петля и S2",
      ua: "центр Wesoła, трамвайна петля і S2"
    },
  },
  {
    slug: 'zoliborz',
    kind: 'district',
    neighbors: ["bielany", "praga-polnoc", "srodmiescie", "lomianki"],
    feature: {
      pl: "Stare Żoliborz, Plac Wilsona i aleje Wojska Polskiego",
      en: "Old Żoliborz, Wilson Square and Wojska Polskiego",
      ru: "Старый Жолибож, Plac Wilsona и Wojska Polskiego",
      ua: "Старий Жолібож, Plac Wilsona і Wojska Polskiego"
    },
  },
  {
    slug: 'zabki',
    kind: 'suburb',
    neighbors: ["marki", "zielonka", "targowek", "praga-polnoc"],
    feature: {
      pl: "granica z Warszawą, DK8 i osiedla przy Radzymińskiej",
      en: "Warsaw border, DK8 and estates near Radzymińska",
      ru: "граница с Варшавой, DK8 и кварталы у Radzymińska",
      ua: "межа з Варшавою, DK8 і квартали біля Radzymińska"
    },
  },
  {
    slug: 'marki',
    kind: 'suburb',
    neighbors: ["zabki", "zielonka", "kobylka", "targowek"],
    feature: {
      pl: "centrum handlowe M1 Marki i trasa S8",
      en: "M1 Marki shopping centre and S8 corridor",
      ru: "ТЦ M1 Marki и трасса S8",
      ua: "ТЦ M1 Marki і траса S8"
    },
  },
  {
    slug: 'otwock',
    kind: 'suburb',
    neighbors: ["jozefow", "wawer", "konstancin-jeziorna", "praga-poludnie"],
    feature: {
      pl: "Świder, linia kolejowa i ulice Andriollego",
      en: "Świder area, rail line and Andriollego Street",
      ru: "Свидер, железная дорога и Andriollego",
      ua: "Свідер, залізниця і Andriollego"
    },
  },
  {
    slug: 'pruszkow',
    kind: 'suburb',
    neighbors: ["piastow", "brwinow", "ursus", "wola"],
    feature: {
      pl: "centrum Pruszkowa, Żbików i dojazd S8",
      en: "Pruszków centre, Żbików and S8 access",
      ru: "центр Прушкува, Żbików и выезд на S8",
      ua: "центр Прушкува, Żbików і виїзд на S8"
    },
  },
  {
    slug: 'piaseczno',
    kind: 'suburb',
    neighbors: ["konstancin-jeziorna", "ursynow", "mokotow", "wilanow"],
    feature: {
      pl: "Puławska na południe, Auchan i osiedla Julianów",
      en: "southern Puławska, Auchan and Julianów estates",
      ru: "южная Puławska, Auchan и Julianów",
      ua: "південна Puławska, Auchan і Julianów"
    },
  },
  {
    slug: 'legionowo',
    kind: 'suburb',
    neighbors: ["lomianki", "bialoleka", "nowy-dwor-mazowiecki", "bielany"],
    feature: {
      pl: "Jagiellońska, DK61 i dojazd koleją do Warszawy",
      en: "Jagiellońska, DK61 and rail link to Warsaw",
      ru: "Jagiellońska, DK61 и ж/д до Варшавы",
      ua: "Jagiellońska, DK61 і залізниця до Варшави"
    },
  },
  {
    slug: 'wolomin',
    kind: 'suburb',
    neighbors: ["kobylka", "zielonka", "marki", "sulejowek"],
    feature: {
      pl: "centrum Wołomina, Wileńska i trasa DK8",
      en: "Wołomin centre, Wileńska Street and DK8",
      ru: "центр Воломина, Wileńska и DK8",
      ua: "центр Воломіна, Wileńska і DK8"
    },
  },
  {
    slug: 'zielonka',
    kind: 'suburb',
    neighbors: ["zabki", "marki", "kobylka", "wesola"],
    feature: {
      pl: "zielone osiedla, Kolejowa i bliskość Marek",
      en: "green estates, Kolejowa Street and Marki nearby",
      ru: "зелёные кварталы, Kolejowa и рядом Marki",
      ua: "зелені квартали, Kolejowa і поруч Marki"
    },
  },
  {
    slug: 'kobylka',
    kind: 'suburb',
    neighbors: ["wolomin", "marki", "zielonka", "sulejowek"],
    feature: {
      pl: "Napoleona, DK8 i osiedla przy Wołominie",
      en: "Napoleona Street, DK8 and estates near Wołomin",
      ru: "улица Napoleona, DK8 и кварталы у Wołomin",
      ua: "вулиця Napoleona, DK8 і квартали біля Wołomin"
    },
  },
  {
    slug: 'jozefow',
    kind: 'suburb',
    neighbors: ["otwock", "wawer", "konstancin-jeziorna", "sulejowek"],
    feature: {
      pl: "Świder, Długa i dojazd koleją do Warszawy",
      en: "Świder, Długa Street and rail to Warsaw",
      ru: "Свидер, Długa и ж/д до Варшавы",
      ua: "Свідер, Długa і залізниця до Варшави"
    },
  },
  {
    slug: 'lomianki',
    kind: 'suburb',
    neighbors: ["bielany", "zoliborz", "legionowo", "nowy-dwor-mazowiecki"],
    feature: {
      pl: "Warszawska, DK7 i osiedla nad Wisłą",
      en: "Warszawska Street, DK7 and riverside estates",
      ru: "Warszawska, DK7 и кварталы у Вислы",
      ua: "Warszawska, DK7 і квартали біля Вісли"
    },
  },
  {
    slug: 'konstancin-jeziorna',
    kind: 'suburb',
    neighbors: ["piaseczno", "wilanow", "otwock", "jozefow"],
    feature: {
      pl: "uzdrowisko, Sułkowskiego i okolice Jeziorny",
      en: "spa town, Sułkowskiego Street and Jeziorna area",
      ru: "курортный город, Sułkowskiego и Jeziorna",
      ua: "курортне місто, Sułkowskiego і Jeziorna"
    },
  },
  {
    slug: 'piastow',
    kind: 'suburb',
    neighbors: ["pruszkow", "ursus", "brwinow", "wola"],
    feature: {
      pl: "Warszawska, blisko Pruszkowa i Ursusa",
      en: "Warszawska Street, near Pruszków and Ursus",
      ru: "Warszawska, рядом Pruszków и Ursus",
      ua: "Warszawska, поруч Pruszków і Ursus"
    },
  },
  {
    slug: 'sulejowek',
    kind: 'suburb',
    neighbors: ["wesola", "rembertow", "wolomin", "zielonka"],
    feature: {
      pl: "Piłsudskiego, Miłosna i dojazd DK2",
      en: "Piłsudskiego Street, Miłosna and DK2 access",
      ru: "Piłsudskiego, Miłosna и выезд DK2",
      ua: "Piłsudskiego, Miłosna і виїзд DK2"
    },
  },
  {
    slug: 'milanowek',
    kind: 'suburb',
    neighbors: ["brwinow", "grodzisk-mazowiecki", "pruszkow", "piastow"],
    feature: {
      pl: "willowe ulice, WKD i Królewska",
      en: "villa streets, WKD rail and Królewska",
      ru: "вилловые улицы, WKD и Królewska",
      ua: "віллові вулиці, WKD і Królewska"
    },
  },
  {
    slug: 'brwinow',
    kind: 'suburb',
    neighbors: ["pruszkow", "milanowek", "grodzisk-mazowiecki", "piastow"],
    feature: {
      pl: "centrum Brwinowa, WKD i trasa DK719",
      en: "Brwinów centre, WKD and DK719 route",
      ru: "центр Брвинува, WKD и DK719",
      ua: "центр Брвінува, WKD і DK719"
    },
  },
  {
    slug: 'nadarzyn',
    kind: 'suburb',
    neighbors: ["raszyn", "wlochy", "grodzisk-mazowiecki", "pruszkow"],
    feature: {
      pl: "Ptak Warsaw Expo, Janki i węzeł S8/A2",
      en: "Ptak Warsaw Expo, Janki and S8/A2 junction",
      ru: "Ptak Warsaw Expo, Janki и развязка S8/A2",
      ua: "Ptak Warsaw Expo, Janki і розв’язка S8/A2"
    },
  },
  {
    slug: 'raszyn',
    kind: 'suburb',
    neighbors: ["ochota", "wlochy", "nadarzyn", "piaseczno"],
    feature: {
      pl: "CH Janki, al. Krakowska i węzeł S2/S8",
      en: "Janki mall, Krakowska Avenue and S2/S8 junction",
      ru: "ТЦ Janki, al. Krakowska и развязка S2/S8",
      ua: "ТЦ Janki, al. Krakowska і розв’язка S2/S8"
    },
  },
  {
    slug: 'grodzisk-mazowiecki',
    kind: 'suburb',
    neighbors: ["milanowek", "brwinow", "nadarzyn", "pruszkow"],
    feature: {
      pl: "centrum Grodziska, WKD i DK719",
      en: "Grodzisk centre, WKD and DK719",
      ru: "центр Гродзиска, WKD и DK719",
      ua: "центр Гродзиська, WKD і DK719"
    },
  },
  {
    slug: 'nowy-dwor-mazowiecki',
    kind: 'suburb',
    neighbors: ["legionowo", "lomianki", "bialoleka", "bielany"],
    feature: {
      pl: "lotnisko Modlin, Sukienna i DK62",
      en: "Modlin Airport, Sukienna Street and DK62",
      ru: "аэропорт Modlin, Sukienna и DK62",
      ua: "аеропорт Modlin, Sukienna і DK62"
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

function isSuburb(kind) {
  return kind === 'suburb';
}

const COPY = {
  pl: {
    h1: (n, kind) =>
      isSuburb(kind)
        ? `Laweta ${n} — pomoc drogowa 24h`
        : `Laweta Warszawa ${n} — pomoc drogowa 24h`,
    intro: (n, f) =>
      `INNSER — tania laweta i pomoc drogowa w dzielnicy ${n}. Znamy ${f}. Dojazd zwykle 20–30 minut, całodobowo.`,
    p2: (n) =>
      `Holowanie, awaryjne odpalanie, wymiana koła i otwieranie aut w ${n} i całej Warszawie. Cena ustalana z góry — bez ukrytych opłat. Zadzwoń: 506-001-057.`,
    svc: 'Nasze usługi w Warszawie',
    near: (n) => `Obsługujemy również dzielnice sąsiadujące z ${n}:`,
    linkLaweta: (n, kind) => (isSuburb(kind) ? `Laweta ${n}` : `Laweta Warszawa ${n}`),
    indexTitle: 'Laweta Warszawa — dzielnice i miasta podmiejskie',
    indexDesc: 'Pomoc drogowa INNSER w dzielnicach Warszawy i miastach podmiejskich (Ząbki, Marki, Otwock, Pruszków, Piaseczno…). Wybierz swój rejon — dojazd 24/7.',
    seoTitle: (n, kind) =>
      isSuburb(kind)
        ? `Laweta ${n} — pomoc drogowa 24h | INNSER`
        : `Laweta Warszawa ${n} — pomoc drogowa 24h | INNSER`,
    seoDesc: (n, kind) =>
      isSuburb(kind)
        ? `Laweta i pomoc drogowa ${n} 24/7. Holowanie od 250 zł, dojazd ~30 min. INNSER: 506-001-057.`
        : `Laweta i pomoc drogowa ${n}, Warszawa 24/7. Holowanie od 250 zł, dojazd ~30 min. INNSER: 506-001-057.`,
    indexSeoTitle: 'Laweta Warszawa — dzielnice i okolice 24/7 | INNSER',
    indexSeoDesc:
      'Pomoc drogowa i laweta w dzielnicach Warszawy i miastach podmiejskich — Ząbki, Marki, Piaseczno, Pruszków, Otwock. INNSER 24/7, 506-001-057.',
  },
  en: {
    h1: (n, kind) =>
      isSuburb(kind)
        ? `Tow truck ${n} — roadside assistance 24/7`
        : `Tow truck Warsaw ${n} — roadside assistance 24/7`,
    intro: (n, f) =>
      `INNSER — affordable tow truck and roadside help in ${n}. We know ${f}. Arrival usually 20–30 minutes, 24/7.`,
    p2: (n) =>
      `Towing, jump starts, tyre changes and car lockout service across ${n} and all of Warsaw. Fixed price upfront. Call: 506-001-057.`,
    svc: 'Our services in Warsaw',
    near: (n) => `We also serve districts next to ${n}:`,
    linkLaweta: (n, kind) => (isSuburb(kind) ? `Tow truck ${n}` : `Tow truck Warsaw ${n}`),
    indexTitle: 'Tow truck Warsaw — districts & suburbs',
    indexDesc: 'INNSER roadside assistance in Warsaw districts and suburbs (Ząbki, Marki, Otwock, Pruszków, Piaseczno…). Pick your area — 24/7 arrival.',
    seoTitle: (n, kind) =>
      isSuburb(kind)
        ? `Tow truck ${n} — 24/7 roadside help | INNSER`
        : `Tow truck Warsaw ${n} — 24/7 roadside help | INNSER`,
    seoDesc: (n, kind) =>
      isSuburb(kind)
        ? `Tow truck & roadside assistance ${n} 24/7. Towing from 250 PLN, ~30 min ETA. INNSER: 506-001-057.`
        : `Tow truck & roadside assistance ${n}, Warsaw 24/7. Towing from 250 PLN, ~30 min ETA. INNSER: 506-001-057.`,
    indexSeoTitle: 'Tow truck Warsaw — districts & suburbs 24/7 | INNSER',
    indexSeoDesc:
      'Roadside assistance in Warsaw districts and suburbs — Ząbki, Marki, Piaseczno, Pruszków, Otwock. INNSER 24/7, 506-001-057.',
  },
  ru: {
    h1: (n, kind) =>
      isSuburb(kind)
        ? `Эвакуатор ${n} — помощь на дороге 24/7`
        : `Эвакуатор Варшава ${n} — помощь на дороге 24/7`,
    intro: (n, f) =>
      `INNSER — лавета и эвакуатор в ${n}. Знаем ${f}. Приезд обычно 20–30 минут, круглосуточно.`,
    p2: (n) =>
      `Эвакуация, прикур, замена колеса и открытие авто на ${n} и по всей Варшаве. Цена согласована заранее. Звоните: 506-001-057.`,
    svc: 'Наши услуги в Варшаве',
    near: (n) => `Также обслуживаем соседние районы рядом с ${n}:`,
    linkLaweta: (n, kind) => (isSuburb(kind) ? `Эвакуатор ${n}` : `Эвакуатор Варшава ${n}`),
    indexTitle: 'Эвакуатор Варшава — районы и пригороды',
    indexDesc: 'Помощь на дороге INNSER в районах Варшавы и пригородах (Зомбки, Марки, Отвоцк, Прушкув, Пясечно…). Выберите свой — приезд 24/7.',
    seoTitle: (n, kind) =>
      isSuburb(kind)
        ? `Эвакуатор ${n} — помощь 24/7 | INNSER`
        : `Эвакуатор Варшава ${n} — помощь 24/7 | INNSER`,
    seoDesc: (n, kind) =>
      isSuburb(kind)
        ? `Эвакуатор и лавета ${n} 24/7. Эвакуация от 250 zł, приезд ~30 мин. INNSER: 506-001-057.`
        : `Эвакуатор и лавета ${n}, Варшава 24/7. Эвакуация от 250 zł, приезд ~30 мин. INNSER: 506-001-057.`,
    indexSeoTitle: 'Эвакуатор Варшава — районы и пригороды 24/7 | INNSER',
    indexSeoDesc:
      'Эвакуатор во всех районах Варшавы — Мокotów, Воля, Прага, Урсынów и другие. INNSER 24/7, 506-001-057.',
  },
  ua: {
    h1: (n, kind) =>
      isSuburb(kind)
        ? `Евакуатор ${n} — допомога на дорозі 24/7`
        : `Евакуатор Варшава ${n} — допомога на дорозі 24/7`,
    intro: (n, f) =>
      `INNSER — лавета та евакуатор у ${n}. Знаємо ${f}. Приїзд зазвичай 20–30 хвилин, цілодобово.`,
    p2: (n) =>
      `Евакуація, прикур, заміна колеса та відкриття авто на ${n} і по всій Варшаві. Ціна домовлена наперед. Телефон: 506-001-057.`,
    svc: 'Наші послуги у Варшаві',
    near: (n) => `Також обслуговуємо сусідні райони біля ${n}:`,
    linkLaweta: (n, kind) => (isSuburb(kind) ? `Евакуатор ${n}` : `Евакуатор Варшава ${n}`),
    indexTitle: 'Евакуатор Варшава — райони та передмістя',
    indexDesc: 'Допомога на дорозі INNSER у районах Варшавы та передмістях (Зомбки, Маркі, Отвоцьк, Прушкув, Пясечно…). Оберіть свій — приїзд 24/7.',
    seoTitle: (n, kind) =>
      isSuburb(kind)
        ? `Евакуатор ${n} — допомога 24/7 | INNSER`
        : `Евакуатор Варшава ${n} — допомога 24/7 | INNSER`,
    seoDesc: (n, kind) =>
      isSuburb(kind)
        ? `Евакуатор і лавета ${n} 24/7. Евакуація від 250 zł, приїзд ~30 хв. INNSER: 506-001-057.`
        : `Евакуатор і лавета ${n}, Варшава 24/7. Евакуація від 250 zł, приїзд ~30 хв. INNSER: 506-001-057.`,
    indexSeoTitle: 'Евакуатор Варшава — райони та передмістя 24/7 | INNSER',
    indexSeoDesc:
      'Евакуатор у всіх районах Варшавы — Mokotów, Wola, Praga, Ursynów та інші. INNSER 24/7, 506-001-057.',
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
  const kind = d.kind || 'district';
  return { title: c.seoTitle(n, kind), desc: c.seoDesc(n, kind) };
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
  const kind = d.kind || 'district';
  const nearItems = d.neighbors
    .map((nb) => {
      const nn = districtName(nb, lang);
      const nk = districtBySlug(nb)?.kind || 'district';
      return `<a href="/${seg}/dzielnice/${nb}/" class="ar-tag">${esc(c.linkLaweta(nn, nk))}</a>`;
    })
    .join('\n');
  return `<h1 class="sh">${esc(c.h1(n, kind))}</h1>
${renderDistrictRichHtml(lang, slug)}
<h2 class="ar-title">${esc(c.svc)}</h2>
<ul class="dist-links">${svcItems}</ul>
<h2 class="ar-title">${esc(c.near(n))}</h2>
<div class="ar-list dist-near">${nearItems}</div>
<p style="text-align:center;margin-top:28px"><a href="tel:+48506001057" class="btn btn-y">📞 506-001-057</a></p>`;
}

export function renderDistrictsIndexStaticHtml(lang, localePathSeg) {
  const c = COPY[lang] || COPY.pl;
  const rc = ROAD_COPY[lang] || ROAD_COPY.pl;
  const seg = localePathSeg;
  const labels = {
    pl: { dist: 'Dzielnice Warszawy', sub: 'Miasta podmiejskie', roads: 'Trasy i autostrady' },
    en: { dist: 'Warsaw districts', sub: 'Suburban towns', roads: 'Highways & roads' },
    ru: { dist: 'Районы Варшавы', sub: 'Пригороды', roads: 'Трассы' },
    ua: { dist: 'Райони Варшави', sub: 'Передмістя', roads: 'Траси' },
  };
  const lab = labels[lang] || labels.pl;
  const city = DISTRICTS.filter((d) => (d.kind || 'district') === 'district');
  const subs = DISTRICTS.filter((d) => d.kind === 'suburb');
  const tags = (list) =>
    list
      .map((d) => {
        const n = districtName(d.slug, lang);
        const kind = d.kind || 'district';
        return `<a href="/${seg}/dzielnice/${d.slug}/" class="ar-tag">${esc(c.linkLaweta(n, kind))}</a>`;
      })
      .join('\n');
  const roadTags = ROADS.map((d) => {
    const n = ROAD_NAMES[d.slug]?.[lang] || ROAD_NAMES[d.slug]?.pl || d.code || d.slug;
    return `<a href="/${seg}/trasy/${d.slug}/" class="ar-tag">${esc(rc.linkLaweta(n))}</a>`;
  }).join('\n');
  return `<h1 class="sh">${esc(c.indexTitle)}</h1>
<p class="sd">${esc(c.indexDesc)}</p>
<h2 class="ar-title dist-h2">${esc(lab.dist)}</h2>
<div class="ar-list dist-all">${tags(city)}</div>
<h2 class="ar-title dist-h2">${esc(lab.sub)}</h2>
<div class="ar-list dist-all">${tags(subs)}</div>
<h2 class="ar-title dist-h2">${esc(lab.roads)}</h2>
<div class="ar-list dist-all">${roadTags}</div>
<p style="text-align:center;margin-top:28px"><a href="tel:+48506001057" class="btn btn-y">📞 506-001-057</a></p>`;
}

/** JSON injected into SPA for runtime renderDistrict(). */
export function districtsJsonForRuntime() {
  return JSON.stringify(
    DISTRICTS.map((d) => ({
      slug: d.slug,
      kind: d.kind || 'district',
      neighbors: d.neighbors,
      names: NAMES[d.slug],
      feature: d.feature,
    }))
  );
}

export { COPY, NAMES, LANGS };
