import Link from "next/link";
import NavbarLinks from "./NavbarLinks";
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserNavbar from "./UserNavbar";

export default async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();


    return (
        <nav className="relative main-container w-full flex md:grid md:grid-cols-12 items-center py-7">
            <div className="md:col-span-3">
                <Link href='/'>
                    <h1 className="text-2xl font-semibold">MART-<span className="text-primary">UI</span></h1>
                </Link>
            </div>

            <NavbarLinks />

            <div className="flex items-center gap-x-2 ms-auto md:col-span-3">
                {user
                    ? <UserNavbar
                        email={user.email as string}
                        name={user.given_name as string}
                        userImage={user.picture ?? `https://avatar.vercel.sh/${user.given_name}`}
                    />
                    : <div className="flex items-center gap-x-2">
                        <Button asChild>
                            <LoginLink>Login</LoginLink>
                        </Button>
                        <Button variant={'secondary'} asChild>
                            <RegisterLink>Register</RegisterLink>
                        </Button>
                        <div className="md:hidden">
                            <MobileMenu />
                        </div>
                    </div>}
            </div>
        </nav>
    )
}
