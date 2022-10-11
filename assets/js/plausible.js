import Plausible from 'plausible-tracker'

const { trackPageview } = Plausible({
  domain: 'gethyas.com',
})

trackPageview()

/*
* Remove when going to production
* Source: https://plausible.io/docs/excluding-localstorage
*/

if (document.querySelector('#plausible_button') !== null) {
window.addEventListener('load', function () {
  var exclusionState = window.localStorage.plausible_ignore == 'true'

  if (exclusionState) {
    document.getElementById('plausible_not').style.display = 'none'
    document.getElementById('plausible_yes').style.display = 'inline'
    document.getElementById('plausible_button').innerHTML = 'Stop excluding my visits'
  } else {
    document.getElementById('plausible_yes').style.display = 'none'
    document.getElementById('plausible_not').style.display = 'inline'
    document.getElementById('plausible_button').innerHTML = 'Exclude my visits'
  }
});

document.getElementById('plausible_button').addEventListener('click', function(){
  var exclusionState = window.localStorage.plausible_ignore == 'true'

  if (exclusionState) {
    delete window.localStorage.plausible_ignore
    document.getElementById('plausible_yes').style.display = 'none'
    document.getElementById('plausible_not').style.display = 'inline'
    document.getElementById('plausible_button').innerHTML = 'Exclude my visits'
  } else {
    window.localStorage.plausible_ignore = 'true'
    document.getElementById('plausible_not').style.display = 'none'
    document.getElementById('plausible_yes').style.display = 'inline'
    document.getElementById('plausible_button').innerHTML = 'Stop excluding my visits'
  }
});
}
