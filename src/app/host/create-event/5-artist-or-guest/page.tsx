"use client";

import { artistOrGuestSchema, ArtistOrGuestSchema } from "./schema";
import { steps } from "../data";
import { useCreateEvent } from "@/lib/hooks/use-create-event";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "@/lib/hooks/use-media-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TimePicker12Demo } from "@/components/ui/extensions/time-picker/time-picker-12h-demo";
import {
  ChevronLeft,
  ChevronRight,
  Save,
  CalendarIcon,
  Check,
  MessageSquareText,
  Dot,
  UserPlus,
} from "lucide-react";
import PreviewImageFile from "@/components/common/preview-image-file";
import { DrawerDialog } from "./drawer-dialog";

const Page = () => {
  const router = useRouter();
  const formContext = useCreateEvent();

  const prevStep = () => {
    // 4-tickets
    router.push(steps[3].route);
  };
  const nextStep = () => {
    // 5-photos
    router.push(steps[5].route);
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:mx-auto md:max-w-screen-2xl md:grid-cols-1">
        <DrawerDialog />
        <div className="grid min-h-60 place-items-stretch gap-4 rounded-lg bg-background p-4 shadow-inner sm:grid-cols-1 md:grid-cols-3">
          {formContext.form?.artistOrGuest.length &&
          formContext.form.artistOrGuest.length > 0 ? (
            formContext.form.artistOrGuest.map((item, index) => (
              <div
                className="rounded-lg border bg-card bg-gradient-to-bl from-background via-card to-background p-4 text-sm shadow-sm"
                key={index}
              >
                <p className="pb-2 text-lg inline-block">{item.name}</p>
                <p className="inline-block rounded-lg bg-amber-500/25 ml-2 px-2 py-1 text-sm text-amber-700 dark:bg-amber-400/25 dark:text-amber-400">
                  {item.tag}
                </p>
                <div className="">
                  <PreviewImageFile imageFile={item.image[0]} className="w-full rounded-md" altText="Image" />
                </div>
              </div>
            ))
          ) : (
            <div className="text-muted-foreground">Artist or Guest</div>
          )}
        </div>
      </div>
      <div className="flex justify-between gap-2">
        <Button
          type="submit"
          className="mt-8"
          onClick={prevStep}
          variant={"outline"}
        >
          <ChevronLeft />
          Previous
        </Button>
        <Button type="submit" className="mt-8" onClick={nextStep}>
          Next
          <ChevronRight />
        </Button>
      </div>
    </>
  );
};

export default Page;
