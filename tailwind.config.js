/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    container: {
      padding: '2rem',
      center: true
    },
    fontFamily: {
      body: ['Roboto Condensed', 'Helvetica', 'Arial', 'sans-serif'],
      alt: ['Bebas Neue', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: {
      xs: '.66rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.086rem',
      xl: '1.238rem',
      '2xl': '1.414rem',
      '3xl': '1.750rem',
      '4xl': '1.999rem',
      '5xl': '2.474rem',
      '6xl': '3.124rem',
      '7xl': '3.874rem'
    },
    extend: {
      colors: {
        brand: {
          blacksemi: '#0a0a0a',
          blackmid: '#1f1f1f',
          graylight: '#f3f3f3',
          graymid: '#eaeaea',
          graysemidark: '#ddd',
          graydark: '#8a8a8a'
        }
      }
    }
  },
  variants: {},
  plugins: []
}
