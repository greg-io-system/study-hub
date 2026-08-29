# deploy.ps1 -- publish Kelly's Study Hub (push-to-deploy)
#
# Vercel is connected to greg-io-system/study-hub: any push to `main` auto-deploys
# to production and updates the live alias below. This script is the convenience
# wrapper CW content flows through:
#   1. Commit any pending changes (CW-authored lessons, data/lessons.js edits)
#   2. Push to main  -> this is what triggers the Vercel deploy
#   3. Wait briefly and confirm the site is live
#
# Usage (from the study-hub folder, or anywhere):
#   .\deploy.ps1                          # auto-dated commit message
#   .\deploy.ps1 "added factoring lesson" # your own message
#   .\deploy.ps1 -Redeploy                # force a rebuild of current files, no commit
#
# Requires: git + vercel on PATH, `vercel login` done once, and the repo already
# pushed at least once (it is). Push-to-deploy wired 2026-08-28.

param(
    [string]$Message,
    [switch]$Redeploy
)

# git/vercel write progress to stderr; under ErrorActionPreference=Stop that looks
# like failure on Windows PowerShell 5.1. Stay on Continue, gate on $LASTEXITCODE.
$ErrorActionPreference = "Continue"

$repo  = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repo
$alias = "https://study-hub-virid-iota.vercel.app"

function Fail($m) { Write-Host $m -ForegroundColor Red; exit 1 }

Write-Host "== Study Hub deploy ==" -ForegroundColor Cyan
Write-Host "Repo: $repo"

# -Redeploy: no commit, just force an immediate production rebuild of current files.
if ($Redeploy) {
    Write-Host "Forcing a production rebuild of current files..." -ForegroundColor Yellow
    vercel --prod --yes 2>&1 | Out-Host
    if ($LASTEXITCODE -ne 0) { Fail "Vercel redeploy failed." }
    Write-Host "`nLIVE: $alias" -ForegroundColor Green
    exit 0
}

# Normal path: commit + push (the push is the deploy trigger).
git add -A
if (-not (git status --porcelain)) {
    Write-Host "No new content to commit. (Use -Redeploy to force a rebuild.)" -ForegroundColor DarkGray
    exit 0
}

if (-not $Message) {
    $Message = "content: update Study Hub ($(Get-Date -Format 'yyyy-MM-dd HH:mm'))"
}
Write-Host "Committing: $Message" -ForegroundColor Yellow
git commit -m $Message | Out-Host
if ($LASTEXITCODE -ne 0) { Fail "git commit failed." }

Write-Host "Pushing to main (this triggers the Vercel deploy)..." -ForegroundColor Yellow
git push | Out-Host
if ($LASTEXITCODE -ne 0) { Fail "git push failed." }

Write-Host "Pushed. Vercel is building from the push (~30s)..." -ForegroundColor Yellow
Start-Sleep -Seconds 25

try {
    $resp = Invoke-WebRequest -UseBasicParsing -Uri $alias -TimeoutSec 15
    $code = [int]$resp.StatusCode
} catch {
    $code = 0
}

Write-Host "`nRecent deployments:" -ForegroundColor DarkGray
# 2>$null drops the benign vercel/PowerShell "claude-code-hint" stderr line so it
# doesn't surface as an error or corrupt the script's exit code.
vercel ls study-hub 2>$null | Select-Object -First 8 | Out-Host

if ($code -eq 200) {
    Write-Host "`nLIVE (HTTP 200): $alias" -ForegroundColor Green
    exit 0
} else {
    Write-Host "`nPushed OK. Deploy may still be finishing (status $code)." -ForegroundColor Yellow
    Write-Host "  Live shortly at: $alias    Check: vercel ls study-hub"
    exit 0
}
