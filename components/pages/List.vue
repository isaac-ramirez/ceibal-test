<template>
  <div
    class="flex flex-col divide-y bg-light rounded-lg p-6 shadow-lg sm:min-w-96"
  >
    <header
      class="grid gap-x-3 grid-cols-4 sm:grid-cols-[0.5fr_3fr_2fr_2fr_2fr] font-bold"
    >
      <p class="py-2 hidden sm:block">ID</p>
      <p class="py-2">Email</p>
      <p class="py-2">Nombre</p>
      <p class="py-2">Modelo</p>
      <p class="py-2">Fecha</p>
    </header>
    <section
      v-for="user in login.users?.data"
      :key="user.id"
      class="grid gap-x-3 grid-cols-4 sm:grid-cols-[0.5fr_3fr_2fr_2fr_2fr] text-neutral-700"
    >
      <p class="py-2 truncate hidden sm:block">{{ user.id }}</p>
      <p class="py-2 truncate">{{ user.email }}</p>
      <p class="py-2 truncate">{{ user.username }}</p>
      <p class="py-2 truncate">{{ user.modelName }}</p>
      <p class="py-2 truncate">
        {{ dayjs(user.date).format('DD/MM/YYYY - HH:mm:ss') }}
      </p>
    </section>
    <p v-if="login.users?.data?.length === 0" class="py-2 w-full text-center">
      No hay usuarios registrados
    </p>
  </div>
</template>

<script setup lang="ts">
const login = loginStore()
const dayjs = useDayjs()

await useAsyncData('users', () => login.fetchUserList())
</script>
