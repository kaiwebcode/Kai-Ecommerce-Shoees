import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent sales</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <Avatar className="hidden sm:flex h-9 w-9">
            {/* <AvatarImage src={item.User?.profileImage} alt="Avatar Image" /> */}
            <AvatarFallback>Kai</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Kaif</p>
            <p className="text-sm text-muted-foreground">kaibatman@gmail.com</p>
          </div>
          <p className="ml-auto font-medium">+₹5000</p>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden sm:flex h-9 w-9">
            {/* <AvatarImage src={item.User?.profileImage} alt="Avatar Image" /> */}
            <AvatarFallback>Kai</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Kaif</p>
            <p className="text-sm text-muted-foreground">kaibatman@gmail.com</p>
          </div>
          <p className="ml-auto font-medium">+₹5000</p>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden sm:flex h-9 w-9">
            {/* <AvatarImage src={item.User?.profileImage} alt="Avatar Image" /> */}
            <AvatarFallback>Kai</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Kaif</p>
            <p className="text-sm text-muted-foreground">kaibatman@gmail.com</p>
          </div>
          <p className="ml-auto font-medium">+₹5000</p>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden sm:flex h-9 w-9">
            {/* <AvatarImage src={item.User?.profileImage} alt="Avatar Image" /> */}
            <AvatarFallback>Kai</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Kaif</p>
            <p className="text-sm text-muted-foreground">kaibatman@gmail.com</p>
          </div>
          <p className="ml-auto font-medium">+₹5000</p>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden sm:flex h-9 w-9">
            {/* <AvatarImage src={item.User?.profileImage} alt="Avatar Image" /> */}
            <AvatarFallback>Kai</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium">Kaif</p>
            <p className="text-sm text-muted-foreground">kaibatman@gmail.com</p>
          </div>
          <p className="ml-auto font-medium">+₹5000</p>
        </div>
      </CardContent>
    </Card>
  );
}
