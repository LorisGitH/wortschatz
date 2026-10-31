# Wortschatz Alltag

App pour apprendre l'allemand du quotidien (A1 à B2), publiée sur GitHub Pages et en image Docker (voir `README.md`).

## Conventions

- Le dépôt contient l'app **déjà construite** (`index.html`, `app.js`, `sw.js`, manifeste, icônes). Les sources (`app.html`, `build.py`, `build_pwa.py`, contenus) sont gérées hors du dépôt ; ne pas modifier `app.js` ou `index.html` à la main.
- Toute modification passe par une branche et une PR, avec la documentation à jour (README). Pas de fusion sans le feu vert du propriétaire.
- Messages de commit, PR et documentation en français.

## Agent skills

### Issue tracker

Les issues vivent dans les GitHub Issues de `LorisGitH/wortschatz` (CLI `gh`). See `docs/agents/issue-tracker.md`.

### Triage labels

Les cinq libellés par défaut (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context : un `GLOSSARY.md` et `docs/adr/` à la racine, créés au besoin. See `docs/agents/domain.md`.
