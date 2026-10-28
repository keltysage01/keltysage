#!/usr/bin/env python3
"""Build /robots and one page per robot from the cast and lesson files.

    python3 tools/build_robots.py

Source of truth lives in ~/keltysage-videos (robots/robots.json, robots/art,
scripts/lessons, out/lessons covers). Rerun this after those change.
Boot is the free robot: every prompt shows. Other robots show the steps,
the why and the picture, and keep the copy-paste prompts for the pack.
"""
import html, json, shutil
from pathlib import Path
from analytics import tag
from site_menu import swap as menu_swap

SRC = Path.home() / "keltysage-videos"
SITE = Path(__file__).resolve().parent.parent
OUT = SITE / "robots"
FREE = {"boot"}
PRICE = "price coming soon"
BUNDLE = None
esc = html.escape

def load():
    cast = json.loads((SRC / "robots/robots.json").read_text())["robots"]
    extras = json.loads((SITE / "data/robot_extras.json").read_text())
    global PRICE
    PRICE = extras.get("price") or "price coming soon"
    global BUNDLE
    BUNDLE = extras.get("bundle_price")
    for r in cast:
        r.update(extras["robots"].get(r["id"], {}))
        r.setdefault("slug", r["name"].lower().replace(" ", "-"))
    lessons = {}
    for f in sorted((SRC / "scripts/lessons").glob("*.json")):
        d = json.loads(f.read_text())
        d["slug"] = f.stem
        lessons.setdefault(d["host"], []).append(d)
    return cast, lessons

HEAD = """<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="icon" href="/brand/logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
:root{--ink:#12181c;--ink-2:#3d4a50;--ink-3:#7b8a90;--bg:#f4f7f7;--card:#fff;--line:#e1e8e8;--sea:#9ed9c7;--sea-soft:#e3f4ef;--teal:#2f9a94;
  --green:#b9f09c;--pink:#ff9fd6;--blue:#9ccff8;--sans:'Geist',system-ui,sans-serif;--mono:'JetBrains Mono',ui-monospace,monospace}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);color:var(--ink);font-family:var(--sans);line-height:1.55;-webkit-font-smoothing:antialiased;overflow-x:hidden}
img{max-width:100%;display:block}a{color:inherit}
.wrap{max-width:1140px;margin:0 auto;padding:0 20px}
.eb{font-family:var(--mono);font-size:14px;color:var(--teal)}
h1,h2,h3{font-weight:600;letter-spacing:-.03em;line-height:1.08}
.nav{position:relative;z-index:20}
.nav .wrap{display:flex;align-items:center;gap:12px;height:68px}
.brand{display:flex;align-items:center;gap:10px;text-decoration:none;font-weight:600;font-size:19px;letter-spacing:-.02em;white-space:nowrap}
.brand img{width:44px}
.brand .sep{flex:none;width:1.5px;height:20px;background:#aebcbc;margin:0 2px}
.brand .tag{font-weight:500;font-size:15px;color:var(--ink-2)}
.links{margin-left:auto;display:flex;align-items:center;gap:26px}
.links a{text-decoration:none;font-size:15px;color:var(--ink-2)}
.btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;border:0;cursor:pointer;text-decoration:none;font-family:var(--sans);font-weight:600;font-size:16px;border-radius:999px;padding:14px 24px;white-space:nowrap}
.btn-ink,.links a.btn-ink{background:var(--ink);color:#fff}
.btn-line{background:var(--card);color:var(--ink);border:1px solid var(--line)}
.nav .btn{padding:10px 18px;font-size:14px}
section{padding:56px 0}
footer{padding:40px 0 56px;border-top:1px solid var(--line)}
footer .wrap{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
footer p{font-size:14px;color:var(--ink-3);width:100%}
@media (max-width:600px){.links a:not(.btn){display:none}.brand{font-size:16px;gap:8px}.brand img{width:34px}.brand .tag{font-size:12.5px}.brand .sep{height:16px}.nav .btn{padding:9px 14px;font-size:13px}section{padding:52px 0}}
@media (max-width:600px){.nav .brand .sur,.nav .lg{display:none}}
@media (max-width:359px){.nav .brand .sep,.nav .brand .tag{display:none}}
.mnav{display:none}
@media (max-width:600px){.mnav{display:flex;justify-content:space-around;gap:6px;padding:0 16px 10px;max-width:420px;margin:0 auto}.mnav a{font-size:14px;color:var(--ink-2);text-decoration:none;padding:6px 2px}}
html,body{overflow-x:clip}
{css}
</style></head><body>
<header class="nav"><div class="wrap">
  <a class="brand" href="/"><img src="/brand/logo.png" alt="">Kelty<span class="sep" aria-hidden="true"></span><span class="tag">AI Business Coach</span></a>
  <nav class="links"><a href="/robots">Robots</a><a href="/academy/">Academy</a><a href="/#join">Pricing</a><a href="/cheatsheets">Cheat sheets</a><a class="btn btn-ink" href="/academy/"><span class="lg">Robot </span>Academy</a></nav>
</div>
<nav class="mnav" aria-label="Menu"><a href="/">Home</a><a href="/robots">Robots</a><a href="/academy/">Academy</a><a href="/#join">Pricing</a></nav>
</header>
<main>
"""

