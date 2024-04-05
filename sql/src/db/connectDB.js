import { config } from 'dotenv'
config()

const DB_LINK = process.env.DB_LINK

import 'dotenv/config'

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

// returns db for interacting with database and client to end connection
export default function connectDB() {
  const client = postgres(DB_LINK, { prepare: false })
  const db = drizzle(client)
  return { db, client }
}
