// Tuesday email for The Robot Break Room. Vercel Cron calls this once a week (see vercel.json).
//
// OFF SWITCH: it only emails the podcast list when PODCAST_EMAIL_LIVE is exactly "on".
// Anything else is a dry run: nothing goes to the list, and if PODCAST_EMAIL_TEST_TO is set
// one preview goes to that single address. Turn it off by deleting PODCAST_EMAIL_LIVE and redeploying.
//
// Calls:  GET /api/podcast-weekly               cron run: the episode released in the last 24 hours
//         GET /api/podcast-weekly?ep=2          dry run only: preview a given episode
//         GET /api/podcast-weekly?mode=status   segment, sending domain, switch state; sends nothing
// Every call needs  Authorization: Bearer <CRON_SECRET>  (Vercel Cron adds it on its own).
const { resend, podcastSegment, SEGMENT_NAME } = require('./_podcast');
const COPY = require('./_podcast-emails.json');

const SITE = 'https://keltysage.com';
const FROM = 'Boot at Kelty Sage <podcast@keltysage.com>';
const TEST_FROM = 'Kelty Sage <onboarding@resend.dev>';
const REPLY_TO = 'keltysage01@gmail.com';
const DAY = 24 * 60 * 60 * 1000;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const font = "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";

function copyFor(ep) {
  if (COPY[ep.n]) return COPY[ep.n];
  const mins = Math.round((ep.secs || 900) / 60);
  return {
    subject: `New Robot Break Room: ${ep.title}`,
    preview: `${mins} minutes with Boot and ${ep.guests}.`,
    paras: ['Hey!', 'New episode of The Robot Break Room is up.', ep.summary || '', `It's ${mins} minutes. Good for a walk.`].filter(Boolean),
  };
}

