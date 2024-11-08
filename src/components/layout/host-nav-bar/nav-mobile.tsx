"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
  CircleChevronDown,
  CircleEllipsis,
  Ellipsis,
  MenuIcon,
  PanelTopOpen,
} from "lucide-react";
import { useState } from "react";
import ProfileContent from "./profile-content";

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {/* <MenuIcon className="md:hidden" size={28} /> */}
        <CircleChevronDown className="md:hidden" size={22} />
      </SheetTrigger>
      <SheetContent side={"top"}>
        <div className="flex flex-col gap-2">
          <div className="py-4 text-xl">The Booking App</div>
          <ProfileContent />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
