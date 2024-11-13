import SettingsForm from "@/components/form/SettingsForm";
import { Card } from "@/components/ui/card";
import { findUser, getUserUpdateData } from "@/lib/helpers";
import { unstable_noStore as noStore } from 'next/cache';

export default async function SettingsPage() {
    noStore();

    const user = await findUser();
    if (!user) throw new Error("not Authenticated")

    const data = await getUserUpdateData(user?.id as string);

    return (
        <section className="main-container my-8">
            <Card>
                <SettingsForm
                    firstName={data?.firstName as string}
                    lastName={data?.lastName as string}
                    email={data?.email as string}
                />
            </Card>
        </section>
    )
}
