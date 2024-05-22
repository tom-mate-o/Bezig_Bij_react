// Datei: /netlify/functions/fetch-events.js
const { google } = require('googleapis');

exports.handler = async function (event, context) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URL
  );

  oauth2Client.setCredentials({
    access_token: process.env.GOOGLE_ACCESS_TOKEN,
  });

  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

  try {
    const res = await calendar.events.list({
      calendarId: 'magicnonsense.agenda@gmail.com',
    });

    return {
      statusCode: 200,
      body: JSON.stringify(res.data.items),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Error fetching events',
    };
  }
};
