import {Suspense} from "react";
import {AddEngineer} from "@/components/add-engineer";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import EngineersTable from "@/components/engineers-table";
import TableSkeleton from "@/components/engineers-table-skeleton";

export const dynamic = "force-dynamic";

export default function EngineersPage() {
    return (
        <div className="mx-auto w-full max-w-4xl p-6">
            <Card>
                <CardHeader className="flex-row items-center justify-between space-y-0">
                    <div className="space-y-1.5">
                        <CardTitle>Engineers</CardTitle>
                        <CardDescription>Fetched server-side through the generated OpenAPI client.</CardDescription>
                    </div>
                    <AddEngineer/>
                </CardHeader>
                <CardContent>
                    <Suspense fallback={<TableSkeleton/>}>
                        <EngineersTable/>
                    </Suspense>
                </CardContent>
            </Card>
        </div>
    );
}
