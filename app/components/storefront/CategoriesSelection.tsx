"use client";
import Image from "next/image";
import Link from "next/link";
import all from "@/public/men.jpg";
import men from "@/public/all.jpg";
import women from "@/public/women.jpg";
import { motion } from "framer-motion";

export function CategoriesSelection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="flex justify-between items-center">
        <motion.h2 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:text-2xl sm:text-xs font-extrabold tracking-tight"
        >
          Shop by Category
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Link
            className="lg:text-sm text-xs font-semibold text-primary hover:text-primary/80"
            href="/products/all"
          >
            Browse all Product &rarr;
          </Link>
        </motion.div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2 shadow-lg hover:shadow-2xl"
        >
          <Image
            src={all}
            alt="All products"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-60 absolute inset-0" />
          <div className="p-6 flex items-end relative z-10">
            <Link href="/products/all">
              <motion.h3 
                initial={{ opacity: 100 }}
                transition={{ delay: 0.3 }}
                className="text-white font-semibold"
              >
                All Products
              </motion.h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full shadow-lg hover:shadow-2xl"
        >
          <Image
            src={men}
            alt="Products for men"
            className="object-top object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-60 absolute inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0 relative z-10">
            <Link href="/products/men">
              <h3 className="text-white font-semibold">Products for Men</h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="group aspect-w-2 aspect-h-1 rounded-xl overflow-hidden sm:relative sm:aspect-none sm:h-full shadow-lg hover:shadow-2xl"
        >
          <Image
            src={women}
            alt="Products for women"
            className="object-bottom object-cover sm:absolute sm:inset-0 sm:w-full sm:h-full transition-transform duration-500 group-hover:scale-105"
          />
          <div className="bg-gradient-to-b from-transparent to-black opacity-60 absolute inset-0" />
          <div className="p-6 flex items-end sm:absolute sm:inset-0 relative z-10">
            <Link href="/products/women">
              <h3 className="text-white font-semibold">Products for Women</h3>
              <p className="mt-1 text-sm text-white">Shop Now</p>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
