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
     "note": "Search your computer for Terminal, then open it.",
     "why": "You need somewhere to type.",
     "picture": "It's a text thread with your computer, like texting a friend who never leaves you on read.",
     "prompts": [
      "claude"
     ]
    },
    {
     "title": "Ask in plain English",
     "note": "Type what you want, like you would text a person.",
     "why": "There is nothing to memorize.",
     "picture": "It's like ordering a coffee. You say what you want, not the chemistry.",
     "prompts": [
      "What files are on my desktop?"
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
     "note": "Ask it to explain what it just did.",
     "why": "You sign off, so you catch mistakes early.",
     "picture": "It's checking your teeth for spinach before a meeting. Two seconds now, no awkward later.",
     "prompts": [
      "Explain what you just did, in plain English"
     ]
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
   "title": "Five steps to day one.",
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
     "note": "Close the window, open a new one, then type one word.",
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
  "summary": "Five steps from zero to your first sentence in Claude Code, on a Mac or a Windows PC."
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
 }
];
