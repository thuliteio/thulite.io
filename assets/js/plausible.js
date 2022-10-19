import Plausible from 'plausible-tracker'

const { trackPageview, trackEvent } = Plausible({
  domain: 'gethyas.com',
})

trackPageview()

if (document.querySelector('#subscribeButton') !== null) {
  document.getElementById('subscribeButton').addEventListener('click', function(){
    trackEvent('Signup');
  });
}
