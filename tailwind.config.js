/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", 
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
        ]
      }
    },
  },
  plugins: [],

 

 
};



