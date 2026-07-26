#!/usr/bin/env node
/**
 * One-shot: fix Vercel Domains so legacy hosts 301 → www.warszawa-laweta.com in ONE hop
 * (no apex→www 308 on laweta-pomoc-*), and brand apex uses permanent 301 → www.
 *
 * Usage:
 *   export VERCEL_TOKEN=...   # https://vercel.com/account/tokens
 *   node scripts/fix-vercel-domain-redirects.mjs
 *
 * Optional:
 *   VERCEL_PROJECT=innser-warszawa-laweta
 *   VERCEL_TEAM_ID=team_xxx
 */
import https from 'https';

const TOKEN = process.env.VERCEL_TOKEN || process.env.VERCEL_ACCESS_TOKEN;
const TARGET = 'www.warszawa-laweta.com';
const PROJECT_HINT = (process.env.VERCEL_TEAM_ID && process.env.VERCEL_PROJECT) || process.env.VERCEL_PROJECT || '';
const TEAM = process.env.VERCEL_TEAM_ID || '';

if (!TOKEN) {
  console.error('Missing VERCEL_TOKEN. Create one at https://vercel.com/account/tokens');
  process.exit(1);
}

function req(method, path, body) {
  const q = TEAM ? (path.includes('?') ? `&teamId=${TEAM}` : `?teamId=${TEAM}`) : '';
  const url = path + (TEAM ? (path.includes('?') ? `&teamId=${encodeURIComponent(TEAM)}` : `?teamId=${encodeURIComponent(TEAM)}`) : '');
  const payload = body ? JSON.stringify(body) : null;
  return new Promise((resolve, reject) => {
    const r = https.request(
      {
        hostname: 'api.vercel.com',
        path: url,
        method,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'Content-Type': 'application/json',
          ...(payload ? { 'Content-Length': Buffer.byteLength(payload) } : {}),
        },
      },
      (res) => {
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => {
          let json = {};
          try {
            json = data ? JSON.parse(data) : {};
          } catch {
            json = { raw: data };
          }
          resolve({ status: res.statusCode, json });
        });
      }
    );
    r.on('error', reject);
    if (payload) r.write(payload);
    r.end();
  });
}

async function main() {
  const me = await req('GET', '/v2/user');
  if (me.status >= 400) {
    console.error('Auth failed', me.status, me.json);
    process.exit(1);
  }
  console.log('User OK:', me.json.user?.username || me.json.user?.email);

  const projects = await req('GET', '/v9/projects?limit=100');
  const list = projects.json.projects || [];
  let project =
    list.find((p) => p.name === process.env.VERCEL_PROJECT) ||
    list.find((p) => /innser|laweta|warszawa|pomoc|drogowa/i.test(p.name || ''));
  if (!project) {
    console.error('Project not found. Set VERCEL_PROJECT=...');
    console.error(
      'Available:',
      list.map((p) => p.name).join(', ')
    );
    process.exit(1);
  }
  console.log('Project:', project.name, project.id);

  const domainsRes = await req('GET', `/v9/projects/${project.id}/domains`);
  const domains = domainsRes.json.domains || [];
  console.log(
    'Current domains:',
    domains.map((d) => `${d.name} redirect=${d.redirect || '-'} status=${d.redirectStatusCode || '-'}`).join('\n  ')
  );

  const want = [
    { name: 'laweta-pomoc-drogowa24-7.com', redirect: TARGET, redirectStatusCode: 301 },
    { name: 'www.laweta-pomoc-drogowa24-7.com', redirect: TARGET, redirectStatusCode: 301 },
    { name: 'warszawa-laweta.com', redirect: TARGET, redirectStatusCode: 301 },
    // primary stays without redirect
  ];

  for (const w of want) {
    const existing = domains.find((d) => d.name === w.name);
    if (!existing) {
      console.warn('SKIP missing domain on project:', w.name);
      continue;
    }
    if (existing.redirect === w.redirect && Number(existing.redirectStatusCode) === w.redirectStatusCode) {
      console.log('OK already', w.name, '→', w.redirect, w.redirectStatusCode);
      continue;
    }
    const patch = await req('PATCH', `/v9/projects/${project.id}/domains/${w.name}`, {
      redirect: w.redirect,
      redirectStatusCode: w.redirectStatusCode,
    });
    console.log('PATCH', w.name, patch.status, patch.json.redirect || patch.json.error || patch.json);
  }

  // Ensure primary www has NO redirect away
  const primary = domains.find((d) => d.name === TARGET);
  if (primary && primary.redirect) {
    console.log('Clearing redirect on primary', TARGET);
    const patch = await req('PATCH', `/v9/projects/${project.id}/domains/${TARGET}`, {
      redirect: null,
    });
    console.log('PATCH primary', patch.status, patch.json.redirect, patch.json.error || 'ok');
  }

  console.log('\nDone. Verify:');
  console.log('  curl -sI https://laweta-pomoc-drogowa24-7.com/ | head -5');
  console.log('  # expect: 301 Location: https://www.warszawa-laweta.com/   (single hop)');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
