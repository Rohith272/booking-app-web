import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronDown, UserRound } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import FeatureMenu from "./feature-menu";
import ProfileContent from "./profile-content";

const NavDesktop = () => {
  return (
    <div className="hidden md:flex md:gap-4">
      <FeatureMenu />
      <Popover>
        <PopoverTrigger className="flex h-10 items-center gap-2 text-sm">
          <Avatar className="">
            <AvatarImage src="" />
            <AvatarFallback className="">
              <UserRound />
            </AvatarFallback>
          </Avatar>
          Nihad
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </PopoverTrigger>
        <PopoverContent>
          <ProfileContent />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavDesktop;
