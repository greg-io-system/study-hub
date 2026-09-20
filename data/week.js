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
  updated: "2026-09-20",
  label: "Week of Sep 21 – Sep 25",
  items: [
    {
      day: "Mon", date: "2026-09-21",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Epidermis Metaphor — due Monday 8:00am",
      help: "The Layers of Skin — the epidermis metaphor starter is in here",
      helpFile: "lessons/integumentary-skin-layers.html"
    },
    {
      day: "Mon", date: "2026-09-21",
      subject: "ap-english", subjectName: "AP English",
      what: "Failure Synthesis reply — before Monday's class",
      help: "Failure Synthesis — the method guide (understand Leak, then argue your position)",
      helpFile: "lessons/failure-synthesis-method-guide.html"
    },
    {
      day: "Mon", date: "2026-09-21",
      subject: "ap-psychology", subjectName: "AP Psychology",
      what: "Quiz on Topic 1.3 — The Neuron & Neural Firing (in-class), Monday.",
      help: "The Neuron & Neural Firing — tap the diagram, the firing sequence, the neurotransmitter chart",
      helpFile: "lessons/neuron-neural-firing.html"
    },
    {
      day: "Tue", date: "2026-09-22",
      subject: "world-history", subjectName: "World History",
      what: "Unit 1 TEST (in-class) — all of Unit 1",
      help: "Unit 1 Test — Review (the unit in four blocks + 12 self-check questions)",
      helpFile: "lessons/unit-1-test-review.html"
    },
    {
      day: "Wed", date: "2026-09-23",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Fingerprint Lab — due Wednesday (block day)"
    },
    {
      day: "Fri", date: "2026-09-25",
      subject: "human-anatomy", subjectName: "Human Anatomy",
      what: "Tattoo Activity — due Friday"
    },
    {
      day: "Fri", date: "2026-09-25",
      subject: "algebra-2", subjectName: "Algebra 2",
      what: "Unit 1 TEST + the Unit 1 Review — Friday",
      help: "Unit 1 Test — Review (functions + sequences, with an interactive sequence builder)",
      helpFile: "lessons/algebra-2-unit-1-test-review.html"
    }
  ],
  ahead: [
    { subjectName: "Human Anatomy", what: "Unit 2 Exam", date: "2026-09-29" }
  ]
};
