"use server";
import { addItem } from "@/app/actions";
import { FeaturedProduct } from "@/app/components/storefront/FeaturedProduct";
import { ImageSlider } from "@/app/components/storefront/ImageSlider";
import { ShoppingBagButton } from "@/app/components/SubmitButton";
import { StarIcon } from "lucide-react";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/app/lib/db";

// Fetch data from Prisma with error handling
async function getData(productId: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  try {
    const data = await prisma.product.findUnique({
      where: { id: productId },
      select: {
        price: true,
        images: true,
        description: true,
        name: true,
        id: true,
      },
    });

    // If no product is found, return a 404 response
    if (!data) {
      console.log("Product not found for id:", productId);
      return notFound();
    }

    console.log("Fetched product data:", data); // Log fetched data
    return data;

  } catch (error) {
    console.error("Error fetching data:", error); // Log errors
    throw new Error("Failed to fetch product data");
  }
}

// Main component function
export default async function ProductIdRouter({
  params,
}: {
  params: { id: string };
}) {
  noStore();

  let data;
  try {
    // Fetch product data
    data = await getData(params.id);
  } catch (error) {
    console.error("Error in ProductIdRouter:", error);
    return <p>Failed to load product. Please try again later.</p>;
  }

  // If data is not available, show a fallback UI
  if (!data) {
    return <p>Product not found</p>;
  }

  // Bind the addItem function for the shopping cart
  const addProducttoShoppingCart = addItem.bind(null, data.id);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
        {/* Image slider for product images */}
        <ImageSlider images={data.images} />

        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            {data.name}
          </h1>
          <p className="text-3xl mt-2 text-gray-900">₹{data.price}</p>

          {/* Star rating */}
          <div className="mt-3 flex items-center gap-1">
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          </div>

          {/* Product description */}
          <p className="text-base texxt-gray-700 mt-6">{data.description}</p>

          {/* Form to add product to cart */}
          <form action={addProducttoShoppingCart}>
            <ShoppingBagButton />
          </form>
        </div>
      </div>

      {/* Featured products section */}
      <div className="mt-16">
        <FeaturedProduct />
      </div>
    </>
  );
}
