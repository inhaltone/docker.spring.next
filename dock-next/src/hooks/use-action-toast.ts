"use client"

import {useEffect} from "react";
import {useToast} from "@/hooks/use-toast";
import {FormActionState, FormStatus} from "@/types/form";

export function useActionToast(state: FormActionState, onSuccess?: () => void) {
    const {toast} = useToast();

    useEffect(() => {
        if (!state) return;
        toast({
            title: state.message,
            variant: state.status === FormStatus.FAIL ? "destructive" : "default",
        });
        if (state.status === FormStatus.SUCCESS) onSuccess?.();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state]);
}
