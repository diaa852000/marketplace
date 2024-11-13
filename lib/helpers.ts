import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "./db";
import { notFound } from "next/navigation";
import { type CategoryTypes } from "@prisma/client";
import { ICategories } from "@/types";
import { CategoriesEnum } from "@/constants";


export async function findUser() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    return user;
}

export async function getUserUpdateData(userId: string) {
    const data = await prisma.user.findUnique({
        where: {
            id: userId,
        },
        select: {
            firstName: true,
            lastName: true,
            email: true,
        },
    });

    return data;
}


export async function getNewestProductData() {
    const data = await prisma.product.findMany({
        select: {
            price: true,
            smallDescription: true,
            category: true,
            name: true,
            id: true,
            images: true,
        },
        take: 4,
        orderBy: {
            createdAt: 'desc'
        }
    });

    return data;
}

export async function getProductData(productId: string) {
    const data = await prisma.product.findUnique({
        where: {
            id: productId
        },
        select: {
            id: true,
            category: true,
            description: true,
            smallDescription: true,
            name: true,
            price: true,
            createdAt: true,
            images: true,
            User: {
                select: {
                    profileImage: true,
                    firstName: true,
                }
            },
        },
    });

    return data;
}

export async function getCategoryData(category: string) {
    let input;
    switch(category) {
        case "tamplate": {
            input = "tamplate";
            break;
        }
        case "uikit": {
            input = "uikit";
            break;
        }
        case "icon": {
            input = "icon";
            break;
        }
        case "all" : {
            input = undefined;
            break;
        }
        default: {
            return notFound();
        }
    }

    const data = await prisma.product.findMany({
        where: {
            category: input as CategoryTypes,
        }, 
        select: {
            id: true,
            images: true,
            name: true,
            smallDescription: true,
            price: true,
        }
    })

    return data;
}


async function getRowsCategoryData(category: string) {
    const data = await prisma.product.findMany({
        where: {
            category: category as CategoryTypes,
        },
        select: {
            name: true,
            price: true,
            smallDescription: true,
            id: true,
            images: true,
        },
        take: 3,
    });
    return {
        data,
        title: category === "tamplate" ? 'template' :`${category}s`,
        link: `/products/${category}`,
    }
}


export async function getRowData({category}: ICategories) {
    switch(category) {
        case CategoriesEnum.ICONS: {
            return getRowsCategoryData(category);
        }
        case CategoriesEnum.TEMPLATE: {
            return getRowsCategoryData(category);
        }
        case CategoriesEnum.UIKITS: {
            return getRowsCategoryData(category);
        }
        case CategoriesEnum.NEWEST: {
            const data = await prisma.product.findMany({
                select: {
                    name: true,
                    price: true,
                    smallDescription: true,
                    id: true,
                    images: true,
                },
                orderBy: {
                    createdAt: 'desc'
                },
                take: 3,
            });

            return {
                data,
                title: "Newest Products",
                link: '/'
            }
        }
        default: {
            return notFound();
        }
    }
}

export async function getAllUserProducts(userId: string) {
    const data = await prisma.product.findMany({
        where: {
            userId,
        },
        select: {
            id: true,
            name: true,
            price: true,
            smallDescription: true,
            images: true,
        }
    });

    return data;
}

export async function findProduct(id: string) {
    const data = await prisma.product.findUnique({
        where: {
            id,
        },
        select: {
            name: true,
            price: true,
            images: true,
            id: true,
            smallDescription: true,
            description: true,
        },
    });

    if(!data) throw new Error("There's no Product with this Id");
    return data;
}


export async function FindUserDb(id: string) {
    const data = await prisma.user.findUnique({
        where: {
            id: id as string,
        }
    });

    if(!data) return;

    return data;
}