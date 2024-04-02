import type { FetchType } from '@/types'

export const FETCH_TYPES: Record<FetchType, FetchType> = {
  error: 'error',
  success: 'success',
  loading: 'loading',
}
