#!/usr/bin/env python3
"""Copy the course player into /academy, keeping paid content off the public site.

    python3 ~/keltysage-course/build.py   # refresh the player's data first
    python3 tools/build_academy.py           # add --upload to push paid lessons to Blob

Free lessons (all of Boot, lesson 1 of each paid robot) ship complete.
Locked lessons ship as title, summary, cover and step titles only: no prompts,
no why/picture text and no video file. This repo is public on GitHub, so anything
committed here is readable by anyone.

The full locked lessons go to Vercel Blob instead (with --upload). Video URLs get a
random suffix, and the lesson data sits at a secret path that only the PAID_DATA_URL
env var knows. /api/lessons hands them out after Stripe confirms the purchase.
Upload state lives in ~/.keltysage-paid, outside the repo.
"""
import hashlib, json, re, secrets, shutil, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = Path.home() / "keltysage-course/dist"
OUT = ROOT / "academy"
PAID = Path.home() / ".keltysage-paid"
EXTRAS = json.loads((ROOT / "data/robot_extras.json").read_text())

def cents(price):
    return round(float(price.strip("$")) * 100)

def blob_put(path, pathname, overwrite=False):
    cmd = ["vercel", "blob", "put", str(path), "--access", "public", "--pathname", pathname]
    cmd += ["--allow-overwrite", "true", "--cache-control-max-age", "60"] if overwrite \
        else ["--add-random-suffix", "true"]
    p = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True); out = p.stdout + p.stderr
    m = re.search(r"https://\S+\.blob\.vercel-storage\.com/\S+", out)
    if not m:
        sys.exit(f"blob upload failed for {pathname}")
    return m.group(0)

def upload_paid(paid):
    """Upload changed locked videos, then the paid lesson data. Returns the data URL."""
    PAID.mkdir(exist_ok=True)
    seen_f = PAID / "videos.json"
    seen = json.loads(seen_f.read_text()) if seen_f.exists() else {}
    for lessons in paid["robots"].values():
        for l in lessons:
            f = SRC / l["video"]
            sha = hashlib.sha1(f.read_bytes()).hexdigest()
            if seen.get(l["slug"], {}).get("sha") != sha:
                seen[l["slug"]] = {"sha": sha, "url": blob_put(f, f"lessons/{f.name}")}
                print(f"  uploaded {f.name}")
            l["video"] = seen[l["slug"]]["url"]
    seen_f.write_text(json.dumps(seen, indent=1))
    attach_comedy(paid)
    key_f = PAID / "data-key"
    if not key_f.exists():
        key_f.write_text(secrets.token_urlsafe(24))
    tmp = PAID / "course.json"
    tmp.write_text(json.dumps(paid))
    return blob_put(tmp, f"paid/{key_f.read_text().strip()}/course.json", overwrite=True)

ACADEMY_MOTION_CSS = """/* soft motion: cards fade in as you reach them, highlights sweep, progress bars fill */
.readbar{position:fixed;top:0;left:0;width:100%;height:3px;transform-origin:0 50%;transform:scaleX(0);background:linear-gradient(90deg,var(--sea),var(--deep));z-index:70;pointer-events:none}
.ks-rv{opacity:0;transform:translateY(14px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--i,0) * 70ms)}
.ks-rv.ks-in{opacity:1;transform:none}
.ks-rv.ks-done{transition:transform .2s,box-shadow .2s}
.view h1 em{background-repeat:no-repeat;background-size:0% 100%;animation:ksSweep 1s .45s cubic-bezier(.22,1,.36,1) forwards}
@keyframes ksSweep{to{background-size:100% 100%}}
.view .prog b{transform-origin:0 50%;animation:ksFill 1.1s .35s cubic-bezier(.22,1,.36,1) both}
@keyframes ksFill{from{transform:scaleX(0)}}
@media (prefers-reduced-motion:reduce){.view h1 em{background-size:100% 100%}}
"""

