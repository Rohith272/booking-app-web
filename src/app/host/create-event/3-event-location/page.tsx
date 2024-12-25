"use client";

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
import { Input } from "@/components/ui/input";
import { useCreateEvent } from "@/lib/hooks/use-create-event";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { eventLocationSchema, EventLocationSchema } from "./schema";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { steps } from "../data";

const Page = () => {
  const router = useRouter();
  const formContext = useCreateEvent();
  const form = useForm<EventLocationSchema>({
    resolver: zodResolver(eventLocationSchema),
    mode: "onChange",
    defaultValues: {
      location: formContext.form?.location,
      mapLink: formContext.form?.mapLink,
      address: formContext.form?.address,
    },
  });
  const handleSubmit = (values: EventLocationSchema) => {
    formContext.updateForm(values);
    
    // 4-tickets
    router.push(steps[3].route);
  };
  const prevStep = () => {
    // 2-describe-your-event
    router.push(steps[1].route);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        {/* <h1 className="mb-4 text-muted-foreground">{steps[2].name}</h1> */}
        <div className="grid grid-cols-1 gap-4 md:mx-auto md:max-w-screen-2xl md:grid-cols-1">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="mapLink"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Map Link</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field}></Textarea>
                </FormControl>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <Button type="submit" className="mt-8">
            Next
            <ChevronRight />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;
