"use server"

import {revalidatePath} from "next/cache";
import {z} from "zod";
import {engineersApi} from "@/api/client";
import {getApiErrorMessage} from "@/api/errors";
import {uniEngineerSchema} from "@/schemas/UniEngineerSchema";
import {FormActionState, FormStatus} from "@/types/form";

const formSchema = uniEngineerSchema.omit({id: true}).extend({
    firstName: z.string().trim().min(2).max(100),
    email: z.string().trim().email(),
});

export async function addEngineerAction(_prev: FormActionState, formData: FormData): Promise<FormActionState> {
    const parsed = formSchema.safeParse(Object.fromEntries(formData));

    if (!parsed.success) {
        return {
            status: FormStatus.FAIL,
            message: "Please fix the highlighted fields",
            fieldErrors: parsed.error.flatten().fieldErrors,
        };
    }

    try {
        const engineer = await engineersApi.createEngineer({uniEngineer: parsed.data});
        revalidatePath("/engineers");
        return {status: FormStatus.SUCCESS, message: `${engineer.firstName} has been added`};
    } catch (error) {
        return {status: FormStatus.FAIL, message: await getApiErrorMessage(error)};
    }
}
