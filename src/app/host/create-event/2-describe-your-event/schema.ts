import { z } from "zod";

export const describeYourEventSchema = z.object({
  mainCategory: z.string().min(1, { message: "Required" }),
  subCategories: z.array(z.string()).min(1, { message: "Required" }),
  description: z.string().min(10, { message: "Minimum 10 characters" }),
});

export type DescribeYourEventSchema = z.infer<typeof describeYourEventSchema>;
