import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {EngineerServiceClientApi} from "@/api/api";
import Link from "next/link";
import IconEyeFill from "@/components/icons/IconEyeFill";
import {GetAllUniEngineersPagedRequest} from "@/api/openapi";
import AbstractRequestBuilder from "@/api/builders/AbstractRequestBuilder";

export default async function EngineersTable() {

    const {content} = await EngineerServiceClientApi
        .getAllEngineersPaged(
            AbstractRequestBuilder
                .builder<GetAllUniEngineersPagedRequest>()
                .withParams({page: 0})
                .withParams({size: 10})
                .build()
        )


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