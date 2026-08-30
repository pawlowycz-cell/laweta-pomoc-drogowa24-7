/**
 * Unique geo Google reviews (districts / suburbs / roads).
 * Each place gets 3 different full texts — not one template with only {place} swapped.
 */
import { districtBySlug, NAMES as DISTRICT_NAMES, DISTRICTS } from './districts-data.mjs';
import { ROADS, NAMES as ROAD_NAMES } from './roads-data.mjs';

const AUTHORS = [
  'Piotr K.', 'Olga N.', 'Jan M.', 'Beata S.', 'Krzysztof R.', 'Lena W.',
  'Marcin D.', 'Hanna P.', 'Stefan G.', 'Vera L.', 'Maciej T.', 'Nina C.',
  'Andrzej B.', 'Sofia J.', 'Rafał H.', 'Eliza F.', 'Łukasz M.', 'Daria V.',
  'Seweryn A.', 'Inna Z.', 'Patryk O.', 'Yulia R.', 'Konrad E.', 'Marta Y.',
  'Szymon U.', 'Nadia I.', 'Wojciech X.', 'Klara Q.', 'Dominik V.', 'Tamara S.',
  'Norbert C.', 'Alina B.', 'Cezary K.', 'Renata M.', 'Hubert L.', 'Weronika P.',
  'Igor F.', 'Paulina Z.', 'Bartek N.', 'Ksenia T.', 'Mateusz G.', 'Irina W.',
];

