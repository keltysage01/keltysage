"""Vercel Web Analytics tag. Builders call tag(page) before writing; run this file to sweep every page."""
from pathlib import Path

TAG = '<script defer src="/_vercel/insights/script.js"></script>'


def tag(page):
    if TAG in page or "</head>" not in page:
        return page
    return page.replace("</head>", TAG + "\n</head>", 1)


if __name__ == "__main__":
    root = Path(__file__).resolve().parent.parent
    for p in sorted(root.rglob("*.html")):
        if any(part.startswith(".") or part == "node_modules" for part in p.parts):
            continue
        s = p.read_text()
        t = tag(s)
        if t != s:
            p.write_text(t)
            print("tagged", p.relative_to(root))
