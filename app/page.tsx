import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      <Button>
        <LoginLink>Login</LoginLink>
      </Button>
      <Button>
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  );
}
