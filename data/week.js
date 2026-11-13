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
  updated: "2026-11-12",
  /* 2026-11-12 Thu after school: English For Friday (Gilb "Pride", argument of definition of "Time"); French Wayground practice due date moved to Thu 11/19 2:30 PM; ask list adds the English definitional essay */
  /* 2026-11-11 Wed after school: Anatomy quiz (22 pts) + Ambient Temperature Lab (30 pts, Classroom due today vs calendar 11/17); WH State of the World 820 question sheet + Silk Roads exit ticket; ask list refreshed */
  /* 2026-11-10 Tue evening: Body Muscle Flashcards help chip added to Wednesday's Anatomy quiz row */
  /* 2026-11-10 Tue after school: Algebra Unit 3 test Mon 11/16 (postponed) + review sheet; French Wayground practice (Wed 11 AM); English For Thursday ("What is time?" + Zadeh); Psych AMSCO pp. 361-381 (Mon 11/16); ask list drops the Algebra question */
  /* 2026-11-09 Mon after school: English For Tuesday ("What is money?" three F/O/E charts); Psych 2.7-2.8 quiz; WH Commerce & Culture notes; Anatomy Exam Study Helper app added to the exam row */
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
      what: "DUE: \"ASMO 2.7 and 2.8\", the first Cognition reading: AMSCO pp. 317-345 and workbook pp. 49-52, plus the \"2.7 and 2.8 Quiz\" (7 pts, Google Form, due today). \"Cognition Study Materials\" in Classroom has the study guide, the lecture slides and two sets of practice questions."
    },
    {
      day: "Mon", date: "2026-11-09",
      subject: "world-history", subjectName: "World History",
      what: "New topic: Commerce & Culture in the Third Wave (600-1500): the Silk Roads, the Sea Roads of the Indian Ocean, the Sand Roads across the Sahara and trade in the Americas. Mr. Angelopulos's \"Commerce and Culture Notes\" slides are in Classroom."
    },
    {
      day: "Tue", date: "2026-11-10",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: three F/O/E charts on \"What is money?\" (1) Your own first definition, formal, operational and by example, with an explanation for each. (2) and (3) Listen to ONLY the Prologue and \"The Lie That Saved Brazil\" from \"The Invention of Money\" (link in the email) and sort specific details from each story into F, O and E. Show where the stories' definitions collide or split, and go back and change chart 1 as your view shifts. REPLY to \"For Tuesday (11/10)\" with all three charts. Writing tip from Monday: beware the \"Mega-graph\" (one giant paragraph).",
      help: "Terms: the three kinds of definition",
      helpFile: "lessons/ap-lang-terms-library.html"
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
      what: "BODY MUSCLES QUIZ: the 15 \"Body Muscles\" on Mrs. Kalec's Naming Muscles List. To study, use her \"Body Muscle Quizzer\" app (posted Saturday, link in Classroom: \"Use the app to help you study for the quiz!\") and her \"Great Muscle Resource\" (Innerbody's interactive muscle guide, link in Classroom). The quiz is a 22-point Google Form in Classroom. Also posted today: the \"Ambient Temperature Lab\" (30 pts): the fist-clench test at room temperature, after warm water and after ice water, then five analysis questions. Classroom says due today; Mrs. Kalec's Unit 4 Calendar says Tue 11/17.",
      help: "Flashcards: the 15 body muscles",
      helpFile: "lessons/hap-body-muscle-flashcards.html"
    },
    {
      day: "Wed", date: "2026-11-11",
      subject: "ap-french", subjectName: "French",
      what: "\"Passé composé vs. Imparfait practice\" (100 pts), a Wayground (formerly Quizizz) game. Start it from the link in Classroom. Its due date has moved: Classroom now says Thu Nov 19, 2:30 PM."
    },
    {
      day: "Wed", date: "2026-11-11",
      subject: "world-history", subjectName: "World History",
      what: "\"Silk Roads Simulation Exit Ticket\" (Google Form in Classroom): pick 2 goods traded on the Silk Road that shaped modern society most and say why, then compare how goods were exchanged then and now. Also new: \"The World in 820 Readings\" now has a question sheet, \"State of the World 820\": for each of the 5 regions, the main religion, the government, trade (goods and ideas), and a labeled map. No due date posted yet."
    },
    {
      day: "Thu", date: "2026-11-12",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class (block day): a new F/O/E chart, \"What is time?\", with an explanation for each section. Start with notes on time as currency (we SPEND time; what is the exchange rate? can time inflate? is it valued differently in different places?) and on two quotes: Annie Dillard, \"How we spend our days is how we spend our life,\" and Jenny Odell, \"time is money\" doesn't work in reverse. Then read and annotate Joe Zadeh, \"The Tyranny of Time\" (50 Essays): mark F, O and E, and follow the cause (the invention of clock time) to its effects, their implications, and what YOU think. Update your chart, then REPLY to \"For Thursday (11/12)\" with your F/O/E notes on time. Tuesday's feedback: direct evidence plus explanation is 4 of the 6 points.",
      help: "Terms: the three kinds of definition",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Fri", date: "2026-11-13",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: (1) Read, then re-read, Dagoberto Gilb's \"Pride\" (linked in the email). It is an argument of definition: Gilb defines pride through a series of stories that build and then circle back. (2) Write your own argument of definition of \"Time\" in Gilb's style, about 1/2 to 3/4 of a page single spaced (longer if you find some exigence). Make the series of stories YOUR stories: it is your definition. Submit it before class. Thursday's point: an answered question gets \"nice to meet you\"; a developed response shows HOW you think.",
      help: "Terms: the three kinds of definition",
      helpFile: "lessons/ap-lang-terms-library.html"
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
      what: "MUSCULAR SYSTEM EXAM: multiple choice plus 2 of the 6 FRQs on the Unit 4 Exam Review, picked at random (prepare all six). No labeling. Lab 13 due. To study, Mrs. Kalec's \"Exam Study Helper\" app (posted Monday, link in Classroom) has a practice quiz, all six FRQs with her scoring points, flashcards and a tissue-types matrix. Her FRQ rule: \"The more details, the better!\""
    },
    {
      day: "Mon", date: "2026-11-16",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "UNIT 3 TEST (moved to today; 100 pts). Mrs. Howard's \"A2: Unit 3 Review\" in Classroom is the study sheet: solving by factoring, completing the square and the quadratic formula; graphing a parabola and its key features; standard, intercept and vertex forms; projectile word problems; complex numbers and powers of i; square roots of negatives. Also on the item: the \"Converting Forms of Quadratics\" worksheet and five practice PDFs."
    },
    {
      day: "Mon", date: "2026-11-16",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "DUE: \"AMSCo Pages 361-381\" (Cognition), with the companion workbook in Classroom."
    },
    {
      day: "Tue", date: "2026-11-17",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Nervous System starts. Ambient Temperature Lab due (Unit 4 Calendar date; Classroom shows 11/11)."
    },
    {
      day: "Thu", date: "2026-11-19",
      subject: "ap-french", subjectName: "French",
      what: "DUE 2:30 PM: \"Passé composé vs. Imparfait practice\" (100 pts), the Wayground game in Classroom (moved from Wed 11/11)."
    }
  ],
  ahead: [
    { date: "2026-11-23", subjectName: "School", what: "Thanksgiving Break: no school Nov 23–27" },
    { date: "~2026-12-16", subjectName: "School", what: "Semester finals week (Dec 14–18); winter break starts Dec 21" },
    { date: "2027-04-14", subjectName: "SAT + AP", what: "School-day SAT ~Apr 14; AP World May 6, English Lang May 12, Psych May 14" }
  ],
  ask: [
    { q: "Mr. Evans says a longer argument of definition on a single term is coming. Has he said when it is due, or which term?", subject: "ap-english", subjectName: "AP English" },
    { q: "The \"State of the World 820\" question sheet (5 regions) is now in Classroom. When is it due, and is it for a grade?", subject: "world-history", subjectName: "World History" },
    { q: "The Ambient Temperature Lab says due today in Classroom, but the Unit 4 Calendar says Tue 11/17. Which date did Mrs. Kalec give?", subject: "human-anatomy", subjectName: "Human Anatomy" },
    { q: "Mrs. Aschwanden just posted the Cognition study materials. When is the Cognition test?", subject: "ap-psychology", subjectName: "AP Psychology" },
    { q: "The \"Loup Garou / Halloween Vocab to study\" doc went up Wednesday, after Monday's Halloween quiz. Is there a new quiz or activity on it? When?", subject: "ap-french", subjectName: "French" }  ]
};
