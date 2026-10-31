# Builds the installable offline version (GitHub Pages) from index.html into ./pwa/,
# or into the folder given as argument (the repo root: python3 build_pwa.py ..)
import os, sys, hashlib
OUT = sys.argv[1] if len(sys.argv) > 1 else 'pwa'
os.makedirs(OUT, exist_ok=True)
def out(p): return os.path.join(OUT, p)
frag = open('index.html').read()
# the version names the service worker's cache; FORMAT changes when the build's output changes shape
# (2: the script moved to app.js), so installed copies refresh even if the page itself is unchanged
FORMAT = 2
ver = hashlib.sha1((frag + str(FORMAT)).encode()).hexdigest()[:10]
head = '''<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="Wortschatz">
<meta name="theme-color" content="#F1F3EF" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0E1412" media="(prefers-color-scheme: dark)">
<meta name="description" content="Allemand du quotidien : vocabulaire, grammaire, verbes et phrases, A1 à B2.">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon-192.png">
<link rel="apple-touch-icon" href="icon-180.png">
'''
# The page's script goes to app.js, so the Content-Security-Policy set in nginx.conf can say
# script-src 'self' with no 'unsafe-inline'. The ?v= query changes with every build, so neither
# the browser nor the service worker can pair a new page with an old app.js.
import re
scripts = re.findall(r'<script>(.*?)</script>', frag, re.S)
assert len(scripts) == 1, len(scripts)
assert '<script' not in scripts[0] and '</script' not in scripts[0]
appjs = '''if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
''' + scripts[0]
open(out('app.js'), 'w').write(appjs)
page = frag.replace('<script>' + scripts[0] + '</script>', '<script src="app.js?v=%s"></script>' % ver)
# inline event handlers (onclick="…") would be blocked by that policy too
assert '<script>' not in page and not re.search(r'\son[a-z]+\s*=', page + appjs)
open(out('index.html'), 'w').write(head + page)
open(out('manifest.webmanifest'), 'w').write('''{
  "name": "Wortschatz Alltag",
  "short_name": "Wortschatz",
  "description": "Allemand du quotidien : vocabulaire, grammaire, verbes et phrases, A1 à B2.",
  "lang": "fr",
  "start_url": "./",
  "scope": "./",
  "display": "standalone",
  "background_color": "#F1F3EF",
  "theme_color": "#F1F3EF",
  "icons": [
    { "src": "icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icon-512.png", "sizes": "512x512", "type": "image/png" },
    { "src": "icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable" }
  ]
}
''')
open(out('sw.js'), 'w').write('''// Offline support: the app shell is cached; pages try the network first (revalidated, never a stale HTTP copy) so updates arrive, fonts are cached once.
const VERSION = "%s";
const SHELL = ["./", "index.html", "app.js?v=" + VERSION, "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open("app-" + VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("app-") && k !== "app-" + VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com") {
    e.respondWith(caches.open("fonts").then(c => c.match(req).then(hit => hit || fetch(req).then(res => { c.put(req, res.clone()); return res; }))));
    return;
  }
  if (url.origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(fetch(req.url, { cache: "no-cache", credentials: "same-origin" }).then(res => { const copy = res.clone(); caches.open("app-" + VERSION).then(c => c.put("index.html", copy)); return res; })
      .catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
''' % ver)
# icons are drawn once (they need Pillow and the Inter font); an existing icon is kept
def icon(size, pad, path):
    path = out(path)
    if os.path.exists(path): return
    from PIL import Image, ImageDraw, ImageFont
    S = size * 4
    im = Image.new('RGB', (S, S), '#F2C230')
    d = ImageDraw.Draw(im)
    r = S * (0.5 - pad)
    c = S / 2
    d.ellipse([c - r, c - r, c + r, c + r], fill='#F2C230', outline='#1F7A4A', width=int(S * 0.045))
    f = ImageFont.truetype('/usr/share/fonts/opentype/inter/InterDisplay-Bold.otf', int(r * 1.05))
    d.text((c, c + S * 0.01), 'W', font=f, fill='#16201C', anchor='mm')
    im.resize((size, size), Image.LANCZOS).save(path)
