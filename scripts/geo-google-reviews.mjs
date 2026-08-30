/**
 * Unique geo Google reviews (districts / suburbs / roads).
 * Each place gets 3 different full texts — not one template with only {place} swapped.
 * Districts: «на Мокотуве / na Mokotowie»; suburbs: «в Прушкуве / w Pruszkowie».
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

/**
 * Declined place phrases for reviews.
 * place = nominative; in = location (на/na / w); from = origin (с/z / из); gen = genitive.
 */
export const PLACE_FORMS = {
  mokotow: {
    pl: { place: 'Mokotów', in: 'na Mokotowie', from: 'z Mokotowa', gen: 'Mokotowa' },
    en: { place: 'Mokotów', in: 'in Mokotów', from: 'from Mokotów', gen: 'Mokotów' },
    ru: { place: 'Мокотув', in: 'на Мокотуве', from: 'с Мокотува', gen: 'Мокотува' },
    ua: { place: 'Мокотув', in: 'на Мокотуві', from: 'з Мокотува', gen: 'Мокотува' },
  },
  wola: {
    pl: { place: 'Wola', in: 'na Woli', from: 'z Woli', gen: 'Woli' },
    en: { place: 'Wola', in: 'in Wola', from: 'from Wola', gen: 'Wola' },
    ru: { place: 'Воля', in: 'на Воле', from: 'с Воли', gen: 'Воли' },
    ua: { place: 'Воля', in: 'на Волі', from: 'з Волі', gen: 'Волі' },
  },
  'praga-poludnie': {
    pl: { place: 'Praga-Południe', in: 'na Pradze-Południe', from: 'z Pragi-Południe', gen: 'Pragi-Południe' },
    en: { place: 'Praga-Południe', in: 'in Praga-Południe', from: 'from Praga-Południe', gen: 'Praga-Południe' },
    ru: { place: 'Прага-Полудне', in: 'на Праге-Полудне', from: 'с Праги-Полудне', gen: 'Праги-Полудне' },
    ua: { place: 'Прага-Полудне', in: 'на Прагі-Полудне', from: 'з Праги-Полудне', gen: 'Праги-Полудне' },
  },
  'praga-polnoc': {
    pl: { place: 'Praga-Północ', in: 'na Pradze-Północ', from: 'z Pragi-Północ', gen: 'Pragi-Północ' },
    en: { place: 'Praga-Północ', in: 'in Praga-Północ', from: 'from Praga-Północ', gen: 'Praga-Północ' },
    ru: { place: 'Прага-Пулноц', in: 'на Праге-Пулноц', from: 'с Праги-Пулноц', gen: 'Праги-Пулноц' },
    ua: { place: 'Прага-Північ', in: 'на Празі-Північ', from: 'з Праги-Північ', gen: 'Праги-Північ' },
  },
  srodmiescie: {
    pl: { place: 'Śródmieście', in: 'na Śródmieściu', from: 'ze Śródmieścia', gen: 'Śródmieścia' },
    en: { place: 'Śródmieście', in: 'in Śródmieście', from: 'from Śródmieście', gen: 'Śródmieście' },
    ru: { place: 'Срудместье', in: 'на Срудместье', from: 'со Срудместья', gen: 'Срудместья' },
    ua: { place: 'Середмістя', in: 'на Середмісті', from: 'із Середмістя', gen: 'Середмістя' },
  },
  ursynow: {
    pl: { place: 'Ursynów', in: 'na Ursynowie', from: 'z Ursynowa', gen: 'Ursynowa' },
    en: { place: 'Ursynów', in: 'in Ursynów', from: 'from Ursynów', gen: 'Ursynów' },
    ru: { place: 'Урсынув', in: 'на Урсынове', from: 'с Урсынова', gen: 'Урсынова' },
    ua: { place: 'Урсинув', in: 'на Урсинові', from: 'з Урсинова', gen: 'Урсинова' },
  },
  bielany: {
    pl: { place: 'Bielany', in: 'na Bielanach', from: 'z Bielan', gen: 'Bielan' },
    en: { place: 'Bielany', in: 'in Bielany', from: 'from Bielany', gen: 'Bielany' },
    ru: { place: 'Беляны', in: 'на Белянах', from: 'с Белян', gen: 'Белян' },
    ua: { place: 'Біляни', in: 'на Білянах', from: 'з Білян', gen: 'Білян' },
  },
  bemowo: {
    pl: { place: 'Bemowo', in: 'na Bemowie', from: 'z Bemowa', gen: 'Bemowa' },
    en: { place: 'Bemowo', in: 'in Bemowo', from: 'from Bemowo', gen: 'Bemowo' },
    ru: { place: 'Бемово', in: 'на Бемове', from: 'с Бемова', gen: 'Бемова' },
    ua: { place: 'Бемово', in: 'на Бемові', from: 'з Бемова', gen: 'Бемова' },
  },
  targowek: {
    pl: { place: 'Targówek', in: 'na Targówku', from: 'z Targówka', gen: 'Targówka' },
    en: { place: 'Targówek', in: 'in Targówek', from: 'from Targówek', gen: 'Targówek' },
    ru: { place: 'Таргувек', in: 'на Таргувеке', from: 'с Таргувека', gen: 'Таргувека' },
    ua: { place: 'Таргувек', in: 'на Таргувеку', from: 'з Таргувека', gen: 'Таргувека' },
  },
  ochota: {
    pl: { place: 'Ochota', in: 'na Ochocie', from: 'z Ochoty', gen: 'Ochoty' },
    en: { place: 'Ochota', in: 'in Ochota', from: 'from Ochota', gen: 'Ochota' },
    ru: { place: 'Охота', in: 'на Охоте', from: 'с Охоты', gen: 'Охоты' },
    ua: { place: 'Охота', in: 'на Охоті', from: 'з Охоти', gen: 'Охоти' },
  },
  wawer: {
    pl: { place: 'Wawer', in: 'na Wawrze', from: 'z Wawra', gen: 'Wawra' },
    en: { place: 'Wawer', in: 'in Wawer', from: 'from Wawer', gen: 'Wawer' },
    ru: { place: 'Вавер', in: 'на Вавере', from: 'с Вавера', gen: 'Вавера' },
    ua: { place: 'Вавер', in: 'на Вавері', from: 'з Вавера', gen: 'Вавера' },
  },
  bialoleka: {
    pl: { place: 'Białołęka', in: 'na Białołęce', from: 'z Białołęki', gen: 'Białołęki' },
    en: { place: 'Białołęka', in: 'in Białołęka', from: 'from Białołęka', gen: 'Białołęka' },
    ru: { place: 'Бялоленка', in: 'на Бялоленке', from: 'с Бялоленки', gen: 'Бялоленки' },
    ua: { place: 'Бялоленка', in: 'на Бялоленці', from: 'з Бялоленки', gen: 'Бялоленки' },
  },
  wilanow: {
    pl: { place: 'Wilanów', in: 'na Wilanowie', from: 'z Wilanowa', gen: 'Wilanowa' },
    en: { place: 'Wilanów', in: 'in Wilanów', from: 'from Wilanów', gen: 'Wilanów' },
    ru: { place: 'Виланув', in: 'на Вилануве', from: 'с Виланува', gen: 'Виланува' },
    ua: { place: 'Вілянув', in: 'на Вілянові', from: 'з Вілянова', gen: 'Вілянова' },
  },
  ursus: {
    pl: { place: 'Ursus', in: 'na Ursusie', from: 'z Ursusa', gen: 'Ursusa' },
    en: { place: 'Ursus', in: 'in Ursus', from: 'from Ursus', gen: 'Ursus' },
    ru: { place: 'Урсус', in: 'на Урсусе', from: 'с Урсуса', gen: 'Урсуса' },
    ua: { place: 'Урсус', in: 'на Урсусі', from: 'з Урсуса', gen: 'Урсуса' },
  },
  wlochy: {
    pl: { place: 'Włochy', in: 'na Włochach', from: 'z Włoch', gen: 'Włoch' },
    en: { place: 'Włochy', in: 'in Włochy', from: 'from Włochy', gen: 'Włochy' },
    ru: { place: 'Влохи', in: 'на Влохах', from: 'с Влохов', gen: 'Влохов' },
    ua: { place: 'Влохи', in: 'на Влохах', from: 'з Влох', gen: 'Влох' },
  },
  rembertow: {
    pl: { place: 'Rembertów', in: 'na Rembertowie', from: 'z Rembertowa', gen: 'Rembertowa' },
    en: { place: 'Rembertów', in: 'in Rembertów', from: 'from Rembertów', gen: 'Rembertów' },
    ru: { place: 'Рембертув', in: 'на Рембертуве', from: 'с Рембертува', gen: 'Рембертува' },
    ua: { place: 'Рембертув', in: 'на Рембертові', from: 'з Рембертова', gen: 'Рембертова' },
  },
  wesola: {
    pl: { place: 'Wesoła', in: 'na Wesołej', from: 'z Wesołej', gen: 'Wesołej' },
    en: { place: 'Wesoła', in: 'in Wesoła', from: 'from Wesoła', gen: 'Wesoła' },
    ru: { place: 'Весола', in: 'на Весоле', from: 'с Весолы', gen: 'Весолы' },
    ua: { place: 'Весола', in: 'на Весолій', from: 'з Весоли', gen: 'Весоли' },
  },
  zoliborz: {
    pl: { place: 'Żoliborz', in: 'na Żoliborzu', from: 'z Żoliborza', gen: 'Żoliborza' },
    en: { place: 'Żoliborz', in: 'in Żoliborz', from: 'from Żoliborz', gen: 'Żoliborz' },
    ru: { place: 'Жолибож', in: 'на Жолибоже', from: 'с Жолибожа', gen: 'Жолибожа' },
    ua: { place: 'Жолібож', in: 'на Жолібожі', from: 'з Жолібожа', gen: 'Жолібожа' },
  },
  zabki: {
    pl: { place: 'Ząbki', in: 'w Ząbkach', from: 'z Ząbek', gen: 'Ząbek' },
    en: { place: 'Ząbki', in: 'in Ząbki', from: 'from Ząbki', gen: 'Ząbki' },
    ru: { place: 'Зомбки', in: 'в Зомбках', from: 'из Зомбок', gen: 'Зомбок' },
    ua: { place: 'Зомбки', in: 'у Зомбках', from: 'із Зомбок', gen: 'Зомбок' },
  },
  marki: {
    pl: { place: 'Marki', in: 'w Markach', from: 'z Marek', gen: 'Marek' },
    en: { place: 'Marki', in: 'in Marki', from: 'from Marki', gen: 'Marki' },
    ru: { place: 'Марки', in: 'в Марках', from: 'из Марок', gen: 'Марок' },
    ua: { place: 'Маркі', in: 'у Марках', from: 'із Марок', gen: 'Марок' },
  },
  otwock: {
    pl: { place: 'Otwock', in: 'w Otwocku', from: 'z Otwocka', gen: 'Otwocka' },
    en: { place: 'Otwock', in: 'in Otwock', from: 'from Otwock', gen: 'Otwock' },
    ru: { place: 'Отвоцк', in: 'в Отвоцке', from: 'из Отвоцка', gen: 'Отвоцка' },
    ua: { place: 'Отвоцьк', in: 'в Отвоцьку', from: 'з Отвоцька', gen: 'Отвоцька' },
  },
  pruszkow: {
    pl: { place: 'Pruszków', in: 'w Pruszkowie', from: 'z Pruszkowa', gen: 'Pruszkowa' },
    en: { place: 'Pruszków', in: 'in Pruszków', from: 'from Pruszków', gen: 'Pruszków' },
    ru: { place: 'Прушкув', in: 'в Прушкуве', from: 'из Прушкува', gen: 'Прушкува' },
    ua: { place: 'Прушкув', in: 'у Прушкуві', from: 'з Прушкува', gen: 'Прушкува' },
  },
  piaseczno: {
    pl: { place: 'Piaseczno', in: 'w Piasecznie', from: 'z Piaseczna', gen: 'Piaseczna' },
    en: { place: 'Piaseczno', in: 'in Piaseczno', from: 'from Piaseczno', gen: 'Piaseczno' },
    ru: { place: 'Пясечно', in: 'в Пясечно', from: 'из Пясечно', gen: 'Пясечно' },
    ua: { place: 'Пясечно', in: 'у Пясечно', from: 'з Пясечно', gen: 'Пясечно' },
  },
  legionowo: {
    pl: { place: 'Legionowo', in: 'w Legionowie', from: 'z Legionowa', gen: 'Legionowa' },
    en: { place: 'Legionowo', in: 'in Legionowo', from: 'from Legionowo', gen: 'Legionowo' },
    ru: { place: 'Легионово', in: 'в Легионово', from: 'из Легионово', gen: 'Легионово' },
    ua: { place: 'Легіоново', in: 'у Легіоново', from: 'з Легіоново', gen: 'Легіоново' },
  },
  wolomin: {
    pl: { place: 'Wołomin', in: 'w Wołominie', from: 'z Wołomina', gen: 'Wołomina' },
    en: { place: 'Wołomin', in: 'in Wołomin', from: 'from Wołomin', gen: 'Wołomin' },
    ru: { place: 'Воломин', in: 'в Воломине', from: 'из Воломина', gen: 'Воломина' },
    ua: { place: 'Воломін', in: 'у Воломіні', from: 'з Воломіна', gen: 'Воломіна' },
  },
  zielonka: {
    pl: { place: 'Zielonka', in: 'w Zielonce', from: 'z Zielonki', gen: 'Zielonki' },
    en: { place: 'Zielonka', in: 'in Zielonka', from: 'from Zielonka', gen: 'Zielonka' },
    ru: { place: 'Зеленка', in: 'в Зеленке', from: 'из Зеленки', gen: 'Зеленки' },
    ua: { place: 'Зеленка', in: 'у Зеленці', from: 'з Зеленки', gen: 'Зеленки' },
  },
  kobylka: {
    pl: { place: 'Kobyłka', in: 'w Kobyłce', from: 'z Kobyłki', gen: 'Kobyłki' },
    en: { place: 'Kobyłka', in: 'in Kobyłka', from: 'from Kobyłka', gen: 'Kobyłka' },
    ru: { place: 'Кобылка', in: 'в Кобылке', from: 'из Кобылки', gen: 'Кобылки' },
    ua: { place: 'Кобилка', in: 'у Кобилці', from: 'з Кобилки', gen: 'Кобилки' },
  },
  jozefow: {
    pl: { place: 'Józefów', in: 'w Józefowie', from: 'z Józefowa', gen: 'Józefowa' },
    en: { place: 'Józefów', in: 'in Józefów', from: 'from Józefów', gen: 'Józefów' },
    ru: { place: 'Юзефув', in: 'в Юзефуве', from: 'из Юзефува', gen: 'Юзефува' },
    ua: { place: 'Юзефув', in: 'у Юзефуві', from: 'з Юзефува', gen: 'Юзефува' },
  },
  lomianki: {
    pl: { place: 'Łomianki', in: 'w Łomiankach', from: 'z Łomianek', gen: 'Łomianek' },
    en: { place: 'Łomianki', in: 'in Łomianki', from: 'from Łomianki', gen: 'Łomianki' },
    ru: { place: 'Ломянки', in: 'в Ломянках', from: 'из Ломянок', gen: 'Ломянок' },
    ua: { place: 'Ломянки', in: 'у Ломянках', from: 'з Ломянок', gen: 'Ломянок' },
  },
  'konstancin-jeziorna': {
    pl: { place: 'Konstancin-Jeziorna', in: 'w Konstancinie-Jeziornie', from: 'z Konstancina-Jeziorny', gen: 'Konstancina-Jeziorny' },
    en: { place: 'Konstancin-Jeziorna', in: 'in Konstancin-Jeziorna', from: 'from Konstancin-Jeziorna', gen: 'Konstancin-Jeziorna' },
    ru: { place: 'Констанцин-Езёрна', in: 'в Констанцине-Езёрне', from: 'из Констанцина-Езёрны', gen: 'Констанцина-Езёрны' },
    ua: { place: 'Констанцін-Єзьорна', in: 'у Констанціні-Єзьорні', from: 'з Констанціна-Єзьорни', gen: 'Констанціна-Єзьорни' },
  },
  piastow: {
    pl: { place: 'Piastów', in: 'w Piastowie', from: 'z Piastowa', gen: 'Piastowa' },
    en: { place: 'Piastów', in: 'in Piastów', from: 'from Piastów', gen: 'Piastów' },
    ru: { place: 'Пястув', in: 'в Пястуве', from: 'из Пястува', gen: 'Пястува' },
    ua: { place: 'Пястув', in: 'у Пястуві', from: 'з Пястува', gen: 'Пястува' },
  },
  sulejowek: {
    pl: { place: 'Sulejówek', in: 'w Sulejówku', from: 'z Sulejówka', gen: 'Sulejówka' },
    en: { place: 'Sulejówek', in: 'in Sulejówek', from: 'from Sulejówek', gen: 'Sulejówek' },
    ru: { place: 'Сулеювек', in: 'в Сулеювеке', from: 'из Сулеювека', gen: 'Сулеювека' },
    ua: { place: 'Сулєювек', in: 'у Сулєювеку', from: 'з Сулєювека', gen: 'Сулєювека' },
  },
  milanowek: {
    pl: { place: 'Milanówek', in: 'w Milanówku', from: 'z Milanówka', gen: 'Milanówka' },
    en: { place: 'Milanówek', in: 'in Milanówek', from: 'from Milanówek', gen: 'Milanówek' },
    ru: { place: 'Миланувек', in: 'в Миланувеке', from: 'из Миланувека', gen: 'Миланувека' },
    ua: { place: 'Міланувек', in: 'у Міланувеку', from: 'з Міланувека', gen: 'Міланувека' },
  },
  brwinow: {
    pl: { place: 'Brwinów', in: 'w Brwinowie', from: 'z Brwinowa', gen: 'Brwinowa' },
    en: { place: 'Brwinów', in: 'in Brwinów', from: 'from Brwinów', gen: 'Brwinów' },
    ru: { place: 'Брвинув', in: 'в Брвинуве', from: 'из Брвинува', gen: 'Брвинува' },
    ua: { place: 'Брвінув', in: 'у Брвінуві', from: 'з Брвінува', gen: 'Брвінува' },
  },
  nadarzyn: {
    pl: { place: 'Nadarzyn', in: 'w Nadarzynie', from: 'z Nadarzyna', gen: 'Nadarzyna' },
    en: { place: 'Nadarzyn', in: 'in Nadarzyn', from: 'from Nadarzyn', gen: 'Nadarzyn' },
    ru: { place: 'Надажин', in: 'в Надажине', from: 'из Надажина', gen: 'Надажина' },
    ua: { place: 'Надажин', in: 'у Надажині', from: 'з Надажина', gen: 'Надажина' },
  },
  raszyn: {
    pl: { place: 'Raszyn', in: 'w Raszynie', from: 'z Raszyna', gen: 'Raszyna' },
    en: { place: 'Raszyn', in: 'in Raszyn', from: 'from Raszyn', gen: 'Raszyn' },
    ru: { place: 'Рашин', in: 'в Рашине', from: 'из Рашина', gen: 'Рашина' },
    ua: { place: 'Рашин', in: 'у Рашині', from: 'з Рашина', gen: 'Рашина' },
  },
  'grodzisk-mazowiecki': {
    pl: { place: 'Grodzisk Mazowiecki', in: 'w Grodzisku Mazowieckim', from: 'z Grodziska Mazowieckiego', gen: 'Grodziska Mazowieckiego' },
    en: { place: 'Grodzisk Mazowiecki', in: 'in Grodzisk Mazowiecki', from: 'from Grodzisk Mazowiecki', gen: 'Grodzisk Mazowiecki' },
    ru: { place: 'Гродзиск-Мазовецки', in: 'в Гродзиске-Мазовецком', from: 'из Гродзиска-Мазовецкого', gen: 'Гродзиска-Мазовецкого' },
    ua: { place: 'Гродзиськ-Мазовецький', in: 'у Гродзиську-Мазовецькому', from: 'з Гродзиська-Мазовецького', gen: 'Гродзиська-Мазовецького' },
  },
  'nowy-dwor-mazowiecki': {
    pl: { place: 'Nowy Dwór Mazowiecki', in: 'w Nowym Dworze Mazowieckim', from: 'z Nowego Dworu Mazowieckiego', gen: 'Nowego Dworu Mazowieckiego' },
    en: { place: 'Nowy Dwór Mazowiecki', in: 'in Nowy Dwór Mazowiecki', from: 'from Nowy Dwór Mazowiecki', gen: 'Nowy Dwór Mazowiecki' },
    ru: { place: 'Новы-Двур-Мазовецки', in: 'в Новом-Двуре-Мазовецком', from: 'из Нового-Двура-Мазовецкого', gen: 'Нового-Двура-Мазовецкого' },
    ua: { place: 'Новий-Двір-Мазовецький', in: 'у Новому-Дворі-Мазовецькому', from: 'з Нового-Двору-Мазовецького', gen: 'Нового-Двору-Мазовецького' },
  },
};

