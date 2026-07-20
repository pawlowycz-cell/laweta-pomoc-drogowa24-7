/** Rich per-district + suburb SEO body — full PL / EN / RU / UA. */

import { renderLandingPhotosHtml } from './landing-photos.mjs';

const LOCATIVE = {
  'mokotow': { pl: "Mokotowie", en: "Mokotów", ru: "Мокотуве", ua: "Мокотуві" },
  'wola': { pl: "Woli", en: "Wola", ru: "Воле", ua: "Волі" },
  'praga-poludnie': { pl: "Pradze-Południe", en: "Praga-Południe", ru: "Праге-Полудне", ua: "Праці-Полудне" },
  'praga-polnoc': { pl: "Pradze-Północ", en: "Praga-Północ", ru: "Праге-Пулноц", ua: "Праці-Північ" },
  'srodmiescie': { pl: "Śródmieściu", en: "Śródmieście", ru: "Срудместье", ua: "Середмісті" },
  'ursynow': { pl: "Ursynowie", en: "Ursynów", ru: "Урсынуве", ua: "Урсинуві" },
  'bielany': { pl: "Bielanach", en: "Bielany", ru: "Белянах", ua: "Білянах" },
  'bemowo': { pl: "Bemowie", en: "Bemowo", ru: "Бемово", ua: "Бемово" },
  'targowek': { pl: "Targówku", en: "Targówek", ru: "Таргувеке", ua: "Таргувеку" },
  'ochota': { pl: "Ochocie", en: "Ochota", ru: "Охоте", ua: "Охоті" },
  'wawer': { pl: "Wawrze", en: "Wawer", ru: "Вавере", ua: "Вавері" },
  'bialoleka': { pl: "Białołęce", en: "Białołęka", ru: "Бялоленке", ua: "Бялоленці" },
  'wilanow': { pl: "Wilanowie", en: "Wilanów", ru: "Вилануве", ua: "Вілянуві" },
  'ursus': { pl: "Ursusie", en: "Ursus", ru: "Урсусе", ua: "Урсусі" },
  'wlochy': { pl: "Włochach", en: "Włochy", ru: "Влохах", ua: "Влохах" },
  'rembertow': { pl: "Rembertowie", en: "Rembertów", ru: "Рембертуве", ua: "Рембертуві" },
  'wesola': { pl: "Wesołej", en: "Wesoła", ru: "Весолой", ua: "Весолій" },
  'zoliborz': { pl: "Żoliborzu", en: "Żoliborz", ru: "Жолибоже", ua: "Жолібожі" },
  'zabki': { pl: "Ząbkach", en: "Ząbki", ru: "Зомбках", ua: "Зомбках" },
  'marki': { pl: "Markach", en: "Marki", ru: "Марках", ua: "Марках" },
  'otwock': { pl: "Otwocku", en: "Otwock", ru: "Отвоцке", ua: "Отвоцьку" },
  'pruszkow': { pl: "Pruszkowie", en: "Pruszków", ru: "Прушкуве", ua: "Прушкуві" },
  'piaseczno': { pl: "Piasecznie", en: "Piaseczno", ru: "Пясечно", ua: "Пясечно" },
  'legionowo': { pl: "Legionowie", en: "Legionowo", ru: "Легионово", ua: "Легіоново" },
  'wolomin': { pl: "Wołominie", en: "Wołomin", ru: "Воломине", ua: "Воломіні" },
  'zielonka': { pl: "Zielonce", en: "Zielonka", ru: "Зеленке", ua: "Зеленці" },
  'kobylka': { pl: "Kobyłce", en: "Kobyłka", ru: "Кобылке", ua: "Кобилці" },
  'jozefow': { pl: "Józefowie", en: "Józefów", ru: "Юзефуве", ua: "Юзефуві" },
  'lomianki': { pl: "Łomiankach", en: "Łomianki", ru: "Ломянках", ua: "Ломянках" },
  'konstancin-jeziorna': { pl: "Konstancinie-Jeziornie", en: "Konstancin-Jeziorna", ru: "Констанцине-Езёрне", ua: "Констанціні-Єзьорні" },
  'piastow': { pl: "Piastowie", en: "Piastów", ru: "Пястуве", ua: "Пястуві" },
  'sulejowek': { pl: "Sulejówku", en: "Sulejówek", ru: "Сулеювеке", ua: "Сулєювеку" },
  'milanowek': { pl: "Milanówku", en: "Milanówek", ru: "Миланувеке", ua: "Міланувеку" },
  'brwinow': { pl: "Brwinowie", en: "Brwinów", ru: "Брвинуве", ua: "Брвінуві" },
  'nadarzyn': { pl: "Nadarzynie", en: "Nadarzyn", ru: "Надажине", ua: "Надажині" },
  'raszyn': { pl: "Raszynie", en: "Raszyn", ru: "Рашине", ua: "Рашині" },
  'grodzisk-mazowiecki': { pl: "Grodzisku Mazowieckim", en: "Grodzisk Mazowiecki", ru: "Гродзиске-Мазовецком", ua: "Гродзиську-Мазовецькому" },
  'nowy-dwor-mazowiecki': { pl: "Nowym Dworze Mazowieckim", en: "Nowy Dwór Mazowiecki", ru: "Новом-Двуре-Мазовецком", ua: "Новому-Дворі-Мазовецькому" },
};

const LANDMARKS = {
  'mokotow': {
    kind: "district",
    malls: ["Galeria Mokotów", "Sadyba Best Mall"],
    streets: ["Puławska", "Wołoska", "Belwederska", "Domaniewska"],
    hubs: ["Sadyba", "Stegny", "Dolny Mokotów", "Służewiec"],
  },
  'wola': {
    kind: "district",
    malls: ["Wola Park", "Browary Warszawskie", "Fabryka Norblina"],
    streets: ["Prosta", "Wolska", "Kasprzaka", "Towarowa", "Okopowa", "Górczewska"],
    hubs: ["Rondo Daszyńskiego", "Dworzec Zachodni", "Ulrychów"],
  },
  'praga-poludnie': {
    kind: "district",
    malls: ["CH Promenada", "Galeria Wileńska"],
    streets: ["Grochowska", "Wał Miedzeszyński", "Trakt Lubelski", "Ostrobramska"],
    hubs: ["Stadion Narodowy", "Saska Kępa", "Grochów", "Gocław"],
  },
  'praga-polnoc': {
    kind: "district",
    malls: ["Galeria Wileńska"],
    streets: ["Ząbkowska", "Stalowa", "Inżynierska", "al. Solidarności"],
    hubs: ["Stara Praga", "Most Świętokrzyski", "rondo Waszyngtona"],
  },
  'srodmiescie': {
    kind: "district",
    malls: ["Złote Tarasy", "Vitkac"],
    streets: ["Marszałkowska", "Aleje Jerozolimskie", "Nowy Świat", "Emilii Plater"],
    hubs: ["Dworzec Centralny", "Pałac Kultury", "Plac Defilad"],
  },
  'ursynow': {
    kind: "district",
    malls: ["Atrium Reduta", "Galeria Mokotów"],
    streets: ["al. KEN", "Puławska", "Płaskowickiej", "Indiry Gandhi"],
    hubs: ["Kabaty", "Natolin", "Stokłosy", "Imielin"],
  },
  'bielany': {
    kind: "district",
    malls: ["CH Lider", "Galeria Bielany"],
    streets: ["Marymoncka", "Trakt Rejowski", "Żeromskiego", "Podczaszyńskiego"],
    hubs: ["Młociny", "Słodowiec", "Lasek Bielański"],
  },
  'bemowo': {
    kind: "district",
    malls: ["CH Bemowo", "Fort Wola"],
    streets: ["Górczewska", "Lazurowa", "Powstańców Śląskich", "Połczyńska"],
    hubs: ["Lotnisko Chopina", "Górce", "Karolin", "Fort Bema"],
  },
  'targowek': {
    kind: "district",
    malls: ["CH Targówek", "M1 Marki"],
    streets: ["Trakt Brzeski", "Św. Wincentego", "Radzymińska", "Kondratowicza"],
    hubs: ["Bródno", "Zacisze", "Targówek Mieszkaniowy"],
  },
  'ochota': {
    kind: "district",
    malls: ["Blue City", "CH Reduta"],
    streets: ["Grójecka", "Aleje Jerozolimskie", "Raszyńska"],
    hubs: ["Dworzec Zachodni", "Rakowiec", "Szczęśliwice"],
  },
  'wawer': {
    kind: "district",
    malls: ["Auchan King Cross", "CH Promenada"],
    streets: ["Wał Miedzeszyński", "Trakt Lubelski", "Żegańska"],
    hubs: ["Falenica", "Anin", "Międzylesie"],
  },
  'bialoleka': {
    kind: "district",
    malls: ["CH Galeria Północna", "M1 Marki"],
    streets: ["Modlińska", "Marywilska", "Światowida", "Mehoffera"],
    hubs: ["Tarchomin", "Nowodwory", "Choszczówka"],
  },
  'wilanow': {
    kind: "district",
    malls: ["Wilanów Park", "Galeria Wilanów"],
    streets: ["al. Rzeczypospolitej", "Przyczółkowa", "Klimczaka", "Sarmacka"],
    hubs: ["Miasteczko Wilanów", "Pałac w Wilanowie", "Powsin"],
  },
  'ursus': {
    kind: "district",
    malls: ["Factory Ursus", "CH Skorosze"],
    streets: ["al. Czechowicka", "Posag 7 Panien", "Bodycha"],
    hubs: ["Czechowice", "Skorosze", "Niedźwiadek"],
  },
  'wlochy': {
    kind: "district",
    malls: ["CH Blue City", "Factory Annopol"],
    streets: ["al. Krakowska", "1 Sierpnia", "Popularna"],
    hubs: ["Lotnisko Chopina", "Okęcie", "Salomea"],
  },
  'rembertow': {
    kind: "district",
    malls: ["CH King Cross", "CH Promenada"],
    streets: ["al. gen. A. Chruściela", "Żołnierska", "Chełmżyńska"],
    hubs: ["Kawęczyn", "Nowy Rembertów", "Stary Rembertów"],
  },
  'wesola': {
    kind: "district",
    malls: ["Galeria Wileńska", "CH Promenada"],
    streets: ["Trakt Brzeski", "1 Praskiego Pułku", "Niemcewicza"],
    hubs: ["Stara Miłosna", "Wola Grzybowska", "Zielona"],
  },
  'zoliborz': {
    kind: "district",
    malls: ["Arkadia", "CH Klif"],
    streets: ["al. Wojska Polskiego", "Mickiewicza", "Krasińskiego", "Potocka"],
    hubs: ["Plac Wilsona", "Stary Żoliborz", "Marymont"],
  },
  'zabki': {
    kind: "suburb",
    malls: ["Galeria Ząbki", "CH Marki (blisko)"],
    streets: ["ul. Powstańców", "ul. Orla", "ul. Piłsudskiego", "ul. Kolejowa"],
    hubs: ["Ząbki Centrum", "DK8 / Radzymińska", "granica z Targówkiem"],
  },
  'marki': {
    kind: "suburb",
    malls: ["M1 Marki", "CH Marki"],
    streets: ["ul. Piłsudskiego", "ul. Fabryczna", "ul. Wspólna", "al. Marszałka Piłsudskiego"],
    hubs: ["M1 Marki", "Pustelnik", "Struga"],
  },
  'otwock': {
    kind: "suburb",
    malls: ["Galeria Otwock", "CH Promenada (blisko)"],
    streets: ["ul. Andriollego", "ul. Armii Krajowej", "ul. Warszawska", "ul. Karczewska"],
    hubs: ["Świder", "Otwock Centrum", "linia SKM / kolej"],
  },
  'pruszkow': {
    kind: "suburb",
    malls: ["CH Pruszków", "Factory Annopol (blisko)"],
    streets: ["ul. Warszawska", "ul. Potulicka", "ul. Kraszewskiego", "al. Wojska Polskiego"],
    hubs: ["Pruszków Centrum", "Żbików", "DK720 / S8"],
  },
  'piaseczno': {
    kind: "suburb",
    malls: ["Auchan Piaseczno", "CH Puławska"],
    streets: ["ul. Puławska", "ul. Warszawska", "ul. Słowackiego", "ul. Energetyczna"],
    hubs: ["Piaseczno Centrum", "Zalesie Górne", "Julianów"],
  },
  'legionowo': {
    kind: "suburb",
    malls: ["CH Legionowo", "Galeria Legionowo"],
    streets: ["ul. Jagiellońska", "ul. Sikorskiego", "ul. Warszawska", "ul. Zegrzyńska"],
    hubs: ["Legionowo Centrum", "DK61", "linia kolejowa do Warszawy"],
  },
  'wolomin': {
    kind: "suburb",
    malls: ["CH Wołomin", "M1 Marki (blisko)"],
    streets: ["ul. Wileńska", "ul. Kościelna", "ul. Legionów", "ul. Warszawska"],
    hubs: ["Wołomin Centrum", "DK8", "Ossów"],
  },
  'zielonka': {
    kind: "suburb",
    malls: ["CH Zielonka", "M1 Marki (blisko)"],
    streets: ["ul. Poniatowskiego", "ul. Kolejowa", "ul. Słowackiego", "ul. Marek"],
    hubs: ["Zielonka Centrum", "granica z Markami", "DK8"],
  },
  'kobylka': {
    kind: "suburb",
    malls: ["CH Kobyłka", "M1 Marki (blisko)"],
    streets: ["ul. Napoleona", "ul. Pilsudskiego", "ul. Wołomińska", "ul. Szkolna"],
    hubs: ["Kobyłka Centrum", "DK8", "granica z Wołominem"],
  },
  'jozefow': {
    kind: "suburb",
    malls: ["Galeria Otwock (blisko)", "CH Promenada (blisko)"],
    streets: ["ul. Długa", "ul. Wyszyńskiego", "ul. Kardynała Wyszyńskiego", "ul. Piłsudskiego"],
    hubs: ["Józefów Centrum", "Świder", "linia kolejowa"],
  },
  'lomianki': {
    kind: "suburb",
    malls: ["CH Łomianki", "Arkadia (blisko)"],
    streets: ["ul. Warszawska", "ul. Brukowa", "ul. Zachodnia", "ul. Wędkarska"],
    hubs: ["Łomianki Centrum", "DK7", "Dziekanów Leśny"],
  },
  'konstancin-jeziorna': {
    kind: "suburb",
    malls: ["Galeria Konstancin", "Auchan Piaseczno (blisko)"],
    streets: ["ul. Sułkowskiego", "ul. Piaseczyńska", "ul. Warszawska", "ul. Wilanowska"],
    hubs: ["Konstancin Centrum", "Jeziorna", "park zdrojowy"],
  },
  'piastow': {
    kind: "suburb",
    malls: ["CH Pruszków (blisko)", "Factory Ursus (blisko)"],
    streets: ["ul. Warszawska", "ul. 11 Listopada", "ul. Bohaterów Wolności", "ul. Sienkiewicza"],
    hubs: ["Piastów Centrum", "DK720", "granica z Pruszkowem"],
  },
  'sulejowek': {
    kind: "suburb",
    malls: ["CH Promenada (blisko)", "Galeria Wileńska (blisko)"],
    streets: ["ul. Piłsudskiego", "ul. Paderewskiego", "ul. Józefa Piłsudskiego", "ul. Okuniewska"],
    hubs: ["Sulejówek Centrum", "Miłosna", "DK2"],
  },
  'milanowek': {
    kind: "suburb",
    malls: ["CH Grodzisk (blisko)", "CH Pruszków (blisko)"],
    streets: ["ul. Królewska", "ul. Warszawska", "ul. Piłsudskiego", "ul. Grudowska"],
    hubs: ["Milanówek Centrum", "linia WKD", "DK719"],
  },
  'brwinow': {
    kind: "suburb",
    malls: ["CH Pruszków (blisko)", "CH Grodzisk (blisko)"],
    streets: ["ul. Warszawska", "ul. Rynek", "ul. Grodziska", "ul. Pruszkowska"],
    hubs: ["Brwinów Centrum", "WKD", "DK719"],
  },
  'nadarzyn': {
    kind: "suburb",
    malls: ["Ptak Warsaw Expo", "CH Janki (blisko)"],
    streets: ["ul. Mszczonowska", "ul. Warszawska", "ul. Słomczyn", "al. Katowicka"],
    hubs: ["Ptak Warsaw Expo", "Janki", "S8 / A2"],
  },
  'raszyn': {
    kind: "suburb",
    malls: ["CH Janki", "Blue City (blisko)"],
    streets: ["al. Krakowska", "ul. Głucha", "ul. Sportowa", "ul. Warszawska"],
    hubs: ["Janki", "węzeł S2/S8", "granica z Włochami"],
  },
  'grodzisk-mazowiecki': {
    kind: "suburb",
    malls: ["CH Grodzisk", "Ptak Warsaw Expo (blisko)"],
    streets: ["ul. Żwirki i Wigury", "ul. 11 Listopada", "ul. Montwiłła", "ul. Sienkiewicza"],
    hubs: ["Grodzisk Centrum", "WKD", "DK719"],
  },
  'nowy-dwor-mazowiecki': {
    kind: "suburb",
    malls: ["CH Nowy Dwór", "Galeria Modlińska (blisko)"],
    streets: ["ul. Sukienna", "ul. Warszawska", "ul. Paderewskiego", "ul. Modlińska"],
    hubs: ["Modlin Airport", "centrum Nowego Dworu", "DK62"],
  },
};

