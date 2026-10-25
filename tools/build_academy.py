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
    (OUT / "index.html").write_text(page)
    print(f"academy: {kept} free lessons with video, {locked} locked lessons stripped")

if __name__ == "__main__":
    main()
