/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: "0.5rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
      boxShadow:  {
        custom: '-2px 0px 49px -15px rgba(0,0,0,0.25)'
      },
      backgroundColor: {
        mainPink: "#F92A63",
        lightGrey: "#E9E9E9",
        lightGreyButton: "#BABABA",
      },
      textColor: {
        mainPink: "#F92A63",
        lightGrey: "#EEEEEE",
      },
      fontFamily: {
        hero: ["var(--font-Andora)"],
      },
    },
  },
  plugins: [
    require("daisyui"),
    // require("flowbite/plugin")({
    //   charts: true,
    // }),
  ],
};
