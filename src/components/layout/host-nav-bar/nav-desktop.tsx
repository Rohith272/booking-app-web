import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import FeatureMenu from "./feature-menu";
import ProfileContent from "./profile-content";

const NavDesktop = () => {
  return (
    <div className="mr-4 hidden md:flex md:gap-4">
      <FeatureMenu />
      <Popover>
        <PopoverTrigger className="flex h-10 items-center gap-2 px-4 py-2 text-sm">
          <Avatar className="border-2">
            <AvatarImage src="" />
            <AvatarFallback className="">
              <UserRound />
            </AvatarFallback>
          </Avatar>
          Nihad
        </PopoverTrigger>
        <PopoverContent>
          <ProfileContent />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NavDesktop;
