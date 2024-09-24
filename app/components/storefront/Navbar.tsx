import Link from "next/link";
import { NavbarLinks } from "./navbarLinks";
import {
  getKindeServerSession,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBagIcon } from "lucide-react";
import { UserDropdown } from "./UserDropdown";
import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { redis } from "@/app/lib/redis";
import { Cart } from "@/app/lib/interfaces";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const cart: Cart | null = await redis.get(`cart-${user?.id}`);
  console.log(cart);

  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;
  return (
    <nav
      className=" w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 mb-10 flex items-center 
        justify-between"
    >
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-white font-bold text-2xl p-1 rounded-lg lg:text-3xl ">
            Shoe-<span className="text-primary">KAI</span>
          </h1>
        </Link>
        <NavbarLinks />
      </div>

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Link href="/bag" className="group pr-2 flex items-center mr-2">
              <div className="relative">
                <ShoppingBagIcon className="h-6 w-6 text-2xl text-gray-400 group-hover:text-gray-600" />
                <span
                  className="absolute -top-1 -right-2 bg-white text-xs w-5 h-5 flex justify-center 
          items-center animate-bounce rounded-full text-black"
                >
                  {total}
                </span>
              </div>
            </Link>
            <UserDropdown
              email={user?.email as string}
              name={user.given_name as string}
              userImage={
                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
              }
            />
          </>
        ) : (
          <div className=" md:flex md:flex-1 md:items-center md:justify-end md:space-x-2 text-white">
            <Button variant={"ghost"} asChild>
              <LoginLink>Login</LoginLink>
            </Button>
            {/* <span className="h-6 w-px bg-gray-200"></span> */}
            <Button variant={"ghost"} asChild>
              <RegisterLink>Sign up</RegisterLink>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
