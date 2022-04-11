module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss')({config: './assets/backend/tailwind.config.js'}),
        require('autoprefixer'),
        ...(process.env.NODE_ENV === 'production' ? [require('cssnano')] : [])
    ]
}