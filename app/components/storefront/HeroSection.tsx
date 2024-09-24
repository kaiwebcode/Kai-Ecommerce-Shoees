"use client";

import { Check, Star } from "lucide-react";
import Image from "next/image";
import Hero from "@/public/Hero.jpg.jpg";
import CountUp from "react-countup";

const HeroSection = () => {
  return (
    <section>
      <div className="pb-6 pt-6 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pb-30">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div
            className="relative mx-auto text-center lg:text-left
            flex flex-col items-center lg:items-start"
          >
            <div
              className="absolute w-28 left-0 -top-20 hidden
              lg:block"
            ></div>
            <h1
              className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl
              md:text-6xl lg:text-7xl"
            >
              Discover the Latest in{" "}
              <span className="bg-slate-900 px-2 text-white">Stylish</span>{" "}
              Shoes
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              Step into a world of comfort and fashion with our{" "}
              <span className="font-semibold">premium collection</span> of
              shoes. Whether you're heading to the gym or a night out, we have
              the perfect pair for you.
            </p>

            <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
              <div className="space-y-2">
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  High-quality, durable materials
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  Designed for comfort and style
                </li>
                <li className="flex gap-1.5 items-center text-left">
                  <Check className="h-5 w-5 shrink-0 text-green-600" />
                  Available in a variety of sizes and colors
                </li>
              </div>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="flex -space-x-4">
                {/* Replace the user images with your own optimized URLs */}
                {[
                  "https://github.com/joschan21/casecobra/raw/master/public/users/user-1.png",
                  "https://github.com/joschan21/casecobra/raw/master/public/users/user-2.png",
                  "https://github.com/joschan21/casecobra/raw/master/public/users/user-3.png",
                  "https://github.com/joschan21/casecobra/raw/master/public/users/user-4.jpg",
                  "https://github.com/joschan21/casecobra/raw/master/public/users/user-5.jpg",
                ].map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt={`user image-${index + 1}`}
                    width={40} // Adjusted size for better visibility
                    height={40}
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                  />
                ))}
              </div>

              <div className="flex flex-col justify-between items-center sm:items-start">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 text-green-600 fill-green-600" />
                  ))}
                </div>
                <p>
                  <span className="font-semibold">
                    <CountUp end={1250} duration={5} />{" "}
                    {/* Added CountUp here */}
                  </span>{" "}
                  happy customers walking in style
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-y-6 sm:gap-x-2">
          <div className="group rounded-xl overflow-hidden sm:aspect-w-1 sm:row-span-2">
            <Image
              src={Hero}
              alt="Shoes collection showcase"
              className="object-cover object-center"
              width={500} // Provide appropriate width and height
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;