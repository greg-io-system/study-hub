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
  updated: "2026-09-30",
  label: "Oct 1 – Oct 9",
  items: [
    {
      day: "Thu", date: "2026-10-01",
      subject: "ap-english", subjectName: "AP English",
      what: "Two things for Thursday's class: (1) READ \"The Coddling of the American Mind\" — no notes, just read and think; you'll discuss it in class. (2) Bring a framework for Position Paper #1: Marano's claim in your words, your position in one sentence, the sources you'd put around it, and your \"While ___ ; however ___\".",
      help: "AP Lang TERMS Library (exigence, Rogerian, a mind at work)",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Thu", date: "2026-10-01",
      subject: "world-history", subjectName: "World History",
      what: "This week is Persia — Mr. Angelopulos posted Persia notes and Herodotus's \"Customs of the Persians\" reading."
    },
    {
      day: "Mon", date: "2026-10-05",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Unit 3 (Skeletal): Lab 8 and the Bone Diagram are both due Monday."
    },
    {
      day: "Thu", date: "2026-10-08",
      subject: "ap-english", subjectName: "AP English",
      what: "Position Paper #1 (\"nation of wimps\") — rough-draft conversation in class. Your AI and Greenfeld paragraphs count as raw material."
    }
  ],
  ahead: [
    { subjectName: "Human Anatomy", what: "Optional: CU Anschutz healthcare career panel, 10–11 AM (Mrs. Kalec posted it)", date: "2026-10-06" },
    { subjectName: "Human Anatomy", what: "Lab 9 + Lab 10 due", date: "2026-10-14" },
    { subjectName: "AP English", what: "Position Paper #1 — final due before class", date: "2026-10-15" },
    { subjectName: "Human Anatomy", what: "Fracture Investigation due (Oct 19), Lab 11 (Oct 20), Broken Leg case study (Oct 23); Skeletal exam that week", date: "2026-10-19" },
    { subjectName: "World History", what: "Read OpenStax 8.2 (Early Cultures and Civilizations in the Americas) + 9.2 (Emergence of Farming and the Bantu Migrations) — they'll be on the Unit 2 test", date: "by end of Unit 2" }
  ]
};