icon(180, 0.12, 'icon-180.png')
icon(192, 0.12, 'icon-192.png')
icon(512, 0.12, 'icon-512.png')
icon(512, 0.2, 'icon-maskable-512.png')
open(out('.nojekyll'), 'w').write('')
open(out('README.md'), 'w').write('''# Wortschatz Alltag

Application pour apprendre l'allemand du quotidien (A1 à B2) : vocabulaire, grammaire, verbes et phrases.

Version installable et hors ligne, publiée avec GitHub Pages. Sur iPhone : ouvrir l'adresse dans Safari, puis Partager, « Sur l'écran d'accueil ».

La progression est enregistrée sur l'appareil. Réglages, Sauvegarde : exporter ou importer la progression.

## Quiz

La rubrique Quiz est une page de cartes, groupées par thème :

- **Mots** : Vocabulaire (QCM, saisie, genre, pluriels).
- **Verbes** : conjugaison et verbes à préposition.
- **Grammaire** : Déclinaisons, Ordre des mots et Phrases, qui lancent directement l'exercice.
- **Écoute et révision** : Dictée (si le navigateur sait lire l'audio) et Mes erreurs, avec le nombre d'erreurs à corriger.

Chaque carte ouvre l'écran correspondant, avec « ← Quiz » pour revenir. Toucher « Quiz » dans la barre de rubriques ramène toujours à cette page.

## Grammaire

La rubrique Grammaire sert à lire et à apprendre. Elle a trois pages, chacune faite de parties que l'on déplie ou replie (la première est ouverte au départ, le choix est conservé) :

- **Fiches** : les fiches, les déclinaisons et l'ordre des mots.
- **Verbes** : les verbes irréguliers et les verbes à préposition.
- **Listes** : le lexique et les situations (exemples de phrases).

Un lien « S'entraîner → » lance, depuis la page de lecture, le même exercice que dans Quiz.

## Rubrique IKI

La rubrique IKI (les cours de l'école) sert à peu de monde : elle est masquée par défaut. Réglages, « Afficher IKI » l'ajoute à la barre de rubriques. Elle apparaît d'elle-même pour qui a déjà ajouté ou modifié un cours IKI, ou travaillé des mots IKI. Éteindre l'interrupteur la masque à nouveau, sans rien effacer de la progression.

## Téléphone et ordinateur

Une seule app, qui s'adapte à la largeur de l'écran :

- **Téléphone et tablette** (moins de 1000 px de large) : barre de rubriques en bas, une colonne.
- **Ordinateur** (1000 px et plus) : barre de rubriques à gauche, pages sur deux colonnes (par exemple les modes du quiz à gauche et les thèmes à droite), fiches de grammaire ouvertes à côté de la barre.

Captures dans [`docs/captures/`](docs/captures/).

## Sources et construction

Les sources sont dans [`src/`](src/) :

- `app.html` : l'app (interface, code, style), avec des repères `/*VOCAB*/`, `/*IKI*/`… où la construction insère les contenus.
- `vocab.txt`, `exemples.txt`, `grammaire.txt`, `irreguliers.txt`, `verbes-prep.txt`, `phrases.txt` : les contenus en français, un élément par ligne, champs séparés par `|`. Chaque fichier a sa traduction `-en.txt` et `-es.txt`, ligne pour ligne.
- `iki/cours.txt` : les cours IKI (`@date` puis `allemand|français|pluriel|formes`), avec `cours-en.txt`, `cours-es.txt` et `cours-de.txt` (synonyme ou définition en allemand), ligne pour ligne.
- `i18n-en.json`, `i18n-es.json` : les textes de l'interface traduits.
- `build.py` assemble tout dans `src/index.html` (une version en un seul fichier) ; `build_pwa.py` en tire les fichiers publiés à la racine.
- `tools/` : vérifications des traductions (`python3 tools/check_content.py vocab.txt vocab-en.txt`).

Après une modification dans `src/`, reconstruire avec `./build.sh` (Python 3, sans dépendance) et committer les fichiers régénérés à la racine. Le workflow `.github/workflows/build.yml` vérifie, sur chaque PR, que les fichiers publiés correspondent bien aux sources.

## Hébergement

Le dépôt contient aussi l'app déjà construite, à la racine : `index.html`, son script `app.js`, le service worker `sw.js`, le manifeste et les icônes. Deux hébergements la servent :

- **GitHub Pages**, à chaque push sur `main`.
- **Une image Docker** (nginx non root, port 8080), construite et testée par `.github/workflows/image.yml`, puis publiée sur `ghcr.io/lorisgith/wortschatz:main-<horodatage>-<commit>`. `smoke.sh <url>` vérifie le site servi : `./smoke.sh http://localhost:8080`.

### Content-Security-Policy

`nginx.conf` envoie avec la page un en-tête `Content-Security-Policy` (issue #2). Il n'autorise que :

| Directive | Valeur | Pourquoi |
|---|---|---|
| `script-src` | `'self'` | le seul script est `app.js`, aucun script dans la page |
| `style-src` | `'self' 'unsafe-inline' https://fonts.googleapis.com` | bloc `<style>` et attributs `style="…"` de la page, feuille des polices |
| `font-src` | `https://fonts.gstatic.com` | fichiers des polices |
| `img-src` | `'self' data: blob:` | photos des cours IKI |
| `connect-src` | `'self' data:` | l'app relit ces photos avec `fetch()` |

Tout le reste est fermé (`default-src 'self'`, `object-src 'none'`, `base-uri 'none'`, `frame-ancestors 'none'`). Si l'app charge un jour une ressource d'un autre domaine, il faut l'ajouter à la directive concernée dans `nginx.conf` ; la console du navigateur signale tout ce que la règle bloque. Les autres en-têtes de sécurité (HSTS, `X-Frame-Options`…) sont ajoutés par le proxy devant le serveur.

`app.js` est appelé avec `?v=<version>` : une nouvelle page ne peut pas tourner avec un ancien script gardé en cache.

## Travailler sur le projet

Les tâches sont suivies dans les [issues GitHub](https://github.com/LorisGitH/wortschatz/issues), triées avec les libellés `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human` et `wontfix`. Les instructions pour Claude sont dans [`CLAUDE.md`](CLAUDE.md), et la configuration des skills d'ingénierie dans [`docs/agents/`](docs/agents/).

Les skills d'ingénierie viennent du plugin `mattpocock-skills` ([mattpocock/skills](https://github.com/mattpocock/skills)), déclaré dans [`.claude/settings.json`](.claude/settings.json) : en ouvrant le dépôt dans Claude Code (terminal ou VS Code), accepter l'installation proposée, puis taper `/` pour retrouver `mattpocock-skills:triage`, `mattpocock-skills:to-tickets`, etc.

## Licence

[PolyForm Noncommercial 1.0.0](LICENSE.md) : usage libre pour un usage personnel, l'étude ou un organisme non commercial (école, association…). Tout usage commercial est interdit sans l'accord de l'auteur.
''')
# the license travels with the published files
import shutil
if os.path.exists('LICENSE.md') and os.path.abspath(OUT) != os.path.abspath('.'): shutil.copy('LICENSE.md', out('LICENSE.md'))
print('ok', ver)
