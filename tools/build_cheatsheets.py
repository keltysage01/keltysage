#!/usr/bin/env python3
"""Build the free cheat sheets: one-page PDFs, preview images and the /cheatsheets page.

    python3 tools/build_cheatsheets.py

Content lives in SHEETS below. Each sheet must fit on one US Letter page; the build
stops if a PDF comes out longer. Nothing here gives away the paid robot prompts:
sheets stick to the free Boot material and general how-to.
"""
import html, re, shutil, subprocess, sys, tempfile
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent
OUT = SITE / "cheatsheets"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
esc = html.escape

# item: t = title, d = plain words, c = things to type (shown as copy boxes), k = a key or command pill
SHEETS = [
  {"slug": "day-one", "n": "01", "color": "#9ed9c7", "title": "Day One: get Claude Code running",
   "sub": "From nothing to talking to Claude in about ten minutes. No coding.",
   "items": [
     {"t": "Get the Pro plan", "d": "The free plan does not include Claude Code. Pro is the cheapest plan that does. Sign up at claude.ai."},
     {"t": "Open your terminal", "d": "Mac: press Command + Space, type Terminal, press Enter. Windows: press the Windows key, type PowerShell, press Enter."},
     {"t": "Paste one line (Mac)", "d": "Paste it, press Enter, then wait. It shows nothing for a bit while it downloads. That is normal.", "c": ["curl -fsSL https://claude.ai/install.sh | bash"]},
     {"t": "Paste one line (Windows)", "d": "Same idea in PowerShell. Paste, press Enter, wait.", "c": ["irm https://claude.ai/install.ps1 | iex"]},
     {"t": "Type one word", "d": "Close the window, open a new one, then type this. Says command not found? Close every terminal window, open a fresh one, try again.", "c": ["claude"]},
     {"t": "Say hi", "d": "Plain English, like texting a person. It logs you in the first time.", "c": ["I run a small business. What can you help me with first?"]},
     {"t": "Read before you say yes", "d": "It asks before it changes anything. Read the ask, then answer. You are always the boss."},
     {"t": "Stuck on an error?", "d": "Copy the error and paste it right back in. It is great at fixing its own setup.", "c": ["What does this error mean, in plain English? How do I fix it?"]},
   ]},
  {"slug": "first-ten", "n": "02", "color": "#b9f09c", "title": "10 sentences to try on day one",
   "sub": "Copy any of these. Change the words to fit your business.",
   "items": [
     {"t": "Look around", "c": ["What files are on my desktop?", "Summarize this PDF in five bullets:"], "d": "For the PDF, drag the file into the window. That hands it to Claude."},
     {"t": "Do the busywork", "c": ["Make a to-do list from these notes:", "Rename the photos in this folder by the date they were taken"]},
     {"t": "Tidy up", "c": ["Turn this messy list into a clean table:", "Sort my downloads folder into folders by type"]},
     {"t": "Write the first draft", "c": ["Write a friendly reply to this message. Do not send it:", "Give me three caption ideas for this photo"]},
     {"t": "Ask about your business", "c": ["What can you help me with in my business?", "Ask me five questions about my business, then tell me where to start"]},
     {"t": "Check its work", "c": ["Show me what you did and what you were unsure about"], "d": "Always end with this one. It tells you what to double check."},
   ]},
  {"slug": "keys", "n": "03", "color": "#9ccff8", "title": "The keys and commands you will actually use",
   "sub": "Ten things. That is all you need to drive Claude Code.",
   "items": [
     {"k": "claude", "d": "Type it in your terminal to start."},
     {"k": "claude -c", "d": "Pick up your last conversation where you left off."},
     {"k": "Esc", "d": "Stop it in the middle of a task. Nothing bad happens."},
     {"k": "Esc Esc", "d": "Press it twice to go back and change something you said."},
     {"k": "Up arrow", "d": "Bring back your last message so you can resend or fix it."},
     {"k": "Shift + Tab", "d": "Switch modes. Plan mode makes a plan first and changes nothing."},
     {"k": "Drag a file in", "d": "Drop any file on the window to hand it to Claude."},
     {"k": "/clear", "d": "Fresh start. Use it when you switch to a new topic."},
     {"k": "/help", "d": "Shows every command if you forget one."},
     {"k": "/exit", "d": "Quit. Pressing Ctrl + C twice works too."},
   ]},
  {"slug": "boss", "n": "04", "color": "#ff9fd6", "title": "You are always the boss: 6 safety rules",
   "sub": "Claude does the work. You stay in charge of anything that matters.",
   "items": [
     {"wide": True, "t": "Say this once at the start", "d": "It will check with you before anything big.", "c": ["Before you change, send, post or delete anything, ask me first"]},
     {"t": "1. Read the ask", "d": "It asks permission before running commands or changing files. Read it. If you are not sure, say no and ask what it means."},
     {"t": "2. Escape stops everything", "d": "Press Esc any time to stop it mid-task. Then tell it what you want instead."},
     {"t": "3. Secrets stay out of the chat", "d": "Never paste passwords, card numbers or secret keys. Ask it how to connect a tool safely instead."},
     {"t": "4. Drafts first, sends second", "d": "Anything that goes to a customer starts as a draft you read.", "c": ["Write a draft reply, but do not send it"]},
     {"t": "5. Save before big changes", "d": "A save point lets you go back if something breaks. Sheet 06 shows how."},
     {"t": "6. Ask what could go wrong", "d": "Before anything new, make it think out loud.", "c": ["Is this safe? What could go wrong?"]},
   ]},
  {"slug": "clear-directions", "n": "05", "color": "#dcbcf8", "title": "The clear directions formula",
   "sub": "Vague in, vague out. Four parts get you a good result on the first try.",
   "items": [
     {"t": "Vague", "d": "You get something generic you have to redo.", "c": ["Write an email"]},
     {"t": "Clear", "d": "Who it is for, what you want, and what good looks like.", "c": ["Write a welcome email for new clients. Friendly, under 100 words, and end with how to book."]},
     {"t": "1. Who, what and good", "d": "Say who it is for, what you want, and what good looks like: length, tone, what it must include."},
     {"t": "2. Give an example", "d": "Paste one you like. It copies the feel, not the words.", "c": ["Write it like this example:"]},
     {"t": "3. Big job? Let it ask", "d": "It will ask what it needs to know before it starts.", "c": ["This is a big job. Ask me questions before you start"]},
     {"t": "4. Fix it exactly", "d": "Say what to keep and what to change. Skip \"make it better.\"", "c": ["Keep the first paragraph, but make the ending shorter and warmer"]},
     {"t": "Fill in the blanks", "d": "Copy this, fill it in, paste it.", "c": ["Make a ___ for ___. It should be ___. Good looks like ___. Here is one I like: ___"]},
   ]},
  {"slug": "save-points", "n": "06", "color": "#f1e4c3", "title": "Save points: never lose your work",
   "sub": "Save points are called git. You never have to learn git. Just ask.",
   "items": [
     {"t": "Set it up once", "d": "Do this in any folder you care about, like your website.", "c": ["Set up git in this folder, then save a save point"]},
     {"t": "Save before big changes", "d": "Give it a name you will recognize later.", "c": ["Save a save point called before the new homepage"]},
     {"t": "Something broke? Go back", "d": "Everything returns to how it was at your last save.", "c": ["Something broke. Go back to the last save point"]},
     {"t": "See what changed", "d": "Great for checking its work before you keep a change.", "c": ["What changed since my last save point? Plain English, please"]},
     {"t": "See your save points", "d": "A simple list with dates and names.", "c": ["Show me my save points in plain English"]},
     {"t": "Keep a spare copy", "d": "Save points live on your computer. Keep important files somewhere else too.", "c": ["Which of my files are most important to back up?"]},
   ]},
  {"slug": "which-robot", "n": "07", "color": "#9ed9c7", "title": "Which robot should you hire first?",
   "sub": "Pick the one job you would pay to never do again. Start there.",
   "robots": True, "items": []},
  {"slug": "stuck", "n": "08", "color": "#ffbd2e", "title": "Stuck? Say this.",
   "sub": "Copy the one that fits. Plain words fix almost everything.",
   "items": [
     {"t": "It showed an error", "c": ["That did not work. Here is the error: (paste it). What does it mean in plain English?"], "d": "Errors look scary. They are just a note about what went wrong, and Claude can read them."},
     {"t": "It did the wrong thing", "c": ["Undo what you just did"], "d": "Then say what you wanted instead, with one example."},
     {"t": "You are not sure what happened", "c": ["What did you just change? Show me in plain English"], "d": "Ask this any time. You should always know what changed."},
     {"t": "It is going too fast", "c": ["Slow down. One step at a time, and wait for me after each one"], "d": "Great for anything new, like connecting a tool for the first time."},
     {"t": "The answer is too technical", "c": ["Explain it like I have never coded"], "d": "It will drop the jargon and use everyday words."},
     {"t": "It feels too complicated", "c": ["Is there an easier way to do this?"], "d": "There often is. It picks the hard way when it does not know your goal."},
     {"t": "It went off in a weird direction", "c": ["Stop. Let's make a plan first, then do it"], "d": "Press Esc first, then type this. Read the plan before you say go."},
     {"t": "Before you trust it", "c": ["Check your own work and tell me what might be wrong"], "d": "It is honest about its weak spots when you ask."},
   ]},
]

