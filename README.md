# Study Hub

A simple, static study site for Kelly. Concept-first lessons she can open in a
browser (phone or laptop), no login. Built and maintained by Greg + Claude;
kept deliberately simple for her.

Sister project to `algebra-2/` (that repo holds the backend: walkthroughs,
answer keys, tracker, working-approach docs). This repo is the delivery
surface only.

## What it is
- **Static site** (plain HTML/CSS/JS, no build step, no framework) on Vercel.
- The **hub** (`index.html`) lists lessons as cards, grouped by subject.
- Each **lesson** is a self-contained `.html` file in `/lessons/` — all CSS
  and JS inline, no dependencies, so it also opens standalone anywhere.
- `data/lessons.js` is the single content manifest that drives the hub.

Multi-subject by design: Algebra 2 is the first subject; adding another (e.g.
Human Anatomy) is a new entry in the manifest, no restructuring.

## Structure
```
study-hub/
  index.html          the hub home (renders from data/lessons.js)
  styles.css          shell styles (warm "notebook" theme)
  data/lessons.js     content manifest — THE source of truth for the hub
  lessons/            self-contained lesson .html files
  assets/             images etc. (future)
  DEPLOY.md           one-time Vercel setup + deploy (Claude Code)
```

## Add a lesson (the whole workflow)
1. Drop the self-contained lesson `.html` into `lessons/`.
2. Add an entry to the right subject's `lessons` array in `data/lessons.js`
   (newest first): `title`, `topic`, `file`, `date`, `summary`, `tags`.
3. Commit. Claude Code pushes → Vercel redeploys. Her bookmark is unchanged.

## Add a subject
Add a new object to `subjects` in `data/lessons.js` with `id`, `name`,
`blurb`, and a `lessons` array.

## Local preview
Because `data/lessons.js` loads via a `<script>` tag (not fetch), you can open
`index.html` directly in a browser to preview — no server needed.

## If we ever outgrow static
Lessons are framework-agnostic assets. Moving the shell to React later means
rebuilding only the home/nav from the same `lessons.js` data; the lessons drop
in unchanged. Low, bounded migration cost — which is why static is the right
start.
