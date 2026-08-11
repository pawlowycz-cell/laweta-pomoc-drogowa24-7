/**
 * Unique local SEO paragraphs for district/road pages (PL/EN/RU/UA).
 * Uses hand-written flavor + landmark weave — not a single shared template.
 */

import { DISTRICT_FLAVOR, ROAD_FLAVOR } from './landing-flavor.mjs';

/**
 * @returns {{ title: string, text: string }[] | null}
 */
export function districtLocalBlocks(lang, slug, landmarks, locative) {
  const flavor = DISTRICT_FLAVOR[slug]?.[lang] || DISTRICT_FLAVOR[slug]?.pl;
  const lm = landmarks?.[slug];
  const loc = locative?.[slug]?.[lang] || locative?.[slug]?.pl || slug;
  if (!flavor || !lm) return null;

  const streetList = lm.streets || [];
  const mallList = lm.malls || [];
  const hubList = lm.hubs || [];
  const streets = streetList.join(', ');
  const malls = mallList.join(', ');
  const hubs = hubList.join(', ');
  const s0 = streetList[0] || loc;
  const s1 = streetList[1] || streetList[0] || loc;
  const m0 = mallList[0] || 'lokalne CH';
  const h0 = hubList[0] || loc;
  const suburb = lm.kind === 'suburb';

  const titles = {
    pl: {
      scene: suburb ? `Jak wygląda pomoc drogowa w ${loc}` : `Jak wygląda pomoc drogowa na ${loc}`,
      map: suburb ? `Mapa wezwań — ${loc}` : `Mapa wezwań na ${loc}`,
    },
    en: {
      scene: `What roadside help looks like in ${loc}`,
      map: `Call map — ${loc}`,
    },
    ru: {
      scene: `Как выглядит помощь на дороге в ${loc}`,
      map: `Карта вызовов — ${loc}`,
    },
    ua: {
      scene: `Як виглядає допомога на дорозі в ${loc}`,
      map: `Карта викликів — ${loc}`,
    },
  };
  const t = titles[lang] || titles.pl;

  const mapText = {
    pl:
      `Konkretne punkty, które padają najczęściej: ulice ${streets}; centra i parkingi ${malls}; osiedla / węzły ${hubs}. ` +
      `W godzinach 7–9 i 16–19 na ${s0} oraz ${s1} liczy się znajomość objazdów — nie stoimy w korku „na ślepo”. ` +
      `Po nocy przy ${h0} często wystarczy booster; po stłuczce albo awarii przy ${m0} — laweta, także z poziomów −1/−2. ` +
      `Holujemy auta, motocykle i skutery do partnerskiego warsztatu albo pod wskazany adres. ` +
      `Holowanie od 250 zł (do 15 km), dojazd zwykle 20–40 min w mieście — poza Warszawą doliczamy km. Tel. 506-001-057 (PL / EN / RU / UA).`,
    en:
      `Pins we hear most: streets ${streets}; malls and parks ${malls}; hubs ${hubs}. ` +
      `At 7–9 and 16–19 on ${s0} and ${s1} shortcuts matter — we do not sit blind in the jam. ` +
      `After a night out near ${h0} a booster is often enough; after a crash or failure at ${m0} — flatbed, including −1/−2. ` +
      `We tow cars, motorcycles and scooters to a partner workshop or your address. ` +
      `Towing from 250 PLN (up to 15 km), usually 20–40 min in the city — outside Warsaw we add km. Tel. 506-001-057 (PL / EN / RU / UA).`,
    ru:
      `Точки, которые звучат чаще всего: улицы ${streets}; ТЦ и паркинги ${malls}; ЖК / узлы ${hubs}. ` +
      `В 7–9 и 16–19 на ${s0} и ${s1} важны объезды — не стоим в пробке вслепую. ` +
      `После ночи у ${h0} часто хватает бустера; после ДТП или поломки у ${m0} — лавета, в том числе с −1/−2. ` +
      `Ведём авто, мото и скутеры в партнёрский сервис или по адресу. ` +
      `Эвакуация от 250 zł (до 15 км), обычно 20–40 мин в городе — за Варшавой добавляем км. Тел. 506-001-057 (RU / PL / EN / UA).`,
    ua:
      `Точки, що звучать найчастіше: вулиці ${streets}; ТРЦ і паркінги ${malls}; ЖК / вузли ${hubs}. ` +
      `О 7–9 і 16–19 на ${s0} та ${s1} важливі об’їзди — не стоїмо в заторі наосліп. ` +
      `Після ночі біля ${h0} часто вистачає бустера; після ДТП чи поломки біля ${m0} — лафета, зокрема з −1/−2. ` +
      `Веземо авто, мото і скутери в партнерський сервіс або за адресою. ` +
      `Евакуація від 250 zł (до 15 км), зазвичай 20–40 хв у місті — за Варшавою додаємо км. Тел. 506-001-057 (UA / PL / RU / EN).`,
  };

  return [
    { title: t.scene, text: `${flavor.scene} ${flavor.ops}`.replace(/\s+/g, ' ').trim() },
    { title: t.map, text: (mapText[lang] || mapText.pl).trim() },
  ];
}

