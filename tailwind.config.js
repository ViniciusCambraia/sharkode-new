/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        geist: ['Geist', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
        'beam-spin': 'beam-spin 4s linear infinite',
        'float-shark': 'float-shark 8s ease-in-out infinite',
        'dots-move': 'dots-move 15s linear infinite',
        'glow-pulse': 'glow-pulse 5s ease-in-out infinite',
        'melt-dust': 'melt-dust 4s ease-in forwards',
        'fade-slide-in': 'fadeSlideIn 1s ease-out both',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-33.33%)' },
        },
        'beam-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float-shark': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1.5deg)' },
        },
        'dots-move': {
          '0%': { backgroundPosition: '0px 0px' },
          '100%': { backgroundPosition: '40px 40px' },
        },
        'glow-pulse': {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 20px rgba(26, 128, 248, 0.6)) drop-shadow(0 0 45px rgba(26, 128, 248, 0.35))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 35px rgba(26, 128, 248, 0.8)) drop-shadow(0 0 70px rgba(26, 128, 248, 0.5))',
          },
        },
        'melt-dust': {
          '0%': { transform: 'translateY(0) scale(1.1)', opacity: '0' },
          '15%': { opacity: '0.65' },
          '100%': { transform: 'translateY(400px) scale(0.05)', opacity: '0' },
        },
        'fadeSlideIn': {
          '0%': { opacity: '0', transform: 'translateY(30px)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
      }
    },
  },
  plugins: [],
}
