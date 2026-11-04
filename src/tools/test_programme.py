"""Runs tools/test_programme.js inside the built app, in headless Chrome: python3 tools/test_programme.py (from src/ or anywhere).
No dependency but Python and Chrome. CHROME can name the browser to use. Exits 1 if a test fails."""
import html, os, re, shutil, subprocess, sys, tempfile
SRC = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
subprocess.run([sys.executable, "build.py"], cwd=SRC, check=True, stdout=subprocess.DEVNULL)
page = open(os.path.join(SRC, "index.html"), encoding="utf-8").read()
tests = open(os.path.join(SRC, "tools", "test_programme.js"), encoding="utf-8").read()
chrome = os.environ.get("CHROME") or next(c for c in ["/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", shutil.which("google-chrome"), shutil.which("chromium")] if c and os.path.exists(c))
with tempfile.TemporaryDirectory() as tmp:
    path = os.path.join(tmp, "test.html")
    open(path, "w", encoding="utf-8").write('<!doctype html><meta charset="utf-8">' + page + "<script>" + tests + "</script>")
    out = subprocess.run([chrome, "--headless=new", "--disable-gpu", "--no-first-run", "--no-sandbox", "--user-data-dir=" + os.path.join(tmp, "profile"),
                          "--host-resolver-rules=MAP * ~NOTFOUND", "--virtual-time-budget=4000", "--dump-dom", "file://" + path],
                         capture_output=True, text=True, timeout=120).stdout
m = re.search(r'<pre id="test-results">(.*?)</pre>', out, re.S)
print(html.unescape(m.group(1)) if m else "FAIL: the tests did not run (a script error stopped the page)")
sys.exit(0 if m and html.unescape(m.group(1)).rstrip().endswith("0 failed") else 1)
