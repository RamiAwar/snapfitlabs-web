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
        },
        black: {
          DEFAULT: '#000000',
        }
      },
      minHeight: {
        screen: ['100vh', '100dvh']
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        full: '9999px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
