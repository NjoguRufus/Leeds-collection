/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-navy': 'var(--royal-navy)',
        gold: 'var(--gold)',
        aqua: 'var(--aqua)',
        'brand-red': 'var(--brand-red)',
        coral: 'var(--coral)',
        charcoal: 'var(--charcoal)',
        'warm-white': 'var(--warm-white)',
        'soft-grey': 'var(--soft-grey)',
      },
    },
  },
  plugins: [],
};
