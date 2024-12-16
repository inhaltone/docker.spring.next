import {PageResponse} from "@/types/serviceTypes";

export interface EngineerModel {
    firstName: string;
    email: string;
    id: number;
}

export interface EngineerPagedResponse extends PageResponse{
    content: Array<EngineerModel> | [];
}

export interface SaveEngineerParams {
    firstName: string;
    email: string;
}



