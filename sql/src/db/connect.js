import {config} from 'dotenv'
config()

const DB_LINK = process.env.DB_LINK

import 'dotenv/config'

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

// Disable prefetch as it is not supported for "Transaction" pool mode
export const client = postgres(DB_LINK, { prepare: false })
export const db = drizzle(client);