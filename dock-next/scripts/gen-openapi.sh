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
  --additional-properties=stringEnums=false,supportsES6=true,prefixParameterInterfaces=false,useSingleRequestParameter=true

echo "OUTPUT DIR:: => ${PWD}"$OUTPUT_PATH