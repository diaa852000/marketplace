import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { XCircle } from "lucide-react";
import Link from "next/link";

export default function CancelPage() {
    return (
        <section className="w-full min-h-[80dvh] flex items-center justify-center">
            <Card className="w-[550px]">
                <div className="p-6">
                    <div className="w-full flex justify-center">
                        <XCircle className="w-12 h-12 rounded-full bg-red-500/30 text-red-500 p-2"/>
                    </div>
                    <div className="mt-3 text-center sm:mt-5 w-full">
                        <h3 className="text-muted-foreground text-xl leading-6 font-medium">Payment Canceled</h3>
                        <p className="mt-2 text-base text-muted-foreground/95">
                            Something went wrong with your payment. You haven&apos;t been charged. Please try again.
                        </p>

                        <Button className="mt-5 sm:mt-6 w-full dark:text-gray-100 text-base" asChild>
                            <Link href={'/'}>
                                Back to Home page
                            </Link>
                        </Button>
                    </div>
                </div>
            </Card>
        </section>
    )
}
