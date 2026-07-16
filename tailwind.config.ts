import { type Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

// Brand colours. `neutral-950` is the template's black and `white` its light
// tone, so remapping those two makes every existing class pick up the brand
// palette (including opacity variants like `neutral-950/5` and `bg-white/10`).
const woodsmoke = '#161616'
const haze = '#F6F6F6'

export default {
  content: ['./src/**/*.{js,jsx,mdx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.25rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.5rem', { lineHeight: '3rem' }],
      '6xl': ['3rem', { lineHeight: '3.5rem' }],
      '7xl': ['4rem', { lineHeight: '4.5rem' }],
    },
    extend: {
      colors: {
        woodsmoke,
        haze,
        white: haze,
        // Neutral ramp interpolated between Haze (50) and Woodsmoke (950) so
        // every grey on the site sits between the two brand colours.
        neutral: {
          50: haze,
          100: '#f1f1f1',
          200: '#e2e2e2',
          300: '#d3d3d3',
          400: '#a5a5a5',
          500: '#787878',
          600: '#595959',
          700: '#484848',
          800: '#303030',
          900: '#222222',
          950: woodsmoke,
        },
      },
      borderRadius: {
        '4xl': '2.5rem',
      },
      fontFamily: {
        sans: ['var(--font-mona-sans)', ...defaultTheme.fontFamily.sans],
        display: [
          ['var(--font-mona-sans)', ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
    },
  },
  plugins: [],
} satisfies Config
