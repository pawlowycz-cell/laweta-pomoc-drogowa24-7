import fs from "fs";

const HTML = "/Users/nenovikov/Desktop/INNSER COD/innser-v6.html";

function ser(o) {
  return Object.entries(o)
    .map(([k, v]) => `${k}:${JSON.stringify(v)}`)
    .join(",");
}

const XB = (s) => `<strong class="xb">${s}</strong>`;

const pl = {
  svc7_d:
    "Skup samochodów Warszawa + 50 km — wycena w 10 min, gotówka w dniu kontaktu. Laweta, SMS/WhatsApp. 506-001-057.",
  svc7_seo_title:
    "Skup aut Warszawa i okolice — wycena w 10 min, gotówka w dniu kontaktu | INNSER",
  svc7_seo_desc:
    "Szybki skup samochodów Warszawa + 50 km: laweta, wycena telefonem, SMS i WhatsApp, gotówka przy odbiorze. Auta sprawne, powypadkowe, bez OC. 506-001-057 24/7.",
  svc7_keywords:
    "skup aut Warszawa, skup samochodów Mazowsze, wycena auta 10 minut, sprzedaż auta za gotówkę, odkup aut po stłuczce, auto bez OC, laweta pomoc drogowa Warszawa, INNSER",
  svc7_h2: `Skup aut ${XB("Warszawa")} + ${XB("50 km")} — ${XB("wycena")}, ${XB("laweta")}, ${XB("gotówka")}`,
  svc7_p1: `Nie chcesz tracić czasu na ogłoszenia i niepewnych kupujących? ${XB("INNSER")} prowadzi ${XB("skup samochodów")} w ${XB("Warszawie")} i w promieniu około ${XB("50 km")} od miasta — m.in. Piaseczno, Pruszków, Legionowo, Otwock, Marki czy Grodzisk Mazowiecki. Odkupujemy auta sprawne, powypadkowe, z usterkami, bez ważnego ${XB("OC")} oraz na złom i koniec eksploatacji. ${XB("Wstępną wycenę")} ustalasz przez telefon albo wysyłając zdjęcia i opis — ${XB("bez zobowiązań")}. ${XB("24/7")}; obsługa po polsku, angielsku, rosyjsku i ukraińsku.`,
  svc7_p2: `Sprawdzamy dokumenty, ustalamy termin i dokładny adres odbioru: pod blokiem, na parkingu lub w garażu. Przy odbiorze wypłacamy ustaloną kwotę ${XB("gotówką")}. Jeśli pojazd nie jest na chodzie, podjeżdżamy ${XB("lawetą")} z naszej ${XB("pomocy drogowej")} — warunki zależą od lokalizacji w ramach strefy do 50 km.`,
  svc7_h3: `Jak wygląda ${XB("wycena")} i kontakt?`,
  svc7_p3: `Podajesz markę, rok produkcji, przebieg oraz stan techniczny i wizualny albo przesyłasz zdjęcia przez SMS lub ${XB("WhatsApp")} na ${XB("506-001-057")}. Wstępnie wyceniamy po rozmowie; kwotę ostateczną potwierdzamy po oględzinach lub na podstawie przesłanych materiałów. To wygodniejsze niż dziesiątki wiadomości z portali ogłoszeniowych.`,
  svc7_h4: `Gdzie ${XB("dojeżdżamy")} przy skupie?`,
  svc7_p4: `${XB("Skup aut")} realizujemy na terenie całej Warszawy oraz miejscowości w promieniu do około 50 km od aglomeracji — np. Ząbki, Zielonka, Wołomin, Nowy Dwór Mazowiecki, Piastów, Ożarów Mazowiecki. ${XB("Końcowy zasięg")} i termin zawsze potwierdzamy przy pierwszym kontakcie. Poza tą strefą usługa skupu nie obowiązuje. Telefon i WhatsApp: ${XB("506-001-057")}.`,
  svc7_h5: `${XB("Skup aut Warszawa")} — ${XB("wycena w 10 minut")}, ${XB("wypłata tego samego dnia")}`,
  svc7_p5: `Chcesz ${XB("szybko i korzystnie sprzedać samochód")}? Zgłosisz się dziś — sprzedasz dziś. Bez tygodni oczekiwań, bez natrętnych kupujących i bez targów na parkingu. Przyjeżdżamy z ${XB("gotówką")} i odbieramy auto jeszcze ${XB("tego samego dnia")}.`,
  svc7_h6: `Jak to ${XB("działa")}?`,
  svc7_p6: `Wszystko jest proste. Napisz do nas na ${XB("WhatsApp")}, ${XB("Telegram")} lub SMS i prześlij zdjęcia auta wraz z informacjami. ${XB("Oceńimy pojazd w 10 minut")} i podamy cenę. Jeśli się zgadza — przyjeżdżamy, sprawdzamy auto, przekazujemy ${XB("gotówkę")} i zabieramy samochód. Szybko, uczciwie i bez zbędnych formalności.`,
  svc7_h7: `Co wysłać do ${XB("szybkiej wyceny")}?`,
  svc7_p7: `Rok produkcji i przebieg, typ i pojemność silnika, skrzynia biegów (manual, automat, robot, wariant), co wymaga naprawy i co było już zrobione, stan karoserii (rysy, wgniecenia, korozja), ważność ubezpieczenia i przeglądu, zdjęcia auta z zewnątrz i wnętrza.`,
  svc7_h8: `Dlaczego to ${XB("lepiej niż sprzedaż samodzielna")}?`,
  svc7_p8: `Na ${XB("OLX")}, ${XB("Otomoto")} i innych portalach płacisz za promowanie ogłoszeń i czekasz tygodniami albo miesiącami na kupca. Potem przyjeżdżają osoby, które targują się, szukają wad i marnują czas, by odejść bez transakcji. Z nami inaczej: ${XB("dzwonisz, wysyłasz zdjęcia, dostajesz wycenę i sprzedajesz")}. Całość często zajmuje kilka godzin.`,
  svc7_h9: `Jakie samochody ${XB("skupujemy")}?`,
  svc7_p9: `Kupujemy ${XB("dowolne auta")} — na chodzie i nie na chodzie, po kolizji, z uszkodzeniami blacharskimi, z problemami mechanicznymi, z przeterminowanym OC lub przeglądem. Niezależnie od stanu złożymy ${XB("uczciwą ofertę")}.`,
  svc7_p10: `Zadzwoń lub napisz teraz — ${XB("506-001-057")}. ${XB("WhatsApp")} i Telegram — ${XB("506-001-057")}. ${XB("Wycena w 10 minut")}. ${XB("Pieniądze tego samego dnia")}. Prosto: dzwonisz — sprzedajesz.`,
};

