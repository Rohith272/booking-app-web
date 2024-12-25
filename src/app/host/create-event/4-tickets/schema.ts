import { z } from "zod";

export const ticketSchema = z
  .object({
    ticketName: z.string().min(1, "Name is required"),
    amount: z.coerce.number().min(0, "Amount must be a non-negative number"),

    totalQuantity: z.coerce
      .number()
      .int()
      .min(0, "Amount must be a non-negative number"),

    allowBulkBooking: z.boolean(),

    ticketSaleStartsFrom: z.date(),
    ticketSaleEndsOn: z.date(),

    messageToAttendee: z.string().min(1, "Required"),
  })
  .refine((data) => data.ticketSaleStartsFrom <= data.ticketSaleEndsOn, {
    message: "End date must be after start date",
    path: ["ticketSaleEndsOn"],
  });

export type TicketSchema = z.infer<typeof ticketSchema>;

// export const ticketsSchema = z.array(ticketSchema);
// export type TicketsSchema = z.infer<typeof ticketsSchema>;
