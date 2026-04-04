(function () {
  var STORAGE_KEY = 'wizytka-lang';

  var I18N = {
    pl: {
      htmlLang: 'pl',
      title: 'Pomoc drogowa Warszawa 24/7 | Laweta, warsztat, skup aut | 506-001-057',
      metaDesc:
        'Pomoc drogowa i laweta Warszawa 24/7: holowanie, transport aut, warsztat, skup pojazdów. Szybki dojazd, wycena przez telefon. WhatsApp, Telegram: 506-001-057.',
      brand: 'POMOC DROGOWA',
      navAria: 'Główne menu',
      navHome: 'Start',
      navServices: 'Usługi',
      navWhy: 'Dlaczego my',
      navArea: 'Obszar',
      navContact: 'Kontakt',
      menuOpen: 'Otwórz menu',
      menuClose: 'Zamknij menu',
      tagline: 'Laweta i pomoc drogowa — Warszawa',
      btnCall: 'Zadzwoń teraz',
      city: 'Warszawa',
      heroTitle: 'POMOC DROGOWA',
      heroLead:
        'Szybki dojazd, uczciwa wycena przez telefon i sprzęt gotowy do holowania oraz transportu w mieście i poza nim. Jesteśmy, gdy auto odmawia posłuszeństwa — na trasie, parkingu i w podziemnych garażach.',
      svc1: 'WARSZTAT',
      svc2: 'SKUP AUT',
      svc3: 'LAWETA',
      badge247: 'Całodobowo, 7 dni w tygodniu',
      secSvcTitle: 'Nasze usługi',
      secSvcLead: 'Od awarii po odkup aut — jeden numer telefonu, pełne wsparcie na drodze.',
      svcCard1Title: 'Warsztat i naprawy',
      svcCard1Body:
        'Diagnoza, drobne naprawy w terenie i pomoc w organizacji serwisu. Gdy liczy się czas i bezpieczeństwo pojazdu — działamy sprawnie i rzeczowo.',
      svcCard2Title: 'Skup aut',
      svcCard2Body:
        'Odkup samochodów w różnym stanie — bez zbędnej papierologii. Zadzwoń lub napisz, opisz auto, wstępnie uzgodnimy warunki.',
      svcCard3Title: 'Laweta i holowanie',
      svcCard3Body:
        'Transport aut osobowych i dostawczych: awarie, kolizje, parkingi podziemne, hol na lawecie. Dowóz pod wskazany adres lub do zaufanego warsztatu.',
      secWhyTitle: 'Dlaczego my',
      secWhyLead: 'Działamy w stylu służb awaryjnych: wyraźnie, szybko i wprost.',
      why1: 'Całodobowa infolinia — rozmowa z człowiekiem, bez kolejek i automatów.',
      why2: 'Jasne informacje o kosztach i możliwościach jeszcze przed wyjazdem.',
      why3: 'Doświadczenie w pracy w Warszawie i na Mazowszu — znamy miasto i obwodnice.',
      why4: 'WhatsApp i Telegram — dogodnie, gdy nie możesz rozmawiać głośno przy drodze.',
      secAreaTitle: 'Obszar działania',
      secAreaBody:
        'Warszawa i okolice; zasięg dojazdu ustalamy przy zamówieniu. Zawieziemy pojazd do warsztatu, pod wskazany adres lub w bezpieczne miejsce do czasu dalszej decyzji.',
      stripAria: 'Szybki kontakt',
      stripTitle: 'Jesteśmy w kontakcie',
      stripText: 'Masz pytanie lub potrzebujesz lawety? Napisz — odpowiadamy tak szybko, jak to możliwe.',
      qrAlt: 'Kod QR — otwiera WhatsApp',
      qrCaption: 'Skanuj — WhatsApp',
      footNote: 'Pomoc drogowa · Warszawa · Non-stop',
      partnersTitle: 'Nasi partnerzy',
      partnersSeoBefore: 'Szersza oferta: ',
      partnersSeoAnchor: 'pomoc drogowa, laweta i holowanie Warszawa — INNSER 24/7',
      partnersSeoAfter: '.',
      partnersLogoAlt: 'INNSER — pomoc drogowa Warszawa',
      fabAria: 'Czat',
      langGroup: 'Wybierz język',
    },
    ru: {
      htmlLang: 'ru',
      title: 'Эвакуатор Варшава 24/7 | Лавета, автосервис, скупка авто | 506-001-057',
      metaDesc:
        'Эвакуатор Варшава круглосуточно: эвакуация, транспорт авто, автосервис, скупка машин. Быстрый выезд, оценка по телефону. WhatsApp, Telegram: 506-001-057.',
      brand: 'Эвакуатор Варшава',
      navAria: 'Главное меню',
      navHome: 'Главная',
      navServices: 'Услуги',
      navWhy: 'Почему мы',
      navArea: 'Зона',
      navContact: 'Контакт',
      menuOpen: 'Открыть меню',
      menuClose: 'Закрыть меню',
      tagline: 'Эвакуатор Варшава — лавета 24/7',
      btnCall: 'Позвонить сейчас',
      city: 'Варшава',
      heroTitle: 'ЭВАКУАТОР ВАРШАВА',
      heroLead:
        'Быстрый выезд, честная оценка по телефону и техника для эвакуации и перевозки в городе и за его пределами. Мы рядом, когда машина подвела — на трассе, парковке и в подземном гараже.',
      svc1: 'АВТОСЕРВИС',
      svc2: 'СКУПКА АВТО',
      svc3: 'ЭВАКУАТОР',
      badge247: 'Круглосуточно, 7 дней в неделю',
      secSvcTitle: 'Наши услуги',
      secSvcLead: 'От аварийной ситуации до выкупа авто — один номер, полное сопровождение.',
      svcCard1Title: 'Автосервис и ремонт',
      svcCard1Body:
        'Диагностика, мелкий ремонт на месте и помощь с организацией сервиса. Когда важны время и безопасность автомобиля — работаем чётко и по делу.',
      svcCard2Title: 'Скупка автомобилей',
      svcCard2Body:
        'Выкуп машин в разном состоянии — без лишней бюрократии. Позвоните или напишите, опишите авто, предварительно договоримся об условиях.',
      svcCard3Title: 'Эвакуатор и эвакуация',
      svcCard3Body:
        'Перевозка легковых и коммерческих авто: поломки, ДТП, подземные парковки, погрузка на лавету. Доставка по адресу или в проверенный сервис.',
      secWhyTitle: 'Почему мы',
      secWhyLead: 'Работаем в духе аварийных служб: ясно, быстро и по существу.',
      why1: 'Круглосуточная линия — разговор с человеком, без очередей и роботов.',
      why2: 'Понятная информация о цене и возможностях ещё до выезда.',
      why3: 'Опыт работы в Варшаве и на Мазовии — знаем город и объезды.',
      why4: 'WhatsApp и Telegram — удобно, когда нельзя громко говорить у дороги.',
      secAreaTitle: 'Зона работы',
      secAreaBody:
        'Варшава и окрестности; радиус выезда согласуем при заказе. Отвезём машину в сервис, по указанному адресу или в безопасное место до дальнейших решений.',
      stripAria: 'Быстрая связь',
      stripTitle: 'Мы на связи',
      stripText: 'Вопрос или нужен эвакуатор? Напишите — ответим как можно скорее.',
      qrAlt: 'QR-код — открывает WhatsApp',
      qrCaption: 'Сканировать — WhatsApp',
      footNote: 'Эвакуатор Варшава · Круглосуточно',
      partnersTitle: 'Наши партнёры',
      partnersSeoBefore: 'Расширенная услуга: ',
      partnersSeoAnchor: 'эвакуатор, лавета и помощь на дороге Варшава — INNSER 24/7',
      partnersSeoAfter: '.',
      partnersLogoAlt: 'INNSER — эвакуатор и помощь на дороге Варшава',
      fabAria: 'Мессенджеры',
      langGroup: 'Выбор языка',
    },
  };

  function norm(lang) {
    return lang === 'ru' ? 'ru' : 'pl';
  }

  function detect() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s) return norm(s);
    } catch (e) {}
    if (typeof navigator !== 'undefined' && navigator.language) {
      var low = navigator.language.toLowerCase();
      if (low.indexOf('ru') === 0) return 'ru';
    }
    return 'pl';
  }

  function apply(lang) {
    lang = norm(lang);
    var t = I18N[lang];
    if (!t) return;

    document.documentElement.lang = t.htmlLang;
    document.title = t.title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', t.metaDesc);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] != null) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (t[key]) el.setAttribute('aria-label', t[key]);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (t[key]) el.setAttribute('alt', t[key]);
    });

    var lg = document.getElementById('lang-switch');
    if (lg) lg.setAttribute('aria-label', t.langGroup);

    var burger = document.querySelector('.nav-burger');
    if (burger && t.menuOpen) {
      var expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-label', expanded ? t.menuClose : t.menuOpen);
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('on', active);
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function wireNav() {
    var burger = document.querySelector('.nav-burger');
    var menu = document.getElementById('nav-menu');
    if (!burger || !menu) return;

    function setBurgerLabel() {
      var lang = document.documentElement.lang === 'ru' ? 'ru' : 'pl';
      var t = I18N[lang];
      if (!t) return;
      var expanded = burger.getAttribute('aria-expanded') === 'true';
      burger.setAttribute('aria-label', expanded ? t.menuClose : t.menuOpen);
    }

    burger.addEventListener('click', function () {
      var open = menu.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.classList.toggle('is-open', open);
      document.body.classList.toggle('nav-open', open);
      setBurgerLabel();
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.classList.remove('is-open');
        document.body.classList.remove('nav-open');
        setBurgerLabel();
      });
    });

    window.addEventListener('resize', function () {
      if (window.matchMedia('(min-width: 900px)').matches) {
        menu.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.classList.remove('is-open');
        document.body.classList.remove('nav-open');
        setBurgerLabel();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        apply(btn.getAttribute('data-lang'));
      });
    });
    wireNav();
    apply(detect());
  });
})();
