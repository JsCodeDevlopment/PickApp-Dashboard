/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    log: false,
    themes: [
      {
        mytheme: {
          primary: "#E6324B",
          secondary: "#FFFF",
          accent: "#a3e635",
          neutral: "#454545",
          "base-100": "#2B2B2B",
          info: "#0094d6",
          success: "#00d08f",
          warning: "#bf5800",
          error: "#ff0042",
        },
      },
      "dark", "light", "forest", "black", "wireframe"
    ],
  }
};
