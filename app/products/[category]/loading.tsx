import { LoadingProductCard } from "@/components/Loading";


export default function LoadingFile() {
    return (
        <div className="main-container">
            <div className="grid grid-cols1 sm:grid-cols-2 gap-10 lg:grid-cols-3 mt-4">
                <LoadingProductCard />
                <LoadingProductCard />
                <LoadingProductCard />
                <LoadingProductCard />
                <LoadingProductCard />
                <LoadingProductCard />
            </div>
        </div>
    )
}