ROBOTS = [  # pain, robot, site slug, art id, accent
  ("You have never used a terminal", "Boot", "boot", "boot", "#9ed9c7", "Free"),
  ("Graphics take forever", "Pixel", "pixel", "pixel", "#ff7cc6", None),
  ("Your videos never get edited", "Reel", "reel", "cutter", "#ffbd2e", None),
  ("You are about to connect email or payments", "Bouncer", "bouncer", "officer-keys", "#3b5bdb", None),
  ("You never know who still owes you", "Penny", "penny", "ledger", "#28c840", None),
  ("Your writing sounds robotic", "Echo", "echo", "echo", "#ff6159", None),
  ("You wait on someone to change your website", "Dot", "dot", "brick", "#ff8a3d", None),
  ("Your inbox and bookings eat the day", "Tempo", "tempo", "postie", "#4dabf7", None),
  ("You have forty research tabs open", "Scout", "scout", "scout", "#9775fa", None),
]

FONTS = '<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">'

SHEET_CSS = """
@page{size:letter;margin:0}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:8.5in;height:11in}
body{font-family:'Geist',system-ui,sans-serif;color:#12181c;background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.page:not(:last-child){break-after:page}
.page{width:8.5in;height:11in;padding:.5in .55in .45in;display:flex;flex-direction:column;position:relative;overflow:hidden}
.page:before{content:"";position:absolute;width:5in;height:5in;border-radius:50%;right:-2in;top:-2.2in;background:radial-gradient(circle,var(--c),transparent 68%);opacity:.45}
.top{display:flex;align-items:center;gap:10px;position:relative}
.top img{width:38px}
.top b{font-size:15px;letter-spacing:-.01em}
.top span{font-size:12px;color:#5a6a70}
.top .num{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:12px;color:#2f9a94;background:#fff;border:1px solid #cfe3de;border-radius:99px;padding:4px 12px}
h1{font-size:34px;letter-spacing:-.035em;line-height:1.05;margin-top:22px;position:relative;max-width:6.4in}
h1 em{font-style:normal;background:linear-gradient(transparent 60%,var(--c) 60%,var(--c) 92%,transparent 92%)}
.sub{font-size:15px;color:#3d4a50;margin-top:8px;position:relative}
.grid{flex:1;display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:1fr;gap:12px;margin-top:20px;position:relative}
.card{border:1px solid #dfe8e8;border-radius:16px;padding:14px 16px;display:flex;flex-direction:column;justify-content:center;gap:8px;background:#fff}
.card h2{font-size:17.5px;letter-spacing:-.02em;line-height:1.2}
.card p{font-size:13.5px;color:#3d4a50;line-height:1.45}
.code{font-family:'JetBrains Mono',monospace;font-size:12.5px;line-height:1.45;background:#eef8f5;border:1px solid #cfeae2;border-radius:9px;padding:7px 10px;color:#173b35;word-break:break-word}
.code:before{content:"> ";color:#2f9a94}
.card.key{flex-direction:row;align-items:center;gap:14px}
.pill{flex:none;min-width:1.25in;text-align:center;font-family:'JetBrains Mono',monospace;font-size:13px;background:var(--c);border-radius:10px;padding:9px 10px}
.card.wide{grid-column:1/-1}
.bots{flex:1;display:grid;grid-template-columns:1fr;grid-auto-rows:1fr;gap:8px;margin-top:20px;position:relative}
.bot{display:flex;align-items:center;gap:14px;border:1px solid #dfe8e8;border-left:6px solid var(--a);border-radius:14px;padding:6px 14px}
.bot img{width:60px;height:60px}
.bot .pain{flex:1;font-size:15.5px;color:#3d4a50}
.bot .who{font-weight:600;font-size:16px;width:1.1in}
.bot .price{font-family:'JetBrains Mono',monospace;font-size:12px;color:#2f9a94;width:.6in;text-align:right}
.foot{display:flex;justify-content:space-between;align-items:center;margin-top:16px;font-size:11.5px;color:#7b8a90;position:relative}
.foot b{color:#12181c;font-weight:600}
"""

