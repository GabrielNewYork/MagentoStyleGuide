module.exports = {
    prefix: 'tw-',
    theme: {
        fontFamily: {
            'sans': ['Nunito Sans'],
            'serif': ['Georgia', 'Cambria'],
            'mono': ['SFMono-Regular', 'Menlo'],
        },
        extend: {
            backgroundOpacity: {
                '05': '0.05',
            },
            colors: {
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

    },
    plugins: [],
}