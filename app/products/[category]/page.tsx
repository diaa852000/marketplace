import NoData from "@/components/NoData";
import ProductCard from "@/components/ProductCard";
import { getCategoryData } from "@/lib/helpers"
import {unstable_noStore as noStore} from 'next/cache';

export default async function CategoryPage({ params }: { params: { category: string } }) {
    noStore();
    const data = await getCategoryData(params.category);

    return (
        <section className="main-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-4">
                {data.length > 0 
                ? data.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        images={product.images}
                        price={product.price}
                        name={product.name}
                        smallDescription={product.smallDescription}
                    />
                ))
                : <NoData notFoundMessage="There are no Products for this Category!"/>
            }
            </div>
        </section>
    )
}
