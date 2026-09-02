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
  updated: "2026-09-02",
  label: "Week of Aug 31 – Sep 4",
  items: [
    {
      day: "Wed", date: "2026-09-02",
      subject: "world-history", subjectName: "World History",
      what: "First Civilizations assignment — due tonight 11:59pm"
    },
    {
      day: "Wed", date: "2026-09-02",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "WS 1.2 Evaluating Functions & Domain/Range + 1.2 Practice — due tonight 11:59pm",
      help: "Function Machine lesson + practice",
      helpFile: "lessons/function-notation-inputs-outputs.html"
    },
    {
      day: "Wed", date: "2026-09-02",
      subject: null, subjectName: "Human Anatomy",
      what: "Terminology Quiz — due tonight 11:59pm"
    }
  ],
  ahead: [
    { date: "2026-09-08", subjectName: "AP Psychology",
      what: "AMSCO reading pp. 55–58 & 71–98 due" },
    { date: "2026-09-09", subjectName: "Human Anatomy",
      what: "Tissue Box Project due 8:00am" }
  ]
};
