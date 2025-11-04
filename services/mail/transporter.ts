import { env } from '@/env'
import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: env.MAIL_USER,
		pass: env.MAIL_PASS
	}
})