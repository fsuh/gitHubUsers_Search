/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			custom: "992px",
			"custom-small": "800px",
			custom_big: "1200px",
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};
