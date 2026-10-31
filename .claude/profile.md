# Profile -- study-hub
# Read by the Tier 2 services. Settings only; facts and rules stay in CLAUDE.md.
# Version: 0.3.1 | 2026-10-30 (CO-9: routines none gains its why, launch_check.py value form) | prior 0.3 2026-10-27 (F0: eod -> day.digest, session_note -> day.close) | prior 0.2 2026-10-25 (frames, greg-io-v2 batch 3) | Source: archetypes.md + the files named per field
# A value never contains a hash sign: it starts the comment. Row values: a setting, `none -- <why>`, or `UNKNOWN -- <what settles it>`.

project: study-hub
archetype: Content Hub                    # claude-ops/reference/archetypes.md
purpose: Kelly's Study Hub: a static HTML study site; a home page lists the lessons, each lesson a self-contained interactive page   # study-hub/CLAUDE.md What This Project Is
cadence: content sessions
day.digest: out                           # archetypes.md Content Hub
register: no                              # archetypes.md Content Hub
day.close: every session               # content sessions; notes go to GHS/session-notes/cc/ (study-hub/CLAUDE.md)
session_note_format: study-hub            # projects/.claude/commands/session-close.md lines 8-13
output_styles: none
frames: none                               # Content Hub: the deploy skill names its reads (greg-io-v2.md section 8)
routines:
  - none -- content sessions; deploy is the Content Hub service   # archetypes.md Content Hub
deploy: Vercel project study-hub, git-connected: a push to main deploys to https://kelly-study-hub.vercel.app; via /study-hub-deploy or deploy.ps1; source gate scripts/check_sources.py first   # study-hub/CLAUDE.md Deployment
image_intake_folder: none
