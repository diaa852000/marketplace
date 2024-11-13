import Link from "next/link";
import ProductCard from "./ProductCard";
import { getRowData } from "@/lib/helpers";
import { ICategories, IProductRows } from "@/types";
import { Suspense } from "react";
import { LoadingGrid } from "./Loading";
import NoData from "./NoData";
import { CategoriesEnum } from "@/constants";


export default function ProductRow({ category }: ICategories) {
    return (
        <section className="border-b py-8">
            <Suspense fallback={<LoadingGrid />}>
                <LoadRows category={category} allProductsLink={category !== CategoriesEnum.NEWEST} />
            </Suspense>
        </section>
    )
}


async function LoadRows({ category, allProductsLink }: IProductRows) {
    const { data, title, link } = await getRowData({ category: category })

    return (
        <>
            <div className="flex items-end justify-between gap-4 mb-8">
                <h2 className="text-2xl font-bold tracking-tighter capitalize w-fit dark:text-gray-100">
                    {title}
                </h2>
                {allProductsLink &&
                    <Link
                        href={link}
                        className="font-medium text-primary/85 hidden sm:block group overflow-hidden border border-primary/85 p-2 hover:border-transparent transition-all ease-in-out duration-300 w-fit"
                    >
                        <span className="inline-block group-hover:translate-x-2 transition-transform duration-300 ease-in-out">All Products</span>
                        <span className="ms-1 inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-[100px]">&rarr;</span>
                    </Link>
                }
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-10">
                {data.length > 0 ? (
                    data.map((product) => (
                        <ProductCard
                            key={product.id}
                            images={product.images}
                            id={product.id}
                            smallDescription={product.smallDescription}
                            price={product.price}
                            name={product.name}
                        />
                    ))
                ) : (
                    <NoData notFoundMessage="There are no Products for this Category!" />
                )}

            </div>
            <Link
                href={link}
                className="font-medium text-primary/85 block sm:hidden mt-8 ml-auto w-fit group"
            >
                <span className="inline-block group-hover:text-primary/85 duration-300 ease-in-out">All Products</span>
            </Link>
        </>
    )
}

