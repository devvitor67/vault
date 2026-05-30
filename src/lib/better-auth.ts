import { betterAuth } from "better-auth/minimal"
import { nextCookies } from "better-auth/next-js"
import { phoneNumber } from "better-auth/plugins"

export const auth = betterAuth({
  appName: "Vault",
  plugins: [
    nextCookies(),
    phoneNumber({
      sendOTP: () => {}
    })
  ]
})
