const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgecss({
      content: [
        './node_modules/@hyas/core/layouts/**/*.html',
        './node_modules/@hyas/seo/layouts/**/*.html',
        './node_modules/@hyas/images/layouts/**/*.html',
        './layouts/**/*.html',
        './content/**/*.md',
      ],
      safelist: [
        'lazyloaded',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'h3',
        'alert-light',
        'btn-clipboard',
        'offcanvas-backdrop',
        'figcaption',
        'toggle-menu',
        'form-success',
        'form-error',
        'cls-1',
        'cls-2',
        ...whitelister([
          './node_modules/highlight.js/scss/github.scss',
          './node_modules/@docsearch/css/dist/modal.css',
          './assets/scss/components/_alerts.scss',
          './assets/scss/components/_code.scss',
          './assets/scss/components/_modal.scss',
        ]),
      ],
    }),
  ],
}
