import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const EventPage = () => {
  return (
    <div className="mx-5 min-h-dvh">
      <div className="my-3 border rounded-lg p-10">
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

export default EventPage;