const en = {
  svc7_d:
    "Cash for cars Warsaw +50 km — 10-minute quote, same-day cash. Flatbed, SMS/WhatsApp. 506-001-057.",
  svc7_seo_title:
    "Cash for cars Warsaw +50 km — 10-minute quote, same-day payment | INNSER",
  svc7_seo_desc:
    "Fast car buying in Warsaw and within ~50 km: flatbed pickup, valuation by phone, SMS and WhatsApp, cash when we collect. Running, damaged, no third-party insurance. 506-001-057 24/7.",
  svc7_keywords:
    "cash for cars Warsaw, car buyer Mazovia, sell car same day Warsaw, car valuation 10 minutes, accident car buyout, car without insurance Poland, flatbed towing Warsaw, INNSER",
  svc7_h2: `Car purchase ${XB("Warsaw")} + ${XB("50 km")} — ${XB("quote")}, ${XB("flatbed")}, ${XB("cash")}`,
  svc7_p1: `Tired of classifieds and no-shows? ${XB("INNSER")} buys cars in ${XB("Warsaw")} and within about ${XB("50 km")} of the city — e.g. Piaseczno, Pruszków, Legionowo, Otwock, Marki, Grodzisk Mazowiecki. We purchase roadworthy, accident-damaged, faulty, uninsured (${XB("no OC")}) and end-of-life vehicles. Get a ${XB("preliminary valuation")} by phone or by sending photos and a short description — ${XB("no obligation")}. ${XB("24/7")}; Polish, English, Russian and Ukrainian.`,
  svc7_p2: `We verify documents, agree a time and exact pickup address — at your building, a garage or a car park. We pay the agreed amount in ${XB("cash")} when we collect the car. If it does not run, we can send a ${XB("flatbed")} from our ${XB("roadside assistance")} — terms depend on location within the 50 km zone.`,
  svc7_h3: `How do ${XB("quoting")} and contact work?`,
  svc7_p3: `Share make, model year, mileage and technical or cosmetic condition, or send photos via SMS or ${XB("WhatsApp")} to ${XB("506-001-057")}. We give a preliminary quote on the call and confirm the final price after an on-site inspection or from the materials you send. Easier than dozens of messages from classified sites.`,
  svc7_h4: `Where do we ${XB("pick up")} cars?`,
  svc7_p4: `${XB("We buy cars")} across Warsaw and towns within about 50 km of the agglomeration — e.g. Ząbki, Zielonka, Wołomin, Nowy Dwór Mazowiecki, Piastów, Ożarów Mazowiecki. We always confirm ${XB("final coverage")} and timing on first contact. Outside this zone we do not offer buyback. Phone and WhatsApp: ${XB("506-001-057")}.`,
  svc7_h5: `${XB("Cash for cars in Warsaw")} — ${XB("10-minute quote")}, ${XB("same-day payment")}`,
  svc7_p5: `Want to ${XB("sell your car quickly and fairly")}? Contact us today — sell today. No weeks of waiting, no pushy buyers, no haggling in a car park. We arrive with ${XB("cash")} and collect the car ${XB("the same day")}.`,
  svc7_h6: `How does it ${XB("work")}?`,
  svc7_p6: `It is simple. Message us on ${XB("WhatsApp")}, ${XB("Telegram")} or SMS and send photos of the car with the details. We ${XB("value the car in 10 minutes")} and give a price. If it works for you — we come, inspect the vehicle, hand over ${XB("cash")} and take the car. Fast, fair and hassle-free.`,
  svc7_h7: `What to send for a ${XB("quick quote")}?`,
  svc7_p7: `Year and mileage, engine type and capacity, gearbox type (manual, automatic, robot, CVT), what needs repair and what was already done, body condition (scratches, dents, rust), insurance and MOT validity, photos outside and inside.`,
  svc7_h8: `Why is this ${XB("better than selling yourself")}?`,
  svc7_p8: `On ${XB("OLX")}, ${XB("Otomoto")} and other portals you pay for promoted ads and wait weeks or months for a buyer. Then people arrive, haggle, look for flaws, waste your time and leave with no deal. With us it is different: ${XB("you call, send photos, get a quote and sell")}. The whole thing often takes a few hours.`,
  svc7_h9: `What cars do we ${XB("buy")}?`,
  svc7_p9: `We buy ${XB("any cars")} — running or not, after collisions, with body damage, mechanical issues, expired insurance or inspection. Whatever the condition, we will make a ${XB("fair offer")}.`,
  svc7_p10: `Call or message now — ${XB("506-001-057")}. ${XB("WhatsApp")} and Telegram — ${XB("506-001-057")}. ${XB("Quote in 10 minutes")}. ${XB("Money the same day")}. Simple: you call — you sell.`,
};

