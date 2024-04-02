<template>
  <span :class="['relative', { 'pointer-events-none': disabled || loading }]">
    <button
      :class="[
        `${buttonColor[color]} flex items-center justify-center transition-all duration-300 w-full rounded-full py-2 px-4 text-white font-bold overflow-hidden min-h-[40px] disabled:opacity-50 focus-visible:ring-2 ${ringColor[color]} focus-visible:ring-offset-2 focus-visible:outline-0`,
      ]"
      v-bind="$attrs"
      :disabled="disabled || loading"
      :type="type"
      @click="handleClick"
    >
      <slot v-if="!loading">{{ text }}</slot>
    </button>
    <Transition>
      <Icon
        v-if="loading"
        name="eos-icons:three-dots-loading"
        class="absolute z-10 size-14 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
      />
    </Transition>
  </span>
</template>

<script lang="ts" setup>
import type { ButtonHTMLAttributes } from 'vue'
import type { ColorType } from '@/types/elements'
import { COLORS } from '@/constants/elements'

const props = defineProps({
  // The text to be displayed on the button
  text: {
    type: [String, Number] as PropType<string | number>,
    default: '',
  },
  // Color of the button
  color: {
    type: String as PropType<ColorType>,
    default: COLORS.none,
  },
  // Type of the button (e.g., 'submit', 'reset', 'button')
  type: {
    type: String as PropType<ButtonHTMLAttributes['type']>,
    default: 'button',
  },
  // Whether the button is in loading state
  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  // Whether the button is disabled
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const emit = defineEmits(['click'])

const buttonColor = reactive<{ [key: string]: string }>({
  none: 'bg-neutral-300 hover:bg-neutral-400',
  primary: 'bg-primary hover:bg-primary-600',
  error: 'bg-error hover:bg-error-600',
})

const ringColor = reactive<{ [key: string]: string }>({
  none: 'focus-visible:ring-neutral-300',
  primary: 'focus-visible:ring-primary-500',
  error: 'focus-visible:ring-error',
})

const handleClick = (event: MouseEvent) => {
  if (props.disabled) {
    event.stopImmediatePropagation()
    return
  }

  emit('click', event)
}
</script>
