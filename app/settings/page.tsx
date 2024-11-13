import SettingsForm from "@/components/form/SettingsForm";
import { Card } from "@/components/ui/card";
import { getUserUpdateData } from "@/lib/helpers";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";


export default async function SettingsPage() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if(!user) redirect('/');

    const data = await getUserUpdateData(user.id);

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
