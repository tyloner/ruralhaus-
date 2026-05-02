/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#1A1714',
        cream: '#FAFAF7',
        sage: '#4A5E44',
        stone: '#8C7B6E',
        sand: '#C4A882',
        mist: '#EAE5DC',
      },
      letterSpacing: {
        widest: '0.3em',
        wider: '0.2em',
        wide: '0.15em',
      },
    },
  },
  plugins: [],
}