/** @type {Record<string, Record<'pl'|'en'|'ru'|'ua', object>>} */
const DISTRICT_RICH = {
  'mokotow': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Mokotów: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Puławska, Wołoska, Belwederska i Domaniewska, a także z parkingów podziemnych centrów handlowych Galeria Mokotów i Sadyba Best Mall oraz z rejonu Sadyba, Stegny, Dolny Mokotów i Służewiec. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Mokotowie?",
      blocks: [
        { title: "Główne ulice Mokotów — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Puławska, Wołoska i Belwederska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Mokotów) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Galeria Mokotów i Sadyba Best Mall oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Mokotowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Sadyba i Stegny." }
      ],
      h2transport: "Laweta Mokotów — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Mokotowie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Mokotowie",
      helpIntro: "W Mokotowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Mokotowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Galeria Mokotów i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Mokotowie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Mokotów district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Puławska, Wołoska, Belwederska and Domaniewska, and from underground car parks at Galeria Mokotów and Sadyba Best Mall as well as the Sadyba, Stegny, Dolny Mokotów and Służewiec area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Mokotów?",
      blocks: [
        { title: "Main streets in Mokotów — we know the routes", text: "We regularly respond on Puławska, Wołoska and Belwederska. In rush hour we take the fastest access roads — towing around Warsaw in Mokotów is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Galeria Mokotów and Sadyba Best Mall and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Mokotów we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Sadyba and Stegny." }
      ],
      h2transport: "Tow truck Mokotów — vehicle transport 24/7",
      transport: "Need a tow truck in Mokotów? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Mokotów",
      helpIntro: "In Mokotów we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Mokotów — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Galeria Mokotów underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Mokotów, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Мокотув: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Puławska, Wołoska, Belwederska и Domaniewska, а также с подземных паркингов торговых центров Galeria Mokotów и Sadyba Best Mall и из зоны Sadyba, Stegny, Dolny Mokotów и Służewiec. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Мокотув?",
      blocks: [
        { title: "Главные улицы Мокотув — знаем маршруты", text: "Чаще всего выезжаем на Puławska, Wołoska и Belwederska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Мокотув) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Galeria Mokotów и Sadyba Best Mall, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Мокотув часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Sadyba и Stegny." }
      ],
      h2transport: "Лавета Мокотув — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Мокотуве? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Мокотув",
      helpIntro: "В Мокотув делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Мокотуве — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Galeria Mokotów и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Мокотув. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Мокотув: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Puławska, Wołoska, Belwederska і Domaniewska, а також з підземних паркінгів торгових центрів Galeria Mokotów і Sadyba Best Mall і з зони Sadyba, Stegny, Dolny Mokotów і Służewiec. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Мокотув?",
      blocks: [
        { title: "Головні вулиці Мокотув — знаємо маршрути", text: "Найчастіше виїжджаємо на Puławska, Wołoska і Belwederska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Мокотув) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Galeria Mokotów і Sadyba Best Mall, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Мокотув часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Sadyba та Stegny." }
      ],
      h2transport: "Лафета Мокотув — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Мокотуві? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Мокотув",
      helpIntro: "У Мокотув надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Мокотуві — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Galeria Mokotów та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Мокотув. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'wola': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Wola: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Prosta, Wolska, Kasprzaka, Towarowa, Okopowa i Górczewska, a także z parkingów podziemnych centrów handlowych Wola Park, Browary Warszawskie i Fabryka Norblina oraz z rejonu Rondo Daszyńskiego, Dworzec Zachodni i Ulrychów. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Woli?",
      blocks: [
        { title: "Główne ulice Wola — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Prosta, Wolska i Kasprzaka. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Wola) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Wola Park i Browary Warszawskie oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Woli często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Rondo Daszyńskiego i Dworzec Zachodni." }
      ],
      h2transport: "Laweta Wola — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Woli? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Woli",
      helpIntro: "W Woli oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Woli — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Wola Park i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Woli. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Wola district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Prosta, Wolska, Kasprzaka, Towarowa, Okopowa and Górczewska, and from underground car parks at Wola Park, Browary Warszawskie and Fabryka Norblina as well as the Rondo Daszyńskiego, Dworzec Zachodni and Ulrychów area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Wola?",
      blocks: [
        { title: "Main streets in Wola — we know the routes", text: "We regularly respond on Prosta, Wolska and Kasprzaka. In rush hour we take the fastest access roads — towing around Warsaw in Wola is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Wola Park and Browary Warszawskie and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Wola we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Rondo Daszyńskiego and Dworzec Zachodni." }
      ],
      h2transport: "Tow truck Wola — vehicle transport 24/7",
      transport: "Need a tow truck in Wola? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Wola",
      helpIntro: "In Wola we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Wola — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Wola Park underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Wola, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Воля: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Prosta, Wolska, Kasprzaka, Towarowa, Okopowa и Górczewska, а также с подземных паркингов торговых центров Wola Park, Browary Warszawskie и Fabryka Norblina и из зоны Rondo Daszyńskiego, Dworzec Zachodni и Ulrychów. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Воля?",
      blocks: [
        { title: "Главные улицы Воля — знаем маршруты", text: "Чаще всего выезжаем на Prosta, Wolska и Kasprzaka. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Воля) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Wola Park и Browary Warszawskie, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Воля часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Rondo Daszyńskiego и Dworzec Zachodni." }
      ],
      h2transport: "Лавета Воля — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Воле? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Воля",
      helpIntro: "В Воля делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Воле — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Wola Park и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Воля. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Воля: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Prosta, Wolska, Kasprzaka, Towarowa, Okopowa і Górczewska, а також з підземних паркінгів торгових центрів Wola Park, Browary Warszawskie і Fabryka Norblina і з зони Rondo Daszyńskiego, Dworzec Zachodni і Ulrychów. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Воля?",
      blocks: [
        { title: "Головні вулиці Воля — знаємо маршрути", text: "Найчастіше виїжджаємо на Prosta, Wolska і Kasprzaka. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Воля) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Wola Park і Browary Warszawskie, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Воля часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Rondo Daszyńskiego та Dworzec Zachodni." }
      ],
      h2transport: "Лафета Воля — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Волі? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Воля",
      helpIntro: "У Воля надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Волі — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Wola Park та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Воля. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'praga-poludnie': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Praga-Południe: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Grochowska, Wał Miedzeszyński, Trakt Lubelski i Ostrobramska, a także z parkingów podziemnych centrów handlowych CH Promenada i Galeria Wileńska oraz z rejonu Stadion Narodowy, Saska Kępa, Grochów i Gocław. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Pradze-Południe?",
      blocks: [
        { title: "Główne ulice Praga-Południe — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Grochowska, Wał Miedzeszyński i Trakt Lubelski. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Praga-Południe) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Promenada i Galeria Wileńska oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Pradze-Południe często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Stadion Narodowy i Saska Kępa." }
      ],
      h2transport: "Laweta Praga-Południe — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Pradze-Południe? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Pradze-Południe",
      helpIntro: "W Pradze-Południe oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Pradze-Południe — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Promenada i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Pradze-Południe. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Praga-Południe district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Grochowska, Wał Miedzeszyński, Trakt Lubelski and Ostrobramska, and from underground car parks at CH Promenada and Galeria Wileńska as well as the Stadion Narodowy, Saska Kępa, Grochów and Gocław area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Praga-Południe?",
      blocks: [
        { title: "Main streets in Praga-Południe — we know the routes", text: "We regularly respond on Grochowska, Wał Miedzeszyński and Trakt Lubelski. In rush hour we take the fastest access roads — towing around Warsaw in Praga-Południe is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Promenada and Galeria Wileńska and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Praga-Południe we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Stadion Narodowy and Saska Kępa." }
      ],
      h2transport: "Tow truck Praga-Południe — vehicle transport 24/7",
      transport: "Need a tow truck in Praga-Południe? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Praga-Południe",
      helpIntro: "In Praga-Południe we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Praga-Południe — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Promenada underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Praga-Południe, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Прага-Полудне: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Grochowska, Wał Miedzeszyński, Trakt Lubelski и Ostrobramska, а также с подземных паркингов торговых центров CH Promenada и Galeria Wileńska и из зоны Stadion Narodowy, Saska Kępa, Grochów и Gocław. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Прага-Полудне?",
      blocks: [
        { title: "Главные улицы Прага-Полудне — знаем маршруты", text: "Чаще всего выезжаем на Grochowska, Wał Miedzeszyński и Trakt Lubelski. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Прага-Полудне) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Promenada и Galeria Wileńska, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Прага-Полудне часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Stadion Narodowy и Saska Kępa." }
      ],
      h2transport: "Лавета Прага-Полудне — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Праге-Полудне? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Прага-Полудне",
      helpIntro: "В Прага-Полудне делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Праге-Полудне — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Promenada и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Прага-Полудне. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Прага-Полудне: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Grochowska, Wał Miedzeszyński, Trakt Lubelski і Ostrobramska, а також з підземних паркінгів торгових центрів CH Promenada і Galeria Wileńska і з зони Stadion Narodowy, Saska Kępa, Grochów і Gocław. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Прага-Полудне?",
      blocks: [
        { title: "Головні вулиці Прага-Полудне — знаємо маршрути", text: "Найчастіше виїжджаємо на Grochowska, Wał Miedzeszyński і Trakt Lubelski. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Прага-Полудне) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Promenada і Galeria Wileńska, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Прага-Полудне часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Stadion Narodowy та Saska Kępa." }
      ],
      h2transport: "Лафета Прага-Полудне — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Праці-Полудне? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Прага-Полудне",
      helpIntro: "У Прага-Полудне надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Праці-Полудне — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Promenada та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Прага-Полудне. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'praga-polnoc': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Praga-Północ: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Ząbkowska, Stalowa, Inżynierska i al. Solidarności, a także z parkingów podziemnych centrów handlowych Galeria Wileńska oraz z rejonu Stara Praga, Most Świętokrzyski i rondo Waszyngtona. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Pradze-Północ?",
      blocks: [
        { title: "Główne ulice Praga-Północ — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Ząbkowska, Stalowa i Inżynierska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Praga-Północ) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Galeria Wileńska i Galeria Wileńska oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Pradze-Północ często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Stara Praga i Most Świętokrzyski." }
      ],
      h2transport: "Laweta Praga-Północ — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Pradze-Północ? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Pradze-Północ",
      helpIntro: "W Pradze-Północ oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Pradze-Północ — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Galeria Wileńska i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Pradze-Północ. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Praga-Północ district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Ząbkowska, Stalowa, Inżynierska and al. Solidarności, and from underground car parks at Galeria Wileńska as well as the Stara Praga, Most Świętokrzyski and rondo Waszyngtona area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Praga-Północ?",
      blocks: [
        { title: "Main streets in Praga-Północ — we know the routes", text: "We regularly respond on Ząbkowska, Stalowa and Inżynierska. In rush hour we take the fastest access roads — towing around Warsaw in Praga-Północ is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Galeria Wileńska and Galeria Wileńska and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Praga-Północ we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Stara Praga and Most Świętokrzyski." }
      ],
      h2transport: "Tow truck Praga-Północ — vehicle transport 24/7",
      transport: "Need a tow truck in Praga-Północ? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Praga-Północ",
      helpIntro: "In Praga-Północ we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Praga-Północ — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Galeria Wileńska underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Praga-Północ, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Прага-Пулноц: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Ząbkowska, Stalowa, Inżynierska и al. Solidarności, а также с подземных паркингов торговых центров Galeria Wileńska и из зоны Stara Praga, Most Świętokrzyski и rondo Waszyngtona. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Прага-Пулноц?",
      blocks: [
        { title: "Главные улицы Прага-Пулноц — знаем маршруты", text: "Чаще всего выезжаем на Ząbkowska, Stalowa и Inżynierska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Прага-Пулноц) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Galeria Wileńska и Galeria Wileńska, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Прага-Пулноц часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Stara Praga и Most Świętokrzyski." }
      ],
      h2transport: "Лавета Прага-Пулноц — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Праге-Пулноц? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Прага-Пулноц",
      helpIntro: "В Прага-Пулноц делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Праге-Пулноц — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Galeria Wileńska и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Прага-Пулноц. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Прага-Північ: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Ząbkowska, Stalowa, Inżynierska і al. Solidarności, а також з підземних паркінгів торгових центрів Galeria Wileńska і з зони Stara Praga, Most Świętokrzyski і rondo Waszyngtona. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Прага-Північ?",
      blocks: [
        { title: "Головні вулиці Прага-Північ — знаємо маршрути", text: "Найчастіше виїжджаємо на Ząbkowska, Stalowa і Inżynierska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Прага-Північ) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Galeria Wileńska і Galeria Wileńska, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Прага-Північ часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Stara Praga та Most Świętokrzyski." }
      ],
      h2transport: "Лафета Прага-Північ — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Праці-Північ? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Прага-Північ",
      helpIntro: "У Прага-Північ надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Праці-Північ — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Galeria Wileńska та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Прага-Північ. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'srodmiescie': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Śródmieście: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Marszałkowska, Aleje Jerozolimskie, Nowy Świat i Emilii Plater, a także z parkingów podziemnych centrów handlowych Złote Tarasy i Vitkac oraz z rejonu Dworzec Centralny, Pałac Kultury i Plac Defilad. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Śródmieściu?",
      blocks: [
        { title: "Główne ulice Śródmieście — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Marszałkowska, Aleje Jerozolimskie i Nowy Świat. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Śródmieście) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Złote Tarasy i Vitkac oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Śródmieściu często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Dworzec Centralny i Pałac Kultury." }
      ],
      h2transport: "Laweta Śródmieście — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Śródmieściu? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Śródmieściu",
      helpIntro: "W Śródmieściu oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Śródmieściu — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Złote Tarasy i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Śródmieściu. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Śródmieście district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Marszałkowska, Aleje Jerozolimskie, Nowy Świat and Emilii Plater, and from underground car parks at Złote Tarasy and Vitkac as well as the Dworzec Centralny, Pałac Kultury and Plac Defilad area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Śródmieście?",
      blocks: [
        { title: "Main streets in Śródmieście — we know the routes", text: "We regularly respond on Marszałkowska, Aleje Jerozolimskie and Nowy Świat. In rush hour we take the fastest access roads — towing around Warsaw in Śródmieście is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Złote Tarasy and Vitkac and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Śródmieście we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Dworzec Centralny and Pałac Kultury." }
      ],
      h2transport: "Tow truck Śródmieście — vehicle transport 24/7",
      transport: "Need a tow truck in Śródmieście? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Śródmieście",
      helpIntro: "In Śródmieście we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Śródmieście — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Złote Tarasy underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Śródmieście, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Срудместье: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Marszałkowska, Aleje Jerozolimskie, Nowy Świat и Emilii Plater, а также с подземных паркингов торговых центров Złote Tarasy и Vitkac и из зоны Dworzec Centralny, Pałac Kultury и Plac Defilad. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Срудместье?",
      blocks: [
        { title: "Главные улицы Срудместье — знаем маршруты", text: "Чаще всего выезжаем на Marszałkowska, Aleje Jerozolimskie и Nowy Świat. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Срудместье) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Złote Tarasy и Vitkac, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Срудместье часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Dworzec Centralny и Pałac Kultury." }
      ],
      h2transport: "Лавета Срудместье — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Срудместье? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Срудместье",
      helpIntro: "В Срудместье делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Срудместье — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Złote Tarasy и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Срудместье. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Середмістя: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Marszałkowska, Aleje Jerozolimskie, Nowy Świat і Emilii Plater, а також з підземних паркінгів торгових центрів Złote Tarasy і Vitkac і з зони Dworzec Centralny, Pałac Kultury і Plac Defilad. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Середмістя?",
      blocks: [
        { title: "Головні вулиці Середмістя — знаємо маршрути", text: "Найчастіше виїжджаємо на Marszałkowska, Aleje Jerozolimskie і Nowy Świat. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Середмістя) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Złote Tarasy і Vitkac, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Середмістя часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Dworzec Centralny та Pałac Kultury." }
      ],
      h2transport: "Лафета Середмістя — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Середмісті? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Середмістя",
      helpIntro: "У Середмістя надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Середмісті — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Złote Tarasy та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Середмістя. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'ursynow': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Ursynów: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. KEN, Puławska, Płaskowickiej i Indiry Gandhi, a także z parkingów podziemnych centrów handlowych Atrium Reduta i Galeria Mokotów oraz z rejonu Kabaty, Natolin, Stokłosy i Imielin. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Ursynowie?",
      blocks: [
        { title: "Główne ulice Ursynów — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. KEN, Puławska i Płaskowickiej. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Ursynów) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Atrium Reduta i Galeria Mokotów oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Ursynowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Kabaty i Natolin." }
      ],
      h2transport: "Laweta Ursynów — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Ursynowie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Ursynowie",
      helpIntro: "W Ursynowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Ursynowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Atrium Reduta i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Ursynowie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Ursynów district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. KEN, Puławska, Płaskowickiej and Indiry Gandhi, and from underground car parks at Atrium Reduta and Galeria Mokotów as well as the Kabaty, Natolin, Stokłosy and Imielin area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Ursynów?",
      blocks: [
        { title: "Main streets in Ursynów — we know the routes", text: "We regularly respond on al. KEN, Puławska and Płaskowickiej. In rush hour we take the fastest access roads — towing around Warsaw in Ursynów is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Atrium Reduta and Galeria Mokotów and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Ursynów we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Kabaty and Natolin." }
      ],
      h2transport: "Tow truck Ursynów — vehicle transport 24/7",
      transport: "Need a tow truck in Ursynów? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Ursynów",
      helpIntro: "In Ursynów we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Ursynów — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Atrium Reduta underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Ursynów, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Урсынув: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. KEN, Puławska, Płaskowickiej и Indiry Gandhi, а также с подземных паркингов торговых центров Atrium Reduta и Galeria Mokotów и из зоны Kabaty, Natolin, Stokłosy и Imielin. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Урсынув?",
      blocks: [
        { title: "Главные улицы Урсынув — знаем маршруты", text: "Чаще всего выезжаем на al. KEN, Puławska и Płaskowickiej. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Урсынув) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Atrium Reduta и Galeria Mokotów, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Урсынув часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Kabaty и Natolin." }
      ],
      h2transport: "Лавета Урсынув — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Урсынуве? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Урсынув",
      helpIntro: "В Урсынув делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Урсынуве — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Atrium Reduta и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Урсынув. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Урсинув: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. KEN, Puławska, Płaskowickiej і Indiry Gandhi, а також з підземних паркінгів торгових центрів Atrium Reduta і Galeria Mokotów і з зони Kabaty, Natolin, Stokłosy і Imielin. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Урсинув?",
      blocks: [
        { title: "Головні вулиці Урсинув — знаємо маршрути", text: "Найчастіше виїжджаємо на al. KEN, Puławska і Płaskowickiej. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Урсинув) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Atrium Reduta і Galeria Mokotów, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Урсинув часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Kabaty та Natolin." }
      ],
      h2transport: "Лафета Урсинув — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Урсинуві? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Урсинув",
      helpIntro: "У Урсинув надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Урсинуві — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Atrium Reduta та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Урсинув. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'bielany': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Bielany: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Marymoncka, Trakt Rejowski, Żeromskiego i Podczaszyńskiego, a także z parkingów podziemnych centrów handlowych CH Lider i Galeria Bielany oraz z rejonu Młociny, Słodowiec i Lasek Bielański. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Bielanach?",
      blocks: [
        { title: "Główne ulice Bielany — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Marymoncka, Trakt Rejowski i Żeromskiego. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Bielany) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Lider i Galeria Bielany oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Bielanach często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Młociny i Słodowiec." }
      ],
      h2transport: "Laweta Bielany — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Bielanach? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Bielanach",
      helpIntro: "W Bielanach oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Bielanach — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Lider i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Bielanach. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Bielany district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Marymoncka, Trakt Rejowski, Żeromskiego and Podczaszyńskiego, and from underground car parks at CH Lider and Galeria Bielany as well as the Młociny, Słodowiec and Lasek Bielański area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Bielany?",
      blocks: [
        { title: "Main streets in Bielany — we know the routes", text: "We regularly respond on Marymoncka, Trakt Rejowski and Żeromskiego. In rush hour we take the fastest access roads — towing around Warsaw in Bielany is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Lider and Galeria Bielany and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Bielany we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Młociny and Słodowiec." }
      ],
      h2transport: "Tow truck Bielany — vehicle transport 24/7",
      transport: "Need a tow truck in Bielany? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Bielany",
      helpIntro: "In Bielany we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Bielany — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Lider underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Bielany, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Беляны: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Marymoncka, Trakt Rejowski, Żeromskiego и Podczaszyńskiego, а также с подземных паркингов торговых центров CH Lider и Galeria Bielany и из зоны Młociny, Słodowiec и Lasek Bielański. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Беляны?",
      blocks: [
        { title: "Главные улицы Беляны — знаем маршруты", text: "Чаще всего выезжаем на Marymoncka, Trakt Rejowski и Żeromskiego. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Беляны) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Lider и Galeria Bielany, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Беляны часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Młociny и Słodowiec." }
      ],
      h2transport: "Лавета Беляны — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Белянах? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Беляны",
      helpIntro: "В Беляны делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Белянах — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Lider и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Беляны. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Біляни: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Marymoncka, Trakt Rejowski, Żeromskiego і Podczaszyńskiego, а також з підземних паркінгів торгових центрів CH Lider і Galeria Bielany і з зони Młociny, Słodowiec і Lasek Bielański. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Біляни?",
      blocks: [
        { title: "Головні вулиці Біляни — знаємо маршрути", text: "Найчастіше виїжджаємо на Marymoncka, Trakt Rejowski і Żeromskiego. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Біляни) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Lider і Galeria Bielany, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Біляни часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Młociny та Słodowiec." }
      ],
      h2transport: "Лафета Біляни — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Білянах? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Біляни",
      helpIntro: "У Біляни надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Білянах — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Lider та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Біляни. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'bemowo': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Bemowo: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Górczewska, Lazurowa, Powstańców Śląskich i Połczyńska, a także z parkingów podziemnych centrów handlowych CH Bemowo i Fort Wola oraz z rejonu Lotnisko Chopina, Górce, Karolin i Fort Bema. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Bemowie?",
      blocks: [
        { title: "Główne ulice Bemowo — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Górczewska, Lazurowa i Powstańców Śląskich. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Bemowo) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Bemowo i Fort Wola oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Bemowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Lotnisko Chopina i Górce." }
      ],
      h2transport: "Laweta Bemowo — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Bemowie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Bemowie",
      helpIntro: "W Bemowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Bemowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Bemowo i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Bemowie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Bemowo district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Górczewska, Lazurowa, Powstańców Śląskich and Połczyńska, and from underground car parks at CH Bemowo and Fort Wola as well as the Lotnisko Chopina, Górce, Karolin and Fort Bema area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Bemowo?",
      blocks: [
        { title: "Main streets in Bemowo — we know the routes", text: "We regularly respond on Górczewska, Lazurowa and Powstańców Śląskich. In rush hour we take the fastest access roads — towing around Warsaw in Bemowo is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Bemowo and Fort Wola and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Bemowo we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Lotnisko Chopina and Górce." }
      ],
      h2transport: "Tow truck Bemowo — vehicle transport 24/7",
      transport: "Need a tow truck in Bemowo? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Bemowo",
      helpIntro: "In Bemowo we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Bemowo — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Bemowo underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Bemowo, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Бемово: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Górczewska, Lazurowa, Powstańców Śląskich и Połczyńska, а также с подземных паркингов торговых центров CH Bemowo и Fort Wola и из зоны Lotnisko Chopina, Górce, Karolin и Fort Bema. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Бемово?",
      blocks: [
        { title: "Главные улицы Бемово — знаем маршруты", text: "Чаще всего выезжаем на Górczewska, Lazurowa и Powstańców Śląskich. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Бемово) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Bemowo и Fort Wola, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Бемово часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Lotnisko Chopina и Górce." }
      ],
      h2transport: "Лавета Бемово — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Бемово? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Бемово",
      helpIntro: "В Бемово делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Бемово — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Bemowo и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Бемово. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Бемово: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Górczewska, Lazurowa, Powstańców Śląskich і Połczyńska, а також з підземних паркінгів торгових центрів CH Bemowo і Fort Wola і з зони Lotnisko Chopina, Górce, Karolin і Fort Bema. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Бемово?",
      blocks: [
        { title: "Головні вулиці Бемово — знаємо маршрути", text: "Найчастіше виїжджаємо на Górczewska, Lazurowa і Powstańców Śląskich. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Бемово) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Bemowo і Fort Wola, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Бемово часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Lotnisko Chopina та Górce." }
      ],
      h2transport: "Лафета Бемово — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Бемово? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Бемово",
      helpIntro: "У Бемово надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Бемово — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Bemowo та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Бемово. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'targowek': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Targówek: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Trakt Brzeski, Św. Wincentego, Radzymińska i Kondratowicza, a także z parkingów podziemnych centrów handlowych CH Targówek i M1 Marki oraz z rejonu Bródno, Zacisze i Targówek Mieszkaniowy. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Targówku?",
      blocks: [
        { title: "Główne ulice Targówek — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Trakt Brzeski, Św. Wincentego i Radzymińska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Targówek) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Targówek i M1 Marki oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Targówku często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Bródno i Zacisze." }
      ],
      h2transport: "Laweta Targówek — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Targówku? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Targówku",
      helpIntro: "W Targówku oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Targówku — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Targówek i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Targówku. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Targówek district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Trakt Brzeski, Św. Wincentego, Radzymińska and Kondratowicza, and from underground car parks at CH Targówek and M1 Marki as well as the Bródno, Zacisze and Targówek Mieszkaniowy area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Targówek?",
      blocks: [
        { title: "Main streets in Targówek — we know the routes", text: "We regularly respond on Trakt Brzeski, Św. Wincentego and Radzymińska. In rush hour we take the fastest access roads — towing around Warsaw in Targówek is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Targówek and M1 Marki and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Targówek we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Bródno and Zacisze." }
      ],
      h2transport: "Tow truck Targówek — vehicle transport 24/7",
      transport: "Need a tow truck in Targówek? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Targówek",
      helpIntro: "In Targówek we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Targówek — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Targówek underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Targówek, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Таргувек: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Trakt Brzeski, Św. Wincentego, Radzymińska и Kondratowicza, а также с подземных паркингов торговых центров CH Targówek и M1 Marki и из зоны Bródno, Zacisze и Targówek Mieszkaniowy. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Таргувек?",
      blocks: [
        { title: "Главные улицы Таргувек — знаем маршруты", text: "Чаще всего выезжаем на Trakt Brzeski, Św. Wincentego и Radzymińska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Таргувек) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Targówek и M1 Marki, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Таргувек часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Bródno и Zacisze." }
      ],
      h2transport: "Лавета Таргувек — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Таргувеке? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Таргувек",
      helpIntro: "В Таргувек делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Таргувеке — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Targówek и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Таргувек. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Таргувек: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Trakt Brzeski, Św. Wincentego, Radzymińska і Kondratowicza, а також з підземних паркінгів торгових центрів CH Targówek і M1 Marki і з зони Bródno, Zacisze і Targówek Mieszkaniowy. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Таргувек?",
      blocks: [
        { title: "Головні вулиці Таргувек — знаємо маршрути", text: "Найчастіше виїжджаємо на Trakt Brzeski, Św. Wincentego і Radzymińska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Таргувек) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Targówek і M1 Marki, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Таргувек часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Bródno та Zacisze." }
      ],
      h2transport: "Лафета Таргувек — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Таргувеку? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Таргувек",
      helpIntro: "У Таргувек надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Таргувеку — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Targówek та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Таргувек. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'ochota': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Ochota: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Grójecka, Aleje Jerozolimskie i Raszyńska, a także z parkingów podziemnych centrów handlowych Blue City i CH Reduta oraz z rejonu Dworzec Zachodni, Rakowiec i Szczęśliwice. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Ochocie?",
      blocks: [
        { title: "Główne ulice Ochota — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Grójecka, Aleje Jerozolimskie i Raszyńska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Ochota) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Blue City i CH Reduta oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Ochocie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Dworzec Zachodni i Rakowiec." }
      ],
      h2transport: "Laweta Ochota — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Ochocie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Ochocie",
      helpIntro: "W Ochocie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Ochocie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Blue City i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Ochocie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Ochota district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Grójecka, Aleje Jerozolimskie and Raszyńska, and from underground car parks at Blue City and CH Reduta as well as the Dworzec Zachodni, Rakowiec and Szczęśliwice area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Ochota?",
      blocks: [
        { title: "Main streets in Ochota — we know the routes", text: "We regularly respond on Grójecka, Aleje Jerozolimskie and Raszyńska. In rush hour we take the fastest access roads — towing around Warsaw in Ochota is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Blue City and CH Reduta and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Ochota we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Dworzec Zachodni and Rakowiec." }
      ],
      h2transport: "Tow truck Ochota — vehicle transport 24/7",
      transport: "Need a tow truck in Ochota? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Ochota",
      helpIntro: "In Ochota we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Ochota — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Blue City underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Ochota, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Охота: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Grójecka, Aleje Jerozolimskie и Raszyńska, а также с подземных паркингов торговых центров Blue City и CH Reduta и из зоны Dworzec Zachodni, Rakowiec и Szczęśliwice. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Охота?",
      blocks: [
        { title: "Главные улицы Охота — знаем маршруты", text: "Чаще всего выезжаем на Grójecka, Aleje Jerozolimskie и Raszyńska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Охота) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Blue City и CH Reduta, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Охота часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Dworzec Zachodni и Rakowiec." }
      ],
      h2transport: "Лавета Охота — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Охоте? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Охота",
      helpIntro: "В Охота делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Охоте — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Blue City и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Охота. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Охота: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Grójecka, Aleje Jerozolimskie і Raszyńska, а також з підземних паркінгів торгових центрів Blue City і CH Reduta і з зони Dworzec Zachodni, Rakowiec і Szczęśliwice. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Охота?",
      blocks: [
        { title: "Головні вулиці Охота — знаємо маршрути", text: "Найчастіше виїжджаємо на Grójecka, Aleje Jerozolimskie і Raszyńska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Охота) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Blue City і CH Reduta, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Охота часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Dworzec Zachodni та Rakowiec." }
      ],
      h2transport: "Лафета Охота — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Охоті? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Охота",
      helpIntro: "У Охота надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Охоті — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Blue City та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Охота. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'wawer': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Wawer: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Wał Miedzeszyński, Trakt Lubelski i Żegańska, a także z parkingów podziemnych centrów handlowych Auchan King Cross i CH Promenada oraz z rejonu Falenica, Anin i Międzylesie. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Wawrze?",
      blocks: [
        { title: "Główne ulice Wawer — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Wał Miedzeszyński, Trakt Lubelski i Żegańska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Wawer) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Auchan King Cross i CH Promenada oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Wawrze często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Falenica i Anin." }
      ],
      h2transport: "Laweta Wawer — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Wawrze? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Wawrze",
      helpIntro: "W Wawrze oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Wawrze — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Auchan King Cross i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Wawrze. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Wawer district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Wał Miedzeszyński, Trakt Lubelski and Żegańska, and from underground car parks at Auchan King Cross and CH Promenada as well as the Falenica, Anin and Międzylesie area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Wawer?",
      blocks: [
        { title: "Main streets in Wawer — we know the routes", text: "We regularly respond on Wał Miedzeszyński, Trakt Lubelski and Żegańska. In rush hour we take the fastest access roads — towing around Warsaw in Wawer is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Auchan King Cross and CH Promenada and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Wawer we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Falenica and Anin." }
      ],
      h2transport: "Tow truck Wawer — vehicle transport 24/7",
      transport: "Need a tow truck in Wawer? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Wawer",
      helpIntro: "In Wawer we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Wawer — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Auchan King Cross underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Wawer, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Вавер: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Wał Miedzeszyński, Trakt Lubelski и Żegańska, а также с подземных паркингов торговых центров Auchan King Cross и CH Promenada и из зоны Falenica, Anin и Międzylesie. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Вавер?",
      blocks: [
        { title: "Главные улицы Вавер — знаем маршруты", text: "Чаще всего выезжаем на Wał Miedzeszyński, Trakt Lubelski и Żegańska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Вавер) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Auchan King Cross и CH Promenada, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Вавер часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Falenica и Anin." }
      ],
      h2transport: "Лавета Вавер — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Вавере? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Вавер",
      helpIntro: "В Вавер делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Вавере — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Auchan King Cross и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Вавер. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Вавер: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Wał Miedzeszyński, Trakt Lubelski і Żegańska, а також з підземних паркінгів торгових центрів Auchan King Cross і CH Promenada і з зони Falenica, Anin і Międzylesie. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Вавер?",
      blocks: [
        { title: "Головні вулиці Вавер — знаємо маршрути", text: "Найчастіше виїжджаємо на Wał Miedzeszyński, Trakt Lubelski і Żegańska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Вавер) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Auchan King Cross і CH Promenada, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Вавер часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Falenica та Anin." }
      ],
      h2transport: "Лафета Вавер — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Вавері? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Вавер",
      helpIntro: "У Вавер надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Вавері — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Auchan King Cross та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Вавер. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'bialoleka': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Białołęka: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Modlińska, Marywilska, Światowida i Mehoffera, a także z parkingów podziemnych centrów handlowych CH Galeria Północna i M1 Marki oraz z rejonu Tarchomin, Nowodwory i Choszczówka. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Białołęce?",
      blocks: [
        { title: "Główne ulice Białołęka — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Modlińska, Marywilska i Światowida. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Białołęka) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Galeria Północna i M1 Marki oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Białołęce często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Tarchomin i Nowodwory." }
      ],
      h2transport: "Laweta Białołęka — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Białołęce? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Białołęce",
      helpIntro: "W Białołęce oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Białołęce — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Galeria Północna i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Białołęce. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Białołęka district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Modlińska, Marywilska, Światowida and Mehoffera, and from underground car parks at CH Galeria Północna and M1 Marki as well as the Tarchomin, Nowodwory and Choszczówka area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Białołęka?",
      blocks: [
        { title: "Main streets in Białołęka — we know the routes", text: "We regularly respond on Modlińska, Marywilska and Światowida. In rush hour we take the fastest access roads — towing around Warsaw in Białołęka is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Galeria Północna and M1 Marki and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Białołęka we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Tarchomin and Nowodwory." }
      ],
      h2transport: "Tow truck Białołęka — vehicle transport 24/7",
      transport: "Need a tow truck in Białołęka? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Białołęka",
      helpIntro: "In Białołęka we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Białołęka — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Galeria Północna underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Białołęka, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Бялоленка: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Modlińska, Marywilska, Światowida и Mehoffera, а также с подземных паркингов торговых центров CH Galeria Północna и M1 Marki и из зоны Tarchomin, Nowodwory и Choszczówka. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Бялоленка?",
      blocks: [
        { title: "Главные улицы Бялоленка — знаем маршруты", text: "Чаще всего выезжаем на Modlińska, Marywilska и Światowida. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Бялоленка) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Galeria Północna и M1 Marki, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Бялоленка часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Tarchomin и Nowodwory." }
      ],
      h2transport: "Лавета Бялоленка — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Бялоленке? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Бялоленка",
      helpIntro: "В Бялоленка делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Бялоленке — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Galeria Północna и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Бялоленка. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Бялоленка: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Modlińska, Marywilska, Światowida і Mehoffera, а також з підземних паркінгів торгових центрів CH Galeria Północna і M1 Marki і з зони Tarchomin, Nowodwory і Choszczówka. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Бялоленка?",
      blocks: [
        { title: "Головні вулиці Бялоленка — знаємо маршрути", text: "Найчастіше виїжджаємо на Modlińska, Marywilska і Światowida. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Бялоленка) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Galeria Północna і M1 Marki, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Бялоленка часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Tarchomin та Nowodwory." }
      ],
      h2transport: "Лафета Бялоленка — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Бялоленці? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Бялоленка",
      helpIntro: "У Бялоленка надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Бялоленці — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Galeria Północna та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Бялоленка. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'wilanow': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Wilanów: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. Rzeczypospolitej, Przyczółkowa, Klimczaka i Sarmacka, a także z parkingów podziemnych centrów handlowych Wilanów Park i Galeria Wilanów oraz z rejonu Miasteczko Wilanów, Pałac w Wilanowie i Powsin. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Wilanowie?",
      blocks: [
        { title: "Główne ulice Wilanów — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. Rzeczypospolitej, Przyczółkowa i Klimczaka. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Wilanów) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Wilanów Park i Galeria Wilanów oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Wilanowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Miasteczko Wilanów i Pałac w Wilanowie." }
      ],
      h2transport: "Laweta Wilanów — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Wilanowie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Wilanowie",
      helpIntro: "W Wilanowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Wilanowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Wilanów Park i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Wilanowie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Wilanów district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. Rzeczypospolitej, Przyczółkowa, Klimczaka and Sarmacka, and from underground car parks at Wilanów Park and Galeria Wilanów as well as the Miasteczko Wilanów, Pałac w Wilanowie and Powsin area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Wilanów?",
      blocks: [
        { title: "Main streets in Wilanów — we know the routes", text: "We regularly respond on al. Rzeczypospolitej, Przyczółkowa and Klimczaka. In rush hour we take the fastest access roads — towing around Warsaw in Wilanów is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Wilanów Park and Galeria Wilanów and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Wilanów we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Miasteczko Wilanów and Pałac w Wilanowie." }
      ],
      h2transport: "Tow truck Wilanów — vehicle transport 24/7",
      transport: "Need a tow truck in Wilanów? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Wilanów",
      helpIntro: "In Wilanów we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Wilanów — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Wilanów Park underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Wilanów, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Виланув: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. Rzeczypospolitej, Przyczółkowa, Klimczaka и Sarmacka, а также с подземных паркингов торговых центров Wilanów Park и Galeria Wilanów и из зоны Miasteczko Wilanów, Pałac w Wilanowie и Powsin. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Виланув?",
      blocks: [
        { title: "Главные улицы Виланув — знаем маршруты", text: "Чаще всего выезжаем на al. Rzeczypospolitej, Przyczółkowa и Klimczaka. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Виланув) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Wilanów Park и Galeria Wilanów, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Виланув часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Miasteczko Wilanów и Pałac w Wilanowie." }
      ],
      h2transport: "Лавета Виланув — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Вилануве? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Виланув",
      helpIntro: "В Виланув делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Вилануве — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Wilanów Park и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Виланув. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Вілянув: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. Rzeczypospolitej, Przyczółkowa, Klimczaka і Sarmacka, а також з підземних паркінгів торгових центрів Wilanów Park і Galeria Wilanów і з зони Miasteczko Wilanów, Pałac w Wilanowie і Powsin. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Вілянув?",
      blocks: [
        { title: "Головні вулиці Вілянув — знаємо маршрути", text: "Найчастіше виїжджаємо на al. Rzeczypospolitej, Przyczółkowa і Klimczaka. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Вілянув) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Wilanów Park і Galeria Wilanów, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Вілянув часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Miasteczko Wilanów та Pałac w Wilanowie." }
      ],
      h2transport: "Лафета Вілянув — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Вілянуві? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Вілянув",
      helpIntro: "У Вілянув надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Вілянуві — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Wilanów Park та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Вілянув. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'ursus': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Ursus: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. Czechowicka, Posag 7 Panien i Bodycha, a także z parkingów podziemnych centrów handlowych Factory Ursus i CH Skorosze oraz z rejonu Czechowice, Skorosze i Niedźwiadek. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Ursusie?",
      blocks: [
        { title: "Główne ulice Ursus — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. Czechowicka, Posag 7 Panien i Bodycha. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Ursus) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Factory Ursus i CH Skorosze oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Ursusie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Czechowice i Skorosze." }
      ],
      h2transport: "Laweta Ursus — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Ursusie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Ursusie",
      helpIntro: "W Ursusie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Ursusie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Factory Ursus i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Ursusie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Ursus district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. Czechowicka, Posag 7 Panien and Bodycha, and from underground car parks at Factory Ursus and CH Skorosze as well as the Czechowice, Skorosze and Niedźwiadek area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Ursus?",
      blocks: [
        { title: "Main streets in Ursus — we know the routes", text: "We regularly respond on al. Czechowicka, Posag 7 Panien and Bodycha. In rush hour we take the fastest access roads — towing around Warsaw in Ursus is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Factory Ursus and CH Skorosze and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Ursus we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Czechowice and Skorosze." }
      ],
      h2transport: "Tow truck Ursus — vehicle transport 24/7",
      transport: "Need a tow truck in Ursus? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Ursus",
      helpIntro: "In Ursus we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Ursus — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Factory Ursus underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Ursus, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Урсус: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. Czechowicka, Posag 7 Panien и Bodycha, а также с подземных паркингов торговых центров Factory Ursus и CH Skorosze и из зоны Czechowice, Skorosze и Niedźwiadek. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Урсус?",
      blocks: [
        { title: "Главные улицы Урсус — знаем маршруты", text: "Чаще всего выезжаем на al. Czechowicka, Posag 7 Panien и Bodycha. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Урсус) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Factory Ursus и CH Skorosze, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Урсус часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Czechowice и Skorosze." }
      ],
      h2transport: "Лавета Урсус — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Урсусе? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Урсус",
      helpIntro: "В Урсус делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Урсусе — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Factory Ursus и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Урсус. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Урсус: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. Czechowicka, Posag 7 Panien і Bodycha, а також з підземних паркінгів торгових центрів Factory Ursus і CH Skorosze і з зони Czechowice, Skorosze і Niedźwiadek. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Урсус?",
      blocks: [
        { title: "Головні вулиці Урсус — знаємо маршрути", text: "Найчастіше виїжджаємо на al. Czechowicka, Posag 7 Panien і Bodycha. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Урсус) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Factory Ursus і CH Skorosze, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Урсус часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Czechowice та Skorosze." }
      ],
      h2transport: "Лафета Урсус — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Урсусі? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Урсус",
      helpIntro: "У Урсус надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Урсусі — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Factory Ursus та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Урсус. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'wlochy': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Włochy: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. Krakowska, 1 Sierpnia i Popularna, a także z parkingów podziemnych centrów handlowych CH Blue City i Factory Annopol oraz z rejonu Lotnisko Chopina, Okęcie i Salomea. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Włochach?",
      blocks: [
        { title: "Główne ulice Włochy — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. Krakowska, 1 Sierpnia i Popularna. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Włochy) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Blue City i Factory Annopol oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Włochach często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Lotnisko Chopina i Okęcie." }
      ],
      h2transport: "Laweta Włochy — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Włochach? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Włochach",
      helpIntro: "W Włochach oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Włochach — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Blue City i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Włochach. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Włochy district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. Krakowska, 1 Sierpnia and Popularna, and from underground car parks at CH Blue City and Factory Annopol as well as the Lotnisko Chopina, Okęcie and Salomea area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Włochy?",
      blocks: [
        { title: "Main streets in Włochy — we know the routes", text: "We regularly respond on al. Krakowska, 1 Sierpnia and Popularna. In rush hour we take the fastest access roads — towing around Warsaw in Włochy is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Blue City and Factory Annopol and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Włochy we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Lotnisko Chopina and Okęcie." }
      ],
      h2transport: "Tow truck Włochy — vehicle transport 24/7",
      transport: "Need a tow truck in Włochy? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Włochy",
      helpIntro: "In Włochy we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Włochy — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Blue City underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Włochy, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Влохи: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. Krakowska, 1 Sierpnia и Popularna, а также с подземных паркингов торговых центров CH Blue City и Factory Annopol и из зоны Lotnisko Chopina, Okęcie и Salomea. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Влохи?",
      blocks: [
        { title: "Главные улицы Влохи — знаем маршруты", text: "Чаще всего выезжаем на al. Krakowska, 1 Sierpnia и Popularna. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Влохи) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Blue City и Factory Annopol, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Влохи часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Lotnisko Chopina и Okęcie." }
      ],
      h2transport: "Лавета Влохи — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Влохах? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Влохи",
      helpIntro: "В Влохи делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Влохах — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Blue City и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Влохи. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Влохи: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. Krakowska, 1 Sierpnia і Popularna, а також з підземних паркінгів торгових центрів CH Blue City і Factory Annopol і з зони Lotnisko Chopina, Okęcie і Salomea. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Влохи?",
      blocks: [
        { title: "Головні вулиці Влохи — знаємо маршрути", text: "Найчастіше виїжджаємо на al. Krakowska, 1 Sierpnia і Popularna. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Влохи) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Blue City і Factory Annopol, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Влохи часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Lotnisko Chopina та Okęcie." }
      ],
      h2transport: "Лафета Влохи — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Влохах? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Влохи",
      helpIntro: "У Влохи надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Влохах — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Blue City та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Влохи. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'rembertow': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Rembertów: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. gen. A. Chruściela, Żołnierska i Chełmżyńska, a także z parkingów podziemnych centrów handlowych CH King Cross i CH Promenada oraz z rejonu Kawęczyn, Nowy Rembertów i Stary Rembertów. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Rembertowie?",
      blocks: [
        { title: "Główne ulice Rembertów — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. gen. A. Chruściela, Żołnierska i Chełmżyńska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Rembertów) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH King Cross i CH Promenada oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Rembertowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Kawęczyn i Nowy Rembertów." }
      ],
      h2transport: "Laweta Rembertów — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Rembertowie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Rembertowie",
      helpIntro: "W Rembertowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Rembertowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH King Cross i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Rembertowie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Rembertów district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. gen. A. Chruściela, Żołnierska and Chełmżyńska, and from underground car parks at CH King Cross and CH Promenada as well as the Kawęczyn, Nowy Rembertów and Stary Rembertów area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Rembertów?",
      blocks: [
        { title: "Main streets in Rembertów — we know the routes", text: "We regularly respond on al. gen. A. Chruściela, Żołnierska and Chełmżyńska. In rush hour we take the fastest access roads — towing around Warsaw in Rembertów is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH King Cross and CH Promenada and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Rembertów we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Kawęczyn and Nowy Rembertów." }
      ],
      h2transport: "Tow truck Rembertów — vehicle transport 24/7",
      transport: "Need a tow truck in Rembertów? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Rembertów",
      helpIntro: "In Rembertów we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Rembertów — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH King Cross underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Rembertów, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Рембертув: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. gen. A. Chruściela, Żołnierska и Chełmżyńska, а также с подземных паркингов торговых центров CH King Cross и CH Promenada и из зоны Kawęczyn, Nowy Rembertów и Stary Rembertów. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Рембертув?",
      blocks: [
        { title: "Главные улицы Рембертув — знаем маршруты", text: "Чаще всего выезжаем на al. gen. A. Chruściela, Żołnierska и Chełmżyńska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Рембертув) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH King Cross и CH Promenada, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Рембертув часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Kawęczyn и Nowy Rembertów." }
      ],
      h2transport: "Лавета Рембертув — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Рембертуве? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Рембертув",
      helpIntro: "В Рембертув делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Рембертуве — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH King Cross и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Рембертув. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Рембертув: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. gen. A. Chruściela, Żołnierska і Chełmżyńska, а також з підземних паркінгів торгових центрів CH King Cross і CH Promenada і з зони Kawęczyn, Nowy Rembertów і Stary Rembertów. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Рембертув?",
      blocks: [
        { title: "Головні вулиці Рембертув — знаємо маршрути", text: "Найчастіше виїжджаємо на al. gen. A. Chruściela, Żołnierska і Chełmżyńska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Рембертув) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH King Cross і CH Promenada, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Рембертув часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Kawęczyn та Nowy Rembertów." }
      ],
      h2transport: "Лафета Рембертув — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Рембертуві? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Рембертув",
      helpIntro: "У Рембертув надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Рембертуві — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH King Cross та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Рембертув. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'wesola': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Wesoła: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Trakt Brzeski, 1 Praskiego Pułku i Niemcewicza, a także z parkingów podziemnych centrów handlowych Galeria Wileńska i CH Promenada oraz z rejonu Stara Miłosna, Wola Grzybowska i Zielona. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Wesołej?",
      blocks: [
        { title: "Główne ulice Wesoła — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Trakt Brzeski, 1 Praskiego Pułku i Niemcewicza. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Wesoła) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Galeria Wileńska i CH Promenada oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Wesołej często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Stara Miłosna i Wola Grzybowska." }
      ],
      h2transport: "Laweta Wesoła — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Wesołej? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Wesołej",
      helpIntro: "W Wesołej oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Wesołej — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Galeria Wileńska i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Wesołej. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Wesoła district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Trakt Brzeski, 1 Praskiego Pułku and Niemcewicza, and from underground car parks at Galeria Wileńska and CH Promenada as well as the Stara Miłosna, Wola Grzybowska and Zielona area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Wesoła?",
      blocks: [
        { title: "Main streets in Wesoła — we know the routes", text: "We regularly respond on Trakt Brzeski, 1 Praskiego Pułku and Niemcewicza. In rush hour we take the fastest access roads — towing around Warsaw in Wesoła is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Galeria Wileńska and CH Promenada and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Wesoła we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Stara Miłosna and Wola Grzybowska." }
      ],
      h2transport: "Tow truck Wesoła — vehicle transport 24/7",
      transport: "Need a tow truck in Wesoła? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Wesoła",
      helpIntro: "In Wesoła we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Wesoła — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Galeria Wileńska underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Wesoła, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Весола: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Trakt Brzeski, 1 Praskiego Pułku и Niemcewicza, а также с подземных паркингов торговых центров Galeria Wileńska и CH Promenada и из зоны Stara Miłosna, Wola Grzybowska и Zielona. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Весола?",
      blocks: [
        { title: "Главные улицы Весола — знаем маршруты", text: "Чаще всего выезжаем на Trakt Brzeski, 1 Praskiego Pułku и Niemcewicza. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Весола) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Galeria Wileńska и CH Promenada, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Весола часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Stara Miłosna и Wola Grzybowska." }
      ],
      h2transport: "Лавета Весола — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Весолой? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Весола",
      helpIntro: "В Весола делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Весолой — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Galeria Wileńska и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Весола. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Весола: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Trakt Brzeski, 1 Praskiego Pułku і Niemcewicza, а також з підземних паркінгів торгових центрів Galeria Wileńska і CH Promenada і з зони Stara Miłosna, Wola Grzybowska і Zielona. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Весола?",
      blocks: [
        { title: "Головні вулиці Весола — знаємо маршрути", text: "Найчастіше виїжджаємо на Trakt Brzeski, 1 Praskiego Pułku і Niemcewicza. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Весола) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Galeria Wileńska і CH Promenada, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Весола часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Stara Miłosna та Wola Grzybowska." }
      ],
      h2transport: "Лафета Весола — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Весолій? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Весола",
      helpIntro: "У Весола надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Весолій — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Galeria Wileńska та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Весола. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'zoliborz': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — dzielnica Żoliborz: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. Wojska Polskiego, Mickiewicza, Krasińskiego i Potocka, a także z parkingów podziemnych centrów handlowych Arkadia i CH Klif oraz z rejonu Plac Wilsona, Stary Żoliborz i Marymont. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Żoliborzu?",
      blocks: [
        { title: "Główne ulice Żoliborz — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. Wojska Polskiego, Mickiewicza i Krasińskiego. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Żoliborz) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Arkadia i CH Klif oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Żoliborzu często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Plac Wilsona i Stary Żoliborz." }
      ],
      h2transport: "Laweta Żoliborz — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Żoliborzu? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Żoliborzu",
      helpIntro: "W Żoliborzu oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Żoliborzu — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Arkadia i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Żoliborzu. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Żoliborz district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. Wojska Polskiego, Mickiewicza, Krasińskiego and Potocka, and from underground car parks at Arkadia and CH Klif as well as the Plac Wilsona, Stary Żoliborz and Marymont area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Żoliborz?",
      blocks: [
        { title: "Main streets in Żoliborz — we know the routes", text: "We regularly respond on al. Wojska Polskiego, Mickiewicza and Krasińskiego. In rush hour we take the fastest access roads — towing around Warsaw in Żoliborz is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Arkadia and CH Klif and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Żoliborz we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Plac Wilsona and Stary Żoliborz." }
      ],
      h2transport: "Tow truck Żoliborz — vehicle transport 24/7",
      transport: "Need a tow truck in Żoliborz? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Żoliborz",
      helpIntro: "In Żoliborz we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Żoliborz — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Arkadia underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Żoliborz, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Жолибож: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. Wojska Polskiego, Mickiewicza, Krasińskiego и Potocka, а также с подземных паркингов торговых центров Arkadia и CH Klif и из зоны Plac Wilsona, Stary Żoliborz и Marymont. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Жолибож?",
      blocks: [
        { title: "Главные улицы Жолибож — знаем маршруты", text: "Чаще всего выезжаем на al. Wojska Polskiego, Mickiewicza и Krasińskiego. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Жолибож) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Arkadia и CH Klif, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Жолибож часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Plac Wilsona и Stary Żoliborz." }
      ],
      h2transport: "Лавета Жолибож — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Жолибоже? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Жолибож",
      helpIntro: "В Жолибож делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Жолибоже — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Arkadia и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Жолибож. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Жолібож: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. Wojska Polskiego, Mickiewicza, Krasińskiego і Potocka, а також з підземних паркінгів торгових центрів Arkadia і CH Klif і з зони Plac Wilsona, Stary Żoliborz і Marymont. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Жолібож?",
      blocks: [
        { title: "Головні вулиці Жолібож — знаємо маршрути", text: "Найчастіше виїжджаємо на al. Wojska Polskiego, Mickiewicza і Krasińskiego. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Жолібож) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Arkadia і CH Klif, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Жолібож часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Plac Wilsona та Stary Żoliborz." }
      ],
      h2transport: "Лафета Жолібож — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Жолібожі? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Жолібож",
      helpIntro: "У Жолібож надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Жолібожі — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Arkadia та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Жолібож. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'zabki': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Ząbki: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Powstańców, ul. Orla, ul. Piłsudskiego i ul. Kolejowa, a także z parkingów podziemnych centrów handlowych Galeria Ząbki i CH Marki (blisko) oraz z rejonu Ząbki Centrum, DK8 / Radzymińska i granica z Targówkiem. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Ząbkach?",
      blocks: [
        { title: "Główne ulice Ząbki — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Powstańców, ul. Orla i ul. Piłsudskiego. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Ząbki) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Galeria Ząbki i CH Marki (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Ząbkach często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Ząbki Centrum i DK8 / Radzymińska." }
      ],
      h2transport: "Laweta Ząbki — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Ząbkach? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Ząbkach",
      helpIntro: "W Ząbkach oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Ząbkach — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Galeria Ząbki i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Ząbkach. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Ząbki: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Powstańców, ul. Orla, ul. Piłsudskiego and ul. Kolejowa, and from underground car parks at Galeria Ząbki and CH Marki (blisko) as well as the Ząbki Centrum, DK8 / Radzymińska and granica z Targówkiem area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Ząbki?",
      blocks: [
        { title: "Main streets in Ząbki — we know the routes", text: "We regularly respond on ul. Powstańców, ul. Orla and ul. Piłsudskiego. In rush hour we take the fastest access roads — towing around Warsaw in Ząbki is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Galeria Ząbki and CH Marki (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Ząbki we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Ząbki Centrum and DK8 / Radzymińska." }
      ],
      h2transport: "Tow truck Ząbki — vehicle transport 24/7",
      transport: "Need a tow truck in Ząbki? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Ząbki",
      helpIntro: "In Ząbki we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Ząbki — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Galeria Ząbki underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Ząbki, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Зомбки: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Powstańców, ul. Orla, ul. Piłsudskiego и ul. Kolejowa, а также с подземных паркингов торговых центров Galeria Ząbki и CH Marki (blisko) и из зоны Ząbki Centrum, DK8 / Radzymińska и granica z Targówkiem. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Зомбки?",
      blocks: [
        { title: "Главные улицы Зомбки — знаем маршруты", text: "Чаще всего выезжаем на ul. Powstańców, ul. Orla и ul. Piłsudskiego. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Зомбки) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Galeria Ząbki и CH Marki (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Зомбки часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Ząbki Centrum и DK8 / Radzymińska." }
      ],
      h2transport: "Лавета Зомбки — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Зомбках? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Зомбки",
      helpIntro: "В Зомбки делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Зомбках — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Galeria Ząbki и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Зомбки. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Зомбки: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Powstańców, ul. Orla, ul. Piłsudskiego і ul. Kolejowa, а також з підземних паркінгів торгових центрів Galeria Ząbki і CH Marki (blisko) і з зони Ząbki Centrum, DK8 / Radzymińska і granica z Targówkiem. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Зомбки?",
      blocks: [
        { title: "Головні вулиці Зомбки — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Powstańców, ul. Orla і ul. Piłsudskiego. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Зомбки) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Galeria Ząbki і CH Marki (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Зомбки часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Ząbki Centrum та DK8 / Radzymińska." }
      ],
      h2transport: "Лафета Зомбки — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Зомбках? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Зомбки",
      helpIntro: "У Зомбки надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Зомбках — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Galeria Ząbki та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Зомбки. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'marki': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Marki: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Piłsudskiego, ul. Fabryczna, ul. Wspólna i al. Marszałka Piłsudskiego, a także z parkingów podziemnych centrów handlowych M1 Marki i CH Marki oraz z rejonu M1 Marki, Pustelnik i Struga. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Markach?",
      blocks: [
        { title: "Główne ulice Marki — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Piłsudskiego, ul. Fabryczna i ul. Wspólna. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Marki) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych M1 Marki i CH Marki oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Markach często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie M1 Marki i Pustelnik." }
      ],
      h2transport: "Laweta Marki — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Markach? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Markach",
      helpIntro: "W Markach oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Markach — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego M1 Marki i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Markach. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Marki: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Piłsudskiego, ul. Fabryczna, ul. Wspólna and al. Marszałka Piłsudskiego, and from underground car parks at M1 Marki and CH Marki as well as the M1 Marki, Pustelnik and Struga area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Marki?",
      blocks: [
        { title: "Main streets in Marki — we know the routes", text: "We regularly respond on ul. Piłsudskiego, ul. Fabryczna and ul. Wspólna. In rush hour we take the fastest access roads — towing around Warsaw in Marki is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at M1 Marki and CH Marki and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Marki we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near M1 Marki and Pustelnik." }
      ],
      h2transport: "Tow truck Marki — vehicle transport 24/7",
      transport: "Need a tow truck in Marki? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Marki",
      helpIntro: "In Marki we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Marki — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from M1 Marki underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Marki, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Марки: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Piłsudskiego, ul. Fabryczna, ul. Wspólna и al. Marszałka Piłsudskiego, а также с подземных паркингов торговых центров M1 Marki и CH Marki и из зоны M1 Marki, Pustelnik и Struga. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Марки?",
      blocks: [
        { title: "Главные улицы Марки — знаем маршруты", text: "Чаще всего выезжаем на ul. Piłsudskiego, ul. Fabryczna и ul. Wspólna. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Марки) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов M1 Marki и CH Marki, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Марки часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у M1 Marki и Pustelnik." }
      ],
      h2transport: "Лавета Марки — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Марках? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Марки",
      helpIntro: "В Марки делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Марках — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга M1 Marki и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Марки. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Маркі: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Piłsudskiego, ul. Fabryczna, ul. Wspólna і al. Marszałka Piłsudskiego, а також з підземних паркінгів торгових центрів M1 Marki і CH Marki і з зони M1 Marki, Pustelnik і Struga. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Маркі?",
      blocks: [
        { title: "Головні вулиці Маркі — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Piłsudskiego, ul. Fabryczna і ul. Wspólna. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Маркі) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів M1 Marki і CH Marki, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Маркі часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля M1 Marki та Pustelnik." }
      ],
      h2transport: "Лафета Маркі — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Марках? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Маркі",
      helpIntro: "У Маркі надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Марках — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу M1 Marki та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Маркі. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'otwock': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Otwock: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Andriollego, ul. Armii Krajowej, ul. Warszawska i ul. Karczewska, a także z parkingów podziemnych centrów handlowych Galeria Otwock i CH Promenada (blisko) oraz z rejonu Świder, Otwock Centrum i linia SKM / kolej. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Otwocku?",
      blocks: [
        { title: "Główne ulice Otwock — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Andriollego, ul. Armii Krajowej i ul. Warszawska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Otwock) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Galeria Otwock i CH Promenada (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Otwocku często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Świder i Otwock Centrum." }
      ],
      h2transport: "Laweta Otwock — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Otwocku? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Otwocku",
      helpIntro: "W Otwocku oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Otwocku — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Galeria Otwock i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Otwocku. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Otwock: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Andriollego, ul. Armii Krajowej, ul. Warszawska and ul. Karczewska, and from underground car parks at Galeria Otwock and CH Promenada (blisko) as well as the Świder, Otwock Centrum and linia SKM / kolej area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Otwock?",
      blocks: [
        { title: "Main streets in Otwock — we know the routes", text: "We regularly respond on ul. Andriollego, ul. Armii Krajowej and ul. Warszawska. In rush hour we take the fastest access roads — towing around Warsaw in Otwock is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Galeria Otwock and CH Promenada (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Otwock we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Świder and Otwock Centrum." }
      ],
      h2transport: "Tow truck Otwock — vehicle transport 24/7",
      transport: "Need a tow truck in Otwock? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Otwock",
      helpIntro: "In Otwock we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Otwock — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Galeria Otwock underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Otwock, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Отвоцк: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Andriollego, ul. Armii Krajowej, ul. Warszawska и ul. Karczewska, а также с подземных паркингов торговых центров Galeria Otwock и CH Promenada (blisko) и из зоны Świder, Otwock Centrum и linia SKM / kolej. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Отвоцк?",
      blocks: [
        { title: "Главные улицы Отвоцк — знаем маршруты", text: "Чаще всего выезжаем на ul. Andriollego, ul. Armii Krajowej и ul. Warszawska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Отвоцк) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Galeria Otwock и CH Promenada (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Отвоцк часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Świder и Otwock Centrum." }
      ],
      h2transport: "Лавета Отвоцк — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Отвоцке? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Отвоцк",
      helpIntro: "В Отвоцк делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Отвоцке — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Galeria Otwock и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Отвоцк. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Отвоцьк: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Andriollego, ul. Armii Krajowej, ul. Warszawska і ul. Karczewska, а також з підземних паркінгів торгових центрів Galeria Otwock і CH Promenada (blisko) і з зони Świder, Otwock Centrum і linia SKM / kolej. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Отвоцьк?",
      blocks: [
        { title: "Головні вулиці Отвоцьк — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Andriollego, ul. Armii Krajowej і ul. Warszawska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Отвоцьк) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Galeria Otwock і CH Promenada (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Отвоцьк часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Świder та Otwock Centrum." }
      ],
      h2transport: "Лафета Отвоцьк — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Отвоцьку? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Отвоцьк",
      helpIntro: "У Отвоцьк надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Отвоцьку — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Galeria Otwock та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Отвоцьк. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'pruszkow': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Pruszków: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Warszawska, ul. Potulicka, ul. Kraszewskiego i al. Wojska Polskiego, a także z parkingów podziemnych centrów handlowych CH Pruszków i Factory Annopol (blisko) oraz z rejonu Pruszków Centrum, Żbików i DK720 / S8. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Pruszkowie?",
      blocks: [
        { title: "Główne ulice Pruszków — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Warszawska, ul. Potulicka i ul. Kraszewskiego. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Pruszków) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Pruszków i Factory Annopol (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Pruszkowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Pruszków Centrum i Żbików." }
      ],
      h2transport: "Laweta Pruszków — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Pruszkowie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Pruszkowie",
      helpIntro: "W Pruszkowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Pruszkowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Pruszków i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Pruszkowie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Pruszków: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Warszawska, ul. Potulicka, ul. Kraszewskiego and al. Wojska Polskiego, and from underground car parks at CH Pruszków and Factory Annopol (blisko) as well as the Pruszków Centrum, Żbików and DK720 / S8 area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Pruszków?",
      blocks: [
        { title: "Main streets in Pruszków — we know the routes", text: "We regularly respond on ul. Warszawska, ul. Potulicka and ul. Kraszewskiego. In rush hour we take the fastest access roads — towing around Warsaw in Pruszków is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Pruszków and Factory Annopol (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Pruszków we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Pruszków Centrum and Żbików." }
      ],
      h2transport: "Tow truck Pruszków — vehicle transport 24/7",
      transport: "Need a tow truck in Pruszków? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Pruszków",
      helpIntro: "In Pruszków we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Pruszków — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Pruszków underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Pruszków, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Прушкув: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Warszawska, ul. Potulicka, ul. Kraszewskiego и al. Wojska Polskiego, а также с подземных паркингов торговых центров CH Pruszków и Factory Annopol (blisko) и из зоны Pruszków Centrum, Żbików и DK720 / S8. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Прушкув?",
      blocks: [
        { title: "Главные улицы Прушкув — знаем маршруты", text: "Чаще всего выезжаем на ul. Warszawska, ul. Potulicka и ul. Kraszewskiego. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Прушкув) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Pruszków и Factory Annopol (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Прушкув часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Pruszków Centrum и Żbików." }
      ],
      h2transport: "Лавета Прушкув — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Прушкуве? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Прушкув",
      helpIntro: "В Прушкув делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Прушкуве — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Pruszków и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Прушкув. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Прушкув: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Warszawska, ul. Potulicka, ul. Kraszewskiego і al. Wojska Polskiego, а також з підземних паркінгів торгових центрів CH Pruszków і Factory Annopol (blisko) і з зони Pruszków Centrum, Żbików і DK720 / S8. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Прушкув?",
      blocks: [
        { title: "Головні вулиці Прушкув — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Warszawska, ul. Potulicka і ul. Kraszewskiego. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Прушкув) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Pruszków і Factory Annopol (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Прушкув часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Pruszków Centrum та Żbików." }
      ],
      h2transport: "Лафета Прушкув — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Прушкуві? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Прушкув",
      helpIntro: "У Прушкув надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Прушкуві — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Pruszków та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Прушкув. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'piaseczno': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Piaseczno: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Puławska, ul. Warszawska, ul. Słowackiego i ul. Energetyczna, a także z parkingów podziemnych centrów handlowych Auchan Piaseczno i CH Puławska oraz z rejonu Piaseczno Centrum, Zalesie Górne i Julianów. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Piasecznie?",
      blocks: [
        { title: "Główne ulice Piaseczno — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Puławska, ul. Warszawska i ul. Słowackiego. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Piaseczno) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Auchan Piaseczno i CH Puławska oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Piasecznie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Piaseczno Centrum i Zalesie Górne." }
      ],
      h2transport: "Laweta Piaseczno — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Piasecznie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Piasecznie",
      helpIntro: "W Piasecznie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Piasecznie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Auchan Piaseczno i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Piasecznie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Piaseczno: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Puławska, ul. Warszawska, ul. Słowackiego and ul. Energetyczna, and from underground car parks at Auchan Piaseczno and CH Puławska as well as the Piaseczno Centrum, Zalesie Górne and Julianów area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Piaseczno?",
      blocks: [
        { title: "Main streets in Piaseczno — we know the routes", text: "We regularly respond on ul. Puławska, ul. Warszawska and ul. Słowackiego. In rush hour we take the fastest access roads — towing around Warsaw in Piaseczno is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Auchan Piaseczno and CH Puławska and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Piaseczno we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Piaseczno Centrum and Zalesie Górne." }
      ],
      h2transport: "Tow truck Piaseczno — vehicle transport 24/7",
      transport: "Need a tow truck in Piaseczno? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Piaseczno",
      helpIntro: "In Piaseczno we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Piaseczno — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Auchan Piaseczno underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Piaseczno, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Пясечно: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Puławska, ul. Warszawska, ul. Słowackiego и ul. Energetyczna, а также с подземных паркингов торговых центров Auchan Piaseczno и CH Puławska и из зоны Piaseczno Centrum, Zalesie Górne и Julianów. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Пясечно?",
      blocks: [
        { title: "Главные улицы Пясечно — знаем маршруты", text: "Чаще всего выезжаем на ul. Puławska, ul. Warszawska и ul. Słowackiego. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Пясечно) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Auchan Piaseczno и CH Puławska, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Пясечно часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Piaseczno Centrum и Zalesie Górne." }
      ],
      h2transport: "Лавета Пясечно — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Пясечно? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Пясечно",
      helpIntro: "В Пясечно делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Пясечно — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Auchan Piaseczno и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Пясечно. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Пясечно: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Puławska, ul. Warszawska, ul. Słowackiego і ul. Energetyczna, а також з підземних паркінгів торгових центрів Auchan Piaseczno і CH Puławska і з зони Piaseczno Centrum, Zalesie Górne і Julianów. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Пясечно?",
      blocks: [
        { title: "Головні вулиці Пясечно — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Puławska, ul. Warszawska і ul. Słowackiego. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Пясечно) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Auchan Piaseczno і CH Puławska, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Пясечно часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Piaseczno Centrum та Zalesie Górne." }
      ],
      h2transport: "Лафета Пясечно — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Пясечно? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Пясечно",
      helpIntro: "У Пясечно надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Пясечно — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Auchan Piaseczno та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Пясечно. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'legionowo': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Legionowo: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Jagiellońska, ul. Sikorskiego, ul. Warszawska i ul. Zegrzyńska, a także z parkingów podziemnych centrów handlowych CH Legionowo i Galeria Legionowo oraz z rejonu Legionowo Centrum, DK61 i linia kolejowa do Warszawy. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Legionowie?",
      blocks: [
        { title: "Główne ulice Legionowo — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Jagiellońska, ul. Sikorskiego i ul. Warszawska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Legionowo) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Legionowo i Galeria Legionowo oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Legionowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Legionowo Centrum i DK61." }
      ],
      h2transport: "Laweta Legionowo — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Legionowie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Legionowie",
      helpIntro: "W Legionowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Legionowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Legionowo i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Legionowie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Legionowo: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Jagiellońska, ul. Sikorskiego, ul. Warszawska and ul. Zegrzyńska, and from underground car parks at CH Legionowo and Galeria Legionowo as well as the Legionowo Centrum, DK61 and linia kolejowa do Warszawy area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Legionowo?",
      blocks: [
        { title: "Main streets in Legionowo — we know the routes", text: "We regularly respond on ul. Jagiellońska, ul. Sikorskiego and ul. Warszawska. In rush hour we take the fastest access roads — towing around Warsaw in Legionowo is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Legionowo and Galeria Legionowo and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Legionowo we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Legionowo Centrum and DK61." }
      ],
      h2transport: "Tow truck Legionowo — vehicle transport 24/7",
      transport: "Need a tow truck in Legionowo? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Legionowo",
      helpIntro: "In Legionowo we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Legionowo — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Legionowo underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Legionowo, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Легионово: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Jagiellońska, ul. Sikorskiego, ul. Warszawska и ul. Zegrzyńska, а также с подземных паркингов торговых центров CH Legionowo и Galeria Legionowo и из зоны Legionowo Centrum, DK61 и linia kolejowa do Warszawy. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Легионово?",
      blocks: [
        { title: "Главные улицы Легионово — знаем маршруты", text: "Чаще всего выезжаем на ul. Jagiellońska, ul. Sikorskiego и ul. Warszawska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Легионово) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Legionowo и Galeria Legionowo, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Легионово часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Legionowo Centrum и DK61." }
      ],
      h2transport: "Лавета Легионово — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Легионово? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Легионово",
      helpIntro: "В Легионово делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Легионово — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Legionowo и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Легионово. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Легіоново: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Jagiellońska, ul. Sikorskiego, ul. Warszawska і ul. Zegrzyńska, а також з підземних паркінгів торгових центрів CH Legionowo і Galeria Legionowo і з зони Legionowo Centrum, DK61 і linia kolejowa do Warszawy. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Легіоново?",
      blocks: [
        { title: "Головні вулиці Легіоново — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Jagiellońska, ul. Sikorskiego і ul. Warszawska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Легіоново) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Legionowo і Galeria Legionowo, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Легіоново часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Legionowo Centrum та DK61." }
      ],
      h2transport: "Лафета Легіоново — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Легіоново? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Легіоново",
      helpIntro: "У Легіоново надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Легіоново — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Legionowo та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Легіоново. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'wolomin': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Wołomin: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Wileńska, ul. Kościelna, ul. Legionów i ul. Warszawska, a także z parkingów podziemnych centrów handlowych CH Wołomin i M1 Marki (blisko) oraz z rejonu Wołomin Centrum, DK8 i Ossów. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Wołominie?",
      blocks: [
        { title: "Główne ulice Wołomin — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Wileńska, ul. Kościelna i ul. Legionów. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Wołomin) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Wołomin i M1 Marki (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Wołominie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Wołomin Centrum i DK8." }
      ],
      h2transport: "Laweta Wołomin — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Wołominie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Wołominie",
      helpIntro: "W Wołominie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Wołominie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Wołomin i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Wołominie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Wołomin: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Wileńska, ul. Kościelna, ul. Legionów and ul. Warszawska, and from underground car parks at CH Wołomin and M1 Marki (blisko) as well as the Wołomin Centrum, DK8 and Ossów area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Wołomin?",
      blocks: [
        { title: "Main streets in Wołomin — we know the routes", text: "We regularly respond on ul. Wileńska, ul. Kościelna and ul. Legionów. In rush hour we take the fastest access roads — towing around Warsaw in Wołomin is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Wołomin and M1 Marki (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Wołomin we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Wołomin Centrum and DK8." }
      ],
      h2transport: "Tow truck Wołomin — vehicle transport 24/7",
      transport: "Need a tow truck in Wołomin? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Wołomin",
      helpIntro: "In Wołomin we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Wołomin — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Wołomin underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Wołomin, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Воломин: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Wileńska, ul. Kościelna, ul. Legionów и ul. Warszawska, а также с подземных паркингов торговых центров CH Wołomin и M1 Marki (blisko) и из зоны Wołomin Centrum, DK8 и Ossów. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Воломин?",
      blocks: [
        { title: "Главные улицы Воломин — знаем маршруты", text: "Чаще всего выезжаем на ul. Wileńska, ul. Kościelna и ul. Legionów. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Воломин) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Wołomin и M1 Marki (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Воломин часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Wołomin Centrum и DK8." }
      ],
      h2transport: "Лавета Воломин — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Воломине? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Воломин",
      helpIntro: "В Воломин делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Воломине — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Wołomin и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Воломин. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Воломін: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Wileńska, ul. Kościelna, ul. Legionów і ul. Warszawska, а також з підземних паркінгів торгових центрів CH Wołomin і M1 Marki (blisko) і з зони Wołomin Centrum, DK8 і Ossów. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Воломін?",
      blocks: [
        { title: "Головні вулиці Воломін — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Wileńska, ul. Kościelna і ul. Legionów. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Воломін) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Wołomin і M1 Marki (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Воломін часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Wołomin Centrum та DK8." }
      ],
      h2transport: "Лафета Воломін — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Воломіні? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Воломін",
      helpIntro: "У Воломін надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Воломіні — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Wołomin та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Воломін. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'zielonka': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Zielonka: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Poniatowskiego, ul. Kolejowa, ul. Słowackiego i ul. Marek, a także z parkingów podziemnych centrów handlowych CH Zielonka i M1 Marki (blisko) oraz z rejonu Zielonka Centrum, granica z Markami i DK8. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Zielonce?",
      blocks: [
        { title: "Główne ulice Zielonka — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Poniatowskiego, ul. Kolejowa i ul. Słowackiego. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Zielonka) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Zielonka i M1 Marki (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Zielonce często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Zielonka Centrum i granica z Markami." }
      ],
      h2transport: "Laweta Zielonka — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Zielonce? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Zielonce",
      helpIntro: "W Zielonce oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Zielonce — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Zielonka i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Zielonce. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Zielonka: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Poniatowskiego, ul. Kolejowa, ul. Słowackiego and ul. Marek, and from underground car parks at CH Zielonka and M1 Marki (blisko) as well as the Zielonka Centrum, granica z Markami and DK8 area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Zielonka?",
      blocks: [
        { title: "Main streets in Zielonka — we know the routes", text: "We regularly respond on ul. Poniatowskiego, ul. Kolejowa and ul. Słowackiego. In rush hour we take the fastest access roads — towing around Warsaw in Zielonka is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Zielonka and M1 Marki (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Zielonka we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Zielonka Centrum and granica z Markami." }
      ],
      h2transport: "Tow truck Zielonka — vehicle transport 24/7",
      transport: "Need a tow truck in Zielonka? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Zielonka",
      helpIntro: "In Zielonka we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Zielonka — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Zielonka underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Zielonka, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Зеленка: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Poniatowskiego, ul. Kolejowa, ul. Słowackiego и ul. Marek, а также с подземных паркингов торговых центров CH Zielonka и M1 Marki (blisko) и из зоны Zielonka Centrum, granica z Markami и DK8. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Зеленка?",
      blocks: [
        { title: "Главные улицы Зеленка — знаем маршруты", text: "Чаще всего выезжаем на ul. Poniatowskiego, ul. Kolejowa и ul. Słowackiego. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Зеленка) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Zielonka и M1 Marki (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Зеленка часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Zielonka Centrum и granica z Markami." }
      ],
      h2transport: "Лавета Зеленка — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Зеленке? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Зеленка",
      helpIntro: "В Зеленка делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Зеленке — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Zielonka и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Зеленка. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Зеленка: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Poniatowskiego, ul. Kolejowa, ul. Słowackiego і ul. Marek, а також з підземних паркінгів торгових центрів CH Zielonka і M1 Marki (blisko) і з зони Zielonka Centrum, granica z Markami і DK8. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Зеленка?",
      blocks: [
        { title: "Головні вулиці Зеленка — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Poniatowskiego, ul. Kolejowa і ul. Słowackiego. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Зеленка) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Zielonka і M1 Marki (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Зеленка часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Zielonka Centrum та granica z Markami." }
      ],
      h2transport: "Лафета Зеленка — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Зеленці? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Зеленка",
      helpIntro: "У Зеленка надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Зеленці — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Zielonka та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Зеленка. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'kobylka': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Kobyłka: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Napoleona, ul. Pilsudskiego, ul. Wołomińska i ul. Szkolna, a także z parkingów podziemnych centrów handlowych CH Kobyłka i M1 Marki (blisko) oraz z rejonu Kobyłka Centrum, DK8 i granica z Wołominem. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Kobyłce?",
      blocks: [
        { title: "Główne ulice Kobyłka — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Napoleona, ul. Pilsudskiego i ul. Wołomińska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Kobyłka) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Kobyłka i M1 Marki (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Kobyłce często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Kobyłka Centrum i DK8." }
      ],
      h2transport: "Laweta Kobyłka — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Kobyłce? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Kobyłce",
      helpIntro: "W Kobyłce oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Kobyłce — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Kobyłka i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Kobyłce. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Kobyłka: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Napoleona, ul. Pilsudskiego, ul. Wołomińska and ul. Szkolna, and from underground car parks at CH Kobyłka and M1 Marki (blisko) as well as the Kobyłka Centrum, DK8 and granica z Wołominem area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Kobyłka?",
      blocks: [
        { title: "Main streets in Kobyłka — we know the routes", text: "We regularly respond on ul. Napoleona, ul. Pilsudskiego and ul. Wołomińska. In rush hour we take the fastest access roads — towing around Warsaw in Kobyłka is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Kobyłka and M1 Marki (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Kobyłka we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Kobyłka Centrum and DK8." }
      ],
      h2transport: "Tow truck Kobyłka — vehicle transport 24/7",
      transport: "Need a tow truck in Kobyłka? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Kobyłka",
      helpIntro: "In Kobyłka we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Kobyłka — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Kobyłka underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Kobyłka, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Кобылка: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Napoleona, ul. Pilsudskiego, ul. Wołomińska и ul. Szkolna, а также с подземных паркингов торговых центров CH Kobyłka и M1 Marki (blisko) и из зоны Kobyłka Centrum, DK8 и granica z Wołominem. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Кобылка?",
      blocks: [
        { title: "Главные улицы Кобылка — знаем маршруты", text: "Чаще всего выезжаем на ul. Napoleona, ul. Pilsudskiego и ul. Wołomińska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Кобылка) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Kobyłka и M1 Marki (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Кобылка часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Kobyłka Centrum и DK8." }
      ],
      h2transport: "Лавета Кобылка — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Кобылке? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Кобылка",
      helpIntro: "В Кобылка делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Кобылке — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Kobyłka и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Кобылка. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Кобилка: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Napoleona, ul. Pilsudskiego, ul. Wołomińska і ul. Szkolna, а також з підземних паркінгів торгових центрів CH Kobyłka і M1 Marki (blisko) і з зони Kobyłka Centrum, DK8 і granica z Wołominem. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Кобилка?",
      blocks: [
        { title: "Головні вулиці Кобилка — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Napoleona, ul. Pilsudskiego і ul. Wołomińska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Кобилка) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Kobyłka і M1 Marki (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Кобилка часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Kobyłka Centrum та DK8." }
      ],
      h2transport: "Лафета Кобилка — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Кобилці? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Кобилка",
      helpIntro: "У Кобилка надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Кобилці — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Kobyłka та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Кобилка. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'jozefow': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Józefów: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Długa, ul. Wyszyńskiego, ul. Kardynała Wyszyńskiego i ul. Piłsudskiego, a także z parkingów podziemnych centrów handlowych Galeria Otwock (blisko) i CH Promenada (blisko) oraz z rejonu Józefów Centrum, Świder i linia kolejowa. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Józefowie?",
      blocks: [
        { title: "Główne ulice Józefów — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Długa, ul. Wyszyńskiego i ul. Kardynała Wyszyńskiego. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Józefów) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Galeria Otwock (blisko) i CH Promenada (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Józefowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Józefów Centrum i Świder." }
      ],
      h2transport: "Laweta Józefów — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Józefowie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Józefowie",
      helpIntro: "W Józefowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Józefowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Galeria Otwock (blisko) i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Józefowie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Józefów: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Długa, ul. Wyszyńskiego, ul. Kardynała Wyszyńskiego and ul. Piłsudskiego, and from underground car parks at Galeria Otwock (blisko) and CH Promenada (blisko) as well as the Józefów Centrum, Świder and linia kolejowa area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Józefów?",
      blocks: [
        { title: "Main streets in Józefów — we know the routes", text: "We regularly respond on ul. Długa, ul. Wyszyńskiego and ul. Kardynała Wyszyńskiego. In rush hour we take the fastest access roads — towing around Warsaw in Józefów is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Galeria Otwock (blisko) and CH Promenada (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Józefów we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Józefów Centrum and Świder." }
      ],
      h2transport: "Tow truck Józefów — vehicle transport 24/7",
      transport: "Need a tow truck in Józefów? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Józefów",
      helpIntro: "In Józefów we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Józefów — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Galeria Otwock (blisko) underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Józefów, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Юзефув: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Długa, ul. Wyszyńskiego, ul. Kardynała Wyszyńskiego и ul. Piłsudskiego, а также с подземных паркингов торговых центров Galeria Otwock (blisko) и CH Promenada (blisko) и из зоны Józefów Centrum, Świder и linia kolejowa. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Юзефув?",
      blocks: [
        { title: "Главные улицы Юзефув — знаем маршруты", text: "Чаще всего выезжаем на ul. Długa, ul. Wyszyńskiego и ul. Kardynała Wyszyńskiego. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Юзефув) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Galeria Otwock (blisko) и CH Promenada (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Юзефув часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Józefów Centrum и Świder." }
      ],
      h2transport: "Лавета Юзефув — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Юзефуве? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Юзефув",
      helpIntro: "В Юзефув делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Юзефуве — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Galeria Otwock (blisko) и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Юзефув. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Юзефув: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Długa, ul. Wyszyńskiego, ul. Kardynała Wyszyńskiego і ul. Piłsudskiego, а також з підземних паркінгів торгових центрів Galeria Otwock (blisko) і CH Promenada (blisko) і з зони Józefów Centrum, Świder і linia kolejowa. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Юзефув?",
      blocks: [
        { title: "Головні вулиці Юзефув — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Długa, ul. Wyszyńskiego і ul. Kardynała Wyszyńskiego. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Юзефув) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Galeria Otwock (blisko) і CH Promenada (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Юзефув часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Józefów Centrum та Świder." }
      ],
      h2transport: "Лафета Юзефув — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Юзефуві? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Юзефув",
      helpIntro: "У Юзефув надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Юзефуві — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Galeria Otwock (blisko) та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Юзефув. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'lomianki': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Łomianki: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Warszawska, ul. Brukowa, ul. Zachodnia i ul. Wędkarska, a także z parkingów podziemnych centrów handlowych CH Łomianki i Arkadia (blisko) oraz z rejonu Łomianki Centrum, DK7 i Dziekanów Leśny. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Łomiankach?",
      blocks: [
        { title: "Główne ulice Łomianki — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Warszawska, ul. Brukowa i ul. Zachodnia. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Łomianki) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Łomianki i Arkadia (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Łomiankach często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Łomianki Centrum i DK7." }
      ],
      h2transport: "Laweta Łomianki — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Łomiankach? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Łomiankach",
      helpIntro: "W Łomiankach oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Łomiankach — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Łomianki i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Łomiankach. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Łomianki: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Warszawska, ul. Brukowa, ul. Zachodnia and ul. Wędkarska, and from underground car parks at CH Łomianki and Arkadia (blisko) as well as the Łomianki Centrum, DK7 and Dziekanów Leśny area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Łomianki?",
      blocks: [
        { title: "Main streets in Łomianki — we know the routes", text: "We regularly respond on ul. Warszawska, ul. Brukowa and ul. Zachodnia. In rush hour we take the fastest access roads — towing around Warsaw in Łomianki is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Łomianki and Arkadia (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Łomianki we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Łomianki Centrum and DK7." }
      ],
      h2transport: "Tow truck Łomianki — vehicle transport 24/7",
      transport: "Need a tow truck in Łomianki? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Łomianki",
      helpIntro: "In Łomianki we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Łomianki — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Łomianki underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Łomianki, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Ломянки: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Warszawska, ul. Brukowa, ul. Zachodnia и ul. Wędkarska, а также с подземных паркингов торговых центров CH Łomianki и Arkadia (blisko) и из зоны Łomianki Centrum, DK7 и Dziekanów Leśny. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Ломянки?",
      blocks: [
        { title: "Главные улицы Ломянки — знаем маршруты", text: "Чаще всего выезжаем на ul. Warszawska, ul. Brukowa и ul. Zachodnia. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Ломянки) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Łomianki и Arkadia (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Ломянки часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Łomianki Centrum и DK7." }
      ],
      h2transport: "Лавета Ломянки — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Ломянках? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Ломянки",
      helpIntro: "В Ломянки делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Ломянках — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Łomianki и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Ломянки. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Ломянки: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Warszawska, ul. Brukowa, ul. Zachodnia і ul. Wędkarska, а також з підземних паркінгів торгових центрів CH Łomianki і Arkadia (blisko) і з зони Łomianki Centrum, DK7 і Dziekanów Leśny. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Ломянки?",
      blocks: [
        { title: "Головні вулиці Ломянки — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Warszawska, ul. Brukowa і ul. Zachodnia. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Ломянки) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Łomianki і Arkadia (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Ломянки часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Łomianki Centrum та DK7." }
      ],
      h2transport: "Лафета Ломянки — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Ломянках? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Ломянки",
      helpIntro: "У Ломянки надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Ломянках — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Łomianki та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Ломянки. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'konstancin-jeziorna': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Konstancin-Jeziorna: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Sułkowskiego, ul. Piaseczyńska, ul. Warszawska i ul. Wilanowska, a także z parkingów podziemnych centrów handlowych Galeria Konstancin i Auchan Piaseczno (blisko) oraz z rejonu Konstancin Centrum, Jeziorna i park zdrojowy. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Konstancinie-Jeziornie?",
      blocks: [
        { title: "Główne ulice Konstancin-Jeziorna — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Sułkowskiego, ul. Piaseczyńska i ul. Warszawska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Konstancin-Jeziorna) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Galeria Konstancin i Auchan Piaseczno (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Konstancinie-Jeziornie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Konstancin Centrum i Jeziorna." }
      ],
      h2transport: "Laweta Konstancin-Jeziorna — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Konstancinie-Jeziornie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Konstancinie-Jeziornie",
      helpIntro: "W Konstancinie-Jeziornie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Konstancinie-Jeziornie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Galeria Konstancin i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Konstancinie-Jeziornie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Konstancin-Jeziorna: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Sułkowskiego, ul. Piaseczyńska, ul. Warszawska and ul. Wilanowska, and from underground car parks at Galeria Konstancin and Auchan Piaseczno (blisko) as well as the Konstancin Centrum, Jeziorna and park zdrojowy area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Konstancin-Jeziorna?",
      blocks: [
        { title: "Main streets in Konstancin-Jeziorna — we know the routes", text: "We regularly respond on ul. Sułkowskiego, ul. Piaseczyńska and ul. Warszawska. In rush hour we take the fastest access roads — towing around Warsaw in Konstancin-Jeziorna is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Galeria Konstancin and Auchan Piaseczno (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Konstancin-Jeziorna we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Konstancin Centrum and Jeziorna." }
      ],
      h2transport: "Tow truck Konstancin-Jeziorna — vehicle transport 24/7",
      transport: "Need a tow truck in Konstancin-Jeziorna? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Konstancin-Jeziorna",
      helpIntro: "In Konstancin-Jeziorna we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Konstancin-Jeziorna — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Galeria Konstancin underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Konstancin-Jeziorna, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Констанцин-Езёрна: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Sułkowskiego, ul. Piaseczyńska, ul. Warszawska и ul. Wilanowska, а также с подземных паркингов торговых центров Galeria Konstancin и Auchan Piaseczno (blisko) и из зоны Konstancin Centrum, Jeziorna и park zdrojowy. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Констанцин-Езёрна?",
      blocks: [
        { title: "Главные улицы Констанцин-Езёрна — знаем маршруты", text: "Чаще всего выезжаем на ul. Sułkowskiego, ul. Piaseczyńska и ul. Warszawska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Констанцин-Езёрна) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Galeria Konstancin и Auchan Piaseczno (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Констанцин-Езёрна часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Konstancin Centrum и Jeziorna." }
      ],
      h2transport: "Лавета Констанцин-Езёрна — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Констанцине-Езёрне? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Констанцин-Езёрна",
      helpIntro: "В Констанцин-Езёрна делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Констанцине-Езёрне — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Galeria Konstancin и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Констанцин-Езёрна. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Констанцін-Єзьорна: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Sułkowskiego, ul. Piaseczyńska, ul. Warszawska і ul. Wilanowska, а також з підземних паркінгів торгових центрів Galeria Konstancin і Auchan Piaseczno (blisko) і з зони Konstancin Centrum, Jeziorna і park zdrojowy. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Констанцін-Єзьорна?",
      blocks: [
        { title: "Головні вулиці Констанцін-Єзьорна — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Sułkowskiego, ul. Piaseczyńska і ul. Warszawska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Констанцін-Єзьорна) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Galeria Konstancin і Auchan Piaseczno (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Констанцін-Єзьорна часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Konstancin Centrum та Jeziorna." }
      ],
      h2transport: "Лафета Констанцін-Єзьорна — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Констанціні-Єзьорні? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Констанцін-Єзьорна",
      helpIntro: "У Констанцін-Єзьорна надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Констанціні-Єзьорні — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Galeria Konstancin та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Констанцін-Єзьорна. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'piastow': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Piastów: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Warszawska, ul. 11 Listopada, ul. Bohaterów Wolności i ul. Sienkiewicza, a także z parkingów podziemnych centrów handlowych CH Pruszków (blisko) i Factory Ursus (blisko) oraz z rejonu Piastów Centrum, DK720 i granica z Pruszkowem. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Piastowie?",
      blocks: [
        { title: "Główne ulice Piastów — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Warszawska, ul. 11 Listopada i ul. Bohaterów Wolności. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Piastów) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Pruszków (blisko) i Factory Ursus (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Piastowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Piastów Centrum i DK720." }
      ],
      h2transport: "Laweta Piastów — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Piastowie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Piastowie",
      helpIntro: "W Piastowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Piastowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Pruszków (blisko) i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Piastowie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Piastów: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Warszawska, ul. 11 Listopada, ul. Bohaterów Wolności and ul. Sienkiewicza, and from underground car parks at CH Pruszków (blisko) and Factory Ursus (blisko) as well as the Piastów Centrum, DK720 and granica z Pruszkowem area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Piastów?",
      blocks: [
        { title: "Main streets in Piastów — we know the routes", text: "We regularly respond on ul. Warszawska, ul. 11 Listopada and ul. Bohaterów Wolności. In rush hour we take the fastest access roads — towing around Warsaw in Piastów is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Pruszków (blisko) and Factory Ursus (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Piastów we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Piastów Centrum and DK720." }
      ],
      h2transport: "Tow truck Piastów — vehicle transport 24/7",
      transport: "Need a tow truck in Piastów? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Piastów",
      helpIntro: "In Piastów we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Piastów — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Pruszków (blisko) underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Piastów, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Пястув: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Warszawska, ul. 11 Listopada, ul. Bohaterów Wolności и ul. Sienkiewicza, а также с подземных паркингов торговых центров CH Pruszków (blisko) и Factory Ursus (blisko) и из зоны Piastów Centrum, DK720 и granica z Pruszkowem. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Пястув?",
      blocks: [
        { title: "Главные улицы Пястув — знаем маршруты", text: "Чаще всего выезжаем на ul. Warszawska, ul. 11 Listopada и ul. Bohaterów Wolności. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Пястув) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Pruszków (blisko) и Factory Ursus (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Пястув часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Piastów Centrum и DK720." }
      ],
      h2transport: "Лавета Пястув — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Пястуве? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Пястув",
      helpIntro: "В Пястув делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Пястуве — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Pruszków (blisko) и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Пястув. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Пястув: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Warszawska, ul. 11 Listopada, ul. Bohaterów Wolności і ul. Sienkiewicza, а також з підземних паркінгів торгових центрів CH Pruszków (blisko) і Factory Ursus (blisko) і з зони Piastów Centrum, DK720 і granica z Pruszkowem. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Пястув?",
      blocks: [
        { title: "Головні вулиці Пястув — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Warszawska, ul. 11 Listopada і ul. Bohaterów Wolności. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Пястув) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Pruszków (blisko) і Factory Ursus (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Пястув часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Piastów Centrum та DK720." }
      ],
      h2transport: "Лафета Пястув — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Пястуві? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Пястув",
      helpIntro: "У Пястув надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Пястуві — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Pruszków (blisko) та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Пястув. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'sulejowek': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Sulejówek: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Piłsudskiego, ul. Paderewskiego, ul. Józefa Piłsudskiego i ul. Okuniewska, a także z parkingów podziemnych centrów handlowych CH Promenada (blisko) i Galeria Wileńska (blisko) oraz z rejonu Sulejówek Centrum, Miłosna i DK2. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Sulejówku?",
      blocks: [
        { title: "Główne ulice Sulejówek — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Piłsudskiego, ul. Paderewskiego i ul. Józefa Piłsudskiego. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Sulejówek) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Promenada (blisko) i Galeria Wileńska (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Sulejówku często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Sulejówek Centrum i Miłosna." }
      ],
      h2transport: "Laweta Sulejówek — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Sulejówku? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Sulejówku",
      helpIntro: "W Sulejówku oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Sulejówku — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Promenada (blisko) i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Sulejówku. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Sulejówek: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Piłsudskiego, ul. Paderewskiego, ul. Józefa Piłsudskiego and ul. Okuniewska, and from underground car parks at CH Promenada (blisko) and Galeria Wileńska (blisko) as well as the Sulejówek Centrum, Miłosna and DK2 area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Sulejówek?",
      blocks: [
        { title: "Main streets in Sulejówek — we know the routes", text: "We regularly respond on ul. Piłsudskiego, ul. Paderewskiego and ul. Józefa Piłsudskiego. In rush hour we take the fastest access roads — towing around Warsaw in Sulejówek is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Promenada (blisko) and Galeria Wileńska (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Sulejówek we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Sulejówek Centrum and Miłosna." }
      ],
      h2transport: "Tow truck Sulejówek — vehicle transport 24/7",
      transport: "Need a tow truck in Sulejówek? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Sulejówek",
      helpIntro: "In Sulejówek we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Sulejówek — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Promenada (blisko) underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Sulejówek, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Сулеювек: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Piłsudskiego, ul. Paderewskiego, ul. Józefa Piłsudskiego и ul. Okuniewska, а также с подземных паркингов торговых центров CH Promenada (blisko) и Galeria Wileńska (blisko) и из зоны Sulejówek Centrum, Miłosna и DK2. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Сулеювек?",
      blocks: [
        { title: "Главные улицы Сулеювек — знаем маршруты", text: "Чаще всего выезжаем на ul. Piłsudskiego, ul. Paderewskiego и ul. Józefa Piłsudskiego. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Сулеювек) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Promenada (blisko) и Galeria Wileńska (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Сулеювек часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Sulejówek Centrum и Miłosna." }
      ],
      h2transport: "Лавета Сулеювек — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Сулеювеке? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Сулеювек",
      helpIntro: "В Сулеювек делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Сулеювеке — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Promenada (blisko) и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Сулеювек. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Сулєювек: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Piłsudskiego, ul. Paderewskiego, ul. Józefa Piłsudskiego і ul. Okuniewska, а також з підземних паркінгів торгових центрів CH Promenada (blisko) і Galeria Wileńska (blisko) і з зони Sulejówek Centrum, Miłosna і DK2. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Сулєювек?",
      blocks: [
        { title: "Головні вулиці Сулєювек — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Piłsudskiego, ul. Paderewskiego і ul. Józefa Piłsudskiego. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Сулєювек) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Promenada (blisko) і Galeria Wileńska (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Сулєювек часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Sulejówek Centrum та Miłosna." }
      ],
      h2transport: "Лафета Сулєювек — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Сулєювеку? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Сулєювек",
      helpIntro: "У Сулєювек надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Сулєювеку — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Promenada (blisko) та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Сулєювек. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'milanowek': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Milanówek: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Królewska, ul. Warszawska, ul. Piłsudskiego i ul. Grudowska, a także z parkingów podziemnych centrów handlowych CH Grodzisk (blisko) i CH Pruszków (blisko) oraz z rejonu Milanówek Centrum, linia WKD i DK719. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Milanówku?",
      blocks: [
        { title: "Główne ulice Milanówek — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Królewska, ul. Warszawska i ul. Piłsudskiego. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Milanówek) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Grodzisk (blisko) i CH Pruszków (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Milanówku często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Milanówek Centrum i linia WKD." }
      ],
      h2transport: "Laweta Milanówek — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Milanówku? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Milanówku",
      helpIntro: "W Milanówku oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Milanówku — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Grodzisk (blisko) i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Milanówku. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Milanówek: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Królewska, ul. Warszawska, ul. Piłsudskiego and ul. Grudowska, and from underground car parks at CH Grodzisk (blisko) and CH Pruszków (blisko) as well as the Milanówek Centrum, linia WKD and DK719 area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Milanówek?",
      blocks: [
        { title: "Main streets in Milanówek — we know the routes", text: "We regularly respond on ul. Królewska, ul. Warszawska and ul. Piłsudskiego. In rush hour we take the fastest access roads — towing around Warsaw in Milanówek is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Grodzisk (blisko) and CH Pruszków (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Milanówek we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Milanówek Centrum and linia WKD." }
      ],
      h2transport: "Tow truck Milanówek — vehicle transport 24/7",
      transport: "Need a tow truck in Milanówek? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Milanówek",
      helpIntro: "In Milanówek we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Milanówek — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Grodzisk (blisko) underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Milanówek, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Миланувек: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Królewska, ul. Warszawska, ul. Piłsudskiego и ul. Grudowska, а также с подземных паркингов торговых центров CH Grodzisk (blisko) и CH Pruszków (blisko) и из зоны Milanówek Centrum, linia WKD и DK719. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Миланувек?",
      blocks: [
        { title: "Главные улицы Миланувек — знаем маршруты", text: "Чаще всего выезжаем на ul. Królewska, ul. Warszawska и ul. Piłsudskiego. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Миланувек) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Grodzisk (blisko) и CH Pruszków (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Миланувек часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Milanówek Centrum и linia WKD." }
      ],
      h2transport: "Лавета Миланувек — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Миланувеке? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Миланувек",
      helpIntro: "В Миланувек делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Миланувеке — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Grodzisk (blisko) и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Миланувек. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Міланувек: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Królewska, ul. Warszawska, ul. Piłsudskiego і ul. Grudowska, а також з підземних паркінгів торгових центрів CH Grodzisk (blisko) і CH Pruszków (blisko) і з зони Milanówek Centrum, linia WKD і DK719. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Міланувек?",
      blocks: [
        { title: "Головні вулиці Міланувек — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Królewska, ul. Warszawska і ul. Piłsudskiego. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Міланувек) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Grodzisk (blisko) і CH Pruszków (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Міланувек часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Milanówek Centrum та linia WKD." }
      ],
      h2transport: "Лафета Міланувек — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Міланувеку? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Міланувек",
      helpIntro: "У Міланувек надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Міланувеку — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Grodzisk (blisko) та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Міланувек. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'brwinow': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Brwinów: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Warszawska, ul. Rynek, ul. Grodziska i ul. Pruszkowska, a także z parkingów podziemnych centrów handlowych CH Pruszków (blisko) i CH Grodzisk (blisko) oraz z rejonu Brwinów Centrum, WKD i DK719. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Brwinowie?",
      blocks: [
        { title: "Główne ulice Brwinów — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Warszawska, ul. Rynek i ul. Grodziska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Brwinów) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Pruszków (blisko) i CH Grodzisk (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Brwinowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Brwinów Centrum i WKD." }
      ],
      h2transport: "Laweta Brwinów — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Brwinowie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Brwinowie",
      helpIntro: "W Brwinowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Brwinowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Pruszków (blisko) i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Brwinowie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Brwinów: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Warszawska, ul. Rynek, ul. Grodziska and ul. Pruszkowska, and from underground car parks at CH Pruszków (blisko) and CH Grodzisk (blisko) as well as the Brwinów Centrum, WKD and DK719 area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Brwinów?",
      blocks: [
        { title: "Main streets in Brwinów — we know the routes", text: "We regularly respond on ul. Warszawska, ul. Rynek and ul. Grodziska. In rush hour we take the fastest access roads — towing around Warsaw in Brwinów is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Pruszków (blisko) and CH Grodzisk (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Brwinów we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Brwinów Centrum and WKD." }
      ],
      h2transport: "Tow truck Brwinów — vehicle transport 24/7",
      transport: "Need a tow truck in Brwinów? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Brwinów",
      helpIntro: "In Brwinów we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Brwinów — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Pruszków (blisko) underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Brwinów, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Брвинув: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Warszawska, ul. Rynek, ul. Grodziska и ul. Pruszkowska, а также с подземных паркингов торговых центров CH Pruszków (blisko) и CH Grodzisk (blisko) и из зоны Brwinów Centrum, WKD и DK719. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Брвинув?",
      blocks: [
        { title: "Главные улицы Брвинув — знаем маршруты", text: "Чаще всего выезжаем на ul. Warszawska, ul. Rynek и ul. Grodziska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Брвинув) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Pruszków (blisko) и CH Grodzisk (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Брвинув часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Brwinów Centrum и WKD." }
      ],
      h2transport: "Лавета Брвинув — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Брвинуве? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Брвинув",
      helpIntro: "В Брвинув делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Брвинуве — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Pruszków (blisko) и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Брвинув. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Брвінув: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Warszawska, ul. Rynek, ul. Grodziska і ul. Pruszkowska, а також з підземних паркінгів торгових центрів CH Pruszków (blisko) і CH Grodzisk (blisko) і з зони Brwinów Centrum, WKD і DK719. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Брвінув?",
      blocks: [
        { title: "Головні вулиці Брвінув — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Warszawska, ul. Rynek і ul. Grodziska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Брвінув) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Pruszków (blisko) і CH Grodzisk (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Брвінув часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Brwinów Centrum та WKD." }
      ],
      h2transport: "Лафета Брвінув — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Брвінуві? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Брвінув",
      helpIntro: "У Брвінув надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Брвінуві — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Pruszków (blisko) та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Брвінув. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'nadarzyn': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Nadarzyn: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Mszczonowska, ul. Warszawska, ul. Słomczyn i al. Katowicka, a także z parkingów podziemnych centrów handlowych Ptak Warsaw Expo i CH Janki (blisko) oraz z rejonu Ptak Warsaw Expo, Janki i S8 / A2. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Nadarzynie?",
      blocks: [
        { title: "Główne ulice Nadarzyn — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Mszczonowska, ul. Warszawska i ul. Słomczyn. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Nadarzyn) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Ptak Warsaw Expo i CH Janki (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Nadarzynie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Ptak Warsaw Expo i Janki." }
      ],
      h2transport: "Laweta Nadarzyn — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Nadarzynie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Nadarzynie",
      helpIntro: "W Nadarzynie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Nadarzynie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Ptak Warsaw Expo i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Nadarzynie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Nadarzyn: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Mszczonowska, ul. Warszawska, ul. Słomczyn and al. Katowicka, and from underground car parks at Ptak Warsaw Expo and CH Janki (blisko) as well as the Ptak Warsaw Expo, Janki and S8 / A2 area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Nadarzyn?",
      blocks: [
        { title: "Main streets in Nadarzyn — we know the routes", text: "We regularly respond on ul. Mszczonowska, ul. Warszawska and ul. Słomczyn. In rush hour we take the fastest access roads — towing around Warsaw in Nadarzyn is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Ptak Warsaw Expo and CH Janki (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Nadarzyn we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Ptak Warsaw Expo and Janki." }
      ],
      h2transport: "Tow truck Nadarzyn — vehicle transport 24/7",
      transport: "Need a tow truck in Nadarzyn? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Nadarzyn",
      helpIntro: "In Nadarzyn we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Nadarzyn — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Ptak Warsaw Expo underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Nadarzyn, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Надажин: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Mszczonowska, ul. Warszawska, ul. Słomczyn и al. Katowicka, а также с подземных паркингов торговых центров Ptak Warsaw Expo и CH Janki (blisko) и из зоны Ptak Warsaw Expo, Janki и S8 / A2. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Надажин?",
      blocks: [
        { title: "Главные улицы Надажин — знаем маршруты", text: "Чаще всего выезжаем на ul. Mszczonowska, ul. Warszawska и ul. Słomczyn. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Надажин) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Ptak Warsaw Expo и CH Janki (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Надажин часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Ptak Warsaw Expo и Janki." }
      ],
      h2transport: "Лавета Надажин — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Надажине? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Надажин",
      helpIntro: "В Надажин делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Надажине — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Ptak Warsaw Expo и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Надажин. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Надажин: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Mszczonowska, ul. Warszawska, ul. Słomczyn і al. Katowicka, а також з підземних паркінгів торгових центрів Ptak Warsaw Expo і CH Janki (blisko) і з зони Ptak Warsaw Expo, Janki і S8 / A2. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Надажин?",
      blocks: [
        { title: "Головні вулиці Надажин — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Mszczonowska, ul. Warszawska і ul. Słomczyn. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Надажин) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Ptak Warsaw Expo і CH Janki (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Надажин часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Ptak Warsaw Expo та Janki." }
      ],
      h2transport: "Лафета Надажин — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Надажині? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Надажин",
      helpIntro: "У Надажин надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Надажині — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Ptak Warsaw Expo та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Надажин. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'raszyn': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Raszyn: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. Krakowska, ul. Głucha, ul. Sportowa i ul. Warszawska, a także z parkingów podziemnych centrów handlowych CH Janki i Blue City (blisko) oraz z rejonu Janki, węzeł S2/S8 i granica z Włochami. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Raszynie?",
      blocks: [
        { title: "Główne ulice Raszyn — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. Krakowska, ul. Głucha i ul. Sportowa. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Raszyn) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Janki i Blue City (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Raszynie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Janki i węzeł S2/S8." }
      ],
      h2transport: "Laweta Raszyn — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Raszynie? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Raszynie",
      helpIntro: "W Raszynie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Raszynie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Janki i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Raszynie. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Raszyn: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. Krakowska, ul. Głucha, ul. Sportowa and ul. Warszawska, and from underground car parks at CH Janki and Blue City (blisko) as well as the Janki, węzeł S2/S8 and granica z Włochami area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Raszyn?",
      blocks: [
        { title: "Main streets in Raszyn — we know the routes", text: "We regularly respond on al. Krakowska, ul. Głucha and ul. Sportowa. In rush hour we take the fastest access roads — towing around Warsaw in Raszyn is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Janki and Blue City (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Raszyn we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Janki and węzeł S2/S8." }
      ],
      h2transport: "Tow truck Raszyn — vehicle transport 24/7",
      transport: "Need a tow truck in Raszyn? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Raszyn",
      helpIntro: "In Raszyn we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Raszyn — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Janki underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Raszyn, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Рашин: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. Krakowska, ul. Głucha, ul. Sportowa и ul. Warszawska, а также с подземных паркингов торговых центров CH Janki и Blue City (blisko) и из зоны Janki, węzeł S2/S8 и granica z Włochami. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Рашин?",
      blocks: [
        { title: "Главные улицы Рашин — знаем маршруты", text: "Чаще всего выезжаем на al. Krakowska, ul. Głucha и ul. Sportowa. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Рашин) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Janki и Blue City (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Рашин часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Janki и węzeł S2/S8." }
      ],
      h2transport: "Лавета Рашин — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Рашине? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Рашин",
      helpIntro: "В Рашин делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Рашине — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Janki и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Рашин. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Рашин: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. Krakowska, ul. Głucha, ul. Sportowa і ul. Warszawska, а також з підземних паркінгів торгових центрів CH Janki і Blue City (blisko) і з зони Janki, węzeł S2/S8 і granica z Włochami. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Рашин?",
      blocks: [
        { title: "Головні вулиці Рашин — знаємо маршрути", text: "Найчастіше виїжджаємо на al. Krakowska, ul. Głucha і ul. Sportowa. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Рашин) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Janki і Blue City (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Рашин часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Janki та węzeł S2/S8." }
      ],
      h2transport: "Лафета Рашин — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Рашині? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Рашин",
      helpIntro: "У Рашин надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Рашині — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Janki та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Рашин. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'grodzisk-mazowiecki': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Grodzisk Mazowiecki: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Żwirki i Wigury, ul. 11 Listopada, ul. Montwiłła i ul. Sienkiewicza, a także z parkingów podziemnych centrów handlowych CH Grodzisk i Ptak Warsaw Expo (blisko) oraz z rejonu Grodzisk Centrum, WKD i DK719. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Grodzisku Mazowieckim?",
      blocks: [
        { title: "Główne ulice Grodzisk Mazowiecki — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Żwirki i Wigury, ul. 11 Listopada i ul. Montwiłła. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Grodzisk Mazowiecki) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Grodzisk i Ptak Warsaw Expo (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Grodzisku Mazowieckim często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Grodzisk Centrum i WKD." }
      ],
      h2transport: "Laweta Grodzisk Mazowiecki — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Grodzisku Mazowieckim? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Grodzisku Mazowieckim",
      helpIntro: "W Grodzisku Mazowieckim oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Grodzisku Mazowieckim — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Grodzisk i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Grodzisku Mazowieckim. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Grodzisk Mazowiecki: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Żwirki i Wigury, ul. 11 Listopada, ul. Montwiłła and ul. Sienkiewicza, and from underground car parks at CH Grodzisk and Ptak Warsaw Expo (blisko) as well as the Grodzisk Centrum, WKD and DK719 area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Grodzisk Mazowiecki?",
      blocks: [
        { title: "Main streets in Grodzisk Mazowiecki — we know the routes", text: "We regularly respond on ul. Żwirki i Wigury, ul. 11 Listopada and ul. Montwiłła. In rush hour we take the fastest access roads — towing around Warsaw in Grodzisk Mazowiecki is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Grodzisk and Ptak Warsaw Expo (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Grodzisk Mazowiecki we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Grodzisk Centrum and WKD." }
      ],
      h2transport: "Tow truck Grodzisk Mazowiecki — vehicle transport 24/7",
      transport: "Need a tow truck in Grodzisk Mazowiecki? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Grodzisk Mazowiecki",
      helpIntro: "In Grodzisk Mazowiecki we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Grodzisk Mazowiecki — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Grodzisk underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Grodzisk Mazowiecki, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Гродзиск-Мазовецки: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Żwirki i Wigury, ul. 11 Listopada, ul. Montwiłła и ul. Sienkiewicza, а также с подземных паркингов торговых центров CH Grodzisk и Ptak Warsaw Expo (blisko) и из зоны Grodzisk Centrum, WKD и DK719. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Гродзиск-Мазовецки?",
      blocks: [
        { title: "Главные улицы Гродзиск-Мазовецки — знаем маршруты", text: "Чаще всего выезжаем на ul. Żwirki i Wigury, ul. 11 Listopada и ul. Montwiłła. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Гродзиск-Мазовецки) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Grodzisk и Ptak Warsaw Expo (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Гродзиск-Мазовецки часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Grodzisk Centrum и WKD." }
      ],
      h2transport: "Лавета Гродзиск-Мазовецки — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Гродзиске-Мазовецком? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Гродзиск-Мазовецки",
      helpIntro: "В Гродзиск-Мазовецки делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Гродзиске-Мазовецком — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Grodzisk и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Гродзиск-Мазовецки. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Гродзиськ-Мазовецький: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Żwirki i Wigury, ul. 11 Listopada, ul. Montwiłła і ul. Sienkiewicza, а також з підземних паркінгів торгових центрів CH Grodzisk і Ptak Warsaw Expo (blisko) і з зони Grodzisk Centrum, WKD і DK719. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Гродзиськ-Мазовецький?",
      blocks: [
        { title: "Головні вулиці Гродзиськ-Мазовецький — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Żwirki i Wigury, ul. 11 Listopada і ul. Montwiłła. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Гродзиськ-Мазовецький) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Grodzisk і Ptak Warsaw Expo (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Гродзиськ-Мазовецький часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Grodzisk Centrum та WKD." }
      ],
      h2transport: "Лафета Гродзиськ-Мазовецький — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Гродзиську-Мазовецькому? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Гродзиськ-Мазовецький",
      helpIntro: "У Гродзиськ-Мазовецький надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Гродзиську-Мазовецькому — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Grodzisk та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Гродзиськ-Мазовецький. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
  'nowy-dwor-mazowiecki': {
    pl: {
      lead: "Pomoc drogowa w Warszawie i okolicach — miasto podwarszawskie Nowy Dwór Mazowiecki: laweta w Warszawie, holowanie w Warszawie i dojazd 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy ul. Sukienna, ul. Warszawska, ul. Paderewskiego i ul. Modlińska, a także z parkingów podziemnych centrów handlowych CH Nowy Dwór i Galeria Modlińska (blisko) oraz z rejonu Modlin Airport, centrum Nowego Dworu i DK62. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER w Nowym Dworze Mazowieckim?",
      blocks: [
        { title: "Główne ulice Nowy Dwór Mazowiecki — znamy dojazdy", text: "Najczęściej wyjeżdżamy na ul. Sukienna, ul. Warszawska i ul. Paderewskiego. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie i okolicach (Nowy Dwór Mazowiecki) to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Nowy Dwór i Galeria Modlińska (blisko) oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "W Nowym Dworze Mazowieckim często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Modlin Airport i centrum Nowego Dworu." }
      ],
      h2transport: "Laweta Nowy Dwór Mazowiecki — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety w Nowym Dworze Mazowieckim? INNSER — pomoc drogowa w Warszawie i okolicach, dojazd zwykle w 20–40 minut. Holowanie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa w Nowym Dworze Mazowieckim",
      helpIntro: "W Nowym Dworze Mazowieckim oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta w Nowym Dworze Mazowieckim — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Nowy Dwór i innych CH",
        "Dojazd ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta w Nowym Dworze Mazowieckim. Setki interwencji w Warszawie i okolicach, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Warsaw suburb of Nowy Dwór Mazowiecki: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around ul. Sukienna, ul. Warszawska, ul. Paderewskiego and ul. Modlińska, and from underground car parks at CH Nowy Dwór and Galeria Modlińska (blisko) as well as the Modlin Airport, centrum Nowego Dworu and DK62 area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Nowy Dwór Mazowiecki?",
      blocks: [
        { title: "Main streets in Nowy Dwór Mazowiecki — we know the routes", text: "We regularly respond on ul. Sukienna, ul. Warszawska and ul. Paderewskiego. In rush hour we take the fastest access roads — towing around Warsaw in Nowy Dwór Mazowiecki is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Nowy Dwór and Galeria Modlińska (blisko) and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Nowy Dwór Mazowiecki we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Modlin Airport and centrum Nowego Dworu." }
      ],
      h2transport: "Tow truck Nowy Dwór Mazowiecki — vehicle transport 24/7",
      transport: "Need a tow truck in Nowy Dwór Mazowiecki? INNSER — towing and breakdown assistance in Warsaw and suburbs, usually on site in 20–40 minutes. Towing from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Nowy Dwór Mazowiecki",
      helpIntro: "In Nowy Dwór Mazowiecki we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Nowy Dwór Mazowiecki — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Nowy Dwór underground parking and other malls",
        "Arrival ~20–40 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Nowy Dwór Mazowiecki, near Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — пригород Варшавы Новы-Двур-Мазовецки: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах ul. Sukienna, ul. Warszawska, ul. Paderewskiego и ul. Modlińska, а также с подземных паркингов торговых центров CH Nowy Dwór и Galeria Modlińska (blisko) и из зоны Modlin Airport, centrum Nowego Dworu и DK62. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в Новы-Двур-Мазовецки?",
      blocks: [
        { title: "Главные улицы Новы-Двур-Мазовецки — знаем маршруты", text: "Чаще всего выезжаем на ul. Sukienna, ul. Warszawska и ul. Paderewskiego. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве и пригородах (Новы-Двур-Мазовецки) для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Nowy Dwór и Galeria Modlińska (blisko), а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В Новы-Двур-Мазовецки часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Modlin Airport и centrum Nowego Dworu." }
      ],
      h2transport: "Лавета Новы-Двур-Мазовецки — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Новом-Двуре-Мазовецком? INNSER — лавета в Варшаве и пригородах, обычно приезд за 20–40 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Новы-Двур-Мазовецки",
      helpIntro: "В Новы-Двур-Мазовецки делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Новом-Двуре-Мазовецком — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Nowy Dwór и других ТЦ",
        "Приезд ~20–40 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве и пригороде Новы-Двур-Мазовецки. Честная цена, сотни выездов и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — передмістя Варшави Новий-Двір-Мазовецький: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях ul. Sukienna, ul. Warszawska, ul. Paderewskiego і ul. Modlińska, а також з підземних паркінгів торгових центрів CH Nowy Dwór і Galeria Modlińska (blisko) і з зони Modlin Airport, centrum Nowego Dworu і DK62. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у Новий-Двір-Мазовецький?",
      blocks: [
        { title: "Головні вулиці Новий-Двір-Мазовецький — знаємо маршрути", text: "Найчастіше виїжджаємо на ul. Sukienna, ul. Warszawska і ul. Paderewskiego. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві та передмістях (Новий-Двір-Мазовецький) для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Nowy Dwór і Galeria Modlińska (blisko), а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У Новий-Двір-Мазовецький часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Modlin Airport та centrum Nowego Dworu." }
      ],
      h2transport: "Лафета Новий-Двір-Мазовецький — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Новому-Дворі-Мазовецькому? INNSER — лафета в Варшаві та передмістях, зазвичай приїзд за 20–40 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Новий-Двір-Мазовецький",
      helpIntro: "У Новий-Двір-Мазовецький надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Новому-Дворі-Мазовецькому — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Nowy Dwór та інших ТЦ",
        "Приїзд ~20–40 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві та передмісті Новий-Двір-Мазовецький. Чесна ціна, сотні виїздів і обслуговування чотирма мовами."
    },
  },
};


function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

export function getDistrictRichContent(lang, slug) {
  const rich = DISTRICT_RICH[slug];
  if (!rich) return null;
  return rich[lang] || rich.pl;
}

export function renderDistrictRichHtml(lang, slug) {
  const c = getDistrictRichContent(lang, slug);
  if (!c) return '';
  let html = `<p class="dist-lead">${esc(c.lead)}</p>`;
  html += renderLandingPhotosHtml(slug, lang, 'district');
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

export function districtRichJsonForRuntime() {
  return JSON.stringify(DISTRICT_RICH);
}

export { LOCATIVE, LANDMARKS, DISTRICT_RICH };
