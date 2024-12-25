import { z } from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const artistOrGuestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  tag: z.string().min(1, "Required"),
  image: z
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
});

export type ArtistOrGuestSchema = z.infer<typeof artistOrGuestSchema>;
