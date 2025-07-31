// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class',
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],

//   theme: {
//     extend: {
//       spacing: { 
//     'desktop-container': '1200px',
//   },
//       colors: {
//         brandOrange: '#FF6B35',
//         lightGray: '#F5F5F5',
//         mediumGray: '#CCCCCC',
//         heartRed: '#FF0000',
//         darkBg: '#181818',
//       },
//       fontFamily: {
//         heading: ['Montserrat', 'sans-serif'],
//         body: ['Inter', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      spacing: {
        'desktop-container': '1200px',
      },
      colors: {
  // 🧊 Neutrals 
  light: '#F9F9F9',
  softWhite: '#FCFCFC',
  mutedText: '#A1A1A1',

  // 🎯 Accent & branding
  brandOrange: '#FF6B35',
  heartRed: '#E63946',
      
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card-light': '0 4px 8px rgba(0, 0, 0, 0.06)',
        'card-dark': '0 6px 12px rgba(0, 0, 0, 0.25)',
      },
      transitionTimingFunction: {
        'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
};
