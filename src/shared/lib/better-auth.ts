import { phoneNumberClient } from "better-auth/client/plugins"
import { betterAuth } from "better-auth/minimal"
import { nextCookies } from "better-auth/next-js"
import { phoneNumber } from "better-auth/plugins"
import { createAuthClient } from "better-auth/react"

export const auth = betterAuth({
  appName: "Vault",
  plugins: [
    nextCookies(),
    phoneNumber({
      sendOTP: () => {},
      signUpOnVerification: {
        getTempEmail: (phoneNumber) => {
          return `${phoneNumber}@altere-depois.com`
        },
        getTempName: (phoneNumber) => {
          return `usuário-${phoneNumber}`
        }
      }
    })
  ]
})

export const authClient = createAuthClient({
  plugins: [phoneNumberClient()]
})
