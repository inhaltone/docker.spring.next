import {Configuration, UniEngineerControllerApi, UniUserControllerApi} from "@/api/openapi";

// Used from Server Components / Server Actions only, so the base URL may be an internal Docker hostname.
const configuration = new Configuration({
    basePath: process.env.API_BASE_URL ?? "http://localhost:8080",
});

export const engineersApi = new UniEngineerControllerApi(configuration);
export const usersApi = new UniUserControllerApi(configuration);