FOOT = """</main>
<footer><div class="wrap">
  <a class="brand" href="/"><img src="/brand/logo.png" alt="">Kelty Sage</a>
  <nav class="links"><a href="/cheatsheets">Free cheat sheets</a><a href="https://www.tiktok.com/@keltysage" target="_blank" rel="noopener">TikTok</a><a href="mailto:keltysage01@gmail.com">Contact</a></nav>
  <p>I type it. AI does it.</p>
</div></footer>
{js}
</body></html>
"""

GRID_CSS = """
.hero{padding:48px 0 8px}
.hero h1{font-size:56px;margin-top:10px;max-width:820px}
.hero p{font-size:20px;color:var(--ink-2);margin-top:16px;max-width:660px}
.team{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:8px}
.bot{background:var(--card);border:1px solid var(--line);border-radius:26px;padding:24px;text-decoration:none;display:flex;flex-direction:column;
  border-top:6px solid var(--c);transition:transform .2s,box-shadow .2s}
.bot:hover{transform:translateY(-2px);box-shadow:0 14px 36px rgba(18,24,28,.08)}
.bot .top{display:flex;align-items:center;gap:16px}
.bot .art{flex:none;width:92px;height:92px;border-radius:22px;background:var(--soft);display:grid;place-items:center}
.bot .art img{width:78px;height:78px}
.bot .job{font-family:var(--mono);font-size:12.5px;color:var(--ink-3)}
.bot h2{font-size:28px;margin-top:2px}
.bot .teaches{font-size:16px;color:var(--ink-2);margin-top:16px}
.bot .quote{margin-top:14px;font-size:15px;font-weight:600;background:var(--soft);border-radius:12px;padding:8px 12px}
.hire{list-style:none;margin-top:14px;display:flex;flex-direction:column;gap:6px;background:var(--soft);border-radius:14px;padding:12px 14px}
.hire li{font-size:14.5px;color:var(--ink-2);padding-left:18px;position:relative;line-height:1.4}
.hire li:before{content:">";position:absolute;left:0;font-family:var(--mono);color:var(--teal)}
.bot .go{margin-top:auto;padding-top:18px;font-weight:600;font-size:15px;display:flex;justify-content:space-between}
.bot .go i{font-style:normal;font-family:var(--mono);font-size:12.5px;font-weight:500;color:var(--teal);background:var(--sea-soft);padding:3px 10px;border-radius:999px}
.coach{grid-column:1/-1;display:flex;align-items:center;gap:24px;background:linear-gradient(135deg,#e7f8f2,#f6efff);border:1px solid #d6ece6;border-radius:26px;padding:22px 26px}
.coach img{width:92px;height:92px;border-radius:50%;object-fit:cover;border:4px solid #fff}
.coach h2{font-size:26px}.coach p{color:var(--ink-2);margin-top:4px}
@media (max-width:960px){.team{grid-template-columns:1fr 1fr}.hero h1{font-size:42px}}
@media (max-width:600px){.team{grid-template-columns:1fr}.hero h1{font-size:34px}.hero p{font-size:18px}.coach{flex-direction:column;align-items:flex-start;gap:14px}}
"""

