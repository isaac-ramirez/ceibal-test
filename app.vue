<template>
  <Body
    class="antialiased overflow-hidden bg-gradient-to-r from-primary-600 to-primary-100"
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    <NuxtSnackbar />
  </Body>
</template>

<script lang="ts" setup>
useHead({
  title: 'Prueba técnica',
  titleTemplate: `Ceibal: %s`,
})
</script>
