import EngineerService from "@/services/EngineerService";

export default async function EngineerFeed() {
    const data = await EngineerService.getAllEngineersPaged({page: 0, size: 20});

    return (
        <ul>
            {data.content.map((e) => {
                return (
                    <li key={e.id}>{e.email}</li>
                )
            })}
        </ul>
    )
}