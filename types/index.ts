import { CategoriesEnum } from "@/constants";
import { ReactNode } from "react";

export interface IUserProps {
    name: string;
    email: string;
    userImage?: string | undefined;
}

export interface ICategoryItems {
    name: string;
    title: string;
    image: ReactNode;
    id: number;
}

export interface IUserSettingsProps {
    firstName: string;
    lastName: string;
    email: string;
}

export type State = {
    status: "error" | "success" | "undefined";
    errors?: {
        [key: string]: string[]
    };
    message?: string | null;
}

export interface IProductCardProps {
    images: string[];
    name: string;
    price: number;
    smallDescription: string;
    id: string;
}

export interface ICategories {
    category: CategoriesEnum
}

export interface IProductRows extends ICategories {
    allProductsLink?: boolean;
}

export interface INoDataProps {
    notFoundMessage: string;
}