/** Full unique bodies for districts & suburbs — {place} once each, different stories. */
const LAND = {
  pl: [
    'W {place} auto stanęło wieczorem. Zadzwoniłem do INNSER, dyspozytor od razu podał cenę, ewakuator był szybko. Odholowali spokojnie — polecam.',
    'Rano w {place} nie odpaliłem. Myślałem, że skończy się na kablach, ale potrzebny był ewakuator. INNSER przyjechał, załadowali bez szarpania.',
    'Po stłuczce w {place} panikowałem. Dyspozytor INNSER uspokoił, ewakuator dojechał, auto pojechało na serwis. Dzięki.',
    'Policja w {place} kazała odholować auto. Numer 506-001-057 — holownik INNSER szybko na miejscu, bez nerwów.',
    'Noc, {place}, auto nie jedzie. Wezwałem pomoc drogową INNSER — dojazd OK, cena z góry, załadunek spokojny.',
    'Szukałem ewakuatora koło {place} w weekend. INNSER odebrał od razu, dyspozytor konkretny, przyjechali i załatwili.',
    'W {place} złapałem awarię skrzyni. Laweta/ewakuator INNSER — szybko, uczciwie, zero kombinowania.',
    'Zablokowałem przejazd w {place}, wstyd. Holownik INNSER przyjechał bez dramatu, zdjął auto i po sprawie.',
    'Potrzebowałem ewakuatora z osiedla w {place}. Dyspozytor zapytał o dojazd, kierowca znał okolicę — INNSER plus.',
    'Deszcz, {place}, auto zgasło. Pomoc drogowa INNSER: telefon, wycena, dojazd. Ewakuator zrobił robotę.',
    'W {place} pękła opona i nie miałem zapasu. Najpierw myśleli o kole, skończyło się na ewakuatorze INNSER — OK.',
    'Sobota w {place}, auto na awaryjnych. INNSER: dyspozytor spokojny, ewakuator szybko, cena bez niespodzianek.',
    'Musiałem zabrać auto z parkingu w {place}. INNSER ogarnął, załadowali ostrożnie. Polecam ten numer.',
    'Awaria klimatyzacji? Nie — silnik. W {place} wezwałem INNSER. Ewakuator, warsztat, wszystko w jednym ciągu.',
    'Przyjaciel utknął w {place}. Zadzwoniłem za niego do INNSER — ewakuator pojechał, potem podziękował. Działa.',
    'Zimą w {place} akumulator padł totalnie. Na miejscu nie dało rady, ewakuator INNSER zawiózł do serwisu.',
    'W {place} po kolizji na skrzyżowaniu. INNSER przyjechał, pomógł z formalnościami i odholował. Profeska.',
    'Szukaliśmy taniego holownika w {place}. INNSER podał cenę od razu — uczciwie, bez „dopłat na miejscu”.',
    'Auto nie chciało jechać pod górkę w {place}. Wezwałem ewakuator INNSER — szybko i bez stresu.',
    'Dyspozytor INNSER znał {place}, nie dopytywał sto razy. Ewakuator przyjechał, załadunek czysty. Polecam.',
    'Wieczór w {place}, kontrolka silnika i postój. Pomoc drogowa INNSER — ewakuator zamiast kombinowania na własną rękę.',
    'W {place} urwał się przegub. INNSER: telefon → dojazd → platforma. Bez gadania, konkret.',
    'Żona stała w {place} z dzieckiem. Zadzwoniłem do INNSER — ewakuator szybko, kierowca miły. Ulga.',
    'Po pracy w {place} auto „umrzeć”. INNSER odholował do domu warsztatu partnerskiego. Super sprawa.',
    'Myślałem, że w {place} długo poczekam. A INNSER był szybciej niż myślałem. Ewakuator + jasna cena.',
    'W {place} potrzebowałem holownika pod konkretny adres serwisu. INNSER dowiózł dokładnie tam. OK.',
    'Pierwszy raz wzywałam ewakuator — akurat w {place}. Dyspozytor INNSER wytłumaczył krok po kroku. Spokojnie.',
    'Auto po gradobiciu? Nie, po awarii elektryki w {place}. INNSER zabrał lawetą/ewakuatorem, bez problemu.',
    'W {place} stałem na zakazie. Lepiej wezwać holownika niż mandat w nieskończoność — INNSER załatwił.',
    'Nocny dyżur w {place}: INNSER wziął telefon, wysłał ewakuator. Cena taka, jak w rozmowie. Szacun.',
    'Zepsuł się turbo w {place}. Nie ryzykowałem jazdy — ewakuator INNSER. Dobrze, że zadzwoniłem.',
    'W {place} kolega polecił 506-001-057. Sprawdziłem: dyspozytor INNSER, szybki dojazd, czysty załadunek.',
    'Awaria na wyjeździe z {place}. Holownik INNSER zawrócił sprawę w godzinę — od telefonu do serwisu.',
    'Szukali opcji „na już” w {place}. INNSER nie obiecywał cudów, ale dojechał realnie szybko. Polecam.',
    'W {place} auto zablokowało wjazd do bramy. Ewakuator INNSER zdjął je ostrożnie, bez rys na bramie.',
    'Po burzy w {place} zalany silnik? Nie — po prostu padł. INNSER ewakuował, potem serwis. Dzięki.',
  ],
  en: [
    'Car died in the evening in {place}. Called INNSER, dispatcher gave the price straight away, tow truck came fast. Smooth load — recommend.',
    'Morning in {place}, wouldn’t start. Thought it was just cables, ended up needing a tow. INNSER loaded it carefully.',
    'After a fender-bender in {place} I panicked. INNSER dispatcher calmed me down, tow came, car went to a garage. Thanks.',
    'Police in {place} said the car had to be towed. Dialled 506-001-057 — INNSER was there quickly, no drama.',
    'Night in {place}, car wouldn’t move. Called INNSER roadside help — ETA was fine, price upfront, calm loading.',
    'Needed a tow near {place} on a weekend. INNSER answered right away, clear dispatcher, they sorted it.',
    'Gearbox failed in {place}. INNSER flatbed/tow — quick, fair, no nonsense.',
    'Blocked a driveway in {place}, awkward. INNSER tow showed up, moved the car, done.',
    'Needed a tow from a housing estate in {place}. Dispatcher asked about access, driver knew the area — INNSER plus.',
    'Rain, {place}, engine cut out. INNSER: call, quote, arrival. Tow did the job.',
    'Blowout in {place}, no spare. Started as a tyre job, finished with an INNSER tow — fair enough.',
    'Saturday in {place}, hazards on. INNSER dispatcher was calm, tow came quick, price as quoted.',
    'Had to get the car out of a car park in {place}. INNSER handled it, careful loading. Saving that number.',
    'Not the AC — the engine. In {place} I called INNSER. Tow to the workshop in one go.',
    'Mate stuck in {place}. I called INNSER for him — tow went out, he texted thanks. It works.',
    'Winter in {place}, battery totally dead. Jump wouldn’t hold, INNSER towed to a garage.',
    'After a junction bump in {place}. INNSER arrived, helped with the mess, towed away. Proper job.',
    'We wanted a clear price for towing in {place}. INNSER said it on the phone — no extras on site.',
    'Car wouldn’t climb in {place}. Called INNSER tow — fast and no stress.',
    'INNSER dispatcher knew {place}, didn’t ask the same thing twice. Tow arrived, clean load. Recommend.',
    'Evening in {place}, engine light and stop. INNSER roadside — tow instead of DIY guessing.',
    'CV joint went in {place}. INNSER: call → arrival → deck. Straight talk.',
    'Wife stranded in {place} with the kid. Called INNSER — tow quick, driver decent. Relief.',
    'After work in {place} the car just died. INNSER towed to a partner garage. Sorted.',
    'Thought I’d wait forever in {place}. INNSER was sooner than I expected. Tow + clear price.',
    'Needed a tow in {place} to a specific workshop address. INNSER dropped it exactly there. Good.',
    'First time calling a tow — happened in {place}. INNSER dispatcher walked me through it. Calm.',
    'Electrics failed in {place}. INNSER took it on the truck, no fuss.',
    'Parked illegal in {place}. Better a tow than endless tickets — INNSER moved it.',
    'Night shift call in {place}: INNSER picked up, sent a tow. Price matched the call. Respect.',
    'Turbo failed in {place}. Didn’t risk driving — INNSER tow. Glad I called.',
    'Mate in {place} gave me 506-001-057. Checked: INNSER dispatcher, quick arrival, clean load.',
    'Breakdown on the way out of {place}. INNSER tow wrapped it up in about an hour phone-to-garage.',
    'Needed “now” in {place}. INNSER didn’t overpromise, but arrived for real. Recommend.',
    'Car blocked a gate in {place}. INNSER tow eased it out, no scratches on the gate.',
    'After a storm in {place} — not flooded, just dead. INNSER towed, then the garage. Thanks.',
  ],
  ru: [
    'Вечером в районе {place} машина встала. Позвонил в INNSER, диспетчер сразу сказал цену, эвакуатор быстро приехал. Погрузили спокойно — рекомендую.',
    'Утром в {place} не завелась. Думал, хватит прикурить, в итоге нужен был эвакуатор. INNSER приехал, загрузили аккуратно.',
    'После мелкого ДТП в {place} растерялся. Диспетчер INNSER успокоил, эвакуатор приехал, увезли на сервис. Спасибо.',
    'В {place} полиция сказала отбуксировать. Набрал 506-001-057 — эвакуатор INNSER быстро на месте, без нервов.',
    'Ночь, {place}, машина не едет. Вызвал помощь на дороге INNSER — по времени нормально, цена заранее, погрузка спокойная.',
    'Нужен был эвакуатор около {place} в выходные. INNSER сразу взял трубку, диспетчер по делу, приехали и сделали.',
    'В {place} полетела коробка. Эвакуатор INNSER — быстро, по цене честно, без лишней воды.',
    'Перекрыл проезд в {place}, неловко. Эвакуатор INNSER приехал без криков, забрал машину — и всё.',
    'Нужно было забрать авто с ЖК в {place}. Диспетчер спросил про въезд, водитель ориентировался — INNSER молодец.',
    'Дождь, {place}, заглохла. Помощь на дороге INNSER: звонок, цена, приезд. Эвакуатор сделал работу.',
    'В {place} пробил колесо, запаски нет. Сначала думали про замену, вышло на эвакуатор INNSER — нормально.',
    'Суббота, {place}, аварийка. Диспетчер INNSER спокойный, эвакуатор быстро, цена как обещали.',
    'Надо было вытащить машину с паркинга в {place}. INNSER справился, грузили осторожно. Номер сохранил.',
    'Не кондей — двигатель. В {place} вызвал INNSER. Эвакуатор до сервиса одним заходом.',
    'Друг застрял в {place}. Позвонил за него в INNSER — эвакуатор выехал, потом отписался «спасибо». Работает.',
    'Зимой в {place} аккумулятор сел наглухо. С места не вышло, эвакуатор INNSER отвёз на СТО.',
    'После касания на перекрёстке в {place}. INNSER приехал, помог сориентироваться и эвакуировал. По делу.',
    'Искали понятную цену на эвакуатор в {place}. INNSER назвал по телефону — без «доплат на месте».',
    'В {place} машина не тянула в горку. Вызвал эвакуатор INNSER — быстро и без стресса.',
    'Диспетчер INNSER знал {place}, не переспрашивал по кругу. Эвакуатор приехал, погрузка чистая. Рекомендую.',
    'Вечер в {place}, загорелся чек и стоп. Помощь на дороге INNSER — лучше эвакуатор, чем гадать самому.',
    'В {place} урвало ШРУС. INNSER: звонок → приезд → платформа. Коротко и ясно.',
    'Жена стояла в {place} с ребёнком. Позвонил в INNSER — эвакуатор быстро, водитель нормальный. Отпустило.',
    'После работы в {place} машина «умерла». INNSER отвёз на партнёрский сервис. Закрыли вопрос.',
    'Думал, в {place} буду ждать вечность. INNSER приехал раньше, чем ждал. Эвакуатор и понятная цена.',
    'Нужен был эвакуатор в {place} именно на адрес сервиса. INNSER довёз туда. Ок.',
    'Впервые вызывала эвакуатор — как раз в {place}. Диспетчер INNSER объяснил по шагам. Спокойно.',
    'Электрика села в {place}. INNSER забрал на эвакуаторе, без лишней суеты.',
    'Встал в {place} там, где нельзя. Лучше эвакуатор, чем штрафы пачкой — INNSER забрал.',
    'Ночной вызов в {place}: INNSER взял трубку, прислал эвакуатор. Цена как в разговоре. Уважение.',
    'Турбина в {place}. Не стал рисковать ехать — эвакуатор INNSER. Правильно, что позвонил.',
    'В {place} посоветовали 506-001-057. Проверил: диспетчер INNSER, быстрый приезд, аккуратная погрузка.',
    'Поломка на выезде из {place}. Эвакуатор INNSER уложил всё примерно за час — от звонка до сервиса.',
    'Нужно было «прямо сейчас» в {place}. INNSER не обещал чудес, но реально быстро доехал. Рекомендую.',
    'Машина перекрыла ворота в {place}. Эвакуатор INNSER вывез осторожно, ворота целые.',
    'После грозы в {place} — не потоп, просто не завелась. INNSER эвакуировал, дальше сервис. Спасибо.',
  ],
  ua: [
    'Ввечері в районі {place} машина стала. Подзвонив в INNSER, диспетчер одразу сказав ціну, евакуатор швидко приїхав. Завантажили спокійно — рекомендую.',
    'Вранці в {place} не завелась. Думав, вистачить прикурити, зрештою потрібен був евакуатор. INNSER приїхав, завантажили обережно.',
    'Після дрібного ДТП в {place} розгубився. Диспетчер INNSER заспокоїв, евакуатор приїхав, відвезли на сервіс. Дякую.',
    'У {place} поліція сказала відбуксовувати. Набрав 506-001-057 — евакуатор INNSER швидко на місці, без нервів.',
    'Ніч, {place}, авто не їде. Викликав допомогу на дорозі INNSER — по часу нормально, ціна заздалегідь, завантаження спокійне.',
    'Потрібен був евакуатор біля {place} у вихідні. INNSER одразу взяв трубку, диспетчер по суті, приїхали й зробили.',
    'У {place} полетіла коробка. Евакуатор INNSER — швидко, по ціні чесно, без зайвої води.',
    'Перекрив проїзд у {place}, незручно. Евакуатор INNSER приїхав без криків, забрав авто — і все.',
    'Треба було забрати авто з ЖК у {place}. Диспетчер спитав про в’їзд, водій орієнтувався — INNSER молодець.',
    'Дощ, {place}, заглухла. Допомога на дорозі INNSER: дзвінок, ціна, приїзд. Евакуатор зробив роботу.',
    'У {place} пробив колесо, запаски немає. Спочатку думали про заміну, вийшло на евакуатор INNSER — нормально.',
    'Субота, {place}, аварійка. Диспетчер INNSER спокійний, евакуатор швидко, ціна як обіцяли.',
    'Треба було витягнути авто з паркінгу в {place}. INNSER впорався, вантажили обережно. Номер зберіг.',
    'Не кондер — двигун. У {place} викликав INNSER. Евакуатор до сервісу одним заходом.',
    'Друг застряг у {place}. Подзвонив за нього в INNSER — евакуатор виїхав, потім відписав «дякую». Працює.',
    'Взимку в {place} акумулятор сів вщент. З місця не вийшло, евакуатор INNSER відвіз на СТО.',
    'Після торкання на перехресті в {place}. INNSER приїхав, допоміг зорієнтуватись і евакуював. По суті.',
    'Шукали зрозумілу ціну на евакуатор у {place}. INNSER назвав по телефону — без «доплат на місці».',
    'У {place} авто не тягнуло в гірку. Викликав евакуатор INNSER — швидко й без стресу.',
    'Диспетчер INNSER знав {place}, не перепитував по колу. Евакуатор приїхав, завантаження чисте. Рекомендую.',
    'Вечір у {place}, загорівся чек і стоп. Допомога на дорозі INNSER — краще евакуатор, ніж гадати самому.',
    'У {place} урвало ШРУС. INNSER: дзвінок → приїзд → платформа. Коротко й ясно.',
    'Дружина стояла в {place} з дитиною. Подзвонив в INNSER — евакуатор швидко, водій нормальний. Відпустило.',
    'Після роботи в {place} авто «померло». INNSER відвіз на партнерський сервіс. Закрили питання.',
    'Думав, у {place} чекатиму вічність. INNSER приїхав раніше, ніж чекав. Евакуатор і зрозуміла ціна.',
    'Потрібен був евакуатор у {place} саме на адресу сервісу. INNSER довіз туди. Ок.',
    'Уперше викликала евакуатор — якраз у {place}. Диспетчер INNSER пояснив по кроках. Спокійно.',
    'Електрика сіла в {place}. INNSER забрав на евакуаторі, без зайвої метушні.',
    'Став у {place} там, де не можна. Краще евакуатор, ніж штрафи пачкою — INNSER забрав.',
    'Нічний виклик у {place}: INNSER взяв трубку, надіслав евакуатор. Ціна як у розмові. Повага.',
    'Турбіна в {place}. Не став ризикувати їхати — евакуатор INNSER. Правильно, що подзвонив.',
    'У {place} порадили 506-001-057. Перевірив: диспетчер INNSER, швидкий приїзд, акуратне завантаження.',
    'Поломка на виїзді з {place}. Евакуатор INNSER вклав усе десь за годину — від дзвінка до сервісу.',
    'Треба було «прямо зараз» у {place}. INNSER не обіцяв чудес, але реально швидко доїхав. Рекомендую.',
    'Авто перекрило ворота в {place}. Евакуатор INNSER вивіз обережно, ворота цілі.',
    'Після грози в {place} — не потоп, просто не завелась. INNSER евакуював, далі сервіс. Дякую.',
  ],
};

