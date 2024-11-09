import React from "react";
import CreateEventDialog from "./create-event-button-dialog";
import { Skeleton } from "@/components/ui/skeleton";
import EventCard from "@/components/common/event-card/card";
import CardSkeleton from "@/components/common/event-card/card-skeleton";

const mockEvents = [
  {
    id: 14332,
    name: "Diksha - National level Technical & Cultural Fest",
    categories: ["conference","workshop","dj"],
    location: "Institute of Engineering and Technology, University of Calicut",
    date: "Feb 29, 2029",
    time: "10:10 AM",
    isPublished: false,
  },
  {
    id: 14333,
    name: "Tech Talk 2026",
    categories: ["conference"],
    location: "Calicut Cyberpark, Kerala",
    date: "Mar 5, 2026",
    time: "2:00 PM",
    isPublished: true,
  },
  {
    id: 14334,
    name: "Jazz Under the Stars",
    categories: ["music"],
    location: "Grand Amphitheater, Open Sky Hall, Bengaluru",
    date: "Apr 18, 2026",
    time: "7:30 PM",
    isPublished: true,
  },
  {
    id: 14337,
    name: "Film Festival 2026",
    categories: ["festival"],
    location: "New Age Cinema Hall, Kochi",
    date: "Jun 20, 2026",
    time: "6:00 PM",
    isPublished: false,
  },
  {
    id: 14338,
    name: "Start-Up Expo",
    categories: ["expo"],
    location: "Trade Center, Infopark, Kerala",
    date: "Jul 10, 2026",
    time: "10:00 AM",
    isPublished: true,
  },
  {
    id: 14339,
    name: "Classical Dance Gala Night",
    categories: ["dance"],
    location: "Maharaja's Auditorium, Mysuru",
    date: "Aug 5, 2026",
    time: "5:00 PM",
    isPublished: true,
  },
  {
    id: 14340,
    name: "Youth Leadership Camp",
    categories: ["camping"],
    location: "Adventure Trails, Wayanad",
    date: "Sep 12, 2026",
    time: "6:30 AM",
    isPublished: false,
  },
];

const EventsPage = () => {
  return (
    <div className="mx-4 min-h-dvh">
      <div className="flex flex-col items-start justify-between pt-4 sm:flex-row sm:items-center">
        <h1 className="my-3 text-3xl">Events</h1>
        <CreateEventDialog />
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-5">
        {mockEvents.map((event) => {
          return <EventCard event={event} key={event.id} />;
        })}
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
};

export default EventsPage;
