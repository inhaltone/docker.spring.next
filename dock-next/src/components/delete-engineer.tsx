"use client"

import {useActionState} from "react";
import {Trash2} from "lucide-react";
import {Button} from "@/components/ui/button";
import {deleteEngineerAction} from "@/actions/delete-engineer-action";
import {useActionToast} from "@/hooks/use-action-toast";

export default function DeleteEngineer({engineerId}: { engineerId: number }) {
    const [state, formAction, isPending] = useActionState(deleteEngineerAction, null);

    useActionToast(state);

    return (
        <form action={formAction}>
            <input type="hidden" name="engineerId" value={engineerId}/>
            <Button type="submit" variant="ghost" size="icon" disabled={isPending} aria-label="Delete engineer">
                <Trash2/>
            </Button>
        </form>
    );
}
