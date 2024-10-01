import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import prisma from "@/app/lib/db";

async function getData() {
  const data = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function ProductsRoute() {
  noStore();
  const data = await getData();
  return (
    <>
      <div className="flex items-center justify-end"></div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Users</CardTitle>
          <CardDescription>
            Manage your Users and view their sales performance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.firstName}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat("en-IN").format(item.createdAt)}
                  </TableCell>
                  <TableCell className="text-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="icon" variant={"ghost"}>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />

                        <Link href={`/dashboard/users/${item.id}/delete`}>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </Link>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
