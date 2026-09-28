/* Study Hub -- "This Week" data. GENERATED, whole-file replace.
   Source: projects/GHS/week-view.md (CC regenerates on each Classroom pull).
   Do not hand-edit; do not fold into lessons.js (different lifecycles).

   Shape:
     window.STUDY_WEEK = {
       updated: "YYYY-MM-DD",        // panel hides itself if > 7 days old
       label: "Week of ...",
       items: [ { day, date:"YYYY-MM-DD", subject:<id from lessons.js or null>,
                  subjectName, what, help?, helpFile? } ]
     }
   Tone rule: forward-looking help only. No "missing"/"late" items ever --
   that list stays in Greg's week-view, not here. */
window.STUDY_WEEK = {
  updated: "2026-09-27",
  label: "Week of Sep 28 – Oct 2",
  items: [
    {
      day: "Sun", date: "2026-09-27",
      subject: "world-history", subjectName: "World History",
      what: "Classical Civilizations (500 BCE to 500 CE) — the reading activity from class, due Sunday 11:59 PM. Missed the reading? Get it from Mr. Angelopulos."
    },
    {
      day: "Mon", date: "2026-09-28",
      subject: "ap-english", subjectName: "AP English",
      what: "Your position on AI in the classroom — read \"I'm a High Schooler. AI Is Demolishing My Education,\" then reply with linked paragraphs: \"I'm a high schooler. AI has ___,\" 2–3 Bogost quotes, and a \"While ___ ; however ___.\" Before Monday's class.",
      help: "AP Lang TERMS Library (exigence, Rogerian, position vs. opinion)",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Mon", date: "2026-09-28",
      subject: "ap-french", subjectName: "French",
      what: "Optional: reflexives review in the passé composé — due Monday 7:59 AM",
      help: "Passé composé with être & reflexive verbs",
      helpFile: "lessons/passe-compose-etre-reflexive.html"
    },
    {
      day: "Mon", date: "2026-09-28",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "AMSCO pgs 168–188 & 192–204 (Unit 2, Biological Bases) — due Monday 11:59 PM"
    },
    {
      day: "Tue", date: "2026-09-29",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Unit 2 EXAM (Integumentary) — Monday is the review day",
      help: "Unit 2 exam prep — study guide + practice quiz",
      helpFile: "lessons/hap-unit-2-integumentary-study-quiz.html"
    }
  ],
  ahead: [
    { subjectName: "AP English", what: "Position Paper #1 (\"nation of wimps\") — rough-draft conversation in class", date: "2026-10-08" },
    { subjectName: "AP English", what: "Position Paper #1 — final due before class", date: "2026-10-15" }
  ]
};