const ru = {
  svc7_d:
    "Выкуп авто Варшава + 50 км — оценка за 10 минут, деньги в день. Лафета, SMS/WhatsApp. 506-001-057.",
  svc7_seo_title:
    "Скупка авто Варшава и окрестности — оценка за 10 минут, оплата в день обращения | INNSER",
  svc7_seo_desc:
    "Быстрый выкуп автомобилей в Варшаве и до ~50 км: лафета, оценка по телефону, SMS и WhatsApp, наличные при вывозе. На ходу, после ДТП, без ОСАГО. 506-001-057 круглосуточно.",
  svc7_keywords:
    "скупка авто Варшава, выкуп автомобилей Мазовия, оценка авто 10 минут, продать авто за наличные, выкуп после ДТП, авто без ОСАГО, эвакуатор лафета Варшава, INNSER",
  svc7_h2: `Скупка автомобилей ${XB("Варшава")} + ${XB("50 км")} — ${XB("оценка")}, ${XB("лафета")}, ${XB("наличные")}`,
  svc7_p1: `Устали от объявлений и срывов? ${XB("INNSER")} выкупает машины в ${XB("Варшаве")} и в радиусе около ${XB("50 км")} — Пясечно, Прушкув, Легионово, Отвоцк, Марки, Гродзиск-Мазовецки и др. Берём авто на ходу, после ДТП, с поломками, без действующего ${XB("OC")} и на утилизацию. ${XB("Предварительную цену")} называем по звонку или по фото и описанию — ${XB("без обязательств")}. ${XB("24/7")}; польский, английский, русский и украинский.`,
  svc7_p2: `Проверяем документы, согласовываем время и точный адрес — у подъезда, на парковке, в гараже. При передаче авто выплачиваем договорённую сумму ${XB("наличными")}. Если не на ходу — приезжаем на ${XB("лафете")} из нашей ${XB("помощи на дороге")}; условия зависят от адреса в пределах 50 км.`,
  svc7_h3: `Как проходит ${XB("оценка и связь")}?`,
  svc7_p3: `Сообщите марку, год, пробег, техническое и внешнее состояние или пришлите фото в SMS или ${XB("WhatsApp")} на ${XB("506-001-057")}. Сначала ориентир по разговору, окончательно — после осмотра на месте или по присланным материалам. Удобнее, чем десятки сообщений с площадок объявлений.`,
  svc7_h4: `Куда ${XB("выезжаем за авто")}?`,
  svc7_p4: `${XB("Скупка")} действует по всей Варшаве и населённым пунктам примерно в 50 км от агломерации — Зомбки, Зелёнка, Воломин, Новы-Двур-Мазовецки, Пястув, Ожарув-Мазовецки и т. д. ${XB("Итоговую зону и время")} подтверждаем при первом контакте. Вне этой зоны выкуп не предлагаем. Телефон и WhatsApp: ${XB("506-001-057")}.`,
  svc7_h5: `${XB("Выкуп автомобилей в Варшаве")} — ${XB("оценка за 10 минут")}, ${XB("оплата в день обращения")}`,
  svc7_p5: `Хотите ${XB("быстро и выгодно продать автомобиль")}? Обратились сегодня — продали сегодня. Никаких недель ожидания, никаких назойливых покупателей, никаких торгов на парковке. Мы приезжаем с ${XB("наличными")} и забираем автомобиль ${XB("в тот же день")}.`,
  svc7_h6: `Как это ${XB("работает")}?`,
  svc7_p6: `Всё очень просто. Напишите нам в ${XB("WhatsApp")}, ${XB("Telegram")} или SMS и пришлите фото автомобиля вместе с информацией. Мы ${XB("оценим вашу машину за 10 минут")} и назовём цену. Если вас устраивает — приезжаем, проверяем автомобиль, передаём ${XB("наличные")} и забираем машину. Быстро, честно и без лишних хлопот.`,
  svc7_h7: `Что нужно прислать для ${XB("оценки")}?`,
  svc7_p7: `Для быстрой оценки пришлите: год выпуска и пробег, тип и объём двигателя, тип коробки передач (механика, автомат, робот, вариатор), что нужно сделать в автомобиле и что уже было сделано, состояние кузова (царапины, вмятины, ржавчина), срок действия страховки и техосмотра, фотографии автомобиля снаружи и изнутри.`,
  svc7_h8: `Почему это ${XB("лучше, чем продавать самому")}?`,
  svc7_p8: `Размещая объявление на ${XB("OLX")}, ${XB("Otomoto")} или других досках, вы тратите деньги на платные объявления и недели или месяцы ждёте покупателя. Потом приезжают люди, которые торгуются, ищут недостатки, забирают ваше время и уходят ни с чем. С нами всё иначе — ${XB("набрали номер, прислали фото, получили оценку, продали")}. Весь процесс занимает несколько часов.`,
  svc7_h9: `Какие автомобили ${XB("покупаем")}?`,
  svc7_p9: `Покупаем ${XB("любые автомобили")} — на ходу и не на ходу, после аварии, с повреждениями кузова, с проблемами по механике, с истёкшей страховкой или техосмотром. Не важно, в каком состоянии ваша машина — мы сделаем ${XB("честное предложение")}.`,
  svc7_p10: `Звоните или пишите прямо сейчас — ${XB("506-001-057")}. ${XB("WhatsApp")} и Telegram — ${XB("506-001-057")}. ${XB("Оценка за 10 минут")}. ${XB("Деньги в тот же день")}. Всё просто — ${XB("набрали и продали")}.`,
};