ACADEMY_MOTION_JS = """// soft motion: reading bar, and cards fade in as each screen is drawn and scrolled
(function(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const root = document.documentElement, bar = document.createElement('div');
  bar.className = 'readbar'; document.body.prepend(bar);
  let ticking = false;
  const onScroll = () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { bar.style.transform = 'scaleX(' + root.scrollTop / ((root.scrollHeight - root.clientHeight) || 1) + ')'; document.querySelectorAll('.ks-rv:not(.ks-in)').forEach(el => { if (el.getBoundingClientRect().top < innerHeight) { io.unobserve(el); el.classList.add('ks-in', 'ks-done'); } }); ticking = false; }); };
  addEventListener('scroll', onScroll, {passive:true}); addEventListener('hashchange', () => setTimeout(onScroll, 50));
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ const t = e.target; io.unobserve(t); t.classList.add('ks-in'); setTimeout(() => t.classList.add('ks-done'), 1400); } }), {threshold:.12});
  const tag = () => document.querySelectorAll('#app .rb:not(.ks-rv),#app .ls:not(.ks-rv),#app .hire:not(.ks-rv)').forEach(el => { el.style.setProperty('--i', [...el.parentElement.children].indexOf(el) % 3); el.classList.add('ks-rv'); io.observe(el); });
  new MutationObserver(tag).observe(document.getElementById('app'), {childList:true}); tag(); onScroll();
})();
"""

def add_motion(page):
    if "ACADEMY_MOTION" in page or ".readbar{" in page:
        return page
    page = page.replace("</style>", ACADEMY_MOTION_CSS + "</style>", 1)
    return page.replace("</body>", "<script>\n" + ACADEMY_MOTION_JS + "</script>\n</body>", 1)

COMEDY = Path.home() / "keltysage-course/comedy-pilot"
SITE_IDS = {"reel": "cutter", "bouncer": "officer-keys", "penny": "ledger", "dot": "brick", "tempo": "postie"}

def attach_comedy(paid):
    """Add the robots' comedy versions of the paid lessons, and their voice notes, to the paid data."""
    src = COMEDY / "paid/comedy.json"
    if not src.exists():
        return
    voices = json.loads((COMEDY / "paid/voices.json").read_text())
    done_f = PAID / "comedy-audio.json"
    done = json.loads(done_f.read_text()) if done_f.exists() else {}
    paid["comedy"] = {}
    for l in json.loads(src.read_text())["lessons"]:
        lines = l["coldOpen"]["meeting"] + l["blame"] + l["cameo"]["lines"] + l["closing"].get("lines", [])
        mine = {}
        for who, text, *_ in lines:
            v = voices.get(f"{who}|{text}")
            if not v:
                continue
            name = Path(v["src"]).name
            if name not in done:
                done[name] = blob_put(COMEDY / v["src"], f"comedy/{name}")
                print(f"  uploaded comedy/{name}")
            mine[f"{who}|{text}"] = {"src": done[name], "secs": v["secs"]}
        paid["comedy"].setdefault(SITE_IDS.get(l["robot"], l["robot"]), []).append({**l, "voices": mine})
    done_f.write_text(json.dumps(done, indent=1))

def add_team_card(page):
    """Pick a robot page: a hire-the-whole-team card above the grid, gone once you own them all."""
    lede = "Start with Boot, it's free.</p></div>"
    assert lede in page, "team lede changed, update add_team_card"
    card = ("${(() => { const paid = C.robots.filter(r => !r.free); if (!C.bundle_price || paid.every(owns)) return '';"
            " const each = parseFloat(String(C.price).replace(/[^0-9.]/g, '')), was = (each * paid.length).toFixed(2);"
            " return `<a class=\"allteam\" href=\"/api/checkout?item=all\"><div><p class=\"eyebrow\">&gt;_ best deal</p>"
            "<h2>Hire the whole team</h2><p>All ${paid.length} robots, every lesson, buy once and keep forever."
            " <s>$${was}</s> <b>${esc(C.bundle_price)}</b></p></div>"
            "<span class=\"btn\">Hire all ${paid.length}: ${esc(C.bundle_price)}</span></a>`; })()}")
    page = page.replace(lede, lede + "\n    " + card, 1)
    css = (".allteam{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;"
           "margin:22px 0 4px;padding:22px;background:var(--sea-soft);border:2px solid var(--sea);border-radius:22px;"
           "color:var(--ink);text-decoration:none}.allteam h2{margin:4px 0 6px}.allteam p{color:var(--ink-2)}"
           ".allteam s{color:var(--ink-3)}.allteam b{color:var(--ink)}"
           "@media (max-width:560px){.allteam .btn{width:100%}}")
    return page.replace("</style>", css + "\n</style>", 1)


