# Study Hub -- CLAUDE.md
# Version: 0.2
# Created: 2026-08-28
# Updated: 2026-08-30 (v0.2 -- documented the multi-class workshop model:
#   the hub is the shared delivery surface for N per-class projects, and
#   each lesson's source of truth is its workshop repo, not this one.)
# Owner: Greg Stockdale
# Location: projects/study-hub/CLAUDE.md
# Loads in: CC (traversal) and CW (harness injection). Self-contained --
#   CW loads this file and nothing above it at session start.

---

## What This Project Is

Kelly's Study Hub -- a static HTML study site. A home/landing page lists
the lessons (a table of contents); each lesson is a self-contained,
interactive, mobile-first HTML page (concept-first). Content is added
regularly. Live at https://kelly-study-hub.vercel.app.

Personal project -- NOT work. It is the PILOT / reference instance of an
emerging "Content Hub" project shape (static HTML front-end for user
interaction, regularly-added content, a rebuildable index/TOC, lite
push-to-deploy automation). That shape is routed to Claude Ops
Architecture for formalization -- see claude-ops/register/routing-notes/
2026-08-28-architecture-routing-content-hub-project-shape.md. Until it is
ruled on, this project's protocol lives entirely in this file.

---

## Where Content Comes From (the workshops)

The hub is a SUBJECT-AGNOSTIC STOREFRONT. It does not author lessons -- it
publishes them. The authoring happens in separate PER-CLASS "workshop"
projects, one git repo per class, all living together under a Golden High
School container -- projects/GHS/ (mirrors the Drive "Golden High School"
folder). study-hub stays a top-level sibling of GHS, not inside it:

  projects/GHS/algebra-2/      -- first workshop (live). Tutoring production
                                  for Kelly's Algebra 2: concept briefs,
                                  answer keys, practice sheets, lessons.
  projects/GHS/world-history/  -- AP World History workshop (scaffolded;
                                  OpenStax Vol. 1 course map seeded).
  projects/GHS/<class>/        -- the 6 courses: algebra-2, world-history,
                                  ap-english, ap-french, ap-psychology,
                                  human-anatomy. Pattern generalizes.

The model: one GHS folder per class, and THIS ONE HUB serves all of them.
Each workshop is the SOURCE OF TRUTH for its own lessons; the copy that lands
here is DERIVED. Edit a lesson in its workshop, then re-publish to the hub --
never the reverse.

Mapping: one workshop folder == one `subject` object in data/lessons.js.
  projects/GHS/algebra-2/     -> subjects[] { id:"algebra-2",    name:"Algebra 2" }
  projects/GHS/world-history/ -> subjects[] { id:"world-history", name:"World History" }

Publish path (a workshop lesson -> the live hub):
  1. Workshop authors a self-contained lesson .html (portability rule below).
  2. Copy it into lessons/ here. Convention: drop the workshop's date prefix,
     keep the topic slug -- e.g. workshop's
     2026-08-28-function-notation-inputs-outputs.html becomes hub's
     lessons/function-notation-inputs-outputs.html.
  3. Prepend its entry to the matching subject's `lessons` array in
     data/lessons.js (newest-first). Add the subject object first if the
     class is new to the hub.
  4. Parse-check + deploy (see Deployment). CW copies + edits the manifest;
     CC deploys.

Workshop-side detail (inputs, output stack, cadence) lives in each workshop's
own docs -- for Algebra 2, projects/GHS/algebra-2/WORKING-APPROACH.md and
CLAUDE.md. This file owns only the hub side.

---

## Classification

Tier 3, personal, App-type (Content-Hub variant). It CONSUMES Tier 2
standards -- it does not invent its own.

DELIBERATELY OUT-OF-CADENCE (personal, not work):
- Not in projects/CLAUDE.md active-projects list.
- No THE REGISTRY records; no EOD / standup / batch-plan cadence.
- No Drive mirror (git is the record; nothing fetches it via connector).
Its whole protocol is self-contained in this repo.

---

## Deployment (push-to-deploy)

- Repo: greg-io-system/study-hub (public; source of truth).
- Vercel project: study-hub (team gregs-projects-2828bb2b), public, no password.
- Live URL (stable alias -- Kelly bookmarks this):
  https://kelly-study-hub.vercel.app
- Vercel is GIT-CONNECTED: any push to `main` auto-deploys to production and
  reassigns the live alias. The push IS the deploy. (Wired 2026-08-28;
  differs from Villa, which deploys via CLI.)

Publish a change (CC only -- CW cannot push):
- From a CC session:  /study-hub-deploy "message"   (previews the change,
  parse-checks the manifest, confirms, commits + pushes)
- From a terminal:    .\deploy.ps1 "message"         (commit + push -> auto-deploy)
- By hand:            git add -A; git commit -m "..."; git push
Full detail: DEPLOY.md.

---

## Content Model (the index/TOC + lessons)

- data/lessons.js -- the content manifest AND the source of the hub's
  index/TOC. Shape: window.STUDY_HUB = { student, subjects:[{ id, name,
  blurb, lessons:[...] }] }. Lessons are listed NEWEST-FIRST. The hub
  renders the TOC from this manifest client-side (loaded via <script src>),
  so it works on the live site and when opened locally.
- lessons/*.html -- one self-contained page per lesson. Links ../styles.css.
  No build step, no framework, no external dependencies (Google Fonts is the
  only allowed remote).
- To add a lesson: drop the self-contained .html into lessons/, then prepend
  its entry to the matching subject's `lessons` array in data/lessons.js.

BEFORE ANY DEPLOY: run `node --check data/lessons.js`. A broken manifest
renders the hub blank (it is the JS source of truth). /study-hub-deploy does
this automatically; if publishing by hand, do it yourself.

---

## Roles (Chat / CW / CC pipeline)

- CW   -- AUTHORS content (lesson HTML, manifest entries) in this repo.
          Cannot push or deploy. Hands off to CC when content is confirmed.
- CC   -- DEPLOYS (commit + push -> auto-deploy) and runs the manifest
          parse-check safety net. Maintains this file and the deploy tooling.
- Greg -- confirms content, triggers the deploy.

---

## Session Management (CW)

- CW session-close writes its note to this project's LOCAL session-notes/cw/
  -- NOT the claude-ops cw-ops trail (this is a standalone personal project).
- Optional HANDOVER.md in the repo root for cross-session continuity if a
  task spans sessions.
- Universal CW patterns apply: one major operation per session; a STATUS
  flag (GREEN / YELLOW / RED) + OPEN ITEMS in every note.

---

## Constraints

- Static only. No build step, no framework, no node dependencies.
- Personal data: the student's first name ("Kelly") only. No email, phone,
  last name, or other personal data in the repo (it is public).
- Commit prefixes: `cc:` (CC), `cw:` (CW), per the system-wide convention.
- CC-Git standing rule: pull at session start, commit + push at close.
- Non-site files (this CLAUDE.md, DEPLOY.md, deploy.ps1, session-notes/) are
  kept out of the public deploy via .vercelignore -- only the site ships.
