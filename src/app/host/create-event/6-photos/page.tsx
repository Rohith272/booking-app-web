"use client";

import { photosSchema, PhotosSchema } from "./schema";
import { steps } from "../data";
import { useCreateEvent } from "@/lib/hooks/use-create-event";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { ChevronLeft, Save, Check, Image, ImageOffIcon } from "lucide-react";
import PreviewImageFile from "@/components/common/preview-image-file";
import { useRouter } from "next/navigation";
import SubmitEvent from "../submit";

const Page = () => {
  const router = useRouter();
  const formContext = useCreateEvent();

  const form = useForm<PhotosSchema>({
    resolver: zodResolver(photosSchema),
    mode: "all",
    defaultValues: {},
  });
  const coverPhotoRef = form.register("coverPhoto");
  const brochureRef = form.register("brochure");

  const updatePhotos = (
    file: FileList | undefined,
    field: "coverPhoto" | "brochure",
  ) => {
    const schema = photosSchema.shape[field];
    const result = schema.safeParse(file);
    if (result.success) {
      formContext.updateForm({
        [field]: file,
      });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:mx-auto md:max-w-screen-2xl md:grid-cols-1">
        <Form {...form}>
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
              <FormField
                control={form.control}
                name="coverPhoto"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Cover Photo</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        {...coverPhotoRef}
                        onChange={(event) => {
                          field.onChange(event.target?.files?.[0] ?? undefined);
                          updatePhotos(
                            event.target?.files || undefined,
                            "coverPhoto",
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brochure"
                render={({ field }) => (
                  <FormItem className="">
                    <FormLabel>Brochure Photo</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        {...brochureRef}
                        onChange={(event) => {
                          field.onChange(event.target?.files?.[0] ?? undefined);
                          updatePhotos(
                            event.target?.files || undefined,
                            "brochure",
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <div className="rounded-lg bg-background p-4 shadow-inner">
          <span className="text-base text-muted-foreground">Preview</span>
          <div className="grid grid-flow-col justify-start gap-2">
            <div className="">
              <span className="text-xs text-muted-foreground">Cover photo</span>
              {formContext.form?.coverPhoto ? (
                <PreviewImageFile
                  imageFile={formContext.form?.coverPhoto[0]}
                  className="max-h-36 rounded-md"
                />
              ) : (
                <div className="grid h-36 w-40 place-content-center rounded-md border">
                  <ImageOffIcon className="text-muted" />
                </div>
              )}
            </div>
            <div className="">
              <span className="text-xs text-muted-foreground">
                Brochure Photo
              </span>
              {formContext.form?.brochure ? (
                <PreviewImageFile
                  imageFile={formContext.form?.brochure[0]}
                  className="max-h-36 rounded-md"
                />
              ) : (
                <div className="grid h-36 w-40 place-content-center rounded-md border">
                  <ImageOffIcon className="text-muted" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 sm:flex-row">
        <Button
          type="submit"
          className="mt-8"
          onClick={() => {
            router.push(steps[4].route);
          }}
          variant={"outline"}
        >
          <ChevronLeft />
          Previous
        </Button>
        <div className="mt-8 flex flex-col gap-2 sm:flex-row">
          <SubmitEvent />
        </div>
      </div>
    </>
  );
};

export default Page;
