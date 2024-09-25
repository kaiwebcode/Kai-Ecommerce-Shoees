"use client";

import { Button } from "@/components/ui/button";
import { Loader2, ShoppingBag } from "lucide-react";
import { useFormStatus } from "react-dom";

interface buttonProps {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export function SubmitButton({ text, variant }: buttonProps) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled variant={variant}>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button variant={variant} type="submit">
          {text}
        </Button>
      )}
    </>
  );
}

export function ShoppingBagButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled className="w-full mt-5" size={"lg"}>
          <Loader2 className="mr-3 h-5 w-5 animate-spin" /> Please wait
        </Button>
      ) : (
        <Button className="w-full mt-5" size={"lg"} type="submit">
          <ShoppingBag className="mr-4 h-5 w-5" /> Add to Cart
        </Button>
      )}
    </>
  );
}

export function DeleteItem() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button disabled className="font-medium text-end  bg-primary text-white p-1 rounded-md">
          Removing...
        </button>
      ) : (
        <Button type="submit" variant={"destructive"} className="font-mediump-1 rounded-lg p-2">
          Delete
        </Button>
      )}
    </>
  );
}

export function CheckoutButton() {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button className="w-full mt-5" size={"lg"} type="submit">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Please wait
        </Button>
      ) : (
        <Button className="w-full mt-5" size={"lg"} type="submit">
          Checkout
        </Button>
      )}
    </>
  );
}
