const fetchSpotifyPlayer = async () => {
  const URL = '/.netlify/functions/CurrentlyPlaying'
  const OPTIONS = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }
  const response = await fetch(URL, OPTIONS)
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data: CurrentlyPlayingAPI = await response.json()
  return data
}
