"use client";

import Link from "next/link";
import { steps } from "./data";
import { usePathname } from "next/navigation";

const Stepper = () => {
  const fullPathname = usePathname();
  const pathname = fullPathname.split("/").pop();
  return (
    <div className="flex flex-col gap-6">
      {steps.map((step) => {
        return (
          <Link
            href={`${step.route}`}
            className={`flex cursor-pointer items-center justify-start gap-2 text-sm font-semibold ${pathname === step.route ? "text-primary" : "text-muted-foreground"}`}
            key={step.id}
          >
            <span
              className={`flex h-7 w-7 items-center justify-center rounded-full ${pathname === step.route ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
            >
              {step.id}
            </span>
            {step.name}
          </Link>
        );
      })}
    </div>
  );
};

export default Stepper;
