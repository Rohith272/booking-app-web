import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Dot, SquarePen } from "lucide-react";
import EventCategories from "./event-categories";
import EventDetails from "./event-details";
import { Event } from "@/lib/definitions";
import Link from "next/link";

type EventCardProps = {
  event: Event;
};

const EventCard = (e: EventCardProps) => {
  return (
    <Card className="flex w-full flex-col hover:shadow-md sm:max-w-96">
      <CardHeader>
        <div className="mb-2 h-44 rounded-lg bg-muted"></div>
        <CardTitle className="py-1 text-xl">
          <Link href={`events/${e.event.id}`}>{e.event.name}</Link>
        </CardTitle>
        <CardDescription className="flex flex-wrap gap-2">
          <EventCategories categories={e.event.categories} />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap items-center gap-2 text-sm">
        <EventDetails
          location={e.event.location}
          date={e.event.date}
          time={e.event.time}
        />
      </CardContent>
      <CardFooter className="mt-auto flex flex-wrap justify-between text-sm">
        {e.event.isPublished ? (
          <p className="flex items-center rounded py-1 text-primary">
            <Check className="mr-1 h-4 w-4" />
            Published
          </p>
        ) : (
          <p className="flex items-center rounded py-1 text-destructive">
            <Dot className="mr-1 h-4 w-4" />
            Not published
          </p>
        )}

        <p className="flex items-center justify-evenly gap-2 rounded py-1 text-muted-foreground hover:text-foreground">
          <SquarePen className="h-4 w-4" /> Edit
        </p>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
