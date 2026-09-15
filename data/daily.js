/* Study Hub -- "Daily pick" pool. A little quote/line that changes every day
   on the landing page, so the hub always feels fresh and a bit fun.

   How it works (see index.html renderDaily): the page picks ONE entry per
   LOCAL day, deterministically, by cycling through this pool in order. Same
   pick all day; a new one at midnight; loops back to the top after the last.
   No API, no network, works offline -- pure static. To change what shows up,
   just edit / reorder / grow this array. More entries = longer before repeat.

   Shape:
     window.STUDY_DAILY = {
       quotes: [ { text: "the line", trans: "English translation", by: "who said it" } ]
     }
   - Keep `text` SHORT -- it lives on a sticky note, phone-first. One or two
     sentences max.
   - `trans` is OPTIONAL. Use it ONLY when `text` is in another language
     (French, Latin, German, etc.): put the ORIGINAL in `text` and the English
     in `trans` -- both show, original in the display voice, translation as a
     small gloss below. English-origin quotes have no `trans`.
   - `by` is optional attribution. Omit it for house / anonymous lines.
   - Keep foreign originals to the Latin alphabet (Latin/French/German/etc.)
     so the note's serif face renders them; Greek/other scripts would swap
     fonts mid-note.

   CONTENT RULE (important -- this repo is PUBLIC): no copyrighted song lyrics
   or copyrighted prose pasted in here. Attributed short quotations, proverbs,
   public-domain lines, and original "house" lines only. Song lyrics are a
   copyright grey area on a public site -- if we want them, we source cleared /
   very-short ones deliberately, per entry. (Same spirit as the GHS rule:
   never republish copyrighted text.)

   Tone: thought-provoking lines from great minds -- scientists, thinkers,
   writers. Curious and a little wonder-struck, not motivational-poster
   preachy. The kind of line worth reading twice. Keep attributions honest
   (use "attributed to" when a quote is widely cited but not firmly sourced).
   Verify a new attribution before adding it -- don't guess who said it. */
window.STUDY_DAILY = {
  quotes: [
    { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", by: "Albert Einstein" },
    { text: "Somewhere, something incredible is waiting to be known.", by: "Carl Sagan" },
    { text: "The first principle is that you must not fool yourself — and you are the easiest person to fool.", by: "Richard Feynman" },
    { text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.", by: "Marie Curie" },
    { text: "We are a way for the cosmos to know itself.", by: "Carl Sagan" },
    { text: "I would rather have questions that can't be answered than answers that can't be questioned.", by: "Richard Feynman" },
    { text: "It's not that I'm so smart, I just stay with problems longer.", by: "Albert Einstein" },
    { text: "The mind is not a vessel to be filled, but a fire to be kindled.", by: "Plutarch" },
    { text: "The most exciting phrase to hear in science isn't 'Eureka!' but 'That's funny…'", by: "attributed to Isaac Asimov" },
    { text: "Study hard what interests you the most, in the most irreverent and original manner possible.", by: "Richard Feynman" },
    { text: "Imagination is more important than knowledge. Knowledge is limited; imagination encircles the world.", by: "Albert Einstein" },
    { text: "The good thing about science is that it's true whether or not you believe in it.", by: "Neil deGrasse Tyson" },
    { text: "Wonder is the beginning of wisdom.", by: "attributed to Socrates" },
    { text: "Science is a way of thinking much more than it is a body of knowledge.", by: "Carl Sagan" },
    { text: "In the middle of difficulty lies opportunity.", by: "Albert Einstein" },
    { text: "Real knowledge is to know the extent of one's ignorance.", by: "Confucius" },
    { text: "Je pense, donc je suis.", trans: "I think, therefore I am.", by: "René Descartes" },
    { text: "Le cœur a ses raisons que la raison ne connaît point.", trans: "The heart has its reasons, of which reason knows nothing.", by: "Blaise Pascal" },
    { text: "Es ist nicht genug zu wissen; man muss auch anwenden.", trans: "Knowing is not enough; we must also apply.", by: "Johann Wolfgang von Goethe" },
    { text: "Carpe diem, quam minimum credula postero.", trans: "Seize the day, and put little trust in tomorrow.", by: "Horace" },
    { text: "Per aspera ad astra.", trans: "Through hardships to the stars.", by: "Latin motto" },
    { text: "Petit à petit, l'oiseau fait son nid.", trans: "Little by little, the bird builds its nest.", by: "French proverb" }
  ]
};
