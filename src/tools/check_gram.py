"""Check a translated grammar file against grammaire.txt: python3 check_gram.py grammaire.txt grammaire-en.txt"""
import sys, re
src = open(sys.argv[1], encoding="utf-8").read().split("\n")
dst = open(sys.argv[2], encoding="utf-8").read().split("\n")
errs = []
def e(i, m): errs.append(f"line {i+1}: {m}")
if len(src) != len(dst): errs.append(f"line count {len(src)} vs {len(dst)}")
inex = False
for i, (a, b) in enumerate(zip(src, dst)):
    for bad in ("`", "${", "\\"):
        if bad in b: e(i, f"forbidden {bad!r}")
    if not a.strip():
        if b.strip(): e(i, "should be empty")
        inex = False; continue
    if a.startswith("@"):
        x, y = a[1:].split("|"), b[1:].split("|") if b.startswith("@") else []
        if len(y) != 3 or x[0] != y[0] or x[2] != y[2]: e(i, "@id|title|level: id and level must be unchanged")
        inex = False; continue
    for mk in ("#table", "#h ", "#ex ", "- ", "> "):
        if a.startswith(mk) != b.startswith(mk): e(i, f"marker {mk!r} mismatch")
    if a.startswith("#ex "): inex = True; continue
    if a.startswith("> "):
        if a[2:].split(" = ")[0] != b[2:].split(" = ")[0]: e(i, "German part of '> de = tr' must be unchanged")
        if " = " not in b: e(i, "missing ' = '")
        continue
    if a.count("|") != b.count("|"): e(i, "table cell count differs")
    if inex and " = " in a:
        if " = " not in b: e(i, "exercise needs ' = '"); continue
        if a[a.index(" = "):] != b[b.index(" = "):]: e(i, "exercise answer (after ' = ') must be unchanged")
        if a.count("___") != b.count("___"): e(i, "___ count differs")
    if a.count("**") != b.count("**"): e(i, "** count differs")
print("\n".join(errs[:60]) or "OK", f"({len(errs)} errors)")
