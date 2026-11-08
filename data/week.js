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
       ahead: [ { date:"YYYY-MM-DD" or free text, subject?, subjectName, what } ],
       ask:   [ { q, subject?, subjectName } ]  // "Quick questions" for Kelly
     }
   ask = the sweep report's "What to ask Kelly", forward-looking only (dates,
   tests, scope -- never "did you turn in"). The hub adds one standing
   question ("anything announced in class?") itself. Answers post to Greg's
   Google Form "Study Hub - Notes from Kelly" -> its response Sheet.
     ROW = { day, date:"YYYY-MM-DD", subject:<id from lessons.js or null>,
             subjectName, what, help?, helpFile? }
   Rows/ahead items whose date has fully passed drop out on the page by
   themselves. Keep ahead to ~4-5 short lines (one line each).
   Tone rule: forward-looking help only. No "missing"/"late" items ever --
   that list stays in Greg's week-view, not here. */
window.STUDY_WEEK = {
  updated: "2026-11-08",
  /* 2026-11-08 Sun: Anatomy "Body Muscle Quizzer" study app (posted Sat) added to Wednesday's quiz row */
  /* 2026-11-07 Sat: window rolled to Nov 9-13 / Nov 16-20; English For Monday ("What is a city?" argument of definition); Anatomy exam moves from ahead into next week */
  /* 2026-11-06 Fri midday: French Weekly Engagement Reflection (12 pts, today); WH "The World in 820 Readings" + self assessment form; ask list swaps the past debate question for the 820 readings */
  /* 2026-11-05 Thu after school: English For Friday (Haile "Going It Alone", developed response + reverse outline); ask list drops "today" from the debate question */
  /* 2026-11-04 Wed after school: WH "Universal Museums Debate" (100 pts, Thu 11:59 PM); ask list adds the exit ticket/debate question */
  /* 2026-11-04 Wed midday: French sub-day work (Edpuzzle 100 pts tonight, PC vs Imparfait 10 pts today); Anatomy quiz 20 pts; Psych Cognition Study Materials posted; ask list adds the Cognition test date */
  /* 2026-11-03 Tue after school: English For Thursday (Staples, five developed responses); French extra credit Wed 5-7 PM; ask list refreshed */
  /* 2026-11-02 Mon after school: English For Tuesday (Chau, line of reasoning); Psych S&P study guide + Cognition reading (11/9); Anatomy muscle list; Body Muscles Quiz moved to Wed 11/11 (calendar re-read) */
  /* 2026-11-02 Mon morning: window rolled to Nov 2-6 / Nov 9-13; French "Rejoindre les 2 Padlets" (5 pts, today); WH test-day reminders; Anatomy Wed quiz = Head & Neck Muscle Quiz */
  /* 2026-10-30 Fri after school: Anatomy "Facial Expression Lab" (25 pts, Classroom due Sun 11/1) + Innerbody muscle guide; English For Monday Q3 creativity paragraphs */
  /* 2026-10-29 Thu after school: Psych "Depth Perception Scavenger Hunt" (15 pts, Fri); English For Friday "The Creativity Crisis" */
  /* 2026-10-28 Wed after school: WH "Religions Research" (100 pts, Fri 11:59 PM) + Blooket review link */
  /* 2026-10-28 Wed: WH Unit 2 study guide posted (test details); Anatomy Unit 4 Exam Review + Chicken Limb Dissection (Thu); French Halloween vocab to study */
  label: "Nov 9 – Nov 13",
  items: [
    {
      day: "Mon", date: "2026-11-09",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class, in its OWN Google Doc: an argument of definition answering \"What is a city?\" Re-watch the \"What is a City?\" video, go back to your notes, and use the Everything's an Argument definitions document. Not a formal, then an operational, then an example definition: ONE layered definition where your F, O and E build on and change each other, drawing on the last two weeks of sources (and creativity). Models you can borrow: Staples's personal experience, Chau, Bronson and Merryman, Gold, \"Can a trail be a city?\" A metaphor is not a definition, but it can be your way in. REPLY to \"For Monday (11/9)\" with your Doc. From now on, context, specific evidence and explanation count in the gradebook.",
      help: "Terms: the three kinds of definition, extended metaphor",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Mon", date: "2026-11-09",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "DUE: \"ASMO 2.7 and 2.8\", the first Cognition reading: AMSCO pp. 317-345 and workbook pp. 49-52. \"Cognition Study Materials\" in Classroom has the study guide, the lecture slides and two sets of practice questions."
    },
    {
      day: "Mon", date: "2026-11-09",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 16 (due Fri 11/13)."
    },
    {
      day: "Tue", date: "2026-11-10",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 15 due; it gets graded in class. Lab 13 (due Mon 11/16)."
    },
    {
      day: "Wed", date: "2026-11-11",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "BODY MUSCLES QUIZ: the 15 \"Body Muscles\" on Mrs. Kalec's Naming Muscles List. To study, use her \"Body Muscle Quizzer\" app (posted Saturday, link in Classroom: \"Use the app to help you study for the quiz!\") and her \"Great Muscle Resource\" (Innerbody's interactive muscle guide, link in Classroom). Then the Ambient Temperature Lab (due Tue 11/17)."
    },
    {
      day: "Fri", date: "2026-11-13",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 16 due; graded in class, then review for Monday's Muscular System Exam."
    }
  ],
  nextLabel: "Nov 16 – Nov 20",
  next: [
    {
      day: "Mon", date: "2026-11-16",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "MUSCULAR SYSTEM EXAM: multiple choice plus 2 of the 6 FRQs on the Unit 4 Exam Review, picked at random (prepare all six). No labeling. Lab 13 due."
    },
    {
      day: "Tue", date: "2026-11-17",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Nervous System starts. Ambient Temperature Lab due."
    }
  ],
  ahead: [
    { date: "2026-11-23", subjectName: "School", what: "Thanksgiving Break: no school Nov 23–27" },
    { date: "~2026-12-16", subjectName: "School", what: "Semester finals week (Dec 14–18); winter break starts Dec 21" },
    { date: "2027-04-14", subjectName: "SAT + AP", what: "School-day SAT ~Apr 14; AP World May 6, English Lang May 12, Psych May 14" }
  ],
  ask: [
    { q: "Mr. Angelopulos posted \"The World in 820 Readings\" and a self assessment form on Friday. What are the readings for, and when is each one due?", subject: "world-history", subjectName: "World History" },
    { q: "Mrs. Aschwanden just posted the Cognition study materials. When is the Cognition test?", subject: "ap-psychology", subjectName: "AP Psychology" },
    { q: "The \"Loup Garou / Halloween Vocab to study\" doc went up Wednesday, after Monday's Halloween quiz. Is there a new quiz or activity on it? When?", subject: "ap-french", subjectName: "French" },
    { q: "Algebra has posted nothing since the Quadratic Review WS (10/22). Is a quadratics quiz or test coming? When?", subject: "algebra-2", subjectName: "Algebra 2" }
  ]
};
