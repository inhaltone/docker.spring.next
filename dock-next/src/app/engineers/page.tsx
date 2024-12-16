import {AddEngineer} from "@/components/add-engineer";
import {Card, CardContent} from "@/components/ui/card";
import EngineersTable from "@/components/engineers-table";
import {Suspense} from "react";
import TableSkeleton from "@/components/engineers-table-skeleton";

export default function Engineers() {

    return (

        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

                <Card>
                    <CardContent className="pt-3">
                        <Suspense fallback={<TableSkeleton/>}>
                            <EngineersTable/>
                        </Suspense>
                    </CardContent>
                </Card>
                <AddEngineer/>
            </main>
        </div>
    )
}