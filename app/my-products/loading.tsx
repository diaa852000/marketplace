import { LoadingProductCard } from "@/components/Loading";

export default function LoadingFile() {
    return (
        <div className="main-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-10">
                <LoadingProductCard/>
                <LoadingProductCard/>
                <LoadingProductCard/>
                <LoadingProductCard/>
                <LoadingProductCard/>
                <LoadingProductCard/>
            </div>
        </div>
    )
}
