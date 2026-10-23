import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const features = [
    {title: "Spring Boot 3", description: "Java 21 REST API with Spring Data JPA, Bean Validation and Problem Details."},
    {title: "Next.js 15", description: "App Router, React 19 Server Components and Server Actions."},
    {title: "OpenAPI → TypeScript", description: "Typed fetch client generated from springdoc, plus Zod schemas."},
    {title: "Docker Compose", description: "PostgreSQL, API and web app wired together with one command."},
];

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-4xl space-y-8 p-6">
            <section className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Docker · Spring Boot · Next.js</h1>
                <p className="text-muted-foreground">
                    A full-stack starter showing an end-to-end, type-safe contract from a Spring Boot API to a Next.js UI.
                </p>
                <Button asChild>
                    <Link href="/engineers">Open the demo</Link>
                </Button>
            </section>
            <section className="grid gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                    <Card key={feature.title}>
                        <CardHeader>
                            <CardTitle className="text-base">{feature.title}</CardTitle>
                            <CardDescription>{feature.description}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </section>
        </div>
    );
}
