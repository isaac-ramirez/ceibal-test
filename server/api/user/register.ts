import { db } from '@/server/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, username, modelId } = body

  if (!email || !username || !modelId) {
    return createError({
      statusCode: 400,
      statusMessage: 'Datos requeridos no proporcionados',
    })
  }

  try {
    const connection = await db
    const [result] = await connection.execute(
      'INSERT INTO users (email, username, modelId, date) VALUES (?, ?, ?, NOW())',
      [email, username, modelId],
    )

    return {
      success: true,
      message: 'Usuario creado exitosamente',
      result,
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: 'Error al registrar el usuario',
    })
  }
})
