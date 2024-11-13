import React from "react";
import CreateEventDialog from "./create-event-button-dialog";
import EventsList from "./events-list";

const EventsPage = () => {
  return (
    <div className="mx-4 min-h-dvh">
      <div className="flex flex-col items-start justify-between pt-4 sm:flex-row sm:items-center">
        <h1 className="my-3 text-3xl">Events</h1>
        <CreateEventDialog />
      </div>
      <EventsList />
    </div>
  );
};

export default EventsPage;
