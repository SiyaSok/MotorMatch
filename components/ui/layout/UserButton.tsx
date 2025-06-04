/** @format */

//import { signOutUser } from "@/lib/actions/user.action";
import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuLabel,
//   DropdownMenuTrigger,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { UserIcon } from "lucide-react";
import { auth } from "@/auth";

const UserButton = async () => {
  const session = await auth();

  console.log("UserButton session:", session);
  return (
    <Button asChild variant={"secondary"}>
      <Link href='/sign-in'>
        <UserIcon className='' />
        Sign In
      </Link>
    </Button>
  );
};

export default UserButton;
