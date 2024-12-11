"use client"
import EngineerService from "@/services/EngineerService";
import {Badge} from "@/components/ui/badge";
import {AddEngineer} from "@/components/add-engineer";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import Link from "next/link";
import DeleteEngineer from "@/components/delete-engineer";
import {Card, CardContent} from "@/components/ui/card";
import {useEffect, useState} from "react";
import {EngineerModel} from "@/types/engineer";
import {Skeleton} from "@/components/ui/skeleton";


export default function Engineers() {
    const [engineers, setEngineers] = useState<EngineerModel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    // const {content} = await EngineerService.getAllEngineersPaged({page: 0, size: 10})

    useEffect(() => {
        console.log('run')
        EngineerService.getAllEngineersPaged({page: 0, size: 10})
            .then((response) => {
                setEngineers(response.content);
            })
            .finally(() => setLoading(false))
    }, []);

    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Card>
                    <CardContent className="pt-3">
                        {loading ? (<div className="flex items-center space-x-4">
                                <Skeleton className="h-12 w-12 rounded-full"/>
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[250px]"/>
                                    <Skeleton className="h-4 w-[200px]"/>
                                </div>
                            </div>)
                            : engineers.length ? (<Table>
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
                                    {engineers.map((engineer) => (
                                        <TableRow key={engineer.id}>
                                            <TableCell className="w-[100px]">
                                                {engineer.id}
                                            </TableCell>
                                            <TableCell>{engineer.firstName}</TableCell>
                                            <TableCell>{engineer.email}</TableCell>
                                            <TableCell>
                                                <Link href={`/engineers/${String(engineer.id)}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                         fill="currentColor" className="bi bi-eye-fill"
                                                         viewBox="0 0 16 16">
                                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                                        <path
                                                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                                    </svg>
                                                </Link>
                                            </TableCell>
                                            <TableCell>
                                                <DeleteEngineer engineerId={engineer.id}/>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>) : (
                                <Badge>No Data bro!</Badge>
                            )}
                    </CardContent>
                </Card>

                <AddEngineer/>
            </main>
        </div>
    )
}