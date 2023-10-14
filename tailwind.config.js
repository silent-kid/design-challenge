/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        "roc-primary": "#0076ce",
        white: "#fff",
        "blue-gray-900": "#0f172a",
        "fs-search-surface-bg": "#fafbfc",
        dimgray: "#616161",
        gray: "rgba(255, 255, 255, 0)",
        "fs-search-red": "#ff6666",
        "fs-search-table-bg": "#f4f4f4",
        "fs-search-banner-blue": "#ddf3ff",
        "fs-search-banner-purple": "#efd9f9",
        darkgray: "#999",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        "body-l": "Roboto",
        inter: "Inter",
        poppins: "Poppins",
        inherit: "inherit",
      },
      borderRadius: {
        mini: "15px",
        "10xs": "3px",
        "2xl": "21px",
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "46xl": "65px",
      "5xl": "24px",
      "16xl": "35px",
      xs: "12px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
