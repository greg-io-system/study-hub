/* Study Hub -- content manifest.
   This is the single source of truth for what appears on the hub.
   To add a lesson: drop its self-contained .html into /lessons/, then add
   an entry to the matching subject's "lessons" array below (newest first).
   To add a subject: add a new object to "subjects".
   Loaded via <script src> so it works on the live site AND opened locally. */
window.STUDY_HUB = {
  student: "Kelly",
  subjects: [
    {
      id: "algebra-2",
      name: "Algebra 2",
      blurb: "Concept-first lessons you can poke at. Drag the graphs — they show how the math actually works.",
      lessons: [
        {
          title: "The Function Machine",
          topic: "Function notation — inputs & outputs",
          file: "lessons/function-notation-inputs-outputs.html",
          date: "2026-08-28",
          summary: "What f(x) really means, one function shown four ways, evaluating step by step, reading values off a graph, and the vertical-line test.",
          tags: ["functions", "graphs", "domain & range"]
        }
      ]
    }
  ]
};
