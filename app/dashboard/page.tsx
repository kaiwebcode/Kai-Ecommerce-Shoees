import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import DashboardStats from "../components/dashboard/DashboardStats";
import { unstable_noStore as noStore } from "next/cache";
import prisma from "../lib/db";
import { Chart } from "../components/dashboard/Chart"; // Updated import
import { RecentSales } from "../components/dashboard/RecentSales";

async function getData() {
  const now = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(now.getDate() - 7);

  const orders = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: sevenDaysAgo,
      },
    },
    select: {
      amount: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const users = await prisma.user.findMany({
    select: {
      id: true,
    },
  });

  const products = await prisma.product.findMany({
    select: {
      id: true,
    },
  });

  const recentSales = await prisma.order.findMany({
    select: {
      amount: true,
      id: true,
      User: {
        select: {
          firstName: true,
          profileImage: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 7,
  });

  const result = orders.map((item) => ({
    date: new Intl.DateTimeFormat("en-IN").format(item.createdAt),
    revenue: item.amount / 100,
  }));

  return {
    orders,
    users,
    products,
    chartData: result,
    recentSales,
  };
}

export default async function Dashboard() {
  noStore();
  const data = await getData();

  const totalRevenue = data.orders.reduce((acc, curr) => acc + curr.amount, 0);
  const totalSales = data.orders.length;
  const totalUsers = data.users.length;
  const totalProducts = data.products.length;

  return (
    <>
      <div>
        <h1 className="lg:text-4xl text-3xl font-bold py-6">Welcome back, KAI</h1>
        <DashboardStats
          totalRevenue={totalRevenue}
          totalSales={totalSales}
          totalUsers={totalUsers}
          totalProducts={totalProducts}
        />

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle>Transactions</CardTitle>
              <CardDescription>
                Recent transactions from the last 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Chart data={data.chartData} /> {/* Updated Chart */}
            </CardContent>
          </Card>

          <RecentSales sales={data.recentSales} />
        </div>
      </div>
    </>
  );
}
