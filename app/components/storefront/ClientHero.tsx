"use client"; // Client component
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";

interface HeroItem {
  id: string | number;
  imageString: string;
  title: string;
}

interface ClientHeroProps {
  data: HeroItem[];
}

export const ClientHero: React.FC<ClientHeroProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      className="h-full lg:h-screen"
    >
      <Carousel>
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id}>
              <div className="relative h-[30vh] lg:h-[80vh] mt-10">
                <Image
                  alt="Banner Image"
                  src={item.imageString}
                  fill
                  className="object-cover w-full h-full rounded-2xl"
                />
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.0, ease: "easeIn", delay: 0.8 }}
                  className="absolute lg:top-6 lg:left-6 top-2 left-3 bg-opacity-75 bg-black text-white lg:p-8 p-3 rounded-xl shadow-lg transition-transform hover:scale-105"
                >
                  <h1 className="sm:text-xs lg:text-4xl md:text-2xl font-bold">
                    {item.title}
                  </h1>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="ml-16" />
        <CarouselNext className="mr-16" />
      </Carousel>
    </motion.div>
  );
};
