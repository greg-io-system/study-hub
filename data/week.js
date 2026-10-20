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
  updated: "2026-10-20",
  label: "Oct 19 – Oct 23",
  items: [
    {
      day: "Tue", date: "2026-10-20",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Tonight 11:59 PM: Fracture Investigation Briefing (one copy per group) + the Group Evaluation. Lab 11 due today. Mrs. Kalec: get every lab and assignment in BEFORE Wednesday's exam, and fill out a Late Work Form for anything you submit in Classroom."
    },
    {
      day: "Tue", date: "2026-10-20",
      subject: "world-history", subjectName: "World History",
      what: "Tonight 11:59 PM: \"Intro Paragraph Pt. 1\" and \"Intro Paragraph Ingredients Pt. 2\" (use the Intro Paragraph Ingredients slides)."
    },
    {
      day: "Wed", date: "2026-10-21",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "SKELETAL EXAM: multiple choice + practical.",
      help: "Unit 3 study quiz",
      helpFile: "lessons/hap-unit-3-skeletal-study-quiz.html"
    },
    {
      day: "This wk", date: "2026-10-23",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "Unit 2 test (systems + piecewise) is probably this week; date not posted yet.",
      help: "Unit 2 test review",
      helpFile: "lessons/algebra-2-unit-2-test-review.html"
    },
    {
      day: "This wk", date: "2026-10-23",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "New unit: Sensation & Perception (1.5). Study material is up in Classroom (Quizlet, videos, a practice test, Gimkit). No quiz date posted yet: ask Mrs. Aschwanden."
    },
    {
      day: "This wk", date: "2026-10-23",
      subject: "ap-french", subjectName: "French",
      what: "\"Study this!\" Quizlet: L'Halloween contes, with sentences. Probably a quiz coming; no date yet."
    }
  ],
  nextLabel: "Oct 26 – Oct 30",
  next: [
    {
      day: "~Mon", date: "2026-10-26",
      subject: "world-history", subjectName: "World History",
      what: "Unit 2 exam expected around here (date not posted yet). Read OpenStax 8.2 + 9.2 before it.",
      help: "Study guide + quiz on the hub"
    },
    {
      day: "Fri", date: "2026-10-30",
      subject: null, subjectName: "School",
      what: "AP exam PAYMENT deadline; end of the 2nd six weeks (grades close)."
    }
  ],
  ahead: [
    { date: "2026-11-23", subjectName: "School", what: "Thanksgiving Break: no school Nov 23–27" },
    { date: "~2026-12-16", subjectName: "School", what: "Semester finals week (Dec 14–18); winter break starts Dec 21" },
    { date: "2027-04-14", subjectName: "SAT", what: "School-day SAT (approx.)" },
    { date: "2027-05-06", subjectName: "AP exams", what: "AP World May 6, English Lang May 12, Psych May 14" }
  ]
};
