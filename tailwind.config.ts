import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-custom': 'pulse-outward 1.5s infinite ease-out',
        'scale-loop': 'scale-animation 1.5s infinite ease-in-out'
      },
      keyframes: {
        'pulse-outward': {
          '0%': { transform: 'scale(0)', opacity: 0.8 },
          '100%': { transform: 'scale(1.5)', opacity: 0 },
        },
        'scale-animation': {
          '0%, 100%': { transform: 'scale(1)'},
          '50%': { transform: 'scale(1.1)'},
        },
      },
      colors: {
        primary: '#9ea793',
        secondary: '#D5DCCB',
        background: '#F0EEEA',
        foreground: '#191918',
        whiteish: '#F0EEEA'
      },
    },
  },
  plugins: [],
} satisfies Config;

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./components/**/*.{js,vue,ts}",
//     "./layouts/**/*.vue",
//     "./pages/**/*.vue",
//     "./plugins/**/*.{js,ts}",
//     "./app.vue",
//     "./error.vue",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         'sans': ['Inter', 'sans-serif']
//       },
//       colors: {
//         primary: "#BB2429",
//         accent: "#FFC633"
//       }
//     },
//   },
//   plugins: [],
// }

