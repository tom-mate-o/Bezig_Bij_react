// Datei: /netlify/functions/auth-callback.js
const { google } = require('googleapis');

exports.handler = async function (event, context) {
  const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URL
  );

  const code = event.queryStringParameters.code;

  try {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Hier können Sie das Zugriffstoken speichern, z.B. in einer Datenbank oder in einer Datei.
    // Beachten Sie, dass Sie das Zugriffstoken sicher speichern müssen, da es sensible Informationen enthält.

    return {
      statusCode: 200,
      body: 'Authentifizierung erfolgreich. Sie können nun zur Anwendung zurückkehren.',
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: 'Fehler bei der Authentifizierung.',
    };
  }
};
