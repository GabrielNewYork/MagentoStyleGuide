const path = require("path");

const dotenv = require('dotenv').config({
    path: path.join(__dirname, '.env')
});

const {MAGENTO_PATH} = dotenv.parsed;

module.exports = {
    mode: 'jit',
    purge: {
        content: [
            './src/components/**/*.html',
            './src/components/**/*.vue',
            // Path to magento project
            `${MAGENTO_PATH}/app/**/*.phtml`,
            `${MAGENTO_PATH}/app/**/*.html`,
            `${MAGENTO_PATH}/app/**/*.js`,
            `${MAGENTO_PATH}/docs/**/*.phtml`,
            `${MAGENTO_PATH}/docs/**/*.html`,
            `${MAGENTO_PATH}/docs/**/*.js`,
        ],
        // These options are passed through directly to PurgeCSS
        options: {
            safelist: ['container'],
            blocklist: [/^mdl-/, 'page-content', 'sidebar', 'search-area'],
            // keyframes: true,
            // fontFace: true,
        },
    },
    prefix: 'tw-',
    theme: {
        zIndex: {
            '0': 0,
            '10': 10,
            '20': 20,
            '25': 25,
            '30': 30,
            '40': 40,
            '50': 50,
            '75': 75,
            '100': 100,
            'auto': 'auto',
        },
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1.25rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        fontFamily: {
            'sans': ['Nunito Sans'],
            'serif': ['Georgia', 'Cambria'],
            'mono': ['SFMono-Regular', 'Menlo'],
            "lora": ['Lora']
        },
        extend: {
            height: {
                '300px': '300px',
                '400px': '400px'
            },
            backgroundOpacity: {
                '05': '0.05',
            },
            colors: {
                scarlet: {
                    '50': '#fcf8f6',
                    '100': '#fceeee',
                    '200': '#fbd2dc',
                    '300': '#faacbd',
                    '400': '#fa778b',
                    '500': '#fb4c5e',
                    '600': '#e61e19',
                    'hover': '#e61e19',
                    'default': '#e61e19',
                    DEFAULT: '#e61e19',
                    '700': '#db2338',
                    '800': '#b11d31',
                    '900': '#8e1929',
                },


                'red-darkest': '#8A120F',
                'red-dark': '#B81814',
                'red-base': '#E61E19',
                'red-light': '#F07875',
                'red-lightest': '#FAD2D1',
                'gray-darkest': '#575965', // brand-secondary-darkest
                'gray-dark': '#6F7181',
                'gray-base': '#898B99',
                'gray-light': '#C0C1C9',
                'gray-lightest': '#DBDDE0',
                'base': '#000000',
                'dark01': '#292929',
                'dark02': '#525252',
                'dark03': '#7A7A7A',
                'gray-theme-hero': '#CACACA',
                'gray-theme-light': '#F4F4F4',

                'brand-primary': {
                    DEFAULT: '#E61E19',
                    default: '#E61E19',
                    'base': '#E61E19',
                    'lightest': '#FAD2D1',
                    '50': '#FDE8E8',
                    '100': '#FAD2D1',
                    '200': '#F5A5A3',
                    '300': '#F07875',
                    '400': '#EB4B47',
                    '500': '#E61E19',
                    '600': '#B81814',
                    '700': '#8A120F',
                    '800': '#5C0C0A',
                    '900': '#2E0605'
                },
                'brand-secondary': {
                    DEFAULT: '#898B99',
                    default: '#898B99',
                    'base': '#898B99',
                    'light': '#DBDCE0',
                    'lightest': '#EFEFF1',
                    'darkest': '#575965'
                },
                'brand-dark': {
                    DEFAULT: '#382E2C',
                    default: '#382E2C',
                    'base': '#382E2C'
                },
                'neutral-light': {
                    DEFAULT: '#FFFFFF',
                    default: '#FFFFFF',
                    'base': '#FFFFFF',
                    '1': '#F4F4F4',
                    '2': '#E0E0E0',
                    '3': '#D1D1D1'
                },
                'neutral-dark': {
                    '1': '#E0E0E0',
                    '2': '#525252',
                    '3': '#7A7A7A',
                }
            },
        },
        fontSize: {
            'xs': '0.750rem', // -0.150
            'small': '0.900rem', // -0.1
            'sm': '1rem', // - 0.275
            'tiny': '1.275rem', // - 0.125
            'rg': '1.3rem',
            'base': '1.4rem', // 1.4
            'slg': '1.4rem',
            'lg': '1.525rem', // + .125
            'xl': '1.650rem', // + .125
            '2xl': '1.900rem', // + .250
            '3xl': '2.275rem', // + .375
            '4xl': '2.650rem', // + .375
            '5xl': '3.400rem', // + .750
            '6xl': '4.150rem', // + 1.0
            '7xl': '5.150rem', // + 1.0
        }
    },
    variants: {
        borderColor: ['hover'],
        borderWidth: ['last'],
        textColor: ['group-hover', 'hover'],
        animation: ['hover', 'focus'],
    },
    plugins: [],
}