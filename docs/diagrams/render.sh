#!/usr/bin/env bash
# Render Mermaid diagrams to PNG (JetBrains dark palette, see mermaid-config.json).
set -euo pipefail
cd "$(dirname "$0")"

for d in architecture request-flow; do
  npx -y @mermaid-js/mermaid-cli@11 -q -i "$d.mmd" -o "$d.png" -c mermaid-config.json -b '#1E1F22' -s 2 -w 1000
done
