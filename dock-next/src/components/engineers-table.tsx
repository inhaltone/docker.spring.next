import Link from "next/link";
import {Eye} from "lucide-react";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import DeleteEngineer from "@/components/delete-engineer";
import {engineersApi} from "@/api/client";

export default async function EngineersTable() {
    const {content = [], page} = await engineersApi.listEngineers({page: 0, size: 20, sort: ["id"]});

    return (
        <Table>
            <TableCaption>{page?.totalElements ?? 0} engineer(s)</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[80px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {content.map((engineer) => (
                    <TableRow key={engineer.id}>
                        <TableCell>{engineer.id}</TableCell>
                        <TableCell>{engineer.firstName}</TableCell>
                        <TableCell>{engineer.email}</TableCell>
                        <TableCell className="flex justify-end gap-1">
                            <Link href={`/engineers/${engineer.id}`} aria-label="View engineer"
                                  className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-accent">
                                <Eye className="h-4 w-4"/>
                            </Link>
                            <DeleteEngineer engineerId={engineer.id!}/>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
