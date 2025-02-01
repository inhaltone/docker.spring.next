#!/usr/bin/env bash

# Directory containing TypeScript files
INPUT_DIR="./src/api/openapi/models"
OUTPUT_DIR="./src/schemas"

# Create the output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Loop through all .ts files in the input directory
for file in "$INPUT_DIR"/*.ts; do
  # Extract the filename without the extension
  filename=$(basename "$file" .ts)

  # Generate the Zod schema for each file
  npx ts-to-zod "$file" "$OUTPUT_DIR/${filename}Schema.ts"

  echo "Generated Zod schema for $file -> $OUTPUT_DIR/${filename}Schema.ts"
done