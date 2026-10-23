export enum FormStatus {
    SUCCESS = "success",
    FAIL = "fail",
}

export interface FormAction {
    status: FormStatus;
    message: string;
    fieldErrors?: Record<string, string[] | undefined>;
}

export type FormActionState = FormAction | null;
