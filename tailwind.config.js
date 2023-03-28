/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
   
   

     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      backgroundImage: {
        'hero': "url('/public/vivid-blurred-colorful-wallpaper-background.jpg')",
        
      }, 
      
    },
   
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'ocean' : '#43D9BD',
      'Bluesky' : '#49B1F2',
      'Graysky' : '#537287',
      'blueskydark' : '#323240',
      'skin':'#F2D49B',
      'salmon':'#F28585',
      'bluebg':'#2D828C',
      'skinbg':'#F6D99C',
    },
  
    fontFamily: {
      sans: ['Graphik', 'Roboto', 'Lato', 'Century Gothic', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },

  

  plugins: [],
}

