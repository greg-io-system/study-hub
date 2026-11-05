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
  updated: "2026-11-04",
  /* 2026-11-04 Wed after school: WH "Universal Museums Debate" (100 pts, Thu 11:59 PM); ask list adds the exit ticket/debate question */
  /* 2026-11-04 Wed midday: French sub-day work (Edpuzzle 100 pts tonight, PC vs Imparfait 10 pts today); Anatomy quiz 20 pts; Psych Cognition Study Materials posted; ask list adds the Cognition test date */
  /* 2026-11-03 Tue after school: English For Thursday (Staples, five developed responses); French extra credit Wed 5-7 PM; ask list refreshed */
  /* 2026-11-02 Mon after school: English For Tuesday (Chau, line of reasoning); Psych S&P study guide + Cognition reading (11/9); Anatomy muscle list; Body Muscles Quiz moved to Wed 11/11 (calendar re-read) */
  /* 2026-11-02 Mon morning: window rolled to Nov 2-6 / Nov 9-13; French "Rejoindre les 2 Padlets" (5 pts, today); WH test-day reminders; Anatomy Wed quiz = Head & Neck Muscle Quiz */
  /* 2026-10-30 Fri after school: Anatomy "Facial Expression Lab" (25 pts, Classroom due Sun 11/1) + Innerbody muscle guide; English For Monday Q3 creativity paragraphs */
  /* 2026-10-29 Thu after school: Psych "Depth Perception Scavenger Hunt" (15 pts, Fri); English For Friday "The Creativity Crisis" */
  /* 2026-10-28 Wed after school: WH "Religions Research" (100 pts, Fri 11:59 PM) + Blooket review link */
  /* 2026-10-28 Wed: WH Unit 2 study guide posted (test details); Anatomy Unit 4 Exam Review + Chicken Limb Dissection (Thu); French Halloween vocab to study */
  label: "Nov 2 – Nov 6",
  items: [
    {
      day: "Mon", date: "2026-11-02",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: think through the three points in Mr. Evans's email (were the Chicago River, Volkswagen, bridge-under-a-bridge and Taiwan trash solutions creative? who decides what counts as creative?). Review your definitions document (formal, operational, by example). Then, in a GOOGLE DOC, write a series of developed paragraphs on the 2014 Q3 prompt: argue FOR or AGAINST creating a class in creativity. Use evidence from your library (not personal experience), define \"creativity\" in your position, and use the Rogerian writing stems. 45-50 minutes max. REPLY to \"For Monday (11/2)\" with the link to your Doc.",
      help: "Terms: the three kinds of definition, Rogerian",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Mon", date: "2026-11-02",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "DUE: AMSCO 2.4 and 2.5 (pp. 292-313) and workbook pp. 47-48."
    },
    {
      day: "Mon", date: "2026-11-02",
      subject: "ap-french", subjectName: "French",
      what: "DUE today: \"Rejoindre les 2 Padlets\" (5 pts). Join BOTH Padlets linked in Classroom (the Golden / Jules Verne collaboration, one in English, one in French) and introduce yourself in both."
    },
    {
      day: "Mon", date: "2026-11-02",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "\"Lights, Camera, Contraction!\" work day: read the instructions, make your visuals and describe a muscle contraction in your own voice. Gallery walk is Friday."
    },
    {
      day: "Mon", date: "2026-11-02",
      subject: "world-history", subjectName: "World History",
      what: "Test tomorrow: get your handwritten notes ready (Mr. Angelopulos may read or collect them; your own handwriting only, no sharing notes with another class) and read OpenStax 8.2 and 9.2.",
      help: "Make your one-page notes", helpFile: "lessons/unit-2-one-page-notes.html"
    },
    {
      day: "Mon", date: "2026-11-02",
      subject: "world-history", subjectName: "World History",
      what: "Test tomorrow, if you have time after your notes sheet: check yourself on the Unit 2 review (Persia, Greece, China, Rome).",
      help: "Unit 2 exam review",
      helpFile: "lessons/unit-2-exam-review.html"
    },
    {
      day: "Mon", date: "2026-11-02",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "Test tomorrow: review Sensation & Perception. Mrs. Aschwanden added a \"Study Guide Sensation/Perception\" to the S&P Study Material in Classroom today: go down its term list, and test yourself with practice questions (her advice) rather than just re-reading.",
      help: "Sensation & Perception",
      helpFile: "lessons/sensation-perception.html"
    },
    {
      day: "Tue", date: "2026-11-03",
      subject: "world-history", subjectName: "World History",
      what: "UNIT 2 TEST: 35 multiple choice (about 12 are synthesis questions). Only notes in your own handwriting, and you hand them in. Bring a district Chromebook and be on time: you have to finish before you leave class. Read OpenStax 8.2 (Americas) and 9.2 (Farming and the Bantu Migrations) first: there are test questions on them. Scope: the Unit 2 Exam Study Guide in Classroom."
    },
    {
      day: "Tue", date: "2026-11-03",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "SENSATION & PERCEPTION TEST. Covers the AMSCO readings (pp. 263-288 and 2.4-2.5, pp. 292-313) and the S&P study material in Classroom, including the new study guide."
    },
    {
      day: "Tue", date: "2026-11-03",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: review and re-take your Line of Reasoning notes (Mr. Evans's linked doc; make your own copy). Read and annotate Danny Chau, \"The Burning Desire for Hot Chicken\" in 50 Essays (it's not really about chicken: what is it about?). For each paragraph, or a run of up to three, mark its main idea and purpose and how it connects to the paragraphs around it, plus claim, purpose, audience(s) and appeals. REPLY to \"For Tuesday (11/3)\" with a photo of your notes linking paragraphs 61, 62 and 63, plus one more run of your choice. Bring 50 Essays to class.",
      help: "Terms: line of reasoning",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Tue", date: "2026-11-03",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 14 due; it gets graded in class. More \"Lights, Camera, Contraction!\" work time."
    },
    {
      day: "Wed", date: "2026-11-04",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "HEAD & NECK MUSCLE QUIZ (20 pts, Google Form in Classroom). Know the 10 \"Facial Muscles\" on Mrs. Kalec's \"Naming Muscles List\" (posted Monday in Classroom). To study, use her \"Great Muscle Resource\": Innerbody's interactive muscle guide (link in Classroom). Then Notes: Disorders; Lab 15 (due Tue 11/10)."
    },
    {
      day: "Wed", date: "2026-11-04",
      subject: "ap-french", subjectName: "French",
      what: "Mr. Keirns is out today. His plan: do the 3 Edpuzzles, do the exercise below, then independent reading in French. DUE tonight, 11:59 PM: \"Edpuzzle - PASSE COMPOSE OU IMPARFAIT\" (100 pts)."
    },
    {
      day: "Wed", date: "2026-11-04",
      subject: "ap-french", subjectName: "French",
      what: "DUE today: \"PC vs. Imparfait exercise practice\" (10 pts, Google Doc in Classroom). Make your own copy if you need to and add your version."
    },
    {
      day: "Wed", date: "2026-11-04",
      subject: "ap-french", subjectName: "French",
      what: "Optional extra credit: help at 8th-grade parent night, 5-7 PM, for as much of it as you can, promoting the French program. Meet at Mr. Keirns's classroom at 5."
    },
    {
      day: "Thu", date: "2026-11-05",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: read the Questions on Rhetoric and Style in Mr. Evans's email FIRST, then read and annotate Brent Staples, \"Just Walk on By: Black Men and Public Space\" in 50 Essays to those questions. REPLY to \"For Thursday (11/5)\" with developed responses to all five, with evidence and explanation in your own voice, not mere answers: the opening paragraph's effect on his audience; why so many personal experiences; the \"not a hallucination\" line in paragraph 5; the final cowbell sentence and \"hunter and hunted\"; the ironies in the essay.",
      help: "Terms: line of reasoning, appeals",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Thu", date: "2026-11-05",
      subject: "world-history", subjectName: "World History",
      what: "DUE 11:59 PM: \"Universal Museums Debate\" (100 pts, your Doc in Classroom). Your side is FOR universal museums. Finish the evidence for your side, the opposing arguments and the source check, using the PDFs in Classroom. Also do the \"Universal Museums Exit Ticket\" form: its prompt is on the board in class."
    },
    {
      day: "Fri", date: "2026-11-06",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "\"Lights, Camera, Contraction!\" gallery walk in class. The project (40 pts) is due in Classroom the night before: Thu 11/5, 11:59 PM."
    }
  ],
  nextLabel: "Nov 9 – Nov 13",
  next: [
    {
      day: "Mon", date: "2026-11-09",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 16 (due Fri 11/13)."
    },
    {
      day: "Mon", date: "2026-11-09",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "DUE: \"ASMO 2.7 and 2.8\", the first Cognition reading: AMSCO pp. 317-345 and workbook pp. 49-52. New in Classroom: \"Cognition Study Materials\" has the study guide, the lecture slides and two sets of practice questions."
    },
    {
      day: "Tue", date: "2026-11-10",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 15 due. Lab 13 (due Mon 11/16)."
    },
    {
      day: "Wed", date: "2026-11-11",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "BODY MUSCLES QUIZ: the 15 \"Body Muscles\" on the Naming Muscles List. Ambient Temperature Lab (due Tue 11/17)."
    },
    {
      day: "Fri", date: "2026-11-13",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 16 due; graded in class, then review for Monday's Muscular System Exam."
    }
  ],
  ahead: [
    { date: "2026-11-16", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Muscular System EXAM Mon 11/16 (MC + 2 of 6 FRQs, no labeling); Lab 13 due" },
    { date: "2026-11-23", subjectName: "School", what: "Thanksgiving Break: no school Nov 23–27" },
    { date: "~2026-12-16", subjectName: "School", what: "Semester finals week (Dec 14–18); winter break starts Dec 21" },
    { date: "2027-04-14", subjectName: "SAT + AP", what: "School-day SAT ~Apr 14; AP World May 6, English Lang May 12, Psych May 14" }
  ],
  ask: [
    { q: "Universal Museums Debate: is there more debate in class, or was it today? What is the exit ticket prompt on the board?", subject: "world-history", subjectName: "World History" },
    { q: "Mrs. Aschwanden just posted the Cognition study materials. When is the Cognition test?", subject: "ap-psychology", subjectName: "AP Psychology" },
    { q: "The \"Loup Garou / Halloween Vocab to study\" doc went up Wednesday, after Monday's Halloween quiz. Is there a new quiz or activity on it? When?", subject: "ap-french", subjectName: "French" },
    { q: "Algebra has posted nothing since the Quadratic Review WS (10/22). Is a quadratics quiz or test coming? When?", subject: "algebra-2", subjectName: "Algebra 2" }
  ]
};
