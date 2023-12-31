/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 3s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
        },
      },
      backgroundImage: {
        "routeHeader": "url(./assets/bg.jpg)"
      }
    },
  },
  plugins: [],
}

