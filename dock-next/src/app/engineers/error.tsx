"use client"

import {Button} from "@/components/ui/button";

export default function EngineersError({reset}: { error: Error; reset: () => void }) {
    return (
        <div className="mx-auto max-w-4xl space-y-4 p-6">
            <h2 className="text-lg font-semibold">Could not load engineers</h2>
            <p className="text-sm text-muted-foreground">Make sure the Spring Boot API and PostgreSQL are running.</p>
            <Button variant="outline" onClick={reset}>Try again</Button>
        </div>
    );
}
