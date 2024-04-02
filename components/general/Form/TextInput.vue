<template>
  <div class="flex flex-col relative w-full">
    <label
      v-if="label"
      :for="idName"
      class="flex items-center gap-1 font-semibold"
      @click.prevent.stop
    >
      {{ label }}
      <span
        v-if="required"
        :class="`${
          errorMessage ? 'text-error' : iconColor[color]
        } transition-all duration-300`"
      >
        *
      </span>
    </label>
    <span class="flex items-center relative">
      <Icon
        v-if="icon"
        :class="`absolute left-3 size-5 ${
          errorMessage ? 'text-error' : iconColor[color]
        } transition-all duration-300 select-none`"
        :name="icon"
      />
      <Field
        :id="idName"
        v-model="modelValue"
        :class="[
          `${
            errorMessage ? 'border-error' : inputColor[color]
          } w-full py-2 px-9 rounded-lg transition-all duration-300 border truncate outline-none placeholder:text-neutral-400`,
          $props.inputClass,
        ]"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :rules="rules"
        :disabled="disable"
        :autocomplete="autocomplete"
        :readonly="readOnly"
        @focus="emit('focused', true)"
        @blur="emit('focused', false)"
      />
    </span>
    <Transition>
      <p
        v-if="errorMessage"
        class="text-error text-sm font-semibold"
        @click.prevent.stop
      >
        {{ errorMessage }}
      </p>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import type { InputHTMLAttributes } from 'vue'
import type { RuleExpression } from 'vee-validate'
import type { ColorType, AutocompleteType } from '@/types/elements'
import type { ClassType } from '@/types'
import { COLORS } from '@/constants/elements'

const props = defineProps({
  // ID for the input field
  idName: {
    type: String as PropType<string>,
    required: true,
  },
  // The current value of the input field
  modelValue: {
    type: String as PropType<string>,
    required: true,
  },
  // Placeholder text for the input field
  placeholder: {
    type: String as PropType<string>,
    default: '',
  },
  // Name attribute for the input field
  name: {
    type: String as PropType<string>,
    required: true,
  },
  // Type of the input field (e.g., 'text', 'password')
  type: {
    type: String as PropType<InputHTMLAttributes['type']>,
    default: 'text',
  },
  // Validation rules for the input field
  rules: {
    type: [String, Object, Function] as PropType<RuleExpression<unknown>>,
    default: null,
  },
  // Whether the input field is disabled
  disable: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  // Color of the input field
  color: {
    type: String as PropType<ColorType>,
    default: COLORS.none,
  },
  // Label for the input field
  label: {
    type: String as PropType<string>,
    default: '',
  },
  // Icon to display in the input field
  icon: {
    type: String as PropType<string>,
    default: '',
  },
  // Error message to display for the input field
  errorMessage: {
    type: String as PropType<string>,
    default: '',
  },
  // Whether to show a '*' next to the label to indicate that the input field is required
  required: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  // Whether to show the browser autocomplete suggestions for the input field
  autocomplete: {
    type: String as PropType<AutocompleteType>,
    default: 'off',
  },
  // Whether the input field is read-only
  readOnly: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  // Additional classes to apply to the input field
  inputClass: {
    type: [String, Array, Object] as PropType<ClassType>,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue', 'focused'])
const modelValue = useSyncProps<string>(props, 'modelValue', emit)

const inputColor = reactive<{ [key: string]: string }>({
  none: 'border-neutral-300',
  primary: 'border-primary',
  error: 'border-error',
})

const iconColor = reactive<{ [key: string]: string }>({
  none: 'text-neutral-300',
  primary: 'text-primary',
  error: 'text-error',
})
</script>
