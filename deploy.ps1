# deploy.ps1 -- one-command publish for Kelly's Study Hub
#
# What it does, in order:
#   1. Commits any pending changes (git add -A) with your message, or an
#      auto-dated default. Skips the commit cleanly if nothing changed.
#   2. Pushes main to GitHub (greg-io-system/study-hub) so the repo stays current.
#   3. Deploys to Vercel production (vercel --prod) under the "Greg's projects" team.
#   4. Prints the live URL -- the stable alias Kelly bookmarks.
#
# Usage (from the study-hub folder, or anywhere):
#   .\deploy.ps1                          # auto-dated commit message
#   .\deploy.ps1 "added factoring lesson" # your own message
#   .\deploy.ps1 -NoGit                   # just redeploy current files, no commit/push
#
# Requires: git and vercel on PATH, and a one-time `vercel login` already done.

param(
    [string]$Message,
    [switch]$NoGit
)

# git and vercel write normal progress to stderr; under ErrorActionPreference=Stop
# that looks like a failure on Windows PowerShell 5.1. Stay on Continue and gate
# on $LASTEXITCODE explicitly instead.
$ErrorActionPreference = "Continue"

$repo = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repo

function Fail($msg) { Write-Host $msg -ForegroundColor Red; exit 1 }

Write-Host "== Study Hub deploy ==" -ForegroundColor Cyan
Write-Host "Repo: $repo"

if (-not $NoGit) {
    git add -A
    $pending = git status --porcelain
    if ($pending) {
        if (-not $Message) {
            $Message = "content: update Study Hub ($(Get-Date -Format 'yyyy-MM-dd HH:mm'))"
        }
        Write-Host "Committing: $Message" -ForegroundColor Yellow
        git commit -m $Message | Out-Host
        if ($LASTEXITCODE -ne 0) { Fail "git commit failed." }
        Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
        git push | Out-Host
        if ($LASTEXITCODE -ne 0) { Fail "git push failed." }
    } else {
        Write-Host "No changes to commit -- redeploying current files." -ForegroundColor DarkGray
    }
}

Write-Host "Deploying to Vercel (production)..." -ForegroundColor Yellow
$out = (vercel --prod --yes 2>&1 | Out-String)
Write-Host $out
if ($LASTEXITCODE -ne 0) { Fail "Vercel deploy failed (exit $LASTEXITCODE)." }

# Pull the stable alias URL out of the Vercel output; fall back to the known alias.
$m = [regex]::Match($out, 'Aliased:\s*(https://\S+)')
$alias = if ($m.Success) { $m.Groups[1].Value } else { 'https://study-hub-virid-iota.vercel.app' }

Write-Host ""
Write-Host "LIVE: $alias" -ForegroundColor Green
