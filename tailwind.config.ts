import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom vibrant color palette
        brand: {
          50: "#eefaff",
          100: "#dcf5ff",
          200: "#b9ecff",
          300: "#7edeff",
          400: "#38c7ff",
          500: "#06adff",
          600: "#008bff",
          700: "#0070cc",
          800: "#005da6",
          900: "#0a4f87",
        },
        accent1: {
          50: "#fdf2ff",
          100: "#fbe6ff",
          200: "#f8cfff",
          300: "#f3a6ff",
          400: "#ed6fff",
          500: "#e33dff",
          600: "#d21eef",
          700: "#b612cc",
          800: "#9514a5",
          900: "#7a1585",
        },
        accent2: {
          50: "#fff8ec",
          100: "#ffefd0",
          200: "#ffdca1",
          300: "#ffc366",
          400: "#ffa22d",
          500: "#ff8700",
          600: "#ff6a00",
          700: "#cc4a02",
          800: "#a6390c",
          900: "#87310f",
        },
        accent3: {
          50: "#edfff7",
          100: "#d5ffee",
          200: "#aeffde",
          300: "#70ffc9",
          400: "#2bfcad",
          500: "#00e890",
          600: "#00c475",
          700: "#009a5d",
          800: "#007a4b",
          900: "#00643f",
        },
        success: {
          50: "#edfff7",
          100: "#d5ffee",
          200: "#aeffde",
          300: "#70ffc9",
          400: "#2bfcad",
          500: "#00e890",
          600: "#00c475",
          700: "#009a5d",
          800: "#007a4b",
          900: "#00643f",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(10px)" },
        },
        "pulse-light": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "bounce-light": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        morph: {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-500px 0" },
          "100%": { backgroundPosition: "500px 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "float-reverse": "float-reverse 7s ease-in-out infinite",
        "pulse-light": "pulse-light 3s ease-in-out infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "spin-reverse": "spin-reverse 12s linear infinite",
        "bounce-light": "bounce-light 2s ease-in-out infinite",
        morph: "morph 8s ease-in-out infinite",
        shimmer: "shimmer 2s infinite linear",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "url('/placeholder.svg?height=800&width=1600')",
        "dots-pattern": "radial-gradient(circle, #00000010 1px, transparent 1px)",
        "grid-pattern":
          "linear-gradient(to right, #00000008 1px, transparent 1px), linear-gradient(to bottom, #00000008 1px, transparent 1px)",
        "noise-pattern":
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        shimmer:
          "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%)",
      },
      boxShadow: {
        neon: "0 0 5px theme(colors.brand.400), 0 0 20px theme(colors.brand.500)",
        "neon-accent": "0 0 5px theme(colors.accent1.400), 0 0 20px theme(colors.accent1.500)",
        "neon-accent2": "0 0 5px theme(colors.accent2.400), 0 0 20px theme(colors.accent2.500)",
        "neon-accent3": "0 0 5px theme(colors.accent3.400), 0 0 20px theme(colors.accent3.500)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "3d": "0 4px 0 theme(colors.brand.700)",
        "3d-accent": "0 4px 0 theme(colors.accent1.700)",
        "3d-accent2": "0 4px 0 theme(colors.accent2.700)",
      },
      backdropFilter: {
        glass: "blur(10px) saturate(180%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config

