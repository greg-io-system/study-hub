# Study Hub -- CLAUDE.md
# Version: 0.1
# Created: 2026-08-28
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
