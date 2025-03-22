// tailwind.config.js
export default {
    darkMode: 'class', // ✅ important
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#facc15',
          secondary: '#000000',
          textPrimary: '#1f2937',
        },
      },
    },
    plugins: [],
  };
  