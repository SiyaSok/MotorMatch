/** @format */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import CredentialsSignUpForm from "./credentials-signup-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

/** @format */
export const metadata: Metadata = {
  title: "Sign Up",
};
const SignInPage = async (props: {
  searchParams: Promise<{
    callbackUrl: string;
  }>;
}) => {
  const { callbackUrl } = await props.searchParams;

  const session = await auth();

  if (session) {
    return redirect(callbackUrl || "/");
  }

  return (
    <div className='w-full max-w-md mx-auto mt-40'>
      <Card>
        <CardHeader className='space-y-4'>
          <Link href='/' className='flex-center'>
            <h1 className='text-2xl font-bold text-center'>MotoMatch.COM</h1>
          </Link>
          <CardTitle className='text-center'>Sign up now</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <CredentialsSignUpForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
