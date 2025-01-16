#!/usr/bin/env bash

echo "========================================================="
echo "Generating models and services in typescript from openapi"
echo "========================================================="
sleep 2

docker run --rm \
  -v "${PWD}":/local openapitools/openapi-generator-cli generate \
  -i http://host.docker.internal:8080/v3/api-docs \
  -g typescript-fetch \
  -o /local/src/api/openapi \
  --additional-properties=stringEnums=false,supportsES6=true