# dock-next

Next.js 15 (App Router, React 19) frontend. See the [root README](../README.md) for the full picture.

```bash
npm install
API_BASE_URL=http://localhost:8080 npm run dev
```

| Script                        | Description                                                    |
|-------------------------------|----------------------------------------------------------------|
| `npm run dev`                 | Start the dev server on http://localhost:3000                  |
| `npm run build` / `start`     | Production build (standalone output) / serve it                |
| `npm run lint` / `typecheck`  | ESLint / TypeScript checks                                     |
| `npm run generate`            | Regenerate the OpenAPI client and Zod schemas (API must be up) |
| `npm run generate:api:docker` | Same client generation, using the openapi-generator image      |

Set `OPENAPI_SPEC` to point the generators at another URL or a local JSON file.
