/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A2B5E', // azul-marinho
          light: '#214C8F',
          deep: '#101C42', // fundo mais escuro (hero/CTA)
        },
        secondary: '#4F7BF0', // azul "tinta" — um pouco mais denso que o antigo #5D8BFF p/ contraste sobre papel
        accent: '#76D7E3', // ciano
        background: '#F6F3EC', // papel
        paper: {
          DEFAULT: '#F6F3EC',
          deep: '#EEE9DE',
        },
        surface: '#FFFFFF',
        border: '#E6E8EC',
        ink: {
          DEFAULT: '#14214D', // texto: azul-marinho como tinta, nunca preto puro
          soft: '#4A5577',
          faint: '#7C849C',
          inverse: '#FFFFFF',
        },
      },
      fontFamily: {
        // Display editorial (títulos). Fraunces tem eixo óptico: fica firme grande e legível pequeno.
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        // UI e corpo
        heading: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        // Numeração de artigos, incisos, rótulos
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        card: '20px',
        media: '14px',
        pill: '999px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out': 'cubic-bezier(0.77, 0, 0.175, 1)',
        drawer: 'cubic-bezier(0.32, 0.72, 0, 1)',
      },
      maxWidth: {
        page: '1200px',
      },
    },
  },
  plugins: [],
};
