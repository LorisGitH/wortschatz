# Wortschatz Alltag

Application pour apprendre l'allemand du quotidien (A1 à B2) : vocabulaire, grammaire, verbes et phrases.

Version installable et hors ligne, publiée avec GitHub Pages. Sur iPhone : ouvrir l'adresse dans Safari, puis Partager, « Sur l'écran d'accueil ».

La progression est enregistrée sur l'appareil. Réglages, Sauvegarde : exporter ou importer la progression.

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