BOT_CSS = """
.prof{padding:40px 0 0}
.prof .card{display:grid;grid-template-columns:220px 1fr;gap:32px;align-items:center;background:var(--card);border:1px solid var(--line);border-top:8px solid var(--c);border-radius:30px;padding:32px}
.prof .art{width:220px;height:220px;border-radius:40px;background:var(--soft);display:grid;place-items:center}
.prof .art img{width:180px;height:180px}
.prof .job{font-family:var(--mono);font-size:14px;color:var(--ink-3)}
.prof h1{font-size:54px;margin-top:4px}
.prof .intro{font-size:20px;color:var(--ink-2);margin-top:12px}
.pitchline{font-size:17px;font-weight:600;margin-top:10px}
.hirebox{margin-top:18px}.hirebox b{font-size:15px}
.hire{list-style:none;margin-top:8px;display:flex;flex-direction:column;gap:6px;background:var(--soft);border-radius:14px;padding:12px 14px}
.hire li{font-size:15.5px;color:var(--ink-2);padding-left:18px;position:relative;line-height:1.4}
.hire li:before{content:">";position:absolute;left:0;font-family:var(--mono);color:var(--teal)}
.prof dl{display:grid;grid-template-columns:auto 1fr;gap:8px 16px;margin-top:20px;font-size:16px}
.prof dt{font-family:var(--mono);font-size:13px;color:var(--teal);padding-top:2px}
.prof dd{color:var(--ink-2)}
.prof .quote{display:inline-block;margin-top:18px;font-weight:600;background:var(--soft);border-radius:12px;padding:8px 14px}
.acts{display:flex;align-items:center;gap:20px;flex-wrap:wrap;margin-top:22px}
.back{display:inline-block;font-size:15px;color:var(--ink-3);text-decoration:none}
.lesson{background:var(--card);border:1px solid var(--line);border-radius:28px;padding:30px;margin-top:24px}
.lesson .n{font-family:var(--mono);font-size:13px;color:var(--ink-3);display:flex;justify-content:space-between}
.lesson .n b{font-weight:500;color:var(--teal)}
.lesson h2{font-size:32px;margin-top:8px}
.lesson .sum{font-size:18px;color:var(--ink-2);margin-top:8px}
.lhead{display:grid;grid-template-columns:1fr 150px;gap:28px;align-items:start}
.cover{width:150px;border-radius:14px;box-shadow:0 12px 30px rgba(18,24,28,.12)}
.steps{list-style:none;margin-top:22px;display:flex;flex-direction:column;gap:14px}
.step{border:1px solid var(--line);border-radius:20px;padding:18px 20px;background:#fbfdfd}
.step h3{font-size:20px;display:flex;gap:12px;align-items:baseline}
.step h3 span{flex:none;width:30px;height:30px;border-radius:10px;background:var(--soft);display:grid;place-items:center;font-family:var(--mono);font-size:14px}
.step .note{color:var(--ink-2);margin-top:6px}
.why{margin-top:8px;font-size:16px;color:var(--ink-2)}
.why em,.skip em{font-style:normal;font-family:var(--mono);font-size:12.5px;color:var(--teal);margin-right:6px}
.pic{margin-top:10px;background:var(--sea-soft);border-radius:12px;padding:10px 14px;font-size:16px}
.skip{margin-top:8px;font-size:16px;color:#8a3d63;background:#fdeef6;border-radius:12px;padding:10px 14px}
.skip em{color:#c2477f}
.prompt{margin-top:12px;display:flex;align-items:stretch;background:#1b2a30;border-radius:12px;overflow:hidden}
.prompt code{flex:1;font-family:var(--mono);font-size:14px;color:#e6f4ef;padding:12px 14px;white-space:pre-wrap;word-break:break-word}
.prompt code:before{content:"> ";color:var(--sea)}
.prompt button{flex:none;font-family:var(--mono);font-size:12px;background:#24363e;color:var(--sea);border:0;padding:0 14px;cursor:pointer}
.prompt button:hover{background:#2e444d}
.out{margin-top:6px;font-size:14px;color:var(--ink-3);font-family:var(--mono)}
.locked{margin-top:12px;display:flex;align-items:center;gap:10px;font-family:var(--mono);font-size:13px;color:var(--ink-3);background:var(--bg);border:1px dashed #cdd9d9;border-radius:12px;padding:10px 14px}
.buy{margin-top:22px;display:flex;align-items:center;gap:16px;flex-wrap:wrap;background:var(--soft);border-radius:20px;padding:18px 22px}
.buy p{flex:1;min-width:220px;font-size:16px;color:var(--ink-2)}
.buy b{color:var(--ink)}
@media (max-width:900px){.prof .card{grid-template-columns:1fr;padding:24px}.prof .art{width:160px;height:160px;border-radius:30px}.prof .art img{width:130px;height:130px}.lhead{grid-template-columns:1fr}.cover{width:180px}}
.steps.minis{gap:8px;margin-top:16px}
.step.mini{padding:10px 14px;background:transparent}
.step.mini h3{font-size:16px;font-weight:500}
.step.mini h3 span{width:26px;height:26px;font-size:13px}
.lesson .watch{margin-top:16px;padding:11px 18px;font-size:15px}
.more{margin-top:16px}
.more summary{cursor:pointer;font-weight:600;font-size:15px;color:var(--ink);list-style:none;display:inline-flex;align-items:center;gap:8px;padding:10px 16px;border-radius:999px;background:var(--soft)}
.more summary::-webkit-details-marker{display:none}
.more summary:after{content:"+";font-family:var(--mono);color:var(--teal)}
.more[open] summary:after{content:"-"}
@media (max-width:600px){.cover{display:none}.steps{gap:10px}.step{padding:14px 16px}.lesson h2{font-size:23px}.lesson .sum{font-size:16px}.prof .card{padding:20px}.prof .art{width:120px;height:120px;border-radius:26px}.prof .art img{width:96px;height:96px}}
@media (max-width:600px){.prof h1{font-size:40px}.prof .intro{font-size:18px}.lesson{padding:20px}.lesson h2{font-size:25px}}
"""

