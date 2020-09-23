const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './layouts/**/*.html',
        './content/**/*.md',      
      ],
      whitelistPatterns: [/^algolia-/],
      whitelist: [
        'lazyloaded',
        ...whitelister([
          './assets/scss/layouts/_header.scss',
          './assets/scss/components/_code.scss',
          './assets/scss/common/_dark.scss',
        ]),
      ],
    }),
  ],
}
