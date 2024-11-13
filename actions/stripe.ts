"use server";

import { findProduct } from "@/lib/helpers";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import {unstable_noStore as noStore} from 'next/cache';

export async function BuyProduct(formData: FormData) {
    noStore();
    const id = formData.get("id") as string;

    const product = await findProduct(id);
    if(!product) throw new Error("There's No Product with this id");

    const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    unit_amount: Math.round(product.price as number) * 100, 
                    product_data: {
                        name: product.name as string,
                        description: product.smallDescription,
                        images: product.images,
                    }
                },
                quantity: 1,
            },
        ],
        success_url: 'http://localhost:3000/payment/success',
        cancel_url: 'http://localhost:3000/payment/cancel',
    });

    return redirect(session.url as string);
}