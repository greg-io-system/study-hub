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
  updated: "2026-10-18",
  label: "Oct 19 – Oct 23",
  items: [
    {
      day: "Sun", date: "2026-10-18",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "Unit 1 Progress Check on AP Classroom (Biological Bases), due tonight 11:59 PM."
    },
    {
      day: "Mon", date: "2026-10-19",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: read the two paragraphs from the review of Bauerlein's \"The Dumbest Generation\" (they're in the email), then read and annotate Temple Grandin, \"Against Algebra.\" Write notes on seven points, each pointing to a specific passage: central claim, purpose, argument, audience (be narrow), context, occasion, ethos. Spend extra time on context and occasion. REPLY to Mr. Evans's \"For Monday (10/19)\" email with a link or photo of your notes. Bring 50 Essays to class.",
      help: "Terms: Context vs. Occasion",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Mon", date: "2026-10-19",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "\"Unit 2 Review\" due 11:59 PM. The Unit 2 test (systems + piecewise) is probably this week; date not posted yet.",
      help: "Unit 2 test review",
      helpFile: "lessons/algebra-2-unit-2-test-review.html"
    },
    {
      day: "Tue", date: "2026-10-20",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 11 due; exam review in class."
    },
    {
      day: "Wed", date: "2026-10-21",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "SKELETAL EXAM: multiple choice + practical."
    },
    {
      day: "Fri", date: "2026-10-23",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Case Study: Broken Leg due."
    },
    {
      day: "Fri", date: "2026-10-23",
      subject: "ap-french", subjectName: "French",
      what: "Weekly Reflection and Engagement Form."
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
    },
    {
      day: "Fri", date: "2026-10-30",
      subject: "ap-french", subjectName: "French",
      what: "Weekly Reflection and Engagement Form."
    }
  ],
  ahead: [
    { date: "2026-11-23", subjectName: "School", what: "Thanksgiving Break: no school Nov 23–27" },
    { date: "~2026-12-16", subjectName: "School", what: "Semester finals week (Dec 14–18); winter break starts Dec 21" },
    { date: "2027-04-14", subjectName: "SAT", what: "School-day SAT (approx.)" },
    { date: "2027-05-06", subjectName: "AP exams", what: "AP World May 6, English Lang May 12, Psych May 14" }
  ]
};
