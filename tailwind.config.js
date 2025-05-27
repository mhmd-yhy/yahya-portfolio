/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "Back-Light": '#bae6fd',
        "Sec-Back-Light": '#334155',
        "Third-Back-Light": '#475569',
        "Border-Color-Light": '#6b7280',
        "Back-Dark": '#121212',
        "Sec-Back-Dark": '#1e1e1f',
        "Border-Color-Dark": '#2a2e2e',
        "Text-Color-Dark": '#71717a',
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
