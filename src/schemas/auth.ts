import {
  formatPhone,
  isValidMobilePhone
} from "@brazilian-utils/brazilian-utils"
import { z } from "zod"

export const signInSchema = z.strictObject({
  phone: z
    .string()
    .trim()
    .nonempty("Campo obrigatório")
    .transform((phone) => formatPhone(phone))
    .refine(isValidMobilePhone, "Número de telefone inválido"),
  password: z
    .string()
    .min(6, "A senha deve conter no mínimo 6 caracteres")
    .max(64, "A senha deve conter no máximo 64 caracteres")
})

export type SignInData = z.infer<typeof signInSchema>
