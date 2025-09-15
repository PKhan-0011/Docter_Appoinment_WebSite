/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors: {
           light_green: '#093426',
           light02_green: '#1e7550',
           light03_green: '#00d4ae',
           light_dark: '#008156',
           light_brown: '#7e7e7c',
           bg_muted: 'oklch(21.6% 0.006 56.043)'
       }
    },
  },
  plugins: [],
}

