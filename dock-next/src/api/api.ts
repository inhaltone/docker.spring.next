import {Configuration, DefaultConfig} from "@/output";
import EngineerServiceApi from "@/api/services/engineerService";


DefaultConfig.config = new Configuration({
    headers: {
        "X-Internal-Path": "/api/some-entity",
        "X-Backend-Application": "backend"
    },
});


export const engineerServiceClientApi = new EngineerServiceApi();
