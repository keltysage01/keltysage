#!/usr/bin/env python3
"""Copy the course player into /academy, keeping paid content off the public site.

    python3 ~/keltysage-course/build.py   # refresh the player's data first
    python3 tools/build_academy.py

Free lessons (all of Boot, lesson 1 of each paid robot) ship complete.
Locked lessons ship as title, summary, cover and step titles only: no prompts,
no why/picture text and no video file. The player's localStorage unlock is soft,
so anything shipped here is readable by anyone. Paid files belong behind checkout.
"""
import json, shutil
from pathlib import Path

SRC = Path.home() / "keltysage-course/dist"
OUT = Path(__file__).resolve().parent.parent / "academy"

def main():
    shutil.rmtree(OUT, ignore_errors=True)
    shutil.copytree(SRC, OUT, ignore=shutil.ignore_patterns("media"))
    (OUT / "media").mkdir()
    data = json.loads((SRC / "course-data.json").read_text())
    kept = locked = 0
    for r in data["robots"]:
        for l in r["lessons"]:
            if r.get("free") or l.get("free"):
                shutil.copy(SRC / l["video"], OUT / l["video"])
                kept += 1
            else:
                l["video"] = ""
                l["steps"] = [{"title": s.get("title", "")} for s in l.get("steps", [])]
                locked += 1
    (OUT / "course-data.json").write_text(json.dumps(data))
    # relative paths have to resolve under /academy/ even when the URL has no trailing slash
    page = (OUT / "index.html").read_text()
    if "<base " not in page:
        page = page.replace("<head>", '<head>\n<base href="/academy/">', 1)
    # phone: the lesson video fits on one screen with the title and button under it
    if "ks-phone-fit" not in page:
        page = page.replace("</style>", "@media (max-width:560px){.watch{gap:18px}.watch video{width:auto;height:min(54vh,460px);max-width:100%;display:block;margin:0 auto}} /* ks-phone-fit */\n</style>", 1)
    # a way back to the main site from the academy top bar
    if 'class="home"' not in page:
        page = page.replace('<div class="xp"', '<a class="home" href="/">Home</a><div class="xp"', 1)
        page = page.replace("</style>", ".bar .home{margin-left:auto;margin-right:14px;font-size:15px;color:var(--ink-2);text-decoration:none}.bar .home+.xp{margin-left:0}\n</style>", 1)
    (OUT / "index.html").write_text(page)
    print(f"academy: {kept} free lessons with video, {locked} locked lessons stripped")

if __name__ == "__main__":
    main()
