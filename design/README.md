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

## OPEN -- per-class page setup (design session to schedule, Greg 2026-10-10)
Greg's direction: a separate design session to give each class its own page
setup, shaped by its teacher and how the class actually works, instead of one
week-band layout for all six. Inputs gathered so far:
- **Algebra 2:** the teacher doesn't teach in class (problems on the board +
  homework), so the hub has to BE the instruction. Organize by UNIT, with a
  clear "start here" homework walkthrough, then test prep, then concept
  lessons. Interim fix 2026-10-10: one "Unit 2: Homework & Test Prep" card
  with numbered material chips, in a "Since Oct 1 · Unit 2" band (manifest
  only; renderer unchanged).
- **AP English:** runs on Evans's daily email, not Classroom (digests +
  TERMS Library + position-paper guide).
- **World History:** OpenStax chapters + teacher quizzes/Blooket.
- Others (Anatomy, Psych, French): to be characterized in the session.
Also in scope: making it obvious which page to open first (homework help vs
concept lesson vs test review), since Kelly's buy-in depends on the site
feeling helpful at a glance.
- DONE 2026-10-10: landing "How to use your Study Hub" note (renderHowTo in index.html, .howto in styles.css), under This week, collapsible + remembered per device. Its homework line names Algebra only -- generalize it once the per-class session lands.

## OPEN -- exploratory: an interactive study "app" vs what the current setup can deploy (Greg 2026-10-10)
Separate exploratory session, not a build. SCOPE: the INTERACTIVE STUDY part only
-- how Kelly learns and practices (lessons, walkthroughs, practice, tutoring).
NOT the tracking side: the weekly panel, sweeps and class pages are working well
for tracking her work and supporting her (Greg), and stay as they are.
Question: what would a real interactive study app look like, compared with the
self-contained lesson pages we ship today? Starting points to bring:
- What the pages already do: step-reveal walkthroughs in sheet order, draggable
  graphs (parabola/line explorer, piecewise builder), click-to-reveal practice,
  device-local "done" ticks. Plus the supervised Claude tutor Project for when
  she's stuck on her own work.
- Where they run out: practice is fixed (no fresh problems generated on demand,
  no checking her typed or drawn answer step by step), nothing adapts to what
  she gets wrong, no tutor inside the page (Claude.ai is 18+, so tutoring stays
  supervised on Greg's account), progress doesn't carry across devices.
- Pull together with the per-class design session above where they overlap.
