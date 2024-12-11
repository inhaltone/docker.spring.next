// 'use server'

import EngineerService from "@/services/EngineerService";
import {FormStatus} from "@/types/form";
import {SaveEngineerFormState} from "@/types/engineer";

export async function addEngineerAction(prev: SaveEngineerFormState | null, formData: FormData) {
    const firstName = formData.get("name") as string;
    const email = formData.get("email") as string;

    try {
        const response = await EngineerService.saveEngineer({
            firstName: firstName,
            email: email
        })
        console.log('response::', response);
    } catch (e) {
    console.error('SAVE EXCEPTION::::', e)
    }

    return {
        firstName: firstName,
        email: email,
        status: FormStatus.SUCCESS
    };
}