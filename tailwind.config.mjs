/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Urbanist', ...defaultTheme.fontFamily.sans],
                serif: [
                    'EB Garamond Variable',
                    ...defaultTheme.fontFamily.serif,
                ],
            },
            colors: {
                'off-black': '#343434',
                'off-white': '#fafafa',
                'light-grey': '#d2d2d2',
                'card-bg': 'var(--card-bg)',
            },
        },
    },
    plugins: [],
}
