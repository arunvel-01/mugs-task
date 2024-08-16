/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-gray": "#1e1e1e",
        gray: {
          "100": "#797979",
          "200": "#121212",
        },
        white: "#fff",
        darkorange: {
          "100": "#fd6f00",
          "200": "rgba(253, 111, 0, 0.6)",
        },
        gainsboro: "#d9d9d9",
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#edecec",
        },
        black: "#000",
        darkslategray: "#424242",
        antiquewhite: "#ffebdb",
        dimgray: "#545454",
        snow: "#fff8f8",
      },
      spacing: {},
      fontFamily: {
        "nav-bar-text-21": "Poppins",
        montserrat: "Montserrat",
      },
      borderRadius: {
        sm: "14px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "2xl": "21px",
      mid: "17px",
      "29xl": "48px",
      "19xl": "38px",
      "10xl": "29px",
      "46xl": "65px",
      "33xl": "52px",
      "20xl": "39px",
      lgi: "19px",
      "13xl": "32px",
      "7xl": "26px",
      "5xl": "24px",
      "81xl": "100px",
      "31xl": "50px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq1900: {
        raw: "screen and (max-width: 1900px)",
      },
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq950: {
        raw: "screen and (max-width: 950px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};