'use server'

import EngineerService from "@/services/EngineerService";
import {revalidatePath} from "next/cache";
import {FormActionState, FormStatus} from "@/types/form";

export async function deleteEngineerAction(prev: FormActionState, formData: FormData): Promise<FormActionState> {
    const engineerId = formData.get("engineerId") as string;

    try {
        await EngineerService.delete(engineerId);

        revalidatePath('/engineers');
        return {
            status: FormStatus.SUCCESS,
            message: `The user with id: ${engineerId} has been deleted forever!!`
        }

    } catch (e) {
        console.error(e);

        return Promise.reject({
            status: FormStatus.FAIL,
            message: `The user with id: ${engineerId} does not belong to our db!!`
        });
    }


}