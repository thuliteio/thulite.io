const autoprefixer = require('autoprefixer');
const { purgeCSSPlugin  } = require('@fullhuman/postcss-purgecss');
const whitelister = require('purgecss-whitelister');

module.exports = {
  plugins: [
    autoprefixer(),
    purgeCSSPlugin({
      content: [ './hugo_stats.json' ],
      extractors: [
        {
          extractor: (content) => {
            const els = JSON.parse(content).htmlElements;
            return els.tags.concat(els.classes, els.ids);
          },
          extensions: ['json'],
        },
      ],
      dynamicAttributes: [
        'aria-expanded',
        'data-bs-popper',
        'data-bs-target',
        'data-bs-theme',
        'data-dark-mode',
        'data-global-alert',
        'data-pane',             // tabs.js
        'data-popper-placement',
        'data-sizes',
        'data-toggle-tab',       // tabs.js
        'id',
        'size',
        'type',
      ],
      safelist: [
        'active',
        'disabled',
        'hidden',
        'show',
        'img-fluid',
        'blur-up',
        'lazyloaded',
        'offcanvas-backdrop',
        ...whitelister([
          './assets/scss/**/*.scss',
        ]),
      ],
    }),
  ],
}
