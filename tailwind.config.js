/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1D2B63', // azul-marinho fundo
          light: '#214C8F',
        },
        secondary: '#5D8BFF', // azul destaque
        accent: '#76D7E3', // ciano
        background: '#F9F6F2', // fundo claro
        surface: '#FFFFFF',
        border: '#E6E8EC',
        ink: {
          DEFAULT: '#1E1E1E', // texto primário
          soft: '#5C6575', // texto secundário
          inverse: '#FFFFFF', // texto inverso
        },
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['4rem', { lineHeight: '1.1', fontWeight: '800' }], // 64
        h1: ['3.25rem', { lineHeight: '1.1', fontWeight: '700' }], // 52
        h2: ['2.625rem', { lineHeight: '1.1', fontWeight: '700' }], // 42
        h3: ['2rem', { lineHeight: '1.1', fontWeight: '600' }], // 32
        h4: ['1.5rem', { lineHeight: '1.2', fontWeight: '600' }], // 24
        body: ['1.125rem', { lineHeight: '1.7' }], // 18
        small: ['0.875rem', { lineHeight: '1.6' }], // 14
      },
      spacing: {
        section: '120px',
        'section-mobile': '64px',
      },
      borderRadius: {
        card: '24px',
        pill: '999px',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0,0,0,.08)',
        md: '0 8px 24px rgba(0,0,0,.12)',
        lg: '0 20px 50px rgba(0,0,0,.15)',
      },
    },
  },
  plugins: [],
};
