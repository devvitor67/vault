import { db } from "@/db/client"
import { sendMail } from "@/services/mail/send-mail"
import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"
import { magicLink } from "better-auth/plugins"

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'sqlite'
	}),
	plugins: [
		nextCookies(),
		magicLink({
			sendMagicLink: async ({ email, url }) => {
				await sendMail({ 
					to: email,
					subject: 'Seu link de login chegou',
					text: `Olá! Segue seu link para acessar o Vault: ${url} \nEste link irá expirar em 5 minutos, por motivos de segurança. Se você não solicitou esse email, apenas ignore-o. \n\nAtenciosamente, Equipe Vault`
				})
			},
			disableSignUp: true
		})
	]
})