MOTION_CSS = """
/* soft scroll motion, same feel as the homepage: fade and small rise, nothing bounces or pins */
.readbar{position:fixed;top:0;left:0;width:100%;height:3px;transform-origin:0 50%;transform:scaleX(0);background:linear-gradient(90deg,var(--sea),var(--teal));z-index:50;pointer-events:none}
@keyframes heroIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.hero .wrap>*,.prof .card,.prof .acts,.prof .art img,.prof .hire li{animation:heroIn .9s cubic-bezier(.22,1,.36,1) both}
.hero .wrap>:nth-child(2){animation-delay:.08s}
.hero .wrap>:nth-child(3){animation-delay:.18s}
.prof .art img{animation-delay:.25s}
.prof .acts{animation-delay:.2s}
.prof .hire li:nth-child(1){animation-delay:.4s}
.prof .hire li:nth-child(2){animation-delay:.5s}
.prof .hire li:nth-child(3){animation-delay:.6s}
.prof .hire li:nth-child(4){animation-delay:.7s}
.prof .hire li:nth-child(5){animation-delay:.8s}
.rv{opacity:0;transform:translateY(14px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--i,0) * 70ms)}
.rv.in{opacity:1;transform:none}
.rv.done{transition:transform .2s,box-shadow .2s}
.eb{min-height:1.55em}
.eb.typing:after{content:"";display:inline-block;width:7px;height:1em;background:currentColor;margin-left:3px;vertical-align:-2px;animation:blink 1.1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
@media (prefers-reduced-motion:reduce){.hero .wrap>*,.prof .card,.prof .acts,.prof .art img,.prof .hire li{animation:none}}
"""

MOTION_JS = """<script>
// soft scroll motion: reading bar, cards fade in as you reach them, little labels type themselves
(function(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const root = document.documentElement, bar = document.createElement('div');
  bar.className = 'readbar'; document.body.prepend(bar);
  let ticking = false;
  const onScroll = () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { bar.style.transform = 'scaleX(' + root.scrollTop / ((root.scrollHeight - root.clientHeight) || 1) + ')'; document.querySelectorAll('.rv:not(.in)').forEach(el => { if (el.getBoundingClientRect().top < innerHeight) { io.unobserve(el); el.classList.add('in', 'done'); } }); ticking = false; }); };
  addEventListener('scroll', onScroll, {passive:true});
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ const t = e.target; io.unobserve(t); t.classList.add('in'); setTimeout(() => t.classList.add('done'), 1400); } }), {threshold:.12});
  document.querySelectorAll('.team>*,.lesson,.buy').forEach(el => { el.style.setProperty('--i', [...el.parentElement.children].indexOf(el) % 3); el.classList.add('rv'); io.observe(el); });
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const eo = new IntersectionObserver(es => es.forEach(async e => { if (!e.isIntersecting) return; const el = e.target; eo.unobserve(el); el.classList.add('typing'); await wait(250); for (const ch of el.dataset.text){ el.textContent += ch; await wait(30); } await wait(900); el.classList.remove('typing'); }), {threshold:.8});
  document.querySelectorAll('.eb').forEach(el => { el.dataset.text = el.textContent; el.textContent = ''; eo.observe(el); });
  onScroll();
})();
</script>"""

