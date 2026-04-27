/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Kosugi Maru"', 'sans-serif'],
        display: ['"Comfortaa"', 'cursive'],
        mono: ['"VT323"', 'monospace'],
      },
      colors: {
        'pastel-pink': '#FFD1DC',
        'hot-pink': '#FF69B4',
        'lime-green': '#D1FFD7',
        'sky-blue': '#BFE6FF',
        'cream': '#FFFDD0',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #ffe4e6 1px, transparent 1px), linear-gradient(to bottom, #ffe4e6 1px, transparent 1px)",
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
        'glitch': 'glitch 3s cubic-bezier(.25,.46,.45,.94) infinite both',
        'glitch-scan': 'scan 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' },
        },
        glitch: {
          '0%, 40%, 100%': { transform: 'translate(0)', filter: 'none', clipPath: 'none' },
          '1%': { transform: 'translate(-1px, -1px)', filter: 'hue-rotate(90deg)' },
          '2%': { transform: 'translate(1px, 1px)', filter: 'hue-rotate(180deg)' },
          '3%': { transform: 'translate(-1px, 1px)', filter: 'hue-rotate(270deg)' },
          '4%': { transform: 'translate(1px, -1px)', filter: 'hue-rotate(360deg)' },
          '5%': { transform: 'translate(-2px, 0)', filter: 'invert(1)' },
          '6%': { transform: 'translate(2px, 0)', filter: 'invert(0)' },
          '7%': { transform: 'translate(0, -1px)', clipPath: 'inset(10% 0 30% 0)' },
          '8%': { transform: 'translate(0, 1px)', clipPath: 'inset(40% 0 10% 0)' },
          '9%': { transform: 'translate(-1px, 1px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
