# Deploy Handoff -- Claude Code

Cowork scaffolded and committed this static site. It cannot create the Vercel
project or push. This is the turnkey one-time setup for CC, then it's automatic.

## What this is
Pure static site. NO build step, NO framework, NO node dependencies.
Serve the repo root as-is; `index.html` is the entry point.

## One-time setup (CC)
1. `cd projects/study-hub`
2. Confirm the initial commit exists (Cowork made it): `git log --oneline`
3. Create a remote + Vercel project. Two paths:
   - **Git-based (recommended, matches Villa):** create a repo in the
     greg-io-system org, `git remote add origin <url>`, `git push -u origin main`,
     then import the repo in Vercel.
   - **CLI direct:** `vercel` in this folder to link/create the project.
4. Vercel project settings:
   - Framework Preset: **Other**
   - Build Command: **(none / empty)**
   - Output Directory: **./** (repo root)
   - Install Command: (none)
5. Deploy: `vercel --prod` (or let the git import auto-deploy).
6. Capture the production URL and add it to this file + tell Greg. That URL is
   what gets shared to Kelly's personal Gmail (see algebra-2/SHARING-AND-COMMS.md).

## Ongoing (after setup)
Adding a lesson = new file in `lessons/` + an entry in `data/lessons.js`, then
publish. Same production URL; Kelly's bookmark never changes.

**Push-to-deploy is LIVE (wired 2026-08-28).** The Vercel project is connected to
`greg-io-system/study-hub` via the Vercel GitHub App. Any push to `main`
auto-deploys to production and reassigns the live alias -- verified end-to-end
(a push produced a `-git-main-` production deployment and the stable alias
repointed to it). So publishing is just: commit + push.

Easiest path -- the deploy script (from the study-hub folder in PowerShell):

    .\deploy.ps1                          # commit (auto-dated) + push  -> auto-deploys
    .\deploy.ps1 "added factoring lesson" # your own commit message
    .\deploy.ps1 -Redeploy                # force a rebuild of current files (no commit)

The script commits + pushes and confirms the site is live. You can also just
`git add -A; git commit -m "..."; git push` by hand -- the push alone deploys.
From a CC session, `/study-hub-deploy` does the same with a change-preview first.

CW authors content into this repo but cannot push; the push/deploy step is done
from CC (or a terminal) here.

## Notes
- No `cleanUrls` in Vercel config on purpose — lesson links in `data/lessons.js`
  use explicit `.html` paths. If cleanUrls is ever enabled, drop the `.html`
  from the manifest paths to match.
- Git push to greg-io-system org is pre-authorized per projects/CLAUDE.md.

## Production URL
Live (stable alias — share this / Kelly bookmarks this):
https://study-hub-virid-iota.vercel.app

Deployed 2026-08-28 via Vercel CLI. Vercel team: Greg's projects
(gregs-projects-2828bb2b). Project: study-hub.
Per-deploy immutable URL of first deploy:
https://study-2yd6rajhy-gregs-projects-2828bb2b.vercel.app
