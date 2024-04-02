<template>
  <header class="z-100 select-none flex w-full bg-light shadow-md">
    <nav
      class="flex-1 flex justify-between gap-4 max-w-7xl items-center p-4 py-2 mx-auto"
    >
      <GeneralLink to="/">
        <figure class="self-center">
          <img
            src="@/assets/images/logo.png"
            alt="Logo Ceibal"
            class="hidden sm:block"
          />
          <img
            src="@/assets/images/logo-only.png"
            alt="Logo Ceibal"
            class="sm:hidden"
          />
        </figure>
      </GeneralLink>
      <section class="flex gap-4">
        <GeneralLink to="/" text="Registrarse" />
        <GeneralLink to="/list" text="Listado" />
      </section>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>
