"use client";
import { createContext, ReactNode, useState } from "react";
import { CreateEvent } from "../definitions";

type CreateEventContextType = {
  form: CreateEvent | null;
  updateForm: (property: Partial<CreateEvent>) => void;
};

export const CreateEventContext = createContext<CreateEventContextType | null>({
  form: null,
  updateForm: () => {},
});

export const CreateEventProvider = ({ children }: { children: ReactNode }) => {
  const defaultCreateEvent: CreateEvent = {
    eventName: "",
    shortDescription: "",
    startsFromDate: "",
    endsOnDate: "",
    mainCategory: "",
    subCategories: [],
    description: "",

    location: "",
    mapLink: "",
    address: "",

    tickets: [],
    artistOrGuest: [],

    brochure: undefined,
    coverPhoto: undefined,

    status:"draft"

    // visibility: "public",
    // status: "draft",
    // mainCategory: "",
    // subCategory: "",
  };

  const [createEvent, setCreateEvent] =
    useState<CreateEvent>(defaultCreateEvent);
  const updateEvent = (values: Partial<CreateEvent>) => {
    console.log("updating context");
    console.log(values);
    setCreateEvent((prev) => (prev ? { ...prev, ...values } : prev));
  };
  return (
    <CreateEventContext.Provider
      value={{ form: createEvent, updateForm: updateEvent }}
    >
      {children}
    </CreateEventContext.Provider>
  );
};
