/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    "./src/components/**/*.{js,ts,jsx,tsx}",
    // './pages/**/*.{js,ts,jsx,tsx}', 
    // './app/components/**/*.{js,ts,jsx,tsx}',
    // './app/views/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily : {
        'int' : ['Inter', 'sans-serif']
      },
      colors : {
        'white' : '#FFFFFF',
        'item-blue' : '#E7F0FF',
        'item-red' : '#FFDBDD',
        'item-orange' : '#FFDBDD',
        'typo-blue1' : '#798BAD',
        'typo-blue2' : '#102F52',
        'dominant-blue' : '#4284F4',
        'dominant-red' : '#FF3642',
        'body-blue' : '#F3F7FF',
        'alert-cover-green' : '#CBFFD7',
        'alert-main-green' : '#10CC83',
      },
      gridTemplateColumns: {
        'template': '250px minmax(0, 1fr)',
        'login' : '1fr 500px'
      },
      gridTemplateRows: {
        'template': '88px 1fr',
      }
    },
  },
  plugins: [],
}
