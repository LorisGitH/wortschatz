"""Check a translated content file against its French source.
python3 check_content.py vocab.txt vocab-en.txt
Only the French fields may change; every other field, comment line and theme line must be identical."""
import sys, os, re
FR_FIELDS = {"vocab": [2], "exemples": [2], "phrases": [1], "irreguliers": [4], "verbes-prep": [3, 5]}
src_p, dst_p = sys.argv[1], sys.argv[2]
kind = os.path.basename(src_p).rsplit(".", 1)[0]
idx = FR_FIELDS[kind]
src = open(src_p, encoding="utf-8").read().split("\n")
dst = open(dst_p, encoding="utf-8").read().split("\n")
errs = []
if len(src) != len(dst): errs.append(f"line count {len(src)} vs {len(dst)}")
for i, (a, b) in enumerate(zip(src, dst)):
    for bad in ("`", "${", "\\"):
        if bad in b: errs.append(f"line {i+1}: forbidden {bad!r}")
    s = a.strip()
    if not s or s.startswith("#") or s.startswith("//"):
        if a != b: errs.append(f"line {i+1}: comment/theme/empty line must be unchanged")
        continue
    fa, fb = a.split("|"), b.split("|")
    if len(fa) != len(fb): errs.append(f"line {i+1}: field count {len(fa)} vs {len(fb)}"); continue
    for k, (x, y) in enumerate(zip(fa, fb)):
        if k in idx:
            if not y.strip(): errs.append(f"line {i+1}: translation empty")
            elif x.strip() and x == y and re.search(r"[a-zà-ÿ]{4}", x, re.I): errs.append(f"line {i+1}: field {k} unchanged ({x!r}) - check it really needs no translation")
        elif x != y: errs.append(f"line {i+1}: field {k} must be unchanged ({x!r} -> {y!r})")
print("\n".join(errs[:80]) or "OK", f"({len(errs)} issues)")
