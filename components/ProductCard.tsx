import { IProductCardProps } from "@/types";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import Link from "next/link";

export default function ProductCard({ images, price, name, id, smallDescription }: IProductCardProps) {
    return (
        <div className="rounded-lg p-4 shadow dark:border bg-white dark:bg-[#020817]">
            <Carousel className="w-full mx-auto">
                <CarouselContent>
                    {images.map((item, index) => (
                        <CarouselItem key={index}>
                            <div className="relative h-[230px]">
                                <Image
                                    src={item}
                                    alt="product-image"
                                    fill
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-14"/>
                <CarouselNext className="mr-14"/>
            </Carousel>
            <div className="flex justify-between items-center mt-2">
                <h1 className="font-semibold text-xl text-black dark:text-gray-200">{name}</h1>
                <h3 className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/10">${price}</h3>
            </div>
            <p className="text-gray-500 line-clamp-2 text-sm mt-2 h-[40px]">{smallDescription}</p>
            <Button asChild className="w-full mt-5 dark:text-white">
                <Link href={`/product/${id}`}>
                    Learn More!
                </Link>
            </Button>
        </div>
    )
}

