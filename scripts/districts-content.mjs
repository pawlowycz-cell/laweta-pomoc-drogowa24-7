/** Rich per-district SEO body copy (PL primary + EN/RU/UA). */

const LOCATIVE = {
  mokotow: { pl: 'Mokotowie', en: 'Mokotów', ru: 'Мokotów', ua: 'Mokotów' },
  wola: { pl: 'Woli', en: 'Wola', ru: 'Woli', ua: 'Woli' },
  'praga-poludnie': { pl: 'Pradze-Południe', en: 'Praga-Południe', ru: 'Praga-Południe', ua: 'Praga-Południe' },
  'praga-polnoc': { pl: 'Pradze-Północ', en: 'Praga-Północ', ru: 'Praga-Północ', ua: 'Praga-Północ' },
  srodmiescie: { pl: 'Śródmieściu', en: 'Śródmieście', ru: 'Śródmieście', ua: 'Śródmieście' },
  ursynow: { pl: 'Ursynowie', en: 'Ursynów', ru: 'Ursynów', ua: 'Ursynów' },
  bielany: { pl: 'Bielanach', en: 'Bielany', ru: 'Bielany', ua: 'Bielany' },
  bemowo: { pl: 'Bemowie', en: 'Bemowo', ru: 'Bemowo', ua: 'Bemowo' },
  targowek: { pl: 'Targówku', en: 'Targówek', ru: 'Targówek', ua: 'Targówek' },
  ochota: { pl: 'Ochocie', en: 'Ochota', ru: 'Ochota', ua: 'Ochota' },
  wawer: { pl: 'Wawrze', en: 'Wawer', ru: 'Wawer', ua: 'Wawer' },
  bialoleka: { pl: 'Białołęce', en: 'Białołęka', ru: 'Białołęka', ua: 'Białołęka' },
  wilanow: { pl: 'Wilanowie', en: 'Wilanów', ru: 'Wilanów', ua: 'Wilanów' },
  ursus: { pl: 'Ursusie', en: 'Ursus', ru: 'Ursus', ua: 'Ursus' },
  wlochy: { pl: 'Włochach', en: 'Włochy', ru: 'Włochy', ua: 'Włochy' },
  rembertow: { pl: 'Rembertowie', en: 'Rembertów', ru: 'Rembertów', ua: 'Rembertów' },
  wesola: { pl: 'Wesołej', en: 'Wesoła', ru: 'Wesoła', ua: 'Wesoła' },
  zoliborz: { pl: 'Żoliborzu', en: 'Żoliborz', ru: 'Żoliborz', ua: 'Żoliborz' },
};

