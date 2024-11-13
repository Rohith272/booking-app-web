"use client";

import EventCard from "@/components/common/event-card/card";
import CardSkeleton from "@/components/common/event-card/card-skeleton";
import { Event } from "@/lib/definitions";
import useAxiosPrivate from "@/lib/hooks/use-axios-private";
import { useQuery } from "@tanstack/react-query";
import { AxiosInstance } from "axios";

const getEvents = (api: AxiosInstance) => {
  return api.get("/events");
};

const EventsList = () => {
  const api = useAxiosPrivate();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["events"],
    queryFn: () => {
      return getEvents(api);
    },
  });
  if (isError) {
    return (
      <div className="py-20 text-center text-xl text-muted-foreground">
        {error.message}
      </div>
    );
  }
  return (
    <div>
      <div className="text-2xl text-muted-foreground">TODO: infinite query</div>
      <div className="mt-12 flex flex-wrap justify-center gap-5">
        {isLoading ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          data?.data.map((event: Event) => {
            return <EventCard event={event} key={event.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default EventsList;
