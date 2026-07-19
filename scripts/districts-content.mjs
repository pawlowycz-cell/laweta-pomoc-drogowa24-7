/** Rich per-district SEO body — full PL / EN / RU / UA (no fake machine swaps). */

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
};

const LANDMARKS = {
  'mokotow': {
    malls: ["Galeria Mokotów", "Sadyba Best Mall"],
    streets: ["Puławska", "Wołoska", "Belwederska", "Domaniewska", "Wilhelma Konrada Roentgena"],
    hubs: ["Sadyba", "Stegny", "Dolny Mokotów", "Służewiec"],
  },
  'wola': {
    malls: ["Wola Park", "Browary Warszawskie", "Fabryka Norblina"],
    streets: ["Prosta", "Wolska", "Kasprzaka", "Towarowa", "Okopowa", "Górczewska", "Jana Pawła II"],
    hubs: ["Rondo Daszyńskiego", "Dworzec Zachodni", "Ulrychów"],
  },
  'praga-poludnie': {
    malls: ["CH Promenada", "Galeria Wileńska"],
    streets: ["Grochowska", "Wał Miedzeszyński", "Trakt Lubelski", "Ostrobramska", "Fieldorfa"],
    hubs: ["Stadion Narodowy", "Saska Kępa", "Grochów", "Gocław", "Kamionek"],
  },
  'praga-polnoc': {
    malls: ["Galeria Wileńska"],
    streets: ["Ząbkowska", "Stalowa", "Inżynierska", "al. Solidarności", "11 Listopada"],
    hubs: ["Stara Praga", "Most Świętokrzyski", "rondo Waszyngtona"],
  },
  'srodmiescie': {
    malls: ["Złote Tarasy", "Vitkac"],
    streets: ["Marszałkowska", "Aleje Jerozolimskie", "Nowy Świat", "Emilii Plater", "Świętokrzyska"],
    hubs: ["Dworzec Centralny", "Pałac Kultury", "Plac Defilad"],
  },
  'ursynow': {
    malls: ["Atrium Reduta", "Galeria Mokotów"],
    streets: ["al. KEN", "Puławska", "Płaskowickiej", "Indiry Gandhi"],
    hubs: ["Kabaty", "Natolin", "Stokłosy", "Imielin", "metro Kabaty"],
  },
  'bielany': {
    malls: ["CH Lider", "Galeria Bielany"],
    streets: ["Marymoncka", "Trakt Rejowski", "Żeromskiego", "Podczaszyńskiego"],
    hubs: ["Młociny", "Słodowiec", "Lasek Bielański", "metro Młociny"],
  },
  'bemowo': {
    malls: ["CH Bemowo", "Fort Wola"],
    streets: ["Górczewska", "Lazurowa", "Powstańców Śląskich", "Radiowa", "Połczyńska"],
    hubs: ["Lotnisko Chopina", "Górce", "Karolin", "Fort Bema"],
  },
  'targowek': {
    malls: ["CH Targówek", "M1 Marki"],
    streets: ["Trakt Brzeski", "Św. Wincentego", "Radzymińska", "Kondratowicza"],
    hubs: ["Bródno", "Zacisze", "Targówek Mieszkaniowy", "S8"],
  },
  'ochota': {
    malls: ["Blue City", "CH Reduta"],
    streets: ["Grójecka", "Aleje Jerozolimskie", "Raszyńska", "Bitwy Warszawskiej 1920 r."],
    hubs: ["Dworzec Zachodni", "Rakowiec", "Szczęśliwice"],
  },
  'wawer': {
    malls: ["Auchan King Cross", "CH Promenada"],
    streets: ["Wał Miedzeszyński", "Trakt Lubelski", "Żegańska", "Bystrzycka"],
    hubs: ["Falenica", "Anin", "Międzylesie", "Nadwiśle"],
  },
  'bialoleka': {
    malls: ["CH Galeria Północna", "M1 Marki"],
    streets: ["Modlińska", "Marywilska", "Światowida", "Mehoffera"],
    hubs: ["Tarchomin", "Nowodwory", "Choszczówka", "Żerań"],
  },
  'wilanow': {
    malls: ["Wilanów Park", "Galeria Wilanów"],
    streets: ["al. Rzeczypospolitej", "Przyczółkowa", "Klimczaka", "Sarmacka"],
    hubs: ["Miasteczko Wilanów", "Pałac w Wilanowie", "Powsin"],
  },
  'ursus': {
    malls: ["Factory Ursus", "CH Skorosze"],
    streets: ["al. Czechowicka", "Posag 7 Panien", "Bodycha", "Gierdziejewskiego"],
    hubs: ["Czechowice", "Skorosze", "Niedźwiadek"],
  },
  'wlochy': {
    malls: ["CH Blue City", "Factory Annopol"],
    streets: ["al. Krakowska", "1 Sierpnia", "Popularna", "Globusowa"],
    hubs: ["Lotnisko Chopina", "Okęcie", "Rakowiec", "Salomea"],
  },
  'rembertow': {
    malls: ["CH King Cross", "CH Promenada"],
    streets: ["al. gen. A. Chruściela", "Żołnierska", "Cyrulików", "Chełmżyńska"],
    hubs: ["Kawęczyn", "Nowy Rembertów", "Stary Rembertów"],
  },
  'wesola': {
    malls: ["Galeria Wileńska", "CH Promenada"],
    streets: ["Trakt Brzeski", "1 Praskiego Pułku", "Niemcewicza", "Wirażowa"],
    hubs: ["Stara Miłosna", "Wola Grzybowska", "Zielona"],
  },
  'zoliborz': {
    malls: ["Arkadia", "CH Klif"],
    streets: ["al. Wojska Polskiego", "Mickiewicza", "Krasińskiego", "Potocka"],
    hubs: ["Plac Wilsona", "Stary Żoliborz", "Marymont", "metro Plac Wilsona"],
  },
};

