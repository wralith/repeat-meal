/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        wra: {
          primary: '#6b6bef',
          secondary: '#06b6d4',
          accent: '#f49fa3',
          neutral: '#1C1C22',
          'base-100': '#20294B',
          info: '#A8E3F0',
          success: '#2CC99A',
          warning: '#fcd34d',
          error: '#F41D15',
          '--btn-text-case': 'none',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
