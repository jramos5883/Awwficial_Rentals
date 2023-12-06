/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: "#root",
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    //   secondary: "white",
    //   accent: "white",

    extend: {
      screens: {
        // Custom Break Points
        cellsm: "360px",
        celllg: "412px",
        tablet: "768px",
        lapsm: "1024px",
        laplg: "1366px",
        lapxl: "1536px",
        desksm: "1920px",
        desklg: "2560px",
      },
    },
  },
  plugins: [],
};
