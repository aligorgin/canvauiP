module.exports = {
    // mode:'jit',
    purge: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            'ssm': '600px',
            'sm': '640px',
            'md': '768px',
            'htm': '898px',
            'gglg': '906px',
            'glg': '996px',
            'lg': '1024px',
            'lgg': '1100px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
    plugins: [],
}
