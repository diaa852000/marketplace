import SettingsForm from "@/components/form/SettingsForm";
import { Card } from "@/components/ui/card";
import { getUserUpdateData } from "@/lib/helpers";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import {unstable_noStore as noStore} from 'next/cache';

export default async function SettingsPage() {
    noStore();

    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user) redirect('/');

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
