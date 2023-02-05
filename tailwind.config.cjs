/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"

    ],
    theme: {
        extend: {
            fontSize: {
                sm: '0.5rem',
                base: '1rem',
                xl: '1.25rem',
                '2xl': '1.563rem',
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
            },
            fontFamily: {
                hero: ['Andora']
            }

        },
    },
    plugins: [
        require("daisyui"),
        require('flowbite/plugin')

    ],
}