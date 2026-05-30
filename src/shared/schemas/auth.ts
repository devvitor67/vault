import { toWhatsappPhone } from "@/shared/utils/format-whatsapp-phone"
import { isValidMobilePhone } from "@brazilian-utils/brazilian-utils"
import { z } from "zod"

export const signInSchema = z.strictObject({
  phone: z
    .string()
    .nonempty("Campo obrigatório")
    .refine(isValidMobilePhone, "Número de telefone inválido")
    .transform((phone) => toWhatsappPhone(phone)),
  password: z
    .string()
    .min(6, "A senha deve conter no mínimo 6 caracteres")
    .max(64, "A senha deve conter no máximo 64 caracteres")
})

export type SignInData = z.infer<typeof signInSchema>
