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
  updated: "2026-09-12",
  label: "Week of Sep 14 – Sep 18",
  items: [
    {
      day: "Mon", date: "2026-09-14",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "Parent Functions & Transformations (optional) — due Monday 11:59pm",
      help: "Transformations Explorer — drag a, h, k and watch the graph",
      helpFile: "lessons/transformations-of-functions.html"
    },
    {
      day: "Thu", date: "2026-09-17",
      subject: null, subjectName: "French",
      what: "Optional Passé Composé practice — due Thursday 12:00pm"
    },
    {
      day: "Fri", date: "2026-09-18",
      subject: null, subjectName: "French",
      what: "Four items due Friday 10:00am — reflexive verbs, reflexives in the passé composé, passé composé with être, futur proche"
    }
  ]
};
