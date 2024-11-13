import { getNewestProductData } from "@/lib/helpers"
import Link from "next/link";
import ProductCard from "./ProductCard";

export default async function NewestProducts() {
    const data = await getNewestProductData();

    return (
        <section className="mt-12">
            <div className="md:flex items-end md:justify-between gap-4">
                <h2 className="text-2xl font-medium tracking-tighter">
                    Newest Products
                </h2>
                <Link href={"#"} className="font-medium text-primary/85 md:block group overflow-hidden border border-primary/85 p-2 hover:border-transparent transition-all ease-in-out duration-300">
                    <span className="inline-block group-hover:translate-x-2 transition-transform duration-300 ease-in-out">All Products</span>
                    <span className="ms-1 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-[100px]">&rarr;</span>
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-10">
                {data.map((product) => (
                    <ProductCard
                        key={product.id}
                        images={product.images}
                        id={product.id}
                        smallDescription={product.smallDescription}
                        price={product.price}
                        name={product.name}
                    />
                ))}
            </div>
        </section>
    )
}
