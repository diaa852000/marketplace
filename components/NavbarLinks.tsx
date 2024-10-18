"use client";

import { navlinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavbarLinks() {
    const location = usePathname();

    return (
        <div className="hidden md:flex justify-center items-center col-span-6 gap-x-2">
            {navlinks.map((item) => (
                <Link 
                    href={item.href} 
                    key={item.id} 
                    className={cn(
                    location === item.href ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75', 
                    "group flex items-center p-2 font-medium rounded-md transition-colors"
                )}>
                    {item.name}
                </Link>
            ))}
        </div>
    )
}
