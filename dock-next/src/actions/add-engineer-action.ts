'use server'

import EngineerService from "@/services/EngineerService";
import {FormActionState, FormStatus} from "@/types/form";
import {revalidatePath} from "next/cache";

export async function addEngineerAction(prev: FormActionState, formData: FormData): Promise<FormActionState> {
    const firstName = formData.get("name") as string;
    const email = formData.get("email") as string;

    try {
        const response = await EngineerService.saveEngineer({
            firstName: firstName,
            email: email
        })

        revalidatePath('/engineers');

        return {
            status: FormStatus.SUCCESS,
            message: `Great job!! Engineer with ${response.email} has been added!`
        };

    } catch (error) {
        console.log('error:', error);
        return {
            status: FormStatus.FAIL,
            message: String(error)
        };
    }
}