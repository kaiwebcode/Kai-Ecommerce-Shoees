import prisma from "@/app/lib/db";
import { ClientHero } from "./ClientHero";

async function getData() {
  const data = await prisma.banner.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export async function Hero() {
  const data = await getData();
  // console.log(data);
  return (
    <ClientHero data={data}/>
  );
}
