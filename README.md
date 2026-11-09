# Wortschatz Alltag

Application pour apprendre l'allemand du quotidien (A1 à B2) : vocabulaire, grammaire, verbes et phrases.

Version installable et hors ligne, publiée avec GitHub Pages. Sur iPhone : ouvrir l'adresse dans Safari, puis Partager, « Sur l'écran d'accueil ».

La progression est enregistrée sur l'appareil. Réglages, Sauvegarde : exporter ou importer la progression. Seul l'examen peut envoyer du texte hors de l'appareil : voir « Correction avec LanguageTool ».

## Programme

La page d'accueil est un programme, comme à l'école : on travaille une unité, puis on la valide par un examen écrit pour passer à la suivante. Les autres rubriques restent libres d'accès, et le réglage de niveau ne filtre que l'entraînement libre. Sous l'unité en cours, un bandeau donne la série, l'objectif du jour et les mots à revoir. La carte « Revoir mes erreurs » y apparaît tant qu'il reste des erreurs.

- **Unités** : 9 unités pour l'instant, 5 en A1 et 4 en A2. Sans unité validée, seule la première est ouverte. Après la dernière unité disponible, le programme s'arrête et l'indique.
- **Travail personnel** : une liste qui se coche seule d'après la progression (fiches acquises, mots et verbes de l'unité réussis une fois). Elle ne bloque jamais l'examen. L'entraînement alimente les révisions comme les autres exercices.
- **Examen direct** : on peut passer l'examen de la prochaine unité verrouillée, et seulement celle-là. Le réussir valide l'unité.

### Examen

40 questions écrites, sans QCM, tirées au hasard : 12 phrases à trous, 8 formes verbales ou prépositions, 12 mots vers l'allemand (avec article et pluriel si pertinent), 8 phrases à traduire. Les phrases à trous et à traduire sont réservées à l'examen : `build.py` refuse celles que montrent les fiches, les listes, les exercices (trous remplis compris) ou les gabarits des Déclinaisons.

Une question par écran, navigation libre, vue d'ensemble des questions sans réponse, aucune correction avant de rendre la copie. L'examen en cours reste sur l'appareil et reprend avec ses réponses après fermeture de l'app. La durée de 60 minutes est indicative : le temps ne s'écoule que lorsque l'examen est à l'écran, et un dépassement est noté sans pénalité.

Notation, sur 40, avec 32 points pour valider :

- **Réponses courtes** : juste ou faux. Majuscule obligatoire aux noms et aux prénoms, même en tête de phrase ; les autres mots peuvent commencer une phrase sans majuscule. `ae`, `oe`, `ue`, `ss` sont acceptés pour `ä`, `ö`, `ü`, `ß`, mais `Muller` pour `Müller` est faux. Terminaisons et articles exacts.
- **Vocabulaire** : une lettre fausse est tolérée dans un mot de 5 lettres ou plus, et signalée dans le corrigé. Pas dans l'article, le pluriel, une majuscule ou un umlaut.
- **Phrases à traduire** : 1 point pour une version acceptée, 0,5 point à un mot près (le corrigé montre la différence), sinon 0. La ponctuation ne compte pas.

#### Correction avec LanguageTool

