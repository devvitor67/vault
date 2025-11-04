import { z } from 'zod'

const envSchema = z.object({
	DB_FILE_NAME: z.string().startsWith('file:'),
	MAIL_USER: z.string().endsWith('gmail.com'),
	MAIL_PASS: z.string(),
})

export const env = envSchema.parse(process.env)