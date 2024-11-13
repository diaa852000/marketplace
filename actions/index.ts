/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import prisma from "@/lib/db";
import { findUser } from "@/lib/helpers";
import { productSchema, userSettingsSchema } from "@/lib/validation";
import { State } from "@/types";
import { type CategoryTypes } from "@prisma/client";

export async function SellProductAction(prevState: any, formDate: FormData) {
    const user = await findUser();
    if (!user) throw new Error("Please Authenticate first!");

    let state: State;

    const validateFields = productSchema.safeParse({
        name: formDate.get("name"),
        category: formDate.get("category"),
        price: Number(formDate.get("price")),
        smallDescription: formDate.get("smallDescription"),
        description: formDate.get("description"),
        images: JSON.parse(formDate.get("images") as string),
        productFile: formDate.get("productFile")
    });

    if (!validateFields.success) {
        state = {
            status: "error",
            errors: validateFields.error.flatten().fieldErrors,
            message: 'Oops, I think there is a mistake with your inputs.',
        };
        return state;
    }

    await prisma.product.create({
        data: {
            userId: user.id,
            name: validateFields.data.name,
            category: validateFields.data.category as CategoryTypes,
            smallDescription: validateFields.data.smallDescription,
            price: validateFields.data.price,
            images: validateFields.data.images,
            productFile: validateFields.data.productFile,
            description: JSON.parse(validateFields.data.description),
        }
    })

    state = {
        status: 'success',
        message: "Your Product has been created!",
    }

    return state;
}

export async function UpdateUserSettings(prevState: any, formData: FormData) {
    const user = await findUser();
    if(!user) throw new Error("Something went wrong!");

    let state: State;

    const validateFields = userSettingsSchema.safeParse({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
    });

    if (!validateFields.success) {
        state = {
            status: "error",
            errors: validateFields.error.flatten().fieldErrors,
            message: 'Oops, I think there is a mistake with your inputs.',
        };
        return state;
    }

    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            firstName: validateFields.data.firstName,
            lastName: validateFields.data.lastName,
        }
    })

    state = {
        status: 'success',
        message: "Your Settings has been updated!",
    }

    return state;
}