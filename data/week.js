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
  updated: "2026-10-15",
  label: "Oct 12 – Oct 16 (no school Mon–Tue)",
  items: [
    {
      day: "Wed", date: "2026-10-14",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 9 and Lab 10 due."
    },
    {
      day: "Wed", date: "2026-10-14",
      subject: "ap-english", subjectName: "AP English",
      what: "Submit Position Paper #1 FINAL tonight: REPLY to Mr. Evans's \"For Thursday (10/15) - Nation of Wimps Position Paper\" email with your Google Doc, and give him EDITING access. It's due before class Thursday.",
      help: "Position Paper #1 guide",
      helpFile: "lessons/position-paper-1-guide.html"
    },
    {
      day: "Thu", date: "2026-10-15",
      subject: "ap-english", subjectName: "AP English",
      what: "Bring your copy of Freakonomics to class."
    },
    {
      day: "Thu", date: "2026-10-15",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "Sleep Journal due (Google Doc in Classwork, Week 8)."
    },
    {
      day: "Thu", date: "2026-10-15",
      subject: "world-history", subjectName: "World History",
      what: "Blooket homework \"Classical Civ, Persia, Greece HW\" due 10:32 AM: goal 300 correct answers."
    },
    {
      day: "Thu", date: "2026-10-15",
      subject: "world-history", subjectName: "World History",
      what: "\"Intro to Rome\" worksheet due 11:59 PM (your copy of the Doc is attached in Classroom)."
    },
    {
      day: "Fri", date: "2026-10-16",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: read and annotate \"Anti-Intellectualism and the 'Dumbing Down' of America\" (Ray Williams, 2014). Organize your notes by Exigence, Audience and Purpose, give the other side a real voice, say what YOU think, and test his 2014 claims against 2026 with your own facts or stories. REPLY to Mr. Evans's \"For Friday (10/16)\" email with your notes.",
      help: "Terms: Rhetorical Framework",
      helpFile: "lessons/terms-library.html"
    },
    {
      day: "Fri", date: "2026-10-16",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "QUIZ: piecewise functions.",
      help: "Unit 2 review (piecewise section)",
      helpFile: "lessons/algebra-2-unit-2-test-review.html"
    },
    {
      day: "Fri", date: "2026-10-16",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Fracture Investigation due."
    },
    {
      day: "Fri", date: "2026-10-16",
      subject: "ap-french", subjectName: "French",
      what: "Weekly Reflection and Engagement Form."
    }
  ],
  nextLabel: "Oct 19 – Oct 23",
  next: [
    {
      day: "Sun", date: "2026-10-18",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "Unit 1 Progress Check on AP Classroom (Biological Bases)."
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
  ahead: [
    { date: "~Oct 26", subject: "world-history", subjectName: "World History", what: "Unit 2 exam expected around here (date not posted yet)" },
    { date: "2026-10-30", subjectName: "School", what: "AP exam PAYMENT deadline" },
    { date: "2026-10-30", subjectName: "School", what: "End of the 2nd six weeks: grades close" },
    { date: "by end of Unit 2", subject: "world-history", subjectName: "World History", what: "Read OpenStax 8.2 + 9.2 (on the Unit 2 test); study guide + quiz on the hub" }
  ]
};
