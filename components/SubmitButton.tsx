"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function SubmitButton({ text }: { text: string }) {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button disabled>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait
                </Button>
            ) : (
                <Button type="submit">{text}</Button>
            )}
        </>
    )
}


export function BuyButton({ price }: { price: number }) {
    const { pending } = useFormStatus();

    return (
        <>
            {pending ? (
                <Button 
                    disabled 
                    size={"lg"}
                    className="w-full mt-8"
                >
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />Please Wait
                </Button>
            ) : (
                <Button
                    size={"lg"}
                    type="submit"
                    className="w-full mt-8 bg-primary/85 hover:bg-transparent border border-transparent hover:border-primary/85 
                transition-all dark:text-gray-200 text-base hover:text-muted-foreground font-semibold"
                >
                    Buy for ${price}
                </Button>
            )}
        </>
    )
}