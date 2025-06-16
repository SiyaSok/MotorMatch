/** @format */
"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signInWithCredentials } from "@/lib/actions/user.action";

const CredentialsSignInForm = ({ callbackUrl }: { callbackUrl?: string }) => {
  const [state, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button
        disabled={pending}
        className='bg-black hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors w-full'
        variant='default'>
        {pending ? "Signing In..." : "Sign In"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type='hidden' name='callbackUrl' value={callbackUrl || "/"} />
      <div className='space-y-6'>
        <div>
          <Label htmlFor='email' className='mb-2'>
            Email
          </Label>
          <Input
            id='email'
            name='email'
            type='email'
            required
            autoComplete='email'
            defaultValue={""}
          />
        </div>
        <div>
          <Label htmlFor='password' className='mb-2'>
            Password
          </Label>
          <Input
            id='password'
            name='password'
            type='password'
            required
            autoComplete='current-password'
            defaultValue={""}
          />
        </div>
        {state && !state.success && (
          <div className='text-center text-destructive'>{state.message}</div>
        )}
        <div>
          <SignInButton />
        </div>
        <div className='text-sm text-center text-muted-foreground'>
          Don&apos;t have an account?{" "}
          <Link href='/sign-up' target='_self' className='link'>
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
