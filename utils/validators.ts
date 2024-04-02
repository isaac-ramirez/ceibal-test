export const validateRequired = (value: any) => {
  if (!value) return 'Este campo es obligatorio'

  return true
}

export const validateEmail = (value: any) => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i
  if (!regex.test(value)) return 'El email es invalido'

  return true
}
