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
  updated: "2026-10-05",
  label: "Oct 5 – Oct 9",
  items: [
    {
      day: "Mon", date: "2026-10-05",
      subject: "world-history", subjectName: "World History",
      what: "NEW: Alexander of Macedon Worksheet due tonight, 11:59 PM.",
      help: "Ancient Greece starter",
      helpFile: "lessons/ancient-greece-starter.html"
    },
    {
      day: "Mon", date: "2026-10-05",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "AMSCO 1.6 and 2.1 reading due tonight: pages 208–228 and 245–257.",
      help: "Sensation & Perception study page",
      helpFile: "lessons/sensation-perception.html"
    },
    {
      day: "Mon", date: "2026-10-05",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "System of Two Equations worksheet due tonight, 11:59 PM.",
      help: "Systems of Two Equations lesson",
      helpFile: "lessons/systems-of-equations.html"
    },
    {
      day: "Mon", date: "2026-10-05",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 8 and the Bone Diagram due (Bone Diagram by 11:59 PM).",
      help: "Unit 3 exam prep + flashcards",
      helpFile: "lessons/hap-unit-3-skeletal-study-quiz.html"
    },
    {
      day: "Tue", date: "2026-10-06",
      subject: "ap-english", subjectName: "AP English",
      what: "Read \"The Death of the Three-pronged Thesis\" (short). Set up your paper in MLA with Mr. Evans's template, and keep drafting Position Paper #1.",
      help: "Position Paper #1 guide",
      helpFile: "lessons/position-paper-1-guide.html"
    },
    {
      day: "Tue", date: "2026-10-06",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Optional: CU Anschutz healthcare career panel, 3rd period."
    },
    {
      day: "Thu", date: "2026-10-08",
      subject: "ap-english", subjectName: "AP English",
      what: "Position Paper #1 rough draft due BEFORE class, then the draft conversation. Aim to finish it Wednesday night.",
      help: "Position Paper #1 guide (draft shape, section 9)",
      helpFile: "lessons/position-paper-1-guide.html"
    },
    {
      day: "Fri", date: "2026-10-09",
      subject: null, subjectName: "School",
      what: "AP exam registration deadline (AP English Lang + AP Psychology). Make sure you're signed up."
    },
    {
      day: "Fri", date: "2026-10-09",
      subject: "ap-french", subjectName: "French",
      what: "Weekly Reflection and Engagement Form. Then fall break!"
    }
  ],
  nextLabel: "Oct 12 – Oct 16 (no school Mon–Tue)",
  next: [
    {
      day: "Wed", date: "2026-10-14",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 9 and Lab 10 due."
    },
    {
      day: "Thu", date: "2026-10-15",
      subject: null, subjectName: "School",
      what: "PSAT/NMSQT for juniors, 8:15–11:45 AM. Your English paper is due the same morning, so submit it Wednesday night."
    },
    {
      day: "Thu", date: "2026-10-15",
      subject: "ap-english", subjectName: "AP English",
      what: "Position Paper #1 final, before class (PSAT is that morning, so aim to submit Wednesday night).",
      help: "Position Paper #1 guide",
      helpFile: "lessons/position-paper-1-guide.html"
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
  ahead: [
    { date: "2026-10-18", subject: "ap-psychology", subjectName: "AP Psychology", what: "Unit 1 Progress Check on AP Classroom (Biological Bases)" },
    { date: "2026-10-21", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Skeletal exam (multiple choice + practical)" },
    { date: "2026-10-23", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Case Study: Broken Leg due" },
    { date: "2026-10-30", subjectName: "School", what: "End of the 2nd six weeks: grades close" },
    { date: "by end of Unit 2", subject: "world-history", subjectName: "World History", what: "Read OpenStax 8.2 + 9.2 (on the Unit 2 test); study guide + quiz on the hub" }
  ]
};
