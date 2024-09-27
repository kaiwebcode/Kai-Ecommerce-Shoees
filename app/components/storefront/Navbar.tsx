// Navbar.tsx
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redis } from "@/app/lib/redis";
import { Cart } from "@/app/lib/interfaces";
import { ClientNavbar } from "./ClientNavbar";

export async function Navbar() {
  // Fetch user session from Kinde
  const { getUser } = getKindeServerSession();
  const user = await getUser(); // user can be null if not logged in

  // Fetch cart data from Redis using user ID
  const cart: Cart | null = user ? await redis.get(`cart-${user.id}`) : null;

  // Calculate the total items in the cart
  const total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;

  // Handle null cases for user fields
  const safeUser = user
    ? {
        email: user.email || null,
        given_name: user.given_name || null,
        picture: user.picture || null,
      }
    : null;

  // Pass server-side data as props to ClientNavbar
  return <ClientNavbar total={total.toString()} user={safeUser} />;
}
