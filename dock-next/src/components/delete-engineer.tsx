"use client"
import {Button} from "@/components/ui/button";
import EngineerService from "@/services/EngineerService";

interface DeleteEngineerProps {
    engineerId: number;
}
export default function DeleteEngineer({engineerId}: DeleteEngineerProps) {

    const deleteEngineerById = async (id: number) => {
        console.log('DELETE', id);
        await EngineerService.delete(id);
        console.log('finished')
    }

    return (
        <Button onClick={() => deleteEngineerById(engineerId)} variant="outline">
            DELETE
        </Button>
    )
}