Une phrase à traduire absente de la liste acceptée vaut 1 point si elle contient tous ses mots-clés (déclarés dans `programme.txt`) et que [LanguageTool](https://languagetool.org) n'y signale aucune erreur, quel qu'en soit le type (une minuscule en tête de phrase en est une pour lui). Sinon elle garde sa note sur les réponses connues : LanguageTool n'en retire jamais et n'intervient pas sur les réponses courtes. Ses messages, en allemand, apparaissent dans le corrigé.

- **Ce qui est envoyé** : à la remise de la copie, chaque phrase à traduire écrite et pas déjà juste, seule, en POST vers `https://api.languagetool.org/v2/check`, avec la langue `de-DE`. Ni cookie, ni identifiant, ni progression. L'adresse IP de l'appareil est vue par le service, comme pour toute requête. Les réécritures après un échec ne sont pas envoyées.
- **Qui les reçoit** : Learneo, Inc. (États-Unis), responsable de traitement d'après sa [politique de confidentialité](https://languagetool.org/legal/privacy), lue le 2026-11-09. Elle ne donne aucune durée de conservation des textes ni des adresses IP, et ne dit pas si un appel anonyme à l'API relève de sa promesse de ne pas entraîner ses modèles sur les textes des utilisateurs de LanguageTool. L'écran de début d'examen (la carte de l'unité) résume cela, avec le lien vers languagetool.org.
- **Désactiver** : Réglages, « Correction avec LanguageTool ». La correction se fait alors sur les seules réponses connues, et rien n'est envoyé. Les phrases d'une copie remise pendant que le réglage est désactivé ne sont jamais vérifiées ensuite ; celles déjà en attente restent sur l'appareil et ne sont reproposées que si on le réactive.
- **Limite** : au plus 15 requêtes et 60 Ko par minute, 18 Ko par requête (limites du service : 20 requêtes, 75 Ko, 20 Ko). Le compteur reste sur l'appareil.
- **Hors ligne, limite atteinte ou erreur de l'API** : la copie est corrigée tout de suite sur les réponses connues. Les phrases non vérifiées sont gardées sur l'appareil, et un bouton propose de les vérifier quand le réseau revient, sur la carte de l'unité, le corrigé et l'écran de réécriture. Cette vérification peut transformer un échec en réussite. Elles sont perdues à la remise d'une nouvelle copie de la même unité, qui remplace la précédente. Le service est gratuit, sans garantie, et peut changer sans préavis.

Après un échec, il faut réécrire correctement chaque point manqué, avec le corrigé et le lien vers la fiche. Le nouvel examen s'ouvre alors : c'est un nouveau tirage qui reprend ces points. Une validation est définitive. Un examen validé se repasse librement et le meilleur score est gardé.

Un examen ne modifie ni les révisions, ni Mes erreurs, ni l'objectif du jour. Les validations et les meilleurs scores passent par la synchronisation, l'export et l'import.

## Quiz

La rubrique Quiz est une page de cartes, groupées par thème :

- **Mots** : Vocabulaire (QCM, saisie, genre, pluriels).
- **Verbes** : conjugaison et mots à préposition (verbes, noms et adjectifs).
- **Grammaire** : Déclinaisons, Ordre des mots et Phrases, qui lancent directement l'exercice.
- **Écoute et révision** : Dictée (si le navigateur sait lire l'audio) et Mes erreurs, avec le nombre d'erreurs à corriger.

Chaque carte ouvre l'écran correspondant, avec « ← Quiz » pour revenir. Toucher « Quiz » dans la barre de rubriques ramène toujours à cette page.

## Grammaire

La rubrique Grammaire sert à lire et à apprendre. Elle a trois pages, chacune faite de parties que l'on déplie ou replie (la première est ouverte au départ, le choix est conservé) :

- **Fiches** : les fiches, les déclinaisons et l'ordre des mots.
- **Verbes** : les verbes irréguliers et les mots à préposition (verbes, noms et adjectifs).
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
- `programme.txt` : les unités du programme, avec leurs fiches, verbes, mots et phrases réservées à l'examen, chaque phrase à traduire avec ses mots-clés (format en tête du fichier), et sa traduction `-en.txt` et `-es.txt`, ligne pour ligne. `build.py` vérifie les références et que chaque unité permet un examen complet.
- `iki/cours.txt` : les cours IKI (`@date` puis `allemand|français|pluriel|formes`), avec `cours-en.txt`, `cours-es.txt` et `cours-de.txt` (synonyme ou définition en allemand), ligne pour ligne.
- `i18n-en.json`, `i18n-es.json` : les textes de l'interface traduits.
- `build.py` assemble tout dans `src/index.html` (une version en un seul fichier) ; `build_pwa.py` en tire les fichiers publiés à la racine.
- `tools/` : vérifications des traductions (`python3 tools/check_content.py vocab.txt vocab-en.txt`) et tests de la notation, du tirage, du statut des unités et de la fusion de la progression (`python3 tools/test_programme.py`, avec Chrome).

Après une modification dans `src/`, reconstruire avec `./build.sh` (Python 3, sans dépendance) et committer les fichiers régénérés à la racine. Le workflow `.github/workflows/build.yml` vérifie, sur chaque PR, que les fichiers publiés correspondent bien aux sources, et lance ces tests.

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
| `connect-src` | `'self' data: https://api.languagetool.org` | l'app relit ces photos avec `fetch()` ; l'examen vérifie les phrases libres |

Tout le reste est fermé (`default-src 'self'`, `object-src 'none'`, `base-uri 'none'`, `frame-ancestors 'none'`). Si l'app charge un jour une ressource d'un autre domaine, il faut l'ajouter à la directive concernée dans `nginx.conf` ; la console du navigateur signale tout ce que la règle bloque. Les autres en-têtes de sécurité (HSTS, `X-Frame-Options`…) sont ajoutés par le proxy devant le serveur.

`app.js` est appelé avec `?v=<version>` : une nouvelle page ne peut pas tourner avec un ancien script gardé en cache.

## Travailler sur le projet

Les tâches sont suivies dans les [issues GitHub](https://github.com/LorisGitH/wortschatz/issues), triées avec les libellés `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human` et `wontfix`. Les instructions pour Claude sont dans [`CLAUDE.md`](CLAUDE.md), et la configuration des skills d'ingénierie dans [`docs/agents/`](docs/agents/).

Les skills d'ingénierie viennent du plugin `mattpocock-skills` ([mattpocock/skills](https://github.com/mattpocock/skills)), déclaré dans [`.claude/settings.json`](.claude/settings.json) : en ouvrant le dépôt dans Claude Code (terminal ou VS Code), accepter l'installation proposée, puis taper `/` pour retrouver `mattpocock-skills:triage`, `mattpocock-skills:to-tickets`, etc.

## Licence

[PolyForm Noncommercial 1.0.0](LICENSE.md) : usage libre pour un usage personnel, l'étude ou un organisme non commercial (école, association…). Tout usage commercial est interdit sans l'accord de l'auteur.
