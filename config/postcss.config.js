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
      whitelist: [
        'lazyloaded',
        'copied',
        ...whitelister([
          './assets/sass/components/_code.scss',
        ]),
      ],
    }),
  ],
}
