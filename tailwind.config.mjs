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
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Montserrat', 'sans-serif'],
      },
      fontWeight: {
        heading: '700',
        body: '300',
        button: '700',
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        glow: '0 0 8px rgba(255, 255, 255, 0.6)',
      },
      borderRadius: {
        neumorphic: '12px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
