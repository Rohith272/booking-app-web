import { z } from "zod";

export const eventBasicsSchema = z
  .object({
    eventName: z.string().min(4, { message: "Minimum 4 characters" }),
    shortDescription: z.string().min(4, { message: "Minimum 4 characters" }),
    startsFromDate: z
      .string()
      .transform((val) => new Date(val))
      .refine((val) => !isNaN(val.getTime()), {
        message: "Invalid date",
      })
      .transform((date) => date.toISOString()),
    endsOnDate: z
      .string()
      .transform((val) => new Date(val))
      .refine((val) => !isNaN(val.getTime()), {
        message: "Invalid date",
      })
      .transform((date) => date.toISOString()),

    // visibility: z.string(), // private or public
    // status: z.string(), // draft or published
  })
  .refine(
    (data) => new Date(data.startsFromDate) <= new Date(data.endsOnDate),
    {
      message: "End date must be after start date",
      path: ["endsOnDate"],
    },
  );

export type EventBasicsSchema = z.infer<typeof eventBasicsSchema>;