def item_html(it):
    if "k" in it:
        return f'<div class="card key"><div class="pill">{esc(it["k"])}</div><p>{esc(it["d"])}</p></div>'
    parts = [f'<h2>{esc(it["t"])}</h2>'] if it.get("t") else []
    if it.get("d") and not it.get("c"):
        parts.append(f'<p>{esc(it["d"])}</p>')
    for c in it.get("c", []):
        parts.append(f'<div class="code">{esc(c)}</div>')
    if it.get("d") and it.get("c"):
        parts.append(f'<p>{esc(it["d"])}</p>')
    return f'<div class="card">{"".join(parts)}</div>'

def title_html(t):
    # highlight the last word or two like the website does
    words = t.split()
    k = 2 if len(words) > 4 else 1
    return esc(" ".join(words[:-k])) + ' <em>' + esc(" ".join(words[-k:])) + '</em>'

def sheet_html(s):
    if s.get("robots"):
        rows = "".join(
            f'<div class="bot" style="--a:{a}"><img src="{SITE}/robots/art/{art}.svg" alt=""><div class="pain">{esc(p)}</div>'
            f'<div class="who">{esc(n)}</div><div class="price">{free or "$2.99"}</div></div>'
            for p, n, slug, art, a, free in ROBOTS)
        body = f'<div class="bots">{rows}</div><p class="sub" style="margin-top:14px">Hire one robot for $2.99, or the whole team for $14.99. Buy once, keep forever. Start free with Boot at keltysage.com/academy</p>'
    else:
        items = s["items"]
        cells = [item_html(it) for it in items]
        for j, it in enumerate(items):  # a card marked wide, or else the last card of an odd set, spans both columns
            if it.get("wide") or (len(items) % 2 and j == len(items) - 1 and not any(x.get("wide") for x in items)):
                cells[j] = cells[j].replace('class="card', 'class="card wide', 1)
        body = f'<div class="grid">{"".join(cells)}</div>'
    return f"""<!doctype html><html><head><meta charset="utf-8">{FONTS}<style>{SHEET_CSS}</style></head>
<body><div class="page" style="--c:{s['color']}">
<div class="top"><img src="{SITE}/brand/logo.png" alt=""><b>Kelty Sage</b><span>AI Business Coach</span><div class="num">cheat sheet {s['n']}</div></div>
<h1>{title_html(s['title'])}</h1><p class="sub">{esc(s['sub'])}</p>
{body}
<div class="foot"><span><b>keltysage.com</b> &nbsp;Free lessons in the Robot Academy</span><span>I type it. AI does it.</span></div>
</div></body></html>"""

