import fs from "fs";

const HTML = "/Users/nenovikov/Desktop/INNSER COD/innser-v6.html";

function ser(o) {
  return Object.entries(o)
    .map(([k, v]) => `${k}:${JSON.stringify(v)}`)
    .join(",");
}

const XB = (s) => `<strong class="xb">${s}</strong>`;

function sliceSvc9Block(block) {
  const s = block.indexOf("svc9_t:");
  if (s < 0) throw new Error("svc9_t not found");
  const k = block.indexOf("svc9_faq3a:", s);
  if (k < 0) throw new Error("svc9_faq3a not found");
  let pos = block.indexOf('"', k + 11);
  if (pos < 0) throw new Error("faq3a open quote");
  pos++;
  while (pos < block.length) {
    const c = block[pos];
    if (c === "\\") {
      pos += 2;
      continue;
    }
    if (c === '"') return { start: s, end: pos + 1 };
    pos++;
  }
  throw new Error("unterminated svc9_faq3a string");
}

function patchLocale(html, loc, nextLoc, bundle) {
  const i = html.indexOf(`${loc}:{`);
  if (i < 0) throw new Error(`Missing ${loc}`);
  const j = nextLoc
    ? html.indexOf(`${nextLoc}:{`, i + 4)
    : html.indexOf("\n};\n\nconst SVCS", i);
  if (j < 0) throw new Error(`Missing end after ${loc}`);
  const block = html.slice(i, j);
  const { start, end } = sliceSvc9Block(block);
  return html.slice(0, i + start) + ser(bundle) + html.slice(i + end);
}

