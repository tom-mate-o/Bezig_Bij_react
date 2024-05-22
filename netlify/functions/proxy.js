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
    console.error(error.message);
    return {
      statusCode: 200,
      body: `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//hacksw/handcal//NONSGML v1.0//EN\nBEGIN:VEVENT\nUID:uid1@example.com\nDTSTAMP:19970714T170000Z\nORGANIZER;CN=John Doe:MAILTO:john.doe@example.com\nDTSTART:19970714T170000Z\nDTEND:19970715T035959Z\nSUMMARY:Bastille Day Party\nEND:VEVENT\nEND:VCALENDAR\nERROR:${error.message}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/calendar',
      },
    };
  }
};
