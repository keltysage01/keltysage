// Shared bits for the podcast email list. Files starting with _ are not routes.
const API = 'https://api.resend.com';
const SEGMENT_NAME = 'Robot Break Room podcast';

const headers = () => ({ Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' });

async function resend(path, opts = {}) {
  const r = await fetch(API + path, { ...opts, headers: headers() });
  const text = await r.text();
  let body = null;
  try { body = JSON.parse(text); } catch { body = { raw: text }; }
  return { ok: r.ok, status: r.status, body };
}

// The podcast segment: PODCAST_SEGMENT_ID if set, else found by name, else created once.
let segmentCache = null;
async function podcastSegment() {
  if (process.env.PODCAST_SEGMENT_ID) return process.env.PODCAST_SEGMENT_ID;
  if (segmentCache) return segmentCache;
  const list = await resend('/segments');
  const found = list.ok && (list.body.data || []).find(s => s.name === SEGMENT_NAME);
  if (found) return (segmentCache = found.id);
  const made = await resend('/segments', { method: 'POST', body: JSON.stringify({ name: SEGMENT_NAME }) });
  if (!made.ok) throw new Error(`segment create failed ${made.status}`);
  return (segmentCache = made.body.id);
}

module.exports = { resend, podcastSegment, SEGMENT_NAME };
