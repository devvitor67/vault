import { defineConfig } from 'drizzle-kit'
import { env } from '@/env'

export default defineConfig({
	out: './db/migrations',
	dialect: 'sqlite',
	casing: 'snake_case',
	schema: './db/schema/**',
	dbCredentials: {
		url: env.DB_FILE_NAME
	}
})