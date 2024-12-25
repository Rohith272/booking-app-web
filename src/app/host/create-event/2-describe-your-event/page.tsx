"use client";

import { useState } from "react";
import { useCreateEvent } from "@/lib/hooks/use-create-event";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { describeYourEventSchema, DescribeYourEventSchema } from "./schema";
import { cn } from "@/lib/utils";
import { steps } from "../data";

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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/ui/extensions/multi-select";
import { Check, ChevronsUpDown } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPrivate from "@/lib/hooks/use-axios-private";
import { MainCategory } from "@/lib/definitions";

// const mainCateogriesOptions = [
//   { label: "Music", value: "music" },
//   { label: "Festival", value: "festival" },
//   { label: "Expo", value: "expo" },
//   { label: "Workshop", value: "workshop" },
//   { label: "Conference", value: "conference" },
// ] as const;

// const subCategoriesOptions = [
//   { label: "Music", value: "music" },
//   { label: "Festival", value: "festival" },
//   { label: "Expo", value: "expo" },
//   { label: "Workshop", value: "workshop" },
//   { label: "Conference", value: "conference" },
// ];

const Page = () => {
  const api = useAxiosPrivate();
  const router = useRouter();
  const formContext = useCreateEvent();
  const [mainCategoryPopoverOpen, setMainCategoryPopoverOpen] = useState(false);

  const {
    data: mainCategoriesOptions,
    isLoading: isMainCategoriesOptionsLoading,
    isError: isMainCategoriesOptionsError,
  } = useQuery({
    queryKey: ["mainCategoriesOptions"],
    queryFn: () => {
      return api.get("main-categories-options");
    },
    staleTime: Infinity,
  });

  const {
    data: subCategoriesOptions,
    isLoading: isSubCategoriesOptionsLoading,
    isError: isSubCategoriesOptionsError,
  } = useQuery({
    queryKey: ["subCategoriesOptions"],
    queryFn: () => {
      return api.get("sub-categories-options");
    },
    staleTime: Infinity,
  });

  const form = useForm<DescribeYourEventSchema>({
    resolver: zodResolver(describeYourEventSchema),
    mode: "onChange",
    defaultValues: {
      mainCategory: formContext.form?.mainCategory,
      subCategories: formContext.form?.subCategories,
      description: formContext.form?.description,
    },
  });

  const handleSubmit = (values: DescribeYourEventSchema) => {
    formContext.updateForm(values);
    router.push(steps[2].route); //3-event-location
  };

  const prevStep = () => {
    router.push(steps[0].route); // 1-event-basics
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid grid-cols-1 gap-4 md:mx-auto md:max-w-screen-2xl md:grid-cols-1">
          <FormField
            control={form.control}
            name="mainCategory"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Main Category</FormLabel>
                <Popover
                  open={mainCategoryPopoverOpen}
                  onOpenChange={setMainCategoryPopoverOpen}
                >
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground",
                        )}
                        disabled={
                          isMainCategoriesOptionsLoading ||
                          isMainCategoriesOptionsError
                        }
                      >
                        {field.value
                          ? mainCategoriesOptions?.data.find(
                              (category: MainCategory) =>
                                category.value === field.value,
                            )?.label
                          : "Select category"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search category..." />
                      <CommandList>
                        <CommandEmpty>No category found.</CommandEmpty>
                        <CommandGroup>
                          {mainCategoriesOptions?.data.map(
                            (category: MainCategory) => (
                              <CommandItem
                                value={category.label}
                                key={category.value}
                                onSelect={() => {
                                  formContext.updateForm({
                                    mainCategory: category.value,
                                  });
                                  form.setValue("mainCategory", category.value);
                                  field.onChange(category.value);
                                  setMainCategoryPopoverOpen(false);
                                }}
                              >
                                {category.label}
                                <Check
                                  className={cn(
                                    "ml-auto",
                                    category.value === field.value
                                      ? "opacity-100"
                                      : "opacity-0",
                                  )}
                                />
                              </CommandItem>
                            ),
                          )}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {/* <FormDescription>This is the main category</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subCategories"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sub Categories</FormLabel>
                <FormControl>
                  <MultiSelect
                    options={subCategoriesOptions?.data || []}
                    onValueChange={field.onChange}
                    placeholder="Select subcategories"
                    variant="default"
                    maxCount={3}
                    defaultValue={form.getValues("subCategories")}
                    disabled={
                      isSubCategoriesOptionsLoading ||
                      isSubCategoriesOptionsError
                    }
                    // animation={2}
                  />
                </FormControl>
                {/* <FormDescription></FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="" {...field}></Textarea>
                </FormControl>
                {/* <FormDescription></FormDescription> */}
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
          <Button type="submit" className="mt-8" /* onClick={nextStep} */>
            Next
            <ChevronRight />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Page;
