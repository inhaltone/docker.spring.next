import {Table, TableCaption, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {engineerServiceClientApi} from "@/api/api";

export default async function EngineersTable() {

    // const api = createApi();

    // const {content} = await api.getAllUniEngineersPaged({page: 0, size: 10})

    engineerServiceClientApi.withPage(0).withSize(10).getAllEngineersPaged().then(e => {
        console.log('response:', e);
    })


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
            {/*<TableBody>*/}
            {/*    {content?.map((engineer) => (*/}
            {/*        <TableRow key={engineer.id}>*/}
            {/*            <TableCell className="w-[100px]">*/}
            {/*                {engineer.id}*/}
            {/*            </TableCell>*/}
            {/*            <TableCell>{engineer.firstName}</TableCell>*/}
            {/*            <TableCell>{engineer.email}</TableCell>*/}
            {/*            <TableCell>*/}
            {/*                <Link href={`/engineers/${String(engineer.id)}`}>*/}
            {/*                    <IconEyeFill/>*/}
            {/*                </Link>*/}
            {/*            </TableCell>*/}
            {/*            <TableCell>*/}
            {/*                <DeleteEngineer engineerId={engineer.id!}/>*/}
            {/*            </TableCell>*/}
            {/*        </TableRow>*/}
            {/*    ))}*/}
            {/*</TableBody>*/}
        </Table>
    )
}