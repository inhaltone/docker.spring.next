#!/usr/bin/env bash
# Generate Zod schemas from the generated OpenAPI models.
set -euo pipefail

cd "$(dirname "$0")/.."

INPUT_DIR="./src/api/openapi/models"
OUTPUT_DIR="./src/schemas"

mkdir -p "${OUTPUT_DIR}"

for file in "${INPUT_DIR}"/*.ts; do
  filename=$(basename "${file}" .ts)
  [[ "${filename}" == "index" ]] && continue
  npx ts-to-zod "${file}" "${OUTPUT_DIR}/${filename}Schema.ts"
done