const pl = {
  svc9_t: `Laweta Warszawa — ${XB("Transport samochodów")} ${XB("24/7")}`,
  svc9_d: `Laweta Warszawa ${XB("24/7")}: dojazd ok. ${XB("30 minut")}, parkingi podziemne, aukcje, auta premium, cała Polska i Europa. ${XB("Cena ustalona z góry")}. ${XB("506-001-057")}.`,
  svc9_seo_title: `Laweta Warszawa 24/7 — Transport samochodów | INNSER`,
  svc9_seo_desc: `Profesjonalna laweta w Warszawie i na Mazowszu: dojazd ~30 min, transport z parkingów podziemnych, odbiór aut z aukcji Copart IAAI BCA, pojazdy premium. Polska do 500 km i Europa. Cena bez ukrytych kosztów. 506-001-057.`,
  svc9_keywords: `laweta Warszawa, autolaweta 24h, ewakuator Warszawa, transport samochodów lawetą, laweta parking podziemny, laweta z aukcji Copart, holowanie lawetą cena, tania laweta Warszawa, transport aut premium, INNSER`,
  svc9_p1: `Potrzebujesz ${XB("lawety w Warszawie")}? Oferujemy profesjonalny ${XB("ewakuator")} i ${XB("transport lawetą")} ${XB("całą dobę")}, bez dni wolnych. Dojeżdżamy w ciągu ok. ${XB("30 minut")} w dowolne miejsce ${XB("Warszawy")} i ${XB("województwa mazowieckiego")}. Działamy szybko, ostrożnie i po ${XB("cenie ustalonej z góry")} — ${XB("bez ukrytych dopłat")}.`,
  svc9_h2: `Co to jest ${XB("laweta")} i kiedy jest potrzebna?`,
  svc9_p2: `${XB("Laweta")} to specjalistyczny pojazd z platformą do przewozu aut osobowych, SUV-ów, mikrobusów i motocykli. W przeciwieństwie do zwykłego holowania, auto jest w całości ${XB("ładowane na platformę")}, co wyklucza uszkodzenia w trakcie transportu — szczególnie gdy pojazd ${XB("nie jedzie")}, ma uszkodzone zawieszenie lub koła, albo to ${XB("auto premium lub sportowe")} z niskim prześwitem.`,
  svc9_p3: `Laweta jest potrzebna m.in. gdy: auto zepsuło się w drodze, doszło do ${XB("kolizji lub wypadku")}, pojazd utknął w śniegu lub błocie, awaria silnika lub skrzyni, uszkodzone koła lub zawieszenie, auto trafiło na ${XB("parking policyjny")}, transport na ${XB("warsztat, aukcję lub nowe miejsce")}.`,
  svc9_h3: `${XB("Laweta z podziemnych parkingów")} Warszawy`,
  svc9_p4: `Jednym z najtrudniejszych zadań jest bezpieczne ${XB("wyjęcie auta z parkingu podziemnego")} — ze względu na ograniczoną wysokość wjazdu. Nasza laweta ma ${XB("niskoprofilowy sprzęt")} do pracy w ciasnych warunkach.`,
  svc9_p5: `Działamy na parkingach centrów handlowych, osiedli, biurowców, hoteli i lotnisk w całej Warszawie — ${XB("na każdym poziomie")}, szybko i bez uszkodzeń.`,
  svc9_h4: `${XB("Laweta z aukcji")} samochodów`,
  svc9_p6: `Kupiłeś auto na aukcji? Specjalizujemy się w transporcie z polskich i europejskich aukcji — ${XB("Copart, IAAI, BCA, Adesa, Auto1")} i innych.`,
  svc9_p7: `Odbieramy pojazd z terenu aukcji i dowozimy pod wskazany adres: ${XB("dom, warsztat, odprawa celna, magazyn, inne miasto")}. Pełna obsługa załadunku i rozładunku — także ${XB("uszkodzone, niesprawne i częściowo rozebrane")} auta.`,
  svc9_h5: `Transport ${XB("samochodów premium i sportowych")}`,
  svc9_p8: `Dla aut drogich, sportowych i kolekcjonerskich stosujemy maksymalną ostrożność i sprawdzone ${XB("mocowania na platformie")}.`,
  svc9_p9: `Doświadczenie z markami ${XB("BMW, Mercedes, Audi, Porsche, Ferrari, Lamborghini")} i innymi — auto dociera w takim stanie, w jakim zostało załadowane.`,
  svc9_h6: `Laweta ${XB("24/7")} — pracujemy o każdej porze`,
  svc9_p10: `Awaria nie wybiera pory — dlatego ${XB("pracujemy 24/7, 365 dni w roku")}. Dyspozytor zawsze na linii; wysyłamy najbliższą lawetę w ciągu kilku minut od rozmowy.`,
  svc9_h7: `${XB("Strefa działania")} lawety`,
  svc9_p11: `${XB("Warszawa")} i dzielnice: Mokotów, Ursus, Praga, Wola, Bielany, Wilanów, Ochota, Żoliborz, Bemowo, Targówek, Wesoła i inne. Pobliskie miejscowości: Piaseczno, Legionowo, Pruszków, Nadarzyn, Grodzisk Mazowiecki, Mińsk Mazowiecki, Wołomin. ${XB("Cała Polska do 500 km i więcej")}: Kraków, Wrocław, Gdańsk, Poznań, Łódź, Katowice, Lublin, Bydgoszcz, Szczecin. ${XB("Transport międzynarodowy po Europie")}.`,
  svc9_h8: `Dlaczego wybierają ${XB("naszą lawetę w Warszawie")}?`,
  svc9_p12: `${XB("Szybki dojazd")} (~30 min w Warszawie), doświadczeni kierowcy (${XB("10+ lat")}), nowoczesny sprzęt, ${XB("cena ustalana przed startem")} bez ukrytych kosztów, ${XB("wszystkie typy aut")} włącznie z premium oraz ${XB("dostępność 24/7")}.`,
  svc9_h9: `Jak ${XB("zamówić lawetę")} w Warszawie?`,
  svc9_p13: `Zadzwoń ${XB("506-001-057")} lub napisz na ${XB("WhatsApp")} / ${XB("Telegram")}: podaj adres, markę i model, powód zgłoszenia i cel podróży — podamy czas przyjazdu.`,
  svc9_p14: `${XB("Zadzwoń teraz — 506-001-057")}. Dyspozytor ${XB("24/7")}. Laweta w Warszawie — szybko, bezpiecznie, po ${XB("ustalonej cenie")}.`,
  svc9_faq1q: `Czy laweta wjedzie na ${XB("parking podziemny")}?`,
  svc9_faq1a: `Tak — niskoprofilowy sprzęt; centra handlowe, osiedla, biura, hotele w całej Warszawie.`,
  svc9_faq2q: `Czy odbieracie auta z ${XB("aukcji")}?`,
  svc9_faq2a: `Tak — Copart, IAAI, BCA, Adesa, Auto1 i inne; dowóz pod wskazany adres w Polsce i Europie.`,
  svc9_faq3q: `Czy ${XB("cena jest znana z góry")}?`,
  svc9_faq3a: `Tak — wycena przed rozpoczęciem, bez ukrytych dopłat; orientacyjnie ~30 min dojazdu w Warszawie (zależnie od ruchu i lokalizacji).`,
};

