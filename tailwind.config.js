/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './components/**/*.{vue,js}',  
      './layouts/**/*.vue',          
      './pages/**/*.vue',            
      './plugins/**/*.{js,ts}',      
      './nuxt.config.{js,ts}', 
    ],
    theme: {
      
       screens: {
      
      'sm': '470px', 
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px',
    },

      extend: {
        fontFamily: {
          prueba: ['Poppins', 'sans-serif'],
          Merriweather: ['Philosopher','sans-serif'],
          
        },
        fontSize: {
          'fixed': '24px', 
        },
        colors: {
          'color-azul': '#110339', 
          'color-cafe-claro': '#FAE9D5', 
          'color-cafe-osc': '#BF986D', 
        },
      },
    },
    plugins: [],
  }