import fetch from 'node-fetch'

const { EMAILLISTVERIFY_API_KEY } = process.env;
const API_ENDPOINT = 'https://apps.emaillistverify.com/api/verifyEmail';

exports.handler = async (event) => {
  const email = event.queryStringParameters.email

  return fetch(`${{API_ENDPOINT}}?secret=${EMAILLISTVERIFY_API_KEY}&email=${email}&timeout=30`, { headers: { 'Accept': '*/*' } })
    .then((response) => response())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 422, body: String(error) }));
};
