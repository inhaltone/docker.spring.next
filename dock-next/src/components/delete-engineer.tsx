"use client"
import {Button} from "@/components/ui/button";
// import EngineerService from "@/services/EngineerService";
import {useActionState} from "react";
// import {addEngineerAction} from "@/actions/add-engineer-action";
import {deleteEngineerAction} from "@/actions/delete-engineer-action";
import {Input} from "@/components/ui/input";

interface DeleteEngineerProps {
    engineerId: number;
}

export default function DeleteEngineer({engineerId}: DeleteEngineerProps) {

    // const deleteEngineerById = async (id: number) => {
    //     console.log('DELETE', id);
    //     await EngineerService.delete(id);
    //     console.log('finished')
    // }

    const [actionState, formAction, isPending] = useActionState(deleteEngineerAction, null);

    console.log('actionState::', actionState);

    return (
        <>
            <form action={formAction}>
                <Input type="hidden" id="engineerId" name={"engineerId"} value={engineerId}
                       className="col-span-3"/>
                <Button disabled={isPending} variant="outline">
                    DELETE
                </Button>
            </form>
        </>
    )
}