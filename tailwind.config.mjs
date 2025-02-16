/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700', // Sunflower yellow
        },
        gray: {
          DEFAULT: '#4A4A4A',
        }
      },
      minHeight: {
        screen: ['100vh', '100dvh']
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}