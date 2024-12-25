"use client";

import { useCreateEvent } from "@/lib/hooks/use-create-event";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventBasicsSchema, EventBasicsSchema } from "./schema";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { steps } from "../data";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronRight } from "lucide-react";
import { CalendarIcon } from "lucide-react";

const Page = () => {
  const router = useRouter();
  const formContext = useCreateEvent();
  
  const eventBasicsForm = useForm<EventBasicsSchema>({
    resolver: zodResolver(eventBasicsSchema),
    mode: "onChange",
    defaultValues: {
      eventName: formContext.form?.eventName,
      shortDescription: formContext.form?.shortDescription,
      startsFromDate: formContext.form?.startsFromDate,
      endsOnDate: formContext.form?.endsOnDate,
    },
  });
  
  const handleSubmit = (values: EventBasicsSchema) => {
    formContext.updateForm(values);
    router.push(steps[1].route); // 2-describe-your-event
  };
  
  return (
    <Form {...eventBasicsForm}>
      <form onSubmit={eventBasicsForm.handleSubmit(handleSubmit)}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField
            control={eventBasicsForm.control}
            name="eventName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      formContext.updateForm({
                        ...formContext.form,
                        eventName: e.target.value,
                      });
                    }}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={eventBasicsForm.control}
            name="shortDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Description</FormLabel>
                <FormControl>
                  <Input
                    placeholder=""
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      formContext.updateForm({
                        ...formContext.form,
                        shortDescription: e.target.value,
                      });
                    }}
                  />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={eventBasicsForm.control}
            name="startsFromDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Starts From</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={new Date(field.value)}
                      onSelect={(date) => {
                        field.onChange(date?.toISOString());
                      }}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {/* <FormDescription></FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={eventBasicsForm.control}
            name="endsOnDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Ends On</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={new Date(field.value)}
                      onSelect={(date) => {
                        field.onChange(date?.toISOString());
                      }}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                {/* <FormDescription></FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="mt-8">
            Next <ChevronRight />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;