function build(ep) {
  const c = copyFor(ep);
  const url = `${SITE}/academy/podcast/?ep=${ep.n}`;
  const p = c.paras.map(t => `<p style="margin:0 0 14px 0;">${esc(t)}</p>`).join('\n        ');
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(c.subject)}</title></head>
<body style="margin:0;padding:0;background:#f4f7f7;">
<div style="display:none;max-height:0;overflow:hidden;">${esc(c.preview)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f7f7;">
  <tr><td align="center" style="padding:24px 12px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background:#ffffff;border:1px solid #e1e8e8;border-radius:20px;">
      <tr><td style="padding:24px 24px 0 24px;">
        <a href="${url}"><img src="${SITE}/academy/podcast/art/cover-800.jpg" width="472" alt="The Robot Break Room podcast" style="display:block;width:100%;max-width:472px;height:auto;border-radius:14px;border:0;"></a>
      </td></tr>
      <tr><td style="padding:22px 24px 6px 24px;font-family:${font};color:#12181c;font-size:17px;line-height:1.55;">
        <p style="margin:0 0 14px 0;font-family:Menlo,Consolas,monospace;font-size:13px;color:#2f8f78;">&gt;_ episode ${ep.n}</p>
        ${p}
      </td></tr>
      <tr><td align="center" style="padding:0 24px 8px 24px;">
        <a href="${url}" style="display:inline-block;background:#12181c;color:#ffffff;font-family:${font};font-size:17px;font-weight:700;text-decoration:none;padding:14px 28px;border-radius:14px;">Listen to episode ${ep.n}</a>
      </td></tr>
      <tr><td style="padding:18px 24px 24px 24px;font-family:${font};color:#12181c;font-size:17px;line-height:1.55;">
        <p style="margin:0 0 14px 0;">New one every Tuesday.</p>
        <p style="margin:0 0 14px 0;">Kelty</p>
        <p style="margin:0;color:#3d4a50;font-size:15px;">P.S. Robot voices are AI. The opinions about me are, unfortunately, real.</p>
      </td></tr>
    </table>
    <p style="font-family:${font};color:#7b8a90;font-size:13px;line-height:1.5;margin:16px 0 0 0;">You're getting this because you signed up at keltysage.com.<br><a href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#7b8a90;">Unsubscribe</a></p>
  </td></tr>
</table>
</body></html>`;
  const text = [...c.paras, `Listen here: ${url}`, 'New one every Tuesday.', 'Kelty',
    'P.S. Robot voices are AI. The opinions about me are, unfortunately, real.',
    '---', "You're getting this because you signed up at keltysage.com. Unsubscribe: {{{RESEND_UNSUBSCRIBE_URL}}}"].join('\n\n');
  return { subject: c.subject, html, text };
}

async function episodes() {
  const r = await fetch(`${SITE}/academy/podcast/episodes.json`, { cache: 'no-store' });
  if (!r.ok) throw new Error(`episodes.json ${r.status}`);
  return r.json();
}

async function sendingDomain() {
  const d = await resend('/domains');
  const all = d.ok ? (d.body.data || []) : [];
  const mine = all.find(x => x.name === 'keltysage.com');
  return { verified: !!mine && mine.status === 'verified', status: mine ? mine.status : 'not added', all: all.map(x => `${x.name}: ${x.status}`) };
}

module.exports = async function handler(req, res) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.authorization !== `Bearer ${secret}`) return res.status(401).json({ ok: false });
  if (!process.env.RESEND_API_KEY) return res.status(503).json({ ok: false, error: 'RESEND_API_KEY not set' });

  const live = process.env.PODCAST_EMAIL_LIVE === 'on';
  const testTo = process.env.PODCAST_EMAIL_TEST_TO || '';
  const q = req.query || {};

  try {
    const segmentId = await podcastSegment();
    const domain = await sendingDomain();

    if (q.mode === 'status') {
      return res.status(200).json({ ok: true, live, testTo: !!testTo, segment: { id: segmentId, name: SEGMENT_NAME }, domain });
    }

    const all = await episodes();
    const now = Date.now();
    let ep;
    if (q.ep) {
      // previews only; a manual call can never email the list
      if (live) return res.status(400).json({ ok: false, error: 'ep previews only run while the switch is off' });
      ep = all.find(e => String(e.n) === String(q.ep));
    } else {
      ep = all.find(e => { const t = Date.parse(e.date); return t <= now && now - t < DAY; });
    }
    if (!ep) return res.status(200).json({ ok: true, live, sent: false, note: 'no episode released in the last 24 hours' });

    const mail = build(ep);
    const name = `rbr-ep${String(ep.n).padStart(2, '0')}`;

    if (!live) {
      console.log(`DRY RUN ${name}: would send "${mail.subject}" to segment ${segmentId}`);
      if (!testTo) return res.status(200).json({ ok: true, live, dryRun: true, would: { name, subject: mail.subject, segmentId } });
      const sent = await resend('/emails', {
        method: 'POST',
        body: JSON.stringify({
          from: domain.verified ? FROM : TEST_FROM, to: [testTo], reply_to: REPLY_TO,
          subject: `[TEST, not sent to the list] ${mail.subject}`,
          html: mail.html.replace(/\{\{\{RESEND_UNSUBSCRIBE_URL\}\}\}/g, '#'),
          text: mail.text.replace(/\{\{\{RESEND_UNSUBSCRIBE_URL\}\}\}/g, '#'),
        }),
      });
      let lastEvent = null;
      if (sent.ok && sent.body.id) {
        await new Promise(r => setTimeout(r, 4000));
        const got = await resend(`/emails/${sent.body.id}`);
        lastEvent = got.ok ? got.body.last_event : `lookup ${got.status}`;
      }
      return res.status(200).json({ ok: sent.ok, live, dryRun: true, would: { name, subject: mail.subject, segmentId },
        test: { status: sent.status, id: sent.body.id || null, lastEvent, error: sent.ok ? null : sent.body } });
    }

    // live: the list gets it once per episode, ever
    if (!domain.verified) return res.status(409).json({ ok: false, error: 'keltysage.com is not a verified sending domain yet' });
    const prior = await resend('/broadcasts');
    if (!prior.ok) return res.status(502).json({ ok: false, error: 'could not list broadcasts', status: prior.status });
    if ((prior.body.data || []).some(b => b.name === name)) {
      return res.status(200).json({ ok: true, live, sent: false, note: `${name} already exists, not sending twice` });
    }
    const made = await resend('/broadcasts', {
      method: 'POST',
      body: JSON.stringify({ segment_id: segmentId, from: FROM, reply_to: REPLY_TO, subject: mail.subject,
        html: mail.html, text: mail.text, name, send: true }),
    });
    console.log(`LIVE ${name}: broadcast ${made.status} ${made.body.id || ''}`);
    return res.status(made.ok ? 200 : 502).json({ ok: made.ok, live, sent: made.ok, name, broadcast: made.body.id || null });
  } catch (e) {
    console.error('podcast-weekly failed', e);
    return res.status(500).json({ ok: false, error: String(e.message || e) });
  }
};
