<template>
  <div
    class="flex flex-col gap-4 bg-light rounded-lg p-6 shadow-lg sm:min-w-96"
  >
    <figure class="self-center">
      <img src="@/assets/images/logo.png" alt="Logo Ceibal" />
    </figure>
    <Form
      v-slot="{ errors }"
      class="flex flex-col gap-2 w-full"
      @submit="handleSubmit"
    >
      <GeneralFormTextInput
        v-model="user.email"
        id-name="email"
        name="email"
        type="email"
        :rules="[validateRequired, validateEmail]"
        label="Email"
        placeholder="Ingresa un email"
        icon="mdi:email-outline"
        color="primary"
        :error-message="errors.email"
        autocomplete="email"
        required
        block
        @focused="handleFocusEmail"
      />
      <GeneralFormTextInput
        v-model="user.username"
        id-name="username"
        name="username"
        type="text"
        :rules="[validateRequired]"
        label="Nombre de usuario"
        placeholder="Ingresa un nombre de usuario"
        icon="material-symbols:account-circle-outline"
        color="primary"
        :error-message="errors.username"
        required
        block
      />
      <OnClickOutside class="flex relative" @trigger="openModels = false">
        <GeneralFormTextInput
          v-model="user.model.model"
          id-name="model"
          name="model"
          type="text"
          :rules="[validateModel]"
          label="Modelo de lente"
          placeholder="Selecciona un modelo"
          icon="fluent:glasses-16-regular"
          color="primary"
          input-class="cursor-pointer"
          :error-message="errors.model"
          required
          read-only
          block
          @click="openModels = !openModels"
        />
        <Transition name="slide">
          <section
            v-if="openModels"
            class="absolute z-50 top-[65px] w-full bg-light rounded-lg ring-1 ring-neutral-300"
          >
            <p
              v-for="model in login.models.data"
              :key="model.id"
              :class="[
                'p-2 px-3 flex text-sm items-center font-medium cursor-pointer transition duration-200',
                {
                  'text-primary-600 bg-neutral-400/25':
                    user.model.id === model.id,
                  'hover:bg-neutral-400/10': user.model.id !== model.id,
                },
              ]"
              @click="handleChangeModel(model)"
            >
              {{ model.model }}
            </p>
          </section>
        </Transition>
      </OnClickOutside>
      <div class="flex flex-col">
        <div class="flex items-center gap-2">
          <GeneralFormCheckbox
            v-model="user.termsAndConditions"
            id-name="termsAndConditions"
            name="termsAndConditions"
            :rules="[validateRequired]"
            :color="errors.termsAndConditions ? 'error' : 'primary'"
          />
          <p>
            He leído y acepto los
            <GeneralLink
              text="Términos de Uso"
              href="https://politicas.ceibal.edu.uy"
            />
          </p>
        </div>
        <Transition>
          <p
            v-if="errors.termsAndConditions"
            class="text-error text-sm font-semibold"
          >
            Debes aceptar los términos de uso
          </p>
        </Transition>
      </div>
      <GeneralButton
        type="submit"
        color="primary"
        text="Continuar"
        :loading="
          login.gorest.loading || login.email.loading || login.register.loading
        "
      />
    </Form>
  </div>
</template>

<script setup lang="ts">
import { OnClickOutside } from '@vueuse/components'
import type { ModelType } from '@/types'

const login = loginStore()
const snackbar = useSnackbar()
await useAsyncData('models', () => login.fetchModels())

const user = reactive<{
  email: string
  username: string
  model: {
    id: number
    model: ModelType | ''
  }
  termsAndConditions: boolean
}>({
  email: '',
  username: '',
  model: {
    id: 0,
    model: '',
  },
  termsAndConditions: false,
})

const openModels = ref<boolean>(false)

const handleChangeModel = (model: { id: number; model: ModelType }) => {
  user.model = model
  openModels.value = false
}

const handleFocusEmail = async (focused: boolean) => {
  if (!focused && typeof validateEmail(user.email) === 'boolean') {
    if (!login.gorest.data) await login.fetchGorestUsers()

    if (login.gorest.data) {
      const gorestUser = login.gorest.data.find(
        (gorest) => gorest.email === user.email,
      )

      if (gorestUser?.name) user.username = gorestUser?.name
    }
  }
}

const validateModel = (value: any) => {
  if (!value && !openModels.value) return 'Debes seleccionar un modelo'

  return true
}

const handleSubmit = async (_: any, action: any) => {
  await login.validateEmail({ email: user.email })

  if (login.email.error) {
    action.setFieldError('email', 'El email ya se encuentra en uso')
    return
  }

  await login.registerUser({
    email: user.email,
    username: user.username,
    modelId: user.model.id,
  })

  if (login.register.error) return

  snackbar.add({
    type: 'success',
    text: 'Usuario creado con éxito',
  })

  navigateTo('/list')
}
</script>
