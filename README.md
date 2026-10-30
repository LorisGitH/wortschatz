# Wortschatz Alltag

Application pour apprendre l'allemand du quotidien (A1 à B2) : vocabulaire, grammaire, verbes et phrases.

Version installable et hors ligne, publiée avec GitHub Pages. Sur iPhone : ouvrir l'adresse dans Safari, puis Partager, « Sur l'écran d'accueil ».

La progression est enregistrée sur l'appareil. Réglages, Sauvegarde : exporter ou importer la progression.

## Téléphone et ordinateur

Une seule app, qui s'adapte à la largeur de l'écran :

- **Téléphone et tablette** (moins de 1000 px de large) : barre de rubriques en bas, une colonne.
- **Ordinateur** (1000 px et plus) : barre de rubriques à gauche, pages sur deux colonnes (par exemple les modes du quiz à gauche et les thèmes à droite), fiches de grammaire ouvertes à côté de la barre.

Captures dans [`docs/captures/`](docs/captures/).

## Hébergement

Le dépôt contient l'app déjà construite : `index.html`, son script `app.js`, le service worker `sw.js`, le manifeste et les icônes. Deux hébergements la servent :

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

## Licence

[PolyForm Noncommercial 1.0.0](LICENSE.md) : usage libre pour un usage personnel, l'étude ou un organisme non commercial (école, association…). Tout usage commercial est interdit sans l'accord de l'auteur.
