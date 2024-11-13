import { BuyProduct } from "@/actions/stripe";
import ProductDescription from "@/components/ProductDescription";
import { BuyButton } from "@/components/SubmitButton";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { getProductData } from "@/lib/helpers";
import { JSONContent } from "@tiptap/react";
import Image from "next/image";
import { unstable_noStore as noStore } from 'next/cache';

export default async function ProductPage({ params }: { params: { id: string } }) {
    noStore();
    const data = await getProductData(params.id);

    return (
        <section className="main-container lg:grid lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16 py-8">
            <Carousel className="lg:row-end-1 lg:col-span-4">
                <CarouselContent>
                    {data?.images.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden relative">
                                <Image
                                    src={item as string}
                                    alt="product-image"
                                    fill
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ms-16" />
                <CarouselNext className="me-16" />
            </Carousel>
            <div className="max-w-2xl w-full mx-auto mt-5 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200 sm:text-3xl capitalize">{data?.name}</h1>
                <p className="mt-2 text-muted-foreground">{data?.smallDescription}</p>
                <form action={BuyProduct}>
                    <input
                        type="hidden"
                        name="id"
                        value={data?.id}
                    />
                    <BuyButton price={data?.price as number} />
                </form>
                <div className="border-t border-gray-200 dark:border-muted-foreground mt-10 pt-10">
                    <div className="grid grid-cols-2 w-full gap-y-3">
                        <h3 className="text-sm font-medium text-muted-foreground col-span-1 capitalize">Released:</h3>
                        <h3 className="text-sm font-medium col-span-1 dark:text-gray-200">
                            {
                                new Intl.DateTimeFormat("en-Us", {
                                    dateStyle: "long",
                                }).format(data?.createdAt)
                            }
                        </h3>
                        <h3 className="text-sm font-medium text-muted-foreground col-span-1 capitalize">Category:</h3>
                        <h3 className="text-sm font-medium col-span-1 capitalize dark:text-gray-200">{data?.category}</h3>
                    </div>
                </div>
                <div className="border-t border-gray-200 dark:border-muted-foreground mt-10 pt-10">
                    <ProductDescription content={data?.description as JSONContent} />
                </div>
            </div>
        </section>
    )
}   