/** @type {Record<string, Record<'pl'|'en'|'ru'|'ua', object>>} */
const DISTRICT_RICH = {
  'mokotow': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Mokotów: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Puławska, Wołoska, Belwederska, Domaniewska i Wilhelma Konrada Roentgena, a także z parkingów podziemnych centrów handlowych Galeria Mokotów i Sadyba Best Mall oraz z rejonu Sadyba, Stegny, Dolny Mokotów i Służewiec. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Mokotowie?",
      blocks: [
        { title: "Główne ulice Mokotów — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Puławska, Wołoska i Belwederska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Mokotowie to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Galeria Mokotów i Sadyba Best Mall oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Mokotowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Sadyba i Stegny." }
      ],
      h2transport: "Laweta Mokotów — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Mokotowie? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Mokotowie",
      helpIntro: "Na Mokotowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Mokotowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Galeria Mokotów i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Mokotowie. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Mokotów district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Puławska, Wołoska, Belwederska, Domaniewska and Wilhelma Konrada Roentgena, and from underground car parks at Galeria Mokotów and Sadyba Best Mall as well as the Sadyba, Stegny, Dolny Mokotów and Służewiec area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Mokotów?",
      blocks: [
        { title: "Main streets in Mokotów — we know the routes", text: "We regularly respond on Puławska, Wołoska and Belwederska. In rush hour we take the fastest access roads — towing in Warsaw’s Mokotów district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Galeria Mokotów and Sadyba Best Mall and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Mokotów we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Sadyba and Stegny." }
      ],
      h2transport: "Tow truck Mokotów — vehicle transport 24/7",
      transport: "Need a tow truck in Mokotów? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Mokotów",
      helpIntro: "In Mokotów we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Mokotów — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Galeria Mokotów underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Mokotów, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Мокотув: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Puławska, Wołoska, Belwederska, Domaniewska и Wilhelma Konrada Roentgena, а также с подземных паркингов торговых центров Galeria Mokotów и Sadyba Best Mall и из зоны Sadyba, Stegny, Dolny Mokotów и Służewiec. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Мокотув?",
      blocks: [
        { title: "Главные улицы Мокотув — знаем маршруты", text: "Чаще всего выезжаем на Puławska, Wołoska и Belwederska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Мокотув для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Galeria Mokotów и Sadyba Best Mall, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Мокотув часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Sadyba и Stegny." }
      ],
      h2transport: "Лавета Мокотув — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Мокотуве? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Мокотув",
      helpIntro: "В районе Мокотув делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Мокотуве — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Galeria Mokotów и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Мокотув. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Мокотув: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Puławska, Wołoska, Belwederska, Domaniewska і Wilhelma Konrada Roentgena, а також з підземних паркінгів торгових центрів Galeria Mokotów і Sadyba Best Mall і з зони Sadyba, Stegny, Dolny Mokotów і Służewiec. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Мокотув?",
      blocks: [
        { title: "Головні вулиці Мокотув — знаємо маршрути", text: "Найчастіше виїжджаємо на Puławska, Wołoska і Belwederska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Мокотув для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Galeria Mokotów і Sadyba Best Mall, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Мокотув часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Sadyba та Stegny." }
      ],
      h2transport: "Лафета Мокотув — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Мокотуві? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Мокотув",
      helpIntro: "У районі Мокотув надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Мокотуві — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Galeria Mokotów та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Мокотув. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'wola': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Wola: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Prosta, Wolska, Kasprzaka, Towarowa, Okopowa, Górczewska i Jana Pawła II, a także z parkingów podziemnych centrów handlowych Wola Park, Browary Warszawskie i Fabryka Norblina oraz z rejonu Rondo Daszyńskiego, Dworzec Zachodni i Ulrychów. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Woli?",
      blocks: [
        { title: "Główne ulice Wola — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Prosta, Wolska i Kasprzaka. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Woli to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Wola Park i Browary Warszawskie oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Woli często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Rondo Daszyńskiego i Dworzec Zachodni." }
      ],
      h2transport: "Laweta Wola — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Woli? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Woli",
      helpIntro: "Na Woli oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Woli — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Wola Park i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Woli. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Wola district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Prosta, Wolska, Kasprzaka, Towarowa, Okopowa, Górczewska and Jana Pawła II, and from underground car parks at Wola Park, Browary Warszawskie and Fabryka Norblina as well as the Rondo Daszyńskiego, Dworzec Zachodni and Ulrychów area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Wola?",
      blocks: [
        { title: "Main streets in Wola — we know the routes", text: "We regularly respond on Prosta, Wolska and Kasprzaka. In rush hour we take the fastest access roads — towing in Warsaw’s Wola district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Wola Park and Browary Warszawskie and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Wola we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Rondo Daszyńskiego and Dworzec Zachodni." }
      ],
      h2transport: "Tow truck Wola — vehicle transport 24/7",
      transport: "Need a tow truck in Wola? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Wola",
      helpIntro: "In Wola we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Wola — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Wola Park underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Wola, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Воля: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Prosta, Wolska, Kasprzaka, Towarowa, Okopowa, Górczewska и Jana Pawła II, а также с подземных паркингов торговых центров Wola Park, Browary Warszawskie и Fabryka Norblina и из зоны Rondo Daszyńskiego, Dworzec Zachodni и Ulrychów. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Воля?",
      blocks: [
        { title: "Главные улицы Воля — знаем маршруты", text: "Чаще всего выезжаем на Prosta, Wolska и Kasprzaka. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Воля для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Wola Park и Browary Warszawskie, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Воля часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Rondo Daszyńskiego и Dworzec Zachodni." }
      ],
      h2transport: "Лавета Воля — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Воле? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Воля",
      helpIntro: "В районе Воля делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Воле — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Wola Park и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Воля. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Воля: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Prosta, Wolska, Kasprzaka, Towarowa, Okopowa, Górczewska і Jana Pawła II, а також з підземних паркінгів торгових центрів Wola Park, Browary Warszawskie і Fabryka Norblina і з зони Rondo Daszyńskiego, Dworzec Zachodni і Ulrychów. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Воля?",
      blocks: [
        { title: "Головні вулиці Воля — знаємо маршрути", text: "Найчастіше виїжджаємо на Prosta, Wolska і Kasprzaka. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Воля для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Wola Park і Browary Warszawskie, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Воля часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Rondo Daszyńskiego та Dworzec Zachodni." }
      ],
      h2transport: "Лафета Воля — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Волі? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Воля",
      helpIntro: "У районі Воля надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Волі — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Wola Park та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Воля. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'praga-poludnie': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Praga-Południe: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Grochowska, Wał Miedzeszyński, Trakt Lubelski, Ostrobramska i Fieldorfa, a także z parkingów podziemnych centrów handlowych CH Promenada i Galeria Wileńska oraz z rejonu Stadion Narodowy, Saska Kępa, Grochów, Gocław i Kamionek. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Pradze-Południe?",
      blocks: [
        { title: "Główne ulice Praga-Południe — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Grochowska, Wał Miedzeszyński i Trakt Lubelski. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Pradze-Południe to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Promenada i Galeria Wileńska oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Pradze-Południe często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Stadion Narodowy i Saska Kępa." }
      ],
      h2transport: "Laweta Praga-Południe — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Pradze-Południe? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Pradze-Południe",
      helpIntro: "Na Pradze-Południe oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Pradze-Południe — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Promenada i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Pradze-Południe. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Praga-Południe district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Grochowska, Wał Miedzeszyński, Trakt Lubelski, Ostrobramska and Fieldorfa, and from underground car parks at CH Promenada and Galeria Wileńska as well as the Stadion Narodowy, Saska Kępa, Grochów, Gocław and Kamionek area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Praga-Południe?",
      blocks: [
        { title: "Main streets in Praga-Południe — we know the routes", text: "We regularly respond on Grochowska, Wał Miedzeszyński and Trakt Lubelski. In rush hour we take the fastest access roads — towing in Warsaw’s Praga-Południe district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Promenada and Galeria Wileńska and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Praga-Południe we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Stadion Narodowy and Saska Kępa." }
      ],
      h2transport: "Tow truck Praga-Południe — vehicle transport 24/7",
      transport: "Need a tow truck in Praga-Południe? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Praga-Południe",
      helpIntro: "In Praga-Południe we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Praga-Południe — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Promenada underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Praga-Południe, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Прага-Полудне: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Grochowska, Wał Miedzeszyński, Trakt Lubelski, Ostrobramska и Fieldorfa, а также с подземных паркингов торговых центров CH Promenada и Galeria Wileńska и из зоны Stadion Narodowy, Saska Kępa, Grochów, Gocław и Kamionek. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Прага-Полудне?",
      blocks: [
        { title: "Главные улицы Прага-Полудне — знаем маршруты", text: "Чаще всего выезжаем на Grochowska, Wał Miedzeszyński и Trakt Lubelski. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Прага-Полудне для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Promenada и Galeria Wileńska, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Прага-Полудне часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Stadion Narodowy и Saska Kępa." }
      ],
      h2transport: "Лавета Прага-Полудне — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Праге-Полудне? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Прага-Полудне",
      helpIntro: "В районе Прага-Полудне делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Праге-Полудне — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Promenada и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Прага-Полудне. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Прага-Полудне: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Grochowska, Wał Miedzeszyński, Trakt Lubelski, Ostrobramska і Fieldorfa, а також з підземних паркінгів торгових центрів CH Promenada і Galeria Wileńska і з зони Stadion Narodowy, Saska Kępa, Grochów, Gocław і Kamionek. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Прага-Полудне?",
      blocks: [
        { title: "Головні вулиці Прага-Полудне — знаємо маршрути", text: "Найчастіше виїжджаємо на Grochowska, Wał Miedzeszyński і Trakt Lubelski. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Прага-Полудне для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Promenada і Galeria Wileńska, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Прага-Полудне часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Stadion Narodowy та Saska Kępa." }
      ],
      h2transport: "Лафета Прага-Полудне — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Праці-Полудне? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Прага-Полудне",
      helpIntro: "У районі Прага-Полудне надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Праці-Полудне — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Promenada та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Прага-Полудне. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'praga-polnoc': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Praga-Północ: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Ząbkowska, Stalowa, Inżynierska, al. Solidarności i 11 Listopada, a także z parkingów podziemnych centrów handlowych Galeria Wileńska oraz z rejonu Stara Praga, Most Świętokrzyski i rondo Waszyngtona. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Pradze-Północ?",
      blocks: [
        { title: "Główne ulice Praga-Północ — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Ząbkowska, Stalowa i Inżynierska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Pradze-Północ to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Galeria Wileńska i Galeria Wileńska oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Pradze-Północ często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Stara Praga i Most Świętokrzyski." }
      ],
      h2transport: "Laweta Praga-Północ — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Pradze-Północ? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Pradze-Północ",
      helpIntro: "Na Pradze-Północ oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Pradze-Północ — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Galeria Wileńska i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Pradze-Północ. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Praga-Północ district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Ząbkowska, Stalowa, Inżynierska, al. Solidarności and 11 Listopada, and from underground car parks at Galeria Wileńska as well as the Stara Praga, Most Świętokrzyski and rondo Waszyngtona area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Praga-Północ?",
      blocks: [
        { title: "Main streets in Praga-Północ — we know the routes", text: "We regularly respond on Ząbkowska, Stalowa and Inżynierska. In rush hour we take the fastest access roads — towing in Warsaw’s Praga-Północ district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Galeria Wileńska and Galeria Wileńska and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Praga-Północ we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Stara Praga and Most Świętokrzyski." }
      ],
      h2transport: "Tow truck Praga-Północ — vehicle transport 24/7",
      transport: "Need a tow truck in Praga-Północ? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Praga-Północ",
      helpIntro: "In Praga-Północ we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Praga-Północ — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Galeria Wileńska underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Praga-Północ, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Прага-Пулноц: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Ząbkowska, Stalowa, Inżynierska, al. Solidarności и 11 Listopada, а также с подземных паркингов торговых центров Galeria Wileńska и из зоны Stara Praga, Most Świętokrzyski и rondo Waszyngtona. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Прага-Пулноц?",
      blocks: [
        { title: "Главные улицы Прага-Пулноц — знаем маршруты", text: "Чаще всего выезжаем на Ząbkowska, Stalowa и Inżynierska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Прага-Пулноц для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Galeria Wileńska и Galeria Wileńska, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Прага-Пулноц часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Stara Praga и Most Świętokrzyski." }
      ],
      h2transport: "Лавета Прага-Пулноц — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Праге-Пулноц? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Прага-Пулноц",
      helpIntro: "В районе Прага-Пулноц делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Праге-Пулноц — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Galeria Wileńska и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Прага-Пулноц. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Прага-Північ: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Ząbkowska, Stalowa, Inżynierska, al. Solidarności і 11 Listopada, а також з підземних паркінгів торгових центрів Galeria Wileńska і з зони Stara Praga, Most Świętokrzyski і rondo Waszyngtona. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Прага-Північ?",
      blocks: [
        { title: "Головні вулиці Прага-Північ — знаємо маршрути", text: "Найчастіше виїжджаємо на Ząbkowska, Stalowa і Inżynierska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Прага-Північ для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Galeria Wileńska і Galeria Wileńska, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Прага-Північ часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Stara Praga та Most Świętokrzyski." }
      ],
      h2transport: "Лафета Прага-Північ — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Праці-Північ? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Прага-Північ",
      helpIntro: "У районі Прага-Північ надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Праці-Північ — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Galeria Wileńska та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Прага-Північ. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'srodmiescie': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Śródmieście: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Marszałkowska, Aleje Jerozolimskie, Nowy Świat, Emilii Plater i Świętokrzyska, a także z parkingów podziemnych centrów handlowych Złote Tarasy i Vitkac oraz z rejonu Dworzec Centralny, Pałac Kultury i Plac Defilad. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Śródmieściu?",
      blocks: [
        { title: "Główne ulice Śródmieście — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Marszałkowska, Aleje Jerozolimskie i Nowy Świat. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Śródmieściu to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Złote Tarasy i Vitkac oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Śródmieściu często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Dworzec Centralny i Pałac Kultury." }
      ],
      h2transport: "Laweta Śródmieście — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Śródmieściu? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Śródmieściu",
      helpIntro: "Na Śródmieściu oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Śródmieściu — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Złote Tarasy i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Śródmieściu. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Śródmieście district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Marszałkowska, Aleje Jerozolimskie, Nowy Świat, Emilii Plater and Świętokrzyska, and from underground car parks at Złote Tarasy and Vitkac as well as the Dworzec Centralny, Pałac Kultury and Plac Defilad area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Śródmieście?",
      blocks: [
        { title: "Main streets in Śródmieście — we know the routes", text: "We regularly respond on Marszałkowska, Aleje Jerozolimskie and Nowy Świat. In rush hour we take the fastest access roads — towing in Warsaw’s Śródmieście district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Złote Tarasy and Vitkac and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Śródmieście we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Dworzec Centralny and Pałac Kultury." }
      ],
      h2transport: "Tow truck Śródmieście — vehicle transport 24/7",
      transport: "Need a tow truck in Śródmieście? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Śródmieście",
      helpIntro: "In Śródmieście we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Śródmieście — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Złote Tarasy underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Śródmieście, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Срудместье: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Marszałkowska, Aleje Jerozolimskie, Nowy Świat, Emilii Plater и Świętokrzyska, а также с подземных паркингов торговых центров Złote Tarasy и Vitkac и из зоны Dworzec Centralny, Pałac Kultury и Plac Defilad. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Срудместье?",
      blocks: [
        { title: "Главные улицы Срудместье — знаем маршруты", text: "Чаще всего выезжаем на Marszałkowska, Aleje Jerozolimskie и Nowy Świat. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Срудместье для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Złote Tarasy и Vitkac, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Срудместье часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Dworzec Centralny и Pałac Kultury." }
      ],
      h2transport: "Лавета Срудместье — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Срудместье? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Срудместье",
      helpIntro: "В районе Срудместье делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Срудместье — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Złote Tarasy и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Срудместье. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Середмістя: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Marszałkowska, Aleje Jerozolimskie, Nowy Świat, Emilii Plater і Świętokrzyska, а також з підземних паркінгів торгових центрів Złote Tarasy і Vitkac і з зони Dworzec Centralny, Pałac Kultury і Plac Defilad. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Середмістя?",
      blocks: [
        { title: "Головні вулиці Середмістя — знаємо маршрути", text: "Найчастіше виїжджаємо на Marszałkowska, Aleje Jerozolimskie і Nowy Świat. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Середмістя для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Złote Tarasy і Vitkac, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Середмістя часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Dworzec Centralny та Pałac Kultury." }
      ],
      h2transport: "Лафета Середмістя — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Середмісті? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Середмістя",
      helpIntro: "У районі Середмістя надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Середмісті — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Złote Tarasy та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Середмістя. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'ursynow': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Ursynów: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. KEN, Puławska, Płaskowickiej i Indiry Gandhi, a także z parkingów podziemnych centrów handlowych Atrium Reduta i Galeria Mokotów oraz z rejonu Kabaty, Natolin, Stokłosy, Imielin i metro Kabaty. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Ursynowie?",
      blocks: [
        { title: "Główne ulice Ursynów — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. KEN, Puławska i Płaskowickiej. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Ursynowie to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Atrium Reduta i Galeria Mokotów oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Ursynowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Kabaty i Natolin." }
      ],
      h2transport: "Laweta Ursynów — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Ursynowie? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Ursynowie",
      helpIntro: "Na Ursynowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Ursynowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Atrium Reduta i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Ursynowie. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Ursynów district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. KEN, Puławska, Płaskowickiej and Indiry Gandhi, and from underground car parks at Atrium Reduta and Galeria Mokotów as well as the Kabaty, Natolin, Stokłosy, Imielin and metro Kabaty area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Ursynów?",
      blocks: [
        { title: "Main streets in Ursynów — we know the routes", text: "We regularly respond on al. KEN, Puławska and Płaskowickiej. In rush hour we take the fastest access roads — towing in Warsaw’s Ursynów district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Atrium Reduta and Galeria Mokotów and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Ursynów we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Kabaty and Natolin." }
      ],
      h2transport: "Tow truck Ursynów — vehicle transport 24/7",
      transport: "Need a tow truck in Ursynów? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Ursynów",
      helpIntro: "In Ursynów we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Ursynów — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Atrium Reduta underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Ursynów, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Урсынув: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. KEN, Puławska, Płaskowickiej и Indiry Gandhi, а также с подземных паркингов торговых центров Atrium Reduta и Galeria Mokotów и из зоны Kabaty, Natolin, Stokłosy, Imielin и metro Kabaty. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Урсынув?",
      blocks: [
        { title: "Главные улицы Урсынув — знаем маршруты", text: "Чаще всего выезжаем на al. KEN, Puławska и Płaskowickiej. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Урсынув для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Atrium Reduta и Galeria Mokotów, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Урсынув часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Kabaty и Natolin." }
      ],
      h2transport: "Лавета Урсынув — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Урсынуве? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Урсынув",
      helpIntro: "В районе Урсынув делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Урсынуве — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Atrium Reduta и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Урсынув. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Урсинув: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. KEN, Puławska, Płaskowickiej і Indiry Gandhi, а також з підземних паркінгів торгових центрів Atrium Reduta і Galeria Mokotów і з зони Kabaty, Natolin, Stokłosy, Imielin і metro Kabaty. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Урсинув?",
      blocks: [
        { title: "Головні вулиці Урсинув — знаємо маршрути", text: "Найчастіше виїжджаємо на al. KEN, Puławska і Płaskowickiej. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Урсинув для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Atrium Reduta і Galeria Mokotów, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Урсинув часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Kabaty та Natolin." }
      ],
      h2transport: "Лафета Урсинув — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Урсинуві? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Урсинув",
      helpIntro: "У районі Урсинув надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Урсинуві — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Atrium Reduta та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Урсинув. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'bielany': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Bielany: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Marymoncka, Trakt Rejowski, Żeromskiego i Podczaszyńskiego, a także z parkingów podziemnych centrów handlowych CH Lider i Galeria Bielany oraz z rejonu Młociny, Słodowiec, Lasek Bielański i metro Młociny. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Bielanach?",
      blocks: [
        { title: "Główne ulice Bielany — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Marymoncka, Trakt Rejowski i Żeromskiego. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Bielanach to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Lider i Galeria Bielany oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Bielanach często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Młociny i Słodowiec." }
      ],
      h2transport: "Laweta Bielany — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Bielanach? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Bielanach",
      helpIntro: "Na Bielanach oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Bielanach — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Lider i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Bielanach. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Bielany district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Marymoncka, Trakt Rejowski, Żeromskiego and Podczaszyńskiego, and from underground car parks at CH Lider and Galeria Bielany as well as the Młociny, Słodowiec, Lasek Bielański and metro Młociny area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Bielany?",
      blocks: [
        { title: "Main streets in Bielany — we know the routes", text: "We regularly respond on Marymoncka, Trakt Rejowski and Żeromskiego. In rush hour we take the fastest access roads — towing in Warsaw’s Bielany district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Lider and Galeria Bielany and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Bielany we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Młociny and Słodowiec." }
      ],
      h2transport: "Tow truck Bielany — vehicle transport 24/7",
      transport: "Need a tow truck in Bielany? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Bielany",
      helpIntro: "In Bielany we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Bielany — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Lider underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Bielany, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Беляны: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Marymoncka, Trakt Rejowski, Żeromskiego и Podczaszyńskiego, а также с подземных паркингов торговых центров CH Lider и Galeria Bielany и из зоны Młociny, Słodowiec, Lasek Bielański и metro Młociny. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Беляны?",
      blocks: [
        { title: "Главные улицы Беляны — знаем маршруты", text: "Чаще всего выезжаем на Marymoncka, Trakt Rejowski и Żeromskiego. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Беляны для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Lider и Galeria Bielany, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Беляны часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Młociny и Słodowiec." }
      ],
      h2transport: "Лавета Беляны — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Белянах? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Беляны",
      helpIntro: "В районе Беляны делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Белянах — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Lider и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Беляны. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Біляни: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Marymoncka, Trakt Rejowski, Żeromskiego і Podczaszyńskiego, а також з підземних паркінгів торгових центрів CH Lider і Galeria Bielany і з зони Młociny, Słodowiec, Lasek Bielański і metro Młociny. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Біляни?",
      blocks: [
        { title: "Головні вулиці Біляни — знаємо маршрути", text: "Найчастіше виїжджаємо на Marymoncka, Trakt Rejowski і Żeromskiego. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Біляни для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Lider і Galeria Bielany, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Біляни часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Młociny та Słodowiec." }
      ],
      h2transport: "Лафета Біляни — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Білянах? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Біляни",
      helpIntro: "У районі Біляни надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Білянах — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Lider та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Біляни. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'bemowo': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Bemowo: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Górczewska, Lazurowa, Powstańców Śląskich, Radiowa i Połczyńska, a także z parkingów podziemnych centrów handlowych CH Bemowo i Fort Wola oraz z rejonu Lotnisko Chopina, Górce, Karolin i Fort Bema. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Bemowie?",
      blocks: [
        { title: "Główne ulice Bemowo — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Górczewska, Lazurowa i Powstańców Śląskich. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Bemowie to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Bemowo i Fort Wola oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Bemowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Lotnisko Chopina i Górce." }
      ],
      h2transport: "Laweta Bemowo — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Bemowie? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Bemowie",
      helpIntro: "Na Bemowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Bemowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Bemowo i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Bemowie. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Bemowo district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Górczewska, Lazurowa, Powstańców Śląskich, Radiowa and Połczyńska, and from underground car parks at CH Bemowo and Fort Wola as well as the Lotnisko Chopina, Górce, Karolin and Fort Bema area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Bemowo?",
      blocks: [
        { title: "Main streets in Bemowo — we know the routes", text: "We regularly respond on Górczewska, Lazurowa and Powstańców Śląskich. In rush hour we take the fastest access roads — towing in Warsaw’s Bemowo district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Bemowo and Fort Wola and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Bemowo we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Lotnisko Chopina and Górce." }
      ],
      h2transport: "Tow truck Bemowo — vehicle transport 24/7",
      transport: "Need a tow truck in Bemowo? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Bemowo",
      helpIntro: "In Bemowo we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Bemowo — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Bemowo underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Bemowo, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Бемово: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Górczewska, Lazurowa, Powstańców Śląskich, Radiowa и Połczyńska, а также с подземных паркингов торговых центров CH Bemowo и Fort Wola и из зоны Lotnisko Chopina, Górce, Karolin и Fort Bema. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Бемово?",
      blocks: [
        { title: "Главные улицы Бемово — знаем маршруты", text: "Чаще всего выезжаем на Górczewska, Lazurowa и Powstańców Śląskich. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Бемово для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Bemowo и Fort Wola, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Бемово часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Lotnisko Chopina и Górce." }
      ],
      h2transport: "Лавета Бемово — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Бемово? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Бемово",
      helpIntro: "В районе Бемово делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Бемово — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Bemowo и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Бемово. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Бемово: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Górczewska, Lazurowa, Powstańców Śląskich, Radiowa і Połczyńska, а також з підземних паркінгів торгових центрів CH Bemowo і Fort Wola і з зони Lotnisko Chopina, Górce, Karolin і Fort Bema. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Бемово?",
      blocks: [
        { title: "Головні вулиці Бемово — знаємо маршрути", text: "Найчастіше виїжджаємо на Górczewska, Lazurowa і Powstańców Śląskich. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Бемово для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Bemowo і Fort Wola, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Бемово часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Lotnisko Chopina та Górce." }
      ],
      h2transport: "Лафета Бемово — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Бемово? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Бемово",
      helpIntro: "У районі Бемово надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Бемово — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Bemowo та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Бемово. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'targowek': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Targówek: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Trakt Brzeski, Św. Wincentego, Radzymińska i Kondratowicza, a także z parkingów podziemnych centrów handlowych CH Targówek i M1 Marki oraz z rejonu Bródno, Zacisze, Targówek Mieszkaniowy i S8. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Targówku?",
      blocks: [
        { title: "Główne ulice Targówek — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Trakt Brzeski, Św. Wincentego i Radzymińska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Targówku to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Targówek i M1 Marki oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Targówku często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Bródno i Zacisze." }
      ],
      h2transport: "Laweta Targówek — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Targówku? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Targówku",
      helpIntro: "Na Targówku oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Targówku — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Targówek i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Targówku. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Targówek district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Trakt Brzeski, Św. Wincentego, Radzymińska and Kondratowicza, and from underground car parks at CH Targówek and M1 Marki as well as the Bródno, Zacisze, Targówek Mieszkaniowy and S8 area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Targówek?",
      blocks: [
        { title: "Main streets in Targówek — we know the routes", text: "We regularly respond on Trakt Brzeski, Św. Wincentego and Radzymińska. In rush hour we take the fastest access roads — towing in Warsaw’s Targówek district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Targówek and M1 Marki and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Targówek we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Bródno and Zacisze." }
      ],
      h2transport: "Tow truck Targówek — vehicle transport 24/7",
      transport: "Need a tow truck in Targówek? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Targówek",
      helpIntro: "In Targówek we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Targówek — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Targówek underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Targówek, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Таргувек: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Trakt Brzeski, Św. Wincentego, Radzymińska и Kondratowicza, а также с подземных паркингов торговых центров CH Targówek и M1 Marki и из зоны Bródno, Zacisze, Targówek Mieszkaniowy и S8. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Таргувек?",
      blocks: [
        { title: "Главные улицы Таргувек — знаем маршруты", text: "Чаще всего выезжаем на Trakt Brzeski, Św. Wincentego и Radzymińska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Таргувек для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Targówek и M1 Marki, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Таргувек часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Bródno и Zacisze." }
      ],
      h2transport: "Лавета Таргувек — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Таргувеке? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Таргувек",
      helpIntro: "В районе Таргувек делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Таргувеке — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Targówek и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Таргувек. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Таргувек: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Trakt Brzeski, Św. Wincentego, Radzymińska і Kondratowicza, а також з підземних паркінгів торгових центрів CH Targówek і M1 Marki і з зони Bródno, Zacisze, Targówek Mieszkaniowy і S8. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Таргувек?",
      blocks: [
        { title: "Головні вулиці Таргувек — знаємо маршрути", text: "Найчастіше виїжджаємо на Trakt Brzeski, Św. Wincentego і Radzymińska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Таргувек для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Targówek і M1 Marki, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Таргувек часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Bródno та Zacisze." }
      ],
      h2transport: "Лафета Таргувек — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Таргувеку? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Таргувек",
      helpIntro: "У районі Таргувек надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Таргувеку — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Targówek та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Таргувек. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'ochota': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Ochota: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Grójecka, Aleje Jerozolimskie, Raszyńska i Bitwy Warszawskiej 1920 r., a także z parkingów podziemnych centrów handlowych Blue City i CH Reduta oraz z rejonu Dworzec Zachodni, Rakowiec i Szczęśliwice. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Ochocie?",
      blocks: [
        { title: "Główne ulice Ochota — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Grójecka, Aleje Jerozolimskie i Raszyńska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Ochocie to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Blue City i CH Reduta oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Ochocie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Dworzec Zachodni i Rakowiec." }
      ],
      h2transport: "Laweta Ochota — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Ochocie? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Ochocie",
      helpIntro: "Na Ochocie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Ochocie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Blue City i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Ochocie. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Ochota district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Grójecka, Aleje Jerozolimskie, Raszyńska and Bitwy Warszawskiej 1920 r., and from underground car parks at Blue City and CH Reduta as well as the Dworzec Zachodni, Rakowiec and Szczęśliwice area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Ochota?",
      blocks: [
        { title: "Main streets in Ochota — we know the routes", text: "We regularly respond on Grójecka, Aleje Jerozolimskie and Raszyńska. In rush hour we take the fastest access roads — towing in Warsaw’s Ochota district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Blue City and CH Reduta and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Ochota we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Dworzec Zachodni and Rakowiec." }
      ],
      h2transport: "Tow truck Ochota — vehicle transport 24/7",
      transport: "Need a tow truck in Ochota? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Ochota",
      helpIntro: "In Ochota we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Ochota — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Blue City underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Ochota, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Охота: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Grójecka, Aleje Jerozolimskie, Raszyńska и Bitwy Warszawskiej 1920 r., а также с подземных паркингов торговых центров Blue City и CH Reduta и из зоны Dworzec Zachodni, Rakowiec и Szczęśliwice. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Охота?",
      blocks: [
        { title: "Главные улицы Охота — знаем маршруты", text: "Чаще всего выезжаем на Grójecka, Aleje Jerozolimskie и Raszyńska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Охота для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Blue City и CH Reduta, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Охота часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Dworzec Zachodni и Rakowiec." }
      ],
      h2transport: "Лавета Охота — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Охоте? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Охота",
      helpIntro: "В районе Охота делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Охоте — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Blue City и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Охота. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Охота: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Grójecka, Aleje Jerozolimskie, Raszyńska і Bitwy Warszawskiej 1920 r., а також з підземних паркінгів торгових центрів Blue City і CH Reduta і з зони Dworzec Zachodni, Rakowiec і Szczęśliwice. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Охота?",
      blocks: [
        { title: "Головні вулиці Охота — знаємо маршрути", text: "Найчастіше виїжджаємо на Grójecka, Aleje Jerozolimskie і Raszyńska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Охота для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Blue City і CH Reduta, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Охота часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Dworzec Zachodni та Rakowiec." }
      ],
      h2transport: "Лафета Охота — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Охоті? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Охота",
      helpIntro: "У районі Охота надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Охоті — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Blue City та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Охота. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'wawer': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Wawer: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Wał Miedzeszyński, Trakt Lubelski, Żegańska i Bystrzycka, a także z parkingów podziemnych centrów handlowych Auchan King Cross i CH Promenada oraz z rejonu Falenica, Anin, Międzylesie i Nadwiśle. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Wawrze?",
      blocks: [
        { title: "Główne ulice Wawer — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Wał Miedzeszyński, Trakt Lubelski i Żegańska. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Wawrze to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Auchan King Cross i CH Promenada oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Wawrze często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Falenica i Anin." }
      ],
      h2transport: "Laweta Wawer — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Wawrze? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Wawrze",
      helpIntro: "Na Wawrze oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Wawrze — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Auchan King Cross i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Wawrze. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Wawer district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Wał Miedzeszyński, Trakt Lubelski, Żegańska and Bystrzycka, and from underground car parks at Auchan King Cross and CH Promenada as well as the Falenica, Anin, Międzylesie and Nadwiśle area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Wawer?",
      blocks: [
        { title: "Main streets in Wawer — we know the routes", text: "We regularly respond on Wał Miedzeszyński, Trakt Lubelski and Żegańska. In rush hour we take the fastest access roads — towing in Warsaw’s Wawer district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Auchan King Cross and CH Promenada and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Wawer we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Falenica and Anin." }
      ],
      h2transport: "Tow truck Wawer — vehicle transport 24/7",
      transport: "Need a tow truck in Wawer? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Wawer",
      helpIntro: "In Wawer we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Wawer — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Auchan King Cross underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Wawer, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Вавер: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Wał Miedzeszyński, Trakt Lubelski, Żegańska и Bystrzycka, а также с подземных паркингов торговых центров Auchan King Cross и CH Promenada и из зоны Falenica, Anin, Międzylesie и Nadwiśle. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Вавер?",
      blocks: [
        { title: "Главные улицы Вавер — знаем маршруты", text: "Чаще всего выезжаем на Wał Miedzeszyński, Trakt Lubelski и Żegańska. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Вавер для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Auchan King Cross и CH Promenada, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Вавер часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Falenica и Anin." }
      ],
      h2transport: "Лавета Вавер — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Вавере? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Вавер",
      helpIntro: "В районе Вавер делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Вавере — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Auchan King Cross и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Вавер. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Вавер: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Wał Miedzeszyński, Trakt Lubelski, Żegańska і Bystrzycka, а також з підземних паркінгів торгових центрів Auchan King Cross і CH Promenada і з зони Falenica, Anin, Międzylesie і Nadwiśle. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Вавер?",
      blocks: [
        { title: "Головні вулиці Вавер — знаємо маршрути", text: "Найчастіше виїжджаємо на Wał Miedzeszyński, Trakt Lubelski і Żegańska. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Вавер для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Auchan King Cross і CH Promenada, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Вавер часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Falenica та Anin." }
      ],
      h2transport: "Лафета Вавер — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Вавері? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Вавер",
      helpIntro: "У районі Вавер надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Вавері — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Auchan King Cross та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Вавер. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'bialoleka': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Białołęka: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Modlińska, Marywilska, Światowida i Mehoffera, a także z parkingów podziemnych centrów handlowych CH Galeria Północna i M1 Marki oraz z rejonu Tarchomin, Nowodwory, Choszczówka i Żerań. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Białołęce?",
      blocks: [
        { title: "Główne ulice Białołęka — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Modlińska, Marywilska i Światowida. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Białołęce to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Galeria Północna i M1 Marki oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Białołęce często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Tarchomin i Nowodwory." }
      ],
      h2transport: "Laweta Białołęka — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Białołęce? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Białołęce",
      helpIntro: "Na Białołęce oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Białołęce — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Galeria Północna i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Białołęce. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Białołęka district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Modlińska, Marywilska, Światowida and Mehoffera, and from underground car parks at CH Galeria Północna and M1 Marki as well as the Tarchomin, Nowodwory, Choszczówka and Żerań area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Białołęka?",
      blocks: [
        { title: "Main streets in Białołęka — we know the routes", text: "We regularly respond on Modlińska, Marywilska and Światowida. In rush hour we take the fastest access roads — towing in Warsaw’s Białołęka district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Galeria Północna and M1 Marki and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Białołęka we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Tarchomin and Nowodwory." }
      ],
      h2transport: "Tow truck Białołęka — vehicle transport 24/7",
      transport: "Need a tow truck in Białołęka? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Białołęka",
      helpIntro: "In Białołęka we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Białołęka — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Galeria Północna underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Białołęka, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Бялоленка: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Modlińska, Marywilska, Światowida и Mehoffera, а также с подземных паркингов торговых центров CH Galeria Północna и M1 Marki и из зоны Tarchomin, Nowodwory, Choszczówka и Żerań. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Бялоленка?",
      blocks: [
        { title: "Главные улицы Бялоленка — знаем маршруты", text: "Чаще всего выезжаем на Modlińska, Marywilska и Światowida. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Бялоленка для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Galeria Północna и M1 Marki, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Бялоленка часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Tarchomin и Nowodwory." }
      ],
      h2transport: "Лавета Бялоленка — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Бялоленке? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Бялоленка",
      helpIntro: "В районе Бялоленка делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Бялоленке — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Galeria Północna и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Бялоленка. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Бялоленка: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Modlińska, Marywilska, Światowida і Mehoffera, а також з підземних паркінгів торгових центрів CH Galeria Północna і M1 Marki і з зони Tarchomin, Nowodwory, Choszczówka і Żerań. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Бялоленка?",
      blocks: [
        { title: "Головні вулиці Бялоленка — знаємо маршрути", text: "Найчастіше виїжджаємо на Modlińska, Marywilska і Światowida. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Бялоленка для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Galeria Północna і M1 Marki, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Бялоленка часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Tarchomin та Nowodwory." }
      ],
      h2transport: "Лафета Бялоленка — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Бялоленці? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Бялоленка",
      helpIntro: "У районі Бялоленка надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Бялоленці — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Galeria Północna та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Бялоленка. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'wilanow': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Wilanów: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. Rzeczypospolitej, Przyczółkowa, Klimczaka i Sarmacka, a także z parkingów podziemnych centrów handlowych Wilanów Park i Galeria Wilanów oraz z rejonu Miasteczko Wilanów, Pałac w Wilanowie i Powsin. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Wilanowie?",
      blocks: [
        { title: "Główne ulice Wilanów — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. Rzeczypospolitej, Przyczółkowa i Klimczaka. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Wilanowie to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Wilanów Park i Galeria Wilanów oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Wilanowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Miasteczko Wilanów i Pałac w Wilanowie." }
      ],
      h2transport: "Laweta Wilanów — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Wilanowie? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Wilanowie",
      helpIntro: "Na Wilanowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Wilanowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Wilanów Park i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Wilanowie. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Wilanów district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. Rzeczypospolitej, Przyczółkowa, Klimczaka and Sarmacka, and from underground car parks at Wilanów Park and Galeria Wilanów as well as the Miasteczko Wilanów, Pałac w Wilanowie and Powsin area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Wilanów?",
      blocks: [
        { title: "Main streets in Wilanów — we know the routes", text: "We regularly respond on al. Rzeczypospolitej, Przyczółkowa and Klimczaka. In rush hour we take the fastest access roads — towing in Warsaw’s Wilanów district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Wilanów Park and Galeria Wilanów and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Wilanów we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Miasteczko Wilanów and Pałac w Wilanowie." }
      ],
      h2transport: "Tow truck Wilanów — vehicle transport 24/7",
      transport: "Need a tow truck in Wilanów? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Wilanów",
      helpIntro: "In Wilanów we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Wilanów — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Wilanów Park underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Wilanów, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Виланув: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. Rzeczypospolitej, Przyczółkowa, Klimczaka и Sarmacka, а также с подземных паркингов торговых центров Wilanów Park и Galeria Wilanów и из зоны Miasteczko Wilanów, Pałac w Wilanowie и Powsin. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Виланув?",
      blocks: [
        { title: "Главные улицы Виланув — знаем маршруты", text: "Чаще всего выезжаем на al. Rzeczypospolitej, Przyczółkowa и Klimczaka. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Виланув для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Wilanów Park и Galeria Wilanów, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Виланув часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Miasteczko Wilanów и Pałac w Wilanowie." }
      ],
      h2transport: "Лавета Виланув — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Вилануве? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Виланув",
      helpIntro: "В районе Виланув делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Вилануве — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Wilanów Park и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Виланув. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Вілянув: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. Rzeczypospolitej, Przyczółkowa, Klimczaka і Sarmacka, а також з підземних паркінгів торгових центрів Wilanów Park і Galeria Wilanów і з зони Miasteczko Wilanów, Pałac w Wilanowie і Powsin. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Вілянув?",
      blocks: [
        { title: "Головні вулиці Вілянув — знаємо маршрути", text: "Найчастіше виїжджаємо на al. Rzeczypospolitej, Przyczółkowa і Klimczaka. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Вілянув для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Wilanów Park і Galeria Wilanów, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Вілянув часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Miasteczko Wilanów та Pałac w Wilanowie." }
      ],
      h2transport: "Лафета Вілянув — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Вілянуві? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Вілянув",
      helpIntro: "У районі Вілянув надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Вілянуві — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Wilanów Park та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Вілянув. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'ursus': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Ursus: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. Czechowicka, Posag 7 Panien, Bodycha i Gierdziejewskiego, a także z parkingów podziemnych centrów handlowych Factory Ursus i CH Skorosze oraz z rejonu Czechowice, Skorosze i Niedźwiadek. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Ursusie?",
      blocks: [
        { title: "Główne ulice Ursus — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. Czechowicka, Posag 7 Panien i Bodycha. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Ursusie to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Factory Ursus i CH Skorosze oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Ursusie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Czechowice i Skorosze." }
      ],
      h2transport: "Laweta Ursus — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Ursusie? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Ursusie",
      helpIntro: "Na Ursusie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Ursusie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Factory Ursus i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Ursusie. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Ursus district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. Czechowicka, Posag 7 Panien, Bodycha and Gierdziejewskiego, and from underground car parks at Factory Ursus and CH Skorosze as well as the Czechowice, Skorosze and Niedźwiadek area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Ursus?",
      blocks: [
        { title: "Main streets in Ursus — we know the routes", text: "We regularly respond on al. Czechowicka, Posag 7 Panien and Bodycha. In rush hour we take the fastest access roads — towing in Warsaw’s Ursus district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Factory Ursus and CH Skorosze and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Ursus we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Czechowice and Skorosze." }
      ],
      h2transport: "Tow truck Ursus — vehicle transport 24/7",
      transport: "Need a tow truck in Ursus? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Ursus",
      helpIntro: "In Ursus we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Ursus — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Factory Ursus underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Ursus, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Урсус: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. Czechowicka, Posag 7 Panien, Bodycha и Gierdziejewskiego, а также с подземных паркингов торговых центров Factory Ursus и CH Skorosze и из зоны Czechowice, Skorosze и Niedźwiadek. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Урсус?",
      blocks: [
        { title: "Главные улицы Урсус — знаем маршруты", text: "Чаще всего выезжаем на al. Czechowicka, Posag 7 Panien и Bodycha. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Урсус для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Factory Ursus и CH Skorosze, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Урсус часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Czechowice и Skorosze." }
      ],
      h2transport: "Лавета Урсус — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Урсусе? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Урсус",
      helpIntro: "В районе Урсус делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Урсусе — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Factory Ursus и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Урсус. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Урсус: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. Czechowicka, Posag 7 Panien, Bodycha і Gierdziejewskiego, а також з підземних паркінгів торгових центрів Factory Ursus і CH Skorosze і з зони Czechowice, Skorosze і Niedźwiadek. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Урсус?",
      blocks: [
        { title: "Головні вулиці Урсус — знаємо маршрути", text: "Найчастіше виїжджаємо на al. Czechowicka, Posag 7 Panien і Bodycha. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Урсус для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Factory Ursus і CH Skorosze, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Урсус часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Czechowice та Skorosze." }
      ],
      h2transport: "Лафета Урсус — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Урсусі? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Урсус",
      helpIntro: "У районі Урсус надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Урсусі — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Factory Ursus та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Урсус. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'wlochy': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Włochy: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. Krakowska, 1 Sierpnia, Popularna i Globusowa, a także z parkingów podziemnych centrów handlowych CH Blue City i Factory Annopol oraz z rejonu Lotnisko Chopina, Okęcie, Rakowiec i Salomea. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Włochach?",
      blocks: [
        { title: "Główne ulice Włochy — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. Krakowska, 1 Sierpnia i Popularna. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Włochach to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH Blue City i Factory Annopol oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Włochach często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Lotnisko Chopina i Okęcie." }
      ],
      h2transport: "Laweta Włochy — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Włochach? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Włochach",
      helpIntro: "Na Włochach oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Włochach — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH Blue City i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Włochach. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Włochy district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. Krakowska, 1 Sierpnia, Popularna and Globusowa, and from underground car parks at CH Blue City and Factory Annopol as well as the Lotnisko Chopina, Okęcie, Rakowiec and Salomea area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Włochy?",
      blocks: [
        { title: "Main streets in Włochy — we know the routes", text: "We regularly respond on al. Krakowska, 1 Sierpnia and Popularna. In rush hour we take the fastest access roads — towing in Warsaw’s Włochy district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH Blue City and Factory Annopol and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Włochy we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Lotnisko Chopina and Okęcie." }
      ],
      h2transport: "Tow truck Włochy — vehicle transport 24/7",
      transport: "Need a tow truck in Włochy? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Włochy",
      helpIntro: "In Włochy we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Włochy — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH Blue City underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Włochy, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Влохи: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. Krakowska, 1 Sierpnia, Popularna и Globusowa, а также с подземных паркингов торговых центров CH Blue City и Factory Annopol и из зоны Lotnisko Chopina, Okęcie, Rakowiec и Salomea. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Влохи?",
      blocks: [
        { title: "Главные улицы Влохи — знаем маршруты", text: "Чаще всего выезжаем на al. Krakowska, 1 Sierpnia и Popularna. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Влохи для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH Blue City и Factory Annopol, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Влохи часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Lotnisko Chopina и Okęcie." }
      ],
      h2transport: "Лавета Влохи — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Влохах? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Влохи",
      helpIntro: "В районе Влохи делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Влохах — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH Blue City и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Влохи. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Влохи: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. Krakowska, 1 Sierpnia, Popularna і Globusowa, а також з підземних паркінгів торгових центрів CH Blue City і Factory Annopol і з зони Lotnisko Chopina, Okęcie, Rakowiec і Salomea. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Влохи?",
      blocks: [
        { title: "Головні вулиці Влохи — знаємо маршрути", text: "Найчастіше виїжджаємо на al. Krakowska, 1 Sierpnia і Popularna. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Влохи для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH Blue City і Factory Annopol, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Влохи часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Lotnisko Chopina та Okęcie." }
      ],
      h2transport: "Лафета Влохи — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Влохах? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Влохи",
      helpIntro: "У районі Влохи надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Влохах — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH Blue City та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Влохи. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'rembertow': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Rembertów: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. gen. A. Chruściela, Żołnierska, Cyrulików i Chełmżyńska, a także z parkingów podziemnych centrów handlowych CH King Cross i CH Promenada oraz z rejonu Kawęczyn, Nowy Rembertów i Stary Rembertów. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Rembertowie?",
      blocks: [
        { title: "Główne ulice Rembertów — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. gen. A. Chruściela, Żołnierska i Cyrulików. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Rembertowie to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych CH King Cross i CH Promenada oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Rembertowie często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Kawęczyn i Nowy Rembertów." }
      ],
      h2transport: "Laweta Rembertów — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Rembertowie? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Rembertowie",
      helpIntro: "Na Rembertowie oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Rembertowie — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego CH King Cross i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Rembertowie. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Rembertów district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. gen. A. Chruściela, Żołnierska, Cyrulików and Chełmżyńska, and from underground car parks at CH King Cross and CH Promenada as well as the Kawęczyn, Nowy Rembertów and Stary Rembertów area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Rembertów?",
      blocks: [
        { title: "Main streets in Rembertów — we know the routes", text: "We regularly respond on al. gen. A. Chruściela, Żołnierska and Cyrulików. In rush hour we take the fastest access roads — towing in Warsaw’s Rembertów district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at CH King Cross and CH Promenada and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Rembertów we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Kawęczyn and Nowy Rembertów." }
      ],
      h2transport: "Tow truck Rembertów — vehicle transport 24/7",
      transport: "Need a tow truck in Rembertów? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Rembertów",
      helpIntro: "In Rembertów we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Rembertów — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from CH King Cross underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Rembertów, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Рембертув: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. gen. A. Chruściela, Żołnierska, Cyrulików и Chełmżyńska, а также с подземных паркингов торговых центров CH King Cross и CH Promenada и из зоны Kawęczyn, Nowy Rembertów и Stary Rembertów. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Рембертув?",
      blocks: [
        { title: "Главные улицы Рембертув — знаем маршруты", text: "Чаще всего выезжаем на al. gen. A. Chruściela, Żołnierska и Cyrulików. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Рембертув для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов CH King Cross и CH Promenada, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Рембертув часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Kawęczyn и Nowy Rembertów." }
      ],
      h2transport: "Лавета Рембертув — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Рембертуве? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Рембертув",
      helpIntro: "В районе Рембертув делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Рембертуве — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга CH King Cross и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Рембертув. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Рембертув: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. gen. A. Chruściela, Żołnierska, Cyrulików і Chełmżyńska, а також з підземних паркінгів торгових центрів CH King Cross і CH Promenada і з зони Kawęczyn, Nowy Rembertów і Stary Rembertów. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Рембертув?",
      blocks: [
        { title: "Головні вулиці Рембертув — знаємо маршрути", text: "Найчастіше виїжджаємо на al. gen. A. Chruściela, Żołnierska і Cyrulików. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Рембертув для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів CH King Cross і CH Promenada, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Рембертув часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Kawęczyn та Nowy Rembertów." }
      ],
      h2transport: "Лафета Рембертув — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Рембертуві? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Рембертув",
      helpIntro: "У районі Рембертув надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Рембертуві — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу CH King Cross та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Рембертув. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'wesola': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Wesoła: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy Trakt Brzeski, 1 Praskiego Pułku, Niemcewicza i Wirażowa, a także z parkingów podziemnych centrów handlowych Galeria Wileńska i CH Promenada oraz z rejonu Stara Miłosna, Wola Grzybowska i Zielona. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Wesołej?",
      blocks: [
        { title: "Główne ulice Wesoła — znamy dojazdy", text: "Najczęściej wyjeżdżamy na Trakt Brzeski, 1 Praskiego Pułku i Niemcewicza. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Wesołej to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Galeria Wileńska i CH Promenada oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Wesołej często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Stara Miłosna i Wola Grzybowska." }
      ],
      h2transport: "Laweta Wesoła — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Wesołej? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Wesołej",
      helpIntro: "Na Wesołej oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Wesołej — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Galeria Wileńska i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Wesołej. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Wesoła district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around Trakt Brzeski, 1 Praskiego Pułku, Niemcewicza and Wirażowa, and from underground car parks at Galeria Wileńska and CH Promenada as well as the Stara Miłosna, Wola Grzybowska and Zielona area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Wesoła?",
      blocks: [
        { title: "Main streets in Wesoła — we know the routes", text: "We regularly respond on Trakt Brzeski, 1 Praskiego Pułku and Niemcewicza. In rush hour we take the fastest access roads — towing in Warsaw’s Wesoła district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Galeria Wileńska and CH Promenada and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Wesoła we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Stara Miłosna and Wola Grzybowska." }
      ],
      h2transport: "Tow truck Wesoła — vehicle transport 24/7",
      transport: "Need a tow truck in Wesoła? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Wesoła",
      helpIntro: "In Wesoła we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Wesoła — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Galeria Wileńska underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Wesoła, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Весола: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах Trakt Brzeski, 1 Praskiego Pułku, Niemcewicza и Wirażowa, а также с подземных паркингов торговых центров Galeria Wileńska и CH Promenada и из зоны Stara Miłosna, Wola Grzybowska и Zielona. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Весола?",
      blocks: [
        { title: "Главные улицы Весола — знаем маршруты", text: "Чаще всего выезжаем на Trakt Brzeski, 1 Praskiego Pułku и Niemcewicza. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Весола для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Galeria Wileńska и CH Promenada, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Весола часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Stara Miłosna и Wola Grzybowska." }
      ],
      h2transport: "Лавета Весола — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Весолой? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Весола",
      helpIntro: "В районе Весола делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Весолой — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Galeria Wileńska и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Весола. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Весола: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях Trakt Brzeski, 1 Praskiego Pułku, Niemcewicza і Wirażowa, а також з підземних паркінгів торгових центрів Galeria Wileńska і CH Promenada і з зони Stara Miłosna, Wola Grzybowska і Zielona. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Весола?",
      blocks: [
        { title: "Головні вулиці Весола — знаємо маршрути", text: "Найчастіше виїжджаємо на Trakt Brzeski, 1 Praskiego Pułku і Niemcewicza. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Весола для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Galeria Wileńska і CH Promenada, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Весола часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Stara Miłosna та Wola Grzybowska." }
      ],
      h2transport: "Лафета Весола — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Весолій? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Весола",
      helpIntro: "У районі Весола надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Весолій — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Galeria Wileńska та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Весола. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
    },
  },
  'zoliborz': {
    pl: {
      lead: "Pomoc drogowa w Warszawie — dzielnica Żoliborz: laweta w Warszawie i holowanie w Warszawie 24/7 z INNSER. Często holujemy samochody, motocykle, skutery i hulajnogi elektryczne przy al. Wojska Polskiego, Mickiewicza, Krasińskiego i Potocka, a także z parkingów podziemnych centrów handlowych Arkadia i CH Klif oraz z rejonu Plac Wilsona, Stary Żoliborz, Marymont i metro Plac Wilsona. Działamy całą dobę — holowanie, transport motocykli i skuterów, awaryjne odpalanie przy rozładowanym akumulatorze.",
      whyTitle: "Dlaczego wybrać INNSER na Żoliborzu?",
      blocks: [
        { title: "Główne ulice Żoliborz — znamy dojazdy", text: "Najczęściej wyjeżdżamy na al. Wojska Polskiego, Mickiewicza i Krasińskiego. W godzinach szczytu omijamy korki i dojeżdżamy najkrótszą trasą — holowanie w Warszawie na Żoliborzu to nasza codzienność." },
        { title: "Centra handlowe i parkingi podziemne", text: "Holujemy auta z parkingów podziemnych Arkadia i CH Klif oraz z garaży osiedlowych. Mamy niskoprofilową lawetę — ewakuacja z parkingu podziemnego lub centrum handlowego nie jest problemem." },
        { title: "Samochody, motocykle, skutery i hulajnogi", text: "Na Żoliborzu często transportujemy nie tylko auta osobowe, ale też motocykle, skutery i hulajnogi elektryczne — z ulic, osiedli i spod biurowców w rejonie Plac Wilsona i Stary Żoliborz." }
      ],
      h2transport: "Laweta Żoliborz — holowanie i transport pojazdów 24h",
      transport: "Potrzebujesz lawety na Żoliborzu? INNSER — pomoc drogowa w Warszawie z dojazdami zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km), wycena przez telefon. Transport aut, motocykli i skuterów do warsztatu lub w dowolne miejsce w promieniu 500 km.",
      h2help: "Całodobowa pomoc drogowa na Żoliborzu",
      helpIntro: "Na Żoliborzu oferujemy pełen zakres usług pomocy drogowej — mówimy po polsku, angielsku, rosyjsku i ukraińsku:",
      bullets: [
        "Holowanie i laweta na Żoliborzu — auta, motocykle, skutery, hulajnogi",
        "Awaryjne odpalanie — rozładowany akumulator (kable / booster), także w garażu",
        "Holowanie z parkingu podziemnego Arkadia i innych CH",
        "Dojazd ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — lokalna pomoc drogowa i laweta na Żoliborzu. Setki interwencji w tej dzielnicy, uczciwa wycena i obsługa w czterech językach."
    },
    en: {
      lead: "Towing and breakdown assistance in Warsaw — Żoliborz district: INNSER provides 24/7 roadside help, flatbed towing and recovery. We frequently tow cars, motorcycles, scooters and e-scooters around al. Wojska Polskiego, Mickiewicza, Krasińskiego and Potocka, and from underground car parks at Arkadia and CH Klif as well as the Plac Wilsona, Stary Żoliborz, Marymont and metro Plac Wilsona area. Jump starts for a flat battery, underground parking recovery and multi-language support (PL / EN / RU / UA).",
      whyTitle: "Why choose INNSER in Żoliborz?",
      blocks: [
        { title: "Main streets in Żoliborz — we know the routes", text: "We regularly respond on al. Wojska Polskiego, Mickiewicza and Krasińskiego. In rush hour we take the fastest access roads — towing in Warsaw’s Żoliborz district is part of our daily work." },
        { title: "Shopping centres and underground parking", text: "We recover vehicles from underground parking at Arkadia and CH Klif and from residential garages. Our low-profile flatbed handles tight ramps — evacuating a car from a shopping centre car park is routine for us." },
        { title: "Cars, motorcycles, scooters and e-scooters", text: "In Żoliborz we often transport not only cars but also motorcycles, scooters and electric scooters — from streets, estates and office areas near Plac Wilsona and Stary Żoliborz." }
      ],
      h2transport: "Tow truck Żoliborz — vehicle transport 24/7",
      transport: "Need a tow truck in Żoliborz? INNSER — towing and breakdown assistance in Warsaw, usually on site in 20–30 minutes. Towing in Warsaw from 250 PLN (up to 15 km), quote by phone. We transport cars, motorcycles and scooters to a workshop or anywhere within 500 km.",
      h2help: "24/7 roadside assistance in Żoliborz",
      helpIntro: "In Żoliborz we offer a full roadside package — we speak Polish, English, Russian and Ukrainian:",
      bullets: [
        "Towing and flatbed in Żoliborz — cars, motorcycles, scooters, e-scooters",
        "Jump start for a flat / dead battery (cables or booster), including underground garages",
        "Recovery from Arkadia underground parking and other malls",
        "Arrival ~20–30 min, tel. 506-001-057 — PL / EN / RU / UA"
      ],
      closing: "INNSER — local towing and breakdown assistance in Żoliborz, Warsaw. Honest pricing, hundreds of local jobs and service in four languages."
    },
    ru: {
      lead: "Эвакуатор в Варшаве и лавета в Варшаве — район Жолибож: круглосуточная помощь INNSER. Часто эвакуируем машины, мотоциклы, скутеры и электросамокаты на улицах al. Wojska Polskiego, Mickiewicza, Krasińskiego и Potocka, а также с подземных паркингов торговых центров Arkadia и CH Klif и из зоны Plac Wilsona, Stary Żoliborz, Marymont и metro Plac Wilsona. Прикурить машину при разряженном аккумуляторе, эвакуировать с подземного паркинга или торгового центра — звоните 24/7. Говорим на русском, польском, английском и украинском.",
      whyTitle: "Почему выбрать INNSER в районе Жолибож?",
      blocks: [
        { title: "Главные улицы Жолибож — знаем маршруты", text: "Чаще всего выезжаем на al. Wojska Polskiego, Mickiewicza и Krasińskiego. В час пик объезжаем пробки и приезжаем кратчайшим путём — эвакуатор в Варшаве по району Жолибож для нас привычная работа." },
        { title: "Торговые центры и подземные паркинги", text: "Эвакуируем авто с подземных паркингов Arkadia и CH Klif, а также из дворовых гаражей. Низкопрофильная лавета заезжает на узкие рампы — эвакуация с подземного паркинга или торгового центра без проблем." },
        { title: "Авто, мотоциклы, скутеры и электросамокаты", text: "В районе Жолибож часто перевозим не только легковые авто, но и мотоциклы, скутеры и электрические самокаты — с улиц, ЖК и от офисов у Plac Wilsona и Stary Żoliborz." }
      ],
      h2transport: "Лавета Жолибож — эвакуатор и перевозка 24/7",
      transport: "Нужен эвакуатор в Жолибоже? INNSER — лавета в Варшаве, обычно приезд за 20–30 минут. Эвакуация от 250 zł (до 15 км), цена по телефону заранее. Перевозка авто, мотоциклов и скутеров в сервис или в любую точку в радиусе 500 км.",
      h2help: "Круглосуточная помощь на дороге — Жолибож",
      helpIntro: "В районе Жолибож делаем полный спектр услуг — говорим по-русски, по-польски, по-английски и по-украински:",
      bullets: [
        "Эвакуатор и лавета в Жолибоже — авто, мотоциклы, скутеры, электросамокаты",
        "Прикурить машину — разряжен аккумулятор (кабели / бустер), в том числе в подземном гараже",
        "Эвакуация с подземного паркинга Arkadia и других ТЦ",
        "Приезд ~20–30 мин, тел. 506-001-057 — RU / PL / EN / UA"
      ],
      closing: "INNSER — ваш эвакуатор в Варшаве в районе Жолибож. Честная цена, сотни выездов в этом районе и обслуживание на четырёх языках."
    },
    ua: {
      lead: "Евакуатор в Варшаві та лафета в Варшаві — район Жолібож: цілодобова допомога INNSER. Часто евакуюємо авто, мотоцикли, скутери та електросамокати на вулицях al. Wojska Polskiego, Mickiewicza, Krasińskiego і Potocka, а також з підземних паркінгів торгових центрів Arkadia і CH Klif і з зони Plac Wilsona, Stary Żoliborz, Marymont і metro Plac Wilsona. Прикурити авто при розрядженому акумуляторі, евакуація з підземного паркінгу або ТЦ — 24/7. Розмовляємо українською, польською, російською та англійською.",
      whyTitle: "Чому обрати INNSER у районі Жолібож?",
      blocks: [
        { title: "Головні вулиці Жолібож — знаємо маршрути", text: "Найчастіше виїжджаємо на al. Wojska Polskiego, Mickiewicza і Krasińskiego. У годину пік об’їжджаємо затори й приїжджаємо найкоротшим шляхом — евакуація в Варшаві районом Жолібож для нас звична робота." },
        { title: "Торгові центри та підземні паркінги", text: "Евакуюємо авто з підземних паркінгів Arkadia і CH Klif, а також з дворових гаражів. Низькопрофільна лафета заїжджає на вузькі рампи — евакуація з підземного паркінгу чи торгового центру без проблем." },
        { title: "Авто, мотоцикли, скутери та електросамокати", text: "У районі Жолібож часто перевозимо не лише легкові авто, а й мотоцикли, скутери та електричні самокати — з вулиць, ЖК і від офісів біля Plac Wilsona та Stary Żoliborz." }
      ],
      h2transport: "Лафета Жолібож — евакуатор і перевезення 24/7",
      transport: "Потрібен евакуатор у Жолібожі? INNSER — лафета в Варшаві, зазвичай приїзд за 20–30 хвилин. Евакуація від 250 zł (до 15 км), ціна телефоном наперед. Перевезення авто, мотоциклів і скутерів у сервіс або в будь-яку точку в радіусі 500 км.",
      h2help: "Цілодобова допомога на дорозі — Жолібож",
      helpIntro: "У районі Жолібож надаємо повний спектр послуг — розмовляємо українською, польською, російською та англійською:",
      bullets: [
        "Евакуатор і лафета в Жолібожі — авто, мотоцикли, скутери, електросамокати",
        "Прикурити авто — розряджений акумулятор (кабелі / бустер), зокрема в підземному гаражі",
        "Евакуація з підземного паркінгу Arkadia та інших ТЦ",
        "Приїзд ~20–30 хв, тел. 506-001-057 — UA / PL / RU / EN"
      ],
      closing: "INNSER — ваш евакуатор у Варшаві в районі Жолібож. Чесна ціна, сотні виїздів у цьому районі та обслуговування чотирма мовами."
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
