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
  updated: "2026-10-04",
  label: "Oct 5 – Oct 9",
  items: [
    {
      day: "Sun", date: "2026-10-04",
      subject: "world-history", subjectName: "World History",
      what: "Ancient Greece Choose Your Own Adventure due tonight, 11:59 PM (your Google Doc is on the assignment).",
      help: "Ancient Greece starter (all 11 topics)",
      helpFile: "lessons/ancient-greece-starter.html"
    },
    {
      day: "Mon", date: "2026-10-05",
      subject: "ap-english", subjectName: "AP English",
      what: "Read \"The New Chilling Effect\" with Tannen and Seo noted in, then reply to Mr. Evans with your notes and ONE paragraph: your exigence and thesis on the value of civil debate.",
      help: "Position Paper #1 guide",
      helpFile: "lessons/position-paper-1-guide.html"
    },
    {
      day: "Mon", date: "2026-10-05",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "AMSCO 1.6 and 2.1 reading: pages 208–228 and 245–257.",
      help: "Sensation & Perception study page",
      helpFile: "lessons/sensation-perception.html"
    },
    {
      day: "Mon", date: "2026-10-05",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 8 and the Bone Diagram due (Bone Diagram by 11:59 PM).",
      help: "Unit 3 exam prep + flashcards",
      helpFile: "lessons/hap-unit-3-skeletal-study-quiz.html"
    },
    {
      day: "Mon", date: "2026-10-05",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "System of Two Equations worksheet due.",
      help: "Systems of Two Equations lesson",
      helpFile: "lessons/systems-of-equations.html"
    },
    {
      day: "Tue", date: "2026-10-06",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Optional: CU Anschutz healthcare career panel, 10–11 AM."
    },
    {
      day: "Thu", date: "2026-10-08",
      subject: "ap-english", subjectName: "AP English",
      what: "Position Paper #1 rough-draft conversation in class. Bring a real draft.",
      help: "Position Paper #1 guide (draft shape, section 9)",
      helpFile: "lessons/position-paper-1-guide.html"
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
      subject: "ap-english", subjectName: "AP English",
      what: "Position Paper #1 final, before class (PSAT is that morning, so aim to submit Wednesday night).",
      help: "Position Paper #1 guide",
      helpFile: "lessons/position-paper-1-guide.html"
    },
    {
      day: "Fri", date: "2026-10-16",
      subject: "ap-french", subjectName: "French",
      what: "Weekly Reflection and Engagement Form."
    }
  ],
  ahead: [
    { date: "2026-10-19", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Fracture Investigation due" },
    { date: "2026-10-20", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Lab 11 due; exam review" },
    { date: "2026-10-21", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Skeletal exam (multiple choice + practical)" },
    { date: "2026-10-23", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Case Study: Broken Leg due" },
    { date: "by end of Unit 2", subject: "world-history", subjectName: "World History", what: "Read OpenStax 8.2 + 9.2 (on the Unit 2 test); study guide + quiz on the hub" }
  ]
};