/** Unique PL paragraphs per district — not shared templates. */
const PL_RICH = {
  mokotow: {
    lead:
      'Mokotów to jedna z najbardziej rozpoznawalnych dzielnic Warszawy — łączy prestiżowe osiedla Sadyby i Stegny z intensywnym ruchem biznesowym wokół Puławskiej, Galerii Mokotów i Dolnego Mokotowa. INNSER świadczy tu profesjonalną pomoc drogową i holowanie lawetą przez całą dobę, także z parkingów podziemnych centrów handlowych i garaży osiedlowych.',
    whyTitle: 'Dlaczego warto zadzwonić do INNSER na Mokotowie?',
    blocks: [
      {
        title: 'Znamy lokalne trasy i korki',
        text: 'Puławska, Wołoska, Belwederska i trasa łącząca Mokotów z centrum bywają mocno obciążone — nasi kierowcy dojeżdżają najkrótszą drogą, omijając znane wąskie gardła przy wyjazdach z osiedli.',
      },
      {
        title: 'Parkingi podziemne i garaże',
        text: 'Holujemy z podziemnych parkingów Galerii Mokotów, Sadyby, biurowców przy Domaniewskiej i wielopoziomowych garaży bloków mieszkalnych — mamy niskoprofilową lawetę do ciasnych ramp.',
      },
      {
        title: 'Osiedla, biurowce i aleje willowe',
        text: 'Obsługujemy zarówno awarie przy willach na Sadybie, jak i kolizje przy biurowcach wokół Domaniewskiej czy Modlińskiej — od aut miejskich po SUV-y i vany.',
      },
    ],
    h2transport: 'Laweta Mokotów – holowanie i transport aut 24h',
    transport:
      'Potrzebujesz lawety na Mokotowie po kolizji, awarii silnika lub unieruchomionego auta na parkingu? INNSER przyjedzie zwykle w 20–30 minut. Holowanie w Warszawie od 250 zł (do 15 km) — cenę podajemy z góry przez telefon, bez ukrytych dopłat. Transport aut powypadkowych, do warsztatu lub na stację diagnostyczną.',
    h2help: 'Całodobowa pomoc drogowa na Mokotowie',
    helpIntro: 'Na Mokotowie awaria może zdarzyć się na alei Puławskiej, przy wyjeździe z Stegny, na parkingu CH czy w garażu podziemnym osiedla — reagujemy całą dobę:',
    bullets: [
      'Holowanie aut po wypadku, kolizji i awarii na Mokotowie',
      'Awaryjne odpalanie na kable i boosterem — także w garażu podziemnym',
      'Wymiana koła na miejscu, otwieranie aut przy zatrzaśniętych kluczykach',
      'Dojazd ~20–30 min, obsługa PL / EN / RU / UA — tel. 506-001-057',
    ],
    closing:
      'Zaufaj INNSER na Mokotowie — setki zrealizowanych interwencji w tej dzielnicy, 120+ opinii Google i uczciwa wycena przed wyjazdem lawety.',
  },
  wola: {
    lead:
      'Wola to dynamicznie rozwijająca się dzielnica biznesowa — „Mordor Woli”, biurowce przy Prostej i Rondo Daszyńskiego, a także historyczna Wolska z mieszanym ruchem ciężarówek i aut osobowych. INNSER zapewnia pomoc drogową i lawetę na Woli 24/7, w tym holowanie z parkingów podziemnych nowych inwestycji.',
    whyTitle: 'Dlaczego INNSER na Woli?',
    blocks: [
      {
        title: 'Strefa biurowa i Dworzec Zachodni',
        text: 'Często dojeżdżamy pod biurowce przy Prostej, Jana Pawła II i okolice Dworca Zachodniego — znamy dojazdy w godzinach szczytu i w nocy.',
      },
      {
        title: 'Wolska, Młynarska, bloki i nowe apartamentowce',
        text: 'Obsługujemy awarie przy starych blokach na Ulrychów i w nowych osiedlach przy Kasprzaka — wąskie uliczki i remonty nie są dla nas problemem.',
      },
      {
        title: 'Transport cięższych aut',
        text: 'Holujemy busy dostawcze, vany i SUV-y — typowe dla firm logistycznych i e-commerce działających w strefie Wola Park i wokół ul. Wolskiej.',
      },
    ],
    h2transport: 'Laweta Wola – tanie holowanie w dzielnicy biznesowej',
    transport:
      'Laweta INNSER na Woli to szybki dojazd z całej Warszawy — baza w zasięgu kilkunastu minut od Prostej i Wolskiej. Holowanie od 250 zł, wycena przez telefon. Pomoc po kolizji na skrzyżowaniu Wolskiej z Prymasa Tysiąclecia, awaria przy Rondzie Daszyńskiego — jesteśmy przyzwyczajeni do tego terenu.',
    h2help: 'Pomoc drogowa Wola 24h — co oferujemy',
    helpIntro: 'Na Woli liczy się czas — zwłaszcza gdy blokujesz pas ruchu przy biurowcu lub na Wolskiej:',
    bullets: [
      'Holowanie z miejsca kolizji i wypadku — także aut firmowych',
      'Odpalanie rozładowanego akumulatora na parkingach biurowych',
      'Wymiana koła, dowóz paliwa, otwieranie zamkniętego auta',
      'Laweta na parking podziemny — wycena indywidualna, tel. 506-001-057',
    ],
    closing:
      'INNSER — pomoc drogowa Wola bez naciągania na cenę. Mówimy po polsku, angielsku, rosyjsku i ukraińsku.',
  },
  'praga-poludnie': {
    lead:
      'Praga-Południe to prawa brzeg Wisły z charakterem — od zabytkowej Grochowa i Saska Kępy po nowoczesne osiedla przy Stadionie Narodowym i CH Promenada. INNSER dojeżdża tu lawetą całą dobę: z Wału Miedzeszyńskiego, Traktu Lubelskiego, ulic Grochowskiej i ciasnych uliczek Saski Kępy.',
    whyTitle: 'Laweta Praga-Południe — dlaczego INNSER?',
    blocks: [
      {
        title: 'Grochów, Gocław, Kamionek',
        text: 'Znamy układ ulic Grochowskiej, Fieldorfa i ronda Wiatraczna — dojedziemy szybko nawet gdy GPS wskaże objazd przez Most Łazienkowski.',
      },
      {
        title: 'Saska Kępa i willowe uliczki',
        text: 'Wąskie aleje Saski Kępy wymagają doświadczenia kierowcy lawety — bezpiecznie załadujemy auto na wąskiej ulicy bez uszkodzeń sąsiednich pojazdów.',
      },
      {
        title: 'Stadion, Promenada, trasy S2',
        text: 'Obsługujemy awarie przy Stadionie Narodowym, centrum handlowym Promenada i na węźlach S2 — także w weekendy i święta.',
      },
    ],
    h2transport: 'Holowanie aut Praga-Południe — laweta INNSER',
    transport:
      'Potrzebujesz lawety na Pradze-Południe? INNSER holuje auta po kolizjach na Grochowskiej, unieruchomione na parkingach CH, z garaży podziemnych nowych bloków przy Ostrobramskiej. Cena holowania ustalana z góry — od 250 zł w Warszawie.',
    h2help: 'Całodobowa pomoc na Pradze-Południe',
    helpIntro: 'Praga-Południe to duża dzielnica — reagujemy na zgłoszenia z każdego jej rejonu:',
    bullets: [
      'Awaryjne holowanie po wypadku i kolizji — Grochów, Saska Kępa, Gocław',
      'Odpalanie auta na kable — rozładowany akumulator zimą na Trakcie Lubelskim',
      'Wymiana koła, pomoc na parkingu podziemnym Promenady',
      'Dojazd 24/7 — 506-001-057, WhatsApp, Telegram',
    ],
    closing:
      'Mieszkańcy Pragi-Południe i okolic zaufali INNSER przy setkach interwencji — profesjonalna laweta, uczciwa cena, brak ukrytych kosztów.',
  },
  'praga-polnoc': {
    lead:
      'Praga-Północ to serce starej Pragi — Ząbkowska, Stalowa, mosty na Wisłę i industrialne loft-y przy Inżynierskiej. INNSER oferuje pomoc drogową i lawetę na Pradze-Północ przez 24 godziny, także w wąskich uliczkach Starej Pragi i przy remontowanych odcinkach alei Solidarności.',
    whyTitle: 'Pomoc drogowa Praga-Północ z INNSER',
    blocks: [
      {
        title: 'Stara Praga i klimatyczne uliczki',
        text: 'Ząbkowska, Stalowa, Inżynierska — wąskie ulice i bruk wymagają ostrożnego manewrowania lawetą; nasi kierowcy mają tu duże doświadczenie.',
      },
      {
        title: 'Mosty i dojazd do centrum',
        text: 'Szybko holujemy auta z mostów Świętokrzyskiego i Poniatowskiego po stronie prawobrzeżnej — znamy objazdy przy zamknięciu jednego z pasów.',
      },
      {
        title: 'Nowe inwestycje nad Wisłą',
        text: 'Obsługujemy parkingi podziemne apartamentowców przy bulwarze i w rejonie ronda Waszyngtona.',
      },
    ],
    h2transport: 'Laweta Praga-Północ – transport pojazdów 24h',
    transport:
      'Laweta INNSER na Pradze-Północ to holowanie po kolizji, transport do warsztatu na ul. 11 Listopada, pomoc przy awarii na al. Solidarności. Wycena telefoniczna, dojazd zwykle w 20–30 minut.',
    h2help: 'Awaryjna pomoc INNSER na Pradze-Północ',
    helpIntro: 'Na Pradze-Północ pomagamy kierowcom o każdej porze:',
    bullets: [
      'Holowanie aut osobowych i dostawczych z wąskich ulic Starej Pragi',
      'Odpalanie na kable przy zimnym silniku na parkingu przy Ząbkowskiej',
      'Otwieranie aut — zatrzaśnięte kluczyki w aucie pod loftem',
      'Całodobowy numer: 506-001-057',
    ],
    closing:
      'Praga-Północ ma swój rytm — INNSER zna te ulice i dojedzie lawetą tam, gdzie inni się wahają.',
  },
  srodmiescie: {
    lead:
      'Śródmieście to serce Warszawy — Pałac Kultury, hotele pięciogwiazdkowe, Dworzec Centralny, parkingi podziemne Złotych Tarasów i tysiące turystów dziennie. INNSER świadczy dyskretną, szybką pomoc drogową w Śródmieściu 24/7, w tym holowanie z podziemnych garaży hoteli i biurowców.',
    whyTitle: 'Laweta Śródmieście — INNSER w centrum stolicy',
    blocks: [
      {
        title: 'Parkingi podziemne i hotele',
        text: 'Specjalizujemy się w holowaniu z garaży podziemnych — niskoprofilowa laweta wjeżdża tam, gdzie standardowa nie ma szans (CH, hotele, biurowce przy Emilii Plater).',
      },
      {
        title: 'Aleje Jerozolimskie, Marszałkowska, Wisłostrada',
        text: 'Awaria na głównym trzonie miasta wymaga szybkiej reakcji — dojeżdżamy bocznymi ulicami, by nie blokować ruchu dłużej niż trzeba.',
      },
      {
        title: 'Obsługa w wielu językach',
        text: 'Centrum odwiedzają turyści i expaci — mówimy po angielsku, rosyjsku i ukraińsku, co ułatwia kontakt w stresowej sytuacji.',
      },
    ],
    h2transport: 'Holowanie w Śródmieściu — laweta INNSER 24h',
    transport:
      'Potrzebujesz lawety w centrum Warszawy? INNSER holuje z Placu Defilad, okolic Nowego Światu, parkingów podziemnych przy Centrum. Cena ustalana przed wyjazdem — holowanie od 250 zł.',
    h2help: 'Pomoc drogowa Śródmieście — oferta INNSER',
    helpIntro: 'W centrum miasta każda minuta ma znaczenie:',
    bullets: [
      'Szybkie holowanie z miejsca kolizji na głównych arteriach',
      'Awaryjne odpalanie — rozładowany akumulator przy Dworcu Centralnym',
      'Wymiana koła, pomoc przy przebitce na Alejach Jerozolimskich',
      'Dyskrecja i profesjonalizm — tel. 506-001-057',
    ],
    closing:
      'Śródmieście to wyzwanie logistyczne — INNSER ma doświadczenie w pracy w najbardziej ruchliwym rejonie Warszawy.',
  },
  ursynow: {
    lead:
      'Ursynów to największa pod względem powierzchni dzielnica Warszawy — od Kabat i Natolina po Imielin i Pyry, z gęstą siecią osiedli i aleją Puławską na granicy z Mokotowem. INNSER zapewnia lawetę i pomoc drogową na Ursynowie przez całą dobę, także przy wyjazdach z osiedli i na trasie S2.',
    whyTitle: 'Dlaczego laweta INNSER na Ursynowie?',
    blocks: [
      {
        title: 'Osiedla Kabaty, Natolin, Stokłosy',
        text: 'Znamy układ wielopoziomowych parkingów i wąskich dróg dojazdowych do bloków — laweta dojedzie pod sam budynek.',
      },
      {
        title: 'Puławska południowa i Al. KEN',
        text: 'Korki na południowej Puławskiej i przy metra Kabaty — omijamy je doświadczeniem, dojeżdżając od strony Traktów Brzeskich lub S2.',
      },
      {
        title: 'Las Kabacki i drogi lokalne',
        text: 'Holowanie z wąskich dróg wokół lasu Kabackiego i z parkingów przy pętlach autobusowych — także aut rodzinnych i dostawczych.',
      },
    ],
    h2transport: 'Laweta Ursynów – holowanie 24h na południu Warszawy',
    transport:
      'Awaria na Ursynowie? INNSER przyjedzie lawetą zwykle w 20–30 minut — holowanie od 250 zł, wycena przez telefon. Transport do dowolnego warsztatu w Warszawie lub poza miasto (do 500 km).',
    h2help: 'Całodobowa pomoc drogowa Ursynów',
    helpIntro: 'Na Ursynowie pomagamy mieszkańcom osiedli i kierowcom tranzytowym:',
    bullets: [
      'Holowanie po kolizji na Al. KEN i przy stacjach metra',
      'Odpalanie auta z rozładowanym akumulatorem na parkingu osiedlowym',
      'Wymiana koła, otwieranie auta — szybka reakcja',
      'Obsługa 24/7 — 506-001-057',
    ],
    closing:
      'Ursynów to ogromna dzielnica — INNSER ma zasięg i doświadczenie, by dotrzeć w każdy jej zakątek.',
  },
  bielany: {
    lead:
      'Bielany to zielona północ Warszawy — Lasek Bielański, osiedla przy Metra Słodowiec i Młociny, kampus UW i ruchliwa Trakt Rejowski. INNSER oferuje lawetę i pomoc drogową na Bielanach 24/7, także przy wyjazdach z parkingów park&ride i wąskich ulic Marymonckiej.',
    whyTitle: 'Pomoc drogowa Bielany — INNSER',
    blocks: [
      {
        title: 'Metro M1 i parkingi P+R',
        text: 'Awaria przy stacjach Słodowiec, Marymont, Młociny — szybki dojazd z północnej części miasta, znamy dojazdy z Traktu Rejowskiego.',
      },
      {
        title: 'Lasek Bielański i ulice willowe',
        text: 'Holowanie z dróg wokół lasu i z osiedli Słodowiec — wąskie uliczki i strome fragmenty nie są problemem dla naszej lawety.',
      },
      {
        title: 'Południowa część Bielan przy Żoliborzu',
        text: 'Obsługujemy rejon Słodowca, Wrzeciona i Huty — blisko granicy z Żoliborzem i Bemowem.',
      },
    ],
    h2transport: 'Laweta Bielany – holowanie na północy Warszawy',
    transport:
      'Laweta INNSER na Bielanach — holowanie od 250 zł, dojazd ~20–30 min. Pomoc po wypadku na Trakcie Rejowskim, awaria przy CH Lider, transport auta do serwisu na Bielanach lub w innej dzielnicy.',
    h2help: 'INNSER na Bielanach — usługi 24h',
    helpIntro: 'Na Bielanach oferujemy pełen zakres pomocy drogowej:',
    bullets: [
      'Holowanie aut po kolizji i awarii mechanicznej',
      'Odpalanie na kable — szczególnie zimą przy parkingach metra',
      'Wymiana koła, awaryjne otwieranie auta',
      'Zadzwoń: 506-001-057 — całodobowo',
    ],
    closing:
      'Bielany łączą miasto z naturą — INNSER dojedzie lawetą szybko, nawet w szczyt ruchu na Trakcie Rejowskim.',
  },
  bemowo: {
    lead:
      'Bemowo to dzielnica lotniska i osiedli — od Górczewskiej i Karolina po Fort Bema i bliskie sąsiedztwo Lotniska Chopina. INNSER świadczy pomoc drogową na Bemowie 24/7, w tym holowanie aut, które zepsuły się przy dojeździe na lotnisko lub w okolicach al. Piłsudskiego.',
    whyTitle: 'Laweta Bemowo — dlaczego INNSER?',
    blocks: [
      {
        title: 'Dojazd na Lotnisko Chopina',
        text: 'Awaria auta w drodze na lotnisko to stres — dojedziemy szybko z Bemowa lub okolic, holując do warsztatu lub na parking.',
      },
      {
        title: 'Górce, Groty, osiedla wielorodzinne',
        text: 'Znamy układ osiedli przy Górczewskiej i Szczęśliwickiej — laweta podjedzie na parking pod blokiem.',
      },
      {
        title: 'Połączenie z Wola i Ursus',
        text: 'Bemowo graniczy z intensywnym ruchem Wolskiej — szybko reagujemy na zgłoszenia z całej dzielnicy.',
      },
    ],
    h2transport: 'Holowanie Bemowo – laweta INNSER 24h',
    transport:
      'Potrzebujesz lawety na Bemowie? Holowanie od 250 zł, wycena z góry. Transport aut powypadkowych, holowanie z parkingów podziemnych nowych inwestycji przy ul. Lazurowej.',
    h2help: 'Pomoc drogowa Bemowo — całodobowo',
    helpIntro: 'Na Bemowie INNSER oferuje:',
    bullets: [
      'Holowanie po kolizji na Górczewskiej i Połczyńskiej',
      'Odpalanie auta — rozładowany akumulator przed lotem',
      'Wymiana koła, pomoc przy awarii na parkingu osiedlowym',
      'Tel. 506-001-057 — 24/7',
    ],
    closing:
      'Bemowo to brama lotniska — INNSER pomoże, gdy auto odmówi posłuszeństwa w najmniej odpowiednim momencie.',
  },
  targowek: {
    lead:
      'Targówek to północno-wschodnia Warszawa — CH Targówek, M1 Marki, Bródno z charakterystycznymi blokowiskami i ruch na Trakcie Brzeskim. INNSER zapewnia lawetę i pomoc drogową na Targówku przez 24 godziny, także przy węźle S8 i na parkingach centrów handlowych.',
    whyTitle: 'INNSER na Targówku — lokalna laweta',
    blocks: [
      {
        title: 'Centra handlowe i parkingi',
        text: 'Holowanie z parkingów CH Targówek, M1 Marki i okolic — także z poziomów podziemnych, gdy auto nie odpala po zakupach.',
      },
      {
        title: 'Bródno, Zacisze, Targówek Mieszkaniowy',
        text: 'Znamy układ ulic w starszej i nowszej części dzielnicy — szybki dojazd z Traktu Brzeskiego lub od strony Pragi.',
      },
      {
        title: 'Trasa S8 i Trakt Brzeski',
        text: 'Awaria na S8 lub przy wjeździe na Targówek — reagujemy natychmiast, holując auto w bezpieczne miejsce.',
      },
    ],
    h2transport: 'Laweta Targówek – pomoc drogowa 24h',
    transport:
      'Laweta INNSER na Targówku — holowanie od 250 zł w Warszawie, wycena telefoniczna. Dojazd zwykle 20–30 minut, także w weekendy i święta.',
    h2help: 'Awaryjna pomoc na Targówku',
    helpIntro: 'Targówek to duża dzielnica handlowo-mieszkaniowa — pomagamy w:',
    bullets: [
      'Holowaniu aut po kolizji na Trakcie Brzeskim i w rejonie CH',
      'Odpaleniu auta na kabla — parking podziemny, osiedle',
      'Wymianie koła, otwarciu auta przy zatrzaśniętych kluczach',
      '506-001-057 — całodobowy kontakt',
    ],
    closing:
      'Targówek ma intensywny ruch wokół galerii — INNSER zna te drogi i dojedzie lawetą bez zbędnej zwłoki.',
  },
  ochota: {
    lead:
      'Ochota to dzielnica Dworca Zachodniego, Blue City i Grójeckiej — ważny węzeł komunikacyjny z ruchem tranzytowym i lokalnym. INNSER oferuje pomoc drogową i lawetę na Ochocie 24/7, holując z parkingów biurowców, stacji PKP i garaży podziemnych osiedli Rakowiec.',
    whyTitle: 'Laweta Ochota — INNSER u Dworca Zachodniego',
    blocks: [
      {
        title: 'Dworzec Zachodni i Al. Jerozolimskie',
        text: 'Awaria przy wjeździe na dworzec lub na Grójeckiej — szybka reakcja, by nie blokować ruchu autobusowego i tramwajowego.',
      },
      {
        title: 'Blue City, Raszynka, Fort Wola',
        text: 'Holowanie z parkingów centrum handlowego i okolic Raszyńskiej — doświadczenie w pracy w strefie ograniczonego ruchu.',
      },
      {
        title: 'Rakowiec i osiedla mieszkaniowe',
        text: 'Wąskie ulice osiedla Rakowiec — laweta INNSER bezpiecznie holuje stąd auta każdej wielkości.',
      },
    ],
    h2transport: 'Holowanie Ochota – laweta 24h INNSER',
    transport:
      'Potrzebujesz lawety na Ochocie? INNSER — holowanie od 250 zł, cena z góry. Transport do warsztatu na Ochocie, Woli lub w dowolne miejsce w promieniu 500 km.',
    h2help: 'Pomoc drogowa Ochota — oferta',
    helpIntro: 'Na Ochocie pomagamy przez całą dobę:',
    bullets: [
      'Holowanie po wypadku na Grójeckiej i Alejach Jerozolimskich',
      'Odpalanie auta — akumulator padł na parkingu Blue City',
      'Wymiana koła, awaryjne otwieranie samochodu',
      '506-001-057 — PL / EN / RU / UA',
    ],
    closing:
      'Ochota to węzeł Warszawy — INNSER reaguje szybko, gdy awaria zatrzyma Cię przy Zachodnim lub na Grójeckiej.',
  },
  wawer: {
    lead:
      'Wawer to południowo-wschodnia Warszawa nad Wisłą — Wał Miedzeszyński, Falenica, Nadwiśle i spokojne osiedla domków jednorodzinnych. INNSER świadczy pomoc drogową na Wawrze 24/7, holując z nadbrzeżnych dróg, Traktu Lubelskiego i lokalnych uliczek Falenicy.',
    whyTitle: 'Laweta Wawer — INNSER nad Wisłą',
    blocks: [
      {
        title: 'Wał Miedzeszyński i trasa nadwiślańska',
        text: 'Kolizje i awarie na Wałzie wymagają szybkiego holowania — znamy dojazdy i miejsca bezpiecznego postoju lawety.',
      },
      {
        title: 'Falenica, Marysin Wawerski, Anin',
        text: 'Obsługujemy osiedla domów i bloki — laweta dojedzie na wąską ulicę osiedlową.',
      },
      {
        title: 'Połączenie z S2 i Traktem Lubelskim',
        text: 'Awaria na węźle S2 po stronie Wawra — reagujemy natychmiast, holując w kierunku warsztatu klienta.',
      },
    ],
    h2transport: 'Holowanie Wawer – laweta INNSER 24h',
    transport:
      'Laweta na Wawrze — holowanie od 250 zł, wycena przed wyjazdem. INNSER holuje auta powypadkowe, unieruchomione na parkingu i z garaży podziemnych nowych inwestycji przy Patriotów.',
    h2help: 'Pomoc drogowa Wawer — całodobowo',
    helpIntro: 'Na Wawrze oferujemy pełen zakres usług:',
    bullets: [
      'Holowanie aut po kolizji na Wał Miedzeszyński i Trakcie Lubelskim',
      'Odpalanie na kable — rozładowany akumulator na osiedlu',
      'Wymiana koła, otwieranie zamkniętego auta',
      'Tel. 506-001-057 — 24/7',
    ],
    closing:
      'Wawer to dzielnica z charakterem — INNSER szanuje spokój okolic i działa sprawnie, bez zbędnego hałasu i opóźnień.',
  },
  bialoleka: {
    lead:
      'Białołęka to dynamicznie rosnąca północna Warszawa — od Płudy i Tarchomina po Nowodwory i osiedla wzdłuż Modlińskiej i Traktu Brzeskiego. INNSER zapewnia lawetę i pomoc drogową na Białołęce 24/7, także przy nowych inwestycjach mieszkaniowych i węźle Most Marii Skłodowskiej-Curie.',
    whyTitle: 'Pomoc drogowa Białołęka — INNSER',
    blocks: [
      {
        title: 'Modlińska i Trakt Brzeski',
        text: 'Intensywny ruch tranzytowy — szybko holujemy auta z pasów awaryjnych i parkingów przy stacjach benzynowych.',
      },
      {
        title: 'Metro M1 — stacje Płudy, Dworzec Gdański (połączenie)',
        text: 'Obsługujemy osiedla wzdłuż linii metra na północy — parkingi pod blokami i przy pętlach autobusowych.',
      },
      {
        title: 'Nowodwory i nowe osiedla',
        text: 'Holowanie z garaży podziemnych nowych apartamentowców — niskoprofilowa laweta INNSER wjeżdża tam, gdzie trzeba.',
      },
    ],
    h2transport: 'Laweta Białołęka – holowanie 24h',
    transport:
      'Awaria na Białołęce? INNSER przyjedzie lawetą w ~20–30 minut. Holowanie od 250 zł, uczciwa wycena przez telefon — bez niespodzianek przy płatności.',
    h2help: 'INNSER na Białołęce — usługi',
    helpIntro: 'Na Białołęce pomagamy kierowcom:',
    bullets: [
      'Holowanie po kolizji na Modlińskiej i Mostku Pontonowym',
      'Odpalanie auta z rozładowanym akumulatorem',
      'Wymiana koła, awaryjne otwieranie auta',
      '506-001-057 — całodobowo',
    ],
    closing:
      'Białołęka rośnie w siłę — INNSER rozwija zasięg razem z tą dzielnicą i zna jej changing mapę dróg.',
  },
  wilanow: {
    lead:
      'Wilanów to elegancka południowa Warszawa — Pałac w Wilanowie, willowe Służew i okolice Doliny Służewieckiej, a także nowe apartamentowce przy Puławskiej. INNSER oferuje dyskretną pomoc drogową i lawetę w Wilanowie 24/7, holując z wąskich ulic willowych i parkingów podziemnych.',
    whyTitle: 'Laweta Wilanów — INNSER w prestiżowej dzielnicy',
    blocks: [
      {
        title: 'Wille i wąskie aleje',
        text: 'Służew, Zawady, okolice pałacu — ostrożnie manewrujemy lawetą, by nie uszkodzić ogrodzeń i zaparkowanych aut.',
      },
      {
        title: 'Puławska południowa i Wilanowska',
        text: 'Korki przy wyjeździe z Wilanowa — dojeżdżamy bocznymi drogami, znamy lokalne skróty.',
      },
      {
        title: 'Nowe osiedla przy Traktie Królewskim',
        text: 'Holowanie z garaży podziemnych apartamentowców — specjalizacja INNSER w ciasnych parkingach.',
      },
    ],
    h2transport: 'Holowanie Wilanów – laweta INNSER 24h',
    transport:
      'Potrzebujesz lawety w Wilanowie? Holowanie od 250 zł, wycena z góry. Transport aut premium, rodzinnych SUV-ów i aut po kolizji — delikatne załadunki, mocowania zgodne z normami.',
    h2help: 'Pomoc drogowa Wilanów — całodobowo',
    helpIntro: 'W Wilanowie INNSER oferuje:',
    bullets: [
      'Holowanie aut z willowych ulic i głównych arterii',
      'Odpalanie na kable — akumulator w garażu podziemnym',
      'Wymiana koła, otwieranie auta bez uszkodzeń',
      '506-001-057 — dyskrecja i profesjonalizm',
    ],
    closing:
      'Wilanów wymaga taktu i precyzji — INNSER łączy szybkość reakcji z dbałością o Twój pojazd.',
  },
  ursus: {
    lead:
      'Ursus to dzielnica z industrialną historią — dawne zakłady, osiedla Skorosze i Szamoty, a także rozwijające się nowe inwestycje przy Traktorowej. INNSER świadczy pomoc drogową i lawetę w Ursusie 24/7, holując z wąskich ulic fabrycznej zabudowy i nowych osiedli.',
    whyTitle: 'Laweta Ursus — INNSER',
    blocks: [
      {
        title: 'Skorosze, Plac Czarnieckiego, Traktorowa',
        text: 'Znamy układ ulic wokół centrum Ursusa — szybki dojazd lawety z sąsiednich dzielnic.',
      },
      {
        title: 'Połączenie z Wola i Bemowo',
        text: 'Awaria przy dojeździe do centrum — holujemy w kierunku warsztatu na Ursusie, Woli lub Bemowie.',
      },
      {
        title: 'Auta dostawcze i osobowe',
        text: 'Obsługujemy zarówno małe auta mieszkańców, jak i busy firm działających w strefie przemysłowej.',
      },
    ],
    h2transport: 'Holowanie Ursus – laweta 24h',
    transport:
      'Laweta INNSER w Ursusie — holowanie od 250 zł, cena ustalana telefonicznie. Dojazd ~20–30 min, transport w całej Warszawie i Polsce do 500 km.',
    h2help: 'Pomoc drogowa Ursus',
    helpIntro: 'W Ursusie oferujemy:',
    bullets: [
      'Holowanie po kolizji i awarii na Traktorowej i Pl. Czarnieckiego',
      'Odpalanie auta na kable i boosterem',
      'Wymiana koła, otwieranie zamkniętego auta',
      '506-001-057 — 24/7',
    ],
    closing:
      'Ursus się zmienia — INNSER zna zarówno stare ulice Skorosza, jak i nowe drogi osiedli.',
  },
  wlochy: {
    lead:
      'Włochy to dzielnica lotniska Chopina — Rakowiec, Salomea, 1 Sierpnia i gęsty ruch wokół tras lotniskowych. INNSER oferuje lawetę i pomoc drogową we Włochach 24/7, szczególnie gdy auto zawiedzie w drodze na lotnisko lub po wylądowaniu na parkingu P1/P2.',
    whyTitle: 'Laweta Włochy — INNSER przy lotnisku',
    blocks: [
      {
        title: 'Dojazd na Lotnisko Chopina',
        text: 'Specjalizujemy się w szybkiej pomocy kierowcom jadącym na lot — holowanie do warsztatu lub wymiana koła na 1 Sierpnia.',
      },
      {
        title: 'Rakowiec i Salomea',
        text: 'Osiedla mieszkaniowe z garażami podziemnymi — holowanie z ramp, gdy auto nie odpala.',
      },
      {
        title: 'Południowa obwodnica i Al. Krakowska',
        text: 'Awaria na trasie wylotowej z Warszawy — reagujemy natychmiast.',
      },
    ],
    h2transport: 'Holowanie Włochy – laweta INNSER',
    transport:
      'Awaria we Włochach? INNSER — holowanie od 250 zł, wycena z góry. Nie spóźnisz się na lot — zadzwoń 506-001-057, podamy realny czas dojazdu.',
    h2help: 'Pomoc drogowa Włochy 24h',
    helpIntro: 'We Włochach pomagamy:',
    bullets: [
      'Holowanie aut z dróg lotniskowych i Alei Krakowskiej',
      'Odpalanie — rozładowany akumulator przed podróżą',
      'Wymiana koła, otwieranie auta',
      'Całodobowo — 506-001-057',
    ],
    closing:
      'Włochy to brama powietrzna Warszawy — INNSER uratuje Twój plan lotu, gdy auto odmówi współpracy.',
  },
  rembertow: {
    lead:
      'Rembertów to spokojna, zielona dzielnica na wschodzie Warszawy — osiedla MDM, ulice Fieldorfa i bliskość lasu Kabackiego od strony wschodniej. INNSER zapewnia lawetę i pomoc drogową w Rembertowie 24/7, dojeżdżając z Pragi Południe, Wawra lub Targówka w ok. 20–30 minut.',
    whyTitle: 'Pomoc drogowa Rembertów — INNSER',
    blocks: [
      {
        title: 'Spokojne osiedla i lokalne drogi',
        text: 'Rembertów ma mniej korków niż centrum — dojeżdżamy szybko, znamy ulice Nowej Wiosny i Okrężnej.',
      },
      {
        title: 'Połączenie z S2 i Traktem Brzeskim',
        text: 'Awaria przy wjeździe na Rembertów od strony szosy — holujemy bezpiecznie z pobocza.',
      },
      {
        title: 'Domy jednorodzinne i bloki',
        text: 'Holowanie aut z garaży i podjazdów — także wąskie uliczki osiedlowe.',
      },
    ],
    h2transport: 'Laweta Rembertów – holowanie 24h',
    transport:
      'Laweta INNSER w Rembertowie — holowanie od 250 zł, uczciwa wycena. Transport do warsztatu w Warszawie lub poza miastem.',
    h2help: 'INNSER w Rembertowie — usługi',
    helpIntro: 'W Rembertowie oferujemy:',
    bullets: [
      'Holowanie po kolizji i awarii mechanicznej',
      'Odpalanie auta na kable',
      'Wymiana koła, awaryjne otwieranie auta',
      '506-001-057 — całodobowo',
    ],
    closing:
      'Rembertów to dzielnica, gdzie liczy się spokój — INNSER działa sprawnie i bez zbędnego zamieszania.',
  },
  wesola: {
    lead:
      'Wesoła to najmniejsza dzielnica Warszawy z własnym charakterem — centrum przy pętli tramwajowej, bliskość S2 i granica z Wawrem i Białołęką. INNSER świadczy pomoc drogową i lawetę w Wesołej 24/7, holując z lokalnych ulic i Traktu Brzeskiego.',
    whyTitle: 'Laweta Wesoła — INNSER',
    blocks: [
      {
        title: 'Centrum Wesołej i pętla tramwajowa',
        text: 'Awaria w centrum dzielnicy — szybki dojazd, znamy lokalne skróty od strony Targówka i Wawra.',
      },
      {
        title: 'Trakt Brzeski i S2',
        text: 'Holowanie aut z trasy szybkiego ruchu — bezpieczne miejsca postoju lawety.',
      },
      {
        title: 'Osiedla domów i niska zabudowa',
        text: 'Laweta pod dom jednorodzinny — bez problemu manewrujemy na wąskim podjeździe.',
      },
    ],
    h2transport: 'Holowanie Wesoła – laweta 24h',
    transport:
      'Potrzebujesz lawety w Wesołej? INNSER — holowanie od 250 zł, wycena telefoniczna. Dojazd ~20–30 minut z sąsiednich rejonów Warszawy.',
    h2help: 'Pomoc drogowa Wesoła',
    helpIntro: 'W Wesołej INNSER oferuje:',
    bullets: [
      'Holowanie aut po kolizji i awarii',
      'Odpalanie na kable i boosterem',
      'Wymiana koła, otwieranie auta',
      '506-001-057 — 24/7',
    ],
    closing:
      'Wesoła to mała dzielnica z sercem — INNSER traktuje każde zgłoszenie priorytetowo.',
  },
  zoliborz: {
    lead:
      'Żoliborz to dzielnica o unikalnym klimacie — Stare Żoliborz, Plac Wilsona, aleje Wojska Polskiego i bliskość Wisły. INNSER oferuje pomoc drogową i lawetę na Żoliborzu 24/7, holując z wąskich ulic willowych, spod bloków MDM i parkingów podziemnych przy Metra Plac Wilsona.',
    whyTitle: 'Laweta Żoliborz — INNSER',
    blocks: [
      {
        title: 'Stare Żoliborz i Plac Wilsona',
        text: 'Wąskie aleje i parkujące auta po obu stronach — laweta INNSER manewruje precyzyjnie, bez ryzyka dla sąsiadów.',
      },
      {
        title: 'Marymont, Słodowiec (granica), Citadel',
        text: 'Obsługujemy cały Żoliborz — od Cytadeli po Sady Żoliborskie.',
      },
      {
        title: 'Biurowce i nowe inwestycje przy rondzie Radosława',
        text: 'Holowanie z parkingów podziemnych biurowców — niskoprofilowa laweta.',
      },
    ],
    h2transport: 'Holowanie Żoliborz – laweta INNSER 24h',
    transport:
      'Laweta na Żoliborzu — holowanie od 250 zł, cena z góry. INNSER holuje auta powypadkowe, unieruchomione na Placu Wilsona i w okolicach Mostu Gdańskiego.',
    h2help: 'Pomoc drogowa Żoliborz — całodobowo',
    helpIntro: 'Na Żoliborzu pomagamy:',
    bullets: [
      'Holowanie z wąskich ulic Starego Żoliborza',
      'Odpalanie auta — rozładowany akumulator zimą',
      'Wymiana koła, otwieranie zamkniętego auta',
      '506-001-057 — PL / EN / RU / UA',
    ],
    closing:
      'Żoliborz ma duszę — INNSER szanuje charakter tej dzielnicy i działa profesjonalnie, bez chaosu.',
  },
};

