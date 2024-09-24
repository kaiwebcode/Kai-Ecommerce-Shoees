import { type ReactNode } from "react";
import { Navbar } from "../components/storefront/Navbar";
import { Footer } from "../components/storefront/Footer";

export default function Storefront({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-slate-900 sticky top-0 z-50">
      <Navbar />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </>
  );
}
