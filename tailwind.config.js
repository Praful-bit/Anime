/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-header': "url('https://w.wallhaven.cc/full/y8/wallhaven-y8vx6l.jpg')",
      }
    },
  },
  plugins: [],
}

