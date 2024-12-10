import {PageResponse} from "@/types/serviceTypes";
import {FormStatus} from "@/types/form";

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

export interface SaveEngineerFormState extends SaveEngineerParams{
    status: FormStatus
}


