s=open('app.html').read()
for ph,f in [('/*VOCAB*/','vocab.txt'),('/*EXEMPLES*/','exemples.txt'),('/*GRAMMAIRE*/','grammaire.txt'),('/*IRREG*/','irreguliers.txt'),('/*VPREP*/','verbes-prep.txt'),('/*PHRASES*/','phrases.txt')]:
    t=open(f).read(); assert '`' not in t and '${' not in t and '\\' not in t, f
    assert s.count(ph)==1, ph; s=s.replace(ph,t)
import json, os
I = {lang: json.load(open(f'i18n-{lang}.json')) for lang in ('en', 'es') if os.path.exists(f'i18n-{lang}.json')}
G = {}
for lang in ('en', 'es'):
    if os.path.exists(f'grammaire-{lang}.txt'):
        t = open(f'grammaire-{lang}.txt').read(); assert len(t.split('\n')) == len(open('grammaire.txt').read().split('\n')), lang
        G[lang] = t
assert s.count('/*GRAM_I18N*/') == 1
s = s.replace('/*GRAM_I18N*/', json.dumps(G, ensure_ascii=False))
import re
def rows(path):
    return open(path, encoding='utf-8').read().split('\n')
def vkey(a):
    if a[:1] in '=~': return a[1:]
    m = re.match(r'^(der|die|das) (.+)$', a)
    if m: return m.group(1) + ' ' + re.sub(r'\s*\(Pl\.\)', '', m.group(2))
    return a
# content translations: {lang: {w: {de: tr}, ex: {inf: tr}, ph: {de: tr}, irr: {inf: tr}, vp: {verb|prep: [tr, extr]}}}
C = {}
for lang in ('en', 'es'):
    c = {}
    def pairs(name):
        f = f'{name}-{lang}.txt'
        if not os.path.exists(f): return []
        a, b = rows(f'{name}.txt'), rows(f)
        assert len(a) == len(b), f
        out = []
        for x, y in zip(a, b):
            t = x.strip()
            if not t or t[0] == '#' or t.startswith('//'): continue
            fx, fy = x.split('|'), y.split('|'); assert len(fx) == len(fy), (f, x)
            out.append((fx, fy))
        return out
    p = pairs('vocab')
    if p: c['w'] = {vkey(fx[0]): fy[2] for fx, fy in p}
    p = pairs('exemples')
    if p: c['ex'] = {fx[0].strip(): fy[2].strip() for fx, fy in p}
    p = pairs('phrases')
    if p: c['ph'] = {fx[0].strip(): fy[1].strip() for fx, fy in p}
    p = pairs('irreguliers')
    if p: c['irr'] = {fx[0].replace('·', ''): fy[4] for fx, fy in p}
    p = pairs('verbes-prep')
    if p: c['vp'] = {fx[0] + '|' + fx[1]: [fy[3], fy[5]] for fx, fy in p}
    if c: C[lang] = c
assert s.count('/*CONTENT_I18N*/') == 1
s = s.replace('/*CONTENT_I18N*/', json.dumps(C, ensure_ascii=False))
# IKI lessons added by Claude from photos of the board: iki/cours.txt (the photos stay out of the app)
K = []
if os.path.exists('iki/cours.txt'):
    for line in rows('iki/cours.txt'):
        t = line.strip()
        if not t or t[0] == '#': continue
        if t[0] == '@':
            date = t[1:].split('|')[0]
            l = {'id': 'k' + date.replace('-', ''), 'date': date, 'words': []}
            K.append(l); continue
        de, fr, pl, forms = (t.split('|') + ['', '', ''])[:4]
        assert de and fr, t
        K[-1]['words'].append({'de': de, 'fr': fr, 'pl': pl, 'forms': forms})
# the same lessons translated, line for line: iki/cours-en.txt, iki/cours-es.txt,
# and a German synonym or short definition for each word in iki/cours-de.txt
for lang in ('en', 'es', 'de'):
    f = 'iki/cours-%s.txt' % lang
    if not os.path.exists(f): continue
    li, wi = -1, 0
    for line in rows(f):
        t = line.strip()
        if not t or t[0] == '#': continue
        if t[0] == '@':
            li += 1; wi = 0
            assert K[li]['date'] == t[1:].split('|')[0], (f, t); continue
        de, x = (t.split('|') + [''])[:2]
        w = K[li]['words'][wi]; wi += 1
        assert de == w['de'] and x, (f, t)
        if lang == 'de': w['def'] = x
        else: w.setdefault('tr', {})[lang] = x
    assert li == len(K) - 1, f
kj = json.dumps(K, ensure_ascii=False)
assert '`' not in kj and '${' not in kj and '\\' not in kj
assert s.count('/*IKI*/[]') == 1
s = s.replace('/*IKI*/[]', kj)
assert s.count('/*I18N*/') == 1
s = s.replace('/*I18N*/', json.dumps(I, ensure_ascii=False))
open('index.html','w').write(s)
print('ok', len(s))
