import EngineerServiceApi from "@/api/services/EngineerService";
import {Configuration, DefaultConfig} from "@/api/openapi";
import {interceptor} from "@/api/apiInterceptors";

DefaultConfig.config = new Configuration({
    middleware: [interceptor],
    basePath: 'http://localhost:8080',
    headers: {
        "X-Internal-Path": "/api/some-entity",
        "X-Backend-Application": "backend"
    },
});

export const EngineerServiceClientApi = new EngineerServiceApi();
