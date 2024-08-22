/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background' : '#121212',
        'spotifyGreen' : '#1ed760',
        'hoverGreen' : '#3be477'
      },
    },
  },
  plugins: [],
}

