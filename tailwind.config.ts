import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'c-white': '#ffffff',
        'c-off-white': '#fafafa',
        'c-cream': '#f5f3ef',
        'c-gray-100': '#e8e6e1',
        'c-gray-200': '#d4d1c9',
        'c-gray-400': '#9c9a93',
        'c-gray-600': '#6b6a65',
        'c-gray-800': '#3d3c39',
        'c-gray-900': '#1d1c1a',
        'c-black': '#0d0d0c',
        'c-blue': '#2563eb',
        'c-blue-deep': '#1e40af',
        'c-teal': '#0d9488',
        'c-teal-light': '#14b8a6',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'SF Pro Display', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'fluid-hero': 'clamp(56px, 10vw, 120px)',
        'fluid-section': 'clamp(40px, 6vw, 72px)',
        'fluid-cta': 'clamp(48px, 8vw, 88px)',
        'fluid-stat': 'clamp(48px, 8vw, 96px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(30px, -30px) scale(1.05)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.95)' },
          '75%': { transform: 'translate(20px, 10px) scale(1.02)' },
        },
        slideUp: {
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        scrollDown: {
          '0%': { top: '0', opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 20s ease-in-out infinite',
        'float-delay-5': 'float 20s ease-in-out -5s infinite',
        'float-delay-10': 'float 20s ease-in-out -10s infinite',
        slideUp: 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        fadeInUp: 'fadeInUp 1s both',
        pulse: 'pulse 2s infinite',
        scrollDown: 'scrollDown 2s infinite',
        marquee: 'marquee 30s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
