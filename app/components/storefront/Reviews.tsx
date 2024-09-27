"use client";

import { motion } from "framer-motion"; // Import motion from framer-motion
import { Check, Star } from "lucide-react";
import Image from "next/image";

const Reviews = () => {
  // Animation variants
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="grainy-dark pb-24">
      <div className="flex flex-col items-center gap-16 sm:gap-32">
        <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={textReveal}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900"
          >
            What our <span className="relative px-2">customers </span> say
          </motion.h2>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
          {/* First Review */}
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textReveal}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-0.5 mb-1"
            >
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-5 w-5 text-green-600 fill-green-600" />
              ))}
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={textReveal}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-8"
            >
              "I wear these shoes almost every day, and despite the heavy use,
              they still look brand new after half a year. They're super durable and
              go perfectly with any outfit. Highly recommend!"
            </motion.p>
            <div className="flex gap-4 mt-2">
              <Image
                width={40}
                height={40}
                src="https://github.com/joschan21/casecobra/raw/master/public/users/user-1.png"
                className="rounded-full h-12 w-12 object-cover"
                alt="user"
              />
              <div className="flex flex-col">
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={textReveal}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-semibold"
                >
                  Jonathan
                </motion.p>
                <div className="flex gap-1.5 items-center text-zinc-600">
                  <Check className="h-4 w-4 stroke-[3px] text-green-600" />
                  <p className="text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Review */}
          <div className="flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={textReveal}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-0.5 mb-2"
            >
              {[...Array(5)].map((_, index) => (
                <Star key={index} className="h-5 w-5 text-green-600 fill-green-600" />
              ))}
            </motion.div>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={textReveal}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-8"
            >
              "These shoes are not only stylish but also super comfortable.
              I've been wearing them for a few months now, and they still look
              as good as new. The fit is perfect, and I get compliments wherever I go!"
            </motion.p>
            <div className="flex gap-4 mt-2">
              <Image
                width={40}
                height={40}
                src="https://github.com/joschan21/casecobra/raw/master/public/users/user-5.jpg"
                className="rounded-full h-12 w-12 object-cover"
                alt="user1"
              />
              <div className="flex flex-col">
                <motion.p
                  initial="hidden"
                  whileInView="visible"
                  variants={textReveal}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="font-semibold"
                >
                  Josh
                </motion.p>
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
