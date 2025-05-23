"use client";

import SignupForm from "./form";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div>
      <div>
        <h1 className="py-8 text-center text-xl font-semibold">
          Create new account
        </h1>
        <div className="mx-auto flex max-w-screen-lg flex-col gap-2">
          <div className="mx-auto mb-4 flex w-72 items-stretch gap-2 self-end rounded-lg bg-muted p-1 font-semibold md:mr-16">
            <Link
              href={`login`}
              className="flex-grow rounded-md px-3 py-2 text-center text-muted-foreground transition-transform active:scale-95"
            >
              Login
            </Link>
            <Link
              href={`signup`}
              className="flex-grow rounded-md bg-background px-3 py-2 text-center shadow-sm transition-transform active:scale-95"
            >
              Signup
            </Link>
          </div>
          <div className="md:mr-16 md:self-end">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="">{/* image */}</div>
    </div>
  );
};

export default SignupPage;
