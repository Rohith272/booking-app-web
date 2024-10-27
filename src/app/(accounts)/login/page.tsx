"use client";

import LoginForm from "./form";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <h1 className="py-8 text-center text-xl font-semibold">
        Login to Continue
      </h1>
      <div className="relative mx-auto flex max-w-screen-lg flex-col gap-4">
        <div className="absolute left-[50%] flex h-full w-fit translate-x-[-50%] flex-col gap-4 md:left-[unset] md:right-16 md:translate-x-[0%]">
          <div className="flex w-72 flex-col gap-2">
            <div className="mb-4 flex w-full items-stretch gap-2 rounded-lg border border-foreground bg-foreground p-1 font-semibold">
              <Link
                href={`login`}
                className="flex-grow rounded-md border border-foreground bg-background px-3 py-2 text-center transition-transform active:scale-95"
              >
                Login
              </Link>
              <Link
                href={`signup`}
                className="flex-grow rounded-md border border-transparent px-3 py-2 text-center text-background transition-transform active:scale-95"
              >
                Signup
              </Link>
            </div>
            <LoginForm />
          </div>
        </div>
        <div className="">{/* image */}</div>
      </div>
    </div>
  );
};

export default LoginPage;
