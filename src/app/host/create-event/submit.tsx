"use client";

import { Button } from "@/components/ui/button";
import { useCreateEvent } from "@/lib/hooks/use-create-event";
import { useToast } from "@/lib/hooks/use-toast";
import { Check, Save } from "lucide-react";
import React from "react";
import { createEventSchema } from "./schema";

const SubmitEvent = () => {
  const formContext = useCreateEvent();
  const { toast } = useToast();
  const saveToDrafts = () => {
    formContext.updateForm({
      status: "draft",
    });
    const result = createEventSchema.safeParse(formContext.form);
    console.log(result);
    toast({ variant: "destructive", title: "TODO: Submit" });
  };
  const publishNow = () => {
    formContext.updateForm({
      status: "publish",
    });
    toast({ variant: "destructive", title: "TODO: Submit" });
  };
  const isAllFieldsValid = () => {};
  const submitNewEvent = () => {};

  return (
    <>
      <Button
        type="button"
        variant={"secondary"}
        onClick={() => {
          saveToDrafts();
        }}
      >
        <Save />
        Save to Drafts
      </Button>
      <Button
        type="button"
        onClick={() => {
          publishNow();
        }}
      >
        <Check />
        Publish Now
      </Button>
    </>
  );
};

export default SubmitEvent;
