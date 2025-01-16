import {GetAllUniEngineersPagedRequest, SaveEngineerRequest, UniEngineerControllerApi} from "@/api/openapi";

export default class EngineerServiceApi {
    private static apiInstance: UniEngineerControllerApi | null = null;

    private static get api(): UniEngineerControllerApi {
        if (!EngineerServiceApi.apiInstance) {
            EngineerServiceApi.apiInstance = new UniEngineerControllerApi();
        }
        return EngineerServiceApi.apiInstance;
    }

    public async getAllEngineersPaged(params: GetAllUniEngineersPagedRequest) {
        // Try catch and get exceptions
        // const params = this.queryParams as GetAllUniEngineersPagedRequest;
        return EngineerServiceApi.api.getAllUniEngineersPaged(params);
    }

    public async save(params: SaveEngineerRequest) {
        return EngineerServiceApi.api.saveEngineer(params);
    }
}