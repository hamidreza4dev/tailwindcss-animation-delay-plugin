const plugin = require('tailwindcss/plugin');
const animationDelay = plugin(
  function ({ addUtilities, theme, e }) {
    const values = theme('animationDelay');
    var utilities = Object.entries(values).map(([key, value]) => {
      return {
        [`.${e(`animation-delay-${key}`)}`]: { 'animation-delay': `${value}ms` },
      };
    });
    addUtilities(utilities);
  },
  {
    theme: {
      animationDelay: {
        1: '250',
        2: '500',
        3: '750',
        4: '1000',
        5: '1250',
        6: '1500',
        7: '1750',
        8: '2000',
        9: '2250',
        10: '2500',
      },
    },
  }
);
module.exports = animationDelay;
