s=open('app.html').read()
for ph,f in [('/*VOCAB*/','vocab.txt'),('/*EXEMPLES*/','exemples.txt'),('/*GRAMMAIRE*/','grammaire.txt'),('/*IRREG*/','irreguliers.txt'),('/*VPREP*/','verbes-prep.txt'),('/*PHRASES*/','phrases.txt'),('/*PROGRAMME*/','programme.txt')]:
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
PI = {}
for lang in ('en', 'es'):
    t = open(f'programme-{lang}.txt').read(); assert len(t.split('\n')) == len(open('programme.txt').read().split('\n')), lang
    assert '`' not in t and '${' not in t and '\\' not in t, lang
    PI[lang] = t
assert s.count('/*PROG_I18N*/') == 1
s = s.replace('/*PROG_I18N*/', json.dumps(PI, ensure_ascii=False))
import re
def rows(path):
    return open(path, encoding='utf-8').read().split('\n')
def vkey(a):
    if a[:1] in '=~': return a[1:]
    m = re.match(r'^(der|die|das) (.+)$', a)
    if m: return m.group(1) + ' ' + re.sub(r'\s*\(Pl\.\)', '', m.group(2))
    return a
# the programme: every reference exists, each element is in one unit, each unit can fill an exam (12/8/12/8),
# and its reserved sentences appear in no exercise
def check_programme():
    def lines(path): return [l.strip() for l in rows(path) if l.strip() and l.strip()[0] != '#' and not l.startswith('//')]
    words = {vkey(l.split('|')[0]) for l in lines('vocab.txt')}
    irr = {l.split('|')[0].replace('·', '') for l in lines('irreguliers.txt')}
    vp = {'>'.join(l.split('|')[:2]) for l in lines('verbes-prep.txt')}
    fiches, shown = set(), set()
    for l in rows('grammaire.txt'):
        if l.startswith('@'): fiches.add(int(l[1:].split('|')[0]))
        elif ' = ' in l:
            shown.update(x.strip() for x in re.split(r' = | \|\| ', l.lstrip('> ')))
            # an exercise with a gap shows the whole sentence once answered
            q, ans = l.split(' = ', 1)
            q = re.sub(r'\s*\([^)]*\)', '', q)
            shown.update(q.replace('___', x.strip()) for x in ans.split(' || '))
    shown.update(l.split('|')[0].strip() for l in lines('phrases.txt'))
    shown.update(l.split('|')[1].strip() for l in lines('exemples.txt'))
    shown.update(l.split('|')[4].replace('[', '').replace(']', '') for l in lines('verbes-prep.txt'))
    shown.update(words)
    gram = open('grammaire.txt', encoding='utf-8').read() # its tables and examples count too, not only the exercises
    # the Déclinaisons drill builds sentences from templates: determiner, maybe an adjective, a noun
    det = r'(?:[Dd](?:er|ie|as|en|em|es|ies\w*)|[Ee]in\w*|[Kk]ein\w*|[Mm]ein\w*)(?: \w+)? [A-ZÄÖÜ]\S*'
    tpl = re.findall(r'"([^"]*\{X\}[^"]*)"', re.search(r'const DK_TPL = \{(.*?)\n\};', s, re.S).group(1))
    drills = [re.compile(re.escape(t).replace(r'\{X\}', det)) for t in tpl]
    def is_shown(x): return x in gram or any(x in y for y in shown) or any(d.fullmatch(x) for d in drills)
    leaks = []
    seen, units, u = set(), [], None
    for l in rows('programme.txt'):
        if not l.strip() or l.startswith('//') or l.startswith('N|'): continue
        f = l.split('|')
        if f[0][0] == '@':
            u = {'id': f[0][1:], 'T': 0, 'S': 0, 'forms': 0, 'words': 0}; units.append(u); assert len(f) == 4, l; continue
        def once(kind, x, known):
            assert x in known, (u['id'], kind, x)
            assert (kind, x) not in seen, ('in two units', kind, x)
            seen.add((kind, x))
        if f[0] == 'F':
            for x in f[1].split(';'): once('F', int(x), fiches)
        elif f[0] == 'V':
            assert f[1] in ('pres', 'prat', 'perf'), l
            for x in f[2].split(';'): once('V', x, irr); u['forms'] += 1
        elif f[0] == 'P':
            for x in f[1].split(';'): once('P', x, vp); u['forms'] += 1
        elif f[0] == 'M':
            for x in f[1].split(';'): once('M', x, words); u['words'] += 1
        elif f[0] == 'T':
            assert len(f) == 5 and int(f[4]) in fiches and re.search(r'\[[^\]/]+(/[^\]/]+)*\]', f[1]), l
            x = f[1].replace('[', '').replace(']', '')
            if is_shown(x): leaks.append(x)
            u['T'] += 1
        elif f[0] == 'S':
            assert len(f) == 5 and f[4] and int(f[3]) in fiches, l
            leaks += [x for x in f[2].split(';') if is_shown(x)]
            # the keywords of a free answer (issue #22): each one must be in every accepted version
            for x in f[2].split(';'):
                tokens = [t.casefold() for t in re.findall(r'[\w-]+', x)]
                for k in f[4].split(';'): assert set(k.casefold().split('/')) & set(tokens), (u['id'], k, x)
            u['S'] += 1
        else: raise AssertionError(l)
    assert not leaks, ('reserved sentences shown in training', leaks)
    assert len({x['id'] for x in units}) == len(units)
    for x in units: assert x['T'] >= 12 and x['forms'] >= 8 and x['words'] >= 12 and x['S'] >= 8, x
check_programme()
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
