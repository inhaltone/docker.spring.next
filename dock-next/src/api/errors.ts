import {ResponseError} from "@/api/openapi";

// Spring returns RFC 9457 problem details: { type, title, status, detail, instance }
interface ProblemDetail {
    title?: string;
    detail?: string;
}

export async function getApiErrorMessage(error: unknown): Promise<string> {
    if (error instanceof ResponseError) {
        const problem: ProblemDetail = await error.response.json().catch(() => ({}));
        return problem.detail ?? problem.title ?? `Request failed with status ${error.response.status}`;
    }
    return "The API is unreachable. Is the backend running?";
}

export function isNotFound(error: unknown): boolean {
    return error instanceof ResponseError && error.response.status === 404;
}