def chrome(*args):
    subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", "--allow-file-access-from-files",
                    "--virtual-time-budget=6000", *args], check=True, capture_output=True, timeout=90)

def pages(pdf):
    return len(re.findall(rb"/Type\s*/Page[^s]", pdf.read_bytes()))

PAGE = """<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Free Cheat Sheets, Kelty Sage</title>
<meta name="description" content="Free one-page cheat sheets for running your business with Claude Code. Print them, keep them next to your laptop.">
<link rel="icon" href="/brand/logo.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
""" + FONTS + """
<style>
:root{--ink:#12181c;--ink-2:#3d4a50;--ink-3:#7b8a90;--bg:#f4f7f7;--card:#fff;--line:#e1e8e8;--sea:#9ed9c7;--teal:#2f9a94;--green:#b9f09c;--sans:'Geist',system-ui,sans-serif;--mono:'JetBrains Mono',ui-monospace,monospace}
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);color:var(--ink);font-family:var(--sans);line-height:1.55;-webkit-font-smoothing:antialiased}
html,body{overflow-x:clip}
img{max-width:100%;display:block}a{color:inherit}
.wrap{max-width:1140px;margin:0 auto;padding:0 20px}
.eb{font-family:var(--mono);font-size:14px;color:var(--teal);min-height:1.55em}
h1,h2,h3{font-weight:600;letter-spacing:-.03em;line-height:1.08}
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
.hero{padding:44px 0 8px;position:relative}
.hero h1{font-size:54px;margin-top:10px;max-width:820px}
.hero h1 em{font-style:normal;background:linear-gradient(transparent 60%,var(--green) 60%,var(--green) 92%,transparent 92%)}
.hero p{font-size:20px;color:var(--ink-2);margin-top:14px;max-width:640px}
.all{margin-top:22px}
.sheets{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;padding:36px 0 20px}
.sheet{background:var(--card);border:1px solid var(--line);border-radius:22px;overflow:hidden;display:flex;flex-direction:column;text-decoration:none;transition:transform .2s,box-shadow .2s}
.sheet:hover{transform:translateY(-3px);box-shadow:0 16px 36px rgba(18,24,28,.1)}
.sheet .pv{background:linear-gradient(180deg,var(--c),#fff);padding:18px 18px 0}
.sheet .pv img{border-radius:8px 8px 0 0;box-shadow:0 8px 24px rgba(18,24,28,.14);aspect-ratio:8.5/11;object-fit:cover;object-position:top;background:#fff}
.sheet .in{padding:14px 16px 16px;display:flex;flex-direction:column;gap:6px;flex:1}
.sheet .n{font-family:var(--mono);font-size:12px;color:var(--teal)}
.sheet h2{font-size:18px;line-height:1.2;letter-spacing:-.02em}
.sheet p{font-size:14px;color:var(--ink-2);line-height:1.4}
.sheet .dl{margin-top:auto;padding-top:8px;font-weight:600;font-size:15px}
.join{display:flex;gap:24px;align-items:center;flex-wrap:wrap;background:linear-gradient(135deg,#e7f8f2,#f6efff);border:1px solid #d6ece6;border-radius:28px;padding:30px;margin:28px 0 64px}
.join h2{font-size:28px}.join p{color:var(--ink-2);margin-top:6px}
.join form{display:flex;gap:10px;flex:1;min-width:280px}
.join input{flex:1;min-width:0;font:inherit;font-size:16px;padding:14px 20px;border-radius:999px;border:1px solid var(--line);background:#fff}
.join .fine{font-size:14px;color:var(--ink-3);margin-top:8px;width:100%}
footer{padding:40px 0 56px;border-top:1px solid var(--line)}
footer .wrap{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
footer p{font-size:14px;color:var(--ink-3);width:100%}
.rv{opacity:0;transform:translateY(14px);transition:opacity .8s cubic-bezier(.22,1,.36,1),transform .8s cubic-bezier(.22,1,.36,1);transition-delay:calc(var(--i,0) * 70ms)}
.rv.in{opacity:1;transform:none}.rv.done{transition:transform .2s,box-shadow .2s}
@keyframes heroIn{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.hero .wrap>*{animation:heroIn .9s cubic-bezier(.22,1,.36,1) both}
.hero .wrap>:nth-child(2){animation-delay:.08s}.hero .wrap>:nth-child(3){animation-delay:.18s}.hero .wrap>:nth-child(4){animation-delay:.28s}
@media (max-width:960px){.sheets{grid-template-columns:1fr 1fr}.hero h1{font-size:42px}}
@media (max-width:600px){.links a:not(.btn){display:none}.brand{font-size:16px;gap:8px}.brand img{width:34px}.brand .tag{font-size:12.5px}.brand .sep{height:16px}.nav .btn{padding:9px 14px;font-size:13px}
  .hero h1{font-size:34px}.hero p{font-size:18px}.sheets{gap:14px}.sheet .pv{padding:12px 12px 0}.sheet h2{font-size:16px}.sheet p{display:none}.join{padding:22px}.join form{flex-direction:column}}
@media (max-width:359px){.nav .brand .sep,.nav .brand .tag{display:none}}
@media (prefers-reduced-motion:reduce){.hero .wrap>*{animation:none}}
</style></head><body>
<header class="nav"><div class="wrap">
  <a class="brand" href="/"><img src="/brand/logo.png" alt="">Kelty<span class="sep" aria-hidden="true"></span><span class="tag">AI Business Coach</span></a>
  <nav class="links"><a href="/robots">Robots</a><a href="/academy/">Academy</a><a href="/cheatsheets">Cheat sheets</a><a class="btn btn-ink" href="/academy/">Academy</a></nav>
</div></header>
<main>
<section class="hero"><div class="wrap">
  <div class="eb">&gt; free cheat sheets</div>
  <h1>Keep these next to your <em>laptop.</em></h1>
  <p>One page each. Print them, save them, share them. Everything you need to start running your business with AI, in plain English.</p>
  <a class="btn btn-ink all" href="/cheatsheets/kelty-sage-cheat-sheets.pdf" download>Download all {count} free</a>
</div></section>
<section><div class="wrap"><div class="sheets">
{cards}
</div>
<div class="join rv"><div><h2>Want the next one?</h2><p>I make a new cheat sheet whenever my robots learn a new job. Get it by email.</p></div>
<form onsubmit="return joined(event)"><input type="email" required placeholder="you@yourbusiness.com" aria-label="Your email"><input type="text" name="website" tabindex="-1" autocomplete="off" style="display:none"><button class="btn btn-ink" type="submit">Send me new ones</button></form>
<p class="fine" id="fine">No spam. One email when there is something new.</p></div>
</div></section>
</main>
<footer><div class="wrap">
  <a class="brand" href="/"><img src="/brand/logo.png" alt="">Kelty Sage</a>
  <nav class="links"><a href="https://www.tiktok.com/@keltysage" target="_blank" rel="noopener">TikTok</a><a href="mailto:keltysage01@gmail.com">Contact</a></nav>
  <p>I type it. AI does it.</p>
</div></footer>
<script>
async function joined(e){
  e.preventDefault();
  const f = e.target, fine = document.getElementById('fine'), btn = f.querySelector('button');
  btn.disabled = true;
  try {
    const r = await fetch('/api/subscribe', {method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({email: f.querySelector('input[type=email]').value.trim(), website: f.website.value})});
    if (!r.ok) throw new Error(r.status);
    fine.textContent = "You're on the list. The next sheet comes to your inbox.";
    f.reset();
  } catch (err) { fine.textContent = 'That did not go through. Email keltysage01@gmail.com and I will add you.'; }
  btn.disabled = false;
  return false;
}
(function(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ const t = e.target; io.unobserve(t); t.classList.add('in'); setTimeout(() => t.classList.add('done'), 1400); } }), {threshold:.12});
  document.querySelectorAll('.sheet').forEach((el, i) => { el.style.setProperty('--i', i % 4); el.classList.add('rv'); });
  document.querySelectorAll('.rv').forEach(el => io.observe(el));
  addEventListener('scroll', () => document.querySelectorAll('.rv:not(.in)').forEach(el => { if (el.getBoundingClientRect().top < innerHeight) el.classList.add('in', 'done'); }), {passive:true});
})();
</script>
</body></html>
"""

