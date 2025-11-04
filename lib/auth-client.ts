import { env } from "@/env"
import { magicLinkClient } from "better-auth/client/plugins"
import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
	baseURL: 'http://10.0.0.122:3000',
	plugins: [magicLinkClient()]
})