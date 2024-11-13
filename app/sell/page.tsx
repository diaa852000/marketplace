import { Card } from "@/components/ui/card";
import SellForm from "@/components/form/SellForm";
import { findUser } from "@/lib/helpers";
import { redirect } from "next/navigation";


export default async function SellPage() {
    const user = await findUser();

    if(!user) redirect("/");

    return (
        <section className="main-container mb-14">
            <Card className="my-8">
                <SellForm />
            </Card>
        </section>
    )
}
