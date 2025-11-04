import { drizzle } from "drizzle-orm/libsql"
import { schema } from '@/db/schema'
import { env } from "@/env"

export const db = drizzle(env.DB_FILE_NAME, { schema })