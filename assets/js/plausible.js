import Plausible from 'plausible-tracker'

const { trackPageview, trackEvent } = Plausible({
  domain: 'gethyas.com',
})

trackPageview()

/*
if (document.querySelector('#subscribeButton') !== null) {
  document.getElementById('subscribeButton').addEventListener('click', function(){
    trackEvent('Signup');
  });
}
*/

if (document.querySelector('#subscribeButton') !== null) {
  const button = document.getElementById('subscribeButton');
  const page = button.getAttribute('data-page');

  button.addEventListener('click', function(){
    trackEvent('Signup', { props: { Page: `${page}`} });
  });
}
