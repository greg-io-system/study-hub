/* Study Hub -- content manifest.
   This is the single source of truth for what appears on the hub, AND the TOC.
   Loaded via <script src> so it works on the live site AND opened locally.

   Shape:
     window.STUDY_HUB = {
       student: "Kelly",
       subjects: [
         { id, name, accent, blurb,
           weeks: [
             { range, theme, lessons: [ {title,topic,file,date,summary,tags} ] }
           ]
         }
       ]
     }

   - subjects render as a class grid on the landing page (newest content first
     is a per-week thing, not a per-subject thing -- order subjects however you
     like; Algebra 2 first for now).
   - weeks are listed NEWEST-FIRST; lessons within a week NEWEST-FIRST.
   - `theme` is the flexible week label: a unit/category for math
     ("Unit 0 · Functions"), a book chapter for history
     ("Ch. 2 · River Civilizations").
   - `accent` is the class colour (grid bar, week band, links).
   - Optional `status: "planned"` renders a class as a dashed, non-clickable
     "soon" tile. Omit a class entirely if it will never be on the hub.

   To add a lesson: drop its self-contained .html into /lessons/, then add an
   entry to the right subject's right week (create the week if new).
   To add a class: add a new subject object.
   BEFORE DEPLOY: run `node --check data/lessons.js` -- a broken manifest
   renders the hub blank. */
