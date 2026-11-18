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
  updated: "2026-11-18",
  /* 2026-11-18 Wed midday: French Wed row (finish the week's work by end of class; Mr. Keirns back Thu for DA and Fri for class, retakes; Padlet reminder); ask list unchanged (no answers) */
  /* 2026-11-17 Tue evening: Psych Cognition test Fri 11/20 (from Greg, not in Classroom); WH Empires project is class work, not homework; ask list asks the Psych test scope */
  /* 2026-11-17 Tue after school: English For Thursday ("What is funny?", three layers of humor notes); French video project (40 pts, Fri); Anatomy Unit 5 Nervous System opened (Neuron Diagram Thu; exam Fri 12/11, final Wed 12/16 into ahead); ask list drops the French presentation question, adds the Psych jail field trip date */
  /* 2026-11-16 Mon after school: English For Tuesday (Mairs + Sontag, two academic paragraphs); ask list drops the calculator question (settled, GH-15) */
  /* 2026-11-16 Mon: French sub week (Mr. Keirns out: Edpuzzle tonight, pronunciation practice Tue, presentation instructions Tue); Psych Larry P podcast worksheet (today) + Unit 2 Progress Check (Wed 1:30 PM, 3 pts back on the test); WH Empires Presentation Project (25 pts, Fri); ask list refreshed */
  /* 2026-11-15 Sun late: Monday's English row's help chip now points to the Sontag method guide (was the Terms Library) */
  /* 2026-11-15 Sun night: ask list adds the Algebra calculator question (GHS ledger GH-15) */
  /* 2026-11-15 Sun evening: Algebra test row's help chip now points to the problem-by-problem review page */
  /* 2026-11-15 Sun: nothing new in any source; ask list unchanged (no answers) */
  /* 2026-11-14 Sat: nothing new in any source; window rolled to Nov 16-20 / Nov 23-27 (Thanksgiving Break moves from ahead into next); ask list unchanged (no answers) */
  /* 2026-11-13 Fri after school: English For Monday (Sontag on beauty) + the Fri 11/20 definition essay; Psych memory items (Loftus TED, Memory Types); French Padlet + weekly form; WH Trade Routes compare/contrast; Anatomy late-work-before-Monday; ask list refreshed */
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
  label: "Nov 16 – Nov 20",
  items: [
    {
      day: "Mon", date: "2026-11-16",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: read Susan Sontag's \"A Woman's Beauty--A Put Down or Power Source\" (1975, linked in the email) through two lenses: (1) her rhetorical situation, found IN the text; (2) her argument of definition: her formal definition, the conditions it holds under (operational), and the examples linking her O to her F. Then write a SERIES of paragraphs that enter a conversation with her about beauty. Not \"I agree / I disagree\", not a summary: since 1975, has our definition of beauty changed (has it?), and where does yours collide with or differ from hers? Let your own exigence, audience, purpose and F/O/E show through the writing. Use evidence plus explanation and the precis sentences. REPLY to \"For Monday (11/16)\" before class.",
      help: "Method guide: from the reading to your paragraphs",
      helpFile: "lessons/sontag-beauty-method-guide.html"
    },
    {
      day: "Mon", date: "2026-11-16",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "MUSCULAR SYSTEM EXAM: multiple choice plus 2 of the 6 FRQs on the Unit 4 Exam Review, picked at random (prepare all six). No labeling. Lab 13 due. To study, Mrs. Kalec's \"Exam Study Helper\" app (posted Monday, link in Classroom) has a practice quiz, all six FRQs with her scoring points, flashcards and a tissue-types matrix. Her FRQ rule: \"The more details, the better!\"",
      help: "Exam prep: the 6 FRQs + practice quiz",
      helpFile: "lessons/hap-unit-4-muscular-exam-prep.html"
    },
    {
      day: "Mon", date: "2026-11-16",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "UNIT 3 TEST (moved to today; 100 pts). Mrs. Howard's \"A2: Unit 3 Review\" in Classroom is the study sheet: solving by factoring, completing the square and the quadratic formula; graphing a parabola and its key features; standard, intercept and vertex forms; projectile word problems; complex numbers and powers of i; square roots of negatives. Also on the item: the \"Converting Forms of Quadratics\" worksheet and five practice PDFs.",
      help: "Review sheet, problem by problem",
      helpFile: "lessons/algebra-2-unit-3-review-problem-by-problem.html"
    },
    {
      day: "Mon", date: "2026-11-16",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "DUE: \"AMSCo Pages 361-381\" (Cognition), with the companion workbook in Classroom. In class: \"The Miseducation of Larry P\" -- listen to the podcast and fill in the paper worksheet (on the front table under the board)."
    },
    {
      day: "Mon", date: "2026-11-16",
      subject: "ap-french", subjectName: "French",
      what: "Mr. Keirns is out most of this week (his baby came early). Do the work in his order: (1) TONIGHT 11:59 PM: \"Edpuzzle - La Terrible Sorcière\"; (2) the pronunciation practice (Tue); (3) a presentation -- instructions and an example post Tuesday morning. If you finish early Wednesday, quietly read and do \"Lecture Indépendante\"."
    },
    {
      day: "Tue", date: "2026-11-17",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: read and annotate Nancy Mairs, \"On Being a Cripple\" (your copy of 50 Essays) -- read the two questions first. Then write TWO academic paragraphs, each bringing Mairs and Sontag into the room with YOUR voice as the third: (1) what Mairs means by a \"gap between word and reality\" (paragraph 3), and would Sontag find a similar gap in her word? (2) Sontag's and Mairs's reflections on \"the ideal\" (Mairs, paragraphs 20-21). Evidence and commentary from BOTH essays in each paragraph; introduce each with the first sentence of a rhetorical precis. You may reuse your Sontag writing from Monday. Mr. Evans's \"They Say / I Say\" templates doc helps join two voices. REPLY to \"For Tuesday (11/17)\" with both paragraphs."
    },
    {
      day: "Tue", date: "2026-11-17",
      subject: "ap-french", subjectName: "French",
      what: "DUE: \"Terrible Sorcière Pronunciation Practice\" (10 pts). Turn on Voice Typing (Tools > Voice Typing, language Français), read the story lines aloud and note what the microphone heard; then write your own ending to the story, at least seven more sentences, and read those aloud too."
    },
    {
      day: "Tue", date: "2026-11-17",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Unit 5 Nervous System starts: Mrs. Kalec's \"Unit 5 Calendar\" and \"Nervous System Notes\" slides are in Classroom. Ambient Temperature Lab due (Unit 4 Calendar date; Classroom shows 11/11)."
    },
    {
      day: "Tue", date: "2026-11-17",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "\"3.1 and 3.2 Quiz\" (Google Form in Classroom, due today)."
    },
    {
      day: "Wed", date: "2026-11-18",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "BEFORE 1:30 PM: the AP Classroom Unit 2 Progress Check. Mrs. Aschwanden gives 3 points back on the test (extra credit) for finishing it in time. Unlimited attempts, so use them to get the answers right."
    },
    {
      day: "Wed", date: "2026-11-18",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Neurotransmission notes; Lab 17 and Lab 18 start (both due Dec 1)."
    },
    {
      day: "Wed", date: "2026-11-18",
      subject: "ap-french", subjectName: "French",
      what: "Mr. Keirns: finish what his instructions earlier this week list by the end of class today. He is at school Thursday for DA and back Friday for class, if you want to meet him or retake an assignment. Also do the Padlet about what you did when you were young (\"Souvenirs d'enfance\")."
    },
    {
      day: "Thu", date: "2026-11-19",
      subject: "ap-english", subjectName: "AP English",
      what: "Before class: \"What is funny?\" -- three layers of notes that blend your sources (your notes ARE Thursday's graded conversation). (1) What humor, or a \"sense of humor\", can do in writing and talk (Mairs opens with humor; see her paragraph 7), then explore Mary Hirsch's line \"Humor is a rubber sword\" from many angles. (2) Jon Stewart on CNN's Crossfire, the first 8:45 only; pause for notes at 3:00, 3:40, 4:16, 5:05, 6:00, 6:20, 7:17 and 7:55 -- posture, stance, wit, and the serious message under the humor. (3) Michael Jr.'s TED talk \"More than funny\": he uses humor in order to ___, and his act as a metaphor in order to ___ -- toward defining \"humorist\". REPLY to \"For Thursday (11/19)\" with your notes. Mr. Evans plans some class time Thursday for Friday's essay."
    },
    {
      day: "Thu", date: "2026-11-19",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "DUE: \"Neuron Diagram\" (Google Drawing in Classroom): label all the parts of a nerve cell with text boxes. The \"Nervous System Notes\" slides on neurons and the myelin sheath have the parts."
    },
    {
      day: "Thu", date: "2026-11-19",
      subject: "ap-french", subjectName: "French",
      what: "DUE 2:30 PM: \"Passé composé vs. Imparfait practice\" (100 pts), the Wayground game in Classroom (moved from Wed 11/11)."
    },
    {
      day: "Fri", date: "2026-11-20",
      subject: "ap-english", subjectName: "AP English",
      what: "DUE BEFORE CLASS: the topical writing \"Define ___\", your own argument-of-definition ESSAY. Pick ONE term you know well: fun, risk, wealth, pleasure, intelligence, athletic, work, fear or guilt. Your position is your F; your O's are the conditions where your F holds (and where it doesn't); your E's are examples of your F under those O's. Mr. Evans's challenge: use a trap door, so the essay slowly reveals rather than merely defines. Models: Chau, Pitts Jr., Staples, Haile, \"What is a City\", Zadeh, Gold, Bronson and Merryman.",
      help: "Terms: the three kinds of definition, trap door",
      helpFile: "lessons/ap-lang-terms-library.html"
    },
    {
      day: "Fri", date: "2026-11-20",
      subject: "world-history", subjectName: "World History",
      what: "DUE: \"Empires Presentation Project\" (25 pts; your group works on it in class), a group slideshow of about 8 slides on one Third-Wave empire: title; historical context and rise; the five SPICE themes (social, political, interactions, cultural, economic); the fall and conclusion; and 5+ reliable sources in Chicago style. Short bullets and visuals on the slides, the detail in the speaker notes. Check the \"Must Haves\" doc for your empire's required points and use the research guide, guided questions and rubric in Classroom. AI only to help find sources. Your group also fills in the \"Empires Project Check-In\" form in Classroom: members, empire, and who owns each part."
    },
    {
      day: "Fri", date: "2026-11-20",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "PSYCH TEST (Cognition) -- told to us, not posted in Classroom. Mrs. Aschwanden's \"Cognition Study Materials\" in Classroom (study guide, practice test, multiple-choice practice) are the place to start. Wednesday's Progress Check earns 3 points back on this test."
    },
    {
      day: "Fri", date: "2026-11-20",
      subject: "ap-french", subjectName: "French",
      what: "DUE: \"La fin de l'histoire - video project\" (40 pts). Turn the ending you wrote for Mr. Keirns's story into your own video presentation, like his example video in Classroom. Google Slides, Canva, TikTok or any video or screen-recording app is fine. Alone or in a group of 2 at most."
    },
    {
      day: "Fri", date: "2026-11-20",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "In class: Candy Neuron and the Action Potential video (Unit 5 Calendar)."
    }
  ],
  nextLabel: "Nov 23 – Nov 27",
  next: [
    {
      day: "Mon", date: "2026-11-23",
      subject: null, subjectName: "School",
      what: "Thanksgiving Break: no school all week, Nov 23–27."
    }
  ],
  ahead: [
    { date: "2026-12-11", subject: "human-anatomy", subjectName: "Human Anatomy", what: "NERVOUS SYSTEM EXAM (Unit 5 Calendar); labs 17-19 due Nov 30-Dec 4 before it" },
    { date: "2026-12-16", subject: "human-anatomy", subjectName: "Human Anatomy", what: "Anatomy FINAL EXAM (Wednesday block, Unit 5 Calendar)" },
    { date: "~2026-12-16", subjectName: "School", what: "Semester finals week (Dec 14–18); winter break starts Dec 21" },
    { date: "2027-04-14", subjectName: "SAT + AP", what: "School-day SAT ~Apr 14; AP World May 6, English Lang May 12, Psych May 14" }
  ],
  ask: [
    { q: "For the Fri 11/20 \"Define ___\" essay, which term are you thinking of, and has Mr. Evans said how to hand it in (reply or a Doc)?", subject: "ap-english", subjectName: "AP English" },
    { q: "\"Trade Routes Compare and Contrast\": which of the 8 groups are you answering, and when is it due?", subject: "world-history", subjectName: "World History" },
    { q: "The \"State of the World 820\" question sheet (5 regions) is in Classroom. When is it due, and is it for a grade?", subject: "world-history", subjectName: "World History" },
    { q: "Friday's Psych test: which topics does it cover -- 2.2 through 2.8, or something else? Is it multiple choice, FRQ, or both?", subject: "ap-psychology", subjectName: "AP Psychology" },
    { q: "Empires Presentation: which empire is your group doing, and who is in your group? Do you present it Friday, or just turn in the slides?", subject: "world-history", subjectName: "World History" },
    { q: "Mrs. Aschwanden posted meeting times for the field trip to the jail. Are you going, and what day is it?", subject: "ap-psychology", subjectName: "AP Psychology" }  ]
};
