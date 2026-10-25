# Profile -- study-hub
# Read by the Tier 2 services. Settings only; facts and rules stay in CLAUDE.md.
# Version: 0.1 | 2026-10-25 | Source: archetypes.md + the files named per field

project: study-hub
archetype: Content Hub                    # claude-ops/reference/archetypes.md
purpose: Kelly's Study Hub: a static HTML study site; a home page lists the lessons, each lesson a self-contained interactive page   # study-hub/CLAUDE.md What This Project Is
cadence: content sessions
eod: out                                  # archetypes.md Content Hub
register: no                              # archetypes.md Content Hub
session_note: every session               # content sessions; notes go to GHS/session-notes/cc/ (study-hub/CLAUDE.md)
session_note_format: study-hub            # projects/.claude/commands/session-close.md lines 8-13
output_styles: none
frame:                                    # Content Hub: the deploy skill names its reads (greg-io-v2.md section 8)
  - none
routines:
  - none
deploy: Vercel project study-hub, git-connected: a push to main deploys to https://kelly-study-hub.vercel.app; via /study-hub-deploy or deploy.ps1; source gate scripts/check_sources.py first   # study-hub/CLAUDE.md Deployment
image_intake_folder: none
