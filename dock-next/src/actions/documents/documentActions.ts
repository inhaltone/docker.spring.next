"use server"
import {EngineerServiceClientApi} from "@/api/api";
import {SaveEngineerRequest} from "@/api/openapi";

export function saveEngineerAction(params: SaveEngineerRequest) {
    return EngineerServiceClientApi.api().saveEngineer(params);
}