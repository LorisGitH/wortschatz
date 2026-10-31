#!/bin/sh
# Reconstruit l'app depuis src/ : src/index.html (version en un seul fichier),
# puis les fichiers publiés à la racine (index.html, app.js, sw.js, manifeste, README).
set -e
cd "$(dirname "$0")/src"
python3 build.py
python3 build_pwa.py ..
