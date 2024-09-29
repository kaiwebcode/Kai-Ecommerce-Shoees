import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import ThankClient from "./thank-client";

// Define the structure that ThankClient expects
interface User {
  name: string;
  email: string;
}

export default async function SuccessRoute() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  if (!kindeUser) {
    redirect("/");
  }

  // Map Kinde user fields to the expected structure
  const user: User = {
    name: kindeUser.given_name || "Guest", // Default to "Guest" if name is missing
    email: kindeUser.email || "No email",
  };

  return <ThankClient user={user} />;
}
