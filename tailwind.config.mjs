/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Urbanist', ...defaultTheme.fontFamily.sans],
                serif: ['Arial', 'Helvetica', 'sans-serif'],
            },
            fontSize: {
                'serif-base': ['16px', '26px'],
            },
            colors: {
                'off-black': 'var(--bg-color-muted, #343434)',
                'off-white': 'var(--text-default, #fafafa)',
                'card-bg': 'var(--card-bg, #282828)',
                'bg-color-default': 'var(--bg-color-default, #181818)',
                'text-default': 'var(--text-default, #fafafa)',
                'text-muted': 'var(--text-muted, #c5c5c5)',
                'border-muted': 'var(--border-muted, #4b4b4b)',
                'border-default': 'var(--border-default, #616161)',
                'switch-bg': 'var(--switch-bg, #333333)',
                'icon-color': 'var(--icon-color, #afafaf)',
                'scroll-bar-bg': 'var(--scroll-bar-bg, #1f1f1f)',
                'scroll-bar-thumb': 'var(--scroll-bar-thumb, #343434)',
                'loader-color': 'var(--loader-color, #ececec)',
                'inset-shadow-color': 'var(--inset-shadow-color, #3b3b3b)',
                'shadow-color': 'var(--shadow-color, rgba(255, 255, 255, 0.1))',
                'btn-bg': 'var(--btn-bg, #e5e5e5)',
                'accent-color': 'var(--accent-color, #d5206f)',
                'accent-color-hover': 'var(--accent-color-hover, #d5206f80)',
                'accent-color-active': 'var(--accent-color-active, #d5206f40)',
            },
        },
    },
    plugins: [],
}
