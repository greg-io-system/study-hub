"""check_sources.py -- refuse to publish hub lessons that can't show their sources.

Rule (GHS/CLAUDE.md, TEACHER-SOURCED FACTS ONLY): every fact Kelly studies on
the hub traces to her teacher's materials -- or, for an AP-exam page, to the
College Board course description. A written rule failed twice (Unit 3 page
2026-10-02, Unit 2 gland table 2026-09-25: both carried their own "beyond the
class slides" footnote and shipped anyway). This script is the enforcement.

Every lesson page (lessons/*.html) that is added or changed must carry:

    <!-- SOURCES
    kind: class | ap-exam
    - human-anatomy/reference/unit-2-slides-capture.md
    - human-anatomy/reference/unit-2-calendar.md
    fact-trace: 2026-10-21 additions+coverage
    -->

  - kind: class  -> every listed path is a capture under projects/GHS/
                    (the workshop's reference/ files of the teacher's material)
  - kind: ap-exam -> sources are the CED / exam captures under
                    projects/GHS/ap-exams/; the page must say on screen that it
                    is AP-exam material (the words "AP exam" in a visible label)
  - fact-trace:  date + WHAT WAS CHECKED. A separate reviewer ran both passes:
                 ADDITIONS (every fact on the page traces to the sources) and
                 COVERAGE (every in-scope item on the teacher's review sheet /
                 capture is on the page, or left off with a stated reason).
                   fact-trace: YYYY-MM-DD additions+coverage
                   fact-trace: YYYY-MM-DD additions (coverage n/a: <reason>)
                 The n/a form is for pages with no syllabus to cover (a skill
                 guide, a single-topic explainer) -- never for exam prep.
                 Re-trace and re-date whenever the page's facts change.

Every cited source must be a CAPTURE, not a derivative: no digest / summary /
course-map / index files, and the file must open with a completeness header
(from the ActivityBox lesson "absence is not information"):
    Captured: YYYY-MM-DD
    Coverage: slides 1-44 of 44   (or "complete -- whole document ...")
    Image-only: <slides whose text did not capture> | none

It also fails any page whose text admits to going beyond the sources
("beyond the class", "verify against", ...) -- the exact tell both past slips
carried.

Usage (from the study-hub folder):
  py scripts/check_sources.py                 # lessons changed vs upstream + uncommitted
  py scripts/check_sources.py --range A..B    # lessons changed in a git range (pre-push)
  py scripts/check_sources.py --all           # audit every lesson (reports the backlog)
  py scripts/check_sources.py FILE [FILE...]  # specific pages
Exit 0 = pass, 1 = at least one page fails. Runs from .githooks/pre-push and
deploy.ps1. Bypass (git push --no-verify) only on Greg's word.
"""
import argparse
import pathlib
import re
import subprocess
import sys

HUB = pathlib.Path(__file__).resolve().parent.parent
GHS = HUB.parent / "GHS"

DERIVATIVE = re.compile(r"digest|summary|course-map|index|overview|notes-digest", re.I)
BLOCK = re.compile(r"<!--\s*SOURCES\s*(.*?)-->", re.S | re.I)
TELLS = [
    r"beyond the (class|slides|notes|course|material)",
    r"verify (this |it )?against (the |her |his |any|class)",
    r"check (this|it|that)( table)? against (anything|the class|class|her|his)",
    r"not (in|on) (the|her|his) (slides|notes|materials?)",
    r"(slides|notes) (don'?t|do not) (break|cover|list|name|detail)",
    r"standard textbook",
    r"general (anatomy|knowledge)",
]
# NOT a tell: "not covered in class" -- an assigned reading or an AP-exam page
# can say that honestly; AP-exam pages are required to label themselves.
TELL_RE = re.compile("|".join(TELLS), re.I)


def git(*args):
    r = subprocess.run(["git", "-C", str(HUB), *args], capture_output=True, text=True)
    return r.stdout.splitlines() if r.returncode == 0 else []


