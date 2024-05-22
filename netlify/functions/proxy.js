// proxy.js
// pfad: netlify/functions/proxy.js

const axios = require('axios');

exports.handler = async function (event, context) {
  const url = event.queryStringParameters.url;

  if (!url) {
    return {
      statusCode: 400,
      body: 'Missing URL parameter',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }

  try {
    const response = await axios.get(url, { responseType: 'text' });
    return {
      statusCode: 200,
      body: response.data,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/calendar',
      },
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: 'Error fetching data',
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
};