def main():
    shutil.rmtree(OUT, ignore_errors=True)
    OUT.mkdir()
    tmp = Path(tempfile.mkdtemp())
    pdfs, cards = [], []
    for i, s in enumerate(SHEETS):
        src = tmp / f"{s['slug']}.html"
        src.write_text(sheet_html(s))
        pdf = OUT / f"{s['n']}-{s['slug']}.pdf"
        chrome("--no-pdf-header-footer", f"--print-to-pdf={pdf}", src.as_uri())
        if pages(pdf) != 1:
            sys.exit(f"{pdf.name} is {pages(pdf)} pages; trim it to one")
        png = OUT / f"{s['n']}-{s['slug']}.png"
        chrome("--window-size=816,1056", f"--screenshot={png}", src.as_uri())
        subprocess.run(["sips", "-Z", "640", str(png)], check=True, capture_output=True)
        pdfs.append(pdf)
        blurb = s["sub"]
        cards.append(f'<a class="sheet" href="/cheatsheets/{pdf.name}" download style="--c:{s["color"]}">'
                     f'<div class="pv"><img src="/cheatsheets/{png.name}" alt="Preview of cheat sheet {s["n"]}: {esc(s["title"])}" loading="lazy"></div>'
                     f'<div class="in"><div class="n">cheat sheet {s["n"]}</div><h2>{esc(s["title"])}</h2><p>{esc(blurb)}</p><div class="dl">Download free PDF &darr;</div></div></a>')
    # one combined PDF of every sheet
    allsrc = tmp / "all.html"
    allsrc.write_text("".join(re.sub(r"</?(html|body)[^>]*>|<!doctype html>", "", sheet_html(s)) for s in SHEETS)
                      .join(["<!doctype html><html><body>", "</body></html>"]))
    both = OUT / "kelty-sage-cheat-sheets.pdf"
    chrome("--no-pdf-header-footer", f"--print-to-pdf={both}", allsrc.as_uri())
    page = PAGE.replace("{cards}", "\n".join(cards)).replace("{count}", str(len(SHEETS)))
    (OUT / "index.html").write_text(page)
    print(f"built {len(SHEETS)} sheets, combined PDF {pages(both)} pages")

if __name__ == "__main__":
    main()
