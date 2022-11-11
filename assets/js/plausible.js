import Plausible from 'plausible-tracker'

const { trackPageview, trackEvent } = Plausible({
  domain: 'gethyas.com',
})

trackPageview()

/*
window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }
*/

if (document.querySelector('#subscribeButton') !== null) {
  const button = document.getElementById('subscribeButton');
  const page = button.getAttribute('data-title');

  button.addEventListener('click', function(){
    trackEvent('Signup', { props: { Page: `${page}` } });
  });
}

/*
let buttons = document.querySelectorAll('button[data-analytics]');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleFormEvent);
  buttons[i].addEventListener('auxclick', handleFormEvent);
}

function handleFormEvent(event) {
  event.preventDefault();
  let attributes = event.target.getAttribute('data-analytics').split(/,(.+)/);
  let events = [JSON.parse(attributes[0]), JSON.parse(attributes[1] || '{}')];
  plausible(...events);
  setTimeout(function () {
    event.target.form.submit();
  }, 150);
}
*/
