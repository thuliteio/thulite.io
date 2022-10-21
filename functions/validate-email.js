import fetch from 'node-fetch'

const { EMAILLISTVERIFY_API_KEY } = process.env;

exports.handler = async (event) => {

  if (event.headers.referer.includes('netlify.app')) {

    const EMAIL = event.queryStringParameters.email

    if (EMAIL) {
      console.log(`Submission: ${EMAIL}`)

      const EMAILLISTVERIFY_API = `https://apps.emaillistverify.com/api/verifyEmail?secret=${EMAILLISTVERIFY_API_KEY}&email=${EMAIL}&timeout=30`

      const response = await fetch(EMAILLISTVERIFY_API)
      const status = await response.text()
      console.log('Response:', status);

      return {
        statusCode: 200,
        body: JSON.stringify({
          status,
        }),
      }

    } else {

      return {
        statusCode: 403,
        body: JSON.stringify({
          'status' : 403,
          'message' : 'Forbidden',
        }),
      };

    }

  } else {

    return {
      statusCode: 403,
      body: JSON.stringify({
        'status' : 403,
        'message' : 'Forbidden',
      }),
    };

  }

};
