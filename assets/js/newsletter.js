/*
 * https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/
 * https://answers.netlify.com/t/how-to-include-dependencies-in-netlify-lambda-functions/2323/38
*/

async function processForm(form) {

  const data = new FormData(form)
  data.append('form-name', 'newsletter');

  const email = data.get('email');
  // console.log(email)

  form.innerHTML = '<p class="form-info text-center text-md-end mb-0">Verifying your email address...</p>';

	const response = await fetch(`/.netlify/functions/validate-email?email=${email}`)

  const status = await response.text()
  const value = JSON.parse(status);
  // console.log(value.status)

  if (value.status !== 'ok') {

    form.innerHTML = '<p class="form-error text-center text-md-end mb-0">Email address verification failed.</p>';

  } else {

    fetch('/', {
      method: 'POST',
      body: data,
    })
    .then(() => {
      form.innerHTML = '<p class="form-success text-center text-md-end mb-0">Thank you for joining!</p>';
    })
    .catch(error => {
      form.innerHTML = `<p class="form-error text-center text-md-end mb-0">Oops. Something\\'s wrong: ${error}</p>`;
    })

  }

}

/*
const processForm = form => {
  const data = new FormData(form)
  data.append('form-name', 'newsletter');

  const email = data.get('email');
  console.log (email);

  fetch('/', {
    method: 'POST',
    body: data,
  })
  .then(() => {
    form.innerHTML = '<p class="form-success text-center text-md-end mb-0">Thank you for joining!</p>';
  })
  .catch(error => {
    form.innerHTML = `<p class="form-error text-center text-md-end mb-0">Oops. Something\\'s wrong: ${error}</p>`;
    // form.innerHTML = `<p class="form-error text-center text-md-end mb-0">Email address verification failed.</p>`;
  })
}
*/

const emailForm = document.querySelector('.email-form')
if (emailForm) {
  emailForm.addEventListener('submit', e => {
    e.preventDefault();
    const button = document.querySelector('#subscribeButton');
    button.setAttribute('disabled', '');
    processForm(emailForm);
  })
}