function buildEnFromPl(slug, name, pl) {
  return {
    lead: pl.lead
      .replace(/INNSER/g, 'INNSER')
      .replace(/dzielnicy/g, 'district')
      .replace(/Warszawy/g, 'Warsaw')
      .replace(/całą dobę/g, '24/7')
      .slice(0, 600),
    whyTitle: pl.whyTitle.replace('Dlaczego', 'Why choose INNSER in').replace('?', '?'),
    blocks: pl.blocks.map((b) => ({
      title: b.title,
      text: b.text.replace(/INNSER/g, 'INNSER').replace(/Warszawie/g, 'Warsaw').replace(/dzielnicy/g, 'district'),
    })),
    h2transport: pl.h2transport.replace('Laweta', 'Tow truck').replace('Holowanie', 'Towing'),
    transport: pl.transport.replace(/250 zł/g, '250 PLN').replace(/506-001-057/g, '506-001-057'),
    h2help: pl.h2help.replace('Całodobowa', '24/7').replace('Pomoc drogowa', 'Roadside assistance'),
    helpIntro: pl.helpIntro.replace(/INNSER/g, 'INNSER'),
    bullets: pl.bullets.map((b) =>
      b.replace(/Holowanie/g, 'Towing').replace(/Odpalanie/g, 'Jump start').replace(/Wymiana koła/g, 'Tyre change')
    ),
    closing: pl.closing.replace(/INNSER/g, 'INNSER'),
  };
}

