import axios from '@/libs/axios'

export const fetchModelsData = async () => {
  const { data: response } = await axios.get('/api/model/list')

  return response
}

export const fetchGorest = async () => {
  const { data: response } = await axios.get(
    'https://gorest.co.in/public/v2/users',
  )

  return response
}

export const fetchUsers = async () => {
  const { data: response } = await axios.get('/api/user/list')

  return response
}

export const checkEmail = async (data: { email: string }) => {
  const { data: response } = await axios.post('/api/user/validateEmail', data)

  return response
}

export const createUser = async (data: {
  email: string
  username: string
  model: string
}) => {
  const { data: response } = await axios.post('/api/user/register', data)

  return response
}
