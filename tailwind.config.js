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
          'gram': ['Inter', 'sans-serif'],
        },
        colors: {
          primary: {
            light: '#3b82f6', // blue-500
            dark: '#60a5fa', // blue-400
          },
        },
      },
    },
    plugins: [],
}