/** Rich per-road SEO body — full PL / EN / RU / UA. */

import { renderLandingPhotosHtml } from './landing-photos.mjs';

const ROAD_RICH = {
  "a2": {
    "pl": {
      "lead": "Pomoc drogowa na A2 — laweta Warszawa i holowanie na trasie A2 (Warszawa–Łódź) 24/7 z INNSER. Często holujemy auta, busy, motocykle i skutery przy węzłach Konotopa, Pruszków, Janki, Grodzisk Mazowiecki. Awaria, kolizja, rozładowany akumulator — przyjedziemy lawetą na pas awaryjny lub pobocze. Korytarz: Warszawa–Łódź (kierunek Poznań / Berlin).",
      "whyTitle": "Dlaczego INNSER na trasie A2?",
      "blocks": [
        {
          "title": "Węzły i odcinki A2 przy Warszawie",
          "text": "Znamy dojazd do A2 od strony stolicy: Konotopa, Pruszków, Janki, Grodzisk Mazowiecki. Holowanie z pasa awaryjnego / pobocza wykonujemy szybko i bezpiecznie . Obszar: autostrada A2, węzły Konotopa, Pruszków i Grodzisk Mazowiecki."
        },
        {
          "title": "Kolizje, awarie i transport do warsztatu",
          "text": "Po kolizji na A2 zabezpieczamy pojazd i holujemy do warsztatu w Warszawie lub dalej w Polsce (do 500 km). Cenę podajemy z góry przez telefon — bez ukrytych dopłat."
        },
        {
          "title": "Motocykle, skutery i busy",
          "text": "Na A2 często pomagamy też kierowcom motocykli, skuterów i dostawczakom — transport motocykla / skutera lawetą oraz holowanie vanów."
        }
      ],
      "h2transport": "Laweta A2 — holowanie na trasie 24h",
      "transport": "Potrzebujesz lawety na A2? INNSER — pomoc drogowa Warszawa i okolice, dojazd zwykle 20–40 minut do węzłów przy stolicy. Holowanie od 250 zł (do 15 km), wycena telefoniczna. Transport auta z A2 do serwisu lub parkingu.",
      "h2help": "Całodobowa pomoc drogowa na A2",
      "helpIntro": "Na A2 oferujemy pełen zakres — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      "bullets": [
        "Holowanie z pasa awaryjnego / pobocza A2 — auta, busy, motocykle, skutery",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster)",
        "Wymiana koła, otwieranie auta, dojazd do najbliższego węzła",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — laweta i pomoc drogowa na A2 przy Warszawie. Szybki dojazd, uczciwa wycena, obsługa w czterech językach."
    },
    "en": {
      "lead": "Towing and breakdown assistance on A2 — tow truck Warsaw 24/7 with INNSER on A2 (Warsaw–Łódź). We frequently recover cars, vans, motorcycles and scooters near Konotopa, Pruszków, Janki, Grodzisk Mazowiecki. Crash, breakdown or flat battery — we bring a flatbed to the hard shoulder. Corridor: Warsaw–Łódź (towards Poznań / Berlin).",
      "whyTitle": "Why choose INNSER on A2?",
      "blocks": [
        {
          "title": "A2 junctions near Warsaw",
          "text": "We know access to A2 from the capital side: Konotopa, Pruszków, Janki, Grodzisk Mazowiecki. Hard-shoulder / roadside recovery is done quickly and safely — we know A2 motorway, Konotopa, Pruszków and Grodzisk Mazowiecki junctions."
        },
        {
          "title": "Crashes, breakdowns and workshop transport",
          "text": "After a collision on A2 we secure the vehicle and tow it to a workshop in Warsaw or further across Poland (up to 500 km). Price quoted upfront by phone."
        },
        {
          "title": "Motorcycles, scooters and vans",
          "text": "On A2 we also help motorcycle and scooter riders and delivery vans — flatbed transport included."
        }
      ],
      "h2transport": "Tow truck A2 — roadside recovery 24/7",
      "transport": "Need a tow truck on A2? INNSER — roadside assistance Warsaw area, usually 20–40 minutes to junctions near the capital. Towing from 250 PLN (up to 15 km).",
      "h2help": "24/7 roadside assistance on A2",
      "helpIntro": "On A2 we offer a full package — we speak Polish, English, Russian and Ukrainian:",
      "bullets": [
        "Hard-shoulder / roadside towing on A2 — cars, vans, motorcycles, scooters",
        "Jump start for a dead battery (cables / booster)",
        "Tyre change, car lockout, transfer to the nearest junction",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — towing and breakdown assistance on A2 near Warsaw. Fast arrival, honest pricing, four languages."
    },
    "ru": {
      "lead": "Эвакуатор на A2 — лавета Варшава и помощь на трассе A2 (Варшава–Лодзь) 24/7 от INNSER. Часто эвакуируем авто, фургоны, мотоциклы и скутеры у развязок Konotopa, Pruszków, Janki, Grodzisk Mazowiecki. ДТП, поломка, разряженный аккумулятор — приедем на аварийную полосу или обочину. Коридор: Варшава–Лодзь (направление Познань / Берлин).",
      "whyTitle": "Почему INNSER на трассе A2?",
      "blocks": [
        {
          "title": "Развязки и участки A2 у Варшавы",
          "text": "Знаем подъезды к A2 со стороны столицы: Konotopa, Pruszków, Janki, Grodzisk Mazowiecki. Эвакуация с аварийной полосы / обочины — быстро и безопасно. Знаем автомагистраль A2, развязки Konotopa, Pruszków и Grodzisk Mazowiecki."
        },
        {
          "title": "ДТП, поломки и доставка в сервис",
          "text": "После аварии на A2 фиксируем авто и везём в сервис в Варшаве или дальше по Польше (до 500 км). Цену называем заранее по телефону."
        },
        {
          "title": "Мотоциклы, скутеры и фургоны",
          "text": "На A2 часто помогаем мотоциклистам, водителям скутеров и курьерам — перевозка мото / скутера на лавете."
        }
      ],
      "h2transport": "Лавета A2 — эвакуатор на трассе 24/7",
      "transport": "Нужен эвакуатор на A2? INNSER — лавета в Варшаве и окрестностях, обычно 20–40 минут до развязок у столицы. Эвакуация от 250 zł (до 15 км).",
      "h2help": "Круглосуточная помощь на A2",
      "helpIntro": "На A2 полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      "bullets": [
        "Эвакуация с аварийной полосы / обочины A2 — авто, фургоны, мото, скутеры",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер)",
        "Замена колеса, открытие авто, выезд к ближайшей развязке",
        "Тел. 506-001-057 — RU / PL / EN / UA, 24/7"
      ],
      "closing": "INNSER — эвакуатор и лавета на A2 у Варшавы. Быстрый приезд, честная цена, четыре языка."
    },
    "ua": {
      "lead": "Евакуатор на A2 — лафета Варшава та допомога на трасі A2 (Варшава–Лодзь) 24/7 від INNSER. Часто евакуюємо авто, фургони, мотоцикли та скутери біля розв’язок Konotopa, Pruszków, Janki, Grodzisk Mazowiecki. ДТП, поломка, розряджений акумулятор — приїдемо на аварійну смугу або узбіччя. Коридор: Варшава–Лодзь (напрямок Познань / Берлін).",
      "whyTitle": "Чому INNSER на трасі A2?",
      "blocks": [
        {
          "title": "Розв’язки та ділянки A2 біля Варшави",
          "text": "Знаємо під’їзди до A2 з боку столиці: Konotopa, Pruszków, Janki, Grodzisk Mazowiecki. Евакуація з аварійної смуги / узбіччя — швидко й безпечно. Знаємо автомагістраль A2, розв’язки Konotopa, Pruszków і Grodzisk Mazowiecki."
        },
        {
          "title": "ДТП, поломки та доставка в сервіс",
          "text": "Після аварії на A2 фіксуємо авто і веземо в сервіс у Варшаві або далі Польщею (до 500 км). Ціну називаємо наперед телефоном."
        },
        {
          "title": "Мотоцикли, скутери та фургони",
          "text": "На A2 часто допомагаємо мотоциклістам, водіям скутерів і кур’єрам — перевезення мото / скутера на лафеті."
        }
      ],
      "h2transport": "Лафета A2 — евакуатор на трасі 24/7",
      "transport": "Потрібен евакуатор на A2? INNSER — лафета у Варшаві та околицях, зазвичай 20–40 хвилин до розв’язок біля столиці. Евакуація від 250 zł (до 15 км).",
      "h2help": "Цілодобова допомога на A2",
      "helpIntro": "На A2 повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      "bullets": [
        "Евакуація з аварійної смуги / узбіччя A2 — авто, фургони, мото, скутери",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер)",
        "Заміна колеса, відкриття авто, виїзд до найближчої розв’язки",
        "Тел. 506-001-057 — UA / PL / RU / EN, 24/7"
      ],
      "closing": "INNSER — евакуатор і лафета на A2 біля Варшави. Швидкий приїзд, чесна ціна, чотири мови."
    }
  },
  "s2": {
    "pl": {
      "lead": "Pomoc drogowa na S2 — laweta Warszawa i holowanie na trasie S2 (Południowa Obwodnica) 24/7 z INNSER. Często holujemy auta, busy, motocykle i skutery przy węzłach Puławska, Wilanów, Marynarska, Konotopa, Opacz. Awaria, kolizja, rozładowany akumulator — przyjedziemy lawetą na pas awaryjny lub pobocze. Korytarz: południowa obwodnica stolicy (łącznik A2 / S8 / S7).",
      "whyTitle": "Dlaczego INNSER na trasie S2?",
      "blocks": [
        {
          "title": "Węzły i odcinki S2 przy Warszawie",
          "text": "Znamy dojazd do S2 od strony stolicy: Puławska, Wilanów, Marynarska, Konotopa, Opacz. Holowanie z pasa awaryjnego / pobocza wykonujemy szybko i bezpiecznie . Obszar: Południowa Obwodnica Warszawy, węzły Puławska, Wilanów i Konotopa."
        },
        {
          "title": "Kolizje, awarie i transport do warsztatu",
          "text": "Po kolizji na S2 zabezpieczamy pojazd i holujemy do warsztatu w Warszawie lub dalej w Polsce (do 500 km). Cenę podajemy z góry przez telefon — bez ukrytych dopłat."
        },
        {
          "title": "Motocykle, skutery i busy",
          "text": "Na S2 często pomagamy też kierowcom motocykli, skuterów i dostawczakom — transport motocykla / skutera lawetą oraz holowanie vanów."
        }
      ],
      "h2transport": "Laweta S2 — holowanie na trasie 24h",
      "transport": "Potrzebujesz lawety na S2? INNSER — pomoc drogowa Warszawa i okolice, dojazd zwykle 20–40 minut do węzłów przy stolicy. Holowanie od 250 zł (do 15 km), wycena telefoniczna. Transport auta z S2 do serwisu lub parkingu.",
      "h2help": "Całodobowa pomoc drogowa na S2",
      "helpIntro": "Na S2 oferujemy pełen zakres — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      "bullets": [
        "Holowanie z pasa awaryjnego / pobocza S2 — auta, busy, motocykle, skutery",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster)",
        "Wymiana koła, otwieranie auta, dojazd do najbliższego węzła",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — laweta i pomoc drogowa na S2 przy Warszawie. Szybki dojazd, uczciwa wycena, obsługa w czterech językach."
    },
    "en": {
      "lead": "Towing and breakdown assistance on S2 — tow truck Warsaw 24/7 with INNSER on S2 (Southern Ring Road). We frequently recover cars, vans, motorcycles and scooters near Puławska, Wilanów, Marynarska, Konotopa, Opacz. Crash, breakdown or flat battery — we bring a flatbed to the hard shoulder. Corridor: southern ring around the capital (A2 / S8 / S7 link).",
      "whyTitle": "Why choose INNSER on S2?",
      "blocks": [
        {
          "title": "S2 junctions near Warsaw",
          "text": "We know access to S2 from the capital side: Puławska, Wilanów, Marynarska, Konotopa, Opacz. Hard-shoulder / roadside recovery is done quickly and safely — we know Warsaw Southern Ring Road, Puławska, Wilanów and Konotopa junctions."
        },
        {
          "title": "Crashes, breakdowns and workshop transport",
          "text": "After a collision on S2 we secure the vehicle and tow it to a workshop in Warsaw or further across Poland (up to 500 km). Price quoted upfront by phone."
        },
        {
          "title": "Motorcycles, scooters and vans",
          "text": "On S2 we also help motorcycle and scooter riders and delivery vans — flatbed transport included."
        }
      ],
      "h2transport": "Tow truck S2 — roadside recovery 24/7",
      "transport": "Need a tow truck on S2? INNSER — roadside assistance Warsaw area, usually 20–40 minutes to junctions near the capital. Towing from 250 PLN (up to 15 km).",
      "h2help": "24/7 roadside assistance on S2",
      "helpIntro": "On S2 we offer a full package — we speak Polish, English, Russian and Ukrainian:",
      "bullets": [
        "Hard-shoulder / roadside towing on S2 — cars, vans, motorcycles, scooters",
        "Jump start for a dead battery (cables / booster)",
        "Tyre change, car lockout, transfer to the nearest junction",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — towing and breakdown assistance on S2 near Warsaw. Fast arrival, honest pricing, four languages."
    },
    "ru": {
      "lead": "Эвакуатор на S2 — лавета Варшава и помощь на трассе S2 (Южная Окружная) 24/7 от INNSER. Часто эвакуируем авто, фургоны, мотоциклы и скутеры у развязок Puławska, Wilanów, Marynarska, Konotopa, Opacz. ДТП, поломка, разряженный аккумулятор — приедем на аварийную полосу или обочину. Коридор: южная окружная столицы (связка A2 / S8 / S7).",
      "whyTitle": "Почему INNSER на трассе S2?",
      "blocks": [
        {
          "title": "Развязки и участки S2 у Варшавы",
          "text": "Знаем подъезды к S2 со стороны столицы: Puławska, Wilanów, Marynarska, Konotopa, Opacz. Эвакуация с аварийной полосы / обочины — быстро и безопасно. Знаем Южная окружная Варшавы, развязки Puławska, Wilanów и Konotopa."
        },
        {
          "title": "ДТП, поломки и доставка в сервис",
          "text": "После аварии на S2 фиксируем авто и везём в сервис в Варшаве или дальше по Польше (до 500 км). Цену называем заранее по телефону."
        },
        {
          "title": "Мотоциклы, скутеры и фургоны",
          "text": "На S2 часто помогаем мотоциклистам, водителям скутеров и курьерам — перевозка мото / скутера на лавете."
        }
      ],
      "h2transport": "Лавета S2 — эвакуатор на трассе 24/7",
      "transport": "Нужен эвакуатор на S2? INNSER — лавета в Варшаве и окрестностях, обычно 20–40 минут до развязок у столицы. Эвакуация от 250 zł (до 15 км).",
      "h2help": "Круглосуточная помощь на S2",
      "helpIntro": "На S2 полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      "bullets": [
        "Эвакуация с аварийной полосы / обочины S2 — авто, фургоны, мото, скутеры",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер)",
        "Замена колеса, открытие авто, выезд к ближайшей развязке",
        "Тел. 506-001-057 — RU / PL / EN / UA, 24/7"
      ],
      "closing": "INNSER — эвакуатор и лавета на S2 у Варшавы. Быстрый приезд, честная цена, четыре языка."
    },
    "ua": {
      "lead": "Евакуатор на S2 — лафета Варшава та допомога на трасі S2 (Південна Об’їзна) 24/7 від INNSER. Часто евакуюємо авто, фургони, мотоцикли та скутери біля розв’язок Puławska, Wilanów, Marynarska, Konotopa, Opacz. ДТП, поломка, розряджений акумулятор — приїдемо на аварійну смугу або узбіччя. Коридор: південна об’їзна столиці (зв’язка A2 / S8 / S7).",
      "whyTitle": "Чому INNSER на трасі S2?",
      "blocks": [
        {
          "title": "Розв’язки та ділянки S2 біля Варшави",
          "text": "Знаємо під’їзди до S2 з боку столиці: Puławska, Wilanów, Marynarska, Konotopa, Opacz. Евакуація з аварійної смуги / узбіччя — швидко й безпечно. Знаємо Південна об’їзна Варшави, розв’язки Puławska, Wilanów і Konotopa."
        },
        {
          "title": "ДТП, поломки та доставка в сервіс",
          "text": "Після аварії на S2 фіксуємо авто і веземо в сервіс у Варшаві або далі Польщею (до 500 км). Ціну називаємо наперед телефоном."
        },
        {
          "title": "Мотоцикли, скутери та фургони",
          "text": "На S2 часто допомагаємо мотоциклістам, водіям скутерів і кур’єрам — перевезення мото / скутера на лафеті."
        }
      ],
      "h2transport": "Лафета S2 — евакуатор на трасі 24/7",
      "transport": "Потрібен евакуатор на S2? INNSER — лафета у Варшаві та околицях, зазвичай 20–40 хвилин до розв’язок біля столиці. Евакуація від 250 zł (до 15 км).",
      "h2help": "Цілодобова допомога на S2",
      "helpIntro": "На S2 повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      "bullets": [
        "Евакуація з аварійної смуги / узбіччя S2 — авто, фургони, мото, скутери",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер)",
        "Заміна колеса, відкриття авто, виїзд до найближчої розв’язки",
        "Тел. 506-001-057 — UA / PL / RU / EN, 24/7"
      ],
      "closing": "INNSER — евакуатор і лафета на S2 біля Варшави. Швидкий приїзд, чесна ціна, чотири мови."
    }
  },
  "s7": {
    "pl": {
      "lead": "Pomoc drogowa na S7 — laweta Warszawa i holowanie na trasie S7 (Warszawa–Gdańsk) 24/7 z INNSER. Często holujemy auta, busy, motocykle i skutery przy węzłach Czosnów, Modlin, Lesznowola, Grójec (kier. Kraków). Awaria, kolizja, rozładowany akumulator — przyjedziemy lawetą na pas awaryjny lub pobocze. Korytarz: Warszawa–Gdańsk / Warszawa–Kraków.",
      "whyTitle": "Dlaczego INNSER na trasie S7?",
      "blocks": [
        {
          "title": "Węzły i odcinki S7 przy Warszawie",
          "text": "Znamy dojazd do S7 od strony stolicy: Czosnów, Modlin, Lesznowola, Grójec (kier. Kraków). Holowanie z pasa awaryjnego / pobocza wykonujemy szybko i bezpiecznie . Obszar: droga ekspresowa S7, kierunek Gdańsk / Kraków, węzły Czosnów i Modlin."
        },
        {
          "title": "Kolizje, awarie i transport do warsztatu",
          "text": "Po kolizji na S7 zabezpieczamy pojazd i holujemy do warsztatu w Warszawie lub dalej w Polsce (do 500 km). Cenę podajemy z góry przez telefon — bez ukrytych dopłat."
        },
        {
          "title": "Motocykle, skutery i busy",
          "text": "Na S7 często pomagamy też kierowcom motocykli, skuterów i dostawczakom — transport motocykla / skutera lawetą oraz holowanie vanów."
        }
      ],
      "h2transport": "Laweta S7 — holowanie na trasie 24h",
      "transport": "Potrzebujesz lawety na S7? INNSER — pomoc drogowa Warszawa i okolice, dojazd zwykle 20–40 minut do węzłów przy stolicy. Holowanie od 250 zł (do 15 km), wycena telefoniczna. Transport auta z S7 do serwisu lub parkingu.",
      "h2help": "Całodobowa pomoc drogowa na S7",
      "helpIntro": "Na S7 oferujemy pełen zakres — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      "bullets": [
        "Holowanie z pasa awaryjnego / pobocza S7 — auta, busy, motocykle, skutery",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster)",
        "Wymiana koła, otwieranie auta, dojazd do najbliższego węzła",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — laweta i pomoc drogowa na S7 przy Warszawie. Szybki dojazd, uczciwa wycena, obsługa w czterech językach."
    },
    "en": {
      "lead": "Towing and breakdown assistance on S7 — tow truck Warsaw 24/7 with INNSER on S7 (Warsaw–Gdańsk). We frequently recover cars, vans, motorcycles and scooters near Czosnów, Modlin, Lesznowola, Grójec (Kraków direction). Crash, breakdown or flat battery — we bring a flatbed to the hard shoulder. Corridor: Warsaw–Gdańsk / Warsaw–Kraków.",
      "whyTitle": "Why choose INNSER on S7?",
      "blocks": [
        {
          "title": "S7 junctions near Warsaw",
          "text": "We know access to S7 from the capital side: Czosnów, Modlin, Lesznowola, Grójec (Kraków direction). Hard-shoulder / roadside recovery is done quickly and safely — we know S7 expressway towards Gdańsk / Kraków, Czosnów and Modlin junctions."
        },
        {
          "title": "Crashes, breakdowns and workshop transport",
          "text": "After a collision on S7 we secure the vehicle and tow it to a workshop in Warsaw or further across Poland (up to 500 km). Price quoted upfront by phone."
        },
        {
          "title": "Motorcycles, scooters and vans",
          "text": "On S7 we also help motorcycle and scooter riders and delivery vans — flatbed transport included."
        }
      ],
      "h2transport": "Tow truck S7 — roadside recovery 24/7",
      "transport": "Need a tow truck on S7? INNSER — roadside assistance Warsaw area, usually 20–40 minutes to junctions near the capital. Towing from 250 PLN (up to 15 km).",
      "h2help": "24/7 roadside assistance on S7",
      "helpIntro": "On S7 we offer a full package — we speak Polish, English, Russian and Ukrainian:",
      "bullets": [
        "Hard-shoulder / roadside towing on S7 — cars, vans, motorcycles, scooters",
        "Jump start for a dead battery (cables / booster)",
        "Tyre change, car lockout, transfer to the nearest junction",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — towing and breakdown assistance on S7 near Warsaw. Fast arrival, honest pricing, four languages."
    },
    "ru": {
      "lead": "Эвакуатор на S7 — лавета Варшава и помощь на трассе S7 (Варшава–Гданьск) 24/7 от INNSER. Часто эвакуируем авто, фургоны, мотоциклы и скутеры у развязок Czosnów, Modlin, Lesznowola, Grójec (направление Краков). ДТП, поломка, разряженный аккумулятор — приедем на аварийную полосу или обочину. Коридор: Варшава–Гданьск / Варшава–Краков.",
      "whyTitle": "Почему INNSER на трассе S7?",
      "blocks": [
        {
          "title": "Развязки и участки S7 у Варшавы",
          "text": "Знаем подъезды к S7 со стороны столицы: Czosnów, Modlin, Lesznowola, Grójec (направление Краков). Эвакуация с аварийной полосы / обочины — быстро и безопасно. Знаем скоростная S7 на Гданьск / Краков, развязки Czosnów и Modlin."
        },
        {
          "title": "ДТП, поломки и доставка в сервис",
          "text": "После аварии на S7 фиксируем авто и везём в сервис в Варшаве или дальше по Польше (до 500 км). Цену называем заранее по телефону."
        },
        {
          "title": "Мотоциклы, скутеры и фургоны",
          "text": "На S7 часто помогаем мотоциклистам, водителям скутеров и курьерам — перевозка мото / скутера на лавете."
        }
      ],
      "h2transport": "Лавета S7 — эвакуатор на трассе 24/7",
      "transport": "Нужен эвакуатор на S7? INNSER — лавета в Варшаве и окрестностях, обычно 20–40 минут до развязок у столицы. Эвакуация от 250 zł (до 15 км).",
      "h2help": "Круглосуточная помощь на S7",
      "helpIntro": "На S7 полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      "bullets": [
        "Эвакуация с аварийной полосы / обочины S7 — авто, фургоны, мото, скутеры",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер)",
        "Замена колеса, открытие авто, выезд к ближайшей развязке",
        "Тел. 506-001-057 — RU / PL / EN / UA, 24/7"
      ],
      "closing": "INNSER — эвакуатор и лавета на S7 у Варшавы. Быстрый приезд, честная цена, четыре языка."
    },
    "ua": {
      "lead": "Евакуатор на S7 — лафета Варшава та допомога на трасі S7 (Варшава–Гданськ) 24/7 від INNSER. Часто евакуюємо авто, фургони, мотоцикли та скутери біля розв’язок Czosnów, Modlin, Lesznowola, Grójec (напрямок Краків). ДТП, поломка, розряджений акумулятор — приїдемо на аварійну смугу або узбіччя. Коридор: Варшава–Гданськ / Варшава–Краків.",
      "whyTitle": "Чому INNSER на трасі S7?",
      "blocks": [
        {
          "title": "Розв’язки та ділянки S7 біля Варшави",
          "text": "Знаємо під’їзди до S7 з боку столиці: Czosnów, Modlin, Lesznowola, Grójec (напрямок Краків). Евакуація з аварійної смуги / узбіччя — швидко й безпечно. Знаємо швидкісна S7 на Гданськ / Краків, розв’язки Czosnów і Modlin."
        },
        {
          "title": "ДТП, поломки та доставка в сервіс",
          "text": "Після аварії на S7 фіксуємо авто і веземо в сервіс у Варшаві або далі Польщею (до 500 км). Ціну називаємо наперед телефоном."
        },
        {
          "title": "Мотоцикли, скутери та фургони",
          "text": "На S7 часто допомагаємо мотоциклістам, водіям скутерів і кур’єрам — перевезення мото / скутера на лафеті."
        }
      ],
      "h2transport": "Лафета S7 — евакуатор на трасі 24/7",
      "transport": "Потрібен евакуатор на S7? INNSER — лафета у Варшаві та околицях, зазвичай 20–40 хвилин до розв’язок біля столиці. Евакуація від 250 zł (до 15 км).",
      "h2help": "Цілодобова допомога на S7",
      "helpIntro": "На S7 повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      "bullets": [
        "Евакуація з аварійної смуги / узбіччя S7 — авто, фургони, мото, скутери",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер)",
        "Заміна колеса, відкриття авто, виїзд до найближчої розв’язки",
        "Тел. 506-001-057 — UA / PL / RU / EN, 24/7"
      ],
      "closing": "INNSER — евакуатор і лафета на S7 біля Варшави. Швидкий приїзд, чесна ціна, чотири мови."
    }
  },
  "s8": {
    "pl": {
      "lead": "Pomoc drogowa na S8 — laweta Warszawa i holowanie na trasie S8 (Warszawa–Wrocław) 24/7 z INNSER. Często holujemy auta, busy, motocykle i skutery przy węzłach Konotopa, Prymasa Tysiąclecia, Modlińska, Marki, Radzymin. Awaria, kolizja, rozładowany akumulator — przyjedziemy lawetą na pas awaryjny lub pobocze. Korytarz: Warszawa–Wrocław / Warszawa–Białystok.",
      "whyTitle": "Dlaczego INNSER na trasie S8?",
      "blocks": [
        {
          "title": "Węzły i odcinki S8 przy Warszawie",
          "text": "Znamy dojazd do S8 od strony stolicy: Konotopa, Prymasa Tysiąclecia, Modlińska, Marki, Radzymin. Holowanie z pasa awaryjnego / pobocza wykonujemy szybko i bezpiecznie . Obszar: droga ekspresowa S8, Trasa Armii Krajowej, kierunek Wrocław / Białystok."
        },
        {
          "title": "Kolizje, awarie i transport do warsztatu",
          "text": "Po kolizji na S8 zabezpieczamy pojazd i holujemy do warsztatu w Warszawie lub dalej w Polsce (do 500 km). Cenę podajemy z góry przez telefon — bez ukrytych dopłat."
        },
        {
          "title": "Motocykle, skutery i busy",
          "text": "Na S8 często pomagamy też kierowcom motocykli, skuterów i dostawczakom — transport motocykla / skutera lawetą oraz holowanie vanów."
        }
      ],
      "h2transport": "Laweta S8 — holowanie na trasie 24h",
      "transport": "Potrzebujesz lawety na S8? INNSER — pomoc drogowa Warszawa i okolice, dojazd zwykle 20–40 minut do węzłów przy stolicy. Holowanie od 250 zł (do 15 km), wycena telefoniczna. Transport auta z S8 do serwisu lub parkingu.",
      "h2help": "Całodobowa pomoc drogowa na S8",
      "helpIntro": "Na S8 oferujemy pełen zakres — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      "bullets": [
        "Holowanie z pasa awaryjnego / pobocza S8 — auta, busy, motocykle, skutery",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster)",
        "Wymiana koła, otwieranie auta, dojazd do najbliższego węzła",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — laweta i pomoc drogowa na S8 przy Warszawie. Szybki dojazd, uczciwa wycena, obsługa w czterech językach."
    },
    "en": {
      "lead": "Towing and breakdown assistance on S8 — tow truck Warsaw 24/7 with INNSER on S8 (Warsaw–Wrocław). We frequently recover cars, vans, motorcycles and scooters near Konotopa, Prymasa Tysiąclecia, Modlińska, Marki, Radzymin. Crash, breakdown or flat battery — we bring a flatbed to the hard shoulder. Corridor: Warsaw–Wrocław / Warsaw–Białystok.",
      "whyTitle": "Why choose INNSER on S8?",
      "blocks": [
        {
          "title": "S8 junctions near Warsaw",
          "text": "We know access to S8 from the capital side: Konotopa, Prymasa Tysiąclecia, Modlińska, Marki, Radzymin. Hard-shoulder / roadside recovery is done quickly and safely — we know S8 expressway, Armii Krajowej route, towards Wrocław / Białystok."
        },
        {
          "title": "Crashes, breakdowns and workshop transport",
          "text": "After a collision on S8 we secure the vehicle and tow it to a workshop in Warsaw or further across Poland (up to 500 km). Price quoted upfront by phone."
        },
        {
          "title": "Motorcycles, scooters and vans",
          "text": "On S8 we also help motorcycle and scooter riders and delivery vans — flatbed transport included."
        }
      ],
      "h2transport": "Tow truck S8 — roadside recovery 24/7",
      "transport": "Need a tow truck on S8? INNSER — roadside assistance Warsaw area, usually 20–40 minutes to junctions near the capital. Towing from 250 PLN (up to 15 km).",
      "h2help": "24/7 roadside assistance on S8",
      "helpIntro": "On S8 we offer a full package — we speak Polish, English, Russian and Ukrainian:",
      "bullets": [
        "Hard-shoulder / roadside towing on S8 — cars, vans, motorcycles, scooters",
        "Jump start for a dead battery (cables / booster)",
        "Tyre change, car lockout, transfer to the nearest junction",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — towing and breakdown assistance on S8 near Warsaw. Fast arrival, honest pricing, four languages."
    },
    "ru": {
      "lead": "Эвакуатор на S8 — лавета Варшава и помощь на трассе S8 (Варшава–Вроцлав) 24/7 от INNSER. Часто эвакуируем авто, фургоны, мотоциклы и скутеры у развязок Konotopa, Prymasa Tysiąclecia, Modlińska, Marki, Radzymin. ДТП, поломка, разряженный аккумулятор — приедем на аварийную полосу или обочину. Коридор: Варшава–Вроцлав / Варшава–Белосток.",
      "whyTitle": "Почему INNSER на трассе S8?",
      "blocks": [
        {
          "title": "Развязки и участки S8 у Варшавы",
          "text": "Знаем подъезды к S8 со стороны столицы: Konotopa, Prymasa Tysiąclecia, Modlińska, Marki, Radzymin. Эвакуация с аварийной полосы / обочины — быстро и безопасно. Знаем скоростная S8, трасса Armii Krajowej, направление Вроцлав / Белосток."
        },
        {
          "title": "ДТП, поломки и доставка в сервис",
          "text": "После аварии на S8 фиксируем авто и везём в сервис в Варшаве или дальше по Польше (до 500 км). Цену называем заранее по телефону."
        },
        {
          "title": "Мотоциклы, скутеры и фургоны",
          "text": "На S8 часто помогаем мотоциклистам, водителям скутеров и курьерам — перевозка мото / скутера на лавете."
        }
      ],
      "h2transport": "Лавета S8 — эвакуатор на трассе 24/7",
      "transport": "Нужен эвакуатор на S8? INNSER — лавета в Варшаве и окрестностях, обычно 20–40 минут до развязок у столицы. Эвакуация от 250 zł (до 15 км).",
      "h2help": "Круглосуточная помощь на S8",
      "helpIntro": "На S8 полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      "bullets": [
        "Эвакуация с аварийной полосы / обочины S8 — авто, фургоны, мото, скутеры",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер)",
        "Замена колеса, открытие авто, выезд к ближайшей развязке",
        "Тел. 506-001-057 — RU / PL / EN / UA, 24/7"
      ],
      "closing": "INNSER — эвакуатор и лавета на S8 у Варшавы. Быстрый приезд, честная цена, четыре языка."
    },
    "ua": {
      "lead": "Евакуатор на S8 — лафета Варшава та допомога на трасі S8 (Варшава–Вроцлав) 24/7 від INNSER. Часто евакуюємо авто, фургони, мотоцикли та скутери біля розв’язок Konotopa, Prymasa Tysiąclecia, Modlińska, Marki, Radzymin. ДТП, поломка, розряджений акумулятор — приїдемо на аварійну смугу або узбіччя. Коридор: Варшава–Вроцлав / Варшава–Білосток.",
      "whyTitle": "Чому INNSER на трасі S8?",
      "blocks": [
        {
          "title": "Розв’язки та ділянки S8 біля Варшави",
          "text": "Знаємо під’їзди до S8 з боку столиці: Konotopa, Prymasa Tysiąclecia, Modlińska, Marki, Radzymin. Евакуація з аварійної смуги / узбіччя — швидко й безпечно. Знаємо швидкісна S8, траса Armii Krajowej, напрямок Вроцлав / Білосток."
        },
        {
          "title": "ДТП, поломки та доставка в сервіс",
          "text": "Після аварії на S8 фіксуємо авто і веземо в сервіс у Варшаві або далі Польщею (до 500 км). Ціну називаємо наперед телефоном."
        },
        {
          "title": "Мотоцикли, скутери та фургони",
          "text": "На S8 часто допомагаємо мотоциклістам, водіям скутерів і кур’єрам — перевезення мото / скутера на лафеті."
        }
      ],
      "h2transport": "Лафета S8 — евакуатор на трасі 24/7",
      "transport": "Потрібен евакуатор на S8? INNSER — лафета у Варшаві та околицях, зазвичай 20–40 хвилин до розв’язок біля столиці. Евакуація від 250 zł (до 15 км).",
      "h2help": "Цілодобова допомога на S8",
      "helpIntro": "На S8 повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      "bullets": [
        "Евакуація з аварійної смуги / узбіччя S8 — авто, фургони, мото, скутери",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер)",
        "Заміна колеса, відкриття авто, виїзд до найближчої розв’язки",
        "Тел. 506-001-057 — UA / PL / RU / EN, 24/7"
      ],
      "closing": "INNSER — евакуатор і лафета на S8 біля Варшави. Швидкий приїзд, чесна ціна, чотири мови."
    }
  },
  "s17": {
    "pl": {
      "lead": "Pomoc drogowa na S17 — laweta Warszawa i holowanie na trasie S17 (Warszawa–Lublin) 24/7 z INNSER. Często holujemy auta, busy, motocykle i skutery przy węzłach Zakręt, Wawer, Otwock, Garwolin (kier. Lublin). Awaria, kolizja, rozładowany akumulator — przyjedziemy lawetą na pas awaryjny lub pobocze. Korytarz: Warszawa–Lublin.",
      "whyTitle": "Dlaczego INNSER na trasie S17?",
      "blocks": [
        {
          "title": "Węzły i odcinki S17 przy Warszawie",
          "text": "Znamy dojazd do S17 od strony stolicy: Zakręt, Wawer, Otwock, Garwolin (kier. Lublin). Holowanie z pasa awaryjnego / pobocza wykonujemy szybko i bezpiecznie . Obszar: droga ekspresowa S17 w stronę Lublina, Wawer i Otwock."
        },
        {
          "title": "Kolizje, awarie i transport do warsztatu",
          "text": "Po kolizji na S17 zabezpieczamy pojazd i holujemy do warsztatu w Warszawie lub dalej w Polsce (do 500 km). Cenę podajemy z góry przez telefon — bez ukrytych dopłat."
        },
        {
          "title": "Motocykle, skutery i busy",
          "text": "Na S17 często pomagamy też kierowcom motocykli, skuterów i dostawczakom — transport motocykla / skutera lawetą oraz holowanie vanów."
        }
      ],
      "h2transport": "Laweta S17 — holowanie na trasie 24h",
      "transport": "Potrzebujesz lawety na S17? INNSER — pomoc drogowa Warszawa i okolice, dojazd zwykle 20–40 minut do węzłów przy stolicy. Holowanie od 250 zł (do 15 km), wycena telefoniczna. Transport auta z S17 do serwisu lub parkingu.",
      "h2help": "Całodobowa pomoc drogowa na S17",
      "helpIntro": "Na S17 oferujemy pełen zakres — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      "bullets": [
        "Holowanie z pasa awaryjnego / pobocza S17 — auta, busy, motocykle, skutery",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster)",
        "Wymiana koła, otwieranie auta, dojazd do najbliższego węzła",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — laweta i pomoc drogowa na S17 przy Warszawie. Szybki dojazd, uczciwa wycena, obsługa w czterech językach."
    },
    "en": {
      "lead": "Towing and breakdown assistance on S17 — tow truck Warsaw 24/7 with INNSER on S17 (Warsaw–Lublin). We frequently recover cars, vans, motorcycles and scooters near Zakręt, Wawer, Otwock, Garwolin (Lublin direction). Crash, breakdown or flat battery — we bring a flatbed to the hard shoulder. Corridor: Warsaw–Lublin.",
      "whyTitle": "Why choose INNSER on S17?",
      "blocks": [
        {
          "title": "S17 junctions near Warsaw",
          "text": "We know access to S17 from the capital side: Zakręt, Wawer, Otwock, Garwolin (Lublin direction). Hard-shoulder / roadside recovery is done quickly and safely — we know S17 expressway towards Lublin, Wawer and Otwock corridor."
        },
        {
          "title": "Crashes, breakdowns and workshop transport",
          "text": "After a collision on S17 we secure the vehicle and tow it to a workshop in Warsaw or further across Poland (up to 500 km). Price quoted upfront by phone."
        },
        {
          "title": "Motorcycles, scooters and vans",
          "text": "On S17 we also help motorcycle and scooter riders and delivery vans — flatbed transport included."
        }
      ],
      "h2transport": "Tow truck S17 — roadside recovery 24/7",
      "transport": "Need a tow truck on S17? INNSER — roadside assistance Warsaw area, usually 20–40 minutes to junctions near the capital. Towing from 250 PLN (up to 15 km).",
      "h2help": "24/7 roadside assistance on S17",
      "helpIntro": "On S17 we offer a full package — we speak Polish, English, Russian and Ukrainian:",
      "bullets": [
        "Hard-shoulder / roadside towing on S17 — cars, vans, motorcycles, scooters",
        "Jump start for a dead battery (cables / booster)",
        "Tyre change, car lockout, transfer to the nearest junction",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — towing and breakdown assistance on S17 near Warsaw. Fast arrival, honest pricing, four languages."
    },
    "ru": {
      "lead": "Эвакуатор на S17 — лавета Варшава и помощь на трассе S17 (Варшава–Люблин) 24/7 от INNSER. Часто эвакуируем авто, фургоны, мотоциклы и скутеры у развязок Zakręt, Wawer, Otwock, Garwolin (направление Люблин). ДТП, поломка, разряженный аккумулятор — приедем на аварийную полосу или обочину. Коридор: Варшава–Люблин.",
      "whyTitle": "Почему INNSER на трассе S17?",
      "blocks": [
        {
          "title": "Развязки и участки S17 у Варшавы",
          "text": "Знаем подъезды к S17 со стороны столицы: Zakręt, Wawer, Otwock, Garwolin (направление Люблин). Эвакуация с аварийной полосы / обочины — быстро и безопасно. Знаем скоростная S17 на Люблин, коридор Wawer и Otwock."
        },
        {
          "title": "ДТП, поломки и доставка в сервис",
          "text": "После аварии на S17 фиксируем авто и везём в сервис в Варшаве или дальше по Польше (до 500 км). Цену называем заранее по телефону."
        },
        {
          "title": "Мотоциклы, скутеры и фургоны",
          "text": "На S17 часто помогаем мотоциклистам, водителям скутеров и курьерам — перевозка мото / скутера на лавете."
        }
      ],
      "h2transport": "Лавета S17 — эвакуатор на трассе 24/7",
      "transport": "Нужен эвакуатор на S17? INNSER — лавета в Варшаве и окрестностях, обычно 20–40 минут до развязок у столицы. Эвакуация от 250 zł (до 15 км).",
      "h2help": "Круглосуточная помощь на S17",
      "helpIntro": "На S17 полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      "bullets": [
        "Эвакуация с аварийной полосы / обочины S17 — авто, фургоны, мото, скутеры",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер)",
        "Замена колеса, открытие авто, выезд к ближайшей развязке",
        "Тел. 506-001-057 — RU / PL / EN / UA, 24/7"
      ],
      "closing": "INNSER — эвакуатор и лавета на S17 у Варшавы. Быстрый приезд, честная цена, четыре языка."
    },
    "ua": {
      "lead": "Евакуатор на S17 — лафета Варшава та допомога на трасі S17 (Варшава–Люблін) 24/7 від INNSER. Часто евакуюємо авто, фургони, мотоцикли та скутери біля розв’язок Zakręt, Wawer, Otwock, Garwolin (напрямок Люблін). ДТП, поломка, розряджений акумулятор — приїдемо на аварійну смугу або узбіччя. Коридор: Варшава–Люблін.",
      "whyTitle": "Чому INNSER на трасі S17?",
      "blocks": [
        {
          "title": "Розв’язки та ділянки S17 біля Варшави",
          "text": "Знаємо під’їзди до S17 з боку столиці: Zakręt, Wawer, Otwock, Garwolin (напрямок Люблін). Евакуація з аварійної смуги / узбіччя — швидко й безпечно. Знаємо швидкісна S17 на Люблін, коридор Wawer і Otwock."
        },
        {
          "title": "ДТП, поломки та доставка в сервіс",
          "text": "Після аварії на S17 фіксуємо авто і веземо в сервіс у Варшаві або далі Польщею (до 500 км). Ціну називаємо наперед телефоном."
        },
        {
          "title": "Мотоцикли, скутери та фургони",
          "text": "На S17 часто допомагаємо мотоциклістам, водіям скутерів і кур’єрам — перевезення мото / скутера на лафеті."
        }
      ],
      "h2transport": "Лафета S17 — евакуатор на трасі 24/7",
      "transport": "Потрібен евакуатор на S17? INNSER — лафета у Варшаві та околицях, зазвичай 20–40 хвилин до розв’язок біля столиці. Евакуація від 250 zł (до 15 км).",
      "h2help": "Цілодобова допомога на S17",
      "helpIntro": "На S17 повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      "bullets": [
        "Евакуація з аварійної смуги / узбіччя S17 — авто, фургони, мото, скутери",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер)",
        "Заміна колеса, відкриття авто, виїзд до найближчої розв’язки",
        "Тел. 506-001-057 — UA / PL / RU / EN, 24/7"
      ],
      "closing": "INNSER — евакуатор і лафета на S17 біля Варшави. Швидкий приїзд, чесна ціна, чотири мови."
    }
  },
  "s79": {
    "pl": {
      "lead": "Pomoc drogowa na S79 — laweta Warszawa i holowanie na trasie S79 24/7 z INNSER. Często holujemy auta, busy, motocykle i skutery przy węzłach Marynarska, Salomea, Okęcie, węzeł z S2. Awaria, kolizja, rozładowany akumulator — przyjedziemy lawetą na pas awaryjny lub pobocze. Korytarz: łącznik lotnisko Chopina – S2 / centrum.",
      "whyTitle": "Dlaczego INNSER na trasie S79?",
      "blocks": [
        {
          "title": "Węzły i odcinki S79 przy Warszawie",
          "text": "Znamy dojazd do S79 od strony stolicy: Marynarska, Salomea, Okęcie, węzeł z S2. Holowanie z pasa awaryjnego / pobocza wykonujemy szybko i bezpiecznie . Obszar: S79 przy lotnisku Okęcie / Chopina, Marynarska i Salomea."
        },
        {
          "title": "Kolizje, awarie i transport do warsztatu",
          "text": "Po kolizji na S79 zabezpieczamy pojazd i holujemy do warsztatu w Warszawie lub dalej w Polsce (do 500 km). Cenę podajemy z góry przez telefon — bez ukrytych dopłat."
        },
        {
          "title": "Motocykle, skutery i busy",
          "text": "Na S79 często pomagamy też kierowcom motocykli, skuterów i dostawczakom — transport motocykla / skutera lawetą oraz holowanie vanów."
        }
      ],
      "h2transport": "Laweta S79 — holowanie na trasie 24h",
      "transport": "Potrzebujesz lawety na S79? INNSER — pomoc drogowa Warszawa i okolice, dojazd zwykle 20–40 minut do węzłów przy stolicy. Holowanie od 250 zł (do 15 km), wycena telefoniczna. Transport auta z S79 do serwisu lub parkingu.",
      "h2help": "Całodobowa pomoc drogowa na S79",
      "helpIntro": "Na S79 oferujemy pełen zakres — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      "bullets": [
        "Holowanie z pasa awaryjnego / pobocza S79 — auta, busy, motocykle, skutery",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster)",
        "Wymiana koła, otwieranie auta, dojazd do najbliższego węzła",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — laweta i pomoc drogowa na S79 przy Warszawie. Szybki dojazd, uczciwa wycena, obsługa w czterech językach."
    },
    "en": {
      "lead": "Towing and breakdown assistance on S79 — tow truck Warsaw 24/7 with INNSER on S79. We frequently recover cars, vans, motorcycles and scooters near Marynarska, Salomea, Okęcie, S2 junction. Crash, breakdown or flat battery — we bring a flatbed to the hard shoulder. Corridor: link Chopin Airport – S2 / city centre.",
      "whyTitle": "Why choose INNSER on S79?",
      "blocks": [
        {
          "title": "S79 junctions near Warsaw",
          "text": "We know access to S79 from the capital side: Marynarska, Salomea, Okęcie, S2 junction. Hard-shoulder / roadside recovery is done quickly and safely — we know S79 near Chopin Airport / Okęcie, Marynarska and Salomea."
        },
        {
          "title": "Crashes, breakdowns and workshop transport",
          "text": "After a collision on S79 we secure the vehicle and tow it to a workshop in Warsaw or further across Poland (up to 500 km). Price quoted upfront by phone."
        },
        {
          "title": "Motorcycles, scooters and vans",
          "text": "On S79 we also help motorcycle and scooter riders and delivery vans — flatbed transport included."
        }
      ],
      "h2transport": "Tow truck S79 — roadside recovery 24/7",
      "transport": "Need a tow truck on S79? INNSER — roadside assistance Warsaw area, usually 20–40 minutes to junctions near the capital. Towing from 250 PLN (up to 15 km).",
      "h2help": "24/7 roadside assistance on S79",
      "helpIntro": "On S79 we offer a full package — we speak Polish, English, Russian and Ukrainian:",
      "bullets": [
        "Hard-shoulder / roadside towing on S79 — cars, vans, motorcycles, scooters",
        "Jump start for a dead battery (cables / booster)",
        "Tyre change, car lockout, transfer to the nearest junction",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — towing and breakdown assistance on S79 near Warsaw. Fast arrival, honest pricing, four languages."
    },
    "ru": {
      "lead": "Эвакуатор на S79 — лавета Варшава и помощь на трассе S79 24/7 от INNSER. Часто эвакуируем авто, фургоны, мотоциклы и скутеры у развязок Marynarska, Salomea, Okęcie, развязка с S2. ДТП, поломка, разряженный аккумулятор — приедем на аварийную полосу или обочину. Коридор: связка аэропорт Шопена – S2 / центр.",
      "whyTitle": "Почему INNSER на трассе S79?",
      "blocks": [
        {
          "title": "Развязки и участки S79 у Варшавы",
          "text": "Знаем подъезды к S79 со стороны столицы: Marynarska, Salomea, Okęcie, развязка с S2. Эвакуация с аварийной полосы / обочины — быстро и безопасно. Знаем S79 у аэропорта Окенче / Шопена, Marynarska и Salomea."
        },
        {
          "title": "ДТП, поломки и доставка в сервис",
          "text": "После аварии на S79 фиксируем авто и везём в сервис в Варшаве или дальше по Польше (до 500 км). Цену называем заранее по телефону."
        },
        {
          "title": "Мотоциклы, скутеры и фургоны",
          "text": "На S79 часто помогаем мотоциклистам, водителям скутеров и курьерам — перевозка мото / скутера на лавете."
        }
      ],
      "h2transport": "Лавета S79 — эвакуатор на трассе 24/7",
      "transport": "Нужен эвакуатор на S79? INNSER — лавета в Варшаве и окрестностях, обычно 20–40 минут до развязок у столицы. Эвакуация от 250 zł (до 15 км).",
      "h2help": "Круглосуточная помощь на S79",
      "helpIntro": "На S79 полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      "bullets": [
        "Эвакуация с аварийной полосы / обочины S79 — авто, фургоны, мото, скутеры",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер)",
        "Замена колеса, открытие авто, выезд к ближайшей развязке",
        "Тел. 506-001-057 — RU / PL / EN / UA, 24/7"
      ],
      "closing": "INNSER — эвакуатор и лавета на S79 у Варшавы. Быстрый приезд, честная цена, четыре языка."
    },
    "ua": {
      "lead": "Евакуатор на S79 — лафета Варшава та допомога на трасі S79 24/7 від INNSER. Часто евакуюємо авто, фургони, мотоцикли та скутери біля розв’язок Marynarska, Salomea, Okęcie, розв’язка з S2. ДТП, поломка, розряджений акумулятор — приїдемо на аварійну смугу або узбіччя. Коридор: зв’язка аеропорт Шопена – S2 / центр.",
      "whyTitle": "Чому INNSER на трасі S79?",
      "blocks": [
        {
          "title": "Розв’язки та ділянки S79 біля Варшави",
          "text": "Знаємо під’їзди до S79 з боку столиці: Marynarska, Salomea, Okęcie, розв’язка з S2. Евакуація з аварійної смуги / узбіччя — швидко й безпечно. Знаємо S79 біля аеропорту Окенче / Шопена, Marynarska і Salomea."
        },
        {
          "title": "ДТП, поломки та доставка в сервіс",
          "text": "Після аварії на S79 фіксуємо авто і веземо в сервіс у Варшаві або далі Польщею (до 500 км). Ціну називаємо наперед телефоном."
        },
        {
          "title": "Мотоцикли, скутери та фургони",
          "text": "На S79 часто допомагаємо мотоциклістам, водіям скутерів і кур’єрам — перевезення мото / скутера на лафеті."
        }
      ],
      "h2transport": "Лафета S79 — евакуатор на трасі 24/7",
      "transport": "Потрібен евакуатор на S79? INNSER — лафета у Варшаві та околицях, зазвичай 20–40 хвилин до розв’язок біля столиці. Евакуація від 250 zł (до 15 км).",
      "h2help": "Цілодобова допомога на S79",
      "helpIntro": "На S79 повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      "bullets": [
        "Евакуація з аварійної смуги / узбіччя S79 — авто, фургони, мото, скутери",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер)",
        "Заміна колеса, відкриття авто, виїзд до найближчої розв’язки",
        "Тел. 506-001-057 — UA / PL / RU / EN, 24/7"
      ],
      "closing": "INNSER — евакуатор і лафета на S79 біля Варшави. Швидкий приїзд, чесна ціна, чотири мови."
    }
  },
  "dk7": {
    "pl": {
      "lead": "Pomoc drogowa na DK7 — laweta Warszawa i holowanie na trasie DK7 24/7 z INNSER. Często holujemy auta, busy, motocykle i skutery przy węzłach Puławska / Krakowska, Lesznowola, Grójec; północ — Czosnów. Awaria, kolizja, rozładowany akumulator — przyjedziemy lawetą na pas awaryjny lub pobocze. Korytarz: Warszawa–Kraków / Warszawa–Gdańsk (odcinki DK).",
      "whyTitle": "Dlaczego INNSER na trasie DK7?",
      "blocks": [
        {
          "title": "Węzły i odcinki DK7 przy Warszawie",
          "text": "Znamy dojazd do DK7 od strony stolicy: Puławska / Krakowska, Lesznowola, Grójec; północ — Czosnów. Holowanie z pasa awaryjnego / pobocza wykonujemy szybko i bezpiecznie . Obszar: droga krajowa DK7 (Krakowska / Gdańska), miasta pod Warszawą."
        },
        {
          "title": "Kolizje, awarie i transport do warsztatu",
          "text": "Po kolizji na DK7 zabezpieczamy pojazd i holujemy do warsztatu w Warszawie lub dalej w Polsce (do 500 km). Cenę podajemy z góry przez telefon — bez ukrytych dopłat."
        },
        {
          "title": "Motocykle, skutery i busy",
          "text": "Na DK7 często pomagamy też kierowcom motocykli, skuterów i dostawczakom — transport motocykla / skutera lawetą oraz holowanie vanów."
        }
      ],
      "h2transport": "Laweta DK7 — holowanie na trasie 24h",
      "transport": "Potrzebujesz lawety na DK7? INNSER — pomoc drogowa Warszawa i okolice, dojazd zwykle 20–40 minut do węzłów przy stolicy. Holowanie od 250 zł (do 15 km), wycena telefoniczna. Transport auta z DK7 do serwisu lub parkingu.",
      "h2help": "Całodobowa pomoc drogowa na DK7",
      "helpIntro": "Na DK7 oferujemy pełen zakres — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      "bullets": [
        "Holowanie z pasa awaryjnego / pobocza DK7 — auta, busy, motocykle, skutery",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster)",
        "Wymiana koła, otwieranie auta, dojazd do najbliższego węzła",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — laweta i pomoc drogowa na DK7 przy Warszawie. Szybki dojazd, uczciwa wycena, obsługa w czterech językach."
    },
    "en": {
      "lead": "Towing and breakdown assistance on DK7 — tow truck Warsaw 24/7 with INNSER on DK7. We frequently recover cars, vans, motorcycles and scooters near Puławska / Krakowska, Lesznowola, Grójec; north — Czosnów. Crash, breakdown or flat battery — we bring a flatbed to the hard shoulder. Corridor: Warsaw–Kraków / Warsaw–Gdańsk (DK sections).",
      "whyTitle": "Why choose INNSER on DK7?",
      "blocks": [
        {
          "title": "DK7 junctions near Warsaw",
          "text": "We know access to DK7 from the capital side: Puławska / Krakowska, Lesznowola, Grójec; north — Czosnów. Hard-shoulder / roadside recovery is done quickly and safely — we know national road DK7 (Krakowska / Gdańska), towns near Warsaw."
        },
        {
          "title": "Crashes, breakdowns and workshop transport",
          "text": "After a collision on DK7 we secure the vehicle and tow it to a workshop in Warsaw or further across Poland (up to 500 km). Price quoted upfront by phone."
        },
        {
          "title": "Motorcycles, scooters and vans",
          "text": "On DK7 we also help motorcycle and scooter riders and delivery vans — flatbed transport included."
        }
      ],
      "h2transport": "Tow truck DK7 — roadside recovery 24/7",
      "transport": "Need a tow truck on DK7? INNSER — roadside assistance Warsaw area, usually 20–40 minutes to junctions near the capital. Towing from 250 PLN (up to 15 km).",
      "h2help": "24/7 roadside assistance on DK7",
      "helpIntro": "On DK7 we offer a full package — we speak Polish, English, Russian and Ukrainian:",
      "bullets": [
        "Hard-shoulder / roadside towing on DK7 — cars, vans, motorcycles, scooters",
        "Jump start for a dead battery (cables / booster)",
        "Tyre change, car lockout, transfer to the nearest junction",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — towing and breakdown assistance on DK7 near Warsaw. Fast arrival, honest pricing, four languages."
    },
    "ru": {
      "lead": "Эвакуатор на DK7 — лавета Варшава и помощь на трассе DK7 24/7 от INNSER. Часто эвакуируем авто, фургоны, мотоциклы и скутеры у развязок Puławska / Krakowska, Lesznowola, Grójec; север — Czosnów. ДТП, поломка, разряженный аккумулятор — приедем на аварийную полосу или обочину. Коридор: Варшава–Краков / Варшава–Гданьск (участки DK).",
      "whyTitle": "Почему INNSER на трассе DK7?",
      "blocks": [
        {
          "title": "Развязки и участки DK7 у Варшавы",
          "text": "Знаем подъезды к DK7 со стороны столицы: Puławska / Krakowska, Lesznowola, Grójec; север — Czosnów. Эвакуация с аварийной полосы / обочины — быстро и безопасно. Знаем национальная дорога DK7 (Krakowska / Gdańska), города у Варшавы."
        },
        {
          "title": "ДТП, поломки и доставка в сервис",
          "text": "После аварии на DK7 фиксируем авто и везём в сервис в Варшаве или дальше по Польше (до 500 км). Цену называем заранее по телефону."
        },
        {
          "title": "Мотоциклы, скутеры и фургоны",
          "text": "На DK7 часто помогаем мотоциклистам, водителям скутеров и курьерам — перевозка мото / скутера на лавете."
        }
      ],
      "h2transport": "Лавета DK7 — эвакуатор на трассе 24/7",
      "transport": "Нужен эвакуатор на DK7? INNSER — лавета в Варшаве и окрестностях, обычно 20–40 минут до развязок у столицы. Эвакуация от 250 zł (до 15 км).",
      "h2help": "Круглосуточная помощь на DK7",
      "helpIntro": "На DK7 полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      "bullets": [
        "Эвакуация с аварийной полосы / обочины DK7 — авто, фургоны, мото, скутеры",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер)",
        "Замена колеса, открытие авто, выезд к ближайшей развязке",
        "Тел. 506-001-057 — RU / PL / EN / UA, 24/7"
      ],
      "closing": "INNSER — эвакуатор и лавета на DK7 у Варшавы. Быстрый приезд, честная цена, четыре языка."
    },
    "ua": {
      "lead": "Евакуатор на DK7 — лафета Варшава та допомога на трасі DK7 24/7 від INNSER. Часто евакуюємо авто, фургони, мотоцикли та скутери біля розв’язок Puławska / Krakowska, Lesznowola, Grójec; північ — Czosnów. ДТП, поломка, розряджений акумулятор — приїдемо на аварійну смугу або узбіччя. Коридор: Варшава–Краків / Варшава–Гданськ (ділянки DK).",
      "whyTitle": "Чому INNSER на трасі DK7?",
      "blocks": [
        {
          "title": "Розв’язки та ділянки DK7 біля Варшави",
          "text": "Знаємо під’їзди до DK7 з боку столиці: Puławska / Krakowska, Lesznowola, Grójec; північ — Czosnów. Евакуація з аварійної смуги / узбіччя — швидко й безпечно. Знаємо національна дорога DK7 (Krakowska / Gdańska), міста біля Варшави."
        },
        {
          "title": "ДТП, поломки та доставка в сервіс",
          "text": "Після аварії на DK7 фіксуємо авто і веземо в сервіс у Варшаві або далі Польщею (до 500 км). Ціну називаємо наперед телефоном."
        },
        {
          "title": "Мотоцикли, скутери та фургони",
          "text": "На DK7 часто допомагаємо мотоциклістам, водіям скутерів і кур’єрам — перевезення мото / скутера на лафеті."
        }
      ],
      "h2transport": "Лафета DK7 — евакуатор на трасі 24/7",
      "transport": "Потрібен евакуатор на DK7? INNSER — лафета у Варшаві та околицях, зазвичай 20–40 хвилин до розв’язок біля столиці. Евакуація від 250 zł (до 15 км).",
      "h2help": "Цілодобова допомога на DK7",
      "helpIntro": "На DK7 повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      "bullets": [
        "Евакуація з аварійної смуги / узбіччя DK7 — авто, фургони, мото, скутери",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер)",
        "Заміна колеса, відкриття авто, виїзд до найближчої розв’язки",
        "Тел. 506-001-057 — UA / PL / RU / EN, 24/7"
      ],
      "closing": "INNSER — евакуатор і лафета на DK7 біля Варшави. Швидкий приїзд, чесна ціна, чотири мови."
    }
  },
  "dk8": {
    "pl": {
      "lead": "Pomoc drogowa na DK8 — laweta Warszawa i holowanie na trasie DK8 24/7 z INNSER. Często holujemy auta, busy, motocykle i skutery przy węzłach odcinki przy Warszawie, Marki, Radzymin, kierunek Łomża. Awaria, kolizja, rozładowany akumulator — przyjedziemy lawetą na pas awaryjny lub pobocze. Korytarz: Warszawa–Wrocław / Warszawa–Białystok (DK).",
      "whyTitle": "Dlaczego INNSER na trasie DK8?",
      "blocks": [
        {
          "title": "Węzły i odcinki DK8 przy Warszawie",
          "text": "Znamy dojazd do DK8 od strony stolicy: odcinki przy Warszawie, Marki, Radzymin, kierunek Łomża. Holowanie z pasa awaryjnego / pobocza wykonujemy szybko i bezpiecznie . Obszar: droga krajowa DK8, kierunek Wrocław / Białystok poza ekspresówkami."
        },
        {
          "title": "Kolizje, awarie i transport do warsztatu",
          "text": "Po kolizji na DK8 zabezpieczamy pojazd i holujemy do warsztatu w Warszawie lub dalej w Polsce (do 500 km). Cenę podajemy z góry przez telefon — bez ukrytych dopłat."
        },
        {
          "title": "Motocykle, skutery i busy",
          "text": "Na DK8 często pomagamy też kierowcom motocykli, skuterów i dostawczakom — transport motocykla / skutera lawetą oraz holowanie vanów."
        }
      ],
      "h2transport": "Laweta DK8 — holowanie na trasie 24h",
      "transport": "Potrzebujesz lawety na DK8? INNSER — pomoc drogowa Warszawa i okolice, dojazd zwykle 20–40 minut do węzłów przy stolicy. Holowanie od 250 zł (do 15 km), wycena telefoniczna. Transport auta z DK8 do serwisu lub parkingu.",
      "h2help": "Całodobowa pomoc drogowa na DK8",
      "helpIntro": "Na DK8 oferujemy pełen zakres — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      "bullets": [
        "Holowanie z pasa awaryjnego / pobocza DK8 — auta, busy, motocykle, skutery",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster)",
        "Wymiana koła, otwieranie auta, dojazd do najbliższego węzła",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — laweta i pomoc drogowa na DK8 przy Warszawie. Szybki dojazd, uczciwa wycena, obsługa w czterech językach."
    },
    "en": {
      "lead": "Towing and breakdown assistance on DK8 — tow truck Warsaw 24/7 with INNSER on DK8. We frequently recover cars, vans, motorcycles and scooters near sections near Warsaw, Marki, Radzymin, towards Łomża. Crash, breakdown or flat battery — we bring a flatbed to the hard shoulder. Corridor: Warsaw–Wrocław / Warsaw–Białystok (DK).",
      "whyTitle": "Why choose INNSER on DK8?",
      "blocks": [
        {
          "title": "DK8 junctions near Warsaw",
          "text": "We know access to DK8 from the capital side: sections near Warsaw, Marki, Radzymin, towards Łomża. Hard-shoulder / roadside recovery is done quickly and safely — we know national road DK8 towards Wrocław / Białystok off the expressways."
        },
        {
          "title": "Crashes, breakdowns and workshop transport",
          "text": "After a collision on DK8 we secure the vehicle and tow it to a workshop in Warsaw or further across Poland (up to 500 km). Price quoted upfront by phone."
        },
        {
          "title": "Motorcycles, scooters and vans",
          "text": "On DK8 we also help motorcycle and scooter riders and delivery vans — flatbed transport included."
        }
      ],
      "h2transport": "Tow truck DK8 — roadside recovery 24/7",
      "transport": "Need a tow truck on DK8? INNSER — roadside assistance Warsaw area, usually 20–40 minutes to junctions near the capital. Towing from 250 PLN (up to 15 km).",
      "h2help": "24/7 roadside assistance on DK8",
      "helpIntro": "On DK8 we offer a full package — we speak Polish, English, Russian and Ukrainian:",
      "bullets": [
        "Hard-shoulder / roadside towing on DK8 — cars, vans, motorcycles, scooters",
        "Jump start for a dead battery (cables / booster)",
        "Tyre change, car lockout, transfer to the nearest junction",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — towing and breakdown assistance on DK8 near Warsaw. Fast arrival, honest pricing, four languages."
    },
    "ru": {
      "lead": "Эвакуатор на DK8 — лавета Варшава и помощь на трассе DK8 24/7 от INNSER. Часто эвакуируем авто, фургоны, мотоциклы и скутеры у развязок участки у Варшавы, Marki, Radzymin, направление Ломжа. ДТП, поломка, разряженный аккумулятор — приедем на аварийную полосу или обочину. Коридор: Варшава–Вроцлав / Варшава–Белосток (DK).",
      "whyTitle": "Почему INNSER на трассе DK8?",
      "blocks": [
        {
          "title": "Развязки и участки DK8 у Варшавы",
          "text": "Знаем подъезды к DK8 со стороны столицы: участки у Варшавы, Marki, Radzymin, направление Ломжа. Эвакуация с аварийной полосы / обочины — быстро и безопасно. Знаем национальная дорога DK8 на Вроцлав / Белосток вне скоростных."
        },
        {
          "title": "ДТП, поломки и доставка в сервис",
          "text": "После аварии на DK8 фиксируем авто и везём в сервис в Варшаве или дальше по Польше (до 500 км). Цену называем заранее по телефону."
        },
        {
          "title": "Мотоциклы, скутеры и фургоны",
          "text": "На DK8 часто помогаем мотоциклистам, водителям скутеров и курьерам — перевозка мото / скутера на лавете."
        }
      ],
      "h2transport": "Лавета DK8 — эвакуатор на трассе 24/7",
      "transport": "Нужен эвакуатор на DK8? INNSER — лавета в Варшаве и окрестностях, обычно 20–40 минут до развязок у столицы. Эвакуация от 250 zł (до 15 км).",
      "h2help": "Круглосуточная помощь на DK8",
      "helpIntro": "На DK8 полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      "bullets": [
        "Эвакуация с аварийной полосы / обочины DK8 — авто, фургоны, мото, скутеры",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер)",
        "Замена колеса, открытие авто, выезд к ближайшей развязке",
        "Тел. 506-001-057 — RU / PL / EN / UA, 24/7"
      ],
      "closing": "INNSER — эвакуатор и лавета на DK8 у Варшавы. Быстрый приезд, честная цена, четыре языка."
    },
    "ua": {
      "lead": "Евакуатор на DK8 — лафета Варшава та допомога на трасі DK8 24/7 від INNSER. Часто евакуюємо авто, фургони, мотоцикли та скутери біля розв’язок ділянки біля Варшави, Marki, Radzymin, напрямок Ломжа. ДТП, поломка, розряджений акумулятор — приїдемо на аварійну смугу або узбіччя. Коридор: Варшава–Вроцлав / Варшава–Білосток (DK).",
      "whyTitle": "Чому INNSER на трасі DK8?",
      "blocks": [
        {
          "title": "Розв’язки та ділянки DK8 біля Варшави",
          "text": "Знаємо під’їзди до DK8 з боку столиці: ділянки біля Варшави, Marki, Radzymin, напрямок Ломжа. Евакуація з аварійної смуги / узбіччя — швидко й безпечно. Знаємо національна дорога DK8 на Вроцлав / Білосток поза швидкісними."
        },
        {
          "title": "ДТП, поломки та доставка в сервіс",
          "text": "Після аварії на DK8 фіксуємо авто і веземо в сервіс у Варшаві або далі Польщею (до 500 км). Ціну називаємо наперед телефоном."
        },
        {
          "title": "Мотоцикли, скутери та фургони",
          "text": "На DK8 часто допомагаємо мотоциклістам, водіям скутерів і кур’єрам — перевезення мото / скутера на лафеті."
        }
      ],
      "h2transport": "Лафета DK8 — евакуатор на трасі 24/7",
      "transport": "Потрібен евакуатор на DK8? INNSER — лафета у Варшаві та околицях, зазвичай 20–40 хвилин до розв’язок біля столиці. Евакуація від 250 zł (до 15 км).",
      "h2help": "Цілодобова допомога на DK8",
      "helpIntro": "На DK8 повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      "bullets": [
        "Евакуація з аварійної смуги / узбіччя DK8 — авто, фургони, мото, скутери",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер)",
        "Заміна колеса, відкриття авто, виїзд до найближчої розв’язки",
        "Тел. 506-001-057 — UA / PL / RU / EN, 24/7"
      ],
      "closing": "INNSER — евакуатор і лафета на DK8 біля Варшави. Швидкий приїзд, чесна ціна, чотири мови."
    }
  },
  "dk17": {
    "pl": {
      "lead": "Pomoc drogowa na DK17 — laweta Warszawa i holowanie na trasie DK17 24/7 z INNSER. Często holujemy auta, busy, motocykle i skutery przy węzłach Wawer, Józefów, Otwock, Garwolin. Awaria, kolizja, rozładowany akumulator — przyjedziemy lawetą na pas awaryjny lub pobocze. Korytarz: Warszawa–Lublin (DK17).",
      "whyTitle": "Dlaczego INNSER na trasie DK17?",
      "blocks": [
        {
          "title": "Węzły i odcinki DK17 przy Warszawie",
          "text": "Znamy dojazd do DK17 od strony stolicy: Wawer, Józefów, Otwock, Garwolin. Holowanie z pasa awaryjnego / pobocza wykonujemy szybko i bezpiecznie . Obszar: droga krajowa DK17 w stronę Lublina, Wawer i Józefów."
        },
        {
          "title": "Kolizje, awarie i transport do warsztatu",
          "text": "Po kolizji na DK17 zabezpieczamy pojazd i holujemy do warsztatu w Warszawie lub dalej w Polsce (do 500 km). Cenę podajemy z góry przez telefon — bez ukrytych dopłat."
        },
        {
          "title": "Motocykle, skutery i busy",
          "text": "Na DK17 często pomagamy też kierowcom motocykli, skuterów i dostawczakom — transport motocykla / skutera lawetą oraz holowanie vanów."
        }
      ],
      "h2transport": "Laweta DK17 — holowanie na trasie 24h",
      "transport": "Potrzebujesz lawety na DK17? INNSER — pomoc drogowa Warszawa i okolice, dojazd zwykle 20–40 minut do węzłów przy stolicy. Holowanie od 250 zł (do 15 km), wycena telefoniczna. Transport auta z DK17 do serwisu lub parkingu.",
      "h2help": "Całodobowa pomoc drogowa na DK17",
      "helpIntro": "Na DK17 oferujemy pełen zakres — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      "bullets": [
        "Holowanie z pasa awaryjnego / pobocza DK17 — auta, busy, motocykle, skutery",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster)",
        "Wymiana koła, otwieranie auta, dojazd do najbliższego węzła",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — laweta i pomoc drogowa na DK17 przy Warszawie. Szybki dojazd, uczciwa wycena, obsługa w czterech językach."
    },
    "en": {
      "lead": "Towing and breakdown assistance on DK17 — tow truck Warsaw 24/7 with INNSER on DK17. We frequently recover cars, vans, motorcycles and scooters near Wawer, Józefów, Otwock, Garwolin. Crash, breakdown or flat battery — we bring a flatbed to the hard shoulder. Corridor: Warsaw–Lublin (DK17).",
      "whyTitle": "Why choose INNSER on DK17?",
      "blocks": [
        {
          "title": "DK17 junctions near Warsaw",
          "text": "We know access to DK17 from the capital side: Wawer, Józefów, Otwock, Garwolin. Hard-shoulder / roadside recovery is done quickly and safely — we know national road DK17 towards Lublin, Wawer and Józefów."
        },
        {
          "title": "Crashes, breakdowns and workshop transport",
          "text": "After a collision on DK17 we secure the vehicle and tow it to a workshop in Warsaw or further across Poland (up to 500 km). Price quoted upfront by phone."
        },
        {
          "title": "Motorcycles, scooters and vans",
          "text": "On DK17 we also help motorcycle and scooter riders and delivery vans — flatbed transport included."
        }
      ],
      "h2transport": "Tow truck DK17 — roadside recovery 24/7",
      "transport": "Need a tow truck on DK17? INNSER — roadside assistance Warsaw area, usually 20–40 minutes to junctions near the capital. Towing from 250 PLN (up to 15 km).",
      "h2help": "24/7 roadside assistance on DK17",
      "helpIntro": "On DK17 we offer a full package — we speak Polish, English, Russian and Ukrainian:",
      "bullets": [
        "Hard-shoulder / roadside towing on DK17 — cars, vans, motorcycles, scooters",
        "Jump start for a dead battery (cables / booster)",
        "Tyre change, car lockout, transfer to the nearest junction",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — towing and breakdown assistance on DK17 near Warsaw. Fast arrival, honest pricing, four languages."
    },
    "ru": {
      "lead": "Эвакуатор на DK17 — лавета Варшава и помощь на трассе DK17 24/7 от INNSER. Часто эвакуируем авто, фургоны, мотоциклы и скутеры у развязок Wawer, Józefów, Otwock, Garwolin. ДТП, поломка, разряженный аккумулятор — приедем на аварийную полосу или обочину. Коридор: Варшава–Люблин (DK17).",
      "whyTitle": "Почему INNSER на трассе DK17?",
      "blocks": [
        {
          "title": "Развязки и участки DK17 у Варшавы",
          "text": "Знаем подъезды к DK17 со стороны столицы: Wawer, Józefów, Otwock, Garwolin. Эвакуация с аварийной полосы / обочины — быстро и безопасно. Знаем национальная дорога DK17 на Люблин, Wawer и Józefów."
        },
        {
          "title": "ДТП, поломки и доставка в сервис",
          "text": "После аварии на DK17 фиксируем авто и везём в сервис в Варшаве или дальше по Польше (до 500 км). Цену называем заранее по телефону."
        },
        {
          "title": "Мотоциклы, скутеры и фургоны",
          "text": "На DK17 часто помогаем мотоциклистам, водителям скутеров и курьерам — перевозка мото / скутера на лавете."
        }
      ],
      "h2transport": "Лавета DK17 — эвакуатор на трассе 24/7",
      "transport": "Нужен эвакуатор на DK17? INNSER — лавета в Варшаве и окрестностях, обычно 20–40 минут до развязок у столицы. Эвакуация от 250 zł (до 15 км).",
      "h2help": "Круглосуточная помощь на DK17",
      "helpIntro": "На DK17 полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      "bullets": [
        "Эвакуация с аварийной полосы / обочины DK17 — авто, фургоны, мото, скутеры",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер)",
        "Замена колеса, открытие авто, выезд к ближайшей развязке",
        "Тел. 506-001-057 — RU / PL / EN / UA, 24/7"
      ],
      "closing": "INNSER — эвакуатор и лавета на DK17 у Варшавы. Быстрый приезд, честная цена, четыре языка."
    },
    "ua": {
      "lead": "Евакуатор на DK17 — лафета Варшава та допомога на трасі DK17 24/7 від INNSER. Часто евакуюємо авто, фургони, мотоцикли та скутери біля розв’язок Wawer, Józefów, Otwock, Garwolin. ДТП, поломка, розряджений акумулятор — приїдемо на аварійну смугу або узбіччя. Коридор: Варшава–Люблін (DK17).",
      "whyTitle": "Чому INNSER на трасі DK17?",
      "blocks": [
        {
          "title": "Розв’язки та ділянки DK17 біля Варшави",
          "text": "Знаємо під’їзди до DK17 з боку столиці: Wawer, Józefów, Otwock, Garwolin. Евакуація з аварійної смуги / узбіччя — швидко й безпечно. Знаємо національна дорога DK17 на Люблін, Wawer і Józefów."
        },
        {
          "title": "ДТП, поломки та доставка в сервіс",
          "text": "Після аварії на DK17 фіксуємо авто і веземо в сервіс у Варшаві або далі Польщею (до 500 км). Ціну називаємо наперед телефоном."
        },
        {
          "title": "Мотоцикли, скутери та фургони",
          "text": "На DK17 часто допомагаємо мотоциклістам, водіям скутерів і кур’єрам — перевезення мото / скутера на лафеті."
        }
      ],
      "h2transport": "Лафета DK17 — евакуатор на трасі 24/7",
      "transport": "Потрібен евакуатор на DK17? INNSER — лафета у Варшаві та околицях, зазвичай 20–40 хвилин до розв’язок біля столиці. Евакуація від 250 zł (до 15 км).",
      "h2help": "Цілодобова допомога на DK17",
      "helpIntro": "На DK17 повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      "bullets": [
        "Евакуація з аварійної смуги / узбіччя DK17 — авто, фургони, мото, скутери",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер)",
        "Заміна колеса, відкриття авто, виїзд до найближчої розв’язки",
        "Тел. 506-001-057 — UA / PL / RU / EN, 24/7"
      ],
      "closing": "INNSER — евакуатор і лафета на DK17 біля Варшави. Швидкий приїзд, чесна ціна, чотири мови."
    }
  },
  "dk50": {
    "pl": {
      "lead": "Pomoc drogowa na DK50 — laweta Warszawa i holowanie na trasie DK50 24/7 z INNSER. Często holujemy auta, busy, motocykle i skutery przy węzłach Grójec, Mszczonów, Sochaczew, Wyszogród, Wyszków, Mińsk Maz.. Awaria, kolizja, rozładowany akumulator — przyjedziemy lawetą na pas awaryjny lub pobocze. Korytarz: duża obwodnica wokół Warszawy (DK50).",
      "whyTitle": "Dlaczego INNSER na trasie DK50?",
      "blocks": [
        {
          "title": "Węzły i odcinki DK50 przy Warszawie",
          "text": "Znamy dojazd do DK50 od strony stolicy: Grójec, Mszczonów, Sochaczew, Wyszogród, Wyszków, Mińsk Maz.. Holowanie z pasa awaryjnego / pobocza wykonujemy szybko i bezpiecznie . Obszar: obwodnica mazowiecka DK50 — Grójec, Mszczonów, Sochaczew, Wyszków."
        },
        {
          "title": "Kolizje, awarie i transport do warsztatu",
          "text": "Po kolizji na DK50 zabezpieczamy pojazd i holujemy do warsztatu w Warszawie lub dalej w Polsce (do 500 km). Cenę podajemy z góry przez telefon — bez ukrytych dopłat."
        },
        {
          "title": "Motocykle, skutery i busy",
          "text": "Na DK50 często pomagamy też kierowcom motocykli, skuterów i dostawczakom — transport motocykla / skutera lawetą oraz holowanie vanów."
        }
      ],
      "h2transport": "Laweta DK50 — holowanie na trasie 24h",
      "transport": "Potrzebujesz lawety na DK50? INNSER — pomoc drogowa Warszawa i okolice, dojazd zwykle 20–40 minut do węzłów przy stolicy. Holowanie od 250 zł (do 15 km), wycena telefoniczna. Transport auta z DK50 do serwisu lub parkingu.",
      "h2help": "Całodobowa pomoc drogowa na DK50",
      "helpIntro": "Na DK50 oferujemy pełen zakres — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      "bullets": [
        "Holowanie z pasa awaryjnego / pobocza DK50 — auta, busy, motocykle, skutery",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster)",
        "Wymiana koła, otwieranie auta, dojazd do najbliższego węzła",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — laweta i pomoc drogowa na DK50 przy Warszawie. Szybki dojazd, uczciwa wycena, obsługa w czterech językach."
    },
    "en": {
      "lead": "Towing and breakdown assistance on DK50 — tow truck Warsaw 24/7 with INNSER on DK50. We frequently recover cars, vans, motorcycles and scooters near Grójec, Mszczonów, Sochaczew, Wyszogród, Wyszków, Mińsk Maz.. Crash, breakdown or flat battery — we bring a flatbed to the hard shoulder. Corridor: large ring around Warsaw (DK50).",
      "whyTitle": "Why choose INNSER on DK50?",
      "blocks": [
        {
          "title": "DK50 junctions near Warsaw",
          "text": "We know access to DK50 from the capital side: Grójec, Mszczonów, Sochaczew, Wyszogród, Wyszków, Mińsk Maz.. Hard-shoulder / roadside recovery is done quickly and safely — we know Mazovian ring DK50 — Grójec, Mszczonów, Sochaczew, Wyszków."
        },
        {
          "title": "Crashes, breakdowns and workshop transport",
          "text": "After a collision on DK50 we secure the vehicle and tow it to a workshop in Warsaw or further across Poland (up to 500 km). Price quoted upfront by phone."
        },
        {
          "title": "Motorcycles, scooters and vans",
          "text": "On DK50 we also help motorcycle and scooter riders and delivery vans — flatbed transport included."
        }
      ],
      "h2transport": "Tow truck DK50 — roadside recovery 24/7",
      "transport": "Need a tow truck on DK50? INNSER — roadside assistance Warsaw area, usually 20–40 minutes to junctions near the capital. Towing from 250 PLN (up to 15 km).",
      "h2help": "24/7 roadside assistance on DK50",
      "helpIntro": "On DK50 we offer a full package — we speak Polish, English, Russian and Ukrainian:",
      "bullets": [
        "Hard-shoulder / roadside towing on DK50 — cars, vans, motorcycles, scooters",
        "Jump start for a dead battery (cables / booster)",
        "Tyre change, car lockout, transfer to the nearest junction",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — towing and breakdown assistance on DK50 near Warsaw. Fast arrival, honest pricing, four languages."
    },
    "ru": {
      "lead": "Эвакуатор на DK50 — лавета Варшава и помощь на трассе DK50 24/7 от INNSER. Часто эвакуируем авто, фургоны, мотоциклы и скутеры у развязок Grójec, Mszczonów, Sochaczew, Wyszogród, Wyszków, Mińsk Maz.. ДТП, поломка, разряженный аккумулятор — приедем на аварийную полосу или обочину. Коридор: большая окружная вокруг Варшавы (DK50).",
      "whyTitle": "Почему INNSER на трассе DK50?",
      "blocks": [
        {
          "title": "Развязки и участки DK50 у Варшавы",
          "text": "Знаем подъезды к DK50 со стороны столицы: Grójec, Mszczonów, Sochaczew, Wyszogród, Wyszków, Mińsk Maz.. Эвакуация с аварийной полосы / обочины — быстро и безопасно. Знаем мазовецкая окружная DK50 — Grójec, Mszczonów, Sochaczew, Wyszków."
        },
        {
          "title": "ДТП, поломки и доставка в сервис",
          "text": "После аварии на DK50 фиксируем авто и везём в сервис в Варшаве или дальше по Польше (до 500 км). Цену называем заранее по телефону."
        },
        {
          "title": "Мотоциклы, скутеры и фургоны",
          "text": "На DK50 часто помогаем мотоциклистам, водителям скутеров и курьерам — перевозка мото / скутера на лавете."
        }
      ],
      "h2transport": "Лавета DK50 — эвакуатор на трассе 24/7",
      "transport": "Нужен эвакуатор на DK50? INNSER — лавета в Варшаве и окрестностях, обычно 20–40 минут до развязок у столицы. Эвакуация от 250 zł (до 15 км).",
      "h2help": "Круглосуточная помощь на DK50",
      "helpIntro": "На DK50 полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      "bullets": [
        "Эвакуация с аварийной полосы / обочины DK50 — авто, фургоны, мото, скутеры",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер)",
        "Замена колеса, открытие авто, выезд к ближайшей развязке",
        "Тел. 506-001-057 — RU / PL / EN / UA, 24/7"
      ],
      "closing": "INNSER — эвакуатор и лавета на DK50 у Варшавы. Быстрый приезд, честная цена, четыре языка."
    },
    "ua": {
      "lead": "Евакуатор на DK50 — лафета Варшава та допомога на трасі DK50 24/7 від INNSER. Часто евакуюємо авто, фургони, мотоцикли та скутери біля розв’язок Grójec, Mszczonów, Sochaczew, Wyszogród, Wyszków, Mińsk Maz.. ДТП, поломка, розряджений акумулятор — приїдемо на аварійну смугу або узбіччя. Коридор: велика об’їзна навколо Варшави (DK50).",
      "whyTitle": "Чому INNSER на трасі DK50?",
      "blocks": [
        {
          "title": "Розв’язки та ділянки DK50 біля Варшави",
          "text": "Знаємо під’їзди до DK50 з боку столиці: Grójec, Mszczonów, Sochaczew, Wyszogród, Wyszków, Mińsk Maz.. Евакуація з аварійної смуги / узбіччя — швидко й безпечно. Знаємо мазовецька об’їзна DK50 — Grójec, Mszczonów, Sochaczew, Wyszków."
        },
        {
          "title": "ДТП, поломки та доставка в сервіс",
          "text": "Після аварії на DK50 фіксуємо авто і веземо в сервіс у Варшаві або далі Польщею (до 500 км). Ціну називаємо наперед телефоном."
        },
        {
          "title": "Мотоцикли, скутери та фургони",
          "text": "На DK50 часто допомагаємо мотоциклістам, водіям скутерів і кур’єрам — перевезення мото / скутера на лафеті."
        }
      ],
      "h2transport": "Лафета DK50 — евакуатор на трасі 24/7",
      "transport": "Потрібен евакуатор на DK50? INNSER — лафета у Варшаві та околицях, зазвичай 20–40 хвилин до розв’язок біля столиці. Евакуація від 250 zł (до 15 км).",
      "h2help": "Цілодобова допомога на DK50",
      "helpIntro": "На DK50 повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      "bullets": [
        "Евакуація з аварійної смуги / узбіччя DK50 — авто, фургони, мото, скутери",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер)",
        "Заміна колеса, відкриття авто, виїзд до найближчої розв’язки",
        "Тел. 506-001-057 — UA / PL / RU / EN, 24/7"
      ],
      "closing": "INNSER — евакуатор і лафета на DK50 біля Варшави. Швидкий приїзд, чесна ціна, чотири мови."
    }
  },
  "obwodnica": {
    "pl": {
      "lead": "Pomoc drogowa na Obwodnica — laweta Warszawa i holowanie na trasie Obwodnica Warszawy 24/7 z INNSER. Często holujemy auta, busy, motocykle i skutery przy węzłach Konotopa, Puławska, Modlińska, Marki, węzły S2/S8/A2. Awaria, kolizja, rozładowany akumulator — przyjedziemy lawetą na pas awaryjny lub pobocze. Korytarz: pełna obwodnica / pierścień ekspresowy wokół Warszawy.",
      "whyTitle": "Dlaczego INNSER na trasie Obwodnica?",
      "blocks": [
        {
          "title": "Węzły i odcinki Obwodnica przy Warszawie",
          "text": "Znamy dojazd do Obwodnica od strony stolicy: Konotopa, Puławska, Modlińska, Marki, węzły S2/S8/A2. Holowanie z pasa awaryjnego / pobocza wykonujemy szybko i bezpiecznie . Obszar: obwodnica Warszawy — S2, S8, A2 i łączniki wokół stolicy."
        },
        {
          "title": "Kolizje, awarie i transport do warsztatu",
          "text": "Po kolizji na Obwodnica zabezpieczamy pojazd i holujemy do warsztatu w Warszawie lub dalej w Polsce (do 500 km). Cenę podajemy z góry przez telefon — bez ukrytych dopłat."
        },
        {
          "title": "Motocykle, skutery i busy",
          "text": "Na Obwodnica często pomagamy też kierowcom motocykli, skuterów i dostawczakom — transport motocykla / skutera lawetą oraz holowanie vanów."
        }
      ],
      "h2transport": "Laweta Obwodnica — holowanie na trasie 24h",
      "transport": "Potrzebujesz lawety na Obwodnica? INNSER — pomoc drogowa Warszawa i okolice, dojazd zwykle 20–40 minut do węzłów przy stolicy. Holowanie od 250 zł (do 15 km), wycena telefoniczna. Transport auta z Obwodnica do serwisu lub parkingu.",
      "h2help": "Całodobowa pomoc drogowa na Obwodnica",
      "helpIntro": "Na Obwodnica oferujemy pełen zakres — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      "bullets": [
        "Holowanie z pasa awaryjnego / pobocza Obwodnica — auta, busy, motocykle, skutery",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster)",
        "Wymiana koła, otwieranie auta, dojazd do najbliższego węzła",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — laweta i pomoc drogowa na Obwodnica przy Warszawie. Szybki dojazd, uczciwa wycena, obsługa w czterech językach."
    },
    "en": {
      "lead": "Towing and breakdown assistance on Obwodnica — tow truck Warsaw 24/7 with INNSER on Warsaw Ring Road. We frequently recover cars, vans, motorcycles and scooters near Konotopa, Puławska, Modlińska, Marki, S2/S8/A2 junctions. Crash, breakdown or flat battery — we bring a flatbed to the hard shoulder. Corridor: full ring / express ring around Warsaw.",
      "whyTitle": "Why choose INNSER on Obwodnica?",
      "blocks": [
        {
          "title": "Obwodnica junctions near Warsaw",
          "text": "We know access to Obwodnica from the capital side: Konotopa, Puławska, Modlińska, Marki, S2/S8/A2 junctions. Hard-shoulder / roadside recovery is done quickly and safely — we know Warsaw ring — S2, S8, A2 and link roads around the capital."
        },
        {
          "title": "Crashes, breakdowns and workshop transport",
          "text": "After a collision on Obwodnica we secure the vehicle and tow it to a workshop in Warsaw or further across Poland (up to 500 km). Price quoted upfront by phone."
        },
        {
          "title": "Motorcycles, scooters and vans",
          "text": "On Obwodnica we also help motorcycle and scooter riders and delivery vans — flatbed transport included."
        }
      ],
      "h2transport": "Tow truck Obwodnica — roadside recovery 24/7",
      "transport": "Need a tow truck on Obwodnica? INNSER — roadside assistance Warsaw area, usually 20–40 minutes to junctions near the capital. Towing from 250 PLN (up to 15 km).",
      "h2help": "24/7 roadside assistance on Obwodnica",
      "helpIntro": "On Obwodnica we offer a full package — we speak Polish, English, Russian and Ukrainian:",
      "bullets": [
        "Hard-shoulder / roadside towing on Obwodnica — cars, vans, motorcycles, scooters",
        "Jump start for a dead battery (cables / booster)",
        "Tyre change, car lockout, transfer to the nearest junction",
        "Tel. 506-001-057 — PL / EN / RU / UA, 24/7"
      ],
      "closing": "INNSER — towing and breakdown assistance on Obwodnica near Warsaw. Fast arrival, honest pricing, four languages."
    },
    "ru": {
      "lead": "Эвакуатор на Obwodnica — лавета Варшава и помощь на трассе Окружная Варшавы 24/7 от INNSER. Часто эвакуируем авто, фургоны, мотоциклы и скутеры у развязок Konotopa, Puławska, Modlińska, Marki, развязки S2/S8/A2. ДТП, поломка, разряженный аккумулятор — приедем на аварийную полосу или обочину. Коридор: полное кольцо / скоростное кольцо вокруг Варшавы.",
      "whyTitle": "Почему INNSER на трассе Obwodnica?",
      "blocks": [
        {
          "title": "Развязки и участки Obwodnica у Варшавы",
          "text": "Знаем подъезды к Obwodnica со стороны столицы: Konotopa, Puławska, Modlińska, Marki, развязки S2/S8/A2. Эвакуация с аварийной полосы / обочины — быстро и безопасно. Знаем окружная Варшавы — S2, S8, A2 и связки вокруг столицы."
        },
        {
          "title": "ДТП, поломки и доставка в сервис",
          "text": "После аварии на Obwodnica фиксируем авто и везём в сервис в Варшаве или дальше по Польше (до 500 км). Цену называем заранее по телефону."
        },
        {
          "title": "Мотоциклы, скутеры и фургоны",
          "text": "На Obwodnica часто помогаем мотоциклистам, водителям скутеров и курьерам — перевозка мото / скутера на лавете."
        }
      ],
      "h2transport": "Лавета Obwodnica — эвакуатор на трассе 24/7",
      "transport": "Нужен эвакуатор на Obwodnica? INNSER — лавета в Варшаве и окрестностях, обычно 20–40 минут до развязок у столицы. Эвакуация от 250 zł (до 15 км).",
      "h2help": "Круглосуточная помощь на Obwodnica",
      "helpIntro": "На Obwodnica полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      "bullets": [
        "Эвакуация с аварийной полосы / обочины Obwodnica — авто, фургоны, мото, скутеры",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер)",
        "Замена колеса, открытие авто, выезд к ближайшей развязке",
        "Тел. 506-001-057 — RU / PL / EN / UA, 24/7"
      ],
      "closing": "INNSER — эвакуатор и лавета на Obwodnica у Варшавы. Быстрый приезд, честная цена, четыре языка."
    },
    "ua": {
      "lead": "Евакуатор на Obwodnica — лафета Варшава та допомога на трасі Об’їзна Варшавы 24/7 від INNSER. Часто евакуюємо авто, фургони, мотоцикли та скутери біля розв’язок Konotopa, Puławska, Modlińska, Marki, розв’язки S2/S8/A2. ДТП, поломка, розряджений акумулятор — приїдемо на аварійну смугу або узбіччя. Коридор: повне кільце / швидкісне кільце навколо Варшави.",
      "whyTitle": "Чому INNSER на трасі Obwodnica?",
      "blocks": [
        {
          "title": "Розв’язки та ділянки Obwodnica біля Варшави",
          "text": "Знаємо під’їзди до Obwodnica з боку столиці: Konotopa, Puławska, Modlińska, Marki, розв’язки S2/S8/A2. Евакуація з аварійної смуги / узбіччя — швидко й безпечно. Знаємо об’їзна Варшави — S2, S8, A2 і зв’язки навколо столиці."
        },
        {
          "title": "ДТП, поломки та доставка в сервіс",
          "text": "Після аварії на Obwodnica фіксуємо авто і веземо в сервіс у Варшаві або далі Польщею (до 500 км). Ціну називаємо наперед телефоном."
        },
        {
          "title": "Мотоцикли, скутери та фургони",
          "text": "На Obwodnica часто допомагаємо мотоциклістам, водіям скутерів і кур’єрам — перевезення мото / скутера на лафеті."
        }
      ],
      "h2transport": "Лафета Obwodnica — евакуатор на трасі 24/7",
      "transport": "Потрібен евакуатор на Obwodnica? INNSER — лафета у Варшаві та околицях, зазвичай 20–40 хвилин до розв’язок біля столиці. Евакуація від 250 zł (до 15 км).",
      "h2help": "Цілодобова допомога на Obwodnica",
      "helpIntro": "На Obwodnica повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      "bullets": [
        "Евакуація з аварійної смуги / узбіччя Obwodnica — авто, фургони, мото, скутери",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер)",
        "Заміна колеса, відкриття авто, виїзд до найближчої розв’язки",
        "Тел. 506-001-057 — UA / PL / RU / EN, 24/7"
      ],
      "closing": "INNSER — евакуатор і лафета на Obwodnica біля Варшави. Швидкий приїзд, чесна ціна, чотири мови."
    }
  }
};

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

export function getRoadRichContent(lang, slug) {
  const rich = ROAD_RICH[slug];
  if (!rich) return null;
  return rich[lang] || rich.pl;
}

export function renderRoadRichHtml(lang, slug) {
  const c = getRoadRichContent(lang, slug);
  if (!c) return '';
  let html = `<p class="dist-lead">${esc(c.lead)}</p>`;
  html += renderLandingPhotosHtml(slug, lang, 'road');
  html += `<h2 class="ar-title dist-h2">${esc(c.whyTitle)}</h2>`;
  for (const b of c.blocks) {
    html += `<h3 class="dist-h3">${esc(b.title)}</h3><p>${esc(b.text)}</p>`;
  }
  html += `<h2 class="ar-title dist-h2">${esc(c.h2transport)}</h2><p>${esc(c.transport)}</p>`;
  html += `<h2 class="ar-title dist-h2">${esc(c.h2help)}</h2><p>${esc(c.helpIntro)}</p>`;
  html += `<ul class="dist-bullets">${c.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>`;
  html += `<p class="dist-closing">${esc(c.closing)}</p>`;
  return html;
}

export function roadRichJsonForRuntime() {
  return JSON.stringify(ROAD_RICH);
}

export { ROAD_RICH };
