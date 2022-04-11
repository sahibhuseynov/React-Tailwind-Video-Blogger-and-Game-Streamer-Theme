module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}",],

  theme: {
    extend: {
      margin: {
        'marmax': '640px',
      },
     
      colors:{
        footername: '#a4a4a4',
        fotterbackground:'#161616',
        redd: '#ff0000',
        redhover: '#e20036',
        latest: '#1b1b1b',
        buttoncolor: '#040404',
        buttoncolor2: '#1c1c1c',
        gradientimg: 'rgba(15, 15, 15, 0.4)',
        backcolor: '#040404'
      
      },
      
    },
  },
  plugins: [],
}
