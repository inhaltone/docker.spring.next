"use server"

import {revalidatePath} from "next/cache";
import {engineersApi} from "@/api/client";
import {getApiErrorMessage} from "@/api/errors";
import {FormActionState, FormStatus} from "@/types/form";

export async function deleteEngineerAction(_prev: FormActionState, formData: FormData): Promise<FormActionState> {
    const id = Number(formData.get("engineerId"));

    try {
        await engineersApi.deleteEngineer({id});
        revalidatePath("/engineers");
        return {status: FormStatus.SUCCESS, message: `Engineer #${id} has been deleted`};
    } catch (error) {
        return {status: FormStatus.FAIL, message: await getApiErrorMessage(error)};
    }
}