/** @deprecated single-block API — use districtLocalBlocks */
export function districtLocalBlock(lang, slug, landmarks, locative) {
  const blocks = districtLocalBlocks(lang, slug, landmarks, locative);
  return blocks ? blocks[0] : null;
}

/**
 * @returns {{ title: string, text: string }[] | null}
 */
export function roadLocalBlocks(lang, code, feature, neighbors, slug) {
  const key = slug || String(code || '').toLowerCase().replace(/\s+/g, '');
  const flavor = ROAD_FLAVOR[key]?.[lang] || ROAD_FLAVOR[key]?.pl;
  const feat = (feature && (feature[lang] || feature.pl)) || code;
  const near = (neighbors || []).slice(0, 5).join(', ');
  if (!flavor) return null;

  const titles = {
    pl: {
      scene: `Realna praca na ${code}`,
      map: `Węzły i sąsiednie trasy — ${code}`,
    },
    en: {
      scene: `Real work on ${code}`,
      map: `Junctions and nearby roads — ${code}`,
    },
    ru: {
      scene: `Реальная работа на ${code}`,
      map: `Развязки и соседние трассы — ${code}`,
    },
    ua: {
      scene: `Реальна робота на ${code}`,
      map: `Розв’язки та суміжні траси — ${code}`,
    },
  };
  const t = titles[lang] || titles.pl;

  const mapText = {
    pl:
      `Odcinek przy Warszawie: ${feat}. ` +
      (near ? `Sąsiednie trasy w dyspozytorni: ${near}. ` : '') +
      `Zdejmujemy z pasa awaryjnego / pobocza, ustawiamy oznakowanie, zabezpieczamy po kolizji i dowozimy do warsztatu w stolicy lub dalej (do 500 km). ` +
      `Po telefonie pytamy o kilometr / węzeł, kierunek jazdy i czy auto da się zepchnąć — od tego zależy ETA. ` +
      `Cenę podajemy przed wyjazdem — tel. 506-001-057. Holowanie od 250 zł (do 15 km), dłuższe trasy indywidualnie. PL / EN / RU / UA.`,
    en:
      `Warsaw stretch: ${feat}. ` +
      (near ? `Linked roads on the desk: ${near}. ` : '') +
      `Hard shoulder / roadside recovery, cones if needed, post-crash secure, tow to a capital workshop or further (up to 500 km). ` +
      `On the call we ask for km / junction, direction and whether the car can be pushed — that sets ETA. ` +
      `Price before we roll — tel. 506-001-057. Towing from 250 PLN (up to 15 km); longer routes individually. PL / EN / RU / UA.`,
    ru:
      `Участок у Варшавы: ${feat}. ` +
      (near ? `Соседние трассы на пульте: ${near}. ` : '') +
      `Съём с аварийной / обочины, обозначение, фиксация после ДТП, доставка в сервис в столице или дальше (до 500 км). ` +
      `По телефону уточняем км / развязку, направление и можно ли откатить авто — от этого ETA. ` +
      `Цена до выезда — тел. 506-001-057. Эвакуация от 250 zł (до 15 км), дальше — индивидуально. RU / PL / EN / UA.`,
    ua:
      `Ділянка біля Варшави: ${feat}. ` +
      (near ? `Суміжні траси на пульті: ${near}. ` : '') +
      `Зйом з аварійної / узбіччя, позначення, фіксація після ДТП, доставка в сервіс у столиці або далі (до 500 км). ` +
      `Телефоном уточнюємо км / розв’язку, напрямок і чи можна відкотити авто — від цього ETA. ` +
      `Ціна до виїзду — тел. 506-001-057. Евакуація від 250 zł (до 15 км), далі — індивідуально. UA / PL / RU / EN.`,
  };

  return [
    { title: t.scene, text: `${flavor.scene} ${flavor.ops}`.replace(/\s+/g, ' ').trim() },
    { title: t.map, text: (mapText[lang] || mapText.pl).trim() },
  ];
}

/** @deprecated */
export function roadLocalBlock(lang, code, feature, neighbors) {
  const blocks = roadLocalBlocks(lang, code, feature, neighbors);
  return blocks ? blocks[0] : null;
}
