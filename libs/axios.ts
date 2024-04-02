import axios, { AxiosError } from 'axios'

const baseConfig = {
  baseURL: process.env.API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
}

const axiosInstance = () => {
  if (!baseConfig.baseURL) {
    const config = useRuntimeConfig()
    baseConfig.baseURL = config.public.API_BASE_URL
  }
  return axios.create(baseConfig)
}

function parseAxiosError(error: any): { errorMessage: string } {
  let errorMessage
  if (error instanceof AxiosError) {
    const { response } = error

    if (response?.data?.message) errorMessage = response?.data?.message
    else if (response?.status && response?.statusText)
      errorMessage = `${response?.status} ${response?.statusText}`
  }
  if (!errorMessage) errorMessage = error?.message

  return errorMessage
}

export { parseAxiosError, AxiosError }

export default axiosInstance()
