/**
 * Crawlable service cards + per-page Service/FAQ JSON-LD for INNSER build.
 */

const SITE = 'https://www.warszawa-laweta.com';

function stripHtmlForSeo(s) {
  if (!s) return '';
  return String(s)
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function decodeJsTranslation(s) {
  if (!s) return '';
  return String(s)
    .replace(/\\n/g, '\n')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');
}

/** Mirrors SVCS + getSvcPhoto defaults in innser-v6.html */
export const SVC_DEFS = [
  { id: 'svc1', icon: '🚨', img: null },
  { id: 'svc2', icon: '🔌', img: '/assets/gallery/svc2-odpalanie-na-kable-warszawa-innser.jpg' },
  { id: 'svc3', icon: '🔋', img: '/assets/gallery/svc3-odpalanie-z-boostera-warszawa-innser.jpg' },
  { id: 'svc4', icon: '🛞', img: '/assets/gallery/svc4-wymiana-kola-warszawa-innser.jpg' },
  { id: 'svc5', icon: '🔑', img: '/assets/gallery/svc5-awaryjne-otwieranie-auta-warszawa-innser.jpg' },
  { id: 'svc6', icon: '🚛', img: '/assets/gallery/svc6-laweta-noca-policja-suv-warszawa-innser.jpg' },
  { id: 'svc7', icon: '💵', img: '/assets/gallery/svc7-skup-aut-laweta-noca-warszawa-innser.jpg' },
  { id: 'svc8', icon: '♻️', img: '/assets/gallery/svc8-skup-auta-na-czesci-laweta-warszawa-innser.jpg' },
  { id: 'svc9', icon: '🅿️', img: '/assets/gallery/svc9-laweta-parking-podziemny-dom-warszawa-innser.jpg' },
];

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/"/g, '&quot;');
}

function plain(s) {
  return stripHtmlForSeo(decodeJsTranslation(s || ''));
}

/**
 * @param {(langCl: string, field: string) => string|null} extractField
 */
export function buildStaticSvcCardsHtml(extractField, langCl, pathSeg, from) {
  const cta = plain(extractField(langCl, 'cta_btn')) || '506-001-057';
  return SVC_DEFS.map((s) => {
    const title = plain(extractField(langCl, `${s.id}_t`)) || s.id;
    const desc = plain(extractField(langCl, `${s.id}_d`)) || '';
    const href = `/${pathSeg}/${s.id}/`;
    const imgHTML = s.img
      ? `<div class="svcc-img"><img src="${esc(s.img)}" alt="${esc(title)} Warszawa INNSER" width="360" height="220" loading="lazy"></div>`
      : `<div class="svcc-img svcc-img-icon">${s.icon}</div>`;
    const phone = `<a href="tel:+48506001057" class="svcc-phone" onclick="event.stopPropagation()">📞 <span data-t="cta_btn">${esc(cta)}</span></a>`;
    return (
      `<article class="svcc rv svc-clickable" data-page="${s.id}" data-svc-from="${esc(from)}">` +
      imgHTML +
      `<div class="svcc-body"><h3><a href="${href}" data-t="${s.id}_t">${esc(title)}</a></h3>` +
      `<p data-t="${s.id}_d">${esc(desc)}</p>${phone}</div></article>`
    );
  }).join('');
}

/** Compact link list for /services/ hub (extra crawl path). */
export function buildSvcHubLinksHtml(extractField, langCl, pathSeg) {
  const items = SVC_DEFS.map((s) => {
    const title = plain(extractField(langCl, `${s.id}_t`)) || s.id;
    return `<li><a href="/${pathSeg}/${s.id}/">${esc(title)}</a></li>`;
  }).join('');
  const label =
    {
      pl: 'Wszystkie usługi',
      en: 'All services',
      ru: 'Все услуги',
      ua: 'Усі послуги',
    }[langCl] || 'Services';
  return `<nav class="svc-hub-links" aria-label="${esc(label)}"><ul class="dist-links">${items}</ul></nav>`;
}

