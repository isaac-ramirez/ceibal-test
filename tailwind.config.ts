import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export const MyTheme = {
  colors: {
    light: {
      DEFAULT: '#fcfcfc',
      '400': '#ffffff',
      '500': '#fcfcfc',
      '600': '#f2f2f2',
      '700': '#e6e6e6',
      '800': '#d9d9d9',
      '900': '#cccccc',
    },
    primary: {
      DEFAULT: '#00a096',
      '100': '#90ffec',
      '200': '#51f7e1',
      '300': '#1de4d0',
      '400': '#04c8b7',
      '500': '#00a096',
      '600': '#058079',
      '700': '#0a6561',
      '800': '#0d5451',
      '900': '#003333',
    },
    error: {
      DEFAULT: '#f83b3b',
      '100': '#ffe1e1',
      '200': '#ffc7c7',
      '300': '#ffa0a0',
      '400': '#ff6a6a',
      '500': '#f83b3b',
      '600': '#e61c1c',
      '700': '#c11414',
      '800': '#a01414',
      '900': '#841818',
    },
    default: {
      DEFAULT: '#343434',
    },
  },
}

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
  ],
  theme: {
    extend: {
      colors: {
        light: MyTheme.colors.light,
        primary: MyTheme.colors.primary,
        error: MyTheme.colors.error,
        default: MyTheme.colors.default,
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
