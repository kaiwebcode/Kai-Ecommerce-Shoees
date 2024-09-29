"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Confetti from "react-dom-confetti";
import { motion } from "framer-motion";

// Define the expected structure for the user prop
interface User {
  name: string;
  email: string;
}

interface ThankClientProps {
  user: User;
}

const ThankClient: React.FC<ThankClientProps> = ({ user }) => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);

  // Trigger confetti only once when the component is mounted
  useEffect(() => {
    setShowConfetti(true);
  }, []);

  // Animation variants for the text reveal
  const textReveal = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 flex justify-center overflow-hidden pointer-events-none select-none"
      >
        <Confetti
          active={showConfetti}
          config={{
            angle: 90,
            spread: 360,
            startVelocity: 40,
            elementCount: 200,
            dragFriction: 0.15,
            duration: 3000,
            stagger: 3,
            width: "10px",
            height: "10px",
            colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
          }}
        />
      </div>
      <section className="w-full min-h-[80vh] flex items-center justify-center">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-20 lg:px-6">
          <div className="max-w-xl text-center">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={textReveal}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="text-3xl font-bold text-primary"
            >
              Thank you, {user.name}!
            </motion.h1>
            <motion.h2
              initial="hidden"
              animate="visible"
              variants={textReveal}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mt-2 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900"
            >
              Your shoes are on the way!
            </motion.h2>
            <p className="mt-4 text-base text-zinc-500">
              We've received your order and are now processing it. You’ll receive
              an email confirmation at {user.email} shortly.
            </p>
          </div>

          <div className="my-6 border-t border-zinc-200"></div>

          <div className="flex flex-col items-center space-y-3">
            <h4 className="text-xl font-semibold text-zinc-900">
              You made a great choice!
            </h4>
            <p className="text-sm text-zinc-600 max-w-md text-center">
              At Kai-Shoes, we believe that a great pair of shoes doesn’t just
              look good but offers comfort that lasts. Your purchase is protected
              by our 5-year wear guarantee. If your shoes don’t meet the highest
              quality standards, we’ll replace them for free.
            </p>
          </div>

          <Card className="mt-16 mx-auto px-6 py-8 bg-white shadow-md sm:max-w-md">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Check className="w-12 h-12 rounded-full bg-green-500/30 text-green-500 p-2" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Payment Successful
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Congratulations on your purchase! Your payment was successfully
                processed. We hope you enjoy your new shoes.
              </p>
            </div>

            <Button asChild className="w-full mt-6">
              <Link href="/">Back to Homepage</Link>
            </Button>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ThankClient;
