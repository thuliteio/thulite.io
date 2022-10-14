import fetch from 'node-fetch'

const { EMAILOCTOPUS_LIST_ID, EMAILOCTOPUS_API_KEY } = process.env;

exports.handler = async (event) => {

  const body = JSON.parse(event.body);
  const { email, page } = body.payload.data;

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

  return {
    statusCode: response.status,
    body: responseText,
  };

};
