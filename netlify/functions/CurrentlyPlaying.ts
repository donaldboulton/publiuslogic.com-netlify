const NetlifyGraph = require('./netlifyGraph')

exports.handler = async event => {
  const accessToken = event.authlifyToken

  const eventBodyJson = JSON.parse(event.body || '{}')

  const { errors: CurrentlyPlayingErrors, data: CurrentlyPlayingData } = await NetlifyGraph.fetchCurrentlyPlaying(
    {},
    { accessToken: accessToken }
  )

  if (CurrentlyPlayingErrors) {
    console.error(JSON.stringify(CurrentlyPlayingErrors, null, 2))
  }

  console.log(JSON.stringify(CurrentlyPlayingData, null, 2))

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      CurrentlyPlayingErrors: CurrentlyPlayingErrors,
      CurrentlyPlayingData: CurrentlyPlayingData,
    }),
    headers: {
      'content-type': 'application/json',
    },
  }
}

/**
 * Client-side invocations:
 * Call your Netlify function from the browser (after saving
 * the code to `CurrentlyPlaying.js`) with these helpers:
 */

/**
async function fetchCurrentlyPlaying(netlifyGraphAuth, params) {
  const {} = params || {};
  const resp = await fetch(`/.netlify/functions/CurrentlyPlaying`,
    {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        ...netlifyGraphAuth?.authHeaders()
      }
    });

    const text = await resp.text();

    return JSON.parse(text);
}
*/