const en = {
  svc9_t: `Flatbed ${XB("Warsaw")} — ${XB("tow truck")} & ${XB("car transport")} ${XB("24/7")}`,
  svc9_d: `Flatbed Warsaw ${XB("24/7")}: ~${XB("30 min")} ETA, underground car parks, auctions, premium cars, Poland & Europe. ${XB("Fixed price")}. ${XB("506-001-057")}.`,
  svc9_seo_title: `Flatbed tow truck Warsaw 24/7 — car transport & recovery | INNSER`,
  svc9_seo_desc: `Professional flatbed in Warsaw & Mazovia: ~30 min response, underground parking recovery, Copart IAAI BCA auction pickup, premium vehicle transport. Poland up to 500 km + Europe. No hidden fees. Call 506-001-057.`,
  svc9_keywords: `flatbed tow truck Warsaw, car transporter 24h Warsaw, vehicle recovery Mazovia, underground parking car recovery, auction car transport Copart, premium car transport Warsaw, flatbed towing price, INNSER`,
  svc9_p1: `Need a ${XB("flatbed in Warsaw")}? We provide professional ${XB("tow truck")} and ${XB("car transport")} ${XB("around the clock")}, every day of the year. We aim to arrive in about ${XB("30 minutes")} anywhere in ${XB("Warsaw")} and ${XB("Mazovia")}. Fast, careful service with ${XB("fixed prices")} — ${XB("no hidden surcharges")}.`,
  svc9_h2: `What is a ${XB("flatbed")} and when do you need one?`,
  svc9_p2: `A flatbed is a specialised truck with a loading platform for cars, SUVs, vans and motorcycles. Unlike hook towing, the vehicle is ${XB("fully loaded onto the platform")}, avoiding transport damage — especially if it ${XB("does not run")}, has suspension or wheel damage, or is a ${XB("premium or sports car")} with low ground clearance.`,
  svc9_p3: `You typically need a flatbed when: a breakdown on the road, ${XB("accident damage")}, stuck in snow or mud, engine or gearbox failure, damaged wheels or suspension, ${XB("impound lot")} release, transport to a ${XB("garage, auction or new storage location")}.`,
  svc9_h3: `${XB("Flatbed recovery from underground parking")} in Warsaw`,
  svc9_p4: `Recovering cars from ${XB("underground car parks")} is challenging due to ${XB("height limits")}. Our equipment includes ${XB("low-profile")} solutions for tight spaces.`,
  svc9_p5: `We work at malls, housing estates, office buildings, hotels and airports across Warsaw — ${XB("any level")}, quickly and without damage.`,
  svc9_h4: `${XB("Flatbed from car auctions")}`,
  svc9_p6: `Bought a car at auction? We transport from Polish and EU auctions — ${XB("Copart, IAAI, BCA, Adesa, Auto1")} and more.`,
  svc9_p7: `We collect directly from the auction site and deliver home, to a workshop, customs, a warehouse or another city — including ${XB("damaged, non-running and partly dismantled")} vehicles.`,
  svc9_h5: `Transport for ${XB("premium and sports cars")}`,
  svc9_p8: `For high-value and collector cars we use careful handling and secure ${XB("wheel straps and tie-downs")}.`,
  svc9_p9: `Experienced with ${XB("BMW, Mercedes, Audi, Porsche, Ferrari, Lamborghini")} and more — your car arrives as it was loaded.`,
  svc9_h6: `Flatbed ${XB("24/7")} — any time`,
  svc9_p10: `Breakdowns do not wait — we work ${XB("24/7, 365 days a year")}. Dispatch is always on; we send the nearest truck within minutes of your call.`,
  svc9_h7: `${XB("Service area")}`,
  svc9_p11: `${XB("Warsaw")} and districts (Mokotów, Ursus, Praga, Wola, Bielany, Wilanów, Ochota, Żoliborz, Bemowo, Targówek, Wesoła and more). Nearby: Piaseczno, Legionowo, Pruszków, Nadarzyn, Grodzisk Mazowiecki, Mińsk Mazowiecki, Wołomin. ${XB("All of Poland within 500 km+")}: Kraków, Wrocław, Gdańsk, Poznań, Łódź, Katowice, Lublin, Bydgoszcz, Szczecin. ${XB("International transport across Europe")}.`,
  svc9_h8: `Why choose ${XB("our flatbed in Warsaw")}?`,
  svc9_p12: `${XB("Fast arrival")} (~30 min in Warsaw), experienced drivers (${XB("10+ years")}), modern equipment, ${XB("price agreed upfront")}, ${XB("all vehicle types")} including premium, ${XB("24/7 availability")}.`,
  svc9_h9: `How to ${XB("order a flatbed")} in Warsaw?`,
  svc9_p13: `Call ${XB("506-001-057")} or message ${XB("WhatsApp")} / ${XB("Telegram")}: share location, make and model, reason and destination — we confirm ETA.`,
  svc9_p14: `${XB("Call now — 506-001-057")}. Dispatch ${XB("24/7")}. ${XB("Flatbed in Warsaw")} — fast, careful, ${XB("fixed price")}.`,
  svc9_faq1q: `Can a flatbed enter ${XB("underground parking")}?`,
  svc9_faq1a: `Yes — low-profile gear; malls, estates, offices and hotels across Warsaw.`,
  svc9_faq2q: `Do you collect from ${XB("auctions")}?`,
  svc9_faq2a: `Yes — Copart, IAAI, BCA, Adesa, Auto1 and more; delivery to your chosen address in Poland or Europe.`,
  svc9_faq3q: `Is the ${XB("price fixed upfront")}?`,
  svc9_faq3a: `Yes — quote before we start, no hidden fees; typical ETA ~30 minutes in Warsaw depending on traffic and location.`,
};

