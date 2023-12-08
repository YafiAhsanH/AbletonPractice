import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "my-orange": "#ff764d",
        "my-blue": "#b1c5ff",
        "my-yellow": "#fbffa7",
        "my-green": "#b6ffc0",
        "my-purple": "#d5b3ff",
      },
      gridTemplateRows: {
        "7": "repeat(7, minmax(0, 1fr))",
        "9": "repeat(9, minmax(0, 1fr))",
        "11": "repeat(11, minmax(0, 1fr))",
        "12": "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;
