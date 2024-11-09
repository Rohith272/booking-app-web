import { Calendar, Clock, MapPin } from "lucide-react";
import React from "react";

type EventDetailsProps = {
  location: string;
  date: string;
  time: string;
};
const EventDetails = (event: EventDetailsProps) => {
  return (
    <>
      <p className="flex items-center gap-1 rounded py-1">
        <MapPin className="h-4 text-muted-foreground" />
        <span>{event.location}</span>
      </p>
      {/* <Dot className="h-3 text-muted-foreground" /> */}
      <p className="flex items-center gap-1 rounded py-1">
        <Calendar className="h-4 text-muted-foreground" />
        <span>{event.date}</span>
      </p>
      {/* <Dot className="h-3 text-muted-foreground" /> */}
      <p className="flex items-center gap-1 rounded py-1">
        <Clock className="h-4 text-muted-foreground" />
        <span>{event.time}</span>
      </p>
    </>
  );
};

export default EventDetails;
