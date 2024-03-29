/** @type {import('tailwindcss').Config} */
module.exports = {

	content: ["./src/**/*.{js,ts,jsx,tsx}",],
	theme: {
		extend: {
			animation: {
				spin: "spin 8s linear infinite",
			},
		},
		colors: {
			primary: "#FFA000",
			tertiary: "#F7F7F7",
			secondary: "#111111",
			home: "#E8E2E2",
			logo: "#FCC900",
			accent: "#FFC107",
			bg: "#1A191C",
			white: "#ffffff",
			black: "#000000",
			gray: "#EAEAEA",
			border: "#DDDDDD",
			shadowGrey: "rgba(93,93,93,0.63)",
			"off-white": "#F7F7F7",
			red: "#ff2c2c",
			invalidValue: "rgba(255,171,171,0.51)",
			success: "#4caf50",
			error: '#f44336',
			info: '#2196f3'
		},
		fontFamily: {
			// algeria: ['Algeria Sans', 'sans-serif'],
			algeria: ["Anuphan", "cursive"],
			bb: ["Bubblegum Sans", "cursive"],
			cv1: ["Ceviche One", "cursive"],
			ga: ["Galindo", "cursive"],
			jo1: ["Joti One", "cursive"],
			bang: ["Bangers", "cursive"],
			jojo: ["Londrina Outline", "cursive"],
			nova: ["Nova Flat", "cursive"],
			prompt: ["Prompt", "sans-serif"],
			quest: ["Questrial", "sans-serif"],
			satisfy: ["Satisfy", "sans-serif"],
			raj: ["Rajdhani", "sans-serif"],
		},
	},
	plugins: [],
};
