document.getElementById('mode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

/* eslint-disable */
window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }

if (document.querySelector('#deploy-to-netlify') !== null) {
  document.getElementById('deploy-to-netlify').addEventListener('click', function(){
    plausible('Deploy to Netlify');
  });
}
/* eslint-enable */