export function injectStaticSvcGrids(html, extractField, langCl, pathSeg) {
  const homeCards = buildStaticSvcCardsHtml(extractField, langCl, pathSeg, 'home');
  const fullCards = buildStaticSvcCardsHtml(extractField, langCl, pathSeg, 'services');
  const hubLinks = buildSvcHubLinksHtml(extractField, langCl, pathSeg);
  html = html.replace(
    /<div class="svc-g" id="svc-grid-home"><\/div>/,
    `<div class="svc-g" id="svc-grid-home">${homeCards}</div>`
  );
  html = html.replace(
    /<div class="svc-g" id="svc-grid-full"><\/div>/,
    `<div class="svc-g" id="svc-grid-full">${fullCards}</div>\n  ${hubLinks}`
  );
  return html;
}

/** Remove global head Service schemas (lockout + generic) — wrong on most URLs. */
export function stripGlobalServiceJsonLd(html) {
  return html.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>\s*/g,
    (full, body) => {
      if (!/"@type"\s*:\s*"Service"/.test(body)) return full;
      // Keep only if we already injected a page-scoped one marked later — strip all bare Service here.
      return '';
    }
  );
}

export function buildSvcServiceJsonLd(extractField, langCl, pathSeg, svcId) {
  const name =
    plain(extractField(langCl, `${svcId}_seo_title`)) ||
    plain(extractField(langCl, `${svcId}_t`));
  const description =
    plain(extractField(langCl, `${svcId}_seo_desc`)) ||
    plain(extractField(langCl, `${svcId}_d`));
  if (!name) return null;
  const url = `${SITE}/${pathSeg}/${svcId}/`;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description: description || name,
    url,
    provider: {
      '@type': 'LocalBusiness',
      name: 'INNSER Pomoc Drogowa',
      telephone: '+48506001057',
      url: SITE,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Warszawa',
        addressRegion: 'Mazowieckie',
        addressCountry: 'PL',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Warszawa',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: url,
      servicePhone: {
        '@type': 'ContactPoint',
        telephone: '+48506001057',
        contactType: 'customer service',
        availableLanguage: ['Polish', 'Russian', 'English', 'Ukrainian'],
      },
    },
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  };
}

export function buildSvcFaqJsonLd(extractField, langCl, svcId) {
  const items = [];
  for (let i = 1; i <= 6; i++) {
    const q = extractField(langCl, `${svcId}_faq${i}q`);
    const a = extractField(langCl, `${svcId}_faq${i}a`);
    if (!q || !a) continue;
    const qPlain = plain(q);
    const aPlain = plain(a);
    if (!qPlain || !aPlain) continue;
    items.push({
      '@type': 'Question',
      name: qPlain,
      acceptedAnswer: { '@type': 'Answer', text: aPlain },
    });
  }
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items,
  };
}

export function injectSvcPageJsonLd(html, extractField, langCl, pathSeg, svcId) {
  html = stripGlobalServiceJsonLd(html);
  const chunks = [];
  const service = buildSvcServiceJsonLd(extractField, langCl, pathSeg, svcId);
  if (service) {
    chunks.push(
      `<script type="application/ld+json">${JSON.stringify(service)}</script>`
    );
  }
  const faq = buildSvcFaqJsonLd(extractField, langCl, svcId);
  if (faq) {
    chunks.push(
      `<script type="application/ld+json">${JSON.stringify(faq)}</script>`
    );
  }
  if (!chunks.length) return html;
  return html.replace('</head>', `${chunks.join('\n')}\n</head>`);
}

/** Drop blog Article JSON-LD from non-blog pages (noise on svc/geo URLs). */
export function stripArticleJsonLd(html) {
  return html.replace(
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>\s*/g,
    (full, body) => (/"@type"\s*:\s*"Article"/.test(body) ? '' : full)
  );
}

/** On non-svc deep routes: drop misleading lockout/generic Service from head. */
export function stripServiceJsonLdOnDeepRoute(html, keepPageId) {
  if (keepPageId && /^svc\d+$/.test(keepPageId)) return html;
  return stripGlobalServiceJsonLd(html);
}
