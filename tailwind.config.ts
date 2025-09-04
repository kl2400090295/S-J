import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        // Voice journal specific colors
        purple: {
          50: "hsl(262, 83%, 98%)",
          100: "hsl(262, 83%, 95%)",
          200: "hsl(262, 83%, 90%)",
          300: "hsl(262, 83%, 80%)",
          400: "hsl(262, 83%, 70%)",
          500: "hsl(262, 83%, 60%)",
          600: "hsl(262, 83%, 58%)",
          700: "hsl(262, 83%, 45%)",
          800: "hsl(262, 83%, 35%)",
          900: "hsl(262, 83%, 25%)",
        },
        pink: {
          50: "hsl(328, 86%, 98%)",
          100: "hsl(328, 86%, 95%)",
          200: "hsl(328, 86%, 90%)",
          300: "hsl(328, 86%, 80%)",
          400: "hsl(328, 86%, 75%)",
          500: "hsl(328, 86%, 70%)",
          600: "hsl(328, 86%, 65%)",
          700: "hsl(328, 86%, 55%)",
          800: "hsl(328, 86%, 45%)",
          900: "hsl(328, 86%, 35%)",
        },
        indigo: {
          50: "hsl(240, 60%, 98%)",
          100: "hsl(240, 60%, 95%)",
          200: "hsl(240, 60%, 90%)",
          300: "hsl(240, 60%, 80%)",
          400: "hsl(240, 60%, 70%)",
          500: "hsl(240, 60%, 60%)",
          600: "hsl(240, 60%, 50%)",
          700: "hsl(240, 60%, 40%)",
          800: "hsl(240, 60%, 30%)",
          900: "hsl(240, 60%, 20%)",
        },
        blue: {
          50: "hsl(210, 100%, 98%)",
          100: "hsl(210, 100%, 95%)",
          200: "hsl(210, 100%, 90%)",
          300: "hsl(210, 100%, 80%)",
          400: "hsl(210, 100%, 70%)",
          500: "hsl(210, 100%, 60%)",
          600: "hsl(210, 100%, 50%)",
          700: "hsl(210, 100%, 40%)",
          800: "hsl(210, 100%, 30%)",
          900: "hsl(210, 100%, 20%)",
        },
        green: {
          50: "hsl(120, 60%, 98%)",
          100: "hsl(120, 60%, 95%)",
          200: "hsl(120, 60%, 90%)",
          300: "hsl(120, 60%, 80%)",
          400: "hsl(120, 60%, 70%)",
          500: "hsl(120, 60%, 60%)",
          600: "hsl(120, 60%, 50%)",
          700: "hsl(120, 60%, 40%)",
          800: "hsl(120, 60%, 30%)",
          900: "hsl(120, 60%, 20%)",
        },
        yellow: {
          50: "hsl(60, 80%, 98%)",
          100: "hsl(60, 80%, 95%)",
          200: "hsl(60, 80%, 90%)",
          300: "hsl(60, 80%, 80%)",
          400: "hsl(60, 80%, 70%)",
          500: "hsl(60, 80%, 60%)",
          600: "hsl(60, 80%, 50%)",
          700: "hsl(60, 80%, 40%)",
          800: "hsl(60, 80%, 30%)",
          900: "hsl(60, 80%, 20%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
        script: ["var(--font-script)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        slideUp: {
          from: { 
            transform: "translateY(100%)", 
            opacity: "0" 
          },
          to: { 
            transform: "translateY(0)", 
            opacity: "1" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
