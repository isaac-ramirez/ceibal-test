import type { WritableComputedRef } from 'vue'

// `useSyncProps` is a composable function that creates a two-way binding for a prop.
// It takes three arguments: `props`, `key`, and `emit`.
// `props` is the props object, `key` is the name of the prop to bind, and `emit` is the Vue emit function.
export const useSyncProps = <T>(
  props: any,
  key: string,
  emit: any,
): WritableComputedRef<T> => {
  return computed({
    // The getter returns the current value of the prop.
    get() {
      return props[key]
    },
    // The setter emits an update event for the prop, which allows the parent component to update the prop's value.
    set(value) {
      emit(`update:${key}`, value)
    },
  })
}
