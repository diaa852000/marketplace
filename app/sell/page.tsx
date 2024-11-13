import { Card } from "@/components/ui/card";
import SellForm from "@/components/form/SellForm";
import { findUser } from "@/lib/helpers";
import { unstable_noStore as noStore } from 'next/cache';
import { redirect } from "next/navigation";

export default async function SellPage() {
    noStore();
    const user = await findUser();
    if(!user) redirect('/');

    return (
        <section className="main-container mb-14">
            <Card className="my-8">
                <SellForm />
            </Card>
        </section>
    )
}