function buildRuFromPl(slug, name, pl) {
  return {
    lead: `INNSER — эвакуатор и лавета в районе ${name}, Варшава 24/7. ${pl.lead.split('. ').slice(1, 3).join('. ')}`,
    whyTitle: `Почему INNSER в ${name}?`,
    blocks: pl.blocks.map((b, i) => ({
      title: ['Знаем местные дороги', 'Паркинги и гаражи', 'Опыт в районе'][i] || b.title,
      text: b.text.replace(/INNSER/g, 'INNSER').replace(/Warszawie/g, 'Варшаве'),
    })),
    h2transport: `Эвакуатор ${name} — перевозка авто 24/7`,
    transport: pl.transport.replace(/Holowanie od 250 zł/g, 'Эвакуация от 250 zł').replace(/INNSER/g, 'INNSER'),
    h2help: `Круглосуточная помощь на дороге — ${name}`,
    helpIntro: `В ${name} мы оказываем:`,
    bullets: [
      'Эвакуация после ДТП и поломки',
      'Прикур, замена колеса, открытие авто',
      'Приезд ~20–30 мин, цена заранее',
      '506-001-057 — PL / EN / RU / UA',
    ],
    closing: `INNSER — надёжный эвакуатор в ${name}. Более 120 отзывов Google, честная цена.`,
  };
}

