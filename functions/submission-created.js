// Source: https://leighdinaya.com/blog/create-newsletter-sign-up-buttondown-netlify-functions/

require('dotenv').config()
const fetch = require('node-fetch')
const { BUTTONDOWN_API_KEY } = process.env

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  const errorGen = (msg) => {
    return { statusCode: 500, body: msg }
  }

  try {
    const { email } = JSON.parse(event.body)

    if (!email) {
      return errorGen('Missing Email')
    }

    const subscriber = {
      email,
    }

    const response = await fetch(
      'https://api.buttondown.email/v1/subscribers',
      {
        method: 'POST',
        headers: {
          Authorization: `Token ${BUTTONDOWN_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscriber),
      }
    )

    const data = await response.json()
    if (!response.ok) {
      return { statusCode: data.status, body: data.detail }
    }
    return {
      statusCode: 200,
      body: JSON.stringify({
        msg: 'You\'ve signed up to the mailing list!',
        detail: data,
      }),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }),
    }
  }
}
