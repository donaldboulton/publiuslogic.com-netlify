import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: process.env.OCTOKIT_PERSONAL_ACCESS_TOKEN,
})

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  try {
    const { data } = await octokit.request('GET /users/{username}', {
      username: donaldboulton,
    })

    res.status(200).json({
      message: 'A ok!',
      user: {
        name: data.name,
        blog_url: data.blog,
        bio: data.bio,
        photo: data.avatar_url,
        githubUsername: `@${data.login}`,
        githubUrl: data.html_url,
        twitterUsername: `@${data.twitter_username}`,
        twitterUrl: `https://twitter.com/${data.twitter_username}`,
      },
    })
  } catch (error) {
    res.status(500).json({ message: 'Error!' })
  }
}