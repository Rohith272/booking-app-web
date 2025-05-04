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


export function CreateTicketDrawerDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" size={"lg"} className="max-w-72">
            <TicketPlus />
            Create New Ticket
          </Button>
        </DialogTrigger>
        {/* sm:max-w-[425px] */}
        <DialogContent className="max-w-screen-lg" disableOutsideClick>
          <ScrollArea className="max-h-[calc(90vh)] max-w-screen-xl">
            <DialogHeader>
              <DialogTitle className="pl-4 pt-4">Create New Ticket</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <CreateTicketForm
              className="px-4 pb-4"
              closeDialog={() => setOpen(false)}
            />
            <ScrollBar />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="default">Create New Ticket</Button>
      </DrawerTrigger>
      <DrawerContent>
        <ScrollArea className="h-[calc(90vh)] max-w-screen-xl">
          <DrawerHeader className="text-left">
            <DrawerTitle>Create New Ticket</DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <CreateTicketForm
            className="px-4"
            closeDialog={() => setOpen(false)}
          />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}

function CreateTicketForm({
  className,
  closeDialog,
}: React.ComponentProps<"form"> & { closeDialog: () => void }) {
  const formContext = useCreateEvent();

  const form = useForm<TicketSchema>({
    resolver: zodResolver(ticketSchema),
    mode: "onChange",
    defaultValues: {
      ticketName: "",
      amount: 100,
      totalQuantity: 100,
      allowBulkBooking: false,
      messageToAttendee: "",
    },
  });

  const handleSubmit = (values: TicketSchema) => {
    console.log(values);
    formContext.updateForm({
      tickets: [...(formContext.form?.tickets || []), values],
    });
    closeDialog();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn(className, "flex flex-col gap-4")}
      >
        {/* <h1 className="mb-4 text-muted-foreground">{steps[2].name}</h1> */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 md:py-4">
          <FormField
            control={form.control}
            name="ticketName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ticket Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  eg: Bronze, Silver, Gold or Platinum
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amount</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="" {...field} />
                </FormControl>
                <FormDescription>
                  Zero (0) if the ticket is free
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="totalQuantity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total Quantity</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="" {...field} />
                </FormControl>
                <FormDescription>Zero (0) if there is no limit</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="allowBulkBooking"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-sm">Allow Bulk Booking</FormLabel>
                  {/* <FormDescription></FormDescription> */}
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="ticketSaleStartsFrom"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1.5">
                <FormLabel className="text-left">
                  Ticket Sale Starts From
                </FormLabel>
                <Popover>
                  <FormControl>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP HH:mm:ss")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                  </FormControl>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                    <div className="border-t border-border p-3">
                      <TimePicker12Demo
                        setDate={field.onChange}
                        date={field.value}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ticketSaleEndsOn"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1.5">
                <FormLabel className="text-left">Ticket Sale Ends On</FormLabel>
                <Popover>
                  <FormControl>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "justify-start text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {field.value ? (
                          format(field.value, "PPP HH:mm:ss")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                  </FormControl>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                      disabled={(date) => date < new Date()}
                    />
                    <div className="border-t border-border p-3">
                      <TimePicker12Demo
                        setDate={field.onChange}
                        date={field.value}
                      />
                    </div>
                  </PopoverContent>
                </Popover>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="messageToAttendee"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message to Attendee</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field}></Textarea>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="sm:self-end">
          <Save />
          Save Ticket
        </Button>
      </form>
    </Form>
  );
}