window.STUDY_HUB = {
  student: "Kelly",
  subjects: [
    {
      id: "algebra-2",
      name: "Algebra 2",
      accent: "#e8623d",
      blurb: "Concept-first lessons you can poke at. Drag the graphs — they show how the math actually works.",
      weeks: [
        {
          range: "Sep 14 – Sep 18",
          theme: "Unit 1 · Transformations",
          lessons: [
            {
              title: "Transformations Explorer",
              topic: "Shifting, stretching & flipping parent functions",
              file: "lessons/transformations-of-functions.html",
              date: "2026-09-10",
              summary: "Drag a, h, and k and watch any parent shape slide, stretch, or flip — vertex, domain, range and intercepts update live. Plus the story behind the math (the rubber-stamp picture) and a worked example for each parent family.",
              tags: ["functions", "graphs", "transformations"],
              materials: [
                { kind: "lesson",   label: "Interactive lesson", file: "lessons/transformations-of-functions.html" },
                { kind: "examples", label: "Why it works",       file: "lessons/transformations-why-it-works.html" },
                { kind: "examples", label: "Worked examples",    file: "lessons/transformations-worked-examples.html" }
              ]
            }
          ]
        },
        {
          range: "Aug 29 – Sep 4",
          theme: "Unit 0 · Functions",
          lessons: [
            {
              title: "The Function Machine",
              topic: "Function notation — inputs & outputs",
              file: "lessons/function-notation-inputs-outputs.html",
              date: "2026-08-28",
              summary: "What f(x) really means, one function shown four ways, evaluating step by step, reading values off a graph, and the vertical-line test.",
              tags: ["functions", "graphs", "domain & range"],
              materials: [
                { kind: "lesson",   label: "Interactive lesson", file: "lessons/function-notation-inputs-outputs.html" },
                { kind: "examples", label: "Worked examples",    file: "lessons/function-notation-examples.html" },
                { kind: "practice", label: "Practice",           file: "lessons/function-notation-practice.html" },
                { kind: "answers",  label: "Check answers",      file: "lessons/function-notation-answers.html" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "world-history",
      name: "World History",
      accent: "#178a68",
      blurb: "The story behind the chapters — causes, people, and why it mattered, not just dates to memorize.",
      weeks: [
        {
          range: "Sep 14 – Sep 18",
          theme: "Ch. 3 · Early Civilizations → Belief Systems",
          lessons: [
            {
              title: "Hammurabi's Code — Order, Kingship & the Gods",
              topic: "What the law code was for, and why a king said his power came from the gods",
              file: "lessons/hammurabi-law-kingship-gods.html",
              date: "2026-09-14",
              summary: "For the Belief Systems thread: the Code's real purpose (a stable, orderly society), how punishment differed by social class, and Hammurabi's claim that Marduk and the gods gave him the law — the religion-and-government link — plus a 5-question self-check.",
              tags: ["belief systems", "mesopotamia", "study guide"]
            },
            {
              title: "Early Civilizations & Urban Societies — Study Guide & Practice Quiz",
              topic: "Mesopotamia, Egypt & the Indus Valley — plus Hammurabi, Shang China, and the Olmec & Chavín",
              file: "lessons/ch03-early-civilizations-study-quiz.html",
              date: "2026-09-12",
              summary: "What makes a 'civilization,' then Sumer & the first empire, Egypt's pharaohs, and the Indus cities — now extended to Hammurabi's law code, Shang China (oracle bones), and the Americas' Olmec & Chavín, with compare tables and a 25-question quiz (click-to-reveal answers).",
              tags: ["study guide", "practice quiz"],
              materials: [
                { kind: "lesson", label: "Study guide + practice quiz", file: "lessons/ch03-early-civilizations-study-quiz.html" },
                { kind: "link", label: "Class: First Civilizations notes (slides)", url: "https://docs.google.com/presentation/d/1zjUHpZa47P0AoXCpFyZNFjG5Oc3_Peh5Y-2G0UU3mbU/" },
                { kind: "link", label: "Class: Daily slides — the running class deck", url: "https://docs.google.com/presentation/d/1xwwDRYKpPQ0cdo8ZWSX5k72opJkU3DhrrJKyLT7n8IQ/" }
              ]
            }
          ]
        },
        {
          range: "Aug 31 – Sep 4",
          theme: "Ch. 2 · Early Humans",
          lessons: [
            {
              title: "Early Humans — Study Guide & Practice Quiz",
              topic: "Evolution, migration, Paleolithic life, the Neolithic Revolution",
              file: "lessons/early-humans-study-quiz.html",
              date: "2026-08-31",
              summary: "The ancestor timeline, why humans moved, hunter-gatherer life, and the farming trade-off — then a 20-question quiz with click-to-reveal answers.",
              tags: ["study guide", "practice quiz"]
            }
          ]
        },
        {
          range: "Aug 31 – Sep 4",
          theme: "Ch. 1 · Understanding the Past",
          lessons: [
            {
              title: "Understanding the Past — Study Guide & Practice Quiz",
              topic: "How historians work: sources, causation, interpretation",
              file: "lessons/understanding-the-past-study-quiz.html",
              date: "2026-08-31",
              summary: "Primary vs. secondary sources, levels of causation, and how interpretation works — then a 20-question quiz with click-to-reveal answers.",
              tags: ["study guide", "practice quiz"]
            }
          ]
        }
      ]
    },
    {
      id: "human-anatomy",
      name: "Human Anatomy",
      accent: "#b5445a",
      blurb: "How the body is built and how it keeps itself in balance — structures, tissues, and the feedback loops that run the show.",
      weeks: [
        {
          range: "Sep 14 – Sep 18",
          theme: "Unit 2 · Integumentary System",
          lessons: [
            {
              title: "The Layers of Skin",
              topic: "Epidermis, dermis & hypodermis — plus the five epidermal strata",
              file: "lessons/integumentary-skin-layers.html",
              date: "2026-09-14",
              summary: "Tap a cross-section to explore each skin layer, then ride the 'cell escalator' up through the five epidermal strata — with a mnemonic and an epidermis-metaphor starter for that assignment. Ends with a 5-question self-check.",
              tags: ["integumentary", "skin", "interactive"],
              materials: [
                { kind: "lesson", label: "Interactive lesson", file: "lessons/integumentary-skin-layers.html" },
                { kind: "link", label: "Class: Integumentary System notes (slides)", url: "https://docs.google.com/presentation/d/1ErS-CL_g6taB8OuPBTb9NtQDA7Hoo3PQUC8P9kxW8hQ/" }
              ]
            }
          ]
        },
        {
          range: "Sep 7 – Sep 11",
          theme: "Unit 1 · Intro & Tissues",
          lessons: [
            {
              title: "Unit 1 Exam Prep — Study Guide & Practice Quiz",
              topic: "Anatomy vs. physiology, homeostasis & feedback, directional terms, cells, the four tissues",
              file: "lessons/hap-unit-1-intro-tissues-study-quiz.html",
              date: "2026-09-07",
              summary: "Everything on the Unit 1 review sheet in one page — the big ideas explained plainly, the common traps, then a 28-question quiz with click-to-reveal answers (including the directional-terms drill from class).",
              tags: ["exam prep", "study guide", "practice quiz"],
              materials: [
                { kind: "lesson", label: "Study guide + practice quiz", file: "lessons/hap-unit-1-intro-tissues-study-quiz.html" },
                { kind: "practice", label: "Flashcards", file: "lessons/hap-unit-1-flashcards.html" },
                { kind: "link", label: "Class slides (opens in Google)", url: "https://docs.google.com/presentation/d/16BiH9YlzvMtYfgOBeMjjxFQO1n1g1IslkwMUuIwOxBE/" },
                { kind: "link", label: "Mrs. Kalec's exam review", url: "https://docs.google.com/document/d/1VbZ3psGS1S5t801TrilsQqm_CreC99YOYIF_HmIpjts/" }
              ]
            },
            {
              title: "Tissue Box Project — Guide",
              topic: "The rubric decoded, where everything is in the slides, and a finish-line check",
              file: "lessons/hap-tissue-box-project-guide.html",
              date: "2026-09-07",
              summary: "Due Wednesday 8am. What each rubric row actually asks for (structures vs. subtypes vs. characteristics), slide numbers for every answer, picture tips, and a final check before you turn it in.",
              tags: ["project", "assignment help"],
              materials: [
                { kind: "lesson", label: "Project guide", file: "lessons/hap-tissue-box-project-guide.html" },
                { kind: "link", label: "The assignment in Classroom", url: "https://classroom.google.com/c/ODcyMDk2OTg5Nzk4/a/ODcyNDkzNTE5NzUz/details" },
                { kind: "link", label: "Class slides (opens in Google)", url: "https://docs.google.com/presentation/d/16BiH9YlzvMtYfgOBeMjjxFQO1n1g1IslkwMUuIwOxBE/" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "ap-english",
      name: "AP English",
      accent: "#2f6fa8",
      blurb: "Reading like a writer — what an author is doing, how they're doing it, and how to say so on paper.",
      weeks: [
        {
          range: "Sep 21 – Sep 25",
          theme: "Synthesis — the failure capstone",
          lessons: [
            {
              title: "Failure Synthesis — a method guide",
              topic: "Argue YOUR position on Ryan Leak's claim about failure — synthesizing Fratto, Gladwell & Whitehead",
              file: "lessons/failure-synthesis-method-guide.html",
              date: "2026-09-21",
              summary: "For Monday's Failure Synthesis reply — the capstone of the whole failure unit. The prompt decoded (not agree/disagree), Path 1 vs Path 2, each source's position in one line, the synthesis move modeled on a made-up parallel example, a They Say / I Say sentence builder, the thesis-point reminder, and a check before you reply to Mr. Evans's email. Your Leak, Fratto, Gladwell & Whitehead paragraphs stay yours.",
              tags: ["assignment help", "synthesis", "failure"]
            }
          ]
        },
        {
          range: "Sep 14 – Sep 18",
          theme: "Synthesis & rhetorical analysis",
          lessons: [
            {
              title: "The Loser Edit — a method guide",
              topic: "The 'have a view, don't summarize' method — synthesis + rhetorical analysis for the Whitehead essay",
              file: "lessons/loser-edit-method-guide.html",
              date: "2026-09-14",
              summary: "For Tuesday's Loser Edit paragraphs. The one rule (a view, not a summary), the synthesis move modeled on a parallel made-up example, the rhetorical-analysis formula with a build-it box, and a check before you reply to Mr. Evans's email. Your Whitehead & Twenge paragraphs stay yours.",
              tags: ["assignment help", "synthesis", "rhetorical analysis"],
              materials: [
                { kind: "lesson", label: "Method guide", file: "lessons/loser-edit-method-guide.html" },
                { kind: "link", label: "The smartphone article — Twenge (opens in Google)", url: "https://docs.google.com/document/d/16CGhArEF1lb9_qwDiq0h4-DFLilRN4uBjoeaKdscq3M/" }
              ]
            }
          ]
        },
        {
          range: "Always on",
          theme: "The Toolkit — skills & how the class works",
          lessons: [
            {
              title: "How Mr. Evans's assignments work",
              topic: "The five-move pattern behind every one of his homework emails — read it once, it helps every time",
              file: "lessons/how-mr-e-assignments-work.html",
              date: "2026-09-14",
              summary: "His emails all follow the same shape: the conversation continues, a tool check, 'developed not summary,' the lettered task, then reflect. What each move is doing (with his own quotes), the signals to watch for, and a playbook that works for any of his assignments.",
              tags: ["toolkit", "how his class works"]
            },
            {
              title: "TERMS Library",
              topic: "The class's rhetorical vocabulary, in one searchable place",
              file: "lessons/ap-lang-terms-library.html",
              date: "2026-09-10",
              summary: "Every term Mr. Evans uses — his framework (argument continuum, voice-not-opinion, Path 1 vs Path 2, sophistication, the thesis point), the rhetorical terms (exigence, ethos/pathos/logos, synthesis, juxtaposition, central claim, cause & effect, correlation vs. causation), and his stems & moves ('in order to', annotation, to what extent) — each with a plain meaning and how it shows up in class. Search it; it grows as the class does.",
              tags: ["toolkit", "vocabulary"]
            },
            {
              title: "Rhetorical Précis — the 4-sentence formula",
              topic: "A reusable way to set up any source cleanly — the four sentences, with a worked example",
              file: "lessons/english-rhetorical-precis-guide.html",
              date: "2026-09-07",
              summary: "Each of the four sentences decoded (claim, support, purpose, audience) with sentence frames and a verb bank, plus a full worked example — a reusable method for introducing any reading, not just one assignment.",
              tags: ["toolkit", "rhetorical précis"],
              materials: [
                { kind: "lesson", label: "Précis method", file: "lessons/english-rhetorical-precis-guide.html" }
              ]
            }
          ]
        },
        {
          range: "Grows all semester",
          theme: "The Library of sources",
          lessons: [
            {
              title: "Your Library of Sources",
              topic: "Every voice you've studied — what each argues and how to use it in synthesis",
              file: "lessons/library-of-sources.html",
              date: "2026-09-14",
              summary: "The shelf Mr. Evans keeps telling you to build. Search or browse every reading by thread (Your Generation, Failure & the Arena, Education) — each with its core claim and a 'use it for' line, so when a prompt says 'bring in another reading' you have somewhere to reach. Grows as the class reads more.",
              tags: ["library", "synthesis", "sources"]
            }
          ]
        }
      ]
    },
    {
      id: "ap-psychology",
      name: "AP Psychology",
      accent: "#6d5ab5",
      blurb: "Why people think and act the way they do — the approaches, the research methods, and the big ideas behind them.",
      weeks: [
        {
          range: "Sep 14 – Sep 18",
          theme: "Unit 1 · Research Methods & Statistics",
          lessons: [
            {
              title: "Statistics, Made Intuitive",
              topic: "Central tendency, spread, the normal curve & correlation",
              file: "lessons/research-methods-statistics.html",
              date: "2026-09-10",
              summary: "For the Unit 1 test. Drag data points and watch the mean/median/SD move (and see an outlier drag the mean), the 68–95–99.7 normal curve, skew, a correlation slider with a live scatterplot, and why correlation isn't causation — then a 6-question self-check.",
              tags: ["research methods", "statistics", "test prep"],
              materials: [
                { kind: "lesson", label: "Interactive lesson", file: "lessons/research-methods-statistics.html" },
                { kind: "link", label: "Class: Research Methods study guide (slides)", url: "https://docs.google.com/presentation/d/1oNTs3M5kA-1Mj9P7En_OzxwKF61PjA8KS4Xh7No0b2o/" },
                { kind: "link", label: "Class: Research Methods in Psychology, Unit 0 (slides)", url: "https://docs.google.com/presentation/d/1vr12A7S_1sQdSy1cbGFGW0O2I53fi9hQYRDW0zGhMHk/" },
                { kind: "link", label: "Class: Practice test — Research Methods (slides)", url: "https://docs.google.com/presentation/d/1ZrzKAiROmLYjQYFwzsv5bVdiG7-s0bXzu3AB0Rab3es/" },
                { kind: "link", label: "Video: Unit 0 full review — everything you need (35m)", url: "https://www.youtube.com/watch?v=P2o6rQgoZzY" },
                { kind: "link", label: "Video: Research methods & design — Topic 2 (18m)", url: "https://www.youtube.com/watch?v=GjthAOIJuJg" },
                { kind: "link", label: "Video: Psychological perspectives — Topic 1A (8m)", url: "https://www.youtube.com/watch?v=fbfhRKENScw" },
                { kind: "link", label: "Video: Cognitive biases & culture — Topic 1B (9m)", url: "https://www.youtube.com/watch?v=sUAGsWEA8TQ" },
                { kind: "link", label: "Quizlet flashcards (AP Psych 26/27)", url: "https://quizlet.com/join/EGfSAhshw?i=49t07x&x=1bqt" }
              ]
            }
          ]
        }
      ]
    },
    {
      id: "ap-french",
      name: "French",
      accent: "#0d8f86",
      blurb: "Grammar that actually sticks — build the conjugations, watch the endings agree, and get a feel for which tense to use when.",
      weeks: [
        {
          range: "Sep 14 – Sep 18",
          theme: "Passé composé · être & reflexive verbs",
          lessons: [
            {
              title: "Passé composé with être & reflexive verbs",
              topic: "When the helper is être, past-participle agreement, and reflexive verbs — plus futur proche",
              file: "lessons/passe-compose-etre-reflexive.html",
              date: "2026-09-14",
              summary: "For this week's Friday cluster. Build a passé composé and watch the ending agree with the subject, see the être-verb list (DR & MRS VANDERTRAMP), work the reflexive-verb pattern, and get quick futur-proche and imparfait-vs-passé-composé refreshers — then a 5-question self-check.",
              tags: ["passé composé", "reflexive verbs", "interactive"],
              materials: [
                { kind: "lesson", label: "Interactive lesson", file: "lessons/passe-compose-etre-reflexive.html" }
              ]
            }
          ]
        }
      ]
    }
  ]
};
