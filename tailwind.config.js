const themes = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        hero: `url('/assets/svg/hero.svg')`,
        'support-top': `url('/assets/svg/support-top.svg')`,
        'support-bottom': `url('/assets/svg/support-bottom.svg')`,
        footer: `url('/assets/svg/footer.svg')`,
      },
      boxShadow: {
        'project-card': '0px 2px 16px 4px rgba(33, 47, 96, 0.12)',
      },
      container: {
        padding: '1rem',
      },
      colors: {
        neutral: {
          lightest: '#F2F2F2',
          lighter: '#CCD2D9',
          grey: '#808EA0',
          mid: '#213960',
          darker: '#13274C',
          darkest: '#0C1A32',
        },
        primary: {
          DEFAULT: '#2C3ACF',
          background: '#E9EBFA',
        },
        accent: {
          green: '#00B159',
          yellow: '#FBAF1D',
          red: '#EB5757',
        },
      },
      fontFamily: {
        sans: ['Airbnb Cereal App', ...themes.fontFamily.sans],
      },
      fontSize: {
        '4xl': ['3.5rem', '3rem'], // 'large-title'
        '3xl': ['2.25rem', '2.5rem'], // 'title-1'
        '2xl': ['1.875rem', '2rem'], // 'title-2'
        xl: ['1.5rem', '1.875rem'], // 'heading-1'
        lg: ['1.25rem', '1.75rem'], // 'heading-2'
        base: ['1rem', '1.375rem'], // 'body-text-1'
        sm: ['0.875rem', '1.25rem'], // 'body-text-2'
        xs: ['0.75rem', '1.125rem'], // 'caption'
      },
      lineHeight: {
        15.5: '3.875rem',
      },
      spacing: {
        7.5: '1.875rem',
        4.5: '1.125rem',
        15: '3.75rem',
        22.5: '5.625rem',
        30: '7.5rem',
        175: '43.75rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
