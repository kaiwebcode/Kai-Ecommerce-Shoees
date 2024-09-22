"use client"; // Ensure it's a Client Component
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, PartyPopper, ShoppingBag, User2 } from "lucide-react";
import CountUp from "react-countup";

interface DashboardStatsProps {
  totalRevenue: number;
  totalSales: number;
  totalUsers: number;
  totalProducts: number;
}

export default function DashboardStats({
  totalRevenue,
  totalSales,
  totalUsers,
  totalProducts,
}: DashboardStatsProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {/* Total Revenue */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Revenue</CardTitle>
          <DollarSign className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            ₹<CountUp end={totalRevenue / 100} duration={3} />
          </p>
          <p className="text-xs text-muted-foreground">Based on 100 Charges</p>
        </CardContent>
      </Card>

      {/* Total Sales */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Sales</CardTitle>
          <ShoppingBag className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            <CountUp end={totalSales} duration={2.5} />
          </p>
          <p className="text-xs text-muted-foreground">
            Total Sales on Kai-Shoe
          </p>
        </CardContent>
      </Card>

      {/* Total Products */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Products</CardTitle>
          <PartyPopper className="h-4 w-4 text-indigo-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            <CountUp end={totalProducts} duration={2.5} />
          </p>
          <p className="text-xs text-muted-foreground">
            Total Products created
          </p>
        </CardContent>
      </Card>

      {/* Total Users */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle>Total Users</CardTitle>
          <User2 className="h-4 w-4 text-orange-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">
            <CountUp end={totalUsers} duration={2.5} />
          </p>
          <p className="text-xs text-muted-foreground">
            Total Users Signed Up on Kai-Shoe
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
