<template>
  <main class="flex flex-col overflow-hidden h-screen">
    <LayoutNavbar
      :style="{
        height: 'var(--layout-page-navbar-height)',
        maxHeight: 'var(--layout-page-navbar-height)',
      }"
    />
    <LayoutContent
      :style="{
        minHeight: 'var(--layout-page-content-min-height)',
      }"
    >
      <LayoutWrapper
        :style="{
          minHeight: 'var(--layout-page-content-min-height)',
        }"
      >
        <slot />
      </LayoutWrapper>
    </LayoutContent>
  </main>
</template>
