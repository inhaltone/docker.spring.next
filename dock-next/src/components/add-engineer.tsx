"use client"

import {useActionState, useState} from "react";
import {Button} from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {addEngineerAction} from "@/actions/add-engineer-action";
import {useActionToast} from "@/hooks/use-action-toast";

export function AddEngineer() {
    const [open, setOpen] = useState(false);
    const [state, formAction, isPending] = useActionState(addEngineerAction, null);

    useActionToast(state, () => setOpen(false));

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>Add engineer</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add engineer</DialogTitle>
                    <DialogDescription>Validated with Zod on the server, persisted by Spring Boot.</DialogDescription>
                </DialogHeader>
                <form action={formAction} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input id="firstName" name="firstName" required/>
                        <FieldError messages={state?.fieldErrors?.firstName}/>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" required/>
                        <FieldError messages={state?.fieldErrors?.email}/>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={isPending}>{isPending ? "Saving…" : "Save"}</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

function FieldError({messages}: { messages?: string[] }) {
    return messages?.length ? <p className="text-sm text-destructive">{messages[0]}</p> : null;
}
