import { z } from "zod";

const requestSchema = z.object({
  name: z.string().min(3),
  pages: z.number().min(1),
  description: z.string().optional(),
});

const createBookSchema = requestSchema;
const updateBookSchema = requestSchema.partial();

export { createBookSchema, updateBookSchema };
