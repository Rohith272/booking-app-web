import { z } from "zod";

export const eventLocationSchema = z.object({
  location: z.string().min(5, { message: "Minimum 5 characters" }),
  mapLink: z.string().min(5, { message: "Minimum 5 characters" }),
  address: z.string().min(5, { message: "Minimum 5 characters" }),
});

export type EventLocationSchema = z.infer<typeof eventLocationSchema>;