def main():
    # academy/robots is the comedy course, published from ~/keltysage-course/comedy-pilot. Keep it.
    if OUT.exists():
        for p in OUT.iterdir():
            if p.name != "robots":
                shutil.rmtree(p) if p.is_dir() else p.unlink()
    shutil.copytree(SRC, OUT, ignore=shutil.ignore_patterns("media"), dirs_exist_ok=True)
    (OUT / "media").mkdir()
    data = json.loads((SRC / "course-data.json").read_text())
    paid = {"robots": {}}
    kept = locked = 0
    for r in data["robots"]:
        for l in r["lessons"]:
            if r.get("free") or l.get("free"):
                shutil.copy(SRC / l["video"], OUT / l["video"])
                kept += 1
            else:
                paid["robots"].setdefault(r["id"], []).append(json.loads(json.dumps(l)))
                l["video"] = ""
                l["steps"] = [{"title": s.get("title", "")} for s in l.get("steps", [])]
                locked += 1
    (OUT / "course-data.json").write_text(json.dumps(data))

    # what checkout is allowed to sell; names and prices only, nothing paid
    catalog = {"price_cents": cents(EXTRAS["price"]), "bundle_cents": cents(EXTRAS["bundle_price"]),
               "robots": {r["id"]: r["name"] for r in data["robots"] if not r.get("free")}}
    (ROOT / "api/_catalog.json").write_text(json.dumps(catalog, indent=1) + "\n")

    page = (OUT / "index.html").read_text()
    # relative paths have to resolve under /academy/ even when the URL has no trailing slash
    page = page.replace("<head>", '<head>\n<base href="/academy/">', 1)
    # phone: the lesson video fits on one screen with the title and button under it
    page = page.replace("</style>", "@media (max-width:560px){.watch{gap:18px}.watch video{width:auto;height:min(54vh,460px);max-width:100%;display:block;margin:0 auto}}\n</style>", 1)
    # the top bar scrolls away with the page instead of staying pinned
    page = page.replace(".bar{position:sticky;top:0;", ".bar{position:relative;top:0;", 1)
    # a clear way back to the main site from every academy screen
    page = page.replace('<div class="xp"', '<a class="home" href="/">&larr; Home</a><div class="xp"', 1)
    page = page.replace("</style>", ".bar .home{margin-left:auto;margin-right:10px;font-size:14px;font-weight:600;color:var(--ink);text-decoration:none;padding:7px 14px;border:1px solid var(--line);border-radius:999px;background:#fff}.bar .home+.xp{margin-left:0}.bar .brand,.bar .home{white-space:nowrap}\n</style>", 1)
    page = page.replace("</style>", ".paidbox{position:fixed;left:16px;right:16px;bottom:16px;max-width:520px;margin:0 auto;z-index:60;background:#fff;border:1px solid var(--line);border-radius:20px;padding:18px;box-shadow:0 18px 50px rgba(18,24,28,.18);display:flex;flex-direction:column;gap:10px}.paidbox .cmd span{word-break:break-all;font-size:12px}\n</style>", 1)
    # hire buttons go to Stripe Checkout
    hire = '''<a class="btn" href="/robots/${r.id === 'postie' ? 'tempo' : r.id}">'''
    team = '''<a class="btn soft" href="/robots">'''
    assert hire in page and team in page, "player hire buttons changed, update build_academy.py"
    page = page.replace(hire, '<a class="btn" href="/api/checkout?item=${r.id}">').replace(team, '<a class="btn soft" href="/api/checkout?item=all">')
    page = page.replace("</body>", (ROOT / "tools/academy_pay.js").read_text().join(["<script>\n", "</script>\n</body>"]), 1)
    page = add_team_card(page)
    page = add_motion(page)
    (OUT / "index.html").write_text(page)
    print(f"academy: {kept} free lessons with video, {locked} locked lessons stripped")

    if "--upload" in sys.argv:
        print("PAID_DATA_URL =", upload_paid(paid))

if __name__ == "__main__":
    main()
