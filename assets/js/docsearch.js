import docsearch from '@docsearch/js';

/*
var searchPlaceholder = document.getElementById('search-placeholder');

if (searchPlaceholder !== null) {
  searchPlaceholder.className = 'd-none';
}
*/

document.getElementById('toggleSearchMobile').addEventListener('click', function() {
  document.getElementsByClassName('DocSearch-Button')[0].click()
})

document.getElementById('toggleSearchDesktop').addEventListener('click', function() {
  document.getElementsByClassName('DocSearch-Button')[0].click()
})

docsearch({
  container: '#docsearch',
  appId: 'AHKXAT87MO',
  indexName: 'gethyas',
  apiKey: 'd65493e261fd5f638b12512bc3dfcd7f',
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
