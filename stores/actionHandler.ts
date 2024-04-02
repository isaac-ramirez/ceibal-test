import { isCancel } from 'axios'
import { parseAxiosError } from '@/libs/axios'
import { FETCH_TYPES } from '@/constants'

export const actionHandler = async ({
  store,
  action,
  prop,
  params,
}: {
  store: any
  action: Function
  prop: string
  params?: Object
}) => {
  try {
    if (!store[prop].requestCount) store[prop].requestCount = 0

    store[prop].requestCount++
    store[prop].loading = store[prop].requestCount > 0

    store[prop].type = FETCH_TYPES.loading

    const response = await action(params)

    store[prop].type = FETCH_TYPES.success
    store[prop].data = response || null
    delete store[prop].error

    return response
  } catch (error: any) {
    if (!isCancel(error)) {
      const errorMessage = parseAxiosError(error)
      store[prop].type = FETCH_TYPES.error
      store[prop].error = errorMessage

      return errorMessage
    }
  } finally {
    store[prop].requestCount--
    store[prop].loading = store[prop].requestCount > 0
  }
}
