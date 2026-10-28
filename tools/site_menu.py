"""The one site menu: logo on the left, Robot Academy button and a three-line menu on the right.

Every page gets the same markup from here, so the menu can't drift page to page.
  python3 tools/site_menu.py          rewrites the hand-made pages in place
  from site_menu import menu, swap    the build scripts call these
The panel is a <details>, so it opens with no JavaScript; assets/menu.js only closes it
on a tap outside or Escape.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

LINKS = [
    ("/", "Home", "Start here"),
    ("/academy/", "Robot Academy", "Free lessons. Start with Boot."),
    ("/robots", "Meet the robots", "Ten robots, one job each"),
    ("/academy/hq/", "Robot HQ", "Walk around their 3D office"),
    ("/academy/podcast/", "The podcast", "The Robot Break Room, every Tuesday"),
    ("/playbook", "Playbook", "The rules I run my business on"),
    ("/cheatsheets", "Free cheat sheets", "One page each, print and keep"),
    ("/#join", "Pricing", "$2.99 a robot, or the whole team"),
]

HEAD = '<link rel="stylesheet" href="/assets/menu.css?v=1">\n<script defer src="/assets/menu.js?v=1"></script>\n'


def panel(current=""):
    here = ' aria-current="page"'
    rows = "".join(
        f'<a href="{href}"{here if href == current else ""}><b>{name}</b><span>{sub}</span></a>'
        for href, name, sub in LINKS)
    return ('<details class="smenu"><summary aria-label="Open menu"><i></i><i></i><i></i></summary>'
            f'<nav class="smenu-panel" aria-label="Site menu">{rows}</nav></details>')


def menu(current="", button=True):
    btn = '<a class="btn btn-ink sbtn" href="/academy/"><span class="lg">Robot </span>Academy</a>' if button else ""
    return f'<div class="snav">{btn}{panel(current)}</div>'


# the old right-hand side: a row of links, plus the phone-only row under the header
OLD_LINKS = re.compile(r'\s*<nav class="links">.*?</nav>\s*(</div>)', re.S)
OLD_MNAV = re.compile(r'\s*<nav class="mnav"[^>]*>.*?</nav>', re.S)


def swap(page, current=""):
    """Replace the header's links with the shared menu. Footers keep their own links."""
    head_end = page.index("</header>")
    top, rest = page[:head_end], page[head_end:]
    top = OLD_MNAV.sub("", top)
    top, n = OLD_LINKS.subn(lambda m: "\n  " + menu(current) + "\n" + m.group(1), top, count=1)
    if n == 0 and 'class="snav"' not in top:
        raise SystemExit("site_menu: no header links found to replace")
    if "/assets/menu.css" not in page:
        top = top.replace("</head>", HEAD + "</head>", 1)
    return top + rest


PAGES = {
    "index.html": "/",
    "playbook/index.html": "/playbook",
    "break-room/index.html": "",
    "privacy/index.html": "",
}

if __name__ == "__main__":
    for rel, current in PAGES.items():
        p = ROOT / rel
        p.write_text(swap(p.read_text(), current))
        print("menu:", rel)
