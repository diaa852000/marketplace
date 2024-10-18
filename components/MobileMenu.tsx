"use client";

import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { navlinks } from "@/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
    const location = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant={'outline'} size={'icon'}>
                    <Menu className="w-4 h-4"/>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className="hidden"><SheetTitle/></div>
                <div className="mt-5 flex px-2 space-y-1 flex-col">
                    {navlinks.map(item => (
                        <Link 
                            href={item.href} 
                            key={item.id}
                            className={cn(
                                location === item.href ? 'bg-muted' : 'hover:bg-muted hover:bg-opacity-75 hover:pl-6', 
                                "group flex items-center p-2 font-medium rounded-md transition-all"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    )
}
