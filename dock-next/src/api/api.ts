import EngineerServiceApi from "@/api/services/EngineerService";
import {Configuration, DefaultConfig} from "@/api/openapi";
import {interceptor} from "@/api/apiInterceptors";

DefaultConfig.config = new Configuration({
    middleware: [interceptor],
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    headers: {
        "X-Internal-Path": "/api/some-entity",
        "X-Backend-Application": "backend"
    },
});

export const EngineerServiceClientApi = new EngineerServiceApi();