import EngineerServiceApi from "@/api/services/engineerService";
import {Configuration, DefaultConfig} from "@/api/openapi";
import {interceptor} from "@/api/apiInterceptors";


DefaultConfig.config = new Configuration({
    middleware: [interceptor],
    headers: {
        "X-Internal-Path": "/api/some-entity",
        "X-Backend-Application": "backend"
    },
});


export const engineerServiceClientApi = new EngineerServiceApi();
