import {Skeleton} from "@/components/ui/skeleton";

export default function TableSkeleton() {
    return (
        <div className="space-y-3">
            {Array.from({length: 4}).map((_, i) => (
                <Skeleton key={i} className="h-8 w-full"/>
            ))}
        </div>
    );
}
