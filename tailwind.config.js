const magentoPath = '/Users/leo/Projetos/SmartAgeSolutions/Gabriel.co/Magento/';
module.exports = {
    purge: {
        content: [
            './src/components/**/*.html',
            './src/components/**/*.vue',
            // Path to magento project
            `${magentoPath}/app/**/*.phtml`,
            `${magentoPath}/app/**/*.html`,
            `${magentoPath}/app/**/*.js`,
            `${magentoPath}/docs/**/*.phtml`,
            `${magentoPath}/docs/**/*.html`,
            `${magentoPath}/docs/**/*.js`,
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
                    '700': '#db2338',
                    '800': '#b11d31',
                    '900': '#8e1929',
                },


                'red-darkest': '#8A120F',
                'red-dark': '#B81814',
                'red-base': '#E61E19',
                'red-light': '#F07875',
                'red-lightest': '#FAD2D1',
                'gray-darkest': '#575965',
                'gray-dark': '#6F7181',
                'gray-base': '#898B99',
                'gray-light': '#C0C1C9',
                'gray-lightest': '#DBDDE0',
                'base': '#000000',
                'dark01': '#292929',
                'dark02': '#525252',
                'dark03': '#7A7A7A',
                'gray-theme-hero': '#CACACA',
                'gray-theme-light': '#F4F4F4'
            },
        },
        fontSize: {
            'xs': '0.750rem', // -0.150
            'small': '0.900rem', // -0.1
            'sm': '1rem', // - 0.275
            'tiny': '1.275rem', // - 0.125 
            'base': '1.4rem', // 1.4
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
        borderWidth: ['last'],
    },
    plugins: [],
}