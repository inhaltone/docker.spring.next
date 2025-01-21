npx @openapitools/openapi-generator-cli generate \
  -i http://localhost:8080/v3/api-docs \
  -g typescript-fetch \
  -o ./generated \
  --template-dir ./templates \
  --additional-properties=stringEnums=false \
  --additional-properties=supportsES6=true \
  --additional-properties=prefixParameterInterfaces=false \
  --additional-properties=useSingleRequestParameter=true
