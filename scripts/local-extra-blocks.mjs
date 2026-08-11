/**
 * Unique local SEO paragraphs for district/road pages (PL/EN/RU/UA).
 * Appended at render + baked into runtime JSON so crawlers and SPA see the same text.
 */

export function districtLocalBlock(lang, slug, landmarks, locative) {
  const lm = landmarks?.[slug];
  const loc = locative?.[slug]?.[lang] || locative?.[slug]?.pl || slug;
  if (!lm) return null;
  const streets = (lm.streets || []).slice(0, 4).join(', ');
  const malls = (lm.malls || []).slice(0, 3).join(', ');
  const hubs = (lm.hubs || []).slice(0, 4).join(', ');
  const kind = lm.kind === 'suburb' ? 'suburb' : 'district';

  const pack = {
    pl: {
      title: kind === 'suburb' ? `Lokalne punkty w ${loc}` : `Lokalne punkty na ${loc}`,
      text:
        `W praktyce najczęściej jedziemy na ${streets || 'główne arterie'}. ` +
        `Parkingi i centra handlowe w tym rejonie (${malls || 'lokalne CH'}) to typowe miejsca, skąd holujemy auta — także z poziomów −1/−2. ` +
        `Osiedla i węzły: ${hubs || 'centrum lokalne'}. ` +
        `Jeśli auto nie odpala po nocy, stoi po kolizji albo nie wyjedzie z ciasnego garażu, INNSER podaje cenę z góry (tel. 506-001-057) i dobiera lawetę albo odpalanie na miejscu. ` +
        `Dojazd zwykle 20–40 minut; holowanie od 250 zł do 15 km. Obsługujemy PL / EN / RU / UA.`,
    },
    en: {
      title: `Local spots in ${loc}`,
      text:
        `In practice we most often respond on ${streets || 'the main arteries'}. ` +
        `Shopping centres and car parks here (${malls || 'local malls'}) are typical pickup points — including levels −1/−2. ` +
        `Neighbourhoods and hubs: ${hubs || 'the local centre'}. ` +
        `Whether the car won’t start after a night out, sits after a crash, or won’t leave a tight garage, INNSER quotes upfront (tel. 506-001-057) and sends a flatbed or an on-site jump start. ` +
        `Arrival usually 20–40 minutes; towing from 250 PLN up to 15 km. We speak PL / EN / RU / UA.`,
    },
    ru: {
      title: `Локальные точки в районе ${loc}`,
      text:
        `На практике чаще всего выезжаем на ${streets || 'основные улицы'}. ` +
        `ТЦ и паркинги здесь (${malls || 'локальные ТЦ'}) — обычные точки эвакуации, в том числе с уровней −1/−2. ` +
        `ЖК и узлы: ${hubs || 'локальный центр'}. ` +
        `Если авто не заводится после ночи, стоит после ДТП или не выезжает из тесного гаража — INNSER называет цену заранее (тел. 506-001-057) и присылает лавету или прикур на месте. ` +
        `Приезд обычно 20–40 минут; эвакуация от 250 zł до 15 км. Говорим RU / PL / EN / UA.`,
    },
    ua: {
      title: `Локальні точки в районі ${loc}`,
      text:
        `На практиці найчастіше виїжджаємо на ${streets || 'головні вулиці'}. ` +
        `ТРЦ і паркінги тут (${malls || 'локальні ТРЦ'}) — звичні точки евакуації, зокрема з рівнів −1/−2. ` +
        `ЖК і вузли: ${hubs || 'локальний центр'}. ` +
        `Якщо авто не заводиться після ночі, стоїть після ДТП або не виїжджає з тісного гаража — INNSER називає ціну заздалегідь (тел. 506-001-057) і надсилає лафету або прикур на місці. ` +
        `Приїзд зазвичай 20–40 хвилин; евакуація від 250 zł до 15 км. Мови: UA / PL / RU / EN.`,
    },
  };
  return pack[lang] || pack.pl;
}

/** Extra unique copy for highway pages — junctions / corridor specifics. */
export function roadLocalBlock(lang, code, feature, neighbors) {
  const feat = (feature && (feature[lang] || feature.pl)) || code;
  const near = (neighbors || []).slice(0, 4).join(', ');
  const pack = {
    pl: {
      title: `Konkretnie na trasie ${code}`,
      text:
        `Na odcinku przy Warszawie (${feat}) najczęściej zdejmujemy pojazdy z pasa awaryjnego i pobocza, a potem dowozimy do warsztatu w stolicy lub dalej po Polsce. ` +
        (near ? `Sąsiednie trasy, z którymi łączymy dojazd: ${near}. ` : '') +
        `Po kolizji ważne jest szybkie zabezpieczenie auta i bezpieczny zjazd — nie zostawiamy Was bez informacji o cenie. ` +
        `Zadzwońcie 506-001-057: podamy ETA i kwotę przed wyjazdem. Holowanie od 250 zł (do 15 km), dłuższe trasy wyceniamy indywidualnie. PL / EN / RU / UA.`,
    },
    en: {
      title: `What we do on ${code}`,
      text:
        `On the Warsaw stretch (${feat}) we usually recover vehicles from the hard shoulder / roadside and then tow to a workshop in the capital or further across Poland. ` +
        (near ? `Nearby roads we also cover when linking jobs: ${near}. ` : '') +
        `After a crash, securing the car and a safe exit matter — and you get the price before we roll. ` +
        `Call 506-001-057 for ETA and a fixed quote. Towing from 250 PLN (up to 15 km); longer routes priced individually. PL / EN / RU / UA.`,
    },
    ru: {
      title: `Что делаем на трассе ${code}`,
      text:
        `На участке у Варшавы (${feat}) чаще всего снимаем авто с аварийной полосы / обочины и везём в сервис в столице или дальше по Польше. ` +
        (near ? `Соседние трассы, с которыми стыкуем выезды: ${near}. ` : '') +
        `После ДТП важны быстрая фиксация и безопасный съезд — цену называем до выезда. ` +
        `Звоните 506-001-057: скажем ETA и сумму. Эвакуация от 250 zł (до 15 км), дальние рейсы — индивидуально. RU / PL / EN / UA.`,
    },
    ua: {
      title: `Що робимо на трасі ${code}`,
      text:
        `На ділянці біля Варшави (${feat}) найчастіше знімаємо авто з аварійної смуги / узбіччя й веземо в сервіс у столиці або далі Польщею. ` +
        (near ? `Суміжні траси, з якими стикуємо виїзди: ${near}. ` : '') +
        `Після ДТП важливі швидка фіксація й безпечний з’їзд — ціну називаємо до виїзду. ` +
        `Телефонуйте 506-001-057: скажемо ETA і суму. Евакуація від 250 zł (до 15 км), далекі рейси — індивідуально. UA / PL / RU / EN.`,
    },
  };
  return pack[lang] || pack.pl;
}
