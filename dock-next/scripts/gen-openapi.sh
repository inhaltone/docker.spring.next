#!/usr/bin/env bash

OUTPUT_PATH="/src/api/openapi"

echo "========================================================="
echo "Generating models and services in typescript from openapi"
echo "========================================================="
sleep 1

docker run --rm \
  -v "${PWD}":/local openapitools/openapi-generator-cli generate \
  -i http://host.docker.internal:8080/v3/api-docs \
  -g typescript-fetch \
  -o /local$OUTPUT_PATH \
  --template-dir=/local/templates \
  --additional-properties=stringEnums=true \
  --additional-properties=supportsES6=true \
  --additional-properties=prefixParameterInterfaces=false \
  --additional-properties=useSingleRequestParameter=true \
  --additional-properties=validationAttributes=false \
  --additional-properties=withInterfaces=true \

echo "OUTPUT DIR:: => ${PWD}"$OUTPUT_PATH