const ru = {
  svc9_t: `${XB("Лавета Варшава")} — ${XB("Эвакуатор")} и ${XB("Транспортировка Автомобилей")} ${XB("24/7")}`,
  svc9_d: `${XB("Лавета Варшава 24/7")}: приезд около ${XB("30 минут")}, подземные парковки, аукционы, премиум, Польша и Европа. ${XB("Фиксированная цена")}. ${XB("506-001-057")}.`,
  svc9_seo_title: `Лавета Варшава — Эвакуатор и Транспортировка Автомобилей 24/7 | INNSER`,
  svc9_seo_desc: `Лавета Варшава — эвакуатор и транспортировка автомобилей круглосуточно. Приезд около 30 мин по Варшаве и Мазовии, подземные паркинги, забор авто с аукционов Copart IAAI BCA, перевозка премиум-авто. Польша до 500 км и Европа. Фиксированная цена, без скрытых доплат. 506-001-057 24/7.`,
  svc9_keywords: `лавета варшава, лавета варшава эвакуатор, транспортировка автомобилей варшава, эвакуатор и транспортировка автомобилей 24/7, лавета варшава 24/7, лафета варшава, автолавета мазовия, эвакуация с подземного паркинга, эвакуация с аукциона copart, транспорт премиум авто варшава, фиксированная цена эвакуатор, INNSER`,
  svc9_p1: `Нужна ${XB("лафета в Варшаве")}? Мы предоставляем профессиональные услуги ${XB("эвакуатора")} и ${XB("транспортировки автомобилей")} ${XB("круглосуточно")}, без выходных. Приезжаем в течение ${XB("30 минут")} в любую точку ${XB("Варшавы")} и ${XB("Мазовецкого воеводства")}. Работаем быстро, аккуратно и по ${XB("фиксированным ценам")} — ${XB("без скрытых доплат")}.`,
  svc9_h2: `Что такое ${XB("лафета")} и когда она нужна?`,
  svc9_p2: `${XB("Лафета")} — это специализированный автомобиль-платформа для перевозки легковых автомобилей, внедорожников, микроавтобусов и мотоциклов. В отличие от обычного буксира, лафета ${XB("полностью грузит автомобиль на платформу")}, что исключает повреждения при транспортировке — особенно если авто ${XB("не на ходу")}, повреждена подвеска или колёса, или это ${XB("премиальное / спортивное авто")} с низким клиренсом.`,
  svc9_p3: `Лафета нужна, когда: поломка в дороге, ${XB("ДТП")}, застряли в снегу или грязи, вышли из строя двигатель или КПП, повреждены колёса или подвеска, авто на ${XB("штрафстоянке")}, нужно отвезти на ${XB("СТО, аукцион или на хранение")}.`,
  svc9_h3: `${XB("Лафета с подземных паркингов")} Варшавы`,
  svc9_p4: `Сложная задача — ${XB("достать автомобиль с подземного паркинга")}: ограниченная высота въезда. Наша лафета оснащена ${XB("низкопрофильным оборудованием")} для работы в стеснённых условиях.`,
  svc9_p5: `Работаем на паркингах ТЦ, ЖК, офисов, отелей и аэропортов по всей Варшаве — ${XB("на любом уровне")}, быстро и без повреждений.`,
  svc9_h4: `${XB("Лафета с аукционов")} автомобилей`,
  svc9_p6: `Купили авто на аукционе? Специализируемся на перевозке с польских и европейских площадок — ${XB("Copart, IAAI, BCA, Adesa, Auto1")} и др.`,
  svc9_p7: `Заберём с территории аукциона и доставим домой, на ${XB("СТО, таможню, склад или в другой город")}. Берём на себя погрузку и разгрузку — ${XB("битые, нерабочие и частично разобранные")} автомобили не проблема.`,
  svc9_h5: `Транспортировка ${XB("премиальных и спортивных автомобилей")}`,
  svc9_p8: `Для дорогих, спортивных и коллекционных авто — максимальная аккуратность и надёжные ${XB("крепления на платформе")}.`,
  svc9_p9: `Опыт с ${XB("BMW, Mercedes, Audi, Porsche, Ferrari, Lamborghini")} и др. — доставим в том же состоянии, в каком забрали.`,
  svc9_h6: `Лафета ${XB("24/7")} — в любое время`,
  svc9_p10: `Поломка и авария не ждут — поэтому служба работает ${XB("круглосуточно, 365 дней в году")}. Диспетчер на связи; ближайшая лафета — в течение нескольких минут после звонка.`,
  svc9_h7: `${XB("Зона обслуживания")} лафеты`,
  svc9_p11: `${XB("Варшава")} и районы: Мокотув, Урсус, Прага, Воля, Беляны, Вилянув, Охота, Жолибож, Бемово, Таргувек, Веснова и др. Пригороды: Пясечно, Легионово, Прушкув, Надажин, Гродзиск-Мазовецки, Миньск-Мазовецки, Воломин. ${XB("По всей Польше 500 км и более")}: Краков, Вроцлав, Гданьск, Познань, Лодзь, Катовице, Люблин, Быдгощ, Щецин. ${XB("Международные перевозки по Европе")}.`,
  svc9_h8: `Почему выбирают ${XB("нашу лафету в Варшаве")}?`,
  svc9_p12: `${XB("Быстрая подача")} (~30 мин по Варшаве), опытные водители (${XB("более 10 лет")}), современное оборудование, ${XB("фиксированные цены")} до начала работ, ${XB("любые автомобили")} включая премиум, ${XB("24/7")}.`,
  svc9_h9: `Как ${XB("вызвать лафету")} в Варшаве?`,
  svc9_p13: `Позвоните ${XB("506-001-057")} или напишите в ${XB("WhatsApp")} и ${XB("Telegram")}: адрес, марка и модель, причина вызова и куда везти — назовём время прибытия.`,
  svc9_p14: `${XB("Звоните прямо сейчас — 506-001-057")}. Диспетчер ${XB("24/7")}. ${XB("Лафета в Варшаве")} — быстро, аккуратно, по ${XB("фиксированной цене")}.`,
  svc9_faq1q: `Работаете с ${XB("подземными паркингами")}?`,
  svc9_faq1a: `Да — низкопрофильное оборудование; ТЦ, ЖК, офисы, отели по всей Варшаве.`,
  svc9_faq2q: `Забираете авто с ${XB("аукционов")}?`,
  svc9_faq2a: `Да — Copart, IAAI, BCA, Adesa, Auto1 и др.; доставка в указанное место в Польше и Европе.`,
  svc9_faq3q: `${XB("Цена известна заранее")}?`,
  svc9_faq3a: `Да — озвучиваем до начала работ, без скрытых доплат; ориентир ~30 минут по Варшаве в зависимости от трафика.`,
};

