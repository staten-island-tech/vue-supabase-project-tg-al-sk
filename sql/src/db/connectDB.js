const DB_LINK = 'postgres://postgres.giswnketsngukdjcvptt:aognsw8egmRrc7D1@aws-0-us-east-1.pooler.supabase.com:5432/postgres'

import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

// returns db for interacting with database and client to end connection
export default function connectDB() {
  const client = postgres(DB_LINK, { prepare: false })
  const db = drizzle(client)
  return { db, client }
}
