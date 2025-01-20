"use client";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { CircleChevronDown } from "lucide-react";
import { useState } from "react";
import ProfileContent from "./profile-content/profile-content";

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <CircleChevronDown className="md:hidden" size={22} />
      </SheetTrigger>
      <SheetContent side={"top"}>
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation bar</SheetTitle>
        </SheetHeader>
        <SheetDescription></SheetDescription>
        <div className="py-4 text-xl text-muted-foreground">The Booking App</div>
        <div className="flex flex-col gap-2">
          <ProfileContent />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
