'use strict';

import mediumZoom from 'medium-zoom';

function initArticleImageZoom() {
    const selector = '.page-content img.img-zoom';

    if (!document.querySelector(selector)) return;

    mediumZoom(selector, {
        margin: 24,
        background: 'rgba(0, 0, 0, 0.88)',
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initArticleImageZoom, { once: true });
} else {
    initArticleImageZoom();
}
