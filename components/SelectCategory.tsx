"use client";

import { categoryItems } from "@/constants/categoryItems";
import { Card, CardHeader } from "./ui/card";
import { useState } from "react";

export default function SelectCategory() {
    const [selectCategory, setSelectCategory] = useState<string | null>(null);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {categoryItems.map((item) => (
                <div 
                    key={item.id}
                    className="cursor-pointer"
                >
                    <Card 
                        className={selectCategory === item.name ? 'border-2 border-primary' : 'border-2 border-primary/10'}
                        onClick={() => setSelectCategory(item.name)}
                    >
                        <CardHeader>
                            {item.image}
                            <h3 className="font-medium">{item.title}</h3>
                        </CardHeader>
                    </Card>
                </div>
            ))}
        </div>
    )
}
