import dotenv from 'dotenv'
import mysql from 'mysql2/promise'
// import { createClient } from '@libsql/client'

dotenv.config()

// export const db = createClient({
//   url: process.env.DATABASE_URL,
//   authToken: process.env.DATABASE_AUTH_TOKEN
// })

const config = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
}

export const getConnection = async () => {
  return await mysql.createConnection(config)
}

// Conect to database
export const db = await mysql.createConnection(config)
