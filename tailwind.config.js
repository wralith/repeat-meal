/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        repeatmeal: {
          primary: '#f87171',
          secondary: '#fde68a',
          accent: '#fda4af',
          neutral: '#1F2D37',
          'base-100': '#374151',
          info: '#A2D3EC',
          success: '#118D51',
          warning: '#F0B719',
          error: '#F26464',
          '--btn-text-case': 'none',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