function buildUaFromPl(slug, name, pl) {
  return {
    lead: `INNSER — евакуатор і лавета у районі ${name}, Варшава 24/7. Професійна допомога на дорозі та евакуація авто цілодобово.`,
    whyTitle: `Чому INNSER у ${name}?`,
    blocks: pl.blocks.map((b, i) => ({
      title: ['Знаємо місцеві траси', 'Паркінги та гаражі', 'Досвід у районі'][i] || b.title,
      text: b.text.replace(/INNSER/g, 'INNSER').replace(/Warszawie/g, 'Варшаві'),
    })),
    h2transport: `Евакуатор ${name} — перевезення авто 24/7`,
    transport: pl.transport.replace(/Holowanie od 250 zł/g, 'Евакуація від 250 zł'),
    h2help: `Цілодobова допомога — ${name}`,
    helpIntro: `У ${name} ми надаємо:`,
    bullets: [
      'Евакуація після ДТП і поломки',
      'Прикур, заміна колеса, відкриття авто',
      'Приїзд ~20–30 хв, ціна наперед',
      '506-001-057 — PL / EN / RU / UA',
    ],
    closing: `INNSER — надійний евакуатор у ${name}. 120+ відгуків Google.`,
  };
}

/** @type {Record<string, Record<string, object>>} */
const DISTRICT_RICH = {};
for (const slug of Object.keys(PL_RICH)) {
  const pl = PL_RICH[slug];
  const namePl = slug; // filled below from NAMES in render
  DISTRICT_RICH[slug] = {
    pl,
    en: buildEnFromPl(slug, slug, pl),
    ru: buildRuFromPl(slug, slug, pl),
    ua: buildUaFromPl(slug, slug, pl),
  };
}

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

export { LOCATIVE, PL_RICH };
