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
  updated: "2026-09-07",
  label: "Week of Sep 7 – Sep 11",
  items: [
    {
      day: "Tue", date: "2026-09-08",
      subject: null, subjectName: "AP Psychology",
      what: "AMSCO reading pp. 53–58 & 71–98 — due Tuesday"
    },
    {
      day: "Wed", date: "2026-09-09",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Tissue Box Project — due Wednesday 8:00am",
      help: "Project guide — rubric decoded + slide map",
      helpFile: "lessons/hap-tissue-box-project-guide.html"
    },
    {
      day: "Fri", date: "2026-09-11",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Unit 1 Exam (Intro & Tissues) — Friday",
      help: "Exam-prep study guide + practice quiz",
      helpFile: "lessons/hap-unit-1-intro-tissues-study-quiz.html"
    }
  ],
  ahead: [
    { date: "2026-09-17", subjectName: "French",
      what: "Optional Passé Composé practice due Thu Sep 17" },
    { date: "2026-09-18", subjectName: "French",
      what: "Four items due Fri Sep 18, 10:00am — reflexive verbs, reflexives in the passé composé, passé composé with être, futur proche" }
  ]
};
