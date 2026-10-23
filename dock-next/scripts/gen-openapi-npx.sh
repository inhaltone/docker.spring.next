#!/usr/bin/env bash
# Generate the typed API client from the backend OpenAPI spec using the npm wrapper (requires Java).
# Usage: OPENAPI_SPEC=http://localhost:8080/v3/api-docs ./scripts/gen-openapi-npx.sh
set -euo pipefail

cd "$(dirname "$0")/.."

OPENAPI_SPEC="${OPENAPI_SPEC:-http://localhost:8080/v3/api-docs}"
OUTPUT_DIR="./src/api/openapi"

echo "Generating TypeScript client from ${OPENAPI_SPEC} -> ${OUTPUT_DIR}"

npx openapi-generator-cli generate \
  -i "${OPENAPI_SPEC}" \
  -g typescript-fetch \
  -o "${OUTPUT_DIR}" \
  --template-dir ./templates \
  --additional-properties=stringEnums=true,supportsES6=true,prefixParameterInterfaces=false,useSingleRequestParameter=true,withInterfaces=true
