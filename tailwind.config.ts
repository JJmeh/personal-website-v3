import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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

