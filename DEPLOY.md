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
Adding a lesson = new file in `lessons/` + an entry in `data/lessons.js` +
commit + push. Vercel redeploys automatically. Same URL; Kelly's bookmark never
changes.

## Notes
- No `cleanUrls` in Vercel config on purpose — lesson links in `data/lessons.js`
  use explicit `.html` paths. If cleanUrls is ever enabled, drop the `.html`
  from the manifest paths to match.
- Git push to greg-io-system org is pre-authorized per projects/CLAUDE.md.

## Production URL
(fill in after first deploy): ____________________________
