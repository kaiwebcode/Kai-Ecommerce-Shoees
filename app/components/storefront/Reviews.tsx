"use client"

import { Check, Star } from "lucide-react";
import Image from "next/image";

const Reviews = () => {
  return (
    <section className="grainy-dark pb-24">
      <div className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900">
            What our <span className="relative px-2">customers </span> say
          </h2>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-1">
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
            </div>
            <div className="text-lg leading-8">
              <p>
                "I wear these shoes almost every day, and despite the heavy use,
                The case feels durable and I even got a compliment on the design{" "}
                <span className="p-0.5 bg-slate-800 text-white">
                  they still look brand new after half a year
                </span>
                . They're super durable and go perfectly with any outfit. Highly
                recommend!"
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <Image
                width={40} // Adjusted size for better visibility
                height={40}
                src="https://github.com/joschan21/casecobra/raw/master/public/users/user-1.png"
                className="rounded-full h-12 w-12 object-cover"
                alt="user"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Jonathan</p>
                <div className="flex gap-1.5 items-center text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>

          {/* second user review */}
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <div className="flex gap-0.5 mb-2">
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
              <Star className="h-5 w-5 text-green-600 fill-green-600" />
            </div>
            <div className="text-lg leading-8">
              <p>
                "These shoes are not only stylish but also super comfortable.
                I've been wearing them for a few months now, and{" "}
                <span className="p-0.5 bg-slate-800 text-white">
                  they still look as good as new
                </span>
                . The fit is perfect, and I get compliments wherever I go!"
              </p>
            </div>
            <div className="flex gap-4 mt-2">
              <Image
                width={40} // Adjusted size for better visibility
                height={40}
                src="https://github.com/joschan21/casecobra/raw/master/public/users/user-5.jpg"
                className="rounded-full h-12 w-12 object-cover"
                alt="user1"
              />
              <div className="flex flex-col">
                <p className="font-semibold">Josh</p>
                <div className="flex gap-1.5 items-center text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
