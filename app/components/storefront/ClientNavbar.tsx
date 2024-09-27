// ClientNavbar.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import { UserDropdown } from "./UserDropdown";
import { NavbarLinks } from "./navbarLinks";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

interface ClientNavbarProps {
  total: string;
  user: {
    email: string | null;
    given_name: string | null;
    picture?: string | null;
  } | null;
}

export const ClientNavbar = ({ total, user }: ClientNavbarProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="bg-slate-900 top-0 z-50 w-full mx-auto px-4 sm:px-6 lg:px-8 py-5 mb-10 flex items-center justify-between"
    >
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-white font-bold text-2xl p-1 rounded-lg lg:text-3xl ">
            Shoe-<span>KAI</span>
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
                <span className="absolute -top-1 -right-2 bg-white text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-black">
                  {total}
                </span>
              </div>
            </Link>
            <UserDropdown
              email={user.email || "Guest"}
              name={user.given_name || "User"}
              userImage={user.picture || `https://avatar.vercel.sh/${user.given_name}`}
            />
          </>
        ) : (
          <div className="md:flex md:flex-1 md:items-center md:justify-end md:space-x-2 text-white">
            <Button variant={"ghost"} asChild>
              <LoginLink>Login</LoginLink>
            </Button>
            <Button variant={"ghost"} asChild>
              <RegisterLink>Sign up</RegisterLink>
            </Button>
          </div>
        )}
      </div>
    </motion.nav>
  );
};
