<template>
  <NuxtLink
    class="transition-all duration-300 underline cursor-pointer hover:text-primary-600"
    tag="a"
    :to="to ? to : href"
    :target="to ? '_self' : '_blank'"
  >
    <slot>{{ text }}</slot>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  // The text to be displayed in the link
  text: {
    type: String as PropType<string>,
    default: '',
  },
  // The URL when the link is clicked
  to: {
    type: [String, Object],
    default: undefined,
  },
  // The URL to open when the link is clicked
  href: {
    type: String,
    default: '',
  },
})

const href = toRef(props, 'href')
const to = toRef(props, 'to')
</script>
