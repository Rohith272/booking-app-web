import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
export const createOrganizerSchema = z.object({
  name: z.string().min(1, { message: "Required" }),
  website: z.string().min(4, { message: "Please enter at least 4 characters" }),
  logo: z
    .custom<FileList>()
    .refine((files) => files?.length === 1, { message: "Required" })
    .refine(
      (files) => {
        return files?.[0]?.size <= MAX_FILE_SIZE;
      },
      {
        message: "Please choose a file smaller than 5MB",
      },
    )
    .refine((files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type), {
      message: "Only .jpg, .jpeg, .png and .webp formats are supported.",
    }),
  address: z.string().min(1, { message: "Required" }).max(150, {
    message: "Should not exceed more than 150 characters",
  }),
  about: z.string().min(1, { message: "Required" }).max(150, {
    message: "Should not exceed more than 150 characters",
  }),
  facebook: z.string().min(1, { message: "Required" }).max(150, {
    message: "Should not exceed more than 150 characters",
  }),
  instagram: z.string().min(1, { message: "Required" }).max(150, {
    message: "Should not exceed more than 150 characters",
  }),
  x: z.string().min(1, { message: "Required" }).max(150, {
    message: "Should not exceed more than 150 characters",
  }),

  // logo, about, social media
});

export type CreateOrganizerSchema = z.infer<typeof createOrganizerSchema>;

/* 
logo: z
    .instanceof(FileList, { message: "Please select an image" })
    .refine(
      (files) => {
        return files?.[0].size <= MAX_FILE_SIZE;
      },
      {
        message: "Please choose a file smaller than 5MB",
      },
    )
    .refine((files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0].type), {
      message: "Only .jpg, .jpeg, .png and .webp formats are supported.",
    }),
*/
