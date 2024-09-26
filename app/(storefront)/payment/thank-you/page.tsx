import { Cart } from "@/app/lib/interfaces";
import { redis } from "@/app/lib/redis";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Check } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function SuccessRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  const cart: Cart | null = await redis.get(`cart-${user.id}`);

  let totalPrice = 0;

  cart?.items.forEach((item) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-xl">
          <h1 className="text-3xl font-medium text-primary">Thank you!</h1>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Your Shoe is on the way!
          </h1>
          <p className="mt-2 text-base text-zinc-500">
            We've received your order and are now processing it.
          </p>
        </div>

        <div className="my-10 border-t border-zinc-200">
          <div className="mt-10 flex flex-auto flex-col">
            <h4 className="font-semibold text-zinc-900">
              You made a great choice!
            </h4>
            <p className="mt-2 text-sm text-zinc-600">
              We at CaseCobra believe that a phone case doesn't only need to
              look good, but also last you for the years to come. We offer a
              5-year print guarantee: If you case isn't of the highest quality,
              we'll replace it for free.
            </p>
          </div>
        </div>
        {cart?.items.map((item) => (
          <div className="mt-10" key={item.id}>
            <div className="flex items-center justify-between font-medium">
              <p>Subtotal:</p>
              <p>₹{new Intl.NumberFormat("en-IN").format(totalPrice)}</p>
            </div>
          </div>
        ))}
        <Card className="mx-auto px-4 my-10">
          <div className="p-6">
            <div className="w-full flex justify-center ">
              <Check className="w-12 h-12 rounded-full bg-green-500/30 text-green-500 p-2" />
            </div>

            <div className="mt-3 text-center sm:mt-5 w-full">
              <h3 className="text-lg leading-6 font-medium">
                Payment Successfull
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Congrats to your purchase. Your payment was Successfully. We
                hope enjoy your product.
              </p>

              <Button asChild className="w-full mt-5 sm:mt-5">
                <Link href="/">Back to Homepage</Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
