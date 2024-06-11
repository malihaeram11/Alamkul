/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        viga: ['Viga'], // 'Viga' should match the font-family name you used in the @font-face rule.
      }, // <-- Add a comma here
      screens: {
        'sm': '320px',      // Small screens and below
        'md': '768px',      // Medium screens and below
        'lg': '1024px',     // Large screens and below
        'xl': '1280px',     // Extra-large screens and below
      },
      width: {
        '600': '600px',
      },
  
    },
  },
  plugins: [],
};

