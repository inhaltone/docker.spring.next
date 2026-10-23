#!/usr/bin/env bash
# Generate the typed API client from the backend OpenAPI spec using the official Docker image.
# Usage: OPENAPI_SPEC=http://host.docker.internal:8080/v3/api-docs ./scripts/gen-openapi.sh
set -euo pipefail

cd "$(dirname "$0")/.."

OPENAPI_SPEC="${OPENAPI_SPEC:-http://host.docker.internal:8080/v3/api-docs}"
OUTPUT_DIR="src/api/openapi"

echo "Generating TypeScript client from ${OPENAPI_SPEC} -> ${OUTPUT_DIR}"

docker run --rm \
  -v "${PWD}:/local" \
  openapitools/openapi-generator-cli:v7.10.0 generate \
  -i "${OPENAPI_SPEC}" \
  -g typescript-fetch \
  -o "/local/${OUTPUT_DIR}" \
  --template-dir /local/templates \
  --additional-properties=stringEnums=true,supportsES6=true,prefixParameterInterfaces=false,useSingleRequestParameter=true,withInterfaces=true
