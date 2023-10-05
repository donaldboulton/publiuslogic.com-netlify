const getURL = () => {
  let url = process?.env?.SITE_URL ?? 'http://localhost:3000/' // Set this to your site URL in production env.
  // Make sure to include `https://` when not localhost.
  url = url.includes('http') ? url : `https://${url}`
  // Make sure to include a trailing `/`.
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
  return url
}
