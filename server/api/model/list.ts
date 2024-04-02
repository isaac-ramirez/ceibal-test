import { db } from '@/server/db'

export default defineEventHandler(async () => {
  const connection = await db
  const [rows] = await connection.query(
    'SELECT * FROM models ORDER BY models.id ASC',
  )
  return rows
})
