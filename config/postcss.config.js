import autoprefixer from 'autoprefixer';
import purgeCSSPlugin from '@fullhuman/postcss-purgecss';

const purgecss = purgeCSSPlugin({
    content: ['./hugo_stats.json'],
    defaultExtractor: (content) => {
        const els = JSON.parse(content).htmlElements;
        return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
    },
    dynamicAttributes: [
        'aria-expanded',
        'aria-label',
        'aria-current',
        'data-bs-popper',
        'data-bs-target',
        'data-bs-theme',
        'data-dark-mode',
        'data-global-alert',
        'data-pane', // tabs.js
        'data-popper-placement',
        'data-sizes',
        'data-toggle-tab', // tabs.js
        'id',
        'size',
        'type',
    ],
    safelist: [
        'mark',
        'active',
        'btn-clipboard', // clipboards.js
        'clipboard', // clipboards.js
        'd-none', // search.js toggles visibility on modal body
        'disabled',
        'hidden',
        'code-block', // copy-code.js wrapper around pre
        'code-copy-button', // copy-code.js injected button
        'is-active', // search.js keyboard navigation
        'modal-backdrop', // search-modal.js
        'selected', // search-modal.js
        'show',
        'img-fluid',
        'blur-up',
        'lazyload',
        'lazyloaded',
        'alert-link',
        'container-fw ',
        'container-lg',
        'container-fluid',
        'site-header',
        'offcanvas-backdrop',
        'figcaption',
        'dt',
        'dd',
        'showing',
        'hiding',
        'page-item',
        'page-link',
        'not-content',
        'copy',
        'btn-copy',
        'medium-zoom-overlay',
        'medium-zoom-image--opened',
        /^search-/, // search.js injects search-* classes at runtime
    ],
});

export default {
    plugins: [autoprefixer(), ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])],
};
