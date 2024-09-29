import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import Link from "next/link";

interface iAppProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[];
  };
}

export function ProductCard({ item }: iAppProps) {
  return (
    <div className="rounded-lg  duration-300 hover:shadow-4xl">
      <Carousel className="w-full mx-auto">
        <CarouselContent>
          {item.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[330px] overflow-hidden">
                <Image
                  src={image}
                  alt={`Product Image ${index + 1} of ${item.name}`}
                  fill
                  className="object-cover object-center w-full h-full rounded-lg
                    transform transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1 hover:shadow-xl"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-4 sm:ml-16" />
        <CarouselNext className="mr-4 sm:mr-16" />
      </Carousel>

      <div className="flex justify-between items-center mt-3">
        <h1 className="font-semibold text-lg sm:text-xl">{item.name}</h1>
        <span
          className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary
            ring-1 ring-inset ring-primary/10"
        >
          ₹{item.price}
        </span>
      </div>

      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {item.description}
      </p>

      <Button asChild className="w-full mt-5">
        <Link href={`/product/${item.id}`} passHref>
          Learn More!
        </Link>
      </Button>
    </div>
  );
}

export function LoadingProductCard() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Skeleton className="w-full h-[330px] rounded-lg" />
      <div className="flex flex-col mt-2 gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-6 w-full" />
      </div>
      <Skeleton className="w-full h-10 mt-5 rounded-md" />
    </div>
  );
}
