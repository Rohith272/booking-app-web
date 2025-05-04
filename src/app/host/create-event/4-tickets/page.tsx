"use client";

import { ticketSchema, TicketSchema } from "./schema";
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
  Tickets,
  CalendarIcon,
  TicketPlus,
  IndianRupee,
  Check,
  X,
  MessageSquareText,
  TicketIcon,
  Dot,
  MessageSquareWarningIcon,
  AlertCircleIcon,
} from "lucide-react";
import { CreateTicketDrawerDialog } from "./CreateTicketForm";

const Page = () => {
  const router = useRouter();
  const formContext = useCreateEvent();

  const prevStep = () => {
    // 3-event-location
    router.push(steps[2].route);
  };
  const nextStep = () => {
    // 5-other-details
    router.push(steps[4].route);
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:mx-auto md:max-w-screen-2xl md:grid-cols-1">
        <CreateTicketDrawerDialog />
        <div className="grid min-h-60 place-items-stretch gap-4 rounded-lg bg-background p-4 shadow-inner sm:grid-cols-1 md:grid-cols-2">
          {formContext.form?.tickets.length &&
          formContext.form.tickets.length > 0 ? (
            formContext.form.tickets.map((item, index) => (
              <div
                className="rounded-lg border bg-card bg-gradient-to-bl from-background via-card to-background p-4 text-sm shadow-sm"
                key={index}
              >
                <p className="pb-2 text-lg">
                  {/* Ticket Name: */} {item.ticketName}
                </p>
                <div className="flex flex-wrap gap-2">
                  <p className="flex">
                    <span className="rounded-lg bg-amber-500/25 px-2 py-1 text-amber-700 dark:bg-amber-400/25 dark:text-amber-400">
                      ₹ {item.amount}
                    </span>
                  </p>
                  <p className="flex">
                    <span className="rounded-lg py-1 text-muted-foreground">
                      Quantity: {item.totalQuantity}
                    </span>
                  </p>
                  <div className="flex">
                    {item.allowBulkBooking ? (
                      <p className="flex items-center gap-1 text-muted-foreground">
                        <Check className="h-4 w-4" />
                        Bulk Booking
                      </p>
                    ) : (
                      <p className="flex items-center gap-1 text-muted-foreground">
                        <Dot className="h-4 w-4" />
                        No Bulk Booking
                      </p>
                    )}
                  </div>
                </div>

                <div className="py-4">
                  <p className="text-xs text-muted-foreground">
                    <span>Sale from </span>
                    {item.ticketSaleEndsOn.toLocaleString()}
                    <span> to </span>
                    {item.ticketSaleEndsOn.toLocaleString()}
                  </p>
                </div>

                <div className="">
                  <ScrollArea className="h-12">
                    <p className="text-muted-foreground">
                      <MessageSquareText className="mr-2 inline-block h-4 w-4" />
                      {item.messageToAttendee}
                    </p>
                    <ScrollBar />
                  </ScrollArea>
                </div>
              </div>
            ))
          ) : (
            <div className="text-muted-foreground">
              <AlertCircleIcon className="inline-block mr-2"/>
              Please create atleast one ticket</div>
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
