import {ApiControllerApi, GetAllUniEngineersPagedRequest} from "@/api/openapi";

export default class EngineerServiceApi {
    private static apiInstance: ApiControllerApi | null = null;

    private static get api(): ApiControllerApi {
        if (!EngineerServiceApi.apiInstance) {
            EngineerServiceApi.apiInstance = new ApiControllerApi();
        }
        return EngineerServiceApi.apiInstance;
    }

    public async getAllEngineersPaged(params: GetAllUniEngineersPagedRequest) {
        // Try catch and get exceptions
        // const params = this.queryParams as GetAllUniEngineersPagedRequest;
        return EngineerServiceApi.api.getAllUniEngineersPaged(params);
    }
}