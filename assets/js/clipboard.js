import Clipboard from 'clipboard';

var cb = document.getElementsByClassName('clipboard');

for (var i = 0; i < cb.length; ++ i)
{
  var element = cb[i];
  element.insertAdjacentHTML('afterbegin', '<button class="btn btn-clipboard"></button>');
}

var clipboard = new Clipboard('.btn-clipboard', {

  target: function(trigger) {
    return trigger.parentNode.nextElementSibling;
  },

});

clipboard.on('success', function(e) {

    /*
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    */

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
