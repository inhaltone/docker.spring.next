'use server'

import {FormActionState, FormStatus} from "@/types/form";
import {revalidatePath} from "next/cache";
import {EngineerServiceClientApi} from "@/api/api";
import AbstractRequestBuilder from "@/api/builders/AbstractRequestBuilder";
import {SaveEngineerRequest} from "@/api/openapi";

export async function addEngineerAction(prev: FormActionState, formData: FormData): Promise<FormActionState> {
    const firstName = formData.get("name") as string;
    const email = formData.get("email") as string;

    try {
        const response = await EngineerServiceClientApi
            .save(
                AbstractRequestBuilder
                    .builder<SaveEngineerRequest>()
                    .withParams({
                        uniEngineer: {
                            firstName: firstName,
                            email: email,
                        }
                    })
                    .build()
            )

        console.log('server::', response);
        revalidatePath("/engineers");

        return {
            status: FormStatus.SUCCESS,
            message: `Great job!! Engineer with ${response.email} has been added!`
        };

    } catch (e) {
        console.error(e);
        return {
            status: FormStatus.FAIL,
            message: String(e)
        };
    }


    // try {
    //     const response = await EngineerService.saveEngineer({
    //         firstName: firstName,
    //         email: email
    //     })
    //
    //     revalidatePath('/engineers');
    //
    //     return {
    //         status: FormStatus.SUCCESS,
    //         message: `Great job!! Engineer with ${response.email} has been added!`
    //     };
    //
    // } catch (error) {
    //     console.log('error:', error);
    //     return {
    //         status: FormStatus.FAIL,
    //         message: String(error)
    //     };
    // }
}