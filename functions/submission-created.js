require("dotenv").config()
/*
import * as dotenv from 'dotenv'
dotenv.config()
*/

import fetch from 'node-fetch';
const { BUTTONDOWN_API_KEY } = process.env

exports.handler = async event => {
  const payload = JSON.parse(event.body).payload
  console.log(`Recieved a submission: ${payload.email}`)

  return fetch("https://api.buttondown.email/v1/subscribers", {
    method: "POST",
    headers: {
      Authorization: `Token ${BUTTONDOWN_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: payload.email, notes: payload.name }),
  })
    .then(response => response.json())
    .then(data => {
      console.log(`Submitted to Buttondown:\n ${data}`)
    })
    .catch(error => ({ statusCode: 422, body: String(error) }))

  /*
  const rawResponse = await fetch('https://api.buttondown.email/v1/subscribers', {
    method: 'post',
    headers: {
      Authorization: `Token ${BUTTONDOWN_API_KEY}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email: payload.email}),
  })
    .catch(error => ({ statusCode: 422, body: String(error) }))

    const content = await rawResponse.json();
    console.log(content)
  */

}
