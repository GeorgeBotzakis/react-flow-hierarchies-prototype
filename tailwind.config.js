/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      boxShadow: {
        nodeCard : '1.63048px 1.63048px 6.5219px 0px rgba(0, 51, 204, 0.12)'
      },
      colors: {
        ep: {
          hm: {
            dark: '#092A1A'
          },
          orange: {
            DEFAULT: '#FF964F',
            dark: '#B34914',
            'step-up': '#FEC49E',
            'step-down': '#FD6922'
          },
          purple: {
            DEFAULT: '#B8277E',
            dark: '#3A0D28',
            light: '#E792C4',
            'step-up': '#D855A2',
            'step-down': '#781D53'
          },
          blue: {
            DEFAULT: '#7BC4ED',
            light: '#E8F4FC',
            dark: '#227FB4',
            'step-up': '#C4E4F6',
            'step-down': '#3FA7E2'
          },
          navy: {
            DEFAULT: '#394464',
            light: '#818FB5',
            'step-up': '#566694',
            'step-down': '#1D2333'
          },
          yellow: '#FFE442',
          red: {
            dark: '#a40812',
            'step-down': '#F91523'
          },
          'darkest-grey': '#6A6D72',
          'darker-grey': '#424750',
          green: '#459401',
          'positive-green': '#59BA04',
          'almost-black': '#2C303C',
          'dark-grey': '#96999F',
          'light-grey': '#BDC1C7',
          'lighter-grey': '#E2E5EA',
          'lightest-grey': '#F2F3F4',
          'off-white': '#FAFAFA',
          'warning-yellow': '#FFE9C0',
          commerce: {
            DEFAULT: '#2BCC7E',
            'step-up': '#61DEA6',
            'step-down': '#1F8552',
            light: '#A6EBCA',
            dark: '#144E31',
            '3-1': '#07AB59'
          },
          gray: {
            DEFAULT: '#A8B1BE',
            'step-up': {
              DEFAULT: '#DDE0E6',
              50: '#F6F7F9'
            },
            'step-down': {
              DEFAULT: '#5C6778',
              900: '#4e5866'
            }
          },
          foundation: '#0E1521',
          cloud: '#FFFFFF'
        }
      }
    },
  },
  plugins: [],
};
