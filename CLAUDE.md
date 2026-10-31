# Wortschatz Alltag

App pour apprendre l'allemand du quotidien (A1 à B2), publiée sur GitHub Pages et en image Docker (voir `README.md`).

## Conventions

- Les sources sont dans `src/` (`app.html`, contenus `*.txt`, cours IKI dans `src/iki/`, traductions). On modifie les sources, puis `./build.sh` régénère les fichiers publiés à la racine (`index.html`, `app.js`, `sw.js`, manifeste, README), qu'on committe avec. Ne jamais modifier ces fichiers construits à la main : le workflow `build` le refuse.
- Le README est généré par `src/build_pwa.py` : le modifier là.
- Les fichiers de contenu ne doivent contenir ni `` ` ``, ni `${`, ni `\` (`build.py` le vérifie). En allemand, guillemets „…“.
- Une traduction `-en.txt` / `-es.txt` garde exactement les mêmes lignes que le fichier français ; seuls les champs en français changent (`python3 tools/check_content.py vocab.txt vocab-en.txt` depuis `src/`).
- Toute modification passe par une branche et une PR, avec la documentation à jour (README). Pas de fusion sans le feu vert du propriétaire.
- Messages de commit, PR et documentation en français.

## Agent skills

### Issue tracker

Les issues vivent dans les GitHub Issues de `LorisGitH/wortschatz` (CLI `gh`). See `docs/agents/issue-tracker.md`.

### Triage labels

Les cinq libellés par défaut (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context : un `GLOSSARY.md` et `docs/adr/` à la racine, créés au besoin. See `docs/agents/domain.md`.