const ua = {
  svc7_d:
    "Викуп авто Варшава + 50 км — оцінка за 10 хв, готівка в день звернення. Лафета, SMS/WhatsApp. 506-001-057.",
  svc7_seo_title:
    "Викуп авто Варшава та околиці — оцінка за 10 хвилин, оплата в день звернення | INNSER",
  svc7_seo_desc:
    "Швидкий викуп авто у Варшаві та до ~50 км: лафета, оцінка телефоном, SMS і WhatsApp, готівка при вивозі. На ходу, після ДТП, без OC. 506-001-057 цілодобово.",
  svc7_keywords:
    "викуп авто Варшава, скупка авто Варшава, викуп автомобілів Мазовія, оцінка авто 10 хвилин, продати авто за готівку, викуп після ДТП, авто без страховки, евакуатор лафета Варшава, INNSER",
  svc7_h2: `Скупка авто ${XB("Варшава")} + ${XB("50 км")} — ${XB("оцінка")}, ${XB("лафета")}, ${XB("готівка")}`,
  svc7_p1: `Втомилися від оголошень і зривів? ${XB("INNSER")} викуповує авто у ${XB("Варшаві")} та в радіусі близько ${XB("50 км")} — Пясечно, Прушкув, Легіоново, Отвоцк, Маркі, Ґродзіськ-Мазовецький тощо. Беремо справні, після ДТП, з несправностями, без чинного ${XB("OC")} і на утилізацію. ${XB("Попередню ціну")} називаємо дзвінком або за фото й описом — ${XB("без зобов’язань")}. ${XB("24/7")}; польська, англійська, російська й українська.`,
  svc7_p2: `Перевіряємо документи, узгоджуємо час і точну адресу — біля під’їзду, на парковці, у гаражі. При передачі авто виплачуємо домовлену суму ${XB("готівкою")}. Якщо не на ходу — під’їжджаємо ${XB("лафетою")} з нашої ${XB("допомоги на дорозі")}; умови залежать від локації в межах 50 км.`,
  svc7_h3: `Як відбувається ${XB("оцінка і зв’язок")}?`,
  svc7_p3: `Надайте марку, рік, пробіг, технічний і зовнішній стан або надішліть фото в SMS чи ${XB("WhatsApp")} на ${XB("506-001-057")}. Спочатку орієнтир у розмові, остаточно — після огляду на місці або за надісланими матеріалами. Зручніше, ніж десятки повідомлень з майданчиків оголошень.`,
  svc7_h4: `Куди ${XB("виїжджаємо за авто")}?`,
  svc7_p4: `${XB("Скупка")} діє по всій Варшаві та населених пунктах приблизно в 50 км від агломерації — Зомбки, Зелёнка, Воломін, Новий-Двур-Мазовецький, Пястув, Ожарув-Мазовецький тощо. ${XB("Підсумкову зону і час")} підтверджуємо при першому контакті. Поза цією зоною викуп не пропонуємо. Телефон і WhatsApp: ${XB("506-001-057")}.`,
  svc7_h5: `${XB("Викуп автомобілів у Варшаві")} — ${XB("оцінка за 10 хвилин")}, ${XB("оплата в день звернення")}`,
  svc7_p5: `Хочете ${XB("швидко й вигідно продати автомобіль")}? Звернулися сьогодні — продали сьогодні. Без тижнів очікування, без нав’язливих покупців і без торгів на парковці. Приїжджаємо з ${XB("готівкою")} і забираємо авто ${XB("в той самий день")}.`,
  svc7_h6: `Як це ${XB("працює")}?`,
  svc7_p6: `Усе дуже просто. Напишіть у ${XB("WhatsApp")}, ${XB("Telegram")} або SMS і надішліть фото авто разом із даними. Ми ${XB("оцінимо авто за 10 хвилин")} і назвемо ціну. Якщо влаштовує — приїжджаємо, перевіряємо авто, передаємо ${XB("готівку")} і забираємо машину. Швидко, чесно й без зайвих клопотів.`,
  svc7_h7: `Що надіслати для ${XB("швидкої оцінки")}?`,
  svc7_p7: `Рік випуску й пробіг, тип і об’єм двигуна, тип КПП (механіка, автомат, робот, варіатор), що треба зробити й що вже зроблено, стан кузова (подряпини, вм’ятини, іржа), термін страховки й техогляду, фото ззовні й зсередини.`,
  svc7_h8: `Чому це ${XB("краще, ніж продавати самостійно")}?`,
  svc7_p8: `На ${XB("OLX")}, ${XB("Otomoto")} та інших майданчиках ви платите за просування й чекаєте тижнями чи місяцями покупця. Потім приїжджають люди, торгуються, шукають недоліки, забирають час і йдуть ні з чим. З нами інакше: ${XB("набрали, надіслали фото, отримали оцінку, продали")}. Усе часто займає кілька годин.`,
  svc7_h9: `Які автомобілі ${XB("викуповуємо")}?`,
  svc7_p9: `Купуємо ${XB("будь-які авто")} — на ходу й не на ходу, після ДТП, з пошкодженнями кузова, з механічними проблемами, з простроченою страховкою чи техоглядом. Незалежно від стану зробимо ${XB("чесну пропозицію")}.`,
  svc7_p10: `Дзвоніть або пишіть зараз — ${XB("506-001-057")}. ${XB("WhatsApp")} і Telegram — ${XB("506-001-057")}. ${XB("Оцінка за 10 хвилин")}. ${XB("Гроші в той самий день")}. Усе просто — ${XB("набрали й продали")}.`,
};

function patchLocale(html, loc, nextLoc, bundle) {
  const startNeedle = `${loc}:{`;
  const i = html.indexOf(startNeedle);
  if (i < 0) throw new Error(`Missing ${startNeedle}`);
  const j = nextLoc
    ? html.indexOf(`${nextLoc}:{`, i + 4)
    : html.indexOf("\n};\n\nconst SVCS", i);
  if (j < 0) throw new Error(`Missing block end after ${loc}`);
  const block = html.slice(i, j);
  const s = block.indexOf("svc7_d:");
  const e = block.indexOf("svc7_faq1q:");
  if (s < 0 || e < 0) throw new Error(`svc7 slice not found in ${loc}`);
  const inner = ser(bundle);
  return html.slice(0, i + s) + inner + "," + html.slice(i + e);
}

let html = fs.readFileSync(HTML, "utf8");
html = patchLocale(html, "pl", "en", pl);
html = patchLocale(html, "en", "ru", en);
html = patchLocale(html, "ru", "ua", ru);
html = patchLocale(html, "ua", null, ua);
fs.writeFileSync(HTML, html);
console.log("patched svc7 i18n + SEO in innser-v6.html");
