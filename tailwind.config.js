/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#1e1e1e",
          "200": "#080810",
          "400": "rgba(255, 255, 255, 0.5)",
        },
        white: "#fff",
        whitesmoke: "rgba(237, 237, 237, 0.1)",
        gainsboro: "rgba(217, 217, 217, 0.01)",
        midnightblue: "rgba(34, 33, 100, 0.5)",
        slateblue: "rgba(100, 93, 191, 0.3)",
        mediumturquoise: "#58d1d3",
      },
      spacing: {},
      fontFamily: {
        "heading-2": "Inter",
      },
      borderRadius: {
        "16xl-2": "35.2px",
        "65xl": "84px",
        "13xl": "32px",
        "92xl-2": "111.2px",
        "781xl": "800px",
        "26xl-9": "45.9px",
        "40xl": "59px",
        "881xl": "900px",
        "34xl-6": "53.6px",
        "38xl-2": "57.2px",
        "659xl-8": "678.8px",
        "24xl-6": "43.6px",
      },
    },
    fontSize: {
      "29xl": "48px",
      "9xl": "28px",
      "5xl": "24px",
      "13xl": "32px",
      "61xl": "80px",
      "85xl": "104px",
      "45xl": "64px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
