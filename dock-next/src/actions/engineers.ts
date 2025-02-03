"use server"

import {EngineerServiceClientApi} from "@/api/api";
import {GetAllUniEngineersPagedRequest} from "@/api/openapi";

export async function getAllEngineersPagedAction(params: GetAllUniEngineersPagedRequest) {
    return await EngineerServiceClientApi.getAllEngineersPaged(params);
}