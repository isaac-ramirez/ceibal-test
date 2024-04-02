export type ClassType =
  | string
  | string[]
  | object[]
  | Record<string | undefined, boolean | undefined | number>
  | (
      | string
      | undefined
      | Record<string | undefined, boolean | undefined | number>
    )[]

export type FetchType = 'loading' | 'success' | 'error'

export type GenericStoreStateType<T> = {
  loading: boolean
  data: T | null
  type?: FetchType
  error?: string
  requestCount?: number
}

export type ModelType = 'Ojo de gato' | 'Mariposa' | 'Aviador' | 'Redondeado'

export type GorestUserType = {
  id: number
  name: string
  email: string
  gender: string
  status: string
}

export type UserType = {
  id: number
  email: string
  username: string
  modelId: number
  date: Date
  modelName: ModelType
}
