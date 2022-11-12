module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.{html,css,js}'],
  theme: {
    fontFamily: {
      'poppins':  ['Poppins', 'sans-serif']
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '0.8rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.363rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem'
    },
    extend: {
      animation : {
        blob: 'blob 7s infinite'
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          }
        }
      }
    },
  },
  plugins: [],
}