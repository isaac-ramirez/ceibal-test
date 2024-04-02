<template>
  <div
    :class="[
      `${modelValue ? checkboxBackground[color] : 'bg-transparent'} ${checkboxColor[color]} size-5 min-w-5 min-h-5 relative ring-1 rounded-md transition-all duration-300`,
      { 'opacity-50': disabled },
    ]"
    @click="modelValue = !modelValue"
  >
    <Field
      :id="idName"
      :name="name"
      :class="[
        `opacity-0 absolute z-10 w-full h-full`,
        {
          'cursor-pointer': !disabled,
          'pointer-events-none': disabled,
        },
      ]"
      type="checkbox"
      :rules="rules"
      :disabled="disabled"
    />
    <Transition>
      <Icon
        v-if="modelValue"
        name="ic:round-check"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 text-white"
      />
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import type { RuleExpression } from 'vee-validate'
import type { ColorType } from '@/types/elements'
import { COLORS } from '@/constants/elements'

const props = defineProps({
  // ID for the checkbox
  idName: {
    type: String as PropType<string>,
    required: true,
  },
  // The current value of the checkbox
  modelValue: {
    type: Boolean as PropType<boolean>,
    required: true,
  },
  // Validation rules for the checkbox
  rules: {
    type: [String, Object, Function] as PropType<RuleExpression<unknown>>,
    default: null,
  },
  // Name attribute for the checkbox
  name: {
    type: String as PropType<string>,
    required: true,
  },
  // Color of the checkbox
  color: {
    type: String as PropType<ColorType>,
    default: COLORS.none,
  },
  // Whether the checkbox is disabled
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})
const emit = defineEmits(['update:modelValue'])
const modelValue = useSyncProps<boolean>(props, 'modelValue', emit)

const checkboxColor = reactive<{ [key: string]: string }>({
  none: 'ring-neutral-300',
  primary: 'ring-primary',
  error: 'ring-error',
})

const checkboxBackground = reactive<{ [key: string]: string }>({
  none: 'bg-neutral-300',
  primary: 'bg-primary',
  error: 'bg-error',
})
</script>
