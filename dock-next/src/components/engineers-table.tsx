import {Table, TableCaption, TableHead, TableHeader, TableRow, TableBody, TableCell} from "@/components/ui/table";
import {engineerServiceClientApi} from "@/api/api";
import Link from "next/link";
import IconEyeFill from "@/components/icons/IconEyeFill";
import PageableBuilder from "@/api/builders/PageableBuilder";
import {GetAllUniEngineersPagedRequest} from "@/api/openapi";

export default async function EngineersTable() {

    const {content} = await engineerServiceClientApi
        .getAllEngineersPaged(
            PageableBuilder
                .builder()
                .withSize(10)
                .withPage(0)
                .build() as GetAllUniEngineersPagedRequest
        );


    return (
        <Table>
            <TableCaption>A list of team engineers</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Link</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {content?.map((engineer) => (
                    <TableRow key={engineer.id}>
                        <TableCell className="w-[100px]">
                            {engineer.id}
                        </TableCell>
                        <TableCell>{engineer.firstName}</TableCell>
                        <TableCell>{engineer.email}</TableCell>
                        <TableCell>
                            <Link href={`/engineers/${String(engineer.id)}`}>
                                <IconEyeFill/>
                            </Link>
                        </TableCell>
                        <TableCell>
                            {/*<DeleteEngineer engineerId={engineer.id!}/>*/}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}