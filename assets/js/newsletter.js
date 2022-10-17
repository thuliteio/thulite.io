/*
 * https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/
 * https://answers.netlify.com/t/how-to-include-dependencies-in-netlify-lambda-functions/2323/38
*/

const processForm = form => {
  const data = new FormData(form)
  data.append('form-name', 'newsletter');
  fetch('/', {
    method: 'POST',
    body: data,
  })
  .then(() => {
    form.innerHTML = '<p class="form--success my-0">Thank you for joining!</p>';
  })
  .catch(error => {
    form.innerHTML = `<p class="form--error my-0">Oops. Something\\'s wrong: ${error}</p>`;
  })
}

const emailForm = document.querySelector('.email-form')
if (emailForm) {
  emailForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm(emailForm);
  })
}
