"use client"
import {Button} from "@/components/ui/button";
import {useActionState, useEffect} from "react";
import {deleteEngineerAction} from "@/actions/delete-engineer-action";
import {Input} from "@/components/ui/input";

interface DeleteEngineerProps {
    engineerId: number;
}

export default function DeleteEngineer({engineerId}: DeleteEngineerProps) {
    const [actionState, formAction, isPending] = useActionState(deleteEngineerAction, null);

    console.log('actionState::', actionState?.message);

    useEffect(() => {
        console.log('action:', actionState?.status)
    }, [actionState]);

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