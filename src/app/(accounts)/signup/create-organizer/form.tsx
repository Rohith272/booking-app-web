"use client";

import { useForm } from "react-hook-form";
import { CreateOrganizerSchema, createOrganizerSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const CreateOrganizerForm = () => {
  const createOrganizerForm = useForm<CreateOrganizerSchema>({
    resolver: zodResolver(createOrganizerSchema),
    mode: "all",
    defaultValues: {
      name: "",
      website: "",
      logo: undefined,
      address: "",
      about: "",
      facebook: "",
      instagram: "",
      x: "",
    },
  });
  const logoRef = createOrganizerForm.register("logo");
  const handleSubmit = (values: CreateOrganizerSchema) => {
    console.log(values);
  };
  return (
    <Form {...createOrganizerForm}>
      <form
        onSubmit={createOrganizerForm.handleSubmit(handleSubmit)}
        className="space-y-4 px-8 md:px-4"
      >
        <div className="flex flex-col gap-4 md:flex-row">
          <FormField
            control={createOrganizerForm.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-grow md:w-1/3">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={createOrganizerForm.control}
            name="website"
            render={({ field }) => (
              <FormItem className="flex-grow md:w-1/3">
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createOrganizerForm.control}
            name="logo"
            render={({ field }) => (
              <FormItem className="md:w-1/3">
                <FormLabel>Logo</FormLabel>
                <FormControl>
                  <Input
                    id="picture"
                    type="file"
                    {...logoRef}
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
        <div className="flex flex-col gap-4 md:flex-row">
          <FormField
            control={createOrganizerForm.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex-grow md:w-1/3">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=""
                    {...field}
                    // rows={6}
                    className="h-[calc(100%-2rem)]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={createOrganizerForm.control}
            name="about"
            render={({ field }) => (
              <FormItem className="flex-grow md:w-1/3">
                <FormLabel>About</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder=""
                    {...field}
                    // rows={6}
                    className="h-[calc(100%-2rem)]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-grow flex-col gap-2 md:w-1/3">
            <Label className="mb-1 mt-1.5">Social Media</Label>
            <FormField
              control={createOrganizerForm.control}
              name="facebook"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  {/* <FormLabel></FormLabel> */}
                  <FormControl>
                    <Input placeholder="Facebook" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={createOrganizerForm.control}
              name="instagram"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  {/* <FormLabel></FormLabel> */}
                  <FormControl>
                    <Input placeholder="Instagram" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={createOrganizerForm.control}
              name="x"
              render={({ field }) => (
                <FormItem className="flex-grow">
                  {/* <FormLabel></FormLabel> */}
                  <FormControl>
                    <Input placeholder="X" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          size={"lg"}
          className="float-right w-full md:w-[calc(33.3333%-0.75rem)]"
        >
          Save
        </Button>
      </form>
    </Form>
  );
};

export default CreateOrganizerForm;