def changed_lessons(rng=None):
    if rng:
        names = git("diff", "--name-only", "--diff-filter=AMR", rng)
    else:
        up = git("rev-parse", "--abbrev-ref", "@{u}")
        base = up[0] if up else "origin/main"
        names = git("diff", "--name-only", "--diff-filter=AMR", base)
        names += git("diff", "--name-only", "--diff-filter=AMR")
        names += git("ls-files", "--others", "--exclude-standard")
    return sorted({n for n in names if n.startswith("lessons/") and n.endswith(".html")})


def visible_text(html):
    html = re.sub(r"<!--.*?-->", " ", html, flags=re.S)
    html = re.sub(r"<(script|style)\b.*?</\1>", " ", html, flags=re.S | re.I)
    return re.sub(r"<[^>]+>", " ", html)


def check(path):
    problems = []
    html = (HUB / path).read_text(encoding="utf-8", errors="replace")
    m = BLOCK.search(html)
    if not m:
        problems.append("no SOURCES block")
    else:
        body = m.group(1)
        kind = re.search(r"^\s*kind:\s*(\S+)", body, re.M)
        kind = kind.group(1).lower() if kind else None
        if kind not in ("class", "ap-exam"):
            problems.append("SOURCES kind must be 'class' or 'ap-exam'")
        srcs = re.findall(r"^\s*-\s*(\S+)", body, re.M)
        if not srcs:
            problems.append("SOURCES lists no source files")
        for s in srcs:
            if DERIVATIVE.search(pathlib.PurePosixPath(s).name):
                problems.append(f"source is a derivative, not a capture: {s}")
        if GHS.is_dir():
            for s in srcs:
                f = GHS / s
                if not f.is_file():
                    problems.append(f"source not found: GHS/{s}")
                    continue
                if kind == "ap-exam" and not s.startswith("ap-exams/"):
                    problems.append(f"ap-exam page cites a non-ap-exams source: {s}")
                head = "\n".join(f.read_text(encoding="utf-8", errors="replace").splitlines()[:15])
                for field in ("Captured", "Coverage", "Image-only"):
                    if not re.search(rf"^#?\s*{field}:\s*\S", head, re.M):
                        problems.append(f"source has no '{field}:' header line: {s}")
        ft = re.search(r"^\s*fact-trace:\s*(\d{4}-\d{2}-\d{2})\s*(.*)$", body, re.M)
        if not ft:
            problems.append("no 'fact-trace: YYYY-MM-DD <scope>' line (page not traced)")
        elif not re.match(r"additions(\+coverage\b|\s*\(coverage n/a:\s*\S)", ft.group(2).strip()):
            problems.append("fact-trace must say what was checked: 'additions+coverage' "
                            "or 'additions (coverage n/a: <reason>)'")
        if kind == "ap-exam" and not re.search(r"AP exam", visible_text(html), re.I):
            problems.append("ap-exam page has no visible 'AP exam' label")
    for t in sorted({t.group(0) for t in TELL_RE.finditer(visible_text(html))}):
        problems.append(f'admits going beyond the sources: "{t}"')
    return problems


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("files", nargs="*")
    ap.add_argument("--range")
    ap.add_argument("--all", action="store_true")
    a = ap.parse_args()
    if a.all:
        pages = sorted(str(p.relative_to(HUB)).replace("\\", "/") for p in (HUB / "lessons").glob("*.html"))
    elif a.files:
        pages = [f.replace("\\", "/") for f in a.files]
    else:
        pages = changed_lessons(a.range)
    if not GHS.is_dir():
        print("note: projects/GHS not found -- source paths not checked")
    failed = 0
    for p in pages:
        probs = check(p)
        if probs:
            failed += 1
            print(f"FAIL {p}")
            for x in probs:
                print(f"     - {x}")
        else:
            print(f"ok   {p}")
    print(f"{len(pages)} page(s) checked, {failed} failing")
    if failed and not a.all:
        print("Fix the page (sources + fact-trace) before publishing. Rule: GHS/CLAUDE.md, TEACHER-SOURCED FACTS ONLY.")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
