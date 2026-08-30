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
          range: "Aug 29 – Sep 4",
          theme: "Unit 0 · Functions",
          lessons: [
            {
              title: "The Function Machine",
              topic: "Function notation — inputs & outputs",
              file: "lessons/function-notation-inputs-outputs.html",
              date: "2026-08-28",
              summary: "What f(x) really means, one function shown four ways, evaluating step by step, reading values off a graph, and the vertical-line test.",
              tags: ["functions", "graphs", "domain & range"]
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
      weeks: []
    }
  ]
};
