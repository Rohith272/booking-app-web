import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z
      .string()
      .min(1, { message: "First name should contain atleast 1 character" })
      .max(20, {
        message: "First name should not contain more than 20 character",
      }),
    lastName: z
      .string()
      .min(1, { message: "Last name should contain atleast 1 character" })
      .max(20, {
        message: "Last name should not contain more than 20 character",
      }),
    email: z.string().email({
      message: "Invalid email format",
    }),
    phone: z.string().regex(/^\d{10}$/, {
      message: "Mobile number must be exactly 10 digits",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" })
      .max(100, {
        message: "Password must be no more than 100 characters long",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/\d/, { message: "Password must contain at least one number" })
      .regex(/[\W_]/, {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// export interface SignupSchema extends z.infer<typeof signupSchema> {}
export type SignupSchema = z.infer<typeof signupSchema>;
