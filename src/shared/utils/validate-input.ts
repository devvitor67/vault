import { BadRequestError } from "@/shared/errors/app.errors"
import { z } from "zod"

export function validateInput<TSchema extends z.ZodType>(
  input: unknown,
  schema: TSchema
): z.infer<TSchema> {
  const result = schema.safeParse(input)

  if (!result.success) {
    throw new BadRequestError(z.prettifyError(result.error))
  }

  return result.data
}
