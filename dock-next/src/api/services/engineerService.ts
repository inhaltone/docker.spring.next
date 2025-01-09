import ApiRequestBuilder from "@/api/client/apiRequestBuilder";
import {ApiControllerApi, GetAllUniEngineersPagedRequest} from "@/output";

export default class EngineerServiceApi extends ApiRequestBuilder {
    private static apiInstance: ApiControllerApi | null = null;

    private static get api(): ApiControllerApi {
        if (!EngineerServiceApi.apiInstance) {
            EngineerServiceApi.apiInstance = new ApiControllerApi();
        }
        return EngineerServiceApi.apiInstance;
    }

    public async getAllEngineersPaged() {
        const params = this.queryParams as GetAllUniEngineersPagedRequest;
        return EngineerServiceApi.api.getAllUniEngineersPaged(params);
    }
}