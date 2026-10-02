/* Study Hub -- "This Week" data. GENERATED, whole-file replace.
   Source: projects/GHS/week-view.md (CC regenerates on each Classroom pull).
   Do not hand-edit; do not fold into lessons.js (different lifecycles).

   Shape (two weeks at a glance, then further out):
     window.STUDY_WEEK = {
       updated: "YYYY-MM-DD",        // panel hides itself if > 7 days old
       label: "Sep 28 – Oct 2",      // THIS WEEK range
       items: [ ROW ],               // this week
       nextLabel: "Oct 5 – Oct 9",   // NEXT WEEK range
       next:  [ ROW ],               // next week
       ahead: [ { date:"YYYY-MM-DD" or free text, subject?, subjectName, what } ]
     }
     ROW = { day, date:"YYYY-MM-DD", subject:<id from lessons.js or null>,
             subjectName, what, help?, helpFile? }
   Rows/ahead items whose date has fully passed drop out on the page by
   themselves. Keep ahead to ~4-5 short lines (one line each).
   Tone rule: forward-looking help only. No "missing"/"late" items ever --
   that list stays in Greg's week-view, not here. */
window.STUDY_WEEK = {
  updated: "2026-10-02",
  label: "Sep 28 – Oct 2",
  items: [
    {
      day: "Fri", date: "2026-10-02",
      subject: "ap-english", subjectName: "AP English",
      what: "Reply to Mr. Evans with combined notes on Tannen's \"The Triumph of the Yell\" + the debate-coach talk, and draft a section or two of Position Paper #1.",
      help: "Position Paper #1 guide (draft shape, section 9)",
      helpFile: "lessons/position-paper-1-guide.html"
    },
    {
      day: "Fri", date: "2026-10-02",
      subject: "ap-french", subjectName: "French",
      what: "Weekly Reflection and Engagement Form due today."
    },
    {
      day: "Fri", date: "2026-10-02",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Mrs. Kalec posted the Unit 3 Exam Review checklist. The skeletal exam is Wed Oct 21.",
      help: "Unit 3 exam prep + flashcards",
      helpFile: "lessons/hap-unit-3-skeletal-study-quiz.html"
    },
    {
      day: "Fri", date: "2026-10-02",
      subject: "world-history", subjectName: "World History",
      what: "On to Ancient Greece: Mr. Angelopulos's Greece notes and slides."
    }
  ],
  nextLabel: "Oct 5 – Oct 9",
  next: [
    {
      day: "Mon", date: "2026-10-05",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 8 and the Bone Diagram due (Unit 3, Skeletal)."
    },
    {
      day: "Mon", date: "2026-10-05",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "Unit 2 (Systems & Piece-wise) has started: System of Two Equations worksheet due."
    },
    {
      day: "Tue", date: "2026-10-06",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Optional: CU Anschutz healthcare career panel, 10–11 AM."
    },
    {
      day: "Wed", date: "2026-10-07",
      subject: "ap-english", subjectName: "AP English",
      what: "Finish a real rough draft of Position Paper #1 for Thursday.",
      help: "Position Paper #1 guide (draft shape, section 9)",
      helpFile: "lessons/position-paper-1-guide.html"
    },
    {
      day: "Thu", date: "2026-10-08",
      subject: "ap-english", subjectName: "AP English",
      what: "Rough-draft conversation in class."
    }
  ],
  ahead: [
    { date: "2026-10-14", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Labs 9 + 10 due" },
    { date: "2026-10-15", subject: "ap-english", subjectName: "AP English", what: "Position Paper #1 final, before class" },
    { date: "2026-10-19", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Fracture Investigation due" },
    { date: "2026-10-21", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Skeletal exam (multiple choice + practical)" },
    { date: "by end of Unit 2", subject: "world-history", subjectName: "World History", what: "Read OpenStax 8.2 + 9.2 (on the Unit 2 test)" }
  ]
};
