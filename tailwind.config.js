/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      'd-red': 'rgb(218, 44, 32)',
      'rating': 'rgb(255, 166, 0)',
      'goldenrod': 'goldenrod'
    },
  }
};
export const plugins = [];

