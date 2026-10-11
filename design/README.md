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

## OPEN -- exploratory: "app" vs what the current setup can deploy (Greg 2026-10-10)
Separate exploratory session, not a build. Question: what would a real study
"app" for Kelly look like, compared with what we can ship today (static hub on
Vercel + self-contained lesson pages + data files + a supervised Claude tutor
Project)? Starting points to bring:
- What the static setup already covers: weekly panel, per-class pages,
  step-reveal walkthroughs, interactive graphs, device-local progress ticks.
- Where it runs out: no accounts or saved progress across devices, no tutor
  inside the site (Claude.ai is 18+, so tutoring stays supervised on Greg's
  account), no notifications, content updates depend on a CC sweep + push.
- Pull together with the per-class design session above; this one is the
  wider "what's the ceiling" question, that one is page layout per class.
