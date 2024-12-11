import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      boxShadow: {
        'shadow2': '2px 2px 10px 0px rgba(0, 0, 0, 0.05)',
        'shadow4': '2px 2px 20px 0px rgba(0, 0, 0, 0.06), 2px 2px 10px 0px rgba(0, 0, 0, 0.04)',
        'shadow8': '2px 4px 12px 0px rgba(0, 0, 0, 0.10), 0px 0px 4px 0px rgba(0, 0, 0, 0.10)',
        'shadow16': '0px 4px 12px 0px rgba(0, 0, 0, 0.10), 4px 8px 28px 0px rgba(0, 0, 0, 0.04)',
        'primaryShadow': '0px 0px 0px 3px rgba(99, 102, 241, 0.40)',
        'secondaryShadow': '0px 0px 0px 3px rgba(45, 212, 191, 0.40)',
        'tertiaryShadow': '0px 0px 0px 3px rgba(64, 64, 64, 0.10)',
        'dangerShadow': '0px 0px 0px 3px rgba(244, 63, 94, 0.40)',
      },
      borderRadius: {
        '2': '2px',
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '32': '32px',
        'circle': '50%',
      },
      colors: {
        base: {
          black: "#000000",
          white: "#FFFFFF",
        },
        indigo: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
        },
        green: {
          50: "#F0FDFA",
          100: "#CCFBF1",
          200: "#99F6E4",
          300: "#5EEAD4",
          400: "#2DD4BF",
          500: "#14B8A6",
          600: "#0D9488",
          700: "#0F766E",
          800: "#115E59",
          900: "#134E4A",
        },
        gray: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        red: {
          50: "#FFF1F2",
          100: "#FFE4E6",
          200: "#FECDD3",
          300: "#FDA4AF",
          400: "#FB7185",
          500: "#F43F5E",
          600: "#E11D48",
          700: "#BE123C",
          800: "#9F1239",
          900: "#881337",
        },
        yellow: {
          50: "#FEFCE8",
          100: "#FEF9C3",
          200: "#FEF08A",
          300: "#FDE047",
          400: "#FACC15",
          500: "#EAB308",
          600: "#CA8A04",
          700: "#A16207",
          800: "#854D0E",
          900: "#713F12",
        },
        orange: {
          50: "#FFF7ED",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#FB923C",
          500: "#F97316",
          600: "#EA580C",
          700: "#C2410C",
          800: "#9A3412",
          900: "#7C2D12",
        },
      },
      textColor: {
        brand: {
          DEFAULT: '#6366F1',
          dark: '#A5B4FC'
        },
        'brand-hover': {
          DEFAULT: '#4338CA',
          dark: '#818CF8'
        },
        primary: {
          DEFAULT: '#111827',
          dark: '#FFFFFF'
        },
        'primary-hover': {
          DEFAULT: '#000000',
          dark: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#404040',
          dark: '#E5E5E5'
        },
        'secondary-hover': {
          DEFAULT: '#262626',
          dark: '#F5F5F5'
        },
        tertiary: {
          DEFAULT: '#525252',
          dark: '#D4D4D4'
        },
        'tertiary-hover': {
          DEFAULT: '#404040',
          dark: '#E5E5E5'
        },
        disabled: {
          DEFAULT: '#A3A3A3',
          dark: '#737373'
        },
        inverse: {
          DEFAULT: '#FFFFFF',
          dark: '#000000'
        },
        danger: {
          DEFAULT: '#F43F5E',
          dark: '#FDA4AF'
        },
        'danger-bold': {
          DEFAULT: '#BE123C',
          dark: '#FB7185'
        },
        info: {
          DEFAULT: '#6366F1',
          dark: '#C7D2FE'
        },
        'info-bold': {
          DEFAULT: '#4338CA',
          dark: '#A5B4FC'
        },
        warning: {
          DEFAULT: '#EAB308',
          dark: '#FEF08A'
        },
        'warning-bold': {
          DEFAULT: '#854D0E',
          dark: '#FACC15'
        },
        success: {
          DEFAULT: '#2DD4BF',
          dark: '#99F6E4'
        },
        'success-bold': {
          DEFAULT: '#0F766E',
          dark: '#5EEAD4'
        },
        orange: {
          DEFAULT: '#F97316',
          dark: '#FDBA74'
        },
        'orange-bold': {
          DEFAULT: '#C2410C',
          dark: '#FB923C'
        }
      },
      backgroundColor: {
        brand: {
          DEFAULT: '#6366F1',
          dark: '#A5B4FC'
        },
        'brand-hover': {
          DEFAULT: '#4338CA',
          dark: '#818CF8'
        },
        'brand-subtle': {
          DEFAULT: '#EEF2FF',
          dark: '#4F46E5'
        },
        primary: {
          DEFAULT: '#FAFAFA',
          dark: '#000000'
        },
        'primary-hover': {
          DEFAULT: '#F5F5F5',
          dark: '#262626'
        },
        secondary: {
          DEFAULT: '#2DD4BF',
          dark: '#99F6E4'
        },
        'secondary-hover': {
          DEFAULT: '#0F766E',
          dark: '#5EEAD4'
        },
        tertiary: {
          DEFAULT: '#404040',
          dark: '#FAFAFA'
        },
        'tertiary-hover': {
          DEFAULT: '#262626',
          dark: '#E5E5E5'
        },
        disabled: {
          DEFAULT: '#D4D4D4',
          dark: '#D4D4D4'
        },
        inverse: {
          DEFAULT: '#FFFFFF',
          dark: '#171717'
        },
        danger: {
          DEFAULT: '#F43F5E',
          dark: '#FDA4AF'
        },
        'danger-bold': {
          DEFAULT: '#BE123C',
          dark: '#FB7185'
        },
        'danger-subtle': {
          DEFAULT: '#FFF1F2',
          dark: '#9F1239'
        },
        info: {
          DEFAULT: '#6366F1',
          dark: '#818CF8'
        },
        'info-subtle': {
          DEFAULT: '#EEF2FF',
          dark: '#3730A3'
        },
        warning: {
          DEFAULT: '#EAB308',
          dark: '#CA8A04'
        },
        'warning-subtle': {
          DEFAULT: '#FEFCE8',
          dark: '#854D0E'
        },
        success: {
          DEFAULT: '#2DD4BF',
          dark: '#99F6E4'
        },
        'success-subtle': {
          DEFAULT: '#F0FDFA',
          dark: '#0F766E'
        },
        orange: {
          DEFAULT: '#F97316',
          dark: '#FDBA74'
        },
        'orange-subtle': {
          DEFAULT: '#FFF7ED',
          dark: '#9A3412'
        }
      },
      borderColor: {
        brand: {
          DEFAULT: '#6366F1',
          dark: '#A5B4FC'
        },
        'brand-hover': {
          DEFAULT: '#4338CA',
          dark: '#818CF8'
        },
        primary: {
          DEFAULT: '#D4D4D4',
          dark: '#404040'
        },
        'primary-hover': {
          DEFAULT: '#A3A3A3',
          dark: '#525252'
        },
        secondary: {
          DEFAULT: '#404040',
          dark: '#E5E5E5'
        },
        disabled: {
          DEFAULT: '#737373',
          dark: '#737373'
        },
        danger: {
          DEFAULT: '#F43F5E',
          dark: '#FDA4AF'
        },
        'danger-subtle': {
          DEFAULT: '#FFF1F2',
          dark: '#9F1239'
        },
        info: {
          DEFAULT: '#6366F1',
          dark: '#818CF8'
        },
        'info-subtle': {
          DEFAULT: '#EEF2FF',
          dark: '#3730A3'
        },
        warning: {
          DEFAULT: '#EAB308',
          dark: '#FEF08A'
        },
        'warning-subtle': {
          DEFAULT: '#FEFCE8',
          dark: '#854D0E'
        },
        success: {
          DEFAULT: '#2DD4BF',
          dark: '#5EEAD4'
        },
        'success-subtle': {
          DEFAULT: '#F0FDFA',
          dark: '#115E59'
        },
        orange: {
          DEFAULT: '#F97316',
          dark: '#FDBA74'
        },
        'orange-subtle': {
          DEFAULT: '#FFF7ED',
          dark: '#9A3412'
        }
      },
      borderWidth: {
        '1.5': '1.5px',
      },
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },
      fontSize: {
        'h1b': ['32px', {
          lineHeight: '140%',
          fontWeight: '700',
        }],
        'h1m': ['32px', {
          lineHeight: '140%',
          fontWeight: '500',
        }],
        'h2b': ['28px', {
          lineHeight: '140%',
          fontWeight: '700',
        }],
        'h2m': ['28px', {
          lineHeight: '140%',
          fontWeight: '500',
        }],
        'h3b': ['24px', {
          lineHeight: '140%',
          fontWeight: '700',
        }],
        'h3m': ['24px', {
          lineHeight: '140%',
          fontWeight: '500',
        }],
        'h4b': ['20px', {
          lineHeight: '140%',
          fontWeight: '700',
        }],
        'h4m': ['20px', {
          lineHeight: '140%',
          fontWeight: '500',
        }],
        'h5b': ['18px', {
          lineHeight: '140%',
          fontWeight: '700',
        }],
        'h5m': ['18px', {
          lineHeight: '140%',
          fontWeight: '500',
        }],
        'h5r': ['18px', {
          lineHeight: '140%',
          fontWeight: '400',
        }],
        'body1sb': ['16px', {
          lineHeight: '140%',
          fontWeight: '600',
        }],
        'body1m': ['16px', {
          lineHeight: '140%',
          fontWeight: '500',
        }],
        'body1r': ['16px', {
          lineHeight: '140%',
          fontWeight: '400',
        }],
        'body2sb': ['14px', {
          lineHeight: '140%',
          fontWeight: '600',
        }],
        'body2m': ['14px', {
          lineHeight: '140%',
          fontWeight: '500',
        }],
        'body2r': ['14px', {
          lineHeight: '140%',
          fontWeight: '400',
        }],
        'caption1m': ['13px', {
          lineHeight: '140%',
          fontWeight: '500',
        }],
        'caption1r': ['13px', {
          lineHeight: '140%',
          fontWeight: '400',
        }],
        'caption2m': ['11px', {
          lineHeight: '140%',
          fontWeight: '500',
        }],
        'caption2r': ['11px', {
          lineHeight: '140%',
          fontWeight: '400',
        }],
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
