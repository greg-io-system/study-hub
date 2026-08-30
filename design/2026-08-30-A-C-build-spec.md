# Study Hub — A + C build spec
# Created: 2026-08-30 · Author: CW · Status: SCOPED (not started)
# Home: study-hub/design/ (not deployed). Execute via the normal pipeline:
#   CW authors the files, CC parse-checks + pushes (push = deploy).

## Goal
Move the hub from one flat single-page list to a two-level structure that
scales to ~6 classes:
- **Landing = class grid (Option A)** — one tile per class.
- **Class page (Option C)** — tap a class, see its lessons grouped by **week**,
  newest first.
- **"This week" strip (optional)** — beneath the class cards on the landing,
  the newest week's lessons pulled together so Kelly sees what's new at a glance.

Non-negotiables carried over: static only, no build step, no framework, no CDN
libraries (Google Fonts is the one allowed remote). The manifest stays the
single source of truth and the TOC.

---

## Architecture decision — one file, hash-routed (recommended)

Keep **one `index.html`** and route views with the URL hash, all rendered
client-side from `data/lessons.js`:
- no hash / `#home`  → landing (class grid + optional This-week strip)
- `#<subjectId>`     → that class's page (e.g. `#algebra-2`)
- unknown id         → fall back to landing

Why this over the alternatives:
- **vs. per-class HTML files** (`class/algebra-2.html`, …): those multiply
  files and drift from the manifest. Hash routing keeps everything
  manifest-driven and DRY.
- **vs. a `class.html?id=` template**: a query param works but splits the site
  into two documents for no gain; the hash approach keeps Kelly's single
  bookmark (`kelly-study-hub.vercel.app`) stable and adds zero page loads.
- Back button works via `hashchange`; deep links (`…/#algebra-2`) render the
  class view on load by reading the hash at `DOMContentLoaded`.
- Nothing about Vercel static hosting needs changing (no rewrites/config).

Trade-off accepted: no per-class server URL / SEO. Irrelevant — this is a
private study site, not indexed content.

*(If Greg prefers real paths later, the same render functions port to a
`class.html?id=` template with minor changes. Not worth it now.)*

---

## Data model migration (the `weeks` layer)

Each subject gains `accent` + `weeks`; the flat `lessons` array goes away.
Add an optional `status:"planned"` for classes shown as "soon" tiles but not
yet clickable.

### Before (current, live)
    {
      id: "algebra-2", name: "Algebra 2",
      blurb: "...",
      lessons: [ { title, topic, file, date, summary, tags } ]
    }

### After (target)
    {
      id: "algebra-2", name: "Algebra 2",
      accent: "#e8623d",
      blurb: "Concept-first lessons you can poke at. ...",
      weeks: [
        {
          range: "Aug 29 – Sep 4",              // the week band label
          theme: "Unit 0 · Functions",          // math: unit/category
          lessons: [
            { title:"The Function Machine",
              topic:"Function notation — inputs & outputs",
              file:"lessons/function-notation-inputs-outputs.html",
              date:"2026-08-28",
              summary:"...", tags:["functions","graphs","domain & range"] }
          ]
        }
      ]
    }

`theme` is the one flexible field:
- **Math** → a unit/category: `"Unit 0 · Functions"`
- **History** → a book chapter: `"Ch. 2 · River Civilizations"`
Weeks list newest-first; lessons within a week newest-first.

### World History (already a placeholder) becomes
    { id:"world-history", name:"World History", accent:"#178a68",
      blurb:"The story behind the chapters — ...", weeks:[] }

### Planned-class tile (optional, Greg opts each one in)
    { id:"ap-french", name:"AP French", accent:"#3f6fb0", status:"planned" }
A `status:"planned"` subject renders as a dashed non-clickable "soon" tile.
Omit a class entirely if it will never be on the hub — "all may not be
included here."

### Lesson-count rule
A class's count = sum of `lessons` across all its `weeks`.
"This week" on a tile = `weeks[0].theme` (newest week). No weeks → "—".

---

