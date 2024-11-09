"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const FeatureMenu = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname !== "/host/events" && <Button variant={"ghost"}>Events</Button>}
    </div>
  );
};

export default FeatureMenu;
