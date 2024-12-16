'use server'

import EngineerService from "@/services/EngineerService";
import {revalidatePath} from "next/cache";

export async function deleteEngineerAction(prev: null, formData: FormData) {
    const engineerId = formData.get("engineerId") as string;

    try {
        const response = await EngineerService.delete(parseInt(engineerId));
        console.log(response);
    } catch (e) {
        return Promise.reject(e);
    }

    // Refetch the engineers after add engineer action
    revalidatePath('/engineers');

    return prev;
}