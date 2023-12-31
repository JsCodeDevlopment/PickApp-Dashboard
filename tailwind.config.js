/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [
      require("daisyui"),
      require("tailwind-scrollbar"),
    ],
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
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
      ],
    },
  };