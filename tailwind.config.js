const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...fontFamily.sans],
        handwriting: ["Dancing Script", "cursive"],
      },
      borderRadius: {
        DEFAULT: "12px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
        xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
        "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
        hover: "0 8px 25px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        // Align with MUI theme colors - Navy Blue, Red, Green, White
        primary: {
          light: "#3b82f6",
          DEFAULT: "#1e3a8a",
          dark: "#1e40af",
        },
        secondary: {
          light: "#ef4444",
          DEFAULT: "#dc2626",
          dark: "#b91c1c",
        },
        success: {
          light: "#22c55e",
          DEFAULT: "#16a34a",
          dark: "#15803d",
        },
        info: {
          light: "#3b82f6",
          DEFAULT: "#1e3a8a",
          dark: "#1e40af",
        },
        warning: {
          light: "#facc15",
          DEFAULT: "#eab308",
          dark: "#ca8a04",
        },
        error: {
          light: "#ef4444",
          DEFAULT: "#dc2626",
          dark: "#b91c1c",
        },
        // Additional brand colors
        teal: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0F766E",
          700: "#0D5B52",
          800: "#115E59",
          900: "#134E4A",
        },
        amber: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F",
        },
        lime: {
          50: "#F7FEE7",
          100: "#ECFCCB",
          200: "#D9F99D",
          300: "#BEF264",
          400: "#A3E635",
          500: "#84CC16",
          600: "#65A30D",
          700: "#4D7C0F",
          800: "#3F6212",
          900: "#365314",
        },
        purple: {
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#D8B4FE",
          400: "#C084FC",
          500: "#A855F7",
          600: "#9333EA",
          700: "#7E22CE",
          800: "#6B21A8",
          900: "#581C87",
        },
        // Neutral grays
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
      },
      spacing: {
        "form-field": "16px",
        section: "32px",
        "section-lg": "48px",
        "section-xl": "64px",
      },
      transitionDuration: {
        DEFAULT: "300ms",
        fast: "150ms",
        slow: "500ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        out: "cubic-bezier(0.0, 0, 0.2, 1)",
        in: "cubic-bezier(0.4, 0, 1, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "slide-down": "slide-down 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};
