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
          range: "Sep 7 – Sep 11",
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
          range: "Sep 7 – Sep 11",
          theme: "Rhetorical analysis",
          lessons: [
            {
              title: "Rhetorical Précis — the 4-sentence formula",
              topic: "For the smartphone article — what each sentence has to do, with a worked example",
              file: "lessons/english-rhetorical-precis-guide.html",
              date: "2026-09-07",
              summary: "Each of the four sentences decoded (claim, support, purpose, audience) with sentence frames and a verb bank, a full example précis on a different Atlantic essay, and questions to find each piece in your article.",
              tags: ["assignment help", "rhetorical précis"],
              materials: [
                { kind: "lesson", label: "Précis guide", file: "lessons/english-rhetorical-precis-guide.html" },
                { kind: "link", label: "The article (opens in Google)", url: "https://docs.google.com/document/d/16CGhArEF1lb9_qwDiq0h4-DFLilRN4uBjoeaKdscq3M/" }
              ]
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
      status: "planned"
    }
  ]
};
