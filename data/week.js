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
  updated: "2026-09-23",
  label: "Week of Sep 21 – Sep 25",
  items: [
    {
      day: "Thu", date: "2026-09-24",
      subject: "ap-english", subjectName: "AP English",
      what: "Carr \"Round 2\" — annotate the whole essay for the rhetorical situation, then reply with notes on Exigence/Purpose/Convincing + a developed paragraph on Audience & Ethos. Before Thursday's class.",
      help: "Is Google Making Us Stupid? — an annotation guide (the rhetorical situation + ethos & pathos, with tap-to-reveal hints)",
      helpFile: "lessons/carr-annotation-guide.html"
    },
    {
      day: "Fri", date: "2026-09-25",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "Unit 1 TEST + the Unit 1 Review — Friday",
      help: "Unit 1 Test — Review (functions + sequences, incl. the square-root graph, with an interactive sequence builder)",
      helpFile: "lessons/algebra-2-unit-1-test-review.html"
    },
    {
      day: "Fri", date: "2026-09-25",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Two assignments due Friday: Burn Victim Case Study + Fingerprint Identification"
    }
  ],
  ahead: [
    { subjectName: "French", what: "reflexives in the passé composé — due Mon", date: "2026-09-28" },
    { subjectName: "AP Psychology", what: "AMSCO pgs 168–188 & 192–204 — due Mon", date: "2026-09-28" },
    { subjectName: "Human Anatomy", what: "Unit 2 Exam", date: "2026-09-29" }
  ]
};
