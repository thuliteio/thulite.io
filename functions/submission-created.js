// Source: https://andrewstiefel.com/netlify-functions-email-subscription/

const { BUTTONDOWN_API_KEY } = process.env
import fetch from 'node-fetch'

/*
import * as dotenv from 'dotenv'
dotenv.config()
*/

exports.handler = async (event) => {

  // const email = event.queryStringParameters.email || 'No email';
  const email = JSON.parse(event.body).payload.email || 'No email';
  console.log(`Received a submission: ${email}`)

  const response = await fetch( 'https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        Authorization: `Token ${BUTTONDOWN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  );

  let responseText = await response.text();
  console.log('Response:', responseText);

  /*
  return {
    statusCode: 302,
    headers: {
        'Location': '/confirmation/',
    },
  }
  */

};