COPY_JS = """<script>
document.querySelectorAll('.prompt button').forEach(b => b.addEventListener('click', async () => {
  const t = b.previousElementSibling.textContent;
  try { await navigator.clipboard.writeText(t); b.textContent = 'copied'; } catch (e) { b.textContent = 'select it'; }
  setTimeout(() => b.textContent = 'copy', 1600);
}));
</script>"""

def head(title, desc, css):
    return HEAD.replace("{title}", esc(title)).replace("{desc}", esc(desc)).replace("{css}", css + MOTION_CSS)

def foot(js=""):
    return FOOT.replace("{js}", js + MOTION_JS)

def soft(hexc):
    # a light tint of the robot's accent color for backgrounds
    h = hexc.lstrip("#")
    r, g, b = (int(h[i:i+2], 16) for i in (0, 2, 4))
    mix = lambda c: round(c + (255 - c) * .78)
    return f"#{mix(r):02x}{mix(g):02x}{mix(b):02x}"

def grid(cast, lessons):
    cards = []
    for r in cast:
        n = len(lessons.get(r["id"], []))
        tag = "free" if r["id"] in FREE else PRICE
        cards.append(f"""  <a class="bot" href="/robots/{r['slug']}" style="--c:{r['accent']};--soft:{soft(r['accent'])}">
    <div class="top"><div class="art"><img src="/robots/art/{r['id']}.svg" alt=""></div><div><div class="job">{esc(r['job'])}</div><h2>{esc(r['name'])}</h2></div></div>
    <p class="teaches">{esc(r.get('pitch') or 'Teaches ' + r['teaches'] + '.')}</p>
    <ul class="hire">{''.join('<li>' + esc(h) + '</li>' for h in r.get('hire', [])[:3])}</ul>
    <div class="go">Meet {esc(r['name'])} &rarr;<i>{tag}</i></div>
  </a>""")
    body = f"""<section class="hero"><div class="wrap">
  <div class="eb">&gt; meet my team of robots</div>
  <h1>Hire a robot for every job you never wanted.</h1>
  <p>Each robot takes one job off your plate and teaches you exactly how, one short lesson at a time. Start with Boot. It's free.</p>
</div></section>
<section style="padding-top:24px"><div class="wrap"><div class="team">
  <div class="coach"><img src="/kelty.jpg" alt="Kelty Sage"><div><div class="eb">&gt; the human</div><h2>Kelty, head coach</h2><p>I run a dog training company and built this team to run the jobs I never wanted. They do the work. I check it.</p></div></div>
{chr(10).join(cards)}
</div></div></section>
"""
    page = head("Meet My Team of Robots, Kelty Sage", "Nine AI robots, one job each. Hire a robot for every job you never wanted.", GRID_CSS) + body + foot()
    (OUT / "index.html").write_text(tag(menu_swap(page, "/robots")))

def steps_html(lesson, free):
    out = []
    for s in [x for x in lesson["scenes"] if x["type"] == "step"]:
        if not free:
            out.append(f'<li class="step mini"><h3><span>{s["n"]}</span>{esc(s["title"])}</h3></li>')
            continue
        parts = [f'<li class="step"><h3><span>{s["n"]}</span>{esc(s["title"])}</h3>']
        if s.get("note"): parts.append(f'<p class="note">{esc(s["note"])}</p>')
        if s.get("why"): parts.append(f'<p class="why"><em>why</em>{esc(s["why"])}</p>')
        if s.get("picture"): parts.append(f'<p class="pic">{esc(s["picture"])}</p>')
        if s.get("skip"): parts.append(f'<p class="skip"><em>if you skip it</em>{esc(s["skip"])}</p>')
        if free:
            for t in [t for t in s.get("turns", []) if t["p"]]:
                parts.append(f'<div class="prompt"><code>{esc(t["p"])}</code><button type="button">copy</button></div>')
                for o in t.get("o", []): parts.append(f'<p class="out">{esc(o)}</p>')
        elif any(t["p"] for t in s.get("turns", [])):
            parts.append('<div class="locked">&gt;_ the exact prompt for this step is in the pack</div>')
        parts.append("</li>")
        out.append("".join(parts))
    return "\n".join(out)

