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

export function DrawerDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" size={"lg"} className="max-w-72">
            <UserPlus />
            Add Artist or Guest
          </Button>
        </DialogTrigger>
        {/* sm:max-w-[425px] */}
        <DialogContent className="max-w-screen-lg" disableOutsideClick>
          <ScrollArea className="max-h-[calc(90vh)] max-w-screen-xl">
            <DialogHeader>
              <DialogTitle className="pl-4 pt-4">Create New Ticket</DialogTitle>
              <DialogDescription></DialogDescription>
            </DialogHeader>
            <FormComponent
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
          <FormComponent className="px-4" closeDialog={() => setOpen(false)} />
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

function FormComponent({
  className,
  closeDialog,
}: React.ComponentProps<"form"> & { closeDialog: () => void }) {
  const formContext = useCreateEvent();

  const form = useForm<ArtistOrGuestSchema>({
    resolver: zodResolver(artistOrGuestSchema),
    mode: "all",
    defaultValues: {
      name: "",
      tag: "",
      image: undefined,
    },
  });
  const imageRef = form.register("image");
  const handleSubmit = (values: ArtistOrGuestSchema) => {
    console.log(values);
    formContext.updateForm({
      artistOrGuest: [...(formContext.form?.artistOrGuest || []), values],
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>eg: Shreya Goshal</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tag"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tag</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>eg: Singer</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input
                    id="picture"
                    type="file"
                    {...imageRef}
                    onChange={(event) => {
                      field.onChange(event.target?.files?.[0] ?? undefined);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="sm:self-end">
          <Save />
          Save
        </Button>
      </form>
    </Form>
  );
}
