/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                surface: "#121212",
                primary: "#ef4444", // Red-500
                accent: "#f97316", // Orange-500
                text: "#e5e5e5",
                muted: "#a3a3a3",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                'spin-slow': 'spin 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                }
            }
        },
    },
    plugins: [],
}
