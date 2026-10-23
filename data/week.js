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
  updated: "2026-10-23",
  /* refreshed again 2026-10-23 after school: English for Mon 10/26 added */
  label: "Oct 19 – Oct 23",
  items: [
    {
      day: "Wed", date: "2026-10-21",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "SKELETAL EXAM: multiple choice + practical. Then Unit 4 (Muscular System) starts with the article \"How Many Muscles?\"",
      help: "Unit 3 study quiz",
      helpFile: "lessons/hap-unit-3-skeletal-study-quiz.html"
    },
    {
      day: "Thu", date: "2026-10-22",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: copy \"Arguments of Definition\" into your Lang Stuff folder and take notes on the three kinds (formal, operational, by example). Then read and annotate Klinenberg, \"Worry Less About Crumbling Roads, More About Crumbling Libraries.\" Mark where he defines \"social infrastructure\" each of the three ways, then notes on central claim, context (2018), occasion, and implications (2018 to now), plus your own spaces. REPLY to Mr. Evans's \"For Thursday (10/22)\" email with your notes.",
      help: "Terms: the three kinds of definition",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Fri", date: "2026-10-23",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "8:00 AM: \"How Many Muscles Article\" (20 pts, in Classroom). In class: Muscle Notes: Types, and Lab 12 starts (due Thu 10/29). The Muscular System notes slides are now in Classroom."
    },
    {
      day: "Fri", date: "2026-10-23",
      subject: "algebra-2", subjectName: "Algebra II",
      what: "\"Quadratic Review WS\" due today (worksheet PDF in Classroom). Unit 3, Quadratics, has started."
    },
    {
      day: "Fri", date: "2026-10-23",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: add to your Arguments of Definition notes. Then developed notes on two videos: Steven Johnson, \"Where Good Ideas Come From\" (his definition of a good idea, the conditions, examples, his claim) and Ken Robinson, \"Changing Education Paradigms\" (start from: Johnson says good ideas come from ___; how could school shift that way? Cover the moments at 1:57 and 3:08 and \"kept there with a story\"). REPLY to Mr. Evans's \"For Friday (10/23)\" email with notes on BOTH videos.",
      help: "Terms: the three kinds of definition",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "This wk", date: "2026-10-23",
      subject: "world-history", subjectName: "World History",
      what: "Han China vs. Rome One-Pager (25 pts): title, context on both empires, 5 vocab words, 3 similarities + 3 differences in full sentences, 2+ captioned images, and a thesis: more similar or more different? Use your class notes. No due date posted yet: check with Mr. Angelopulos."
    },
    {
      day: "This wk", date: "2026-10-23",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "New unit: Sensation & Perception (1.5). Study material is up in Classroom (Quizlet, videos, a practice test, Gimkit). No quiz date posted yet: ask Mrs. Aschwanden for the test schedule."
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
      day: "Mon", date: "2026-10-26",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: refresh your Arguments of Definition notes. Jot thinking notes \"On Voting\": what is a vote (formal, operational, by example), its purpose, responsibility and obligation, and the ideal system. Read and annotate \"Who Should I Vote For?\" (AI and voting), marking quotes that spark your curiosity. Then write a reflection on the collisions (technology and politics, time and efficiency, and your own), built from your quotes. REPLY to Mr. Evans's \"For Monday (10/26)\" email with it.",
      help: "Terms: the three kinds of definition",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "~Mon", date: "2026-10-26",
      subject: "world-history", subjectName: "World History",
      what: "Unit 2 exam expected around here (date not posted yet). Han China and Rome are the new material; know the Rome vs. Han comparison. Read OpenStax 8.2 + 9.2 too.",
      help: "Unit 2 exam review",
      helpFile: "lessons/unit-2-exam-review.html"
    },
    {
      day: "Wed", date: "2026-10-28",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Chicken wing dissection (block day). Lab 14 handed out (due Tue 11/3)."
    },
    {
      day: "Thu", date: "2026-10-29",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 12 due."
    },
    {
      day: "Fri", date: "2026-10-30",
      subject: null, subjectName: "School",
      what: "AP exam PAYMENT deadline; end of the 2nd six weeks (grades close)."
    }
  ],
  ahead: [
    { date: "2026-11-04", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Facial Muscle Quiz Wed 11/4; Body Muscles Quiz Mon 11/9; Muscular System EXAM Mon 11/16 (FRQs, no labeling)" },
    { date: "2026-11-06", subject: "human-anatomy", subjectName: "Human Anatomy", what: "\"Lights, Camera, Contraction!\" project due (gallery walk)" },
    { date: "2026-11-23", subjectName: "School", what: "Thanksgiving Break: no school Nov 23–27" },
    { date: "~2026-12-16", subjectName: "School", what: "Semester finals week (Dec 14–18); winter break starts Dec 21" },
    { date: "2027-04-14", subjectName: "SAT + AP", what: "School-day SAT ~Apr 14; AP World May 6, English Lang May 12, Psych May 14" }
  ]
};
