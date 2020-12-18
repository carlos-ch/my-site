module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        social: "url('/social-icons.svg')",
      }),
      margin: {
        spaced: 'calc(16% - 1rem)',
      },
      colors: {
        'gray-text': '#3b3c40',
      },
    },
    backgroundPosition: {
      GitHub: 'left',
      LinkedIn: 'center',
      Twitter: 'right',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
