'use server'

import { z } from 'zod'
import { transporter } from '@/services/mail/transporter'
import { env } from '@/env'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

const mailSchema = z.object({
	to: z.email(),
	subject: z.string().max(50),
	text: z.string()
})

type MailData = z.infer<typeof mailSchema>

type SuccessResponse = {
	info: string
	status: 'success'
	message: 'Email enviado com sucesso'
}

type ErrorResponse = {
	status: 'error'
	message: string
}

type Response = SuccessResponse | ErrorResponse

export const sendMail = async (body: MailData): Promise<Response> => {
	const { error, data } = mailSchema.safeParse(body)

	if (!error) {
		const mail = await transporter.sendMail({ from: `Vault | <desenvolvedorvitor67@gmail.com>`, ...data})
	
		return {
			info: mail.messageId,
			message: 'Email enviado com sucesso',
			status: 'success'
		}
	}

	return {
		message: error.message,
		status: 'error'
	}
}