module.exports = {
    darkMode: 'class',
    variants: {
        extend: {
          backgroundColor: ['dark'],
          textColor: ['dark']
        },
    },
    theme: {
        darkSelector: '.dark-mode',
      },
    variants: {
        backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd', 'hover', 'responsive'],
        borderColor: ['dark', 'dark-focus', 'dark-focus-within', 'hover', 'responsive'],
        textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
    },
    plugins: [
        require('tailwindcss-dark-mode')(),
        require(`@tailwindcss/typography`)
    ]
}