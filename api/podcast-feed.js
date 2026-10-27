// The Robot Break Room podcast feed, served at /academy/podcast/feed.xml (rewrite in vercel.json).
// Reads academy/podcast/episodes.json from the live site and lists only episodes whose release
// time has passed, so each Tuesday's episode shows up in podcast apps on its own, with no rebuild.
// Not submitted to Apple or Spotify; that is Kelty's call.
const SITE = 'https://www.keltysage.com';
const PAGE = `${SITE}/academy/podcast/`;

const esc = t => String(t == null ? '' : t)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
const hms = s => { s = Math.round(s || 0); return `${Math.floor(s / 3600)}:${String(Math.floor(s / 60) % 60).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; };

module.exports = async function handler(req, res) {
  let all = [];
  try {
    const r = await fetch(`${PAGE}episodes.json`, { cache: 'no-store' });
    if (r.ok) all = await r.json();
  } catch (e) { console.error('episodes.json fetch failed', e); }
  const now = Date.now();
  const out = all.filter(e => Date.parse(e.date) <= now).sort((a, b) => b.n - a.n);

  const items = out.map(e => {
    const url = `${PAGE}${e.file}`;
    const notes = `${e.summary || ''}\n\nListen on the web: ${PAGE}?ep=${e.n}\nMeet the robots: ${SITE}/robots`;
    return `    <item>
      <title>${esc(`Episode ${e.n}: ${e.title}`)}</title>
      <description>${esc(notes)}</description>
      <itunes:summary>${esc(e.summary || '')}</itunes:summary>
      <link>${esc(`${PAGE}?ep=${e.n}`)}</link>
      <guid isPermaLink="false">robot-break-room-ep${String(e.n).padStart(2, '0')}</guid>
      <pubDate>${new Date(Date.parse(e.date)).toUTCString()}</pubDate>
      <enclosure url="${esc(url)}" length="${Number(e.bytes) || 0}" type="audio/mpeg"/>
      <itunes:duration>${hms(e.secs)}</itunes:duration>
      <itunes:episode>${e.n}</itunes:episode>
      <itunes:episodeType>full</itunes:episodeType>
      <itunes:explicit>false</itunes:explicit>
    </item>`;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>The Robot Break Room</title>
    <link>${PAGE}</link>
    <atom:link href="${PAGE}feed.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <description>A weekly podcast from Kelty Sage. Boot interviews the other AI robots about running a small business with Claude, one real idea at a time, and what they really think of their boss. New episode every Tuesday. Robot voices are AI.</description>
    <itunes:summary>Boot interviews the other AI robots about running a small business with Claude. New episode every Tuesday.</itunes:summary>
    <itunes:author>Kelty Sage</itunes:author>
    <itunes:owner><itunes:name>Kelty Sage</itunes:name><itunes:email>keltysage01@gmail.com</itunes:email></itunes:owner>
    <itunes:image href="${PAGE}art/cover-3000.jpg"/>
    <image><url>${PAGE}art/cover-800.jpg</url><title>The Robot Break Room</title><link>${PAGE}</link></image>
    <itunes:category text="Business"><itunes:category text="Entrepreneurship"/></itunes:category>
    <itunes:category text="Technology"/>
    <itunes:explicit>false</itunes:explicit>
    <itunes:type>episodic</itunes:type>
${items}
  </channel>
</rss>
`;
  res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
  // short cache so a Tuesday release shows up within the hour
  res.setHeader('Cache-Control', 'public, s-maxage=900, max-age=300');
  return res.status(200).send(xml);
};
