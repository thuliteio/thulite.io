import fetch from 'node-fetch'

const { EMAILLISTVERIFY_API_KEY } = process.env;

exports.handler = async (event) => {

  const email = event.queryStringParameters.email
  console.log(`Submission: ${email}`)

  let headersList = {
    'Accept': '*/*',
    }

  let response = await fetch(`https://apps.emaillistverify.com/api/verifyEmail?secret=${EMAILLISTVERIFY_API_KEY}&email=${email}&timeout=30`, {
    method: 'GET',
    headers: headersList,
  });

  let data = await response.text();
  console.log('Response:', data);

  return {
    statusCode: response.status,
    body: data,
  };
};