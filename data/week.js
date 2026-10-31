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
  updated: "2026-10-30",
  /* 2026-10-30 Fri after school: Anatomy "Facial Expression Lab" (25 pts, Classroom due Sun 11/1) + Innerbody muscle guide; English For Monday Q3 creativity paragraphs */
  /* 2026-10-29 Thu after school: Psych "Depth Perception Scavenger Hunt" (15 pts, Fri); English For Friday "The Creativity Crisis" */
  /* 2026-10-28 Wed after school: WH "Religions Research" (100 pts, Fri 11:59 PM) + Blooket review link */
  /* 2026-10-28 Wed: WH Unit 2 study guide posted (test details); Anatomy Unit 4 Exam Review + Chicken Limb Dissection (Thu); French Halloween vocab to study */
  label: "Oct 26 – Oct 30",
  items: [
    {
      day: "Mon", date: "2026-10-26",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: refresh your Arguments of Definition notes. Jot thinking notes \"On Voting\": what is a vote (formal, operational, by example), its purpose, responsibility and obligation, and the ideal system. Read and annotate \"Who Should I Vote For?\" (AI and voting), marking quotes that spark your curiosity. Then write a reflection on the collisions (technology and politics, time and efficiency, and your own), built from your quotes. REPLY to Mr. Evans's \"For Monday (10/26)\" email with it.",
      help: "Terms: the three kinds of definition",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Mon", date: "2026-10-26",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "DUE today: AMSCO reading pp. 263-288, and the Olfactory Diary (10 pts): your weekend smells diary, your reactions and memories, plus the reflection in the Google Doc."
    },
    {
      day: "Mon", date: "2026-10-26",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Notes: Muscle Activity. Finish Lab 12."
    },
    {
      day: "Mon", date: "2026-10-26",
      subject: "world-history", subjectName: "World History",
      what: "DUE: Han China vs. Rome One-Pager (25 pts): title, context on both empires (who, what, when, where), 5 vocab words, 3 similarities + 3 differences in full sentences, 2+ captioned images, and a thesis: more similar or more different? Use your class notes."
    },
    {
      day: "Tue", date: "2026-10-27",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: read and annotate Jonathan Gold's \"What is a Burrito? A Primer\": mark where he uses each kind of definition (formal, operational, by example) and the choices he makes, like the anaphora in paragraph 4 (what it does, and why). Then write your own \"What is ___?\" about a food you know, modeled on Gold: borrow his anaphora, make it about the food but really about something else. No sources needed. REPLY to Mr. Evans's \"For Tuesday (10/27)\" email with it.",
      help: "Terms: anaphora and the three kinds of definition",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Tue", date: "2026-10-27",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Notes: Muscle Contraction. Intro to the \"Lights, Camera, Contraction!\" project (40 pts; turn in by Thu 11/5, 11:59 PM)."
    },
    {
      day: "Wed", date: "2026-10-28",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Chicken wing dissection (block day). Lab 14 handed out (due Tue 11/3). Mrs. Kalec also posted the Unit 4 Exam Review: the 11/16 exam is multiple choice plus 2 of 6 FRQs picked at random, so prepare all six."
    },
    {
      day: "Wed", date: "2026-10-28",
      subject: "world-history", subjectName: "World History",
      what: "The Unit 2 Exam Study Guide is in Classroom: the full list of what the 11/3 test can cover, and India (Mauryan and Gupta) is on it. Build your handwritten notes from it. Mr. Angelopulos also posted a Blooket review link."
    },
    {
      day: "Wed", date: "2026-10-28",
      subject: "ap-french", subjectName: "French",
      what: "Study the \"Loup Garou / Halloween Vocab\" doc in Classroom: nouns, places, verbs, adjectives and the French definitions. No date given yet; ask Mr. Keirns if there's a quiz."
    },
    {
      day: "Thu", date: "2026-10-29",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 12 due. \"Chicken Limb Dissection\" (20 pts, Google Doc in Classroom) also due: the write-up for Wednesday's dissection."
    },
    {
      day: "Thu", date: "2026-10-29",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: talking points on whether video games are more or less valuable than other pastimes (value, not fun), your own pastimes, and the James Gee passage. Read and annotate Steven Johnson's \"GAMES\", with notes on all EIGHT points: central claim (and where you stand), purpose, audience, argument, ethos, logos (his line of reasoning), the Argument Continuum, the Rogerian model. REPLY to Mr. Evans's \"For Thursday (10/29)\" email with a photo or link of your notes. Your food essay gets shared Monday.",
      help: "Terms: central claim, Argument Continuum, Rogerian",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Thu", date: "2026-10-29",
      subject: "world-history", subjectName: "World History",
      what: "DUE 11:59 PM: \"Caste and Class\" (10 pts), in your own Doc. Compare caste in ancient India with class in the modern U.S., at least 2 bullets per cell: inequality examples, basis of status, social mobility, segregation, philosophical justification. Highlight rows where the similarities stand out more than the differences. Cite your sources and do the exit ticket."
    },
    {
      day: "Fri", date: "2026-10-30",
      subject: null, subjectName: "School",
      what: "AP exam PAYMENT deadline; end of the 2nd six weeks (grades close)."
    },
    {
      day: "Fri", date: "2026-10-30",
      subject: "world-history", subjectName: "World History",
      what: "DUE 11:59 PM: \"Religions Research\" (100 pts), the \"World Religions Research\" Doc in Classroom. Explain the central tenets and practices of your religion: up to 3 symbols and their meaning, followers and where they live, brief history, beliefs, ethics, quotes from sacred texts, customs, rituals and holidays, two main ideas of your choice, a higher-level question, and at least 3 sources. End with a four-sentence summary in your religion's voice: creation, the meaning of life, how to treat others, what happens when we die."
    },
    {
      day: "Fri", date: "2026-10-30",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: read and annotate \"The Creativity Crisis\" (the PDF on Mr. Evans's email): find your own voice in the notes, your \"; however,\" clauses, evidence that supports your claims, and the layers of the rhetorical situation. Then write ruminating notes on four questions: how do we define creativity? Can it be defined? What does the definition do to the term? Is the term flexible? REPLY to \"For Friday (10/30)\" with both.",
      help: "Terms: rhetorical situation, Rhetorical Precis",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Fri", date: "2026-10-30",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "DUE: Depth Perception Scavenger Hunt (15 pts, your Slides copy in Classroom). Take a photo or short video on campus for each concept and explain how it shows the principle: binocular cues (retinal disparity, convergence), monocular cues (linear perspective, texture gradient, relative clarity, relative size, interposition), constancies (color, shape, size) and Gestalt grouping (figure-ground, closure, proximity, similarity). For the depth cues, say why one thing looks near and another far. No photos of people without their permission.",
      help: "Sensation & Perception",
      helpFile: "lessons/sensation-perception.html"
    },
    {
      day: "Fri", date: "2026-10-30",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Notes: Naming Skeletal Muscles. Facial Expression Lab (25 pts, your Google Doc copy in Classroom): Classroom says due Sun 11/1, the Unit 4 Calendar says Tue 11/3, so check with Mrs. Kalec and plan for Sunday to be safe."
    },
    {
      day: "This wk", date: "2026-10-30",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "Sensation & Perception continues (Week 11). Test is Tue 11/3, so start reviewing now: the study material in Classroom has a Quizlet, videos, a practice test and a Gimkit.",
      help: "Sensation & Perception",
      helpFile: "lessons/sensation-perception.html"
    }
  ],
  nextLabel: "Nov 2 – Nov 6",
  next: [
    {
      day: "Sun", date: "2026-11-01",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Facial Expression Lab (25 pts) due in Classroom (no time set). The Unit 4 Calendar says Tue 11/3; Classroom's date is the earlier one."
    },
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
      day: "Tue", date: "2026-11-03",
      subject: "world-history", subjectName: "World History",
      what: "UNIT 2 TEST: 35 multiple choice (about 12 are synthesis questions). Only notes in your own handwriting, and you hand them in. Bring a district Chromebook. Read OpenStax 8.2 (Americas) and 9.2 (Farming and the Bantu Migrations) first: there are test questions on them. Scope: the Unit 2 Exam Study Guide in Classroom.",
      help: "Unit 2 exam review",
      helpFile: "lessons/unit-2-exam-review.html"
    },
    {
      day: "Tue", date: "2026-11-03",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "SENSATION & PERCEPTION TEST. Covers the AMSCO readings (pp. 263-288 and 2.4-2.5, pp. 292-313) and the S&P study material in Classroom. More details coming.",
      help: "Sensation & Perception",
      helpFile: "lessons/sensation-perception.html"
    },
    {
      day: "Tue", date: "2026-11-03",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Lab 14 due (and the Facial Expression Lab, if it isn't already in by Sunday)."
    },
    {
      day: "Wed", date: "2026-11-04",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "FACIAL MUSCLE QUIZ. Notes: Disorders; Lab 15 (due Tue 11/10). To study, Mrs. Kalec posted the \"Great Muscle Resource\": Innerbody's interactive muscle guide (link in Classroom)."
    },
    {
      day: "Fri", date: "2026-11-06",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "\"Lights, Camera, Contraction!\" gallery walk in class. The project (40 pts) is due in Classroom the night before: Thu 11/5, 11:59 PM."
    }
  ],
  ahead: [
    { date: "2026-11-09", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Body Muscles Quiz Mon 11/9; Muscular System EXAM Mon 11/16 (FRQs, no labeling)" },
    { date: "2026-11-23", subjectName: "School", what: "Thanksgiving Break: no school Nov 23–27" },
    { date: "~2026-12-16", subjectName: "School", what: "Semester finals week (Dec 14–18); winter break starts Dec 21" },
    { date: "2027-04-14", subjectName: "SAT + AP", what: "School-day SAT ~Apr 14; AP World May 6, English Lang May 12, Psych May 14" }
  ],
  ask: [
    { q: "Facial Expression Lab: Classroom says due Sun 11/1, the Unit 4 Calendar says Tue 11/3. Which one did Mrs. Kalec say?", subject: "human-anatomy", subjectName: "Human Anatomy" },
    { q: "The \"Loup Garou / Halloween Vocab to study\" doc went up Wednesday, after Monday's Halloween quiz. Is there a new quiz or activity on it? When?", subject: "ap-french", subjectName: "French" },
    { q: "The Sensation & Perception test on Tue 11/3: what did Mrs. Aschwanden say it covers, and what format (multiple choice, AAQ)?", subject: "ap-psychology", subjectName: "AP Psychology" }
  ]
};
