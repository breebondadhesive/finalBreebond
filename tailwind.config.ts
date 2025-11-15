/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        breebond: {
          blue: '#0d47a1',
          'blue-dark': '#1a237e',
          gray: '#424242',
        },
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        wider: '0.05em',
        widest: '0.15em',
      },
    },
  },
  plugins: [],
}
