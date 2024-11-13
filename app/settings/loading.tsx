import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingFile() {
    return (
        <div className="main-container">
            <Card>
                <CardHeader className="h-[500px]">
                    <Skeleton className="w-full h-full"/>
                </CardHeader>
            </Card>
        </div>
    )
}