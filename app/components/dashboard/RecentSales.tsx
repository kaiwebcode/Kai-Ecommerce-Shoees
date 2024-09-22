"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CountUp from "react-countup";

interface RecentSalesProps {
  sales: {
    amount: number;
    id: string;
    User: {
      firstName: string;
      profileImage: string | null;
      email: string;
    } | null;
  }[];
}

export function RecentSales({ sales }: RecentSalesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent sales</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        {sales.map((item) => (
          <div className="flex items-center gap-4" key={item.id}>
            <Avatar className="hidden sm:flex h-9 w-9">
              <AvatarFallback>
                {item.User?.firstName.slice(0, 3)}
              </AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium">{item.User?.firstName}</p>
              <p className="text-sm text-muted-foreground">
                {item.User?.email}
              </p>
            </div>
            <p className="ml-auto font-medium">
              ₹<CountUp end={item.amount / 100} duration={3} separator="," />
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
