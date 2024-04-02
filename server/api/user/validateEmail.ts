import { db } from '@/server/db'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email } = body

  if (!email) {
    return createError({
      statusCode: 400,
      statusMessage: 'Datos requeridos no proporcionados',
    })
  }

  try {
    const connection = await db
    const [rows] = (await connection.execute(
      'SELECT * FROM users WHERE email = ?',
      [email],
    )) as [any[], any]

    if (rows.length > 0) {
      return createError({
        statusCode: 400,
        statusMessage: 'Correo no disponible',
      })
    }

    return {
      success: true,
      message: 'Correo disponible',
    }
  } catch (error) {
    return createError({
      statusCode: 500,
      statusMessage: 'Error al validar el correo',
    })
  }
})
