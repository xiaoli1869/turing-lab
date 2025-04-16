/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0f172a',  // 深蓝黑色
          DEFAULT: '#1e293b', // 深蓝灰色
          light: '#334155',  // 较浅蓝灰色
        },
        secondary: {
          dark: '#4338ca',  // 深紫色
          DEFAULT: '#6366f1', // 紫色
          light: '#818cf8',  // 浅紫色
        },
        accent: {
          DEFAULT: '#10b981', // 绿色
          red: '#ef4444',   // 红色
          yellow: '#f59e0b', // 黄色
        },
        background: {
          dark: '#0f172a',  // 深色背景
          DEFAULT: '#1e293b', // 默认背景
          light: '#f8fafc',  // 浅色背景
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1.5s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      },
    },
  },
  plugins: [],
} 