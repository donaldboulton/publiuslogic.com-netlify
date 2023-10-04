/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin'
import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'

export default {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
        defaultLineHeights: true,
        standardFontWeights: true,
    },
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            animation: {
                fadeIn: 'fadeIn 2s ease-in forwards',
                wiggle: 'wiggle 1s ease-in-out infinite',
                spinSlow: 'spin 3s linear infinite',
            },
            keyframes: {
                comeInOut: {
                    '0%': { transform: 'scale(0)' },
                    '50%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0)' },
                },
                spin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(180deg)' },
                },
                spinSlow: {
                    '0%, 100%': { transform: 'rotate(360deg)' },
                    '50%': { transform: 'rotate(360deg)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
            colors: {
                primary: { dark: '#0f172a', light: '#ada6a9' },
                transparent: 'transparent',
                pre: '#fcfcfc',
                code: '#fcfcfc',
                offwhite: '#fcfcfc',
                green: '#56d187',
                orange: '#ff9938',
                black: {
                    100: '#f7fafc',
                    200: '#0f172a',
                    300: '#0f172a',
                    400: '#0f172a',
                    500: '#100c09',
                    600: '#282C35',
                    700: '#1B1B1B',
                    800: '#100c08',
                    900: '#0d1014',
                },
                wine: {
                    100: '#7e002f',
                    200: '#70002a',
                    300: '#620024',
                    400: '#54001f',
                    500: '#46001a',
                    600: '#380015',
                    700: '#2a0010',
                    800: '#1c000a',
                    900: '#0e0005',
                },
                'wine-main': 'var(--wine)',
                'wine-base': 'var(--wine1)',
            },
            fill: ({ theme }) => ({
                black: theme('colors.black'),
            }),
            fontFamily: {
                sans: 'DM Sans',
                serif: 'Lora',
                inter: 'Inter',
                sacramento: 'Sacramento',
                garamond: 'EB Garamond',
            },
            p: {
                '&::before': {
                    content: 'none !important',
                },
                '&::after': {
                    content: 'none !important',
                },
            },
            typography: (theme) => {
                return {
                    DEFAULT: {
                        css: {
                            listStyleType: {
                                none: 'none',
                                square: 'square',
                                roman: 'upper-roman',
                            },
                            a: {
                                color: theme('colors.gray.200'),
                                textDecoration: null,
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            },
                            'code::before': null,
                            'code::after': null,
                            'blockquote p:first-of-type::before': null,
                            'blockquote p:last-of-type::after': null,
                        },
                    },
                }
            },
        },
    },
    plugins: [typography, forms, aspectRatio],
} satisfies Config
