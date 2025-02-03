import {ErrorContext, FetchParams, Middleware, RequestContext, ResponseContext} from "@/api/openapi";

export const interceptor: Middleware = {
    async pre(context: RequestContext): Promise<FetchParams | void> {
        console.log("[MIDDLEWARE] Pre Request:::", context);
        const modifiedHeaders = {...context.init.headers, "X-Custom-Header": "LoggingMiddleware"};

        return {
            url: context.url,
            init: {
                ...context.init,
                headers: modifiedHeaders,
                mode: 'no-cors'
            },
        };
    },

    async post(context: ResponseContext): Promise<Response | void> {
        // TODO: Handle error here
        console.log("[MIDDLEWARE] Post Response: Status", context.response.status);

        if (context.response.ok) {
            console.log("[MIDDLEWARE] Response OK");
        } else {
            console.warn("[MIDDLEWARE] Response NOT OK");
        }
    },

    async onError(context: ErrorContext): Promise<Response | void> {
        console.error("[MIDDLEWARE] Error Occurred:", context);

        if (context.response) {
            console.error("[MIDDLEWARE] Response Info:", {
                status: context.response.status,
                statusText: context.response.statusText,
            });
        }

        return new Response("An error occurred. Please try again.", {status: 500});
    }
}