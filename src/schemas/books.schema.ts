import { z } from "zod";

export const bookSchema = z.object({
  id: z.number().min(1),
  name: z.string().min(3),
  pages: z.number().min(1),
  category: z.string().min(1).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export const createBookSchema = bookSchema.pick({
  name: true,
  pages: true,
  category: true,
});
export const updateBookSchema = createBookSchema.partial();
