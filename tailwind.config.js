/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper:    '#FBF3E7',
        paper2:   '#F4E7D3',
        card:     '#FFFCF6',
        ink:      '#3A2A1C',
        inksoft:  '#6E5A48',
        inkfaint: '#A2917E',
        terra:    '#D2683F',
        terradeep:'#B14E2A',
        honey:    '#E0A23D',
        sage:     '#7E8C56',
        sagedeep: '#5F6B3E',
        line:     '#EADBC6',
        linesoft: '#F2E7D6',
      },
      fontFamily: {
        display: ['Fraunces', 'Noto Sans SC', 'serif'],
        sans:    ['"Bricolage Grotesque"', 'Noto Sans SC', 'sans-serif'],
        mono:    ['"Spline Sans Mono"', 'monospace'],
        cjk:     ['"Noto Sans SC"', 'sans-serif'],
      },
      boxShadow: {
        warm:   '0 2px 24px -8px rgba(120, 72, 32, 0.18)',
        warmlg: '0 14px 50px -16px rgba(120, 72, 32, 0.28)',
      },
    },
  },
  plugins: [],
};
