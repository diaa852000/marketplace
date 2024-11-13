import { Skeleton } from "./ui/skeleton";

export function LoadingGrid() {
    return (
        <div>
            <Skeleton className="h-8 w-56" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-10">
                <LoadingProductCard />
                <LoadingProductCard />
                <LoadingProductCard />
            </div>
        </div>
    )
}

export function LoadingProductCard() {
    return (
        <div className="flex flex-col">
            <Skeleton className="w-full h-[230px]" />
            <div className="flex flex-col mt-2 gap-y-2">
                <Skeleton className="w-full h-4" />
                <Skeleton className="w-full h-6" />
            </div>
            <Skeleton className="w-full h-10 mt-5" />
        </div>
    )
}