const ua = {
  svc9_t: `${XB("Лафета Варшава")} — ${XB("евакуатор")} і ${XB("перевезення автомобілів")} ${XB("24/7")}`,
  svc9_d: `${XB("Лафета Варшава 24/7")}: приїзд ~${XB("30 хв")}, підземні паркінги, аукціони, преміум, Польща та Європа. ${XB("Фіксована ціна")}. ${XB("506-001-057")}.`,
  svc9_seo_title: `Лафета Варшава 24/7 — евакуатор і перевезення авто | INNSER`,
  svc9_seo_desc: `Професійна лафета у Варшаві та на Мазовії: приїзд ~30 хв, евакуація з підземних паркінгів, забирання авто з аукціонів Copart IAAI BCA, транспорт преміум-авто. Польща до 500 км і Європа. Без прихованих доплат. 506-001-057 цілодобово.`,
  svc9_keywords: `лафета Варшава, евакуатор Варшава 24/7, автолафета Мазовія, перевезення авто лафетою, лафета з підземного паркінгу, евакуація з аукціону Copart, транспорт преміум авто Варшава, фіксована ціна евакуатор, INNSER`,
  svc9_p1: `Потрібна ${XB("лафета у Варшаві")}? Надаємо професійний ${XB("евакуатор")} і ${XB("перевезення лафетою")} ${XB("цілодобово")}, без вихідних. Приїжджаємо за ~${XB("30 хвилин")} у будь-яку точку ${XB("Варшави")} та ${XB("Мазовецького воєводства")}. Швидко, акуратно, ${XB("фіксована ціна")} — ${XB("без прихованих доплат")}.`,
  svc9_h2: `Що таке ${XB("лафета")} і коли вона потрібна?`,
  svc9_p2: `${XB("Лафета")} — спеціалізована платформа для легкових авто, позашляховиків, мікроавтобусів і мотоциклів. На відміну від буксирування тросом авто ${XB("повністю завантажується на платформу")} — без пошкоджень; важливо, якщо ${XB("не на ходу")}, пошкоджені підвіска чи колеса, або це ${XB("преміум / спорт")} з низьким кліренсом.`,
  svc9_p3: `Лафета потрібна при: поломці на дорозі, ${XB("ДТП")}, застряганні в снігу чи багні, відмові двигуна чи КПП, пошкоджених колесах чи підвісці, авто на ${XB("штрафмайданчику")}, доставці на ${XB("СТО, аукціон чи нове місце")}.`,
  svc9_h3: `${XB("Лафета з підземних паркінгів")} Варшави`,
  svc9_p4: `Складне завдання — ${XB("витягнути авто з підземного паркінгу")} через обмеження висоти заїзду. Маємо ${XB("низькопрофільне обладнання")} для тісних умов.`,
  svc9_p5: `Працюємо на паркінгах ТРЦ, ЖК, офісів, готелів і аеропортів — ${XB("на будь-якому рівні")}, швидко й без пошкоджень.`,
  svc9_h4: `${XB("Лафета з аукціонів")} авто`,
  svc9_p6: `Купили авто на аукціоні? Перевозимо з польських і європейських майданчиків — ${XB("Copart, IAAI, BCA, Adesa, Auto1")} та ін.`,
  svc9_p7: `Заберемо з території аукціону й доставимо додому, на ${XB("СТО, митницю, склад чи в інше місто")}. Повний цикл завантаження — також ${XB("биті, несправні й частково розібрані")} авто.`,
  svc9_h5: `Перевезення ${XB("преміум і спортивних авто")}`,
  svc9_p8: `Для дорогих і колекційних — максимальна обережність і надійні ${XB("кріплення на платформі")}.`,
  svc9_p9: `Досвід з ${XB("BMW, Mercedes, Audi, Porsche, Ferrari, Lamborghini")} та ін. — стан як при завантаженні.`,
  svc9_h6: `Лафета ${XB("24/7")} — у будь-який час`,
  svc9_p10: `Аварія не чекає — тому ${XB("цілодобово, 365 днів на рік")}. Диспетчер завжди на зв’язку; найближча лафета за лічені хвилини після дзвінка.`,
  svc9_h7: `${XB("Зона обслуговування")} лафети`,
  svc9_p11: `${XB("Варшава")} і райони: Мокотув, Урсус, Прага, Воля, Беляни, Вілянув, Охота, Жолібож, Бемово, Таргувек, Весола тощо. Передмістя: Пясечно, Легіоново, Прушкув, Надажин, Ґродзіськ-Мазовецький, Мінськ-Мазовецький, Воломін. ${XB("Уся Польща до 500 км+")}: Краків, Вроцлав, Гданськ, Познань, Лодзь, Катовіце, Люблін, Бидгощ, Щецин. ${XB("Міжнародні перевезення по Європі")}.`,
  svc9_h8: `Чому обирають ${XB("нашу лафету у Варшаві")}?`,
  svc9_p12: `${XB("Швидка подача")} (~30 хв у Варшаві), досвідчені водії (${XB("10+ років")}), сучасне обладнання, ${XB("ціна до старту робіт")}, ${XB("будь-які авто")} включно з преміум, ${XB("24/7")}.`,
  svc9_h9: `Як ${XB("викликати лафету")} у Варшаві?`,
  svc9_p13: `Телефон ${XB("506-001-057")} або ${XB("WhatsApp")} / ${XB("Telegram")}: адреса, марка й модель, причина й пункт призначення — назвемо час прибуття.`,
  svc9_p14: `${XB("Телефонуйте зараз — 506-001-057")}. Диспетчер ${XB("24/7")}. ${XB("Лафета у Варшаві")} — швидко, акуратно, ${XB("фіксована ціна")}.`,
  svc9_faq1q: `Чи заїде лафета в ${XB("підземний паркінг")}?`,
  svc9_faq1a: `Так — низькопрофільне обладнання; ТРЦ, ЖК, офіси, готелі по всій Варшаві.`,
  svc9_faq2q: `Чи забираєте авто з ${XB("аукціонів")}?`,
  svc9_faq2a: `Так — Copart, IAAI, BCA, Adesa, Auto1 та ін.; доставка за вказаною адресою в Польщі та Європі.`,
  svc9_faq3q: `Чи ${XB("ціна відома заздалегідь")}?`,
  svc9_faq3a: `Так — озвучуємо до початку, без прихованих доплат; орієнтир ~30 хв по Варшаві залежно від трафіку.`,
};

let html = fs.readFileSync(HTML, "utf8");
html = patchLocale(html, "pl", "en", pl);
html = patchLocale(html, "en", "ru", en);
html = patchLocale(html, "ru", "ua", ru);
html = patchLocale(html, "ua", null, ua);
fs.writeFileSync(HTML, html);
console.log("patched svc9 i18n + SEO");
