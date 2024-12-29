export const content = [
  './index.html',
  './src/**/*.{js,jsx,ts,tsx}', // Ensures all your React components are scanned for Tailwind classes
];
export const theme = {
  extend: {
    colors: {
      customCyan: '#00A0AE',
      customGray: "#F5F6FA",
    },
  },
};
export const plugins = [];
