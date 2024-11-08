import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ThemeModeToggle from "@/components/common/theme-mode-toggle";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, LogOut } from "lucide-react";
import React from "react";
import Link from "next/link";

const ProfileContent = () => {
  return (
    <div className="text-sm">
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
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant={"outline"}>
            <LogOut />
            Signout
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to sign out?
            </AlertDialogTitle>
            <AlertDialogDescription>{/* Description */}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive">
              Signout
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ProfileContent;
