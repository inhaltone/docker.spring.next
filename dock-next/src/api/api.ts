import EngineerServiceApi from "@/api/services/EngineerService";
import {Configuration, DefaultConfig} from "@/api/openapi";
import {interceptor} from "@/api/apiInterceptors";

DefaultConfig.config = new Configuration({
    middleware: [interceptor],
    basePath: process.env.BASE_PATH,
    headers: {
        "X-Internal-Path": "/api/some-entity",
        "X-Backend-Application": "backend"
    },
});

export const EngineerServiceClientApi = new EngineerServiceApi();
console.log('hello mother')