/** Unique bodies for road / highway pages. */
const ROAD = {
  pl: [
    'Awaria na {place}, stanąłem na poboczu. INNSER — dyspozytor od razu, ewakuator szybko, załadunek bez szarpania.',
    'Na {place} o 2 w nocy. Pomoc drogowa INNSER odebrała, ewakuator dojechał, cena jak w telefonie.',
    'Pękła opona na {place}, brak miejsca na bezpieczną wymianę. Wezwałem ewakuator INNSER — dobra decyzja.',
    'Kontrolka i utrata mocy na {place}. Nie ryzykowałem dojazdu — holownik INNSER zabrał do serwisu.',
    'Deszcz, {place}, awaria. Dyspozytor INNSER podał ETA, ewakuator zjawił się w terminie. Polecam.',
    'Na {place} po kolizji. INNSER zabezpieczył temat: dojazd, załadunek, warsztat. Spokój.',
    'Auto nie ciągnęło na {place}. Laweta/ewakuator INNSER — szybko zjechali z trasy i pojechali dalej ze mną na platformie.',
    'Pierwszy raz stałem na {place} z trójkątem. Zadzwoniłem 506-001-057 — INNSER ogarnął.',
    'Na {place} liczy się pas awaryjny i czas. INNSER nie obiecywał cudów, ale był realnie szybko.',
    'Zimą na {place} poślizg i awaria. Ewakuator INNSER, kierowca ostrożny. Dzięki.',
    'Skonczył się paliwowy dramat na {place}? Nie — padł silnik. INNSER odholował bez dyskusji.',
    'Na {place} w korku + awaria. Dyspozytor INNSER wiedział, jak podjechać. Ewakuator dał radę.',
    'Motocykl na {place} — potrzebna platforma. INNSER przypiął solidnie, zero strachu.',
    'Bus stanął na {place}. INNSER potwierdził, że biorą takie auto, i przyjechali. OK.',
    'Na {place} po burzy, zalane? Nie, po prostu zgasło. Pomoc drogowa INNSER — ewakuator i serwis.',
    'Zjechałem na pobocze {place} z awarią ABS/silnika. INNSER: jasna cena, szybki dojazd.',
    'Na {place} szukałem „kogoś lokalnego”. Wziąłem INNSER — i dobrze. Ewakuator konkretny.',
    'Holowanie z {place} pod wskazany adres w mieście. INNSER dowiózł dokładnie. Polecam numer.',
  ],
  en: [
    'Broke down on {place}, hard shoulder. INNSER — dispatcher straight away, tow quick, no rough loading.',
    'On {place} at 2 a.m. INNSER roadside picked up, tow arrived, price as on the phone.',
    'Blowout on {place}, nowhere safe to change it. Called INNSER tow — right call.',
    'Warning light and loss of power on {place}. Didn’t risk driving — INNSER tow to a garage.',
    'Rain, {place}, breakdown. INNSER dispatcher gave an ETA and the tow made it. Recommend.',
    'After a bump on {place}. INNSER handled arrival, load, workshop. Calm.',
    'Car wouldn’t pull on {place}. INNSER tow got us off the road and onto the deck.',
    'First time with a triangle on {place}. Called 506-001-057 — INNSER sorted it.',
    'On {place} time matters. INNSER didn’t overpromise, but arrived for real.',
    'Winter on {place}, skid then failure. INNSER tow, careful driver. Thanks.',
    'Not out of fuel on {place} — engine died. INNSER towed, no debate.',
    'Traffic jam on {place} plus breakdown. INNSER dispatcher knew how to approach. Tow managed.',
    'Bike on {place} — needed a deck. INNSER strapped it properly, I wasn’t worried.',
    'Van died on {place}. INNSER confirmed they take that size and came. OK.',
    'After a storm on {place} — not flooded, just stopped. INNSER tow then garage.',
    'Pulled onto the shoulder of {place} with engine trouble. INNSER: clear price, quick arrival.',
    'Looked for “someone local” on {place}. Went with INNSER — good choice. Solid tow.',
    'Tow from {place} to a city address. INNSER dropped it exactly there. Saving the number.',
  ],
  ru: [
    'Поломка на {place}, встал на обочине. INNSER — диспетчер сразу, эвакуатор быстро, без дёрганья при погрузке.',
    'На {place} в два ночи. Помощь на дороге INNSER ответила, эвакуатор доехал, цена как по телефону.',
    'Прокол на {place}, безопасно колесо не поменять. Вызвал эвакуатор INNSER — правильное решение.',
    'Чек и потеря тяги на {place}. Не рискнул ехать — эвакуатор INNSER до сервиса.',
    'Дождь, {place}, поломка. Диспетчер INNSER назвал время, эвакуатор уложился. Рекомендую.',
    'После касания на {place}. INNSER закрыл вопрос: приезд, погрузка, сервис. Спокойно.',
    'Машина не тянула на {place}. Эвакуатор INNSER снял с трассы и повёз на платформе.',
    'Впервые стоял с треугольником на {place}. Набрал 506-001-057 — INNSER разобрался.',
    'На {place} важны минуты. INNSER не обещал чудес, но реально быстро был.',
    'Зимой на {place} занос и поломка. Эвакуатор INNSER, водитель аккуратный. Спасибо.',
    'Не бензин кончился на {place} — двигатель. INNSER эвакуировал без споров.',
    'Пробка на {place} плюс поломка. Диспетчер INNSER подсказал, как подъехать. Эвакуатор справился.',
    'Мотоцикл на {place} — нужна платформа. INNSER закрепил надёжно, не переживал.',
    'Бусик встал на {place}. INNSER подтвердил, что берут такой, и приехали. Ок.',
    'После грозы на {place} — не потоп, просто заглохла. Помощь на дороге INNSER — эвакуатор и сервис.',
    'Ушёл на обочину {place} с проблемой мотора. INNSER: понятная цена, быстрый приезд.',
    'Искал «кого-то местного» на {place}. Взял INNSER — и правильно. Эвакуатор по делу.',
    'Эвакуация с {place} на адрес в городе. INNSER довёз точно. Номер сохранил.',
  ],
  ua: [
    'Поломка на {place}, став на узбіччі. INNSER — диспетчер одразу, евакуатор швидко, без ривків при завантаженні.',
    'На {place} о другій ночі. Допомога на дорозі INNSER відповіла, евакуатор доїхав, ціна як по телефону.',
    'Прокол на {place}, безпечно колесо не поміняти. Викликав евакуатор INNSER — правильне рішення.',
    'Чек і втрата тяги на {place}. Не ризикнув їхати — евакуатор INNSER до сервісу.',
    'Дощ, {place}, поломка. Диспетчер INNSER назвав час, евакуатор вклався. Рекомендую.',
    'Після торкання на {place}. INNSER закрив питання: приїзд, завантаження, сервіс. Спокійно.',
    'Авто не тягнуло на {place}. Евакуатор INNSER зняв із траси й повіз на платформі.',
    'Уперше стояв із трикутником на {place}. Набрав 506-001-057 — INNSER розібрався.',
    'На {place} важливі хвилини. INNSER не обіцяв чудес, але реально швидко був.',
    'Взимку на {place} занос і поломка. Евакуатор INNSER, водій акуратний. Дякую.',
    'Не бензин скінчився на {place} — двигун. INNSER евакуював без суперечок.',
    'Затор на {place} плюс поломка. Диспетчер INNSER підказав, як під’їхати. Евакуатор впорався.',
    'Мотоцикл на {place} — потрібна платформа. INNSER закріпив надійно, не хвилювався.',
    'Бусик став на {place}. INNSER підтвердив, що беруть таке, і приїхали. Ок.',
    'Після грози на {place} — не потоп, просто заглухла. Допомога на дорозі INNSER — евакуатор і сервіс.',
    'Пішов на узбіччя {place} з проблемою мотора. INNSER: зрозуміла ціна, швидкий приїзд.',
    'Шукав «когось місцевого» на {place}. Взяв INNSER — і правильно. Евакуатор по суті.',
    'Евакуація з {place} на адресу в місті. INNSER довіз точно. Номер зберіг.',
  ],
};

