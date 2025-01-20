import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ThemeModeToggle from "@/components/common/theme-mode-toggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, LogOut } from "lucide-react";
import React from "react";
import Link from "next/link";
import LogoutComponent from "./logout/logout";
import Me from "./me";

const ProfileContent = () => {
  return (
    <div className="text-sm">
      <Me />
      <Card>
        <CardHeader>
          <CardDescription>Organizer</CardDescription>
          <CardTitle className="text-base">
            Institute of Engineering and Technology, University of Calicut
          </CardTitle>
          <Link href={``} className="flex items-center gap-2 hover:underline">
            Manage organizer profile
            <ChevronRight size={15} />
          </Link>
        </CardHeader>
      </Card>

      <Card className="mt-2">
        <CardHeader>
          <CardDescription>User</CardDescription>
          <CardTitle className="text-base">Nihad</CardTitle>
          <CardDescription>mail@example.com</CardDescription>
          <Link href={``} className="flex items-center gap-2 hover:underline">
            Manage user profile
            <ChevronRight size={15} />
          </Link>
        </CardHeader>
      </Card>

      <div className="mt-2 flex w-full items-center justify-between">
        Theme <ThemeModeToggle />
      </div>
      <Separator className="my-2" />
      <LogoutComponent />
    </div>
  );
};

export default ProfileContent;
