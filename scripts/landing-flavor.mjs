/**
 * Hand-written local flavor for dzielnice / trasy (PL/EN/RU/UA).
 * Each entry is unique prose — not a shared template with swapped names.
 */

/** @type {Record<string, Record<'pl'|'en'|'ru'|'ua', { scene: string, ops: string }>>} */
export const DISTRICT_FLAVOR = {
  mokotow: {
    pl: {
      scene:
        'Mokotów to mieszanka biur na Służewcu, gęstej zabudowy Dolnego Mokotowa i spokojniejszej Sadyby. Najwięcej wezwań mamy przy Puławskiej i Wołoskiej — tu korki potrafią zablokować cały pas, a auto po awarii stoi w miejscu, gdzie zaraz robi się kolejka. Przy Galerii Mokotów i Sadyba Best Mall regularnie schodzimy na poziomy −1/−2: niski wjazd, wąskie rampy, czasem trzeba najpierw wypchnąć auto spod słupka. Wieczorem dochodzą osiedla Stegny i okolice Belwederskiej, gdzie garaże pod blokami mają ostre zakręty.',
      ops:
        'Na Służewcu laweta często staje przy szlabanie — warto mieć kod lub kontakt do ochrony. Zimą odpalanie przy biurowcach to codzienność; latem częściej holujemy po kolizjach na Domaniewskiej. Partnerskie warsztaty w dzielnicy skracają drogę: nie woźzimy auta na drugi koniec miasta bez potrzeby. Tel. 506-001-057 — cena i ETA z góry, PL / EN / RU / UA.',
    },
    en: {
      scene:
        'Mokotów mixes Służewiec offices, dense Dolny Mokotów housing and quieter Sadyba. Most calls come on Puławska and Wołoska — a breakdown there quickly becomes a jam. At Galeria Mokotów and Sadyba Best Mall we regularly work levels −1/−2: low clearance, tight ramps, sometimes a push clear of a pillar first. Evenings add Stegny and Belwederska estates with sharp underground garage turns.',
      ops:
        'At Służewiec the flatbed often waits at the barrier — a gate code or security contact helps. Winter means jump-starts by offices; summer means more crash tows on Domaniewska. Partner workshops in the district keep the trip short. Call 506-001-057 for price and ETA upfront — PL / EN / RU / UA.',
    },
    ru: {
      scene:
        'Мокотув — это офисы на Служевце, плотная застройка Дольного Мокотува и более спокойная Садыба. Больше всего вызовов на Пулавской и Волоской: поломка сразу собирает пробку. У Galeria Mokotów и Sadyba Best Mall регулярно работаем на −1/−2: низкий въезд, узкие рампы, иногда нужно сначала выкатить авто из-под колонны. Вечером — Стегны и Бельведерская, где дворовые гаражи с крутыми поворотами.',
      ops:
        'На Служевце лавета часто стоит у шлагбаума — полезен код или охрана. Зимой — прикур у офисов, летом — эвакуация после ДТП на Доманевской. Партнёрские СТО в районе сокращают путь. Тел. 506-001-057 — цена и ETA заранее, RU / PL / EN / UA.',
    },
    ua: {
      scene:
        'Мокотув — офіси на Служевці, щільна забудова Дольного Мокотува і спокійніша Садиба. Найбільше викликів на Пулавській і Волоській: поломка одразу збирає затор. Біля Galeria Mokotów і Sadyba Best Mall часто працюємо на −1/−2: низький заїзд, вузькі рампи. Ввечері — Стегни та Бельведерська з крутими підземними гаражами.',
      ops:
        'На Служевці лафета часто стоїть біля шлагбаума — потрібен код або охорона. Взимку — прикур біля офісів, влітку — евакуація після ДТП на Доманевській. Партнерські СТО в районі скорочують шлях. Тел. 506-001-057 — ціна й ETA заздалегідь, UA / PL / RU / EN.',
    },
  },
  wola: {
    pl: {
      scene:
        'Wola to dziś wieżowce przy rondzie Daszyńskiego, Browary, Norblin i jednocześnie klasyczne ulice Wolska–Kasprzaka. Holujemy spod biur na Prostej i Towarowej, a także z Wola Parku, gdzie parking podziemny bywa pełny w godzinach szczytu zakupów. Przy Dworcu Zachodnim liczy się szybki zjazd z Alej — auto na awarii nie może stać na wlocie. Ulrychów i okolice Okopowej to ciasne podwórka i niskie bramy.',
      ops:
        'Nocą na Woli często odpala się auta po klubach i hotelach; w dzień — busy kurierskie i SUV z garaży wieżowców. Znajomość wjazdów od Górczewskiej skraca dojazd o kilka minut w korku. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Wola today means towers at Rondo Daszyńskiego, Browary and Norblin — plus classic Wolska–Kasprzaka. We tow from offices on Prosta and Towarowa and from Wola Park’s busy underground levels. Near Dworzec Zachodni a stalled car on the Aleje slip road is urgent. Ulrychów and Okopowa mean tight yards and low gates.',
      ops:
        'At night we jump-start cars after clubs and hotels; by day — courier vans and SUVs from tower garages. Knowing Górczewska access cuts minutes in traffic. Call 506-001-057.',
    },
    ru: {
      scene:
        'Воля — башни у рондо Дашиньского, Browary, Norblin и классика Wolska–Kasprzaka. Эвакуируем от офисов на Prosta и Towarowa и из Wola Park. У Dworzec Zachodni машина на въезде с аллей — срочный выезд. Ulrychów и Okopowa — тесные дворы и низкие арки.',
      ops:
        'Ночью — прикур после клубов и отелей, днём — фургоны и SUV из гаражей небоскрёбов. Знание подъездов с Górczewska экономит минуты. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Воля — вежі біля рондо Дашиньського, Browary, Norblin і класика Wolska–Kasprzaka. Евакуюємо від офісів на Prosta і Towarowa та з Wola Park. Біля Dworzec Zachodni авто на з’їзді з алей — терміновий виїзд. Ulrychów і Okopowa — тісні двори.',
      ops:
        'Вночі — прикур після клубів і готелів, вдень — фургони та SUV. Знання під’їздів з Górczewska економить хвилини. Тел. 506-001-057.',
    },
  },
  'praga-poludnie': {
    pl: {
      scene:
        'Praga-Południe łączy Saską Kępę, Grochów i Gocław ze Stadionem Narodowym. Wał Miedzeszyński i Grochowska to długie arterie, gdzie awaria w szczycie oznacza natychmiastowe wezwanie. Z CH Promenada schodzimy na parking podziemny; przy Galerii Wileńskiej dojazd od strony mostów bywa zakorkowany. Po koncertach i meczach na Stadionie kolejka holowań rośnie w ciągu godziny.',
      ops:
        'Na Gocławiu i Ostrobramskiej znamy osiedlowe garaże z niskim stropem. Trakt Lubelski łączy nas z kierunkiem S17 — często kończymy transport już poza dzielnicą. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Praga-Południe links Saska Kępa, Grochów and Gocław with the National Stadium. Wał Miedzeszyński and Grochowska are long arterials where a rush-hour breakdown needs an immediate tow. We work Promenada’s underground levels; Galeria Wileńska access from the bridges jams easily. After stadium events tow calls spike within an hour.',
      ops:
        'In Gocław and on Ostrobramska we know low-ceiling estate garages. Trakt Lubelski links toward S17 — jobs often finish outside the district. Call 506-001-057.',
    },
    ru: {
      scene:
        'Прага-Полудне — Саска Кемпа, Грохув, Гоцлав и Национальный стадион. Wał Miedzeszyński и Grochowska в час пик требуют быстрого эвакуатора. Работаем на подземке Promenada; к Galeria Wileńska от мостов часто пробка. После матчей и концертов вызовы растут за час.',
      ops:
        'На Гоцлаве и Ostrobramska знаем низкие дворовые гаражи. Trakt Lubelski ведёт к S17. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Прага-Полудне — Саска Кемпа, Грохув, Гоцлав і Національний стадіон. Wał Miedzeszyński і Grochowska в годину пік потребують швидкої лафети. Працюємо на підземці Promenada; до Galeria Wileńska від мостів часто затор. Після матчів виклики ростуть за годину.',
      ops:
        'На Гоцлаві та Ostrobramska знаємо низькі дворові гаражі. Trakt Lubelski веде до S17. Тел. 506-001-057.',
    },
  },
  'praga-polnoc': {
    pl: {
      scene:
        'Praga-Północ to Stara Praga, Ząbkowska i okolice mostu Świętokrzyskiego. Wąskie uliczki przy Stalowej i Inżynierskiej wymagają małej lawety i precyzyjnego manewru — nie każdy holownik tu wjedzie. Al. Solidarności to szybki korytarz, ale awaria na środkowym pasie to natychmiastowa interwencja. Galeria Wileńska i rondo Waszyngtona to typowe punkty odbioru po zakupach i po nocy.',
      ops:
        'Wieczorem pomagamy przy lokalach na Ząbkowskiej; rano — dojazd do mostów w stronę centrum. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Praga-Północ is Stara Praga, Ząbkowska and the Świętokrzyski bridge area. Narrow streets by Stalowa and Inżynierska need a compact flatbed — not every truck fits. Al. Solidarności is a fast corridor, but a middle-lane failure is urgent. Galeria Wileńska and rondo Waszyngtona are common after shopping or nights out.',
      ops:
        'Evenings we help by Ząbkowska venues; mornings — toward the bridges into the centre. Call 506-001-057.',
    },
    ru: {
      scene:
        'Прага-Пулноц — Стара Прага, Ząbkowska и мост Свентокшиский. Узкие окна у Stalowa и Inżynierska требуют компактной лаветы. Al. Solidarności — быстрый коридор, поломка на средней полосе срочная. Galeria Wileńska и рондо Вашингтона — частые точки.',
      ops:
        'Вечером — у заведений на Ząbkowska, утром — к мостам в центр. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Прага-Північ — Стара Прага, Ząbkowska і міст Свентокшиський. Вузькі вулиці біля Stalowa та Inżynierska потребують компактної лафети. Al. Solidarności — швидкий коридор; поломка на середній смузі — терміново. Galeria Wileńska і рондо Вашингтона — часті точки.',
      ops:
        'Ввечері — біля закладів на Ząbkowska, вранці — до мостів у центр. Тел. 506-001-057.',
    },
  },
  srodmiescie: {
    pl: {
      scene:
        'Śródmieście to Marszałkowska, Aleje Jerozolimskie, Nowy Świat i strefa wokół Pałacu Kultury. Tu holowanie wymaga znajomości buspasów, stref płatnego parkowania i wjazdów pod Złote Tarasy oraz Vitkac. Auto po awarii przy Dworcu Centralnym blokuje ruch taksówek i autobusów — liczy się każda minuta. Emilii Plater i okolice Placu Defilad to częste odpalanie po nocy i transport aut z hoteli.',
      ops:
        'W centrum nie zawsze da się stanąć lawetą „obok” — planujemy punkt załadunku z dyspozytorem. Tel. 506-001-057, obsługa PL / EN / RU / UA.',
    },
    en: {
      scene:
        'Śródmieście is Marszałkowska, Aleje Jerozolimskie, Nowy Świat and the Palace of Culture zone. Towing here means bus lanes, paid parking rules and entries under Złote Tarasy and Vitkac. A breakdown by Dworzec Centralny blocks taxis and buses — minutes matter. Emilii Plater and Plac Defilad mean night jump-starts and hotel car moves.',
      ops:
        'Downtown you cannot always park the flatbed “next to” the car — we plan the load point with the dispatcher. Call 506-001-057 — PL / EN / RU / UA.',
    },
    ru: {
      scene:
        'Срудместье — Marszałkowska, аллеи, Nowy Świat и зона Дворца культуры. Нужны знания bus-полос, платной парковки и въездов под Złote Tarasy и Vitkac. Поломка у Центрального вокзала блокирует такси — важны минуты. Emilii Plater и Plac Defilad — ночной прикур и отели.',
      ops:
        'В центре лавету не всегда поставить «рядом» — точку погрузки планируем с диспетчером. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Середмістя — Marszałkowska, алеї, Nowy Świat і зона Палацу культури. Потрібні bus-смуги, платне паркування й заїзди під Złote Tarasy та Vitkac. Поломка біля Центрального вокзалу блокує таксі. Emilii Plater і Plac Defilad — нічний прикур і готелі.',
      ops:
        'У центрі лафету не завжди поставити «поруч» — точку завантаження плануємо з диспетчером. Тел. 506-001-057.',
    },
  },
  ursynow: {
    pl: {
      scene:
        'Ursynów to al. KEN, metro Kabaty–Natolin–Stokłosy i gęste osiedla panelowe. Awaria przy stacji metra albo na Puławskiej w stronę Piaseczna to klasyczny scenariusz. Parkingi przy Imielinie i Płaskowickiej bywają pełne; auta zablokowane na −1 holujemy niskoprofilową lawetą. Wieczorem dojazd od strony Lasu Kabackiego bywa szybszy niż przez KEN w korku.',
      ops:
        'Często woźzimy do warsztatów w stronę Mokotowa albo lokalnie przy Gandhi. Odpalanie zimą przy blokach — standard. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Ursynów means al. KEN, the Kabaty–Natolin–Stokłosy metro line and dense panel estates. Breakdowns by stations or on Puławska toward Piaseczno are classic. Car parks at Imielin and Płaskowicka fill up; we use a low-profile flatbed on −1. Evenings the Kabacki Forest side can beat KEN in traffic.',
      ops:
        'We often tow toward Mokotów workshops or locally near Gandhi. Winter jump-starts by blocks are routine. Call 506-001-057.',
    },
    ru: {
      scene:
        'Урсынув — al. KEN, метро Kabaty–Natolin–Stokłosy и панельные ЖК. Поломки у станций или на Пулавской к Пясечно — классика. Паркинги у Imielin и Płaskowicka полные; на −1 — низкопрофильная лавета. Вечером сторона Лясу Кабацкого иногда быстрее KEN.',
      ops:
        'Часто везём к сервисам к Мокотуву или локально у Gandhi. Зимний прикур у домов — норма. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Урсинів — al. KEN, метро Kabaty–Natolin–Stokłosy і панельні ЖК. Поломки біля станцій або на Пулавській до Пясечна — класика. Паркінги біля Imielin і Płaskowicka повні; на −1 — низькопрофільна лафета. Ввечері бік Лісу Кабацького інколи швидший за KEN.',
      ops:
        'Часто веземо до сервісів до Мокотува або локально біля Gandhi. Зимовий прикур біля будинків — норма. Тел. 506-001-057.',
    },
  },
  bielany: {
    pl: {
      scene:
        'Bielany to Marymoncka, Młociny i Lasek Bielański. Końcówka metra M1 przy Młocinach zbiera wezwania po awariach Park & Ride i po zimowych porankach. CH Lider / Galeria Bielany — typowe parkingi podziemne. Od strony Traktu Rejowskiego i Żeromskiego omijamy korki przy wlocie na mosty.',
      ops:
        'Słodowiec i Podczaszyńskiego to osiedlowe garaże; często wystarczy booster zamiast holowania. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Bielany is Marymoncka, Młociny and Lasek Bielański. The M1 metro end at Młociny brings Park & Ride failures and winter mornings. CH Lider / Galeria Bielany are typical underground jobs. From Trakt Rejowski and Żeromskiego we dodge bridge approach jams.',
      ops:
        'Słodowiec and Podczaszyńskiego are estate garages — often a booster beats a tow. Call 506-001-057.',
    },
    ru: {
      scene:
        'Беляны — Marymoncka, Młociny и Lasek Bielański. Конец метро M1 у Młociny — Park & Ride и зимние утра. CH Lider / Galeria Bielany — подземки. С Trakt Rejowski и Żeromskiego объезжаем пробки к мостам.',
      ops:
        'Słodowiec и Podczaszyńskiego — дворовые гаражи; часто хватает бустера. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Біляни — Marymoncka, Młociny і Lasek Bielański. Кінець метро M1 біля Młociny — Park & Ride і зимові ранкові. CH Lider / Galeria Bielany — підземки. З Trakt Rejowski і Żeromskiego об’їжджаємо затори до мостів.',
      ops:
        'Słodowiec і Podczaszyńskiego — дворові гаражі; часто вистачає бустера. Тел. 506-001-057.',
    },
  },
  bemowo: {
    pl: {
      scene:
        'Bemowo leży przy Górczewskiej, Lazurowej i Powstańców Śląskich — blisko wylotu na zachód i lotniska. CH Bemowo i Fort Wola to parkingi, z których holujemy auta po zakupach. Górce, Karolin i Fort Bema to nowe osiedla z głębokimi garażami. Połczyńska w szczycie bywa wolniejsza niż dojazd od Bemowa Fortu.',
      ops:
        'Częste wezwania: rozładowany akumulator przy blokach i laweta po kolizji na wlocie do miasta. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Bemowo sits on Górczewska, Lazurowa and Powstańców Śląskich — near the western exit and the airport. CH Bemowo and Fort Wola are post-shopping tow points. Górce, Karolin and Fort Bema have deep garages. Połczyńska in rush hour can be slower than Bemowo Fort access.',
      ops:
        'Common jobs: dead batteries by blocks and crash tows on the city approach. Call 506-001-057.',
    },
    ru: {
      scene:
        'Бемово — Górczewska, Lazurowa и Powstańców Śląskich, рядом западный выезд и аэропорт. CH Bemowo и Fort Wola — точки после шопинга. Górce, Karolin, Fort Bema — глубокие гаражи. Połczyńska в пик медленнее заезда от Bemowo Fort.',
      ops:
        'Частые вызовы: севший АКБ у домов и лавета после ДТП на въезде. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Бемово — Górczewska, Lazurowa і Powstańców Śląskich, поруч західний виїзд і аеропорт. CH Bemowo і Fort Wola — точки після шопінгу. Górce, Karolin, Fort Bema — глибокі гаражі. Połczyńska в пік повільніша за заїзд від Bemowo Fort.',
      ops:
        'Часті виклики: сілий АКБ біля будинків і лафета після ДТП на в’їзді. Тел. 506-001-057.',
    },
  },
  targowek: {
    pl: {
      scene:
        'Targówek to Bródno, Zacisze i Targówek Mieszkaniowy plus CH Targówek. Trakt Brzeski i Radzymińska prowadzą na wschód — awarie na tych ulicach łączymy często z kierunkiem Marki / Ząbki. Św. Wincentego i Kondratowicza to gęsta zabudowa; parkingi osiedlowe bywają ciasne. M1 Marki jest „za miedzą”, ale klienci dzwonią z Targówka po holowanie do centrum.',
      ops:
        'Zimą odpalanie na Bródnie, latem — holowanie po stłuczkach na Trakcie Brzeskim. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Targówek is Bródno, Zacisze and Targówek Mieszkaniowy plus CH Targówek. Trakt Brzeski and Radzymińska run east — jobs often link toward Marki / Ząbki. Św. Wincentego and Kondratowicza are dense; estate parks are tight. M1 Marki is next door, but clients call from Targówek for tows into the centre.',
      ops:
        'Winter: jump-starts in Bródno; summer: crash tows on Trakt Brzeski. Call 506-001-057.',
    },
    ru: {
      scene:
        'Таргувек — Брудно, Зацише, Таргувек Мешканевы и CH Targówek. Trakt Brzeski и Radzymińska ведут на восток — часто стык с Marki / Ząbki. Św. Wincentego и Kondratowicza — плотная застройка. M1 Marki рядом, но звонят с Таргувека в центр.',
      ops:
        'Зимой прикур на Брудно, летом эвакуация после ДТП на Trakt Brzeski. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Таргувек — Брудно, Зацише, Таргувек Мешканевий і CH Targówek. Trakt Brzeski і Radzymińska ведуть на схід — часто стик із Marki / Ząbki. Św. Wincentego і Kondratowicza — щільна забудова. M1 Marki поруч, але дзвонять з Таргувека в центр.',
      ops:
        'Взимку прикур на Брудно, влітку евакуація після ДТП на Trakt Brzeski. Тел. 506-001-057.',
    },
  },
  ochota: {
    pl: {
      scene:
        'Ochota to Grójecka, Aleje Jerozolimskie, Blue City i Reduta. Przy Dworcu Zachodnim i Rakowcu awaria blokuje dojazd do Alej — reagujemy szybko. Parkingi Blue City i CH Reduta to poziomy −1/−2 i wąskie spiralne zjazdy. Szczęśliwice i Raszyńska to mieszanka domów i biur; zimą akumulatory padają po nocy na parkingu.',
      ops:
        'Często łączymy holowanie z warsztatem przy Grójeckiej albo dalszym transportem na zachód miasta. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Ochota is Grójecka, Aleje Jerozolimskie, Blue City and Reduta. By Dworzec Zachodni and Rakowiec a stall blocks Aleje access — we move fast. Blue City and CH Reduta mean −1/−2 and spiral ramps. Szczęśliwice and Raszyńska mix homes and offices; winter batteries die overnight in car parks.',
      ops:
        'We often link the tow to a Grójecka workshop or further west across the city. Call 506-001-057.',
    },
    ru: {
      scene:
        'Охота — Grójecka, аллеи, Blue City и Reduta. У Dworzec Zachodni и Rakowiec поломка блокирует аллеи. Blue City и CH Reduta — −1/−2 и спирали. Szczęśliwice и Raszyńska — дома и офисы; зимой АКБ садится за ночь.',
      ops:
        'Часто везём к сервису на Grójecka или дальше на запад. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Охота — Grójecka, алеї, Blue City і Reduta. Біля Dworzec Zachodni і Rakowiec поломка блокує алеї. Blue City і CH Reduta — −1/−2 і спіралі. Szczęśliwice і Raszyńska — будинки й офіси; взимку АКБ сідає за ніч.',
      ops:
        'Часто веземо до сервісу на Grójecka або далі на захід. Тел. 506-001-057.',
    },
  },
  wawer: {
    pl: {
      scene:
        'Wawer rozciąga się wzdłuż Wału Miedzeszyńskiego i Traktu Lubelskiego: Falenica, Anin, Międzylesie. To dłuższe dojazdy niż w centrum, ale znamy skróty między osiedlami nad Wisłą. Auchan King Cross i okolice Promenady dają wezwania z parkingów; po burzach na Wałe auta łapią wodę albo stają po kolizjach.',
      ops:
        'Żegańska i boczne ulice Faleniczy wymagają ostrożnego manewru lawetą. Często kończymy kurs w stronę S17 / Otwocka. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Wawer stretches along Wał Miedzeszyński and Trakt Lubelski: Falenica, Anin, Międzylesie. Longer ETAs than downtown, but we know riverside shortcuts. Auchan King Cross and Promenada bring car-park jobs; after storms on the Wał cars flood or crash.',
      ops:
        'Żegańska and Falenica side streets need careful flatbed work. Jobs often finish toward S17 / Otwock. Call 506-001-057.',
    },
    ru: {
      scene:
        'Вавер вдоль Wał Miedzeszyński и Trakt Lubelski: Falenica, Anin, Międzylesie. Дольше, чем в центре, но знаем сокращения у Вислы. Auchan King Cross и Promenada — паркинги; после ливней на Wał — вода или ДТП.',
      ops:
        'Żegańska и боковые улицы Falenica требуют аккуратной лаветы. Часто финиш к S17 / Otwock. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Вавер уздовж Wał Miedzeszyński і Trakt Lubelski: Falenica, Anin, Międzylesie. Довше, ніж у центрі, але знаємо скорочення біля Вісли. Auchan King Cross і Promenada — паркінги; після злив на Wał — вода чи ДТП.',
      ops:
        'Żegańska і бічні вулиці Falenica потребують обережної лафети. Часто фініш до S17 / Otwock. Тел. 506-001-057.',
    },
  },
  bialoleka: {
    pl: {
      scene:
        'Białołęka to Modlińska, Tarchomin, Nowodwory i Galeria Północna. Nowe osiedla rosną szybko — garaże podziemne bywają labiryntem, a ochrona prosi o zgłoszenie przed wjazdem lawety. Marywilska i Światowida w szczycie stoją; omijamy je przez Mehoffera, gdy się da. Kierunek Marki / M1 to częsty transport po zakupach.',
      ops:
        'Choszczówka i północ dzielnicy = dłuższy dojazd, cenę mówimy z uwzględnieniem km. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Białołęka is Modlińska, Tarchomin, Nowodwory and Galeria Północna. New estates grow fast — underground garages are mazes and security wants a call before the flatbed enters. Marywilska and Światowida jam; we cut via Mehoffera when possible. Marki / M1 is a common post-shopping tow.',
      ops:
        'Choszczówka and the north mean longer ETA — price includes km. Call 506-001-057.',
    },
    ru: {
      scene:
        'Бялоленка — Modlińska, Tarchomin, Nowodwory и Galeria Północna. Новые ЖК — лабиринты паркингов, охрана просит звонок до въезда лаветы. Marywilska и Światowida стоят; режем через Mehoffera. Marki / M1 — частый рейс после ТЦ.',
      ops:
        'Choszczówka и север — дольше, цена с учётом км. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Бялоленка — Modlińska, Tarchomin, Nowodwory і Galeria Północna. Нові ЖК — лабіринти паркінгів, охорона просить дзвінок до заїзду лафети. Marywilska і Światowida стоять; ріжемо через Mehoffera. Marki / M1 — частий рейс після ТРЦ.',
      ops:
        'Choszczówka і північ — довше, ціна з урахуванням км. Тел. 506-001-057.',
    },
  },
  wilanow: {
    pl: {
      scene:
        'Wilanów to Miasteczko Wilanów, al. Rzeczypospolitej i Przyczółkowa przy pałacu. Niskie auta i SUV z podziemnych parkingów Wilanów Park / Galeria Wilanów to nasza codzienność. Klimczaka i Sarmacka — wąskie ulice osiedlowe; laweta nie zawsze wjedzie „na skróty”. Powsin i zjazd na S2 wymagają znajomości węzłów.',
      ops:
        'Po weekendach przy pałacu więcej wezwań turystycznych; w tygodniu — biura i osiedla. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Wilanów is Miasteczko Wilanów, al. Rzeczypospolitej and Przyczółkowa by the palace. Low cars and SUVs from Wilanów Park / Galeria Wilanów underground parks are routine. Klimczaka and Sarmacka are narrow estate streets — the flatbed cannot always cut through. Powsin and the S2 slip need junction knowledge.',
      ops:
        'Weekends by the palace bring tourist calls; weekdays — offices and estates. Call 506-001-057.',
    },
    ru: {
      scene:
        'Вилянув — Miasteczko Wilanów, al. Rzeczypospolitej и Przyczółkowa у дворца. Низкие авто и SUV с подземки Wilanów Park / Galeria Wilanów — ежедневно. Klimczaka и Sarmacka — узкие улицы. Powsin и съезд на S2 — знание развязок.',
      ops:
        'По выходным у дворца — туристы, в будни — офисы и ЖК. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Вілянув — Miasteczko Wilanów, al. Rzeczypospolitej і Przyczółkowa біля палацу. Низькі авто й SUV з підземки Wilanów Park / Galeria Wilanów — щодня. Klimczaka і Sarmacka — вузькі вулиці. Powsin і з’їзд на S2 — знання розв’язок.',
      ops:
        'У вихідні біля палацу — туристи, у будні — офіси й ЖК. Тел. 506-001-057.',
    },
  },
  ursus: {
    pl: {
      scene:
        'Ursus to Czechowice, Skorosze i Niedźwiadek przy Factory Ursus. Al. Czechowicka i Posag 7 Panien prowadzą ruch z zachodu Warszawy; awaria tu często dotyczy aut wracających z pracy. CH Skorosze i garaże nowych bloków — typowe −1. Bodycha łączy z kierunkiem Piastów / Pruszków.',
      ops:
        'Holowanie do lokalnego serwisu albo dalej na Ochotę — wycena z km. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Ursus is Czechowice, Skorosze and Niedźwiadek by Factory Ursus. Al. Czechowicka and Posag 7 Panien carry western Warsaw traffic — commute breakdowns are common. CH Skorosze and new-block garages mean −1 jobs. Bodycha links toward Piastów / Pruszków.',
      ops:
        'Tow to a local workshop or on to Ochota — priced by km. Call 506-001-057.',
    },
    ru: {
      scene:
        'Урсус — Czechowice, Skorosze, Niedźwiadek у Factory Ursus. Al. Czechowicka и Posag 7 Panien — западный трафик, поломки с работы. CH Skorosze и новые ЖК — −1. Bodycha к Piastów / Pruszków.',
      ops:
        'Эвакуация в локальный сервис или на Охоту — цена по км. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Урсус — Czechowice, Skorosze, Niedźwiadek біля Factory Ursus. Al. Czechowicka і Posag 7 Panien — західний трафік, поломки з роботи. CH Skorosze і нові ЖК — −1. Bodycha до Piastów / Pruszków.',
      ops:
        'Евакуація в локальний сервіс або на Охоту — ціна по км. Тел. 506-001-057.',
    },
  },
  wlochy: {
    pl: {
      scene:
        'Włochy to Okęcie, Salomea i al. Krakowska przy lotnisku Chopina. Awaria na dojeździe do terminalu albo na S79 / łącznikach to priorytet — nie blokujemy ruchu lotniskowego. 1 Sierpnia i Popularna to lokalne ulice z parkingami przy firmach. Blue City jest „za rogiem” od strony Ochoty, ale adresy wezwań często padają jako Włochy.',
      ops:
        'Znamy miejsca postoju lawety bez mandatu przy strefie lotniska. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Włochy is Okęcie, Salomea and al. Krakowska by Chopin Airport. A stall on the terminal approach or S79 links is priority — we keep airport traffic moving. 1 Sierpnia and Popularna are local streets by company parks. Blue City is around the corner from Ochota, but many pins say Włochy.',
      ops:
        'We know flatbed waiting spots that avoid airport-zone tickets. Call 506-001-057.',
    },
    ru: {
      scene:
        'Влохи — Okęcie, Salomea и al. Krakowska у аэропорта Шопена. Поломка на подъезде к терминалу или S79 — приоритет. 1 Sierpnia и Popularna — локальные улицы у фирм. Blue City рядом с Охотой, но метки часто «Włochy».',
      ops:
        'Знаем стоянки лаветы без штрафа у зоны аэропорта. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Влохи — Okęcie, Salomea і al. Krakowska біля аеропорту Шопена. Поломка на під’їзді до терміналу чи S79 — пріоритет. 1 Sierpnia і Popularna — локальні вулиці біля фірм. Blue City поруч з Охотою, але мітки часто «Włochy».',
      ops:
        'Знаємо стоянки лафети без штрафу біля зони аеропорту. Тел. 506-001-057.',
    },
  },
  rembertow: {
    pl: {
      scene:
        'Rembertów to al. Chruściela, Kawęczyn i spokojniejsze ulice Żołnierska / Chełmżyńska. Mniej biurowców niż w centrum, za to dłuższe odcinki i domy jednorodzinne — laweta wjeżdża na posesję ostrożnie. Klienci często łączą holowanie z kierunkiem Wawer / Promenada albo dalej na wschód.',
      ops:
        'Nowy i Stary Rembertów — różne dojazdy; pytamy o konkretną ulicę przy telefonie. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Rembertów is al. Chruściela, Kawęczyn and quieter Żołnierska / Chełmżyńska. Fewer offices than downtown, longer stretches and houses — we enter drives carefully. Clients often link tows toward Wawer / Promenada or further east.',
      ops:
        'Nowy vs Stary Rembertów means different access — we confirm the street on the call. Call 506-001-057.',
    },
    ru: {
      scene:
        'Рембертув — al. Chruściela, Kawęczyn и спокойные Żołnierska / Chełmżyńska. Меньше офисов, длиннее участки и частные дома — заезд на участок аккуратно. Часто стык с Wawer / Promenada или дальше на восток.',
      ops:
        'Новый и Старый Рембертув — разные подъезды; уточняем улицу по телефону. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Рембертув — al. Chruściela, Kawęczyn і спокійні Żołnierska / Chełmżyńska. Менше офісів, довші ділянки й приватні будинки — заїзд на ділянку обережно. Часто стик із Wawer / Promenada чи далі на схід.',
      ops:
        'Новий і Старий Рембертув — різні під’їзди; уточнюємо вулицю телефоном. Тел. 506-001-057.',
    },
  },
  wesola: {
    pl: {
      scene:
        'Wesoła to Stara Miłosna, Wola Grzybowska i Trakt Brzeski na wschodnim krańcu Warszawy. Dojazd dłuższy, ale trasa prosta — DK2 / Trakt. 1 Praskiego Pułku i Niemcewicza to lokalne punkty; Zielona okolica bywa bez latarni nocą — bierzemy latarki i ostrożny załadunek.',
      ops:
        'Często holujemy do warsztatu w stronę Pragi albo Sulejówka. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Wesoła is Stara Miłosna, Wola Grzybowska and Trakt Brzeski on Warsaw’s east edge. Longer ETA, simple route via DK2 / Trakt. 1 Praskiego Pułku and Niemcewicza are local pins; Zielona can be dark at night — torches and careful loading.',
      ops:
        'We often tow toward Praga workshops or Sulejówek. Call 506-001-057.',
    },
    ru: {
      scene:
        'Весола — Stara Miłosna, Wola Grzybowska и Trakt Brzeski на востоке Варшавы. Дольше, маршрут простой по DK2. 1 Praskiego Pułku и Niemcewicza — локальные точки; Zielona ночью тёмная — фонари и аккуратная погрузка.',
      ops:
        'Часто везём к сервису к Праге или Сулеювеку. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Весола — Stara Miłosna, Wola Grzybowska і Trakt Brzeski на сході Варшави. Довше, маршрут простий по DK2. 1 Praskiego Pułku і Niemcewicza — локальні точки; Zielona вночі темна — ліхтарі й акуратне завантаження.',
      ops:
        'Часто веземо до сервісу до Праги або Сулєювека. Тел. 506-001-057.',
    },
  },
  zoliborz: {
    pl: {
      scene:
        'Żoliborz to Plac Wilsona, Stary Żoliborz i Marymont przy al. Wojska Polskiego. Kamienice i wąskie ulice Mickiewicza / Krasińskiego wymagają precyzji — nie wjeżdżamy „na siłę”. Arkadia i CH Klif to parkingi z drugiej strony Wisły mentalnie blisko, ale dojazd lawetą planujemy osobno. Potocka przy wiśle = mokry asfalt po deszczu i ślisko zimą.',
      ops:
        'Nocne odpalanie przy Placu Wilsona i holowanie do serwisu na Bielanach / Żoliborzu. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Żoliborz is Plac Wilsona, Stary Żoliborz and Marymont on al. Wojska Polskiego. Tenements and narrow Mickiewicza / Krasińskiego need precision — no forcing the truck. Arkadia and CH Klif feel close across the river, but we plan the flatbed route separately. Potocka by the river is wet after rain and icy in winter.',
      ops:
        'Night jump-starts by Plac Wilsona and tows to Bielany / Żoliborz workshops. Call 506-001-057.',
    },
    ru: {
      scene:
        'Жолибож — Plac Wilsona, Старый Жолибож и Marymont на al. Wojska Polskiego. Каменицы и узкие Mickiewicza / Krasińskiego — без силы. Arkadia и CH Klif «рядом» за рекой, но маршрут лаветы планируем отдельно. Potocka у Вислы — мокро и скользко.',
      ops:
        'Ночной прикур у Plac Wilsona и эвакуация на Беляны / Жолибож. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Жолібож — Plac Wilsona, Старий Жолібож і Marymont на al. Wojska Polskiego. Камениці й вузькі Mickiewicza / Krasińskiego — без сили. Arkadia і CH Klif «поруч» за рікою, але маршрут лафети плануємо окремо. Potocka біля Вісли — мокро й слизько.',
      ops:
        'Нічний прикур біля Plac Wilsona й евакуація на Біляни / Жолібож. Тел. 506-001-057.',
    },
  },
  zabki: {
    pl: {
      scene:
        'Ząbki to przedmieście przy DK8 / Radzymińskiej, granica z Targówkiem. Ul. Powstańców, Orla i Piłsudskiego — typowe adresy; Galeria Ząbki i dojazd od Marków to parkingi po zakupach. Rano dojazd z Warszawy stoi na wlocie — podajemy realne ETA, nie „piętnaście minut zawsze”.',
      ops:
        'Holowanie do serwisu w Ząbkach albo z powrotem do Pragi / Targówka. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Ząbki is a suburb on DK8 / Radzymińska by the Targówek border. Powstańców, Orla and Piłsudskiego are typical pins; Galeria Ząbki and Marki access mean post-shopping tows. Morning inbound traffic from Warsaw stacks — we give real ETA, not a fake 15 minutes.',
      ops:
        'Tow to a Ząbki workshop or back into Praga / Targówek. Call 506-001-057.',
    },
    ru: {
      scene:
        'Зомбки — пригород на DK8 / Radzymińska у границы с Таргувеком. Powstańców, Orla, Piłsudskiego — типичные адреса; Galeria Ząbki и Marki — после ТЦ. Утром въезд из Варшавы стоит — реальное ETA.',
      ops:
        'Эвакуация в сервис в Зомбках или назад в Прагу / Таргувек. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Зомбки — передмістя на DK8 / Radzymińska біля Таргувека. Powstańców, Orla, Piłsudskiego — типові адреси; Galeria Ząbki і Marki — після ТРЦ. Вранці в’їзд з Варшави стоїть — реальне ETA.',
      ops:
        'Евакуація в сервіс у Зомбках або назад у Прагу / Таргувек. Тел. 506-001-057.',
    },
  },
  marki: {
    pl: {
      scene:
        'Marki żyją wokół M1 i ul. Piłsudskiego / Fabrycznej. Parking M1 to poziomy pełne w weekend — holowanie z −1 po zakupach to klasyka. Pustelnik i Struga to dalsze osiedla; dystans doliczamy uczciwie. Wyjazd na DK8 w stronę Wołomina bywa zakorkowany po wypadku — wtedy laweta zdejmuje auto z pobocza.',
      ops:
        'Obsługujemy też klientów z Zielonki i Kobyłki „przy okazji” trasy. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Marki revolves around M1 and Piłsudskiego / Fabryczna. M1 parking fills on weekends — −1 post-shopping tows are classic. Pustelnik and Struga are further out; we add distance honestly. DK8 toward Wołomin jams after crashes — we clear the shoulder.',
      ops:
        'We also cover Zielonka and Kobyłka clients on the same corridor. Call 506-001-057.',
    },
    ru: {
      scene:
        'Марки — вокруг M1 и Piłsudskiego / Fabryczna. Паркинг M1 по выходным полный — −1 после шопинга классика. Pustelnik и Struga дальше; км считаем честно. DK8 на Wołomin после ДТП — снимаем с обочины.',
      ops:
        'По пути берём Zielonka и Kobyłka. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Марки — навколо M1 і Piłsudskiego / Fabryczna. Паркінг M1 у вихідні повний — −1 після шопінгу класика. Pustelnik і Struga далі; км рахуємо чесно. DK8 на Wołomin після ДТП — знімаємо з узбіччя.',
      ops:
        'По дорозі беремо Zielonka і Kobyłka. Тел. 506-001-057.',
    },
  },
  otwock: {
    pl: {
      scene:
        'Otwock leży na linii kolejowej / SKM przy Andriollego i Armii Krajowej. Świder i centrum Otwocka to mieszanka willi i bloków; zimą drogi bywają oblodzone wcześniej niż w Warszawie. Galeria Otwock i dojazd od Traktu Lubelskiego to typowe punkty. Klienci często proszą holowanie do serwisu w Warszawie albo lokalnie.',
      ops:
        'Karczewska i Warszawska — główne osie; ETA zwykle 30–45 min z miasta. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Otwock sits on the rail / SKM line by Andriollego and Armii Krajowej. Świder and the centre mix villas and blocks; ice hits earlier than in Warsaw. Galeria Otwock and Trakt Lubelski access are typical pins. Clients often want a Warsaw workshop or a local drop.',
      ops:
        'Karczewska and Warszawska are the main axes; ETA usually 30–45 min from the city. Call 506-001-057.',
    },
    ru: {
      scene:
        'Отвоцк на ж/д / SKM у Andriollego и Armii Krajowej. Świder и центр — виллы и панели; гололёд раньше, чем в Варшаве. Galeria Otwock и Trakt Lubelski — типичные точки. Часто — в сервис в Варшаву или локально.',
      ops:
        'Karczewska и Warszawska — оси; ETA обычно 30–45 мин из города. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Отвоцьк на залізниці / SKM біля Andriollego і Armii Krajowej. Świder і центр — вілли й панелі; ожеледиця раніше, ніж у Варшаві. Galeria Otwock і Trakt Lubelski — типові точки. Часто — в сервіс у Варшаву або локально.',
      ops:
        'Karczewska і Warszawska — осі; ETA зазвичай 30–45 хв з міста. Тел. 506-001-057.',
    },
  },
  pruszkow: {
    pl: {
      scene:
        'Pruszków to Warszawska, Potulicka i Kraszewskiego plus węzeł przy DK720 / S8. Żbików i centrum — częste awarie po dojściu z pracy z Warszawy. CH Pruszków i okolice Factory Annopol (blisko) dają parkingowe wezwania. Znamy zjazd z S8 tak, by nie kręcić się w korku przy Konotopie.',
      ops:
        'Holowanie lokalne albo powrót do Warszawy — cena z km i taryfą nocną 22–07. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Pruszków is Warszawska, Potulicka and Kraszewskiego plus the DK720 / S8 junction. Żbików and the centre see post-commute failures from Warsaw. CH Pruszków and nearby Factory Annopol bring car-park jobs. We know the S8 exit to avoid looping in Konotopa traffic.',
      ops:
        'Local tow or back to Warsaw — priced by km and the 22–07 night tariff. Call 506-001-057.',
    },
    ru: {
      scene:
        'Прушкув — Warszawska, Potulicka, Kraszewskiego и узел DK720 / S8. Żbików и центр — поломки после работы из Варшавы. CH Pruszków и Factory Annopol рядом — паркинги. Знаем съезд с S8 без кругов у Konotopa.',
      ops:
        'Локально или назад в Варшаву — цена по км и ночной тариф 22–07. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Прушкув — Warszawska, Potulicka, Kraszewskiego і вузол DK720 / S8. Żbików і центр — поломки після роботи з Варшави. CH Pruszków і Factory Annopol поруч — паркінги. Знаємо з’їзд з S8 без кіл біля Konotopa.',
      ops:
        'Локально або назад у Варшаву — ціна по км і нічний тариф 22–07. Тел. 506-001-057.',
    },
  },
  piaseczno: {
    pl: {
      scene:
        'Piaseczno siedzi na Puławskiej — wylocie południowym Warszawy. Warszawska, Słowackiego i Energetyczna to lokalne osie; Auchan Piaseczno i CH przy Puławskiej to parkingi. Zalesie Górne i Julianów = dłuższy dojazd między willami. W szczycie Puławska stoi od Wilanowa — podajemy ETA z buforem.',
      ops:
        'Często holujemy do serwisu w Piasecznie albo z powrotem na Ursynów. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Piaseczno sits on Puławska — Warsaw’s southern exit. Warszawska, Słowackiego and Energetyczna are local axes; Auchan Piaseczno and Puławska malls are car-park jobs. Zalesie Górne and Julianów mean longer villa runs. Rush-hour Puławska queues from Wilanów — ETA with buffer.',
      ops:
        'We often tow to a Piaseczno workshop or back to Ursynów. Call 506-001-057.',
    },
    ru: {
      scene:
        'Пясечно на Пулавской — южный выезд Варшавы. Warszawska, Słowackiego, Energetyczna — оси; Auchan и ТЦ у Пулавской — паркинги. Zalesie Górne и Julianów — дальше между виллами. В пик Пулавская стоит от Вилянува — ETA с запасом.',
      ops:
        'Часто в сервис в Пясечно или назад на Урсынув. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Пясечно на Пулавській — південний виїзд Варшави. Warszawska, Słowackiego, Energetyczna — осі; Auchan і ТРЦ біля Пулавської — паркінги. Zalesie Górne і Julianów — далі між віллами. У пік Пулавська стоїть від Вілянува — ETA із запасом.',
      ops:
        'Часто в сервіс у Пясечно або назад на Урсинів. Тел. 506-001-057.',
    },
  },
  legionowo: {
    pl: {
      scene:
        'Legionowo to Jagiellońska, Sikorskiego i Zegrzyńska przy DK61. Kolej do Warszawy wozi pendlerów — rano i wieczorem awarie przy dworcu i na Warszawskiej. CH / Galeria Legionowo = parkingi. Zimą na Zegrzyńskiej bywa ślisko wcześniej niż w centrum.',
      ops:
        'Holowanie do Legionowa albo powrót na Białołękę / Modlińską. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Legionowo is Jagiellońska, Sikorskiego and Zegrzyńska on DK61. The Warsaw rail line brings commuters — morning/evening failures by the station and Warszawska. CH / Galeria Legionowo are car parks. Zegrzyńska ices earlier than downtown in winter.',
      ops:
        'Tow into Legionowo or back toward Białołęka / Modlińska. Call 506-001-057.',
    },
    ru: {
      scene:
        'Легионово — Jagiellońska, Sikorskiego, Zegrzyńska на DK61. Электричка в Варшаву — утром/вечером поломки у вокзала и на Warszawska. CH / Galeria — паркинги. Zegrzyńska зимой скользкая раньше центра.',
      ops:
        'Эвакуация в Легионово или назад на Бялоленку / Modlińska. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Легіоново — Jagiellońska, Sikorskiego, Zegrzyńska на DK61. Електричка до Варшави — вранці/ввечері поломки біля вокзалу і на Warszawska. CH / Galeria — паркінги. Zegrzyńska взимку слизька раніше за центр.',
      ops:
        'Евакуація в Легіоново або назад на Бялоленку / Modlińska. Тел. 506-001-057.',
    },
  },
  wolomin: {
    pl: {
      scene:
        'Wołomin leży na Wileńskiej / Kościelnej przy DK8 w stronę Białegostoku. Ossów i centrum — typowe adresy; CH Wołomin po zakupach. Po wypadku na DK8 laweta zdejmuje z pobocza i często jedzie do Marków albo z powrotem do Warszawy.',
      ops:
        'Dystans z centrum ≈ 25–35 min poza szczytem — mówimy wprost. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Wołomin sits on Wileńska / Kościelna on DK8 toward Białystok. Ossów and the centre are typical pins; CH Wołomin after shopping. After a DK8 crash we clear the shoulder and often continue to Marki or back to Warsaw.',
      ops:
        'Distance from centre ≈ 25–35 min off-peak — we say so upfront. Call 506-001-057.',
    },
    ru: {
      scene:
        'Воломин на Wileńska / Kościelna на DK8 к Белостоку. Ossów и центр — типичные адреса; CH Wołomin после ТЦ. После ДТП на DK8 снимаем с обочины — часто в Marki или назад в Варшаву.',
      ops:
        'Из центра ≈ 25–35 мин вне пика — говорим сразу. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Воломін на Wileńska / Kościelna на DK8 до Білостока. Ossów і центр — типові адреси; CH Wołomin після ТРЦ. Після ДТП на DK8 знімаємо з узбіччя — часто в Marki або назад у Варшаву.',
      ops:
        'З центру ≈ 25–35 хв поза піком — кажемо одразу. Тел. 506-001-057.',
    },
  },
  zielonka: {
    pl: {
      scene:
        'Zielonka przylega do Marek: Poniatowskiego, Kolejowa, Słowackiego. Małe miasto, szybki dojazd z DK8, ale wąskie ulice przy centrum. CH Zielonka i „blisko M1” to parkingowe wezwania. Granica z Markami bywa myląca w GPS — prosimy o dokładny adres / pin.',
      ops:
        'Często ten sam kurs łączy Zielonkę z Kobyłką. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Zielonka borders Marki: Poniatowskiego, Kolejowa, Słowackiego. Small town, quick DK8 access, but narrow centre streets. CH Zielonka and “near M1” are car-park jobs. The Marki border confuses GPS — we ask for an exact pin.',
      ops:
        'The same run often covers Zielonka and Kobyłka. Call 506-001-057.',
    },
    ru: {
      scene:
        'Зеленка у Marek: Poniatowskiego, Kolejowa, Słowackiego. Маленький город, быстрый DK8, но узкий центр. CH Zielonka и «возле M1» — паркинги. Граница с Marki путает GPS — нужен точный pin.',
      ops:
        'Часто один рейс на Зеленку и Кобылку. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Зеленка біля Marek: Poniatowskiego, Kolejowa, Słowackiego. Маленьке місто, швидкий DK8, але вузький центр. CH Zielonka і «біля M1» — паркінги. Межа з Marki плутає GPS — потрібен точний pin.',
      ops:
        'Часто один рейс на Зеленку й Кобилку. Тел. 506-001-057.',
    },
  },
  kobylka: {
    pl: {
      scene:
        'Kobyłka to Napoleona, Piłsudskiego i Wołomińska na DK8. Spokojniejsze przedmieście niż Marki, ale po kolizji na krajówce potrzebna szybka laweta z pobocza. CH Kobyłka i dojazd od Wołomina — typowe trasy. Szkolna i centrum = wąskie manewry.',
      ops:
        'Wycena z km od Warszawy; bez „stałej ceny jak w Mokotowie”. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Kobyłka is Napoleona, Piłsudskiego and Wołomińska on DK8. Quieter than Marki, but a national-road crash still needs a fast shoulder recovery. CH Kobyłka and Wołomin access are typical. Szkolna and the centre mean tight manoeuvres.',
      ops:
        'Priced by km from Warsaw — not a flat Mokotów city rate. Call 506-001-057.',
    },
    ru: {
      scene:
        'Кобылка — Napoleona, Piłsudskiego, Wołomińska на DK8. Спокойнее Marek, но ДТП на трассе — быстрый съём с обочины. CH Kobyłka и Wołomin — типичные маршруты. Szkolna и центр — тесные манёвры.',
      ops:
        'Цена по км от Варшавы, не как фиксированный тариф Мокотува. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Кобилка — Napoleona, Piłsudskiego, Wołomińska на DK8. Спокійніше за Marki, але ДТП на трасі — швидкий зйом з узбіччя. CH Kobyłka і Wołomin — типові маршрути. Szkolna і центр — тісні маневри.',
      ops:
        'Ціна по км від Варшави, не як фіксований тариф Мокотува. Тел. 506-001-057.',
    },
  },
  jozefow: {
    pl: {
      scene:
        'Józefów nad Świdrem: Długa, Wyszyńskiego, Piłsudskiego. Wille, wąskie drogi, zimą oblodzenie. Galerie w Otwocku / Promenada są „blisko”, ale adres bywa w lesie — prosimy o pin GPS. Linia kolejowa pomaga orientować się w dojeździe z Warszawy.',
      ops:
        'Holowanie do Otwocka albo Wawra — najkrótszy sensowny warsztat. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Józefów on the Świder: Długa, Wyszyńskiego, Piłsudskiego. Villas, narrow roads, early ice. Otwock / Promenada malls are “nearby”, but pins can be in the woods — we want GPS. The rail line helps orientation from Warsaw.',
      ops:
        'Tow to Otwock or Wawer — nearest sensible workshop. Call 506-001-057.',
    },
    ru: {
      scene:
        'Юзефув на Świder: Długa, Wyszyńskiego, Piłsudskiego. Виллы, узкие дороги, ранний гололёд. ТЦ Otwock / Promenada «рядом», но pin бывает в лесу — нужен GPS. Ж/д помогает ориентироваться из Варшавы.',
      ops:
        'Эвакуация в Otwock или Wawer — ближайший здравый сервис. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Юзефів на Świder: Długa, Wyszyńskiego, Piłsudskiego. Вілли, вузькі дороги, рання ожеледиця. ТРЦ Otwock / Promenada «поруч», але pin буває в лісі — потрібен GPS. Залізниця допомагає орієнтуватися з Варшави.',
      ops:
        'Евакуація в Otwock або Wawer — найближчий розумний сервіс. Тел. 506-001-057.',
    },
  },
  lomianki: {
    pl: {
      scene:
        'Łomianki na DK7 / Warszawskiej w stronę Gdańska: Brukowa, Zachodnia, Wędkarska. Dziekanów Leśny i centrum — domy i małe osiedla. CH Łomianki po zakupach; zjazd z S7 / Czosnów łączymy, gdy auto staje na ekspresówce. Arkadia jest w Warszawie, ale klienci z Łomianek często tam kończą holowanie.',
      ops:
        'ETA z Żoliborza / Bielan zwykle krótsze niż z Mokotowa. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Łomianki on DK7 / Warszawska toward Gdańsk: Brukowa, Zachodnia, Wędkarska. Dziekanów Leśny and the centre are houses and small estates. CH Łomianki after shopping; we link S7 / Czosnów when a car dies on the expressway. Arkadia is in Warsaw, but Łomianki clients often finish the tow there.',
      ops:
        'ETA from Żoliborz / Bielany is usually shorter than from Mokotów. Call 506-001-057.',
    },
    ru: {
      scene:
        'Ломянки на DK7 / Warszawska к Гданьску: Brukowa, Zachodnia, Wędkarska. Dziekanów Leśny и центр — дома. CH Łomianki после ТЦ; стык с S7 / Czosnów, если авто на скоростной. Arkadia в Варшаве — частый финиш.',
      ops:
        'ETA с Жолибожа / Белян обычно короче, чем с Мокотува. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Ломянки на DK7 / Warszawska до Гданська: Brukowa, Zachodnia, Wędkarska. Dziekanów Leśny і центр — будинки. CH Łomianki після ТРЦ; стик із S7 / Czosnów, якщо авто на швидкісній. Arkadia у Варшаві — частий фініш.',
      ops:
        'ETA з Жолібожа / Білян зазвичай коротше, ніж з Мокотува. Тел. 506-001-057.',
    },
  },
  'konstancin-jeziorna': {
    pl: {
      scene:
        'Konstancin-Jeziorna to Sułkowskiego, Piaseczyńska i klimat zdrojowy przy parku. Wille, wąskie drogi, niski ruch — ale awaria i tak blokuje ulicę. Jeziorna i Wilanowska łączą z Wilanowem; Auchan Piaseczno jest „blisko” na mapie. Galeria Konstancin — lokalny parking.',
      ops:
        'Ostrożny załadunek przy posesjach i żywopłotach; cena z km. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Konstancin-Jeziorna is Sułkowskiego, Piaseczyńska and spa-town streets by the park. Villas, narrow roads, light traffic — a stall still blocks the lane. Jeziorna and Wilanowska link to Wilanów; Auchan Piaseczno is “near” on the map. Galeria Konstancin is the local park.',
      ops:
        'Careful loading by hedges and drives; priced by km. Call 506-001-057.',
    },
    ru: {
      scene:
        'Констанцин-Езёрна — Sułkowskiego, Piaseczyńska и курортные улицы у парка. Виллы, узко, мало машин — поломка всё равно блокирует. Jeziorna и Wilanowska к Вилянуву; Auchan Piaseczno «рядом». Galeria Konstancin — локальный паркинг.',
      ops:
        'Аккуратная погрузка у участков; цена по км. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Констанцін-Єзьорна — Sułkowskiego, Piaseczyńska і курортні вулиці біля парку. Вілли, вузько, мало машин — поломка все одно блокує. Jeziorna і Wilanowska до Вілянува; Auchan Piaseczno «поруч». Galeria Konstancin — локальний паркінг.',
      ops:
        'Акуратне завантаження біля ділянок; ціна по км. Тел. 506-001-057.',
    },
  },
  piastow: {
    pl: {
      scene:
        'Piastów przy Warszawskiej i 11 Listopada, granica z Pruszkowem na DK720. Bohaterów Wolności i Sienkiewicza — lokalne ulice. Klienci mylą Piastów z Pruszkowem w nawigacji — potwierdzamy kod pocztowy. Factory Ursus / CH Pruszków są blisko na holowanie po zakupach.',
      ops:
        'Krótki dojazd z Ursusa / Włoch; cena miejska lub z km — zależnie od adresu. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Piastów on Warszawska and 11 Listopada, Pruszków border on DK720. Bohaterów Wolności and Sienkiewicza are local. Clients mix Piastów with Pruszków in GPS — we confirm postcode. Factory Ursus / CH Pruszków are close for post-shopping tows.',
      ops:
        'Short run from Ursus / Włochy; city rate or per-km depends on the pin. Call 506-001-057.',
    },
    ru: {
      scene:
        'Пястув на Warszawska и 11 Listopada, граница с Прушкувом на DK720. Bohaterów Wolności и Sienkiewicza — локальные. Клиенты путают с Pruszków в GPS — подтверждаем индекс. Factory Ursus / CH Pruszków близко.',
      ops:
        'Короткий путь с Урсуса / Влохов; городской тариф или км. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Пястув на Warszawska і 11 Listopada, межа з Прушкувом на DK720. Bohaterów Wolności і Sienkiewicza — локальні. Клієнти плутають із Pruszków у GPS — підтверджуємо індекс. Factory Ursus / CH Pruszków близько.',
      ops:
        'Короткий шлях з Урсуса / Влохів; міський тариф або км. Тел. 506-001-057.',
    },
  },
  sulejowek: {
    pl: {
      scene:
        'Sulejówek na Piłsudskiego / Paderewskiego przy DK2 i Miłosnej. Domowa zabudowa, dojazd ze wschodu Warszawy przez Wesołą. Okuniewska prowadzi dalej; po kolizji na DK2 zdejmujemy z pobocza. Promenada / Galeria Wileńska — częsty cel holowania „do miasta”.',
      ops:
        'ETA dłuższe niż Praga; mówimy o tym przy wycenie. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Sulejówek on Piłsudskiego / Paderewskiego by DK2 and Miłosna. Housing estates, access from eastern Warsaw via Wesoła. Okuniewska continues out; after a DK2 crash we clear the shoulder. Promenada / Galeria Wileńska are common “into the city” drops.',
      ops:
        'ETA longer than Praga — we say so in the quote. Call 506-001-057.',
    },
    ru: {
      scene:
        'Сулеювек на Piłsudskiego / Paderewskiego у DK2 и Miłosna. Жилая застройка, заезд с востока через Весолу. Okuniewska дальше; после ДТП на DK2 — обочина. Promenada / Galeria Wileńska — частый финиш «в город».',
      ops:
        'ETA дольше Праги — говорим при цене. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Сулєювек на Piłsudskiego / Paderewskiego біля DK2 і Miłosna. Житлова забудова, заїзд зі сходу через Весолу. Okuniewska далі; після ДТП на DK2 — узбіччя. Promenada / Galeria Wileńska — частий фініш «у місто».',
      ops:
        'ETA довше Праги — кажемо при ціні. Тел. 506-001-057.',
    },
  },
  milanowek: {
    pl: {
      scene:
        'Milanówek przy WKD: Królewska, Warszawska, Grudowska. Klimat willowy, wąskie ulice, DK719 w stronę Grodziska. Awaria przy torach WKD wymaga ostrożnego ustawienia lawety. CH w Grodzisku / Pruszkowie są „blisko” na mapie zakupów.',
      ops:
        'Holowanie po linii WKD do Warszawy albo lokalny serwis — wybór klienta. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Milanówek by the WKD: Królewska, Warszawska, Grudowska. Villa feel, narrow streets, DK719 toward Grodzisk. A stall by the WKD tracks needs careful flatbed placement. Grodzisk / Pruszków malls are “near” for shopping tows.',
      ops:
        'Tow along the WKD into Warsaw or a local workshop — client’s call. Call 506-001-057.',
    },
    ru: {
      scene:
        'Миланувек у WKD: Królewska, Warszawska, Grudowska. Виллы, узко, DK719 к Гродзиску. Поломка у путей WKD — аккуратная постановка лаветы. ТЦ Grodzisk / Pruszków «рядом».',
      ops:
        'Эвакуация вдоль WKD в Варшаву или локальный сервис. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Міланувек біля WKD: Królewska, Warszawska, Grudowska. Вілли, вузько, DK719 до Гродзиська. Поломка біля колій WKD — акуратна постановка лафети. ТРЦ Grodzisk / Pruszków «поруч».',
      ops:
        'Евакуація вздовж WKD у Варшаву або локальний сервіс. Тел. 506-001-057.',
    },
  },
  brwinow: {
    pl: {
      scene:
        'Brwinów: Rynek, Warszawska, Grodziska, Pruszkowska + WKD. Małe miasto między Pruszkowem a Grodziskiem — znamy obie strony dojazdu. Po awarii na DK719 zdejmujemy z pobocza; w centrum manewr przy Rynku bywa ciasny.',
      ops:
        'Cena z km; często ten sam dyspozytor co Pruszków / Grodzisk. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Brwinów: Rynek, Warszawska, Grodziska, Pruszkowska + WKD. A small town between Pruszków and Grodzisk — we know both approaches. After a DK719 failure we clear the shoulder; the Rynek centre is tight for the truck.',
      ops:
        'Priced by km; often the same dispatcher desk as Pruszków / Grodzisk. Call 506-001-057.',
    },
    ru: {
      scene:
        'Брвинув: Rynek, Warszawska, Grodziska, Pruszkowska + WKD. Между Прушкувом и Гродзиском — знаем оба подъезда. На DK719 — обочина; у Рынка тесно для лаветы.',
      ops:
        'Цена по км; тот же диспетчер, что Pruszków / Grodzisk. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Брвінув: Rynek, Warszawska, Grodziska, Pruszkowska + WKD. Між Прушкувом і Гродзиськом — знаємо обидва під’їзди. На DK719 — узбіччя; біля Ринку тісно для лафети.',
      ops:
        'Ціна по км; той самий диспетчер, що Pruszków / Grodzisk. Тел. 506-001-057.',
    },
  },
  nadarzyn: {
    pl: {
      scene:
        'Nadarzyn to Ptak Warsaw Expo, Mszczonowska i łącznik S8 / A2 przy Jankach. Po targach i eventach na Ptaku kolejka holowań z parkingu rośnie skokowo. Al. Katowicka i Słomczyn — dojazd ciężarówek; bierzemy też busy. Awaria na łączniku ekspresówek = priorytet pasa awaryjnego.',
      ops:
        'Wycena uwzględnia dojazd spod Expo i ewentualny transport do Warszawy. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Nadarzyn is Ptak Warsaw Expo, Mszczonowska and the S8 / A2 link by Janki. After Expo events tow queues from the car park spike. Al. Katowicka and Słomczyn see trucks — we also move vans. An expressway-link failure is a hard-shoulder priority.',
      ops:
        'Quotes include the Expo run and optional tow into Warsaw. Call 506-001-057.',
    },
    ru: {
      scene:
        'Надажин — Ptak Warsaw Expo, Mszczonowska и связка S8 / A2 у Janki. После ивентов на Ptak очередь с паркинга растёт. Al. Katowicka и Słomczyn — фуры; берём и автобусы/фургоны. Поломка на связке скоростных — приоритет обочины.',
      ops:
        'В цене — доезд от Expo и опция в Варшаву. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Надажин — Ptak Warsaw Expo, Mszczonowska і зв’язка S8 / A2 біля Janki. Після івентів на Ptak черга з паркінгу росте. Al. Katowicka і Słomczyn — фури; беремо й фургони. Поломка на зв’язці швидкісних — пріоритет узбіччя.',
      ops:
        'У ціні — доїзд від Expo і опція у Варшаву. Тел. 506-001-057.',
    },
  },
  raszyn: {
    pl: {
      scene:
        'Raszyn przy al. Krakowskiej i węźle S2/S8 / Janki. Głucha, Sportowa, Warszawska — lokalne; CH Janki to parkingi pełne w weekend. Granica z Włochami myli adresy — sprawdzamy, czy to jeszcze Raszyn. Awaria na łączniku ekspresówki = zjazd awaryjny i laweta.',
      ops:
        'Szybki dojazd z Okęcia / Salomei; cena z km poza miastem. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Raszyn on al. Krakowska and the S2/S8 / Janki junction. Głucha, Sportowa, Warszawska are local; CH Janki fills on weekends. The Włochy border confuses addresses — we confirm it is still Raszyn. An expressway-link stall means hard shoulder and flatbed.',
      ops:
        'Quick run from Okęcie / Salomea; priced by km outside the city. Call 506-001-057.',
    },
    ru: {
      scene:
        'Рашин на al. Krakowska и узле S2/S8 / Janki. Głucha, Sportowa, Warszawska — локальные; CH Janki по выходным полный. Граница с Влохами путает адреса. Поломка на связке скоростной — аварийная полоса и лавета.',
      ops:
        'Быстрый доезд с Окенче / Salomea; цена по км за городом. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Рашин на al. Krakowska і вузлі S2/S8 / Janki. Głucha, Sportowa, Warszawska — локальні; CH Janki у вихідні повний. Межа з Влохами плутає адреси. Поломка на зв’язці швидкісної — аварійна смуга й лафета.',
      ops:
        'Швидкий доїзд з Окенче / Salomea; ціна по км за містом. Тел. 506-001-057.',
    },
  },
  'grodzisk-mazowiecki': {
    pl: {
      scene:
        'Grodzisk Mazowiecki przy WKD i DK719: Żwirki i Wigury, 11 Listopada, Montwiłła. CH Grodzisk i dojazd od Ptak Expo (blisko) dają wezwania z parkingów. Centrum i Sienkiewicza — ciasne manewry; linia WKD orientuje dojazd z Warszawy.',
      ops:
        'Holowanie lokalne albo powrót do stolicy po WKD / DK719. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Grodzisk Mazowiecki by WKD and DK719: Żwirki i Wigury, 11 Listopada, Montwiłła. CH Grodzisk and near Ptak Expo bring car-park jobs. Centre and Sienkiewicza are tight; the WKD line orients the run from Warsaw.',
      ops:
        'Local tow or back to the capital via WKD / DK719. Call 506-001-057.',
    },
    ru: {
      scene:
        'Гродзиск-Мазовецки у WKD и DK719: Żwirki i Wigury, 11 Listopada, Montwiłła. CH Grodzisk и Ptak Expo рядом — паркинги. Центр и Sienkiewicza тесные; WKD ориентирует путь из Варшавы.',
      ops:
        'Локально или назад в столицу по WKD / DK719. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Гродзиськ-Мазовецький біля WKD і DK719: Żwirki i Wigury, 11 Listopada, Montwiłła. CH Grodzisk і Ptak Expo поруч — паркінги. Центр і Sienkiewicza тісні; WKD орієнтує шлях з Варшави.',
      ops:
        'Локально або назад у столицю по WKD / DK719. Тел. 506-001-057.',
    },
  },
  'nowy-dwor-mazowiecki': {
    pl: {
      scene:
        'Nowy Dwór Mazowiecki przy Modlin Airport, Sukienna / Warszawska / Paderewskiego i DK62. Po wylądowaniu klienci dzwonią z parkingu lotniska — laweta pod terminalem wymaga znajomości stref. Modlińska łączy z Białołęką; CH Nowy Dwór po zakupach.',
      ops:
        'Dłuższy dojazd z centrum Warszawy — ETA i km mówimy z góry. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Nowy Dwór Mazowiecki by Modlin Airport, Sukienna / Warszawska / Paderewskiego and DK62. After landing, clients call from airport parking — terminal-side flatbed needs zone know-how. Modlińska links to Białołęka; CH Nowy Dwór after shopping.',
      ops:
        'Longer run from central Warsaw — ETA and km upfront. Call 506-001-057.',
    },
    ru: {
      scene:
        'Новы-Двур-Мазовецки у Modlin Airport, Sukienna / Warszawska / Paderewskiego и DK62. После прилёта звонят с паркинга — лавета у терминала требует знания зон. Modlińska к Бялоленке; CH Nowy Dwór после ТЦ.',
      ops:
        'Дальше из центра Варшавы — ETA и км заранее. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Новий-Двір-Мазовецький біля Modlin Airport, Sukienna / Warszawska / Paderewskiego і DK62. Після прильоту дзвонять з паркінгу — лафета біля терміналу потребує знання зон. Modlińska до Бялоленки; CH Nowy Dwór після ТРЦ.',
      ops:
        'Далі з центру Варшави — ETA і км заздалегідь. Тел. 506-001-057.',
    },
  },
};

