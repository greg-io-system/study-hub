# Study Hub — design references

Static mockups kept for reference. **Not deployed** (this folder is in
`.vercelignore`). Open the `.html` files directly in a browser.

## 2026-08-30-landing-layout-mockup.html
Explores how the landing page scales from 1 class to ~6, and how lessons
group by **week** within a class.

Three directions shown:
- **Option A — Class grid.** One tile per class; tap to drill into that class.
- **Option B — One page, sections + weeks.** Today's layout extended with
  week bands under each class section.
- **Option C — A class page (the drill-in).** What you land on after tapping a
  class in Option A; weeks newest-first.

**Decision (2026-08-30):** direction is **A + C** (class grid → per-class
weekly page). The landing may also surface a "This week" strip beneath the
class cards; it could collapse back to plain A. Build not yet started — the
live hub still runs the original single-page renderer.

### Week model (agreed)
Each subject gains a `weeks` layer in `data/lessons.js`:

    { id, name, blurb, accent,
      weeks: [ { range:"Aug 29 – Sep 4", theme:"Unit 0 · Functions", lessons:[…] } ] }

`theme` is the flexible label — a **unit/category** for math
("Unit 0 · Functions"), a **book chapter** for history
("Ch. 2 · River Civilizations"). Weeks list newest-first; lessons within a
week too.