/** Full unique bodies — tokens: {in} {from} {gen} {place} */
const LAND = {
  pl: [
    'Wieczorem {in} auto stanęło. Zadzwoniłem do INNSER, dyspozytor od razu podał cenę, ewakuator był szybko. Odholowali spokojnie — polecam.',
    'Rano {in} nie odpaliłem. Myślałem, że skończy się na kablach, ale potrzebny był ewakuator. INNSER przyjechał, załadowali bez szarpania.',
    'Po stłuczce {in} panikowałem. Dyspozytor INNSER uspokoił, ewakuator dojechał, auto pojechało na serwis. Dzięki.',
    '{in|cap} policja kazała odholować auto. Numer 506-001-057 — holownik INNSER szybko na miejscu, bez nerwów.',
    'Noc, {place}, auto nie jedzie. Wezwałem pomoc drogową INNSER — dojazd OK, cena z góry, załadunek spokojny.',
    'Szukałem ewakuatora koło {gen} w weekend. INNSER odebrał od razu, dyspozytor konkretny, przyjechali i załatwili.',
    '{in|cap} złapałem awarię skrzyni. Laweta/ewakuator INNSER — szybko, uczciwie, zero kombinowania.',
    'Zablokowałem przejazd {in}, wstyd. Holownik INNSER przyjechał bez dramatu, zdjął auto i po sprawie.',
    'Potrzebowałem ewakuatora z osiedla {in}. Dyspozytor zapytał o dojazd, kierowca znał okolicę — INNSER plus.',
    'Deszcz, {place}, auto zgasło. Pomoc drogowa INNSER: telefon, wycena, dojazd. Ewakuator zrobił robotę.',
    '{in|cap} pękła opona i nie miałem zapasu. Najpierw myśleli o kole, skończyło się na ewakuatorze INNSER — OK.',
    'Sobota {in}, auto na awaryjnych. INNSER: dyspozytor spokojny, ewakuator szybko, cena bez niespodzianek.',
    'Musiałem zabrać auto z parkingu {in}. INNSER ogarnął, załadowali ostrożnie. Polecam ten numer.',
    'Awaria klimatyzacji? Nie — silnik. {in|cap} wezwałem INNSER. Ewakuator, warsztat, wszystko w jednym ciągu.',
    'Przyjaciel utknął {in}. Zadzwoniłem za niego do INNSER — ewakuator pojechał, potem podziękował. Działa.',
    'Zimą {in} akumulator padł totalnie. Na miejscu nie dało rady, ewakuator INNSER zawiózł do serwisu.',
    '{in|cap} po kolizji na skrzyżowaniu. INNSER przyjechał, pomógł z formalnościami i odholował. Profeska.',
    'Szukaliśmy taniego holownika {in}. INNSER podał cenę od razu — uczciwie, bez „dopłat na miejscu”.',
    'Auto nie chciało jechać pod górkę {in}. Wezwałem ewakuator INNSER — szybko i bez stresu.',
    'Dyspozytor INNSER znał {place}, nie dopytywał sto razy. Ewakuator przyjechał, załadunek czysty. Polecam.',
    'Wieczór {in}, kontrolka silnika i postój. Pomoc drogowa INNSER — ewakuator zamiast kombinowania na własną rękę.',
    '{in|cap} urwał się przegub. INNSER: telefon → dojazd → platforma. Bez gadania, konkret.',
    'Żona stała {in} z dzieckiem. Zadzwoniłem do INNSER — ewakuator szybko, kierowca miły. Ulga.',
    'Po pracy {in} auto „umrzeć”. INNSER odholował do domu warsztatu partnerskiego. Super sprawa.',
    'Myślałem, że {in} długo poczekam. A INNSER był szybciej niż myślałem. Ewakuator + jasna cena.',
    '{in|cap} potrzebowałem holownika pod konkretny adres serwisu. INNSER dowiózł dokładnie tam. OK.',
    'Pierwszy raz wzywałam ewakuator — akurat {in}. Dyspozytor INNSER wytłumaczył krok po kroku. Spokojnie.',
    'Auto po awarii elektryki {in}. INNSER zabrał lawetą/ewakuatorem, bez problemu.',
    '{in|cap} stałem na zakazie. Lepiej wezwać holownika niż mandat w nieskończoność — INNSER załatwił.',
    'Nocny dyżur {in}: INNSER wziął telefon, wysłał ewakuator. Cena taka, jak w rozmowie. Szacun.',
    'Zepsuł się turbo {in}. Nie ryzykowałem jazdy — ewakuator INNSER. Dobrze, że zadzwoniłem.',
    '{in|cap} kolega polecił 506-001-057. Sprawdziłem: dyspozytor INNSER, szybki dojazd, czysty załadunek.',
    'Awaria na wyjeździe {from}. Holownik INNSER zawrócił sprawę w godzinę — od telefonu do serwisu.',
    'Szukali opcji „na już” {in}. INNSER nie obiecywał cudów, ale dojechał realnie szybko. Polecam.',
    '{in|cap} auto zablokowało wjazd do bramy. Ewakuator INNSER zdjął je ostrożnie, bez rys na bramie.',
    'Po burzy {in} — nie zalany silnik, po prostu padł. INNSER ewakuował, potem serwis. Dzięki.',
  ],
  en: [
    'Car died in the evening {in}. Called INNSER, dispatcher gave the price straight away, tow truck came fast. Smooth load — recommend.',
    'Morning {in}, wouldn’t start. Thought it was just cables, ended up needing a tow. INNSER loaded it carefully.',
    'After a fender-bender {in} I panicked. INNSER dispatcher calmed me down, tow came, car went to a garage. Thanks.',
    'Police {in} said the car had to be towed. Dialled 506-001-057 — INNSER was there quickly, no drama.',
    'Night in {place}, car wouldn’t move. Called INNSER roadside help — ETA was fine, price upfront, calm loading.',
    'Needed a tow near {place} on a weekend. INNSER answered right away, clear dispatcher, they sorted it.',
    'Gearbox failed {in}. INNSER flatbed/tow — quick, fair, no nonsense.',
    'Blocked a driveway {in}, awkward. INNSER tow showed up, moved the car, done.',
    'Needed a tow from a housing estate {in}. Dispatcher asked about access, driver knew the area — INNSER plus.',
    'Rain, {place}, engine cut out. INNSER: call, quote, arrival. Tow did the job.',
    'Blowout {in}, no spare. Started as a tyre job, finished with an INNSER tow — fair enough.',
    'Saturday {in}, hazards on. INNSER dispatcher was calm, tow came quick, price as quoted.',
    'Had to get the car out of a car park {in}. INNSER handled it, careful loading. Saving that number.',
    'Not the AC — the engine. {in|cap} I called INNSER. Tow to the workshop in one go.',
    'Mate stuck {in}. I called INNSER for him — tow went out, he texted thanks. It works.',
    'Winter {in}, battery totally dead. Jump wouldn’t hold, INNSER towed to a garage.',
    'After a junction bump {in}. INNSER arrived, helped with the mess, towed away. Proper job.',
    'We wanted a clear price for towing {in}. INNSER said it on the phone — no extras on site.',
    'Car wouldn’t climb {in}. Called INNSER tow — fast and no stress.',
    'INNSER dispatcher knew {place}, didn’t ask the same thing twice. Tow arrived, clean load. Recommend.',
    'Evening {in}, engine light and stop. INNSER roadside — tow instead of DIY guessing.',
    'CV joint went {in}. INNSER: call → arrival → deck. Straight talk.',
    'Wife stranded {in} with the kid. Called INNSER — tow quick, driver decent. Relief.',
    'After work {in} the car just died. INNSER towed to a partner garage. Sorted.',
    'Thought I’d wait forever {in}. INNSER was sooner than I expected. Tow + clear price.',
    'Needed a tow {in} to a specific workshop address. INNSER dropped it exactly there. Good.',
    'First time calling a tow — happened {in}. INNSER dispatcher walked me through it. Calm.',
    'Electrics failed {in}. INNSER took it on the truck, no fuss.',
    'Parked illegal {in}. Better a tow than endless tickets — INNSER moved it.',
    'Night shift call {in}: INNSER picked up, sent a tow. Price matched the call. Respect.',
    'Turbo failed {in}. Didn’t risk driving — INNSER tow. Glad I called.',
    'Mate {in} gave me 506-001-057. Checked: INNSER dispatcher, quick arrival, clean load.',
    'Breakdown on the way out {from}. INNSER tow wrapped it up in about an hour phone-to-garage.',
    'Needed “now” {in}. INNSER didn’t overpromise, but arrived for real. Recommend.',
    'Car blocked a gate {in}. INNSER tow eased it out, no scratches on the gate.',
    'After a storm {in} — not flooded, just dead. INNSER towed, then the garage. Thanks.',
  ],
  ru: [
    'Вечером {in} машина встала. Позвонил в INNSER, диспетчер сразу сказал цену, эвакуатор быстро приехал. Погрузили спокойно — рекомендую.',
    'Утром {in} не завелась. Думал, хватит прикурить, в итоге нужен был эвакуатор. INNSER приехал, загрузили аккуратно.',
    'После мелкого ДТП {in} растерялся. Диспетчер INNSER успокоил, эвакуатор приехал, увезли на сервис. Спасибо.',
    '{in|cap} полиция сказала отбуксировать. Набрал 506-001-057 — эвакуатор INNSER быстро на месте, без нервов.',
    'Ночь, {place}, машина не едет. Вызвал помощь на дороге INNSER — по времени нормально, цена заранее, погрузка спокойная.',
    'Нужен был эвакуатор около {gen} в выходные. INNSER сразу взял трубку, диспетчер по делу, приехали и сделали.',
    '{in|cap} полетела коробка. Эвакуатор INNSER — быстро, по цене честно, без лишней воды.',
    'Перекрыл проезд {in}, неловко. Эвакуатор INNSER приехал без криков, забрал машину — и всё.',
    'Нужно было забрать авто с ЖК {in}. Диспетчер спросил про въезд, водитель ориентировался — INNSER молодец.',
    'Дождь, {place}, заглохла. Помощь на дороге INNSER: звонок, цена, приезд. Эвакуатор сделал работу.',
    '{in|cap} пробил колесо, запаски нет. Сначала думали про замену, вышло на эвакуатор INNSER — нормально.',
    'Суббота, {place}, аварийка. Диспетчер INNSER спокойный, эвакуатор быстро, цена как обещали.',
    'Надо было вытащить машину с паркинга {in}. INNSER справился, грузили осторожно. Номер сохранил.',
    'Не кондей — двигатель. {in|cap} вызвал INNSER. Эвакуатор до сервиса одним заходом.',
    'Друг застрял {in}. Позвонил за него в INNSER — эвакуатор выехал, потом отписался «спасибо». Работает.',
    'Зимой {in} аккумулятор сел наглухо. С места не вышло, эвакуатор INNSER отвёз на СТО.',
    'После касания на перекрёстке {in}. INNSER приехал, помог сориентироваться и эвакуировал. По делу.',
    'Искали понятную цену на эвакуатор {in}. INNSER назвал по телефону — без «доплат на месте».',
    '{in|cap} машина не тянула в горку. Вызвал эвакуатор INNSER — быстро и без стресса.',
    'Диспетчер INNSER знал {place}, не переспрашивал по кругу. Эвакуатор приехал, погрузка чистая. Рекомендую.',
    'Вечер {in}, загорелся чек и стоп. Помощь на дороге INNSER — лучше эвакуатор, чем гадать самому.',
    '{in|cap} урвало ШРУС. INNSER: звонок → приезд → платформа. Коротко и ясно.',
    'Жена стояла {in} с ребёнком. Позвонил в INNSER — эвакуатор быстро, водитель нормальный. Отпустило.',
    'После работы {in} машина «умерла». INNSER отвёз на партнёрский сервис. Закрыли вопрос.',
    'Думал, {in} буду ждать вечность. INNSER приехал раньше, чем ждал. Эвакуатор и понятная цена.',
    'Нужен был эвакуатор {in} именно на адрес сервиса. INNSER довёз туда. Ок.',
    'Впервые вызывала эвакуатор — как раз {in}. Диспетчер INNSER объяснил по шагам. Спокойно.',
    'Электрика села {in}. INNSER забрал на эвакуаторе, без лишней суеты.',
    'Встал {in} там, где нельзя. Лучше эвакуатор, чем штрафы пачкой — INNSER забрал.',
    'Ночной вызов {in}: INNSER взял трубку, прислал эвакуатор. Цена как в разговоре. Уважение.',
    'Турбина {in}. Не стал рисковать ехать — эвакуатор INNSER. Правильно, что позвонил.',
    '{in|cap} посоветовали 506-001-057. Проверил: диспетчер INNSER, быстрый приезд, аккуратная погрузка.',
    'Поломка на выезде {from}. Эвакуатор INNSER уложил всё примерно за час — от звонка до сервиса.',
    'Нужно было «прямо сейчас» {in}. INNSER не обещал чудес, но реально быстро доехал. Рекомендую.',
    'Машина перекрыла ворота {in}. Эвакуатор INNSER вывез осторожно, ворота целые.',
    'После грозы {in} — не потоп, просто не завелась. INNSER эвакуировал, дальше сервис. Спасибо.',
  ],
  ua: [
    'Ввечері {in} машина стала. Подзвонив в INNSER, диспетчер одразу сказав ціну, евакуатор швидко приїхав. Завантажили спокійно — рекомендую.',
    'Вранці {in} не завелась. Думав, вистачить прикурити, зрештою потрібен був евакуатор. INNSER приїхав, завантажили обережно.',
    'Після дрібного ДТП {in} розгубився. Диспетчер INNSER заспокоїв, евакуатор приїхав, відвезли на сервіс. Дякую.',
    '{in|cap} поліція сказала відбуксовувати. Набрав 506-001-057 — евакуатор INNSER швидко на місці, без нервів.',
    'Ніч, {place}, авто не їде. Викликав допомогу на дорозі INNSER — по часу нормально, ціна заздалегідь, завантаження спокійне.',
    'Потрібен був евакуатор біля {gen} у вихідні. INNSER одразу взяв трубку, диспетчер по суті, приїхали й зробили.',
    '{in|cap} полетіла коробка. Евакуатор INNSER — швидко, по ціні чесно, без зайвої води.',
    'Перекрив проїзд {in}, незручно. Евакуатор INNSER приїхав без криків, забрав авто — і все.',
    'Треба було забрати авто з ЖК {in}. Диспетчер спитав про в’їзд, водій орієнтувався — INNSER молодець.',
    'Дощ, {place}, заглухла. Допомога на дорозі INNSER: дзвінок, ціна, приїзд. Евакуатор зробив роботу.',
    '{in|cap} пробив колесо, запаски немає. Спочатку думали про заміну, вийшло на евакуатор INNSER — нормально.',
    'Субота, {place}, аварійка. Диспетчер INNSER спокійний, евакуатор швидко, ціна як обіцяли.',
    'Треба було витягнути авто з паркінгу {in}. INNSER впорався, вантажили обережно. Номер зберіг.',
    'Не кондер — двигун. {in|cap} викликав INNSER. Евакуатор до сервісу одним заходом.',
    'Друг застряг {in}. Подзвонив за нього в INNSER — евакуатор виїхав, потім відписав «дякую». Працює.',
    'Взимку {in} акумулятор сів вщент. З місця не вийшло, евакуатор INNSER відвіз на СТО.',
    'Після торкання на перехресті {in}. INNSER приїхав, допоміг зорієнтуватись і евакуював. По суті.',
    'Шукали зрозумілу ціну на евакуатор {in}. INNSER назвав по телефону — без «доплат на місці».',
    '{in|cap} авто не тягнуло в гірку. Викликав евакуатор INNSER — швидко й без стресу.',
    'Диспетчер INNSER знав {place}, не перепитував по колу. Евакуатор приїхав, завантаження чисте. Рекомендую.',
    'Вечір {in}, загорівся чек і стоп. Допомога на дорозі INNSER — краще евакуатор, ніж гадати самому.',
    '{in|cap} урвало ШРУС. INNSER: дзвінок → приїзд → платформа. Коротко й ясно.',
    'Дружина стояла {in} з дитиною. Подзвонив в INNSER — евакуатор швидко, водій нормальний. Відпустило.',
    'Після роботи {in} авто «померло». INNSER відвіз на партнерський сервіс. Закрили питання.',
    'Думав, {in} чекатиму вічність. INNSER приїхав раніше, ніж чекав. Евакуатор і зрозуміла ціна.',
    'Потрібен був евакуатор {in} саме на адресу сервісу. INNSER довіз туди. Ок.',
    'Уперше викликала евакуатор — якраз {in}. Диспетчер INNSER пояснив по кроках. Спокійно.',
    'Електрика сіла {in}. INNSER забрав на евакуаторі, без зайвої метушні.',
    'Став {in} там, де не можна. Краще евакуатор, ніж штрафи пачкою — INNSER забрав.',
    'Нічний виклик {in}: INNSER взяв трубку, надіслав евакуатор. Ціна як у розмові. Повага.',
    'Турбіна {in}. Не став ризикувати їхати — евакуатор INNSER. Правильно, що подзвонив.',
    '{in|cap} порадили 506-001-057. Перевірив: диспетчер INNSER, швидкий приїзд, акуратне завантаження.',
    'Поломка на виїзді {from}. Евакуатор INNSER вклав усе десь за годину — від дзвінка до сервісу.',
    'Треба було «прямо зараз» {in}. INNSER не обіцяв чудес, але реально швидко доїхав. Рекомендую.',
    'Авто перекрило ворота {in}. Евакуатор INNSER вивіз обережно, ворота цілі.',
    'Після грози {in} — не потоп, просто не завелась. INNSER евакуював, далі сервіс. Дякую.',
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

function capFirst(s) {
  const t = String(s || '');
  if (!t) return t;
  return t.charAt(0).toUpperCase() + t.slice(1);
}

function formsFor(langCl, slug, placeNameFallback) {
  const pack = PLACE_FORMS[slug];
  const f = (pack && (pack[langCl] || pack.pl)) || null;
  if (f) return f;
  const place = String(placeNameFallback || slug || '').trim();
  const inPhrase =
    langCl === 'en' ? `in ${place}` :
    langCl === 'pl' ? `w ${place}` :
    langCl === 'ua' ? `у ${place}` :
    `в ${place}`;
  const fromPhrase =
    langCl === 'en' ? `from ${place}` :
    langCl === 'pl' ? `z ${place}` :
    langCl === 'ua' ? `з ${place}` :
    `из ${place}`;
  return { place, in: inPhrase, from: fromPhrase, gen: place };
}

function fillTokens(text, forms) {
  let out = String(text || '');
  out = out.split('{in|cap}').join(capFirst(forms.in));
  out = out.split('{from|cap}').join(capFirst(forms.from));
  out = out.split('{in}').join(forms.in);
  out = out.split('{from}').join(forms.from);
  out = out.split('{gen}').join(forms.gen);
  out = out.split('{place}').join(forms.place);
  return out;
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
  const forms =
    kind === 'road'
      ? { place: String(placeName || slug).trim(), in: '', from: '', gen: '' }
      : formsFor(lang, slug, placeName);
  return idxs.map((ti, i) => ({
    name: AUTHORS[(h + i * 11) % AUTHORS.length],
    stars: 5,
    text: kind === 'road'
      ? String(pool[ti] || '').split('{place}').join(forms.place)
      : fillTokens(pool[ti], forms),
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
var INNSER_GEO_PLACE_FORMS=${JSON.stringify(PLACE_FORMS)};
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
function innserCapFirst(s){
  s=String(s||'');
  return s? s.charAt(0).toUpperCase()+s.slice(1):s;
}
function innserPlaceForms(lang,slug,placeName){
  var pack=INNSER_GEO_PLACE_FORMS[slug];
  var f=pack&&(pack[lang]||pack.pl);
  if(f) return f;
  var place=String(placeName||slug||'').trim();
  var inn=lang==='en'?('in '+place):lang==='pl'?('w '+place):lang==='ua'?('у '+place):('в '+place);
  var fr=lang==='en'?('from '+place):lang==='pl'?('z '+place):lang==='ua'?('з '+place):('из '+place);
  return {place:place,in:inn,from:fr,gen:place};
}
function innserFillGeo(text,forms){
  var out=String(text||'');
  out=out.split('{in|cap}').join(innserCapFirst(forms.in));
  out=out.split('{from|cap}').join(innserCapFirst(forms.from));
  out=out.split('{in}').join(forms.in);
  out=out.split('{from}').join(forms.from);
  out=out.split('{gen}').join(forms.gen);
  out=out.split('{place}').join(forms.place);
  return out;
}
function innserGeoGoogleReviews(lang,placeName,slug,kind){
  var pack=(kind==='road'?INNSER_GEO_ROAD:INNSER_GEO_LAND);
  var pool=pack[lang]||pack.pl;
  var idxs=innserPickThree(slug,pool.length);
  var h=innserHashSlug(slug);
  var forms=kind==='road'
    ? {place:String(placeName||slug||'').trim(),in:'',from:'',gen:''}
    : innserPlaceForms(lang,slug,placeName);
  var out=[];
  for(var i=0;i<3;i++){
    var raw=pool[idxs[i]]||'';
    out.push({
      name:INNSER_GEO_REVIEW_AUTHORS[(h+i*11)%INNSER_GEO_REVIEW_AUTHORS.length],
      stars:5,
      text:kind==='road'?String(raw).split('{place}').join(forms.place):innserFillGeo(raw,forms)
    });
  }
  return out;
}
`;
}

void DISTRICTS;
