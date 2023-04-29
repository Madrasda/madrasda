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
    extend: {
      animation: {
        'spin': 'spin 5s linear infinite',
      },
    },
    colors: {
      'primary': '#fecc00',
      'accent': '#c51a4c',
      'bg': '#1A1A1C',
      'white': '#DFDFDF',
      'black': '#000000',
      'gray': '#808080',
      'shadowGrey':'rgba(62,62,62,0.63)' ,
      'off-white': '#F7F7F7',
      'red': "#ff2c2c",
      'invalidValue': "rgba(255,171,171,0.51)"
    },
    fontFamily: {
      // algeria: ['Algeria Sans', 'sans-serif'],
      algeria: ['Anuphan', 'cursive'],
      // serif: ['Merriweather', 'serif'],
      bb: ['Bubblegum Sans', 'cursive'],
      cv1: ['Ceviche One', 'cursive'],
      ga: ['Galindo', 'cursive'],
      jo1: ['Joti One', 'cursive'],
      bang: ['Bangers', 'cursive'],
    },

  },
  plugins: []

}
