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
        // Brand
        'brand-icon': {
          DEFAULT: '#6366F1',
          dark: '#A5B4FC'
        },
        'brand-icon-hover': {
          DEFAULT: '#4338CA',
          dark: '#818CF8'
        },
        'brand-text': {
          DEFAULT: '#6366F1',
          dark: '#A5B4FC'
        },
        'brand-text-hover': {
          DEFAULT: '#4338CA',
          dark: '#818CF8'
        },
        'brand-bg': {
          DEFAULT: '#6366F1',
          dark: '#A5B4FC'
        },
        'brand-bg-hover': {
          DEFAULT: '#4338CA',
          dark: '#818CF8'
        },
        'brand-bg-subtle': {
          DEFAULT: '#EEF2FF',
          dark: '#4F46E5'
        },
        // Primary
        'primary-icon': {
          DEFAULT: '#171717',
          dark: '#FFFFFF'
        },
        'primary-icon-hover': {
          DEFAULT: '#000000',
          dark: '#FFFFFF'
        },
        'primary-text': {
          DEFAULT: '#111827',
          dark: '#FFFFFF'
        },
        'primary-text-hover': {
          DEFAULT: '#000000',
          dark: '#FFFFFF'
        },
        'primary-bg': {
          DEFAULT: '#FAFAFA',
          dark: '#000000'
        },
        'primary-bg-hover': {
          DEFAULT: '#F5F5F5',
          dark: '#262626'
        },
        'primary-border': {
          DEFAULT: '#D4D4D4',
          dark: '#404040'
        },
        'primary-border-hover': {
          DEFAULT: '#A3A3A3',
          dark: '#525252'
        },
        // Secondary
        'secondary-icon': {
          DEFAULT: '#404040',
          dark: '#E5E5E5'
        },
        'secondary-icon-hover': {
          DEFAULT: '#262626',
          dark: '#F5F5F5'
        },
        'secondary-text': {
          DEFAULT: '#404040',
          dark: '#E5E5E5'
        },
        'secondary-text-hover': {
          DEFAULT: '#262626',
          dark: '#F5F5F5'
        },
        'secondary-bg': {
          DEFAULT: '#2DD4BF',
          dark: '#99F6E4'
        },
        'secondary-bg-hover': {
          DEFAULT: '#0F766E',
          dark: '#5EEAD4'
        },
        'secondary-border': {
          DEFAULT: '#404040',
          dark: '#E5E5E5'
        },
        // Tertiary
        'tertiary-text': {
          DEFAULT: '#525252',
          dark: '#D4D4D4'
        },
        'tertiary-text-hover': {
          DEFAULT: '#404040',
          dark: '#E5E5E5'
        },
        'tertiary-bg': {
          DEFAULT: '#404040',
          dark: '#FAFAFA'
        },
        'tertiary-bg-hover': {
          DEFAULT: '#262626',
          dark: '#E5E5E5'
        },
        // Disabled
        'disabled-text': {
          DEFAULT: '#A3A3A3',
          dark: '#737373'
        },
        'disabled-bg': {
          DEFAULT: '#D4D4D4',
          dark: '#D4D4D4'
        },
        'disabled-border': {
          DEFAULT: '#737373',
          dark: '#737373'
        },
        // Inverse
        'inverse-text': {
          DEFAULT: '#FFFFFF',
          dark: '#000000'
        },
        'inverse-bg': {
          DEFAULT: '#FFFFFF',
          dark: '#171717'
        },
        // Danger
        'danger-icon': {
          DEFAULT: '#F43F5E',
          dark: '#FDA4AF'
        },
        'danger-icon-bold': {
          DEFAULT: '#BE123C',
          dark: '#FB7185'
        },
        'danger-text': {
          DEFAULT: '#F43F5E',
          dark: '#FDA4AF'
        },
        'danger-text-bold': {
          DEFAULT: '#BE123C',
          dark: '#FB7185'
        },
        'danger-bg': {
          DEFAULT: '#F43F5E',
          dark: '#FDA4AF'
        },
        'danger-bg-bold': {
          DEFAULT: '#BE123C',
          dark: '#FB7185'
        },
        'danger-bg-subtle': {
          DEFAULT: '#FFF1F2',
          dark: '#9F1239'
        },
        'danger-border': {
          DEFAULT: '#F43F5E',
          dark: '#FDA4AF'
        },
        'danger-border-subtle': {
          DEFAULT: '#FFF1F2',
          dark: '#9F1239'
        },
        // Info
        'info-icon': {
          DEFAULT: '#6366F1',
          dark: '#C7D2FE'
        },
        'info-icon-bold': {
          DEFAULT: '#4338CA',
          dark: '#A5B4FC'
        },
        'info-text': {
          DEFAULT: '#6366F1',
          dark: '#C7D2FE'
        },
        'info-text-bold': {
          DEFAULT: '#4338CA',
          dark: '#A5B4FC'
        },
        'info-bg': {
          DEFAULT: '#6366F1',
          dark: '#818CF8'
        },
        'info-bg-subtle': {
          DEFAULT: '#EEF2FF',
          dark: '#3730A3'
        },
        'info-border': {
          DEFAULT: '#6366F1',
          dark: '#818CF8'
        },
        'info-border-subtle': {
          DEFAULT: '#EEF2FF',
          dark: '#3730A3'
        },
        // Warning
        'warning-icon': {
          DEFAULT: '#EAB308',
          dark: '#FEF08A'
        },
        'warning-icon-bold': {
          DEFAULT: '#854D0E',
          dark: '#FACC15'
        },
        'warning-text': {
          DEFAULT: '#EAB308',
          dark: '#FEF08A'
        },
        'warning-text-bold': {
          DEFAULT: '#854D0E',
          dark: '#FACC15'
        },
        'warning-bg': {
          DEFAULT: '#EAB308',
          dark: '#CA8A04'
        },
        'warning-bg-subtle': {
          DEFAULT: '#FEFCE8',
          dark: '#854D0E'
        },
        'warning-border': {
          DEFAULT: '#EAB308',
          dark: '#FEF08A'
        },
        'warning-border-subtle': {
          DEFAULT: '#FEFCE8',
          dark: '#854D0E'
        },
        // Success
        'success-icon': {
          DEFAULT: '#2DD4BF',
          dark: '#99F6E4'
        },
        'success-icon-bold': {
          DEFAULT: '#0F766E',
          dark: '#5EEAD4'
        },
        'success-text': {
          DEFAULT: '#2DD4BF',
          dark: '#99F6E4'
        },
        'success-text-bold': {
          DEFAULT: '#0F766E',
          dark: '#5EEAD4'
        },
        'success-bg': {
          DEFAULT: '#2DD4BF',
          dark: '#99F6E4'
        },
        'success-bg-subtle': {
          DEFAULT: '#F0FDFA',
          dark: '#0F766E'
        },
        'success-border': {
          DEFAULT: '#2DD4BF',
          dark: '#5EEAD4'
        },
        'success-border-subtle': {
          DEFAULT: '#F0FDFA',
          dark: '#115E59'
        },
        // Orange
        'orange-icon': {
          DEFAULT: '#F97316',
          dark: '#FDBA74'
        },
        'orange-icon-bold': {
          DEFAULT: '#C2410C',
          dark: '#FB923C'
        },
        'orange-text': {
          DEFAULT: '#F97316',
          dark: '#FDBA74'
        },
        'orange-text-bold': {
          DEFAULT: '#C2410C',
          dark: '#FB923C'
        },
        'orange-bg': {
          DEFAULT: '#F97316',
          dark: '#FDBA74'
        },
        'orange-bg-subtle': {
          DEFAULT: '#FFF7ED',
          dark: '#9A3412'
        },
        'orange-border': {
          DEFAULT: '#F97316',
          dark: '#FDBA74'
        },
        'orange-border-subtle': {
          DEFAULT: '#FFF7ED',
          dark: '#9A3412'
        },
        // Original color scales
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
