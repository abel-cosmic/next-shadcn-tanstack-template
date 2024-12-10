import z from "zod";

const pdfSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  description: z.string().optional(),
  author: z.string().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  url: z.string().url(),
  size: z.number().int().positive(),
  type: z.string().min(1),
  metadata: z.record(z.any()).optional(),
});

type Pdf = z.infer<typeof pdfSchema>;

export { pdfSchema, type Pdf };
