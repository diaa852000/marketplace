import { Card } from "@/components/ui/card";
import SellForm from "@/components/form/SellForm";
import { findUser } from "@/lib/helpers";
import { unstable_noStore as noStore } from 'next/cache';

export default async function SellPage() {
    noStore();
    const user = await findUser();

    if (!user) {
        throw new Error("not Authenticated")
    }

    return (
        <section className="main-container mb-14">
            <Card className="my-8">
                <SellForm />
            </Card>
        </section>
    )
}
