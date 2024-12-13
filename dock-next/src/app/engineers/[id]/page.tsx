import EngineerService from "@/services/EngineerService";
import {Card, CardContent} from "@/components/ui/card";

export default async function Page({params,}: { params: Promise<{ id: string }> }) {
    const engineerId = (await params).id;
    const engineer = await EngineerService.findEngineerById(engineerId);

    return (
        <Card>
            <CardContent className={'pt-3'}>
                <div>
                    <strong>Name</strong>
                    <h2>{engineer.firstName}</h2>
                </div>
            </CardContent>
        </Card>
    )
}