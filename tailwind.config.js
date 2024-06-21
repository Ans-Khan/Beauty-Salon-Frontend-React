/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBgColor: "#D86B56",
        yellowColor: "#0067ff",
        purpleColor: "#0067ff",
        irisBlueColor: "#0067ff",
        headingColor: "#0067ff",
        textColor: "#000000",
        btnColor: "#F16060",
      },
    },
  },
  plugins: [],
};
