/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'navy-hero': '#1a1f3a',
        'navy-text': '#1f1f1f',
        'light-bg': '#fafaf9',
        'light-bg-alt': '#f3f3f1',
        'text-secondary': '#5a5a5a',
        'text-tertiary': '#8a8a8a',
        'text-light': '#f1f5f9',
        'accent': '#c4b5fd',
        'accent-hover': '#b4a5ed',
        'divider': '#e8e8e6',
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Inconsolata', 'monospace'],
      },
      fontSize: {
        '2xl': ['56px', { lineHeight: '1.1' }],
        'xl': ['42px', { lineHeight: '1.2' }],
        'lg': ['32px', { lineHeight: '1.2' }],
        'base': ['16px', { lineHeight: '1.6' }],
        'sm': ['14px', { lineHeight: '1.5' }],
        'xs': ['12px', { lineHeight: '1.4' }],
      },
      spacing: {
        '128': '128px',
      },
    },
  },
  plugins: [],
};
