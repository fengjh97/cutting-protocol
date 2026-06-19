/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFF7F1',
        paper2: '#FFEFE8',
        card: '#FFFFFF',
        ink: '#4D3934',
        inksoft: '#8F6C64',
        inkfaint: '#A47B72',
        peach: '#FF9F95',
        coral: '#FF7D75',
        honey: '#FFCF7D',
        mint: '#69CDA5',
        aqua: '#85D7E3',
        line: '#FFE3DA',
        linesoft: '#FFF0ED',
      },
      fontFamily: {
        display: ['"M PLUS Rounded 1c"', '"Zen Maru Gothic"', '"Noto Sans SC"', 'sans-serif'],
        sans: ['Nunito', '"M PLUS Rounded 1c"', '"Noto Sans SC"', 'sans-serif'],
        mono: ['"Spline Sans Mono"', 'monospace'],
        cjk: ['"M PLUS Rounded 1c"', '"Noto Sans SC"', 'sans-serif'],
      },
      boxShadow: {
        warm: '0 12px 35px -24px rgba(255, 125, 117, 0.44)',
        warmlg: '0 30px 80px -52px rgba(134, 80, 70, 0.65)',
      },
    },
  },
  plugins: [],
};
