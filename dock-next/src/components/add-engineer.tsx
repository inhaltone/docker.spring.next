'use client'
import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {useActionState, useEffect} from "react";
import {addEngineerAction} from "@/actions/add-engineer-action";
import {FormStatus} from "@/types/form";
import {ToastAction} from "@/components/ui/toast";
import {useToast} from "@/hooks/use-toast";

export function AddEngineer() {
    const { toast } = useToast()
    const [actionState, formAction, isPending] = useActionState(addEngineerAction, null);

    useEffect(() => {
        if (actionState?.status === FormStatus.SUCCESS) {
            toast({
                title: `New engineer added: ${actionState.firstName}`,
                description: new Date().toString(),
                action: (
                    <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
            })
        }
    }, [actionState]);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Engineer</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add new engineer</DialogTitle>
                    <DialogDescription>
                        Add name and email for each new engineer entry you wish to make!
                    </DialogDescription>
                </DialogHeader>
                <form action={formAction}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input id="firstName" name={"name"}
                                   className="col-span-3"/>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Input type={'email'} id="email"
                                   name={"email"}
                                   className="col-span-3"/>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" disabled={isPending}>Add</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
