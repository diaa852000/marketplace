import { ICategoryItems } from "@/types";
import { ChefHat, Globe, PartyPopper } from "lucide-react";

export const categoryItems: ICategoryItems[] = [
    {
        id: 0,
        name: "tamplate",
        title: "Template",
        image: <Globe/>
    },
    {
        id: 1,
        name: "uikit",
        title: "Ui Kit",
        image: <ChefHat/>
    },
    {
        id: 2,
        name: "icon",
        title: "Icon",
        image: <PartyPopper/>
    },

]