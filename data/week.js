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
  updated: "2026-09-30",
  label: "Sep 28 – Oct 2",
  items: [
    {
      day: "Thu", date: "2026-10-01",
      subject: "ap-english", subjectName: "AP English",
      what: "READ \"The Coddling of the American Mind\" (no notes) and bring a framework for Position Paper #1 to your Constitution.",
      help: "Position Paper #1 guide (framework builder, section 7)",
      helpFile: "lessons/position-paper-1-guide.html"
    },
    {
      day: "Fri", date: "2026-10-02",
      subject: "world-history", subjectName: "World History",
      what: "Persia this week: Mr. Angelopulos's Persia notes and Herodotus's \"Customs of the Persians\"."
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
      day: "Tue", date: "2026-10-06",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Optional: CU Anschutz healthcare career panel, 10–11 AM."
    },
    {
      day: "Wed", date: "2026-10-07",
      subject: "ap-english", subjectName: "AP English",
      what: "Finish a real rough draft of Position Paper #1 for Thursday.",
      help: "Position Paper #1 guide (draft shape, section 8)",
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
    { date: "2026-10-19", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Fracture Investigation due; Skeletal exam later that week" },
    { date: "by end of Unit 2", subject: "world-history", subjectName: "World History", what: "Read OpenStax 8.2 + 9.2 (on the Unit 2 test)" }
  ]
};
