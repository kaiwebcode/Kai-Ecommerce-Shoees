import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { DashboardStats } from "../components/dashboard/DashboardStats";
import { RecentSales } from "../components/dashboard/RecentSales";
import { unstable_noStore as noStore } from "next/cache";

export default async function Dashboard() {
  noStore();
  return (
    <>
      <DashboardStats />

      <div className="grid gap-4 md:gp-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>Transaction</CardTitle>
            <CardDescription>
              Recent transaction from the last 7 days
            </CardDescription>
          </CardHeader>
          <CardContent></CardContent>
        </Card>

        <RecentSales />
      </div>
    </>
  );
}