function hashSlug(slug) {
  const s = String(slug || '');
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}

/** Pick 3 distinct indices into pool for this slug. */
function pickThreeIndices(slug, poolLen) {
  if (poolLen < 3) return [0, 0, 0];
  const h = hashSlug(slug);
  const step = Math.max(1, Math.floor(poolLen / 3));
  const a = h % poolLen;
  let b = (a + step + (h % 5)) % poolLen;
  let c = (b + step + ((h >> 3) % 7) + 1) % poolLen;
  if (b === a) b = (b + 1) % poolLen;
  if (c === a || c === b) c = (c + 1) % poolLen;
  if (c === a || c === b) c = (c + 2) % poolLen;
  return [a, b, c];
}

function fillPlace(text, place) {
  return String(text || '').split('{place}').join(String(place || '').trim());
}

/**
 * @param {string} langCl
 * @param {string} placeName
 * @param {string} slug
 * @param {'district'|'suburb'|'road'} kind
 */
export function geoReviewsFor(langCl, placeName, slug, kind) {
  const lang = LAND[langCl] ? langCl : 'pl';
  const pool = kind === 'road' ? ROAD[lang] : LAND[lang];
  const idxs = pickThreeIndices(slug, pool.length);
  const h = hashSlug(slug);
  const place = String(placeName || slug).trim();
  return idxs.map((ti, i) => ({
    name: AUTHORS[(h + i * 11) % AUTHORS.length],
    stars: 5,
    text: fillPlace(pool[ti], place),
  }));
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

/** Compact runtime for innser-v6.html */
export function geoReviewsRuntimeJs() {
  return `/*__INNSER_GEO_GOOGLE_REVIEWS__*/
var INNSER_GEO_REVIEW_AUTHORS=${JSON.stringify(AUTHORS)};
var INNSER_GEO_LAND=${JSON.stringify(LAND)};
var INNSER_GEO_ROAD=${JSON.stringify(ROAD)};
function innserHashSlug(slug){
  var s=String(slug||''),h=0;
  for(var i=0;i<s.length;i++) h=((h*31)+s.charCodeAt(i))>>>0;
  return h;
}
function innserPickThree(slug,n){
  if(n<3) return [0,0,0];
  var h=innserHashSlug(slug),step=Math.max(1,Math.floor(n/3));
  var a=h%n,b=(a+step+(h%5))%n,c=(b+step+((h>>>3)%7)+1)%n;
  if(b===a) b=(b+1)%n;
  if(c===a||c===b) c=(c+1)%n;
  if(c===a||c===b) c=(c+2)%n;
  return [a,b,c];
}
function innserGeoGoogleReviews(lang,placeName,slug,kind){
  var pack=(kind==='road'?INNSER_GEO_ROAD:INNSER_GEO_LAND);
  var pool=pack[lang]||pack.pl;
  var idxs=innserPickThree(slug,pool.length);
  var h=innserHashSlug(slug);
  var place=String(placeName||slug||'').trim();
  var out=[];
  for(var i=0;i<3;i++){
    out.push({
      name:INNSER_GEO_REVIEW_AUTHORS[(h+i*11)%INNSER_GEO_REVIEW_AUTHORS.length],
      stars:5,
      text:String(pool[idxs[i]]||'').split('{place}').join(place)
    });
  }
  return out;
}
`;
}

// Silence unused import warning in some bundlers
void DISTRICTS;
