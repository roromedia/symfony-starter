module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss')({config: './assets/frontend/tailwind.config.js'}),
        require('autoprefixer'),
        ...(process.env.NODE_ENV === 'production' ? [require('cssnano')] : [])
    ]
}