def robot_page(r, lessons, cast):
    free = r["id"] in FREE
    blocks = []
    for i, l in enumerate(lessons, 1):
        cover_src = SRC / "out/lessons" / f"{l['slug']}-cover.png"
        cover = ""
        if cover_src.exists():
            shutil.copy(cover_src, OUT / "covers" / cover_src.name)
            cover = f'<img class="cover" src="/robots/covers/{cover_src.name}" alt="Video cover for {esc(l["title"])}">'
        tag = "free" if free or i == 1 else "in the pack"
        if not free: cover = ""
        n = len([x for x in l["scenes"] if x["type"] == "step"])
        if free:
            label = "Show the step" if n == 1 else f"Show the {n} steps and prompts"
            steps_block = f'<details class="more"><summary>{label}</summary><ol class="steps">\n{steps_html(l, free)}\n</ol></details>'
        else:
            steps_block = f'<ol class="steps minis">\n{steps_html(l, free)}\n</ol>'
        if l.get("format") == "long": tag = "long lesson · " + tag
        blocks.append(f"""<article class="lesson">
  <div class="lhead"><div><div class="n"><b>lesson {i}</b><span>{tag}</span></div><h2>{esc(l['title'])}</h2><p class="sum">{esc(l['summary'])}</p></div>{cover}</div>
  {steps_block}
  {'' if not (free or i == 1) else f'<a class="btn btn-line watch" href="/academy/#/{r["id"]}/{l["slug"]}">Watch this lesson free &rarr;</a>'}
</article>""")
    if free:
        buy = f'<div class="buy"><p><b>{esc(r["name"])} is free.</b> When you are ready, hire your next robot for {esc(PRICE)}, or the whole team for {esc(BUNDLE or "one price")}.</p><a class="btn btn-ink" href="/robots">Meet the team</a></div>'
    else:
        buy = f'<div class="buy"><p><b>Hire {esc(r["name"])}:</b> every lesson, every prompt, the skill file and a check-your-work list. Buy once, keep forever. {esc(PRICE)}, or the whole team for {esc(BUNDLE or "one price")}.</p><a class="btn btn-ink" href="/api/checkout?item={r["id"]}">Hire {esc(r["name"])}: {esc(PRICE)}</a><a class="btn btn-line" href="/api/checkout?item=all">Whole team: {esc(BUNDLE)}</a></div>'
    body = f"""<section class="prof"><div class="wrap">
  <div class="card" style="--c:{r['accent']};--soft:{soft(r['accent'])}">
    <div class="art"><img src="/robots/art/{r['id']}.svg" alt="{esc(r['name'])}, the {esc(r['job'])}"></div>
    <div>
      <div class="job">{esc(r['job'])}</div>
      <h1>{esc(r['name'])}</h1>
      <p class="intro">{esc(r['intro'])}</p>
      <p class="pitchline">{esc(r.get('pitch', ''))}</p>
      <div class="hirebox"><b>Hire {esc(r['name'])} if:</b><ul class="hire">{''.join('<li>' + esc(h) + '</li>' for h in r.get('hire', []))}</ul></div>
      <dl><dt>teaches</dt><dd>{esc(r['teaches'][0].upper() + r['teaches'][1:])}.</dd><dt>personality</dt><dd>{esc(r['personality'])}</dd></dl>
      <div class="quote">"{esc(r['catchphrase'])}"</div>
    </div>
  </div>
  <div class="acts"><a class="btn btn-ink" href="/academy/#/{r['id']}">{'Start free in the Academy' if free else 'Watch the free lesson'} &rarr;</a><a class="back" href="/robots">&larr; the whole team</a></div>
</div></section>
<section style="padding-top:8px"><div class="wrap" style="--soft:{soft(r['accent'])}">
{chr(10).join(blocks)}
{buy}
</div></section>
"""
    page = head(f"{r['name']}, the {r['job']}, Kelty Sage", f"{r['name']} teaches {r['teaches']}.", BOT_CSS) + body + foot(COPY_JS)
    (OUT / f"{r['slug']}.html").write_text(tag(menu_swap(page)))

def main():
    cast, lessons = load()
    (OUT / "art").mkdir(parents=True, exist_ok=True)
    shutil.rmtree(OUT / "covers", ignore_errors=True)
    (OUT / "covers").mkdir()
    for r in cast:
        shutil.copy(SRC / "robots/art" / f"{r['id']}.svg", OUT / "art" / f"{r['id']}.svg")
        robot_page(r, lessons.get(r["id"], []), cast)
    grid(cast, lessons)
    print(f"built {len(cast)} robot pages + /robots")

if __name__ == "__main__":
    main()
