import type { auth } from "@/shared/lib/better-auth"
import type { SignInData } from "@/shared/schemas/auth"

export class AuthController {
  constructor(private betterAuthInstance: typeof auth) {}
  async login(data: SignInData) {
    return await this.betterAuthInstance.api.signInPhoneNumber({
      body: {
        phoneNumber: data.phone,
        password: data.password
      }
    })
  }
}
