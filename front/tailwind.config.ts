import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          DEFAULT: "#9E9E9E",
          20: "#9E9E9E33",
          dark: "#333333",
          light: "#CCCCCC"
        },
        green: {
          dark: {
            DEFAULT: "#347C36",
            20: "#347C3633",
          },
        }
      },
      boxShadow: {
        blur: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        "modal-width": "clamp(20rem,80vw,40rem)",
      }
    },
  },
  plugins: [],
};
export default config;
