/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',                        // This is for your public HTML file
    './src/**/*.{js,ts,jsx,tsx}',          // All JS, JSX, TS, and TSX files in src folder
    './components/**/*.{js,ts,jsx,tsx}', // All JS, JSX, TS, and TSX files in src/components folder
    './src/pages/**/*.{js,ts,jsx,tsx}',    // All JS, JSX, TS, and TSX files in src/pages folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
