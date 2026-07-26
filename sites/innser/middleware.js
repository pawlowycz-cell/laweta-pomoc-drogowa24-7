/**
 * Bare `/` language gate (SEO-safe):
 * - Crawlers → 301 /pl/ (x-default)
 * - Humans → 302 by cookie `innser_lang`, else Accept-Language, else /pl/
 *
 * Must NOT be overridden by vercel.json `/` → `/pl/` (redirects run before middleware).
 */
export const config = {
  matcher: '/',
};

const BOT_RE =
  /Googlebot|Google-InspectionTool|GoogleOther|AdsBot-Google|Mediapartners-Google|Storebot-Google|bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Applebot|SemrushBot|AhrefsBot|MJ12bot|DotBot|PetalBot|Bytespider|facebookexternalhit|Twitterbot|LinkedInBot|GPTBot|ChatGPT-User|anthropic-ai|ClaudeBot|CCBot/i;

function localeFromCookie(cookieHeader) {
  if (!cookieHeader) return null;
  const m = cookieHeader.match(/(?:^|;\s*)innser_lang=(pl|en|ru|uk|ua)\b/i);
  if (!m) return null;
  const v = m[1].toLowerCase();
  return v === 'ua' ? 'uk' : v;
}

function localeFromAcceptLanguage(header) {
  if (!header) return null;
  const tags = header.split(',').map((s) => s.trim().split(';')[0].toLowerCase());
  for (const nav of tags) {
    if (nav.startsWith('ru')) return 'ru';
    if (nav.startsWith('uk') || nav.startsWith('ua')) return 'uk';
    if (nav.startsWith('pl')) return 'pl';
    if (nav.startsWith('en')) return 'en';
  }
  return null;
}

export default function middleware(request) {
  const ua = request.headers.get('user-agent') || '';
  const isBot = BOT_RE.test(ua);

  let dest = '/pl/';
  let status = 301;

  if (!isBot) {
    status = 302;
    const fromCookie = localeFromCookie(request.headers.get('cookie') || '');
    const fromAl = localeFromAcceptLanguage(request.headers.get('accept-language') || '');
    const loc = fromCookie || fromAl || 'pl';
    dest = `/${loc}/`;
  }

  return Response.redirect(new URL(dest, request.url), status);
}
