import type {
  GenericStoreStateType,
  GorestUserType,
  ModelType,
  UserType,
} from '@/types'
import {
  checkEmail,
  createUser,
  fetchGorest,
  fetchModelsData,
  fetchUsers,
} from '@/server/services/loginService'

type LoginState = {
  models: GenericStoreStateType<{ id: number; model: ModelType }[]>
  gorest: GenericStoreStateType<GorestUserType[]>
  users: GenericStoreStateType<UserType[]>
  email: GenericStoreStateType<any>
  register: GenericStoreStateType<any>
}

export const loginStore = defineStore('login', {
  state: (): LoginState => ({
    models: { loading: false, data: null },
    gorest: { loading: false, data: null },
    users: { loading: false, data: null },
    email: { loading: false, data: null },
    register: { loading: false, data: null },
  }),
  actions: {
    async fetchModels() {
      return await actionHandler({
        store: this,
        action: fetchModelsData,
        prop: 'models',
      })
    },
    async fetchGorestUsers() {
      return await actionHandler({
        store: this,
        action: fetchGorest,
        prop: 'gorest',
      })
    },
    async fetchUserList() {
      return await actionHandler({
        store: this,
        action: fetchUsers,
        prop: 'users',
      })
    },
    async validateEmail(params: { email: string }) {
      return await actionHandler({
        store: this,
        action: checkEmail,
        prop: 'email',
        params,
      })
    },
    async registerUser(params: {
      email: string
      username: string
      modelId: number
    }) {
      return await actionHandler({
        store: this,
        action: createUser,
        prop: 'register',
        params,
      })
    },
  },
})
