const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        colors: {
            transparent: "transparent",
            slate: colors.sky,
            primary: {
                700: "#2E31E4",
                600: "#4739ED",
                500: "#563EF4",
                400: "#735FF7",
                300: "#9E90F9",
            },
            gray: {
                900: "#0C1025",
                800: "#1F2333",
                700: "#2C3047",
            },
            tPrimary: "#F4F6F6",
            tsecondary: "#9DACBE",
            tTertiary: "#6F869F",
            tQuaternary: "#52637A",
        },
		borderRadius: {
			"large": "10px",
		},
        extend: {
            fontFamily: {
                sans: ["Nunito", "sans-serif"],
            },
        },
    },
    plugins: [],
};
