/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './screens/**/*.{html,js}',
    './*.{html,js}',
    './App.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary50': '#DBEBE7',
        'primary100': '#AFD3CA',
        'primary150': '#71b1a1',
        'primary200': '#129575',
        'primary300': '#2A7C68',
        'accent500': '#FFBA4D',
        'gray500': '#878787',
      },
    },
  },
  plugins: [],
}

