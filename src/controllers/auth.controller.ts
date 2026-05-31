import {
  BetterAuthError,
  InternalServerError
} from "@/shared/errors/app.errors"
import type { auth } from "@/shared/lib/better-auth"
import type { SignInData } from "@/shared/schemas/auth"
import { toWhatsappPhone } from "@/shared/utils/format-whatsapp-phone"
import { APIError } from "better-auth"

export class AuthController {
  constructor(private betterAuthInstance: typeof auth) {}
  async login(data: SignInData) {
    try {
      return await this.betterAuthInstance.api.signInPhoneNumber({
        body: {
          phoneNumber: toWhatsappPhone(data.phone),
          password: data.password
        }
      })
    } catch (error: unknown) {
      if (error instanceof APIError) {
        throw new BetterAuthError(error.statusCode, error.message)
      }

      throw new InternalServerError("Erro interno ao fazer login")
    }
  }
}
