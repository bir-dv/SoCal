/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",],
  theme: {
    extend: {
      fontFamily: {
        herofont:[
          'Cormorant Garamond','GFS Didot'
        ],
        fontdidot:[
          'GFS Didot'
        ],
        fontlogo:[
          'Neuton'
        ],
        racing:[
          'Racing'
        ],
        ethnocentric:[
          'ethnocentric_rg'
        ]
      },
      animation:{
        bounce:'bounce 1s ease-in-out 1'

      }
    },
  },
  plugins: [],

 

 
};



