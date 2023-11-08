/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern:
        /bg-(primary|secondary|warning|info|success|danger)-color(\s|$)|text-(primary|secondary|warning|info|success|danger)-color-inverse(\s|$)|dark:bg-(primary|secondary|warning|info|success|danger)-dark-color(\s|$)|dark:text-(primary|secondary|warning|info|success|danger)-dark-color-inverse(\s|$)/,
    },
  ],
  theme: {
    fontFamily: {
      inter: 'var(--inter)',
      bahijHelvetica: 'var(--bahij-helvetica)',
    },
    extend: {
      backgroundColor: {
        'primary-color': '#193a79',
        'primary-color-inverse': '#E3F2FD',
        'primary-dark-color': '#3B82F6',
        'primary-dark-color-inverse': '#ECEFF1',

        'secondary-color': '#CBD2D9',
        'secondary-color-inverse': '#263238',
        'secondary-dark-color': '#9AA5B1',
        'secondary-dark-color-inverse': '#37474F',

        'warning-color': '#FFCA28',
        'warning-color-inverse': '#00204A',
        'warning-dark-color': '#FFB300',
        'warning-dark-color-inverse': '#00274C',

        'info-color': '#42A5F5',
        'info-color-inverse': '#00204A',
        'info-dark-color': '#1E88E5',
        'info-dark-color-inverse': '#00274C',

        'success-color': '#66BB6A',
        'success-color-inverse': '#00204A',
        'success-dark-color': '#43A047',
        'success-dark-color-inverse': '#00274C',

        'danger-color': '#EF5350',
        'danger-color-inverse': '#FFFFFF',
        'danger-dark-color': '#E53935',
        'danger-dark-color-inverse': '#00274C',
      },
      textColor: {
        'primary-color': '#1A2E3B',
        'primary-color-inverse': '#E3F2FD',
        'primary-dark-color': '#0D1B2A',
        'primary-dark-color-inverse': '#ECEFF1',

        'secondary-color': '#CBD2D9',
        'secondary-color-inverse': '#263238',
        'secondary-dark-color': '#9AA5B1',
        'secondary-dark-color-inverse': '#37474F',

        'warning-color': '#FFCA28',
        'warning-color-inverse': '#00204A',
        'warning-dark-color': '#FFB300',
        'warning-dark-color-inverse': '#00274C',

        'info-color': '#42A5F5',
        'info-color-inverse': '#00204A',
        'info-dark-color': '#1E88E5',
        'info-dark-color-inverse': '#00274C',

        'success-color': '#66BB6A',
        'success-color-inverse': '#00204A',
        'success-dark-color': '#43A047',
        'success-dark-color-inverse': '#00274C',

        'danger-color': '#EF5350',
        'danger-color-inverse': '#FFFFFF',
        'danger-dark-color': '#E53935',
        'danger-dark-color-inverse': '#00274C',
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1100px',
        lg: '1440px',
        xl: '1680px',
        '2xl': '1920px',
      },
      height: {
        aboutSidebarContainer: 'calc(100vh - 65px)',
      },
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
