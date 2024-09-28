import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const peopleSchema = z.object({
  id: z.string(),
  name: z.string(),
  birthYear: z.string(),
  gender: z.string(),
  createdDate: z.string(),
})

export type People = z.infer<typeof peopleSchema>
