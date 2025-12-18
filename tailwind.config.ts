import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a1a1a',
        surface: '#2d2d2d',
        accent: '#ff6b35',
        'accent-hover': '#ff8555',
        'text-primary': '#e0e0e0',
        'text-secondary': '#a0a0a0',
        border: '#404040',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'carbon-fiber': `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.015) 2px,
            rgba(255, 255, 255, 0.015) 4px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(255, 255, 255, 0.015) 2px,
            rgba(255, 255, 255, 0.015) 4px
          )
        `,
      },
    },
  },
  plugins: [],
};

export default config;
