# The static app on an unprivileged nginx: runs as user 101 (non-root) on port 8080, so the
# Pod passes Pod Security `restricted`. Only the listed files are copied, so everything else
# (README, LICENSE, CI files) answers 404.
# https://github.com/nginx/docker-nginx-unprivileged#readme
# The tag exists with an arm64 build (observed 2026-10-30 on Docker Hub's tag API,
# hub.docker.com/v2/repositories/nginxinc/nginx-unprivileged/tags/1.31.6-alpine).
# Pod Security `restricted`: https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted
FROM docker.io/nginxinc/nginx-unprivileged:1.31.6-alpine

# Links the GHCR package to this repo:
# https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry
LABEL org.opencontainers.image.source="https://github.com/LorisGitH/wortschatz"

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html app.js sw.js manifest.webmanifest icon-180.png icon-192.png icon-512.png icon-maskable-512.png /usr/share/nginx/html/
