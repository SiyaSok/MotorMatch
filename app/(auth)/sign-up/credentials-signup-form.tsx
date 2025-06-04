/** @format */
"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUpUser } from "@/lib/actions/user.action";
import { useSearchParams } from "next/navigation";
const CredentialsSignUpForm = () => {
  const [data, action] = useActionState(signUpUser, {
    success: false,
    message: "",
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const SignUpButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button
        disabled={pending}
        className='w-full bg-black hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors '
        variant='default'>
        {pending ? "Signing Up..." : "Sign Up"}
      </Button>
    );
  };

  return (
    <form action={action}>
      <input type='hidden' name='callbackUrl' value={callbackUrl} />
      <div className='space-y-6'>
        <div>
          <Label htmlFor='name' className='mb-2'>
            Name
          </Label>
          <Input
            id='name'
            name='name'
            type='text'
            autoComplete='name'
            defaultValue={""}
          />
        </div>
        <div>
          <Label htmlFor='email' className='mb-2'>
            Email
          </Label>
          <Input
            id='email'
            name='email'
            type='email'
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
            autoComplete='password'
            defaultValue={""}
          />
        </div>
        <div>
          <Label htmlFor='confirmPassword' className='mb-2'>
            Confirm Password
          </Label>
          <Input
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            required
            autoComplete='confirmPassword'
            defaultValue={""}
          />
        </div>
        {data && !data.success && (
          <div className='text-center text-destructive'>{data.message}</div>
        )}
        <div>
          <SignUpButton />
        </div>
        <div className='text-sm text-center text-muted-foreground'>
          I have an account?{" "}
          <Link href='/sign-in' target='_self' className='link'>
            Sign In
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignUpForm;