## File-by-file changes

1. **data/lessons.js** — migrate algebra-2 to `weeks` + `accent`; add `accent`
   to world-history. (Both classes already present.) Parse-check after.

2. **index.html** — replace the single render loop with:
   - `renderLanding()` — builds the class grid from `subjects`; live classes
     link to `#<id>`, `status:"planned"` render as soon-tiles. (Phase 2:
     append the This-week strip.)
   - `renderClass(id)` — header + back-to-hub link, then each week as a
     `week-head` (range + theme) followed by its lesson `cards`; empty week →
     empty state; class with no weeks → "coming soon."
   - `route()` — read `location.hash`; dispatch to landing or class; handle
     unknown id. Wire to `DOMContentLoaded` + `hashchange`.
   - Reuse existing `el()`, `esc()`, `fmtDate()` helpers unchanged.

3. **styles.css** — add the mockup's classes (already designed there):
   `.classgrid`, `.classcard` (+ `.soon`, `--accent` bar), `.week`,
   `.week-head`, `.week-range`, `.week-theme`, `.week-line`, and a
   `.backlink`. Lesson `.card`/`.tag`/etc. stay as-is. (Phase 2: `.thisweek`.)

4. **No change**: lessons/*.html, deploy tooling, .vercelignore.

Reference for the exact look/markup: `design/2026-08-30-landing-layout-mockup.html`.

---

## Phasing (each phase leaves the site working & deployable)

**Phase 0 — schema migration, look unchanged-ish.**
Migrate the manifest to `weeks`; update the renderer to read `weeks` but keep
the *current* single-page sections, now with week bands (≈ Option B). Lowest
risk: proves the data change independent of the navigation change. Ships the
week grouping immediately.

**Phase 1 — the A + C navigation.**
Rework `index.html` into the class grid (landing) + hash-routed class view.
This is the visual restructure. Verify deep links + back button.

**Phase 2 — "This week" strip (optional).**
Aggregate each live class's newest week's lessons into a labeled strip beneath
the grid. Defer or drop if the grid alone feels right ("may end up just A").

Recommend shipping Phase 0 and Phase 1 together as v1 of the new hub; treat
Phase 2 as a fast follow.

---

## Risks & mitigations
- **Broken manifest blanks the hub** (it's the JS source of truth). → `node
  --check data/lessons.js` before every deploy; /study-hub-deploy already does.
- **Deep-link load** — someone opens `…/#algebra-2` cold. → render from hash at
  `DOMContentLoaded`, not only on `hashchange`.
- **Unknown / stale hash** — → fall back to landing, don't error.
- **Live regression** — → keep it phaseable; verify locally before CC pushes.

## Verification (before CC deploys)
1. `node --check data/lessons.js` → PARSE OK.
2. Open `index.html` locally (file://): landing grid renders; tap Algebra 2 →
   class page with the week band + real lesson; World History → "coming soon";
   any `status:"planned"` → dashed soon-tile.
3. Deep-link `index.html#algebra-2` loads straight to the class page; back
   button returns to landing; `#garbage` falls back to landing.
4. Mobile width (~375px): grid collapses to 1 column; cards to 1 column.
5. After deploy: same checks on kelly-study-hub.vercel.app.

## Effort (rough)
Phase 0 small · Phase 1 medium (renderer rewrite + CSS) · Phase 2 small.
One focused CW session for Phase 0+1; CC deploys.

---

## Open decisions (confirm before build)
1. **Routing** — go with hash-routed single file (recommended), or do you want
   real per-class paths? (Recommend: hash.)
2. **Planned tiles** — list Kelly's not-yet-added classes as "soon" tiles for a
   full 6-up grid, or show only classes that actually have content? (Recommend:
   only real classes for now; add planned tiles when you want them.)
3. **"This week" strip** — build in v1 (Phase 2) or ship the grid alone first?
   (Recommend: grid alone first, add the strip as a fast follow.)
4. **Accents** — confirm the per-class colors (Algebra 2 coral, World History
   teal set; others TBD as classes are added).
