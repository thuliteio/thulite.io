import docsearch from '@docsearch/js';

var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}

docsearch({
  container: '#docsearch',
  // appId: 'KMWY81ZWS3',
  indexName: 'gethyas',
  apiKey: 'cdca78e5ea45edfe483b1090b8c4bbb8',
  debug: false,
});


/*
var docsearch = document.getElementById('docsearch');

if (docsearch !== null) {
  document.addEventListener('click', buttonBlur);
}

function buttonBlur() {
  docsearch.firstElementChild.blur();
}
*/