/** @type {Record<string, Record<'pl'|'en'|'ru'|'ua', { scene: string, ops: string }>>} */
export const ROAD_FLAVOR = {
  a2: {
    pl: {
      scene:
        'A2 przy Warszawie to węzły Konotopa, Pruszków, Janki i Grodzisk Mazowiecki — korytarz na Łódź / Poznań. Najczęstsze wezwania: awaria na pasie awaryjnym, kolizja przy zjeździe, rozładowany akumulator po postoju na MOP. Ruch ciężarowy utrudnia manewr — ustawiamy lawetę zgodnie z przepisami i oznakowaniem.',
      ops:
        'Po załadunku jedziemy do warsztatu w Pruszkowie / Warszawie albo dalej A2. Sąsiednie S2 / S8 / DK8 łączymy, gdy zjazd jest zamknięty. Tel. 506-001-057 — ETA i cena przed wyjazdem.',
    },
    en: {
      scene:
        'A2 by Warsaw means Konotopa, Pruszków, Janki and Grodzisk Mazowiecki — the Łódź / Poznań corridor. Typical jobs: hard-shoulder failure, exit crash, dead battery after a service-area stop. Trucks complicate the manoeuvre — we place the flatbed by the rules.',
      ops:
        'After loading we go to a Pruszków / Warsaw workshop or further on A2. We link S2 / S8 / DK8 if an exit is closed. Call 506-001-057 for ETA and price before we roll.',
    },
    ru: {
      scene:
        'A2 у Варшавы — Konotopa, Pruszków, Janki, Grodzisk — коридор на Лодзь / Познань. Типично: поломка на аварийной, ДТП на съезде, севший АКБ после MOP. Фуры мешают манёвру — ставим лавету по правилам.',
      ops:
        'После погрузки — сервис в Прушкуве / Варшаве или дальше по A2. Стык S2 / S8 / DK8, если съезд закрыт. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'A2 біля Варшави — Konotopa, Pruszków, Janki, Grodzisk — коридор на Лодзь / Познань. Типово: поломка на аварійній, ДТП на з’їзді, сілий АКБ після MOP. Фури заважають маневру — ставимо лафету за правилами.',
      ops:
        'Після завантаження — сервіс у Прушкуві / Варшаві або далі A2. Стик S2 / S8 / DK8, якщо з’їзд закритий. Тел. 506-001-057.',
    },
  },
  s2: {
    pl: {
      scene:
        'S2 (Południowa Obwodnica) to węzły Puławska, Wilanów, Konotopa — południowy pierścień stolicy. Awaria na S2 w szczycie blokuje dwa kierunki; zdejmujemy z pasa awaryjnego i zjeżdżamy najbliższym zjazdem. Zimą śnieg na wiaduktach, latem — kolizje przy wlotach na Puławską.',
      ops:
        'Często kończymy na Ursynowie, Wilanowie albo przy A2. Łączymy S7 / S8 / S79. Tel. 506-001-057.',
    },
    en: {
      scene:
        'S2 (Southern Ring) is Puławska, Wilanów, Konotopa — Warsaw’s south ring. A rush-hour stall blocks both ways; we clear the hard shoulder and take the nearest exit. Winter: snow on overpasses; summer: crashes at Puławska slips.',
      ops:
        'Jobs often finish in Ursynów, Wilanów or at A2. We link S7 / S8 / S79. Call 506-001-057.',
    },
    ru: {
      scene:
        'S2 (Южная окружная) — Puławska, Wilanów, Konotopa. Поломка в пик блокирует оба направления; снимаем с аварийной и ближайший съезд. Зимой снег на путепроводах, летом ДТП у Пулавской.',
      ops:
        'Финиш часто Урсынув, Вилянув или A2. Стык S7 / S8 / S79. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'S2 (Південна об’їзна) — Puławska, Wilanów, Konotopa. Поломка в пік блокує обидва напрямки; знімаємо з аварійної й найближчий з’їзд. Взимку сніг на шляхопроводах, влітку ДТП біля Пулавської.',
      ops:
        'Фініш часто Урсинів, Вілянув або A2. Стик S7 / S8 / S79. Тел. 506-001-057.',
    },
  },
  s7: {
    pl: {
      scene:
        'S7 przy Warszawie to kierunek Gdańsk / Kraków: Czosnów, Modlin, łączniki z S2/S8. Północny odcinek zbiera awarie po długiej trasie; południe — wylot na Radom. Pas awaryjny i pobocze — standard; po kolizji ważne szybkie zabezpieczenie.',
      ops:
        'Holowanie do Legionowa / Łomianek albo do centrum. Sąsiednie DK7. Tel. 506-001-057.',
    },
    en: {
      scene:
        'S7 by Warsaw runs Gdańsk / Kraków: Czosnów, Modlin, links to S2/S8. The north stretch sees end-of-long-trip failures; the south is the Radom exit. Hard shoulder is standard; after a crash we secure fast.',
      ops:
        'Tow to Legionowo / Łomianki or into the centre. Neighbouring DK7. Call 506-001-057.',
    },
    ru: {
      scene:
        'S7 у Варшавы — Гданьск / Краков: Czosnów, Modlin, связки S2/S8. Север — поломки после дальней дороги; юг — выезд на Радом. Аварийная полоса — стандарт.',
      ops:
        'Эвакуация в Легионово / Ломянки или в центр. Соседняя DK7. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'S7 біля Варшави — Гданськ / Краків: Czosnów, Modlin, зв’язки S2/S8. Північ — поломки після далекої дороги; південь — виїзд на Радом. Аварійна смуга — стандарт.',
      ops:
        'Евакуація в Легіоново / Ломянки або в центр. Суміжна DK7. Тел. 506-001-057.',
    },
  },
  s8: {
    pl: {
      scene:
        'S8 / Trasa Armii Krajowej to kręgosłup wschód–zachód: Wrocław / Białystok. Węzły w mieście i przy A2 generują kolizje przy zmianie pasów. Zdejmujemy z pasa awaryjnego, zjeżdżamy na Bemowo, Bielany, Targówek albo Konotopę — zależnie od kilometra.',
      ops:
        'Zimą śnieg na wiaduktach AK; latem korki po wypadku rosną w 10 minut. Tel. 506-001-057 — podamy najbliższy zjazd i cenę.',
    },
    en: {
      scene:
        'S8 / Armii Krajowej is the east–west spine: Wrocław / Białystok. City and A2 junctions mean lane-change crashes. We clear the hard shoulder and exit to Bemowo, Bielany, Targówek or Konotopa — depending on the km.',
      ops:
        'Winter: snow on AK overpasses; summer: post-crash jams grow in 10 minutes. Call 506-001-057 for nearest exit and price.',
    },
    ru: {
      scene:
        'S8 / Armii Krajowej — ось восток–запад: Вроцлав / Белосток. Развязки в городе и у A2 — ДТП при перестроениях. Снимаем с аварийной, съезд на Бемово, Беляны, Таргувек или Konotopa.',
      ops:
        'Зимой снег на путепроводах AK; летом пробка после ДТП за 10 минут. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'S8 / Armii Krajowej — вісь схід–захід: Вроцлав / Білосток. Розв’язки в місті й біля A2 — ДТП при перешикуваннях. Знімаємо з аварійної, з’їзд на Бемово, Біляни, Таргувек або Konotopa.',
      ops:
        'Взимку сніг на шляхопроводах AK; влітку затор після ДТП за 10 хвилин. Тел. 506-001-057.',
    },
  },
  s17: {
    pl: {
      scene:
        'S17 w stronę Lublina prowadzi przez korytarz Wawer / Otwock. Awaria na ekspresówce poza miastem = dłuższy dojazd, ale znamy zjazdy do Faleniczy i Otwocka. Po kolizji holujemy do warsztatu na wschodzie albo wracamy do Pragi.',
      ops:
        'Łączymy DK17 / DK50. Tel. 506-001-057 — km w cenie.',
    },
    en: {
      scene:
        'S17 toward Lublin runs the Wawer / Otwock corridor. An expressway stall outside the city means longer ETA, but we know exits to Falenica and Otwock. After a crash we tow to an eastern workshop or back to Praga.',
      ops:
        'We link DK17 / DK50. Call 506-001-057 — km in the quote.',
    },
    ru: {
      scene:
        'S17 на Люблин — коридор Wawer / Otwock. Поломка за городом — дольше, но знаем съезды к Falenica и Otwock. После ДТП — сервис на востоке или назад в Прагу.',
      ops:
        'Стык DK17 / DK50. Тел. 506-001-057 — км в цене.',
    },
    ua: {
      scene:
        'S17 на Люблін — коридор Wawer / Otwock. Поломка за містом — довше, але знаємо з’їзди до Falenica і Otwock. Після ДТП — сервіс на сході або назад у Прагу.',
      ops:
        'Стик DK17 / DK50. Тел. 506-001-057 — км у ціні.',
    },
  },
  s79: {
    pl: {
      scene:
        'S79 przy Okęciu / Chopinie, Marynarska i Salomea — krótki, ale krytyczny odcinek lotniskowy. Awaria tu blokuje dojazd do terminalu; priorytet to szybkie zdjęcie z pasa. Holujemy na Włochy, Mokotów albo łącznik S2.',
      ops:
        'Znamy strefy postoju bez konfliktu z ruchem lotniskowym. Tel. 506-001-057.',
    },
    en: {
      scene:
        'S79 by Okęcie / Chopin, Marynarska and Salomea — short but critical airport link. A stall blocks terminal access; priority is a fast hard-shoulder clear. We tow to Włochy, Mokotów or the S2 link.',
      ops:
        'We know waiting spots that do not fight airport traffic. Call 506-001-057.',
    },
    ru: {
      scene:
        'S79 у Окенче / Шопена, Marynarska и Salomea — короткий, но критичный аэропортовый участок. Поломка блокирует терминал; приоритет — быстрый съём. Эвакуация на Влохи, Мокотув или связку S2.',
      ops:
        'Знаем стоянки без конфликта с аэропортом. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'S79 біля Окенче / Шопена, Marynarska і Salomea — коротка, але критична аеропортова ділянка. Поломка блокує термінал; пріоритет — швидкий зйом. Евакуація на Влохи, Мокотув або зв’язку S2.',
      ops:
        'Знаємо стоянки без конфлікту з аеропортом. Тел. 506-001-057.',
    },
  },
  dk7: {
    pl: {
      scene:
        'DK7 (Krakowska / Gdańska) to krajówka przez miasta pod Warszawą — nie zawsze ekspresówka. Puławska / Krakowska na południu, Czosnów na północy. Awaria w zabudowie = inne zasady niż na S7; czasem trzeba zablokować pas i szybko załadować.',
      ops:
        'Łączymy S7 / DK50 / S8. Tel. 506-001-057.',
    },
    en: {
      scene:
        'DK7 (Krakowska / Gdańska) is the national road through towns near Warsaw — not always expressway. Puławska / Krakowska south, Czosnów north. A stall in built-up areas follows different rules than S7; sometimes we block a lane and load fast.',
      ops:
        'We link S7 / DK50 / S8. Call 506-001-057.',
    },
    ru: {
      scene:
        'DK7 (Krakowska / Gdańska) — национальная через города у Варшавы, не всегда скоростная. Юг — Пулавская / Краковская, север — Czosnów. В застройке другие правила, чем на S7.',
      ops:
        'Стык S7 / DK50 / S8. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'DK7 (Krakowska / Gdańska) — національна через міста біля Варшави, не завжди швидкісна. Південь — Пулавська / Краковська, північ — Czosnów. У забудові інші правила, ніж на S7.',
      ops:
        'Стик S7 / DK50 / S8. Тел. 506-001-057.',
    },
  },
  dk8: {
    pl: {
      scene:
        'DK8 poza ekspresówkami prowadzi na Wrocław / Białystok przez Marki, Radzymin, kierunek Łomża. Pobocze i miejscowości = częste stłuczki. Holujemy do Marków / Wołomina albo wracamy na S8.',
      ops:
        'Sąsiednie A2 / S8 / DK7. Tel. 506-001-057.',
    },
    en: {
      scene:
        'DK8 off the expressways runs Wrocław / Białystok via Marki, Radzymin, toward Łomża. Shoulder and towns mean frequent fender-benders. We tow to Marki / Wołomin or back to S8.',
      ops:
        'Neighbouring A2 / S8 / DK7. Call 506-001-057.',
    },
    ru: {
      scene:
        'DK8 вне скоростных — Вроцлав / Белосток через Marki, Radzymin, к Łomża. Обочина и городки — частые мелкие ДТП. Эвакуация в Marki / Wołomin или назад на S8.',
      ops:
        'Соседние A2 / S8 / DK7. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'DK8 поза швидкісними — Вроцлав / Білосток через Marki, Radzymin, до Łomża. Узбіччя й містечка — часті дрібні ДТП. Евакуація в Marki / Wołomin або назад на S8.',
      ops:
        'Суміжні A2 / S8 / DK7. Тел. 506-001-057.',
    },
  },
  dk17: {
    pl: {
      scene:
        'DK17 na Lublin przez Wawer i Józefów — krajówka równoległa do S17. Węższe pobocza, miejscowości, czasem brak pasa awaryjnego jak na ekspresówce. Holowanie ostrożne przy ruchu lokalnym.',
      ops:
        'Łączymy S17 / DK50. Tel. 506-001-057.',
    },
    en: {
      scene:
        'DK17 to Lublin via Wawer and Józefów — national road parallel to S17. Narrower shoulders, towns, sometimes no hard shoulder like on the expressway. Careful towing in local traffic.',
      ops:
        'We link S17 / DK50. Call 506-001-057.',
    },
    ru: {
      scene:
        'DK17 на Люблин через Wawer и Józefów — параллель S17. Уже обочины, городки, не всегда аварийная как на скоростной. Аккуратная эвакуация в локальном потоке.',
      ops:
        'Стык S17 / DK50. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'DK17 на Люблін через Wawer і Józefów — паралель S17. Вужчі узбіччя, містечка, не завжди аварійна як на швидкісній. Акуратна евакуація в локальному потоці.',
      ops:
        'Стик S17 / DK50. Тел. 506-001-057.',
    },
  },
  dk50: {
    pl: {
      scene:
        'DK50 — duża obwodnica mazowiecka: Grójec, Mszczonów, Sochaczew, Wyszków. Długie odcinki poza Warszawą; dojazd liczony w km. Po kolizji często jedziemy do najbliższego miasta pierścienia, nie od razu do centrum stolicy.',
      ops:
        'Sąsiednie S17 / DK7 / DK17 / Obwodnica. Tel. 506-001-057 — indywidualna wycena trasy.',
    },
    en: {
      scene:
        'DK50 is the big Mazovian ring: Grójec, Mszczonów, Sochaczew, Wyszków. Long stretches outside Warsaw; ETA priced in km. After a crash we often go to the nearest ring town, not straight into the capital centre.',
      ops:
        'Neighbouring S17 / DK7 / DK17 / Obwodnica. Call 506-001-057 for a route quote.',
    },
    ru: {
      scene:
        'DK50 — большая мазовецкая окружная: Grójec, Mszczonów, Sochaczew, Wyszków. Длинные участки вне Варшавы; цена по км. После ДТП часто в ближайший город кольца, не сразу в центр.',
      ops:
        'Соседние S17 / DK7 / DK17 / Obwodnica. Тел. 506-001-057 — индивидуальная цена.',
    },
    ua: {
      scene:
        'DK50 — велика мазовецька об’їзна: Grójec, Mszczonów, Sochaczew, Wyszków. Довгі ділянки поза Варшавою; ціна по км. Після ДТП часто в найближче місто кільця, не одразу в центр.',
      ops:
        'Суміжні S17 / DK7 / DK17 / Obwodnica. Тел. 506-001-057 — індивідуальна ціна.',
    },
  },
  obwodnica: {
    pl: {
      scene:
        'Obwodnica Warszawy to sieć S2 / S8 / A2 i łączników wokół stolicy — Konotopa, Puławska, Modlińska, Marki. Wezwanie „na obwodnicy” precyzujemy: który odcinek i kierunek. Zdejmujemy z pasa awaryjnego i zjeżdżamy najbliższym węzłem do warsztatu w dzielnicy.',
      ops:
        'Jedna ekipa obsługuje pierścień 24/7; cena zależy od km i węzła. Tel. 506-001-057.',
    },
    en: {
      scene:
        'Warsaw’s ring is the S2 / S8 / A2 network and links — Konotopa, Puławska, Modlińska, Marki. A call “on the ring” needs the exact stretch and direction. We clear the hard shoulder and exit at the nearest junction to a district workshop.',
      ops:
        'One crew covers the ring 24/7; price depends on km and junction. Call 506-001-057.',
    },
    ru: {
      scene:
        'Окружная Варшавы — сеть S2 / S8 / A2 и связки: Konotopa, Puławska, Modlińska, Marki. Вызов «на окружной» уточняем: участок и направление. Снимаем с аварийной, съезд на ближайшей развязке к сервису в районе.',
      ops:
        'Одна бригада на кольце 24/7; цена от км и узла. Тел. 506-001-057.',
    },
    ua: {
      scene:
        'Об’їзна Варшави — мережа S2 / S8 / A2 і зв’язки: Konotopa, Puławska, Modlińska, Marki. Виклик «на об’їзній» уточнюємо: ділянка й напрямок. Знімаємо з аварійної, з’їзд на найближчій розв’язці до сервісу в районі.',
      ops:
        'Одна бригада на кільці 24/7; ціна від км і вузла. Тел. 506-001-057.',
    },
  },
};
