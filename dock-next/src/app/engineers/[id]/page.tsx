import Link from "next/link";
import {notFound} from "next/navigation";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {engineersApi} from "@/api/client";
import {isNotFound} from "@/api/errors";

export default async function EngineerPage({params}: { params: Promise<{ id: string }> }) {
    const {id} = await params;
    const engineer = await engineersApi.getEngineer({id: Number(id)}).catch((error) => {
        if (isNotFound(error)) notFound();
        throw error;
    });

    return (
        <div className="mx-auto w-full max-w-4xl space-y-4 p-6">
            <Link href="/engineers" className="text-sm text-muted-foreground hover:underline">← Back to engineers</Link>
            <Card>
                <CardHeader>
                    <CardTitle>{engineer.firstName}</CardTitle>
                    <CardDescription>{engineer.email}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">Engineer #{engineer.id}</CardContent>
            </Card>
        </div>
    );
}
