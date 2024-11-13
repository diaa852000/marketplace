import NoData from "@/components/NoData";
import ProductCard from "@/components/ProductCard";
import { findUser, getAllUserProducts } from "@/lib/helpers"
import { redirect } from "next/navigation";
import {unstable_noStore as noStore} from 'next/cache';

export default async function MyProductPage() {
    noStore();
    const user = await findUser();
    if (!user) redirect('/');

    const data = await getAllUserProducts(user?.id as string);

    return (
        <section className="main-container my-8">
            <h1 className="text-2xl font-bold">My Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-4">
                {data.length > 0 
                ? data.map(item => (
                    <ProductCard
                        key={item.id}
                        images={item.images}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        smallDescription={item.smallDescription}
                    />
                )) 
                : <NoData notFoundMessage="You have not add products yet!"/>
            }
            </div>
        </section>
    )
}
