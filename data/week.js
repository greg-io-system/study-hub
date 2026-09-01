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
  updated: "2026-08-31",
  label: "Week of Aug 31 – Sep 4",
  items: [
    {
      day: "Mon", date: "2026-08-31",
      subject: null, subjectName: "AP Psychology",
      what: "AMSCO reading pp. 31–51 & 65–68 — due tonight 11:59pm"
    },
    {
      day: "Mon", date: "2026-08-31",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "WS 1.4 — due tonight 11:59pm",
      help: "Function Machine lesson + practice",
      helpFile: "lessons/function-notation-inputs-outputs.html"
    },
    {
      day: "Tue", date: "2026-09-01",
      subject: "world-history", subjectName: "World History",
      what: "OpenStax 2.1 & 2.2 written work — due at start of class"
    },
    {
      day: "Tue", date: "2026-09-01",
      subject: "world-history", subjectName: "World History",
      what: "Quiz on Chapters 1 & 2",
      help: "Study guides + practice quizzes (Ch. 1 & 2)",
      helpFile: "lessons/early-humans-study-quiz.html"
    },
    {
      day: "Tue", date: "2026-09-01",
      subject: null, subjectName: "AP Psychology",
      what: "Quiz on the AMSCO reading (pp. 31–51, 65–68)"
    }
  ],
  ahead: [
    { date: "2026-09-08", subjectName: "AP Psychology",
      what: "AMSCO reading pp. 55–58 & 71–98 due" },
    { date: "2026-09-09", subjectName: "Human Anatomy",
      what: "Tissue Box Project due 8:00am" }
  ]
};
