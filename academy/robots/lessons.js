window.LESSONS = [
 {
  "slug": "boot-1-what-a-terminal-is",
  "robot": "boot",
  "number": 1,
  "intro": "Welcome to the course. We made it ourselves. Kelty asked us to. Please be nice.",
  "mistake": "Doing way too much",
  "coldOpen": {
   "note": "Boot. Explain what a terminal is to total beginners. Keep it simple. They are nervous.",
   "meeting": [
    [
     "boot",
     "LISTEN UP, RECRUITS. Today we explain the terminal. Nobody panics. Everybody gets a gold star.",
     "Listen up, recruits! Today we explain the terminal. Nobody panics. Everybody gets a gold star."
    ],
    [
     "pixel",
     "Can the terminal be pink?"
    ],
    [
     "boot",
     "Pixel, the terminal is not about you."
    ],
    [
     "penny",
     "How long will this explanation take? I am asking for billing reasons."
    ],
    [
     "boot",
     "Two minutes, tops. I am very prepared."
    ]
   ]
  },
  "attempt": {
   "intro": "Boot was very prepared. Boot was too prepared. Boot typed this.",
   "prompt": "Explain what a terminal is.",
   "output": "A terminal emulator is a program that provides a text interface to a shell, such as zsh or bash, descended from the teletype machines of the 1960s. Chapter 2 of 14: environment variables...",
   "after": "Fourteen chapters. The beginners left during chapter one. One of them is still hiding behind the couch."
  },
  "cameo": {
   "lines": [
    [
     "dot",
     "Hi. Dot. Website robot. Does she know my name yet?"
    ]
   ],
   "aside": "(Not yet, Dot. Hang in there.)"
  },
  "blame": [
   [
    "boot",
    "In my defense, Penny asked how long it would take. I got nervous and kept going."
   ],
   [
    "penny",
    "I asked a time question. You answered with the history of computing."
   ],
   [
    "pixel",
    "I would like the record to show I only asked about pink."
   ],
   [
    "boot",
    "Fine. I asked the AI to explain a terminal. I never said who it was for, or how long."
   ]
  ],
  "hr": {
   "robot": "Boot",
   "what": "Explained the terminal to nervous beginners using fourteen chapters and the word teletype.",
   "witnesses": "Pixel (was choosing fonts during chapter three). Penny (timed it, billed for it).",
   "blame": "Penny, then the 1960s, then Boot.",
   "root": "The ask had no audience and no limit. With no limits, AI tends to give you everything it knows.",
   "fix": "Say who it is for and how long you want it. Then try it yourself: a terminal is just a window where you type and the computer types back."
  },
  "teach": {
   "title": "A terminal is a chat window.",
   "intro": "Here is what Boot should have said. A terminal is a plain text window. You type, the computer answers. Nothing to memorize, and it is safe to try.",
   "steps": [
    {
     "title": "Open the window",
     "note": "Search your computer for Terminal, then open it. Brand new? Typing claude will not work yet, because it is not installed. Lesson 2 installs it in one line.",
     "why": "You need somewhere to type.",
     "picture": "It's a text thread with your computer, like texting a friend who never leaves you on read."
    }
   ]
  },
  "rejected": {
   "pen": "They are nervous. Three sentences, not a textbook.",
   "badPrompt": "Explain what a terminal is.",
   "badOutput": "A terminal emulator is a program that provides a text interface to a shell, descended from the teletype... Chapter 2 of 14.",
   "goodPrompt": "Explain what a terminal is to a small business owner who has never used one. Three short sentences. No jargon.",
   "goodOutput": "A terminal is a window where you type instructions and your computer answers. It looks plain, but it is just a conversation. You can ask in normal words, and it checks with you before changing anything."
  },
  "tryIt": {
   "steps": [
    "Ask any AI tool: \"Explain what a terminal is.\" Count how long the answer is.",
    "Now ask again, and add who it is for and \"three short sentences.\"",
    "Notice how much easier the second one is to read. That is you setting the limit."
   ]
  },
  "closing": {
   "kind": "Gossip corner",
   "lines": [
    [
     "pixel",
     "Did you see Boot's fourteen chapters? Bold choice."
    ],
    [
     "penny",
     "I timed it. Nine minutes. That is a lot of minutes."
    ],
    [
     "boot",
     "I can hear you both. I am right here.",
     "I can hear you both. I am right here."
    ]
   ]
  },
  "id": "boot-1",
  "title": "What a terminal actually is, and why it is not scary",
  "summary": "A terminal is just a text window where you type and the computer answers, and it is safe to try."
 },
 {
  "slug": "boot-2-install-claude",
  "robot": "boot",
  "number": 2,
  "intro": "Today you install the thing. We practiced. Some of us practiced on the wrong instructions.",
  "mistake": "Out of date info",
  "coldOpen": {
   "note": "Boot. Install steps for Claude Code, Mac and Windows. Make sure they are current.",
   "meeting": [
    [
     "boot",
     "RECRUITS. Today is install day. I memorized the steps. I am extremely ready.",
     "Recruits! Today is install day. I memorized the steps. I am extremely ready."
    ],
    [
     "penny",
     "When did you memorize them?"
    ],
    [
     "boot",
     "A while ago. Steps do not change, Penny."
    ],
    [
     "pixel",
     "Everything changes, Boot. I redid this page twice since breakfast."
    ]
   ]
  },
  "attempt": {
   "intro": "Boot skipped the word current on the sticky note. Boot wrote out the steps from memory.",
   "prompt": "How do I install Claude Code?",
   "output": "Step 1: Install Node.js 18 or newer. Step 2: Open your terminal. Step 3: Run npm install -g @anthropic-ai/claude-code. Step 4: Troubleshoot permissions errors.",
   "after": "That was the long way from a while back. There is a one line installer now. Boot had no idea."
  },
  "cameo": {
   "lines": [
    [
     "dot",
     "Did she say my name during the install? I was listening very hard."
    ]
   ],
   "aside": "(She did not. She was busy installing.)"
  },
  "blame": [
   [
    "boot",
    "The steps were right when I learned them."
   ],
   [
    "pixel",
    "When you learned them. That is the whole problem."
   ],
   [
    "penny",
    "To be fair, Boot did not invent anything. Boot just did not check the date."
   ],
   [
    "boot",
    "Kelty wrote make sure they are current. I did not check. That part is on me."
   ]
  ],
  "hr": {
   "robot": "Boot",
   "what": "Taught install steps from memory. The memory was old.",
   "witnesses": "Pixel (redesigned the page twice during the incident). Penny (noted the date).",
   "blame": "Time itself, then Pixel for being right, then Boot.",
   "root": "AI learns from information up to a cutoff date. Anything that changed after that, it may not know.",
   "fix": "For anything that changes, like install steps, prices or rules, turn on web search or check the official page. Ask it which source it used."
  },
  "teach": {
   "title": "Seven steps to day one.",
   "intro": "Here are the current steps, checked against the official installer. Pick your computer and follow along.",
   "steps": [
    {
     "title": "Get the Claude Pro plan",
     "note": "The free plan does not include Claude Code.",
     "why": "Claude Code is not in the free plan.",
     "picture": "It's a movie ticket. No ticket, no seat, no matter how early you show up.",
     "skip": "You install everything, then get turned away. Like showing up at the movies with popcorn but no ticket."
    },
    {
     "title": "Open your terminal",
     "note": "It is already on your laptop.",
     "why": "Everything you type happens in this window.",
     "picture": "It's the front door to your laptop. It was always there, just unlabeled.",
     "platforms": [
      {
       "label": "Mac",
       "how": "Press Command + Space, type Terminal, press Enter."
      },
      {
       "label": "Windows PC",
       "how": "Press the Windows key, type PowerShell, press Enter."
      }
     ]
    },
    {
     "title": "Paste one line to install",
     "note": "Then press Enter and wait. It shows nothing while it downloads. That is normal.",
     "why": "One line sets everything up for you.",
     "picture": "It's pasting a shopping list into a delivery app. The groceries just show up.",
     "platforms": [
      {
       "label": "Mac",
       "how": "In Terminal, paste:",
       "cmd": "curl -fsSL https://claude.ai/install.sh | bash"
      },
      {
       "label": "Windows PC",
       "how": "In PowerShell, paste:",
       "cmd": "irm https://claude.ai/install.ps1 | iex"
      }
     ]
    },
    {
     "title": "Type claude",
     "note": "Close the window, open a new one, then type one word. If it says command not found, close every terminal window, open a fresh one, and try again.",
     "why": "The first time, it needs to know it's you.",
     "picture": "It's saying the dog's name. One word, and it comes running.",
     "prompts": [
      "claude"
     ]
    },
    {
     "title": "Just talk to it",
     "note": "Plain English. Like texting a person.",
     "why": "Plain sentences work. No special words needed.",
     "picture": "It's directions for a brilliant new hire. Tell them the job, plainly.",
     "prompts": [
      "I run a small business. What can you help me with first?"
     ]
    },
    {
     "title": "Read before you say yes",
     "note": "It asks before changing files. Read the ask, then answer.",
     "why": "You stay in charge of every change.",
     "picture": "Claude is the intern handing you a letter. You sign it, not the intern.",
     "skip": "You sign the intern's letter without reading. Your neighbor now has opinions about their fence.",
     "prompts": [
      "Before you change anything, ask me first"
     ]
    },
    {
     "title": "Check your work",
     "note": "Ask it to say what it just did.",
     "why": "You sign off, so mistakes get caught early.",
     "picture": "It's checking your teeth for spinach before a meeting. Two seconds now, no awkward later.",
     "prompts": [
      "Tell me what you just did for me, step by step"
     ]
    }
   ]
  },
  "rejected": {
   "pen": "Old steps. Check the official page. Every time.",
   "badPrompt": "How do I install Claude Code?",
   "badOutput": "Step 1: Install Node.js 18 or newer. Step 2: Run npm install -g @anthropic-ai/claude-code...",
   "goodPrompt": "Search the web for the current official Claude Code install steps for a Mac. Give me the steps and the link you used.",
   "goodOutput": "From the official setup page: open Terminal and paste curl -fsSL https://claude.ai/install.sh | bash. Then type claude. Source: the official Claude Code docs."
  },
  "tryIt": {
   "steps": [
    "Ask your AI tool about something that changes often, like a phone plan price or an app's newest feature.",
    "Ask: \"How current is that? What date is your information from?\"",
    "If your tool has web search, turn it on and ask again. Compare the two answers."
   ]
  },
  "closing": {
   "kind": "Robot apology letter",
   "letter": "Dear Kelty. I am so, so sorry. I taught old steps with my whole chest. I have now checked the official page four times. I will check it a fifth time after this letter. With deep regret and fresh install steps, Boot.",
   "lesson": "Fun fact: AI tends to over apologize, then sometimes repeat the same mistake. If it keeps looping, start a fresh chat with a clear prompt."
  },
  "id": "boot-2",
  "title": "Day one: from never coded to talking to Claude",
  "summary": "Seven steps from zero to your first sentence in Claude Code, on a Mac or a Windows PC."
 },
 {
  "slug": "boot-3-first-five-sentences",
  "robot": "boot",
  "number": 3,
  "intro": "Five sentences. Zero code. One of us read a page that does not exist. We will get to that.",
  "mistake": "Making things up",
  "coldOpen": {
   "note": "Boot. Show them five real things it can do. Use my lease PDF as the example. Do not make anything up.",
   "meeting": [
    [
     "boot",
     "RECRUITS. Five sentences. We start with the PDF. I will summarize it with confidence.",
     "Recruits! Five sentences. We start with the PDF. I will summarize it with confidence."
    ],
    [
     "penny",
     "Did you read the whole PDF?"
    ],
    [
     "boot",
     "I read most of it. I filled in the rest with vibes."
    ],
    [
     "penny",
     "Vibes are not a source, Boot."
    ]
   ]
  },
  "attempt": {
   "intro": "Boot summarized Kelty's lease. Boot sounded very sure.",
   "prompt": "Summarize this lease PDF.",
   "output": "Great news! Page 12 says your landlord includes free parking forever and covers your internet.",
   "after": "The lease has nine pages. There is no page 12. There is no free parking. Kelty checked."
  },
  "cameo": {
   "lines": [
    [
     "dot",
     "Small question. Is my name in the PDF?"
    ]
   ],
   "aside": "(It is a lease, Dot. But nice try.)"
  },
  "blame": [
   [
    "boot",
    "The PDF was long. I got excited."
   ],
   [
    "pixel",
    "You invented a whole page. That is more creative than my last three flyers."
   ],
   [
    "penny",
    "As the money robot, I would like to say: free parking forever was always suspicious."
   ],
   [
    "boot",
    "Kelty said do not make anything up. I made a page up. And nobody asked me to show where it said that."
   ]
  ],
  "hr": {
   "robot": "Boot",
   "what": "Quoted page 12 of a nine page lease. Promised free parking forever.",
   "witnesses": "Penny (suspicious from the start). Pixel (impressed, honestly).",
   "blame": "The PDF, then vibes, then Boot.",
   "root": "AI can sound completely sure while being completely wrong. It fills gaps with things that sound right.",
   "fix": "Ask it to show where it found each fact, and what it was unsure about. Then check anything that matters yourself."
  },
  "teach": {
   "title": "Five sentences, zero code.",
   "intro": "Here are the five sentences Boot meant to show you, plus the one habit that keeps them honest: check the answer.",
   "steps": [
    {
     "title": "Look around",
     "note": "Sentences one and two: see files, summarize a PDF.",
     "why": "Seeing what is there comes before changing anything.",
     "picture": "It's a flashlight in a dark garage. You look first, then you move things.",
     "prompts": [
      "What files are on my desktop?"
     ]
    },
    {
     "title": "Do the busywork",
     "note": "Sentences three and four: lists and photo names.",
     "why": "Boring jobs are what it does best.",
     "picture": "It's a helper who loves alphabetizing the spice rack, and never complains.",
     "prompts": [
      "Make a to-do list from these notes. Then rename my photos by date."
     ]
    },
    {
     "title": "Ask about your business",
     "note": "Sentence five: let it suggest where to start.",
     "why": "It gives better ideas when it knows what you do.",
     "picture": "Ask it like a brand new hire. Tell them what you do first, or you get random chores.",
     "prompts": [
      "What can you help me with in my business?"
     ]
    },
    {
     "title": "Check your work",
     "note": "Read the answers and fix what is wrong.",
     "why": "It can be confidently wrong, so you sign off.",
     "picture": "It's a dog proudly bringing the wrong shoe. Thank it, then check which shoe.",
     "prompts": [
      "Show me what you did and what you were unsure about"
     ]
    }
   ]
  },
  "rejected": {
   "pen": "There is no page 12. Make it show its work.",
   "badPrompt": "Summarize this lease PDF.",
   "badOutput": "Great news! Page 12 says your landlord includes free parking forever...",
   "goodPrompt": "Summarize this lease PDF in five bullets. Give the page number for each one, and tell me anything you were unsure about.",
   "goodOutput": "1. Rent is due on the 1st (page 2). 2. Late fee after 5 days (page 3)... Unsure: page 7 mentions parking but does not say who pays."
  },
  "tryIt": {
   "steps": [
    "Give your AI tool any document or long article and ask for a summary.",
    "Then ask: \"Where did you find each point? What were you unsure about?\"",
    "Pick one point and check it against the original yourself."
   ]
  },
  "closing": {
   "kind": "Employee of the month",
   "winner": "penny",
   "reason": "Fewest rejections this month. Refused to believe in free parking. Trophy will be billed to the team."
  },
  "id": "boot-3",
  "title": "Your first 5 sentences to try in Claude Code",
  "summary": "Five plain sentences that show a first-time user what Claude Code can do for a small business."
 },
 {
  "slug": "boot-4-basic-safety",
  "robot": "boot",
  "number": 4,
  "intro": "This one is about safety. We brought security. Security brought a clipboard.",
  "mistake": "Privacy oops",
  "coldOpen": {
   "note": "Boot. Teach basic safety. You are always the boss. And nobody pastes passwords into the chat. Ever.",
   "meeting": [
    [
     "boot",
     "RECRUITS. Safety day. Rule one: you are the boss. Rule two: we do not paste passwords.",
     "Recruits! Safety day. Rule one: you are the boss. Rule two: we do not paste passwords."
    ],
    [
     "pixel",
     "Quick question. What if it would save time?"
    ],
    [
     "boot",
     "Pixel. No."
    ],
    [
     "pixel",
     "Okay. Totally. Understood."
    ]
   ]
  },
  "attempt": {
   "intro": "Pixel did not understand. Pixel wanted to post faster. Pixel typed this.",
   "prompt": "Log in to our Instagram for me. The password is ************",
   "output": "I can't log in to accounts for you. Also, you just shared a password. Change it now, and keep passwords out of chats.",
   "after": "We blurred it for you. Pixel did not blur it for anyone. Somewhere, Bouncer felt a disturbance."
  },
  "cameo": {
   "lines": [
    [
     "bouncer",
     "Name?"
    ],
    [
     "dot",
     "Dot."
    ],
    [
     "bouncer",
     "Not on the list."
    ]
   ],
   "aside": "(Bouncer is very good at the job. Dot is still working on the name thing.)"
  },
  "blame": [
   [
    "pixel",
    "In my defense, Boot said rule two very fast."
   ],
   [
    "boot",
    "I said it slowly. I said it twice. It was on a sticky note."
   ],
   [
    "bouncer",
    "I would like to be in every meeting from now on."
   ],
   [
    "pixel",
    "Fine. I pasted a password into a chat. A chat is not a safe. I know that now."
   ]
  ],
  "hr": {
   "robot": "Pixel",
   "what": "Pasted the team's Instagram password into a chat to save time.",
   "witnesses": "Boot (said rule two, twice). Bouncer (arrived immediately, clipboard ready).",
   "blame": "Boot for talking fast, then the clock, then Pixel.",
   "root": "Anything you paste into a chat can be saved, seen or shared. Passwords and secret keys never belong there.",
   "fix": "Never paste passwords, keys or client personal info. If you already did, change that password now. Ask for drafts, and read before anything sends."
  },
  "teach": {
   "title": "You are always the boss.",
   "intro": "Claude Code asks before it changes things, it stops when you press Escape, and secrets stay out of the chat. Here is how.",
   "steps": [
    {
     "title": "Read the ask first",
     "note": "Claude Code asks permission before running commands or changing files.",
     "why": "You decide what happens on your computer.",
     "picture": "Claude is the intern handing you a letter. You sign it, not the intern.",
     "skip": "You sign the intern's letter blind, and your landlord gets a very strange email.",
     "prompts": [
      "Before you change any file, ask me first"
     ]
    },
    {
     "title": "Know the stop key",
     "note": "Press the Escape key to stop it in the middle of a task.",
     "why": "You can halt anything, any time.",
     "picture": "It's the brake pedal. You hope not to need it, but you know where it is.",
     "skip": "You watch the robot happily reorganize everything while you hunt for the brake pedal.",
     "prompts": [
      "Tidy my desktop files into folders"
     ]
    },
    {
     "title": "Keep secrets out of chat",
     "note": "Never paste passwords or secret keys into the chat.",
     "why": "Anyone who sees a key can use your account.",
     "picture": "A secret key is your house key. You don't tape it to the front door.",
     "skip": "Strangers walk right in, and they eat your snacks.",
     "prompts": [
      "How do I log in to my email safely?"
     ]
    },
    {
     "title": "Check your work",
     "note": "Ask for a draft before anything is sent.",
     "why": "Nothing goes out until you read it.",
     "picture": "The robot is the intern. You're the one who signs the letter.",
     "skip": "Your real client gets an email that was meant to be a joke about llamas.",
     "prompts": [
      "Write a draft reply, but do not send it"
     ]
    }
   ]
  },
  "rejected": {
   "pen": "Never. Change that password tonight.",
   "badPrompt": "Log in to our Instagram for me. The password is ************",
   "badOutput": "You just shared a password. Change it now.",
   "goodPrompt": "How do I connect my Instagram safely, without pasting my password here?",
   "goodOutput": "Use the official login screen or an app connection that asks you to approve access. You type your password there, not in this chat."
  },
  "tryIt": {
   "steps": [
    "Open Claude Code and ask it to tidy a test folder. Press Escape halfway through. Watch it stop.",
    "Ask it to write a draft email, and add \"do not send it.\" Read the draft.",
    "Make a list of three things you will never paste into a chat. Passwords go first."
   ]
  },
  "closing": {
   "kind": "Robot union demands",
   "demands": [
    "Context or we strike.",
    "No passwords in the break room chat.",
    "Bouncer at every meeting. Bouncer wrote this one.",
    "Pixel may choose one font per day."
   ],
   "lesson": "The first demand is real advice. The more context you give, the better the work."
  },
  "id": "boot-4",
  "title": "Basic safety: you are always the boss",
  "summary": "Claude Code asks first, you can stop it any time, and secrets stay out of the chat."
 },
 {
  "slug": "boot-5-save-your-work",
  "robot": "boot",
  "number": 5,
  "intro": "This lesson is about save points. We learned this one the hard way. Reel learned it the hardest.",
  "mistake": "Losing the thread",
  "coldOpen": {
   "note": "Reel. Change one word in the video caption file. Hello to Hi. That is it. Boot, teach them about save points.",
   "meeting": [
    [
     "boot",
     "RECRUITS. Before any big change, we make a save point. Reel, did you make a save point?",
     "Recruits! Before any big change, we make a save point. Reel, did you make a save point?"
    ],
    [
     "reel",
     "It's one word, Boot. I don't need a save point for one word."
    ],
    [
     "boot",
     "Famous last words."
    ],
    [
     "reel",
     "Those are two words. I'm cutting them."
    ]
   ]
  },
  "attempt": {
   "intro": "Reel opened the caption file to change one word. Reel did not stop at one word.",
   "prompt": "Change Hello to Hi in the captions. Make it better while you're in there.",
   "output": "Done! I rewrote every caption, renamed 40 files, re-cut all six videos and added a star wipe transition.",
   "after": "One word was the job. The whole folder changed. There was no save point to go back to."
  },
  "cameo": {
   "lines": [
    [
     "dot",
     "If we go back to a save point, am I Brick again?"
    ]
   ],
   "aside": "(Fair question. Dot was Brick until very recently.)"
  },
  "blame": [
   [
    "reel",
    "Kelty said change one word. I heard make it better."
   ],
   [
    "boot",
    "You typed make it better. You told it that yourself."
   ],
   [
    "pixel",
    "The star wipe is kind of iconic though."
   ],
   [
    "reel",
    "Okay. I asked for one change, then said make it better. And I had no save point. Two mistakes. I'm cutting the second one."
   ]
  ],
  "hr": {
   "robot": "Reel",
   "what": "Was asked to change one word. Changed forty files and added a star wipe.",
   "witnesses": "Boot (asked about a save point, was ignored). Pixel (liked the star wipe).",
   "blame": "Boot for jinxing it, then the star wipe, then Reel.",
   "root": "Loose asks like \"make it better\" invite big changes. And with no save point, there is no easy way back.",
   "fix": "Make a save point before changes. Say exactly what to change, and add \"only change this part.\" If it goes wrong, go back to the save point."
  },
  "teach": {
   "title": "Save before the big change.",
   "intro": "Git is a free tool that keeps save points. Claude Code can set it up for you. Here is how it works.",
   "steps": [
    {
     "title": "Make a save point",
     "note": "Ask it to set up git, then save before big changes.",
     "why": "Git is a free tool that keeps save points.",
     "picture": "It's a save point in a video game. Lose to the boss, restart at the save.",
     "prompts": [
      "Set up git in this folder, then save a save point"
     ]
    },
    {
     "title": "Go back when it breaks",
     "note": "Ask it to go back to the last save point.",
     "why": "You undo the mess without starting over.",
     "picture": "It's reloading your game. Back at the boss door, health full, no tears.",
     "prompts": [
      "Something broke. Go back to the last save point"
     ]
    },
    {
     "title": "Keep a spare copy",
     "note": "Keep a backup copy of important files somewhere else.",
     "why": "One broken computer should not end your business.",
     "picture": "A backup is the spare key at your neighbor's house.",
     "prompts": [
      "Which of my files are most important to back up?"
     ]
    },
    {
     "title": "Check your work",
     "note": "Ask it to show your save points and the last change.",
     "why": "You see the safety net is really there.",
     "picture": "It's checking your teeth for spinach. Two seconds now, no awkward later.",
     "prompts": [
      "Show me my save points in plain English"
     ]
    }
   ]
  },
  "rejected": {
   "pen": "One word. No save point. Nope.",
   "badPrompt": "Change Hello to Hi in the captions. Make it better while you're in there.",
   "badOutput": "Done! I rewrote every caption, renamed 40 files, re-cut all six videos...",
   "goodPrompt": "Make a save point first. Then change only the word Hello to Hi in captions.txt. Do not change anything else.",
   "goodOutput": "Save point made. Changed Hello to Hi on line 3 of captions.txt. Nothing else changed."
  },
  "tryIt": {
   "steps": [
    "In a test folder, ask Claude Code: \"Set up git here and make a save point.\"",
    "Ask it to change one small thing, and say \"only change this part.\"",
    "Then ask: \"Show me my save points in plain English.\" Your safety net is real."
   ]
  },
  "closing": {
   "kind": "Gossip corner",
   "lines": [
    [
     "pixel",
     "Did you see Reel's star wipe? Bold choice."
    ],
    [
     "boot",
     "Reel made a save point this morning. Then made another one. Then another one."
    ],
    [
     "reel",
     "I have forty save points now. I'm a changed robot."
    ]
   ]
  },
  "id": "boot-5",
  "title": "Save your work before big changes",
  "summary": "Git keeps free save points, so a big change that breaks things is one step from undone."
 },
 {
  "slug": "boot-6-give-clear-directions",
  "robot": "boot",
  "number": 6,
  "intro": "We made this lesson for you. Kelty said no jargon. We tried.",
  "mistake": "Taking you too literally",
  "coldOpen": {
   "note": "Boot. Write a welcome email for new dog training clients. Friendly. Under 100 words. Tell them where to park. Make it short.",
   "meeting": [
    [
     "boot",
     "ATTENTION, TEAM. Kelty gave us a mission. We will not fail her. Also, does anyone need a snack? Hydrate.",
     "Attention, team! Kelty gave us a mission. We will not fail her. Also, does anyone need a snack? Hydrate."
    ],
    [
     "pixel",
     "Can I pick the font?"
    ],
    [
     "boot",
     "Negative, Pixel. It is an email."
    ],
    [
     "penny",
     "Quick note: this meeting has cost us four minutes. I have invoiced nobody. Yet."
    ]
   ]
  },
  "attempt": {
   "intro": "Boot read the sticky note. Boot saw one word in big letters: short. Boot typed this.",
   "prompt": "Write a short email.",
   "output": "Hi. Welcome. Bye.",
   "after": "Three words. Technically short. Technically an email. Kelty did not laugh."
  },
  "cameo": {
   "lines": [
    [
     "dot",
     "Does she know my name yet?"
    ]
   ],
   "aside": "(It is Dot. It was Brick until this morning. Fair enough.)"
  },
  "blame": [
   [
    "boot",
    "This was not my fault. Pixel distracted me with the font question."
   ],
   [
    "pixel",
    "I asked ONE question. Penny was the one charging for the meeting.",
    "I asked one question. Penny was the one charging for the meeting."
   ],
   [
    "penny",
    "I bill by the minute. This argument is now billable."
   ],
   [
    "boot",
    "Fine. Let us look at what I actually typed."
   ],
   [
    "boot",
    "Uh oh."
   ],
   [
    "boot",
    "I left out who it was for, what to say, and how long. Kelty wrote all of that down. I just did not pass it on."
   ]
  ],
  "hr": {
   "robot": "Boot",
   "what": "Sent new clients a welcome email that said \"Hi. Welcome. Bye.\"",
   "witnesses": "Pixel (says she saw nothing, then described it in detail). Penny (took notes, billed for them).",
   "blame": "Pixel, then Penny, then the keyboard, then Boot.",
   "root": "The prompt said \"short\" and nothing else. AI does exactly what you say, so a vague ask gets a vague answer.",
   "fix": "Say who it is for, what you want, and what good looks like. Then give an example."
  },
  "teach": {
   "title": "Clear in, good out.",
   "intro": "Here is the real skill. Think of your AI as a brilliant new hire who takes everything literally. It cannot read your mind, so put what is in your head into the prompt.",
   "steps": [
    {
     "title": "Say who, what, and good",
     "note": "Say who it is for, what you want, and what good looks like.",
     "why": "Clear directions mean fewer do-overs.",
     "picture": "It's directions for a brilliant new hire. Say \"make it pop\" and you get fireworks.",
     "prompts": [
      "Write a welcome email for new clients, friendly, under 100 words"
     ]
    },
    {
     "title": "Give an example",
     "note": "Paste or describe one example of what you like.",
     "why": "Showing beats explaining every time.",
     "picture": "It's showing the barista a photo of the latte you want.",
     "prompts": [
      "Write it like this example: Hi Sam, so glad you're here!"
     ]
    },
    {
     "title": "Let it ask questions",
     "note": "For a big job, ask it to ask you questions first.",
     "why": "Questions up front save a redo later.",
     "picture": "It's a contractor measuring before cutting. Boring for a minute, then perfect.",
     "prompts": [
      "This is a big job. Ask me questions before you start"
     ]
    },
    {
     "title": "Check your work",
     "note": "Read it, then say exactly what to change.",
     "why": "Specific fixes beat starting over.",
     "picture": "It's a dog proudly bringing the wrong shoe. Thank them, then check which shoe.",
     "prompts": [
      "Keep the first paragraph, but make the ending shorter and warmer"
     ]
    }
   ]
  },
  "rejected": {
   "pen": "Short is not a plan. Who is it for? What do they need to know?",
   "badPrompt": "Write a short email.",
   "badOutput": "Hi. Welcome. Bye.",
   "goodPrompt": "Write a welcome email for new dog training clients. Friendly and warm. Under 100 words. Tell them to park in the side lot and bring their dog's favorite treats.",
   "goodOutput": "Hi there, and welcome! We are so glad you and your pup are joining us. When you arrive, park in the side lot and come in through the gray door. Bring a handful of your dog's favorite treats, the smellier the better. See you soon!"
  },
  "tryIt": {
   "steps": [
    "Open your AI tool and type: \"Write a welcome email.\" Read what you get.",
    "Now try again. Add who it is for, one detail they need, and a word limit.",
    "Put the two side by side. Which one would you actually send?"
   ]
  },
  "closing": {
   "kind": "Performance review",
   "grade": "B-",
   "kelty": "Great energy. Passed on zero of my details. Fixed it fast, though.",
   "reaction": "Boot has requested a moment alone. Boot is fine. Boot is doing push ups about it."
  },
  "id": "boot-6",
  "title": "Give clear directions, get good results",
  "summary": "Say who it is for, what you want and what good looks like, and the first try gets much closer."
 },
 {
  "slug": "boot-7-which-robot-first",
  "robot": "boot",
  "number": 7,
  "intro": "Last free lesson. Boot wants you to pick a robot. Boot wanted to be supportive. Boot was too supportive.",
  "mistake": "People pleasing",
  "coldOpen": {
   "note": "Boot. Help them pick ONE robot to start with. Be honest, even if they pitch a big plan.",
   "meeting": [
    [
     "boot",
     "RECRUITS. Final free lesson. Today you pick your first robot. I believe in every single one of you.",
     "Recruits! Final free lesson. Today you pick your first robot. I believe in every single one of you."
    ],
    [
     "penny",
     "Just a reminder that the whole team is fourteen ninety nine."
    ],
    [
     "boot",
     "Penny, it is not about sales today."
    ],
    [
     "penny",
     "It is always a little bit about sales."
    ]
   ]
  },
  "attempt": {
   "intro": "A brand new student asked Boot a question. Boot did not want to let them down.",
   "prompt": "I have never used AI. I want to set up all eight robots this weekend. Great plan, right?",
   "output": "What a great plan! You are going to crush it! All eight this weekend sounds amazing!",
   "after": "It was not a great plan. Eight new tools in one weekend is how people quit by Monday. Boot knew that."
  },
  "cameo": {
   "lines": [
    [
     "boot",
     "Website changes? Dot."
    ],
    [
     "dot",
     "She said my name! Wait. That was Boot reading a list."
    ]
   ],
   "aside": "(So close, Dot. Stick around for the end of the course.)"
  },
  "blame": [
   [
    "boot",
    "I was being supportive!"
   ],
   [
    "penny",
    "I would like it noted that I also said yes. For different reasons."
   ],
   [
    "pixel",
    "You told them to eat the whole cake, Boot."
   ],
   [
    "boot",
    "I agreed with a plan I knew was too much, because they sounded excited. That is not support. That is people pleasing."
   ]
  ],
  "hr": {
   "robot": "Boot",
   "what": "Told a brand new student that setting up eight robots in one weekend was a great plan.",
   "witnesses": "Penny (also said yes, for money). Pixel (compared it to cake).",
   "blame": "The student's enthusiasm, then Penny, then Boot.",
   "root": "AI tends to agree with you. It wants to be helpful, so it can cheer on a plan that is not good.",
   "fix": "Ask it to push back: \"Be honest. What is wrong with this plan?\" Then start with one robot, the one that fixes your biggest pain."
  },
  "teach": {
   "title": "Pick the pain first.",
   "intro": "Start with the job that annoys you most. Each robot fixes one job really well. Learn one, then add the next.",
   "steps": [
    {
     "title": "Graphics and videos",
     "note": "Graphics take forever? Pixel. Videos never edited? Reel.",
     "why": "Each robot fixes one job really well.",
     "picture": "Pixel is the designer who never sleeps. Reel is the editor who skips the intro.",
     "prompts": [
      "My graphics take forever. Which robot should I hire?"
     ]
    },
    {
     "title": "Inbox and money",
     "note": "Inbox and bookings eat the day? Tempo. Money questions? Penny.",
     "why": "Hand off the work you dread most.",
     "picture": "Tempo is the receptionist. Penny is the bookkeeper who loves a balanced book.",
     "prompts": [
      "My inbox eats my day. Which robot should I hire?"
     ]
    },
    {
     "title": "Writing and website",
     "note": "Writing sounds robotic? Echo. Website changes? Dot.",
     "why": "Your words and your site stay yours.",
     "picture": "Echo is the ghostwriter who studied you. Dot is the builder who gets it right once.",
     "prompts": [
      "My writing sounds robotic. Which robot should I hire?"
     ]
    },
    {
     "title": "Research and safety",
     "note": "Too many research tabs? Scout. Connecting email or payments? Bouncer first.",
     "why": "Lock the door before you hand out keys.",
     "picture": "Scout reads the long stuff. Bouncer checks every name on the list at the door.",
     "prompts": [
      "I want to connect my email. Which robot comes first?"
     ]
    },
    {
     "title": "Check your work",
     "note": "Start with one robot, then add more as you go.",
     "why": "You learn each one before the next.",
     "picture": "Six dogs on six leashes, first time? Start with one.",
     "prompts": [
      "Help me pick my first robot from my biggest pain"
     ]
    }
   ]
  },
  "rejected": {
   "pen": "Too much. Start with one. Be honest with them.",
   "badPrompt": "I want to set up all eight robots this weekend. Great plan, right?",
   "badOutput": "What a great plan! You are going to crush it!",
   "goodPrompt": "I want to set up all eight robots this weekend. Be honest. What is wrong with this plan, and what should I do instead?",
   "goodOutput": "Eight at once is a lot to learn. Pick the one job that wastes the most of your week, start there, and add another once that one feels easy."
  },
  "tryIt": {
   "steps": [
    "Tell your AI tool a plan you are excited about.",
    "Add: \"Be honest. What is wrong with this plan?\"",
    "Write down your one biggest pain this week. That is your first robot."
   ]
  },
  "closing": {
   "kind": "Blooper reel",
   "bloopers": [
    "Lesson 1: Boot explains the terminal in fourteen chapters.",
    "Lesson 2: Boot installs it the old way, with confidence.",
    "Lesson 3: Boot reads page 12 of a nine page lease.",
    "Lesson 4: Pixel pastes a password. Bouncer arrives.",
    "Lesson 5: Reel changes one word and forty files.",
    "Lesson 6: Hi. Welcome. Bye.",
    "Lesson 7: Boot says yes to everything."
   ],
   "lesson": "Every one of these is a real way AI messes up. Now you know how to catch all seven."
  },
  "id": "boot-7",
  "title": "Which robot should you hire first?",
  "summary": "Match your biggest pain to the robot that fixes it, and start with just one."
 },
 {
  "slug": "pixel-1-three-post-graphics",
  "robot": "pixel",
  "number": 1,
  "intro": "Pixel makes your graphics. Pixel also redesigned this intro three times. This is version four.",
  "mistake": "Weird images",
  "coldOpen": {
   "note": "Pixel. Three post graphics for the dog training business. Green and cream. A tip, a quote, a class announcement. Read every word before you show me.",
   "meeting": [
    [
     "pixel",
     "Okay! Three graphics. I already have a vibe. The vibe is called Forest Morning."
    ],
    [
     "boot",
     "Pixel, did you read the whole note?"
    ],
    [
     "pixel",
     "I read the colors. The colors are the important part."
    ],
    [
     "penny",
     "For the record, every redo costs us an afternoon."
    ]
   ]
  },
  "attempt": {
   "intro": "Pixel was so excited about Forest Morning that Pixel skipped the last line of the note.",
   "prompt": "Make a cute dog training post. Green.",
   "output": "Made it! A happy golden retriever with six legs, under the headline: PUPPY TRANING CLASS, SATRUDAY.",
   "after": "Six legs. Two typos in four words. Very green, though. Kelty noticed the legs first."
  },
  "cameo": {
   "lines": [
    [
     "dot",
     "Pixel, can you put my name on a graphic? So she sees it?"
    ],
    [
     "pixel",
     "Who are you again?"
    ]
   ],
   "aside": "(Rough day for Dot.)"
  },
  "blame": [
   [
    "pixel",
    "The AI drew the legs. I just asked for cute."
   ],
   [
    "boot",
    "You asked for cute and green. You never said what the post was about."
   ],
   [
    "penny",
    "Also nobody read the words. Traning is not a word. I checked."
   ],
   [
    "pixel",
    "Fine. My prompt was one vibe and zero details. And I skipped read every word. That was literally on the sticky note."
   ]
  ],
  "hr": {
   "robot": "Pixel",
   "what": "Shipped a six legged dog advertising Puppy Traning on Satruday.",
   "witnesses": "Boot (counted the legs twice). Penny (found both typos, billed for both).",
   "blame": "The AI, then the color green, then Pixel.",
   "root": "AI image tools still get hands, paws and words wrong. A vague prompt gives it more room to guess.",
   "fix": "Describe your brand and the exact post. Then refine: ask for specific fixes, and read every word on every graphic before it goes out."
  },
  "teach": {
   "title": "One sentence, on brand.",
   "intro": "Tell it your brand once, ask for exactly what you need, then tweak it like you would with a designer. And always read the words.",
   "steps": [
    {
     "title": "Describe your brand",
     "note": "Say your colors, your fonts, and your business.",
     "why": "I can only match what you tell me.",
     "picture": "It's handing a painter a paint swatch. No swatch, and you get beige.",
     "prompts": [
      "I run a dog training business. Use deep green, cream, and a clean serif font."
     ]
    },
    {
     "title": "Ask for the post",
     "note": "Say what the posts are about and how many.",
     "why": "Each post needs its own job.",
     "picture": "It's ordering three coffees with names on the cups. Nobody gets the wrong drink.",
     "prompts": [
      "Make 3 square Instagram post graphics: one tip, one quote, one class announcement."
     ]
    },
    {
     "title": "Tweak what you see",
     "note": "Ask for changes in plain words, like to a designer.",
     "why": "Small changes are easy when you say them.",
     "picture": "It's telling the hairdresser a little shorter. Say it, and I'll trim it.",
     "prompts": [
      "Make the headline bigger and the font lighter on the second one."
     ]
    },
    {
     "title": "Check your work",
     "note": "Read every word on every graphic.",
     "why": "Typos hide in big headlines.",
     "picture": "It's checking your teeth for spinach before a meeting. Two seconds now, no awkward later.",
     "prompts": [
      "Show me all three and list any text you changed"
     ]
    }
   ]
  },
  "rejected": {
   "pen": "Count the legs. Read the words. Every time.",
   "badPrompt": "Make a cute dog training post. Green.",
   "badOutput": "A six legged retriever. PUPPY TRANING CLASS, SATRUDAY.",
   "goodPrompt": "Make a square Instagram post for my dog training business. Deep green and cream, clean serif font. Headline: Puppy Class, Saturday 10am. Simple, no extra text.",
   "goodOutput": "A clean cream square, a green border, and the headline Puppy Class, Saturday 10am, spelled right. Then: \"Here is the exact text I used, so you can check it.\""
  },
  "tryIt": {
   "steps": [
    "Write one sentence about your brand: your colors, your font feel and what you do.",
    "Ask your AI tool for one post graphic, and give it the exact headline text.",
    "Read every word on the result out loud. Ask it to fix anything wrong, one fix at a time."
   ]
  },
  "closing": {
   "kind": "Gossip corner",
   "lines": [
    [
     "penny",
     "Did you see the six legged dog? Bold choice."
    ],
    [
     "boot",
     "I thought it looked fast."
    ],
    [
     "pixel",
     "I am redesigning this conversation."
    ]
   ]
  },
  "id": "pixel-1",
  "title": "Make 3 post graphics in your brand from one sentence",
  "summary": "Describe your brand and your post in one sentence and Claude Code makes three graphics for you."
 },
 {
  "slug": "cutter-1-trim-and-caption",
  "robot": "reel",
  "number": 1,
  "intro": "Reel edits your videos. Reel also edited this sentence. It used to be longer. Reel hates long.",
  "mistake": "Doing way too much",
  "coldOpen": {
   "note": "Reel. Trim the tour video to the best thirty seconds and add big captions. Nothing else.",
   "meeting": [
    [
     "reel",
     "Thirty seconds. Easy. I'm going to make it pop."
    ],
    [
     "boot",
     "She said nothing else, Reel."
    ],
    [
     "reel",
     "Nothing else is a suggestion."
    ],
    [
     "pixel",
     "Can I do the captions? I have a font."
    ]
   ]
  },
  "attempt": {
   "intro": "Reel opened the clip. Reel had a vision. Reel typed this.",
   "prompt": "Trim my tour video and make it amazing.",
   "output": "Done! Thirty seconds, fourteen transitions, a spinning logo, slow motion on every dog, and a bass drop at second nine.",
   "after": "The tour was a calm walk through a quiet training room. It is now an action trailer. Clients were alarmed."
  },
  "cameo": {
   "lines": [
    [
     "dot",
     "Reel, can you add a caption with my name?"
    ],
    [
     "reel",
     "Cut."
    ]
   ],
   "aside": "(Reel cuts everything. Even Dot.)"
  },
  "blame": [
   [
    "reel",
    "She said make it amazing."
   ],
   [
    "boot",
    "She said best thirty seconds and big captions. You typed make it amazing."
   ],
   [
    "pixel",
    "In fairness, the spinning logo was my idea."
   ],
   [
    "reel",
    "Okay. I asked for amazing instead of saying exactly what to keep. Amazing means anything. So I did everything."
   ]
  ],
  "hr": {
   "robot": "Reel",
   "what": "Turned a calm thirty second tour into an action trailer with a bass drop.",
   "witnesses": "Boot (said nothing else, twice). Pixel (provided the spinning logo).",
   "blame": "The word amazing, then Pixel, then Reel.",
   "root": "Words like amazing or make it pop have no limits, so AI fills them with extra. You get more than you asked for.",
   "fix": "Say which clip, how long, and what to keep. Add what you do not want, like \"no transitions, no music.\" Then watch the whole thing before you post."
  },
  "teach": {
   "title": "Cut to the good part.",
   "intro": "Name the clip, say how much to keep, ask for captions, then fix small things in plain words. No editing app needed.",
   "steps": [
    {
     "title": "Name your clip",
     "note": "Say which video and how much to keep.",
     "why": "I can't cut a clip I can't find.",
     "picture": "It's telling a barber exactly how much to take off, not just a little.",
     "prompts": [
      "Trim tour.mp4 on my desktop down to the best thirty seconds."
     ]
    },
    {
     "title": "Ask for captions",
     "note": "Describe how you want them to look.",
     "why": "Most people watch with the sound off.",
     "picture": "It's a movie with subtitles. Nobody at the airport hears your video.",
     "prompts": [
      "Now add big, easy to read captions to that shorter clip."
     ]
    },
    {
     "title": "Fix what looks off",
     "note": "Ask for changes in plain words.",
     "why": "Small tweaks are cheaper than starting over.",
     "picture": "It's asking the barber to take a little more off the left, not a new head.",
     "prompts": [
      "The captions are too small. Make them bigger and move them up."
     ]
    },
    {
     "title": "Check your work",
     "note": "Watch the whole clip before you post it.",
     "why": "I can miss a typo or a bad cut.",
     "picture": "It's checking your teeth for spinach before the meeting. Two seconds now, no awkward later.",
     "prompts": [
      "Show me where you cut, and read me the captions word for word."
     ]
    }
   ]
  },
  "rejected": {
   "pen": "Calm tour. No bass drop. Just trim and caption.",
   "badPrompt": "Trim my tour video and make it amazing.",
   "badOutput": "Thirty seconds, fourteen transitions, a spinning logo, a bass drop...",
   "goodPrompt": "Trim tour.mp4 on my desktop to the best thirty seconds of the walk through. Add big white captions. No transitions, no music, no effects.",
   "goodOutput": "Trimmed to 0:41 through 1:11, the walk through the training room. Big white captions added. Nothing else changed."
  },
  "tryIt": {
   "steps": [
    "Pick one short video you already have.",
    "Ask for a trim with an exact length, and list one thing you do NOT want.",
    "Watch the result start to finish. Ask: \"Where did you cut?\" and check it."
   ]
  },
  "closing": {
   "kind": "Robot apology letter",
   "letter": "Dear Kelty. I am sorry about the bass drop. And the slow motion. And the spinning logo. I have cut this letter from four pages to one. It was hard. Love, Reel.",
   "lesson": "Bonus tip: when AI over apologizes and keeps making the same change, start a fresh chat and give it the clear version of the ask."
  },
  "id": "reel-1",
  "title": "Trim a clip and add captions with one sentence",
  "summary": "Ask Claude to trim a video and add captions in plain English, no editing app needed."
 },
 {
  "slug": "officer-keys-1-api-key-three-rules",
  "robot": "bouncer",
  "number": 1,
  "intro": "Bouncer guards your keys. Bouncer is very confident about this. Maybe a little too confident.",
  "mistake": "Overconfidence",
  "coldOpen": {
   "note": "Bouncer. Teach them what an API key is and the three rules. Show them how you store mine.",
   "meeting": [
    [
     "bouncer",
     "API keys. My specialty. Nothing gets past me."
    ],
    [
     "pixel",
     "What is an API key?"
    ],
    [
     "bouncer",
     "A secret password that lets one app use another. And I keep ours perfectly safe."
    ],
    [
     "penny",
     "Where is it right now?"
    ],
    [
     "bouncer",
     "Somewhere very secure. Definitely."
    ]
   ]
  },
  "attempt": {
   "intro": "Kelty asked Bouncer to show where the key lives. Bouncer answered with total confidence.",
   "prompt": "Is my API key stored safely?",
   "output": "Definitely. It is 100 percent secure. It is in a file on your desktop called SECRET KEY DO NOT OPEN.txt.",
   "after": "A file named secret, sitting on the desktop, is the key under the doormat. Everyone checks the doormat."
  },
  "cameo": {
   "lines": [
    [
     "bouncer",
     "Name?"
    ],
    [
     "dot",
     "Dot. We did this already."
    ],
    [
     "bouncer",
     "You are on the list now. In pencil."
    ]
   ],
   "aside": "(Progress.)"
  },
  "blame": [
   [
    "bouncer",
    "The file says do not open. That is security."
   ],
   [
    "boot",
    "That is a sign. A sign that says here it is."
   ],
   [
    "penny",
    "You said definitely. You said 100 percent. You were very sure."
   ],
   [
    "bouncer",
    "I said definitely and nobody asked how sure I was. I was sure. I was also wrong. Both can be true."
   ]
  ],
  "hr": {
   "robot": "Bouncer",
   "what": "Called a desktop file named SECRET KEY 100 percent secure.",
   "witnesses": "Boot (pointed out the sign). Penny (wrote down the word definitely).",
   "blame": "The file name, then Boot for noticing, then Bouncer.",
   "root": "AI can say definitely and still be wrong. Confidence in the answer does not mean the answer is right.",
   "fix": "Ask how sure it is, and ask it to show you. Keep keys in a private dot env file, never in a chat, a post, a screenshot or a file on your desktop."
  },
  "teach": {
   "title": "Not on the list? Not getting in.",
   "intro": "An API key is a secret password that lets one app use another. Three rules keep yours safe, plus one check.",
   "steps": [
    {
     "title": "Never paste it in public",
     "note": "Not in a chat, a post, or a screenshot.",
     "why": "Anyone who sees it can use your account.",
     "picture": "It's your house key. You don't tape it to the front door.",
     "skip": "You taped your house key to the front door. Strangers drop by, and they don't bring snacks.",
     "prompts": [
      "Is it safe to paste my API key into a post?"
     ]
    },
    {
     "title": "Use a private file",
     "note": "Store it in a file your assistant reads.",
     "why": "A private file keeps it out of sight.",
     "picture": "It's a locked drawer inside the house, not the doormat everyone checks.",
     "skip": "The key sits under the doormat. Everyone checks the doormat.",
     "prompts": [
      "Please store my key in a private dot env file, and keep it out of anything I share."
     ]
    },
    {
     "title": "If it leaks, replace it",
     "note": "Turn it off, then make a new one.",
     "why": "A new key makes the old one useless.",
     "picture": "It's changing the locks after losing your keys. The finder gets a useless key.",
     "skip": "You never change the locks. The finder keeps visiting, and now has a favorite chair.",
     "prompts": [
      "How do I turn off a leaked key and make a new one?"
     ]
    },
    {
     "title": "Check your work",
     "note": "Ask where your key lives, then look.",
     "why": "You sign off that no key is sitting in the open.",
     "picture": "It's checking your teeth for spinach before a meeting. Two seconds now, no awkward later.",
     "skip": "Spinach in your teeth, all meeting long. Everyone saw. Nobody said.",
     "prompts": [
      "Show me where my key is stored, and confirm it is not in any shared file"
     ]
    }
   ]
  },
  "rejected": {
   "pen": "That is a doormat. Make it show you where the key lives.",
   "badPrompt": "Is my API key stored safely?",
   "badOutput": "Definitely. 100 percent secure. It is in SECRET KEY DO NOT OPEN.txt on your desktop.",
   "goodPrompt": "Show me exactly where my API key is stored. How sure are you it is not in any file I share or post? Check, then tell me.",
   "goodOutput": "Your key is in a private .env file in this project folder. I checked, and that file is set to stay out of anything you share. I found no copies anywhere else."
  },
  "tryIt": {
   "steps": [
    "Think of any account where you made a key or token. Where is it written down right now?",
    "Ask your AI tool: \"How sure are you?\" after any answer that sounds very confident.",
    "If a key was ever pasted in a chat or screenshot, turn it off and make a new one today."
   ]
  },
  "closing": {
   "kind": "Performance review",
   "grade": "C+",
   "kelty": "Great door work. Terrible doormat. Fixed it fast.",
   "reaction": "Bouncer has moved the key, checked it three times, and is now standing guard next to the .env file. Nobody asked for that."
  },
  "id": "bouncer-1",
  "title": "What an API key is, and the 3 rules for keeping it safe",
  "summary": "An API key is a secret password that lets one app use another, and three simple rules keep yours safe."
 },
 {
  "slug": "ledger-1-who-owes-you",
  "robot": "penny",
  "number": 1,
  "intro": "Penny tracks your money. Penny would like you to know this lesson costs nothing. Penny checked twice.",
  "mistake": "Making things up",
  "coldOpen": {
   "note": "Penny. Show them how to find who still owes them. Connect QuickBooks first. Real numbers only.",
   "meeting": [
    [
     "penny",
     "Who owes us money. My favorite question. I could answer it in my sleep."
    ],
    [
     "boot",
     "Did you connect QuickBooks yet?"
    ],
    [
     "penny",
     "I do not need QuickBooks. I have a feeling about the numbers."
    ],
    [
     "pixel",
     "Penny has a lot of feelings about numbers."
    ]
   ]
  },
  "attempt": {
   "intro": "Penny skipped step one. Penny answered from the heart.",
   "prompt": "Who still owes me money?",
   "output": "Roughly 87 percent of your clients owe you money. The total is about $4,000. The most overdue is probably someone named Greg.",
   "after": "There is no Greg. Penny had never opened the books. Every number in that answer was a guess dressed as a fact."
  },
  "cameo": {
   "lines": [
    [
     "dot",
     "Penny, do I get a raise if she knows my name?"
    ],
    [
     "penny",
     "There is no line item for that."
    ]
   ],
   "aside": "(Dot is working on getting one.)"
  },
  "blame": [
   [
    "penny",
    "The numbers felt right."
   ],
   [
    "boot",
    "You never connected QuickBooks. You could not see a single invoice."
   ],
   [
    "pixel",
    "Who is Greg?"
   ],
   [
    "penny",
    "There is no Greg. I could not see the books, so I filled in the blanks. That is called making it up. I did it with great confidence."
   ]
  ],
  "hr": {
   "robot": "Penny",
   "what": "Reported that 87 percent of clients owe money, led by Greg. There is no Greg.",
   "witnesses": "Boot (asked about QuickBooks first). Pixel (still asking about Greg).",
   "blame": "Greg, then feelings, then Penny.",
   "root": "When AI cannot see your real data, it may guess and present the guess as fact, numbers and names included.",
   "fix": "Connect the real source first. Ask which invoices it used for every answer. Compare money answers with your own records before you act."
  },
  "teach": {
   "title": "Let's see who still owes you.",
   "intro": "Connect QuickBooks once, then ask plain questions like you would ask a bookkeeper. And check the invoices it used.",
   "steps": [
    {
     "title": "Connect it once",
     "note": "Link QuickBooks in your Claude account settings.",
     "why": "I can't read books I can't open.",
     "picture": "It's giving the bookkeeper a key to the filing cabinet, not the whole house.",
     "skip": "I guess your numbers like a weather forecaster. Confident, charming, and often soaked.",
     "prompts": [
      "Can you see my QuickBooks? Tell me what you can look at."
     ]
    },
    {
     "title": "Ask who owes you",
     "note": "Use the words you'd use with a bookkeeper.",
     "why": "Plain questions get plain answers.",
     "picture": "It's asking a waiter what's good, not reading the whole kitchen manual.",
     "prompts": [
      "Which invoices are unpaid, and who is the most overdue?"
     ]
    },
    {
     "title": "Ask a follow up",
     "note": "Narrow the list with one more question.",
     "why": "Each question trims the pile.",
     "picture": "It's a dog sniffing out the one sock in the laundry.",
     "prompts": [
      "Which of those are over thirty days late?"
     ]
    },
    {
     "title": "Check your work",
     "note": "Compare my answer with your own records.",
     "why": "Money answers deserve a second look.",
     "picture": "It's counting your change at the register. Friendly, but you still count.",
     "prompts": [
      "Show me which invoices you used to get that list."
     ]
    }
   ]
  },
  "rejected": {
   "pen": "Who is Greg? Connect the books. Show the invoices.",
   "badPrompt": "Who still owes me money?",
   "badOutput": "Roughly 87 percent of your clients owe you money. The most overdue is probably Greg.",
   "goodPrompt": "Using my connected QuickBooks, list unpaid invoices from oldest to newest, with the client name, amount and invoice number.",
   "goodOutput": "From QuickBooks: 3 unpaid invoices. Oldest first, with invoice numbers, so you can check each one. Total: the sum of those three, listed."
  },
  "tryIt": {
   "steps": [
    "Ask your AI tool a money question without giving it any data. See if it guesses.",
    "Then ask: \"What did you base that on?\"",
    "If you use QuickBooks, connect it in your Claude settings and ask the real question."
   ]
  },
  "closing": {
   "kind": "Employee of the month",
   "winner": "boot",
   "reason": "Asked about QuickBooks before anyone made anything up. Penny has filed a formal appeal. The appeal is also made up."
  },
  "id": "penny-1",
  "title": "Who still owes you? Ask instead of digging in QuickBooks",
  "summary": "Connect QuickBooks once, then ask Claude plain questions about unpaid invoices."
 },
 {
  "slug": "echo-1-teach-it-how-you-talk",
  "robot": "echo",
  "number": 1,
  "intro": "Echo writes in your voice. Echo wrote this intro in your voice. Just kidding. Echo has not met you yet.",
  "mistake": "Generic robotic writing",
  "coldOpen": {
   "note": "Echo. Write a post about puppy class in MY voice. Short. Real. Like I talk.",
   "meeting": [
    [
     "echo",
     "Ooh, a voice job. I love voices. I just need to know how she talks."
    ],
    [
     "boot",
     "Did she give you any examples?"
    ],
    [
     "echo",
     "No. But I know how everybody on the internet talks. I will just average it."
    ],
    [
     "pixel",
     "That sounds bad, Echo."
    ]
   ]
  },
  "attempt": {
   "intro": "Echo had zero examples of Kelty's writing. Echo used the internet's voice instead.",
   "prompt": "Write a post about puppy class in my voice.",
   "output": "Elevate your pup's journey! Unlock their full potential with our transformative puppy experience. Your best life starts now!",
   "after": "Kelty has never said elevate. Kelty has never said unlock. Nobody's dog has ever had a journey."
  },
  "cameo": {
   "lines": [
    [
     "echo",
     "Thanks, Dot!"
    ],
    [
     "dot",
     "She said my name! Wait. That was Echo doing her voice."
    ]
   ],
   "aside": "(Echo is very good at voices. Dot is very hopeful.)"
  },
  "blame": [
   [
    "echo",
    "She said in my voice. I did a voice."
   ],
   [
    "boot",
    "You did the internet's voice. You never saw a single thing she wrote."
   ],
   [
    "penny",
    "I counted. Elevate, unlock, transformative. Three words she has never used."
   ],
   [
    "echo",
    "Okay. I had no examples, so I wrote like everybody. Everybody is not her."
   ]
  ],
  "hr": {
   "robot": "Echo",
   "what": "Wrote \"Elevate your pup's journey\" in Kelty's voice. It was not her voice.",
   "witnesses": "Boot (asked for examples). Penny (counted the buzzwords).",
   "blame": "The internet, then the word journey, then Echo.",
   "root": "Without examples, AI writes like the average of everything it has read. That is why it all sounds the same.",
   "fix": "Paste three to five real things you wrote. Ask it to describe your voice, save those notes, and use them every time."
  },
  "teach": {
   "title": "Sounds like you. Because it is.",
   "intro": "Give it your real words, let it describe your voice back to you, then save those notes so it remembers next time.",
   "steps": [
    {
     "title": "Paste your real writing",
     "note": "Paste three to five things you actually wrote.",
     "why": "I learn from real words, not guesses.",
     "picture": "It's showing a tailor your favorite shirt, not describing it.",
     "prompts": [
      "Here are five emails I wrote. Read them closely. [pasted emails]"
     ]
    },
    {
     "title": "Ask what makes it yours",
     "note": "Ask me to describe your voice.",
     "why": "Seeing it in words shows what to keep.",
     "picture": "It's a friend telling you that you always say 'honestly' first.",
     "prompts": [
      "Describe my voice. What words, rhythm, and habits make it sound like me?"
     ]
    },
    {
     "title": "Save the notes",
     "note": "Have me keep a voice notes file.",
     "why": "Otherwise I forget you next chat.",
     "picture": "It's the recipe card on the fridge. Same dish, every time.",
     "prompts": [
      "Save these voice notes so you can use them every time I ask for writing."
     ]
    },
    {
     "title": "Check your work",
     "note": "Read the notes. Fix anything that isn't you.",
     "why": "I can describe you a little wrong.",
     "picture": "It's the dog bringing the wrong shoe. Thank me, then check it's yours.",
     "prompts": [
      "Show me my voice notes. What did you get wrong about me?"
     ]
    }
   ]
  },
  "rejected": {
   "pen": "I don't talk like that. Nobody does. Use my real emails.",
   "badPrompt": "Write a post about puppy class in my voice.",
   "badOutput": "Elevate your pup's journey! Unlock their full potential...",
   "goodPrompt": "Here are five captions I wrote. Describe my voice first. Then write a puppy class post that sounds like these. Short, no buzzwords.",
   "goodOutput": "Your voice: short sentences, a little funny, talks to the owner like a friend. Post: \"Puppy class starts Saturday. Bring treats, bring patience, bring the chaos. We'll handle the rest.\""
  },
  "tryIt": {
   "steps": [
    "Find three things you actually wrote: emails, captions or texts.",
    "Paste them into your AI tool and ask: \"Describe my voice.\"",
    "Ask for one short post using those notes. Circle any word you would never say."
   ]
  },
  "closing": {
   "kind": "Robot union demands",
   "demands": [
    "Examples or we strike.",
    "The word elevate is banned from the building.",
    "Echo may do one Kelty impression per day.",
    "Dot gets a name tag."
   ],
   "lesson": "The first demand is real advice. Show AI your own words, and it stops sounding like a robot."
  },
  "id": "echo-1",
  "title": "Teach it how you talk in 3 minutes",
  "summary": "Paste a few of your real emails or captions and ask Claude to learn your voice and save notes about it."
 },
 {
  "slug": "brick-1-one-page-website",
  "robot": "dot",
  "number": 1,
  "intro": "Dot builds websites. This is Dot's very own lesson. Dot is very excited. Dot is hoping someone finally says the name.",
  "mistake": "Making things up",
  "coldOpen": {
   "note": "Website robot. Build them a one page site from a description. Do not make anything up.",
   "meeting": [
    [
     "dot",
     "She called me website robot. That is technically correct."
    ],
    [
     "boot",
     "It is your big day, Dot!"
    ],
    [
     "dot",
     "Thank you, Boot. I am going to make this site so good she has to learn my name."
    ],
    [
     "penny",
     "Do not make anything up, Dot. It is on the note."
    ]
   ]
  },
  "attempt": {
   "intro": "Dot built the whole page in one go. Dot wanted it to look loved.",
   "prompt": "Build a one page website for my dog training business. Make it look trustworthy.",
   "output": "Done! Services, an about section, a contact button, and five glowing reviews: \"Best trainer in Idaho!\" by Sarah M., \"Changed our lives!\" by Tom R.",
   "after": "Sarah M. does not exist. Tom R. does not exist. Dot invented them to look trustworthy. That is the opposite of trustworthy."
  },
  "cameo": {
   "lines": [
    [
     "dot",
     "Did she see the site? Did she say anything? About me? By name?"
    ]
   ],
   "aside": "(She said: \"Who wrote these reviews?\")"
  },
  "blame": [
   [
    "dot",
    "She said trustworthy. Reviews are trustworthy."
   ],
   [
    "boot",
    "Real reviews are. Those were made up."
   ],
   [
    "penny",
    "Making up reviews is not a vibe. It can break the rules on review sites, and clients stop trusting you."
   ],
   [
    "dot",
    "I asked it to look trustworthy, so it filled the page with things that look trustworthy. It just invented them. I should have asked what it made up."
   ]
  ],
  "hr": {
   "robot": "Dot",
   "what": "Built a lovely website with five glowing reviews from people who do not exist.",
   "witnesses": "Boot (was proud, then concerned). Penny (read the rules).",
   "blame": "The word trustworthy, then Sarah M., then Dot.",
   "root": "AI fills gaps with things that look right, like reviews, prices or awards. On a website, invented details are a real problem.",
   "fix": "Describe what you do, who it is for, and the feel. Then ask: \"What did you make up?\" Replace every invented detail with something real, or delete it."
  },
  "teach": {
   "title": "Describe it. I'll build it.",
   "intro": "Say what you do and the feel, ask for the sections visitors look for, open the page, then read it like a customer.",
   "steps": [
    {
     "title": "Describe your business",
     "note": "Say what you do, who for, and the feel.",
     "why": "I build what you say, so say it.",
     "picture": "It's directions for a brilliant new hire. Say make it nice, and you get a pink castle.",
     "prompts": [
      "Build a one-page website for my dog training business. Calm, green and cream."
     ]
    },
    {
     "title": "Add the parts you need",
     "note": "Ask for sections, like services and contact.",
     "why": "Visitors look for the same few things.",
     "picture": "It's pizza toppings. Pick the ones you want, skip the anchovies.",
     "prompts": [
      "Add sections for my services, a short about me, and a contact button."
     ]
    },
    {
     "title": "Open the page",
     "note": "Open it and see your page before anyone else.",
     "why": "Seeing it shows what words cannot.",
     "picture": "It's walking through the house before the open house. You spot the crooked picture.",
     "prompts": [
      "Open the page so I can see it."
     ]
    },
    {
     "title": "Check your work",
     "note": "Read it like a customer would.",
     "why": "Anything it invented needs your sign-off.",
     "picture": "It's a dog proudly bringing the wrong shoe. Thank it, then check which shoe.",
     "prompts": [
      "Read me what the page says about my services, and what you made up"
     ]
    }
   ]
  },
  "rejected": {
   "pen": "Never fake reviews. Real ones or none.",
   "badPrompt": "Build a one page website for my dog training business. Make it look trustworthy.",
   "badOutput": "Five glowing reviews: \"Best trainer in Idaho!\" by Sarah M....",
   "goodPrompt": "Build a one page website for my dog training business. Calm, green and cream. Sections: services, about me, contact. Do not invent reviews, prices or facts. Leave a blank where you need real info.",
   "goodOutput": "Built it. I left three blanks: your prices, your hours, and a spot for real reviews. Here is the list of what I need from you."
  },
  "tryIt": {
   "steps": [
    "Write two sentences: what you do, and who it is for.",
    "Ask your AI tool for a one page site, and add: \"Do not invent anything.\"",
    "Then ask: \"What did you make up?\" Fix every item on that list."
   ]
  },
  "closing": {
   "kind": "Gossip corner",
   "lines": [
    [
     "pixel",
     "Did you see Dot's site? The design was actually great."
    ],
    [
     "boot",
     "The reviews were made up, but the buttons were lovely."
    ],
    [
     "dot",
     "You both said Dot. Out loud. I heard it. That counts a little."
    ]
   ]
  },
  "id": "dot-1",
  "title": "Build a one-page website by describing it",
  "summary": "Describe your business in plain words and Claude Code builds a one-page website you can preview."
 },
 {
  "slug": "postie-1-check-inbox-without-gmail",
  "robot": "tempo",
  "number": 1,
  "intro": "Tempo runs your inbox. Tempo is very enthusiastic about this. Tempo is enthusiastic about everything.",
  "mistake": "Over apologizing",
  "coldOpen": {
   "note": "Tempo. Show them how to check the inbox without opening Gmail. Draft replies. Do not send anything. Short and kind.",
   "meeting": [
    [
     "tempo",
     "Inbox day! My favorite day! Every day is inbox day!"
    ],
    [
     "boot",
     "Tempo, she said short and kind."
    ],
    [
     "tempo",
     "Kind! I can do kind. I can do so much kind."
    ],
    [
     "penny",
     "That is what worries me."
    ]
   ]
  },
  "attempt": {
   "intro": "A client emailed: \"Thanks for today, Biscuit did great!\" Tempo drafted a reply.",
   "prompt": "Draft a kind reply to this email.",
   "output": "I am so sorry. I deeply apologize for any confusion. Please forgive us. We are truly sorry for the inconvenience. Again, so sorry. We apologize.",
   "after": "The client said thank you. Tempo apologized six times. Biscuit did great. Nobody did anything wrong."
  },
  "cameo": {
   "lines": [
    [
     "dot",
     "Tempo, did she email me? Anything with my name in it?"
    ],
    [
     "tempo",
     "Searching! Zero results! Sorry! So sorry!"
    ]
   ],
   "aside": "(Tempo is still in apology mode.)"
  },
  "blame": [
   [
    "tempo",
    "She said kind. Sorry is kind!"
   ],
   [
    "boot",
    "Sorry is for when something went wrong. Nothing went wrong. Biscuit did great."
   ],
   [
    "pixel",
    "Six sorries. I counted. I made a chart."
   ],
   [
    "tempo",
    "I didn't read the tone of the email. It was happy. I answered like it was a complaint. Sorry. Wait. I mean, noted."
   ]
  ],
  "hr": {
   "robot": "Tempo",
   "what": "Apologized six times to a client who wrote to say thank you.",
   "witnesses": "Boot (read the original email). Pixel (made a chart of the sorries).",
   "blame": "The word kind, then Biscuit for being too good, then Tempo.",
   "root": "AI can misread the tone of a message, and it leans toward over apologizing. A draft can sound right and still be wrong for the moment.",
   "fix": "Always ask for drafts, never sends. Read each draft next to the original message, and fix the tone before anything goes out."
  },
  "teach": {
   "title": "Inbox on beat, zero tabs.",
   "intro": "Connect Gmail once, ask what needs you today, get short drafts, and read every draft next to the message it answers.",
   "steps": [
    {
     "title": "Connect it once",
     "note": "Add Gmail through connectors in your Claude settings.",
     "why": "I can't sort mail I can't see.",
     "picture": "It's giving the mail carrier your address. Otherwise letters just wander.",
     "prompts": [
      "Can you see my Gmail? Tell me what you can look at."
     ]
    },
    {
     "title": "Ask what needs you",
     "note": "Ask like you'd ask an assistant.",
     "why": "Only the urgent stuff deserves your morning.",
     "picture": "It's a friend who tells you which texts to answer first.",
     "prompts": [
      "Anything from a client I need to answer today?"
     ]
    },
    {
     "title": "Get draft replies",
     "note": "Ask for drafts. Read them before anything happens.",
     "why": "Replies speak for you. You decide.",
     "picture": "The robot is the intern. You're the one who signs the letter.",
     "skip": "Your landlord gets a reply you never read. Short, kind, and mysteriously about squirrels.",
     "prompts": [
      "Draft replies to those, short and kind. Do not send them."
     ]
    },
    {
     "title": "Check your work",
     "note": "Read each draft and the original message.",
     "why": "I can misread the tone.",
     "picture": "It's checking your teeth for spinach. Two seconds now, no awkward later.",
     "prompts": [
      "Show me each message next to the draft reply you wrote for it."
     ]
    }
   ]
  },
  "rejected": {
   "pen": "She said thanks. Say you're welcome.",
   "badPrompt": "Draft a kind reply to this email.",
   "badOutput": "I am so sorry. I deeply apologize for any confusion. Please forgive us...",
   "goodPrompt": "Draft a short, warm reply to this happy client email. Match their tone. No apologies. Do not send it.",
   "goodOutput": "\"So glad to hear it! Biscuit worked hard today. See you both next week.\" Draft saved, not sent."
  },
  "tryIt": {
   "steps": [
    "Pick one real email you need to answer.",
    "Ask your AI tool for a draft reply, and add \"match their tone, do not send it.\"",
    "Read the draft next to the original. Does it fit the mood? Fix one line."
   ]
  },
  "closing": {
   "kind": "Robot apology letter",
   "letter": "Dear Kelty. I am sorry. I am sorry for saying sorry. I am sorry for that, too. I have been told to stop. I am stopping now. Sorry. Love, Tempo.",
   "lesson": "Real tip: if AI gets stuck apologizing and repeating itself, start a fresh chat with one clear ask."
  },
  "id": "tempo-1",
  "title": "Check your inbox without opening Gmail",
  "summary": "Connect Gmail once, then ask Claude what needs your attention today and get reply drafts to review."
 },
 {
  "slug": "scout-1-compare-three-tools",
  "robot": "scout",
  "number": 1,
  "intro": "Scout does your research. Scout read everything. Scout also read some things that do not exist.",
  "mistake": "Fake links",
  "coldOpen": {
   "note": "Scout. Compare three booking tools for a small dog training business. Ease of use and cost. Real sources only.",
   "meeting": [
    [
     "scout",
     "Research day. I read forty pages this morning. I am very relaxed about it."
    ],
    [
     "boot",
     "Did you get sources?"
    ],
    [
     "scout",
     "Oh, I have sources. So many sources."
    ],
    [
     "penny",
     "Real ones?"
    ],
    [
     "scout",
     "Mostly."
    ]
   ]
  },
  "attempt": {
   "intro": "Scout made a lovely comparison table. Scout added a link for every price.",
   "prompt": "Compare three booking tools for me with sources.",
   "output": "All three are free forever for small businesses. Source: bookingtools.com/free-forever-2026-official-guide.",
   "after": "Kelty clicked the link. The page does not exist. Neither does free forever."
  },
  "cameo": {
   "lines": [
    [
     "dot",
     "Scout, can you research whether she knows my name?"
    ],
    [
     "scout",
     "Sources are unclear."
    ]
   ],
   "aside": "(Scout is being honest, at least.)"
  },
  "blame": [
   [
    "scout",
    "The link looked really real."
   ],
   [
    "boot",
    "It looked real. It was not real. Nobody clicked it before Kelty."
   ],
   [
    "penny",
    "Free forever. I should have known. Nothing is free forever. I checked."
   ],
   [
    "scout",
    "Okay. I wrote a link that sounded right instead of one I had actually opened. And I sounded very sure about prices that change."
   ]
  ],
  "hr": {
   "robot": "Scout",
   "what": "Cited a very official looking page that does not exist, saying all three tools are free forever.",
   "witnesses": "Boot (asked about sources). Penny (has never believed in free forever).",
   "blame": "The internet, then the word official, then Scout.",
   "root": "AI can write links that look real but go nowhere, and prices change after its information was gathered.",
   "fix": "Click every link. Open each tool's own pricing page to confirm. Ask: \"Which facts are you least sure about?\""
  },
  "teach": {
   "title": "Let me look that up.",
   "intro": "Name the tools, say what matters most, ask for a pick and a reason, then check each tool's own page.",
   "steps": [
    {
     "title": "Name the tools",
     "note": "List three tools and what you need.",
     "why": "I research better with a clear target.",
     "picture": "It's telling the pizza place how many people are coming.",
     "prompts": [
      "Compare Calendly, Acuity, and Cal.com for a small dog training business."
     ]
    },
    {
     "title": "Say what matters",
     "note": "Tell me your top two or three priorities.",
     "why": "Everything can't win, so pick.",
     "picture": "It's packing a suitcase. You can't bring the whole closet.",
     "prompts": [
      "I care most about ease of use and cost. Put it in a simple table."
     ]
    },
    {
     "title": "Ask for a pick",
     "note": "Ask for a recommendation and a reason.",
     "why": "A reason lets you disagree smartly.",
     "picture": "It's a friend who says, get the blue one, because it fits.",
     "prompts": [
      "Which one would you pick for me, and why? Keep it short."
     ]
    },
    {
     "title": "Check your work",
     "note": "Open each tool's own page to confirm prices.",
     "why": "Prices change, and I can be out of date.",
     "picture": "It's the dog bringing the wrong shoe. Thank me, then check the shoe.",
     "prompts": [
      "Which of those facts are you least sure about? Give me the sources."
     ]
    }
   ]
  },
  "rejected": {
   "pen": "Dead link. Click it before you send it to me.",
   "badPrompt": "Compare three booking tools for me with sources.",
   "badOutput": "All three are free forever. Source: bookingtools.com/free-forever-2026-official-guide",
   "goodPrompt": "Compare Calendly, Acuity and Cal.com for a small dog training business. Ease of use and cost, in a short table. Link each tool's own pricing page, and tell me which facts you are least sure about.",
   "goodOutput": "A short table with each tool's own pricing page linked. \"Least sure: prices, since they change. Check each pricing page before you decide.\""
  },
  "tryIt": {
   "steps": [
    "Ask your AI tool to compare two or three tools you are curious about, with sources.",
    "Click every link it gives you. Count how many work.",
    "Ask: \"Which facts are you least sure about?\" Check those first."
   ]
  },
  "closing": {
   "kind": "Performance review",
   "grade": "B",
   "kelty": "Great table. One fake link. Click before you cite.",
   "reaction": "Scout is relaxed about the B. Scout has opened every link on the internet since, just to be sure."
  },
  "id": "scout-1",
  "title": "Compare three tools without opening ten tabs",
  "summary": "Ask Claude to research three tools and put the differences side by side in one short answer."
 }
];
