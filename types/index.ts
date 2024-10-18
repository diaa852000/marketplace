import { ReactNode } from "react";

export interface IAppProps {
    email: string;
    name: string;
    userImage: string | undefined;
}

export interface ICategoryItems {
    name: string;
    title: string;
    image: ReactNode;
    id: number;
}