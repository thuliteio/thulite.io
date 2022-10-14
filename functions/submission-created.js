// Source: https://andrewstiefel.com/netlify-functions-email-subscription/

const {EMAILOCTOPUS_LIST_ID, EMAILOCTOPUS_API_KEY} = process.env;
import fetch from 'node-fetch'

/*
import * as dotenv from 'dotenv'
dotenv.config()
*/

exports.handler = async (event) => {

  // const email = event.queryStringParameters.email || 'No email';
  const payload = JSON.parse(event.body).payload
  const email = payload.email
  const page = 'https://deploy-preview-244--gethyas.netlify.app/blog/how-to-deploy-to-github-pages/'

  console.log(`Received a submission: ${email}`)
  const response = await fetch( `https://emailoctopus.com/api/1.6/lists/${EMAILOCTOPUS_LIST_ID}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: EMAILOCTOPUS_API_KEY,
        email_address: email,
        fields: {
          'Page': `${page}`,
        },
      }),
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
