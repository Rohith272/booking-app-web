import { z } from "zod";
import { eventBasicsSchema } from "./1-event-basics/schema";
import { describeYourEventSchema } from "./2-describe-your-event/schema";
import { eventLocationSchema } from "./3-event-location/schema";
import { ticketSchema } from "./4-tickets/schema";
import { artistOrGuestSchema } from "./5-artist-or-guest/schema";
import { photosSchema } from "./6-photos/schema";


export const createEventSchema = eventBasicsSchema
  .and(describeYourEventSchema)
  .and(eventLocationSchema)
  .and(photosSchema);
