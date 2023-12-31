/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
		screens: {
			custom: "992px",
			"custom-small": "800px",
			custom_big: "1200px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			mobile: "350px",
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require("daisyui")],
};
