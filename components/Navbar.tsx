import Link from "next/link";
import NavbarLinks from "./NavbarLinks";
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import UserNavbar from "./UserNavbar";
// import ThemeToggleButton from "./ThemeToggleButton";
import { findUser, FindUserDb } from "@/lib/helpers";
import dynamic from "next/dynamic";
import {unstable_noStore as noStore} from 'next/cache';


const ThemeToggleButton = dynamic(() => import('./ThemeToggleButton'), {
    ssr: false,
});


export default async function Navbar() {
    noStore();
    // const { getUser } = getKindeServerSession();
    // const user = await getUser();
    
    const user = await findUser();
    
    const userDb = await FindUserDb(user?.id as string);

    return (
        <nav className="relative main-container w-full flex md:grid md:grid-cols-12 items-center py-7 border-b">
            <div className="md:col-span-3">
                <Link href='/'>
                    <h1 className="text-2xl font-semibold">MART-<span className="text-primary">UI</span></h1>
                </Link>
            </div>

            <NavbarLinks />

            <div className="flex items-center gap-x-3 ms-auto md:col-span-3">
                {user
                    ? <UserNavbar
                        name={userDb?.firstName as string || user.given_name as string}
                        email={user.email as string}
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
                    </div>
                }
                <ThemeToggleButton/>
            </div>
        </nav>
    )
}
