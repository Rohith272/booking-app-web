import React from "react";
import CreateEventDialog from "./create-event-button-dialog";
import { Skeleton } from "@/components/ui/skeleton";

const EventsPage = () => {
  return (
    <div className="mx-5 min-h-dvh">
      <div className="pt-4">
        <h1 className="my-3 text-3xl">Events</h1>
        <CreateEventDialog />
      </div>
      <div className="mt-12">
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
