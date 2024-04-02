import { db } from '@/server/db'

export default defineEventHandler(async () => {
  const connection = await db
  const [rows] = await connection.query(
    'SELECT users.*, models.model AS modelName FROM users JOIN models ON users.modelId = models.id ORDER BY users.id ASC',
  )
  return rows
})
