/*
 * https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget/
 * https://answers.netlify.com/t/how-to-include-dependencies-in-netlify-lambda-functions/2323/38
*/

const processForm = form => {
  const data = new FormData(form)
  data.append('form-name', 'newsletter');

  const email = data.get('email');
  console.log (email);
  validateForm()

  /*
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
  */
}

async function validateForm(email) {
  const url = `/functions/validate-email?email=${email}`;
  try {
    const response = await fetch(url);
    const data = await response;
    console.log(data);
    return data;
  }
  catch (err) {
    console.log(err);
  }
}

const emailForm = document.querySelector('.email-form')
if (emailForm) {
  emailForm.addEventListener('submit', e => {
    e.preventDefault();
    processForm(emailForm);
  })
}
