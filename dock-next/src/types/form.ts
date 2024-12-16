export enum FormStatus {
    IDLE,
    SUCCESS,
    PENDING,
    FAIL
}

interface FormAction {
    status: FormStatus;
    message: string;
}

export type FormActionState = FormAction | null;