/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#A5153F',
      'bg': '#1A1A1C',
      'white': '#FFFFFF',
      'black': '#000000',
      'gray': '#808080',
      'off-white': '#F7F7F7'
    },
    fontFamily: {
      algeria: ['Algeria Sans', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}
