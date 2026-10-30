# The static app on an unprivileged nginx: runs as user 101 (non-root) on port 8080, so the
# Pod passes Pod Security `restricted`. Only the listed files are copied, so everything else
# (README, LICENSE, CI files) answers 404.
# https://github.com/nginx/docker-nginx-unprivileged#readme
FROM docker.io/nginxinc/nginx-unprivileged:1.31.6-alpine

LABEL org.opencontainers.image.source="https://github.com/LorisGitH/wortschatz"

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html sw.js manifest.webmanifest icon-180.png icon-192.png icon-512.png icon-maskable-512.png /usr/share/nginx/html/
