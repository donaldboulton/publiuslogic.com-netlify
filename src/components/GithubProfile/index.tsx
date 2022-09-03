import * as React from 'react'
import { useEffect, useState } from 'react'
import BouncingBall from '@/components/BouncingBall'

function GithubProfile() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getGitHubUser = async () => {
      const response = await fetch('/api/get-github-user', {
        method: 'GET',
      })

      setUser(response.data.user)
      setIsLoading(false)
    }

    getGitHubUser()
  }, [])

  return (
    <section className="w-full shadow-lg pt-8 mt-10 rounded-lg bg-slate-300 dark:bg-slate-800 mb-6 p-6">
      {isLoading ? (
        <div className="flex justify-center">
          <BouncingBall />
        </div>
      ) : (
        <>
          <div className="py-6 mb-4 w-full">
            <img
              className="w-20 h-20 mx-auto mb-3 ring ring-indigo-200 rounded-full"
              src={user.photo}
              alt={user.name}
            />
            <h2 className="font-bold text-2xl">{user.name}</h2>
            <a className="text-rose-400 hover:text-rose-500" href={user.blog_url} target="_blank" rel="noreferrer">
              {user.blog_url}
            </a>
            <p className="flex justify-center max-w-md m-auto text-slate-900 hover:text-slate-700 dark:text-slate-200 dark:hover:text-slate-200 my-2 mb-6">
              {user.bio}
            </p>
            <div className="flex justify-center max-w-xs m-auto">
              <div className="grid grid-flow-col auto-cols-min gap-4">
                <a
                  className="flex items-center text-blue-400 hover:text-blue-500"
                  href={user.twitterUrl}
                  target="_blank"
                  rel="me"
                >
                  <svg
                    className="flex-initial mr-0.5 mt-0.5"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                  >
                    <title>Twitter</title>
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  <span>{user.twitterUsername}</span>
                </a>
                <a
                  className="flex items-center text-slate-900 hover:text-slate-700 dark:text-slate-200 dark:hover:text-slate-200"
                  href={user.githubUrl}
                  target="_blank"
                  rel="noreferrer me"
                >
                  <svg
                    className="flex-initial mr-0.5 mt-0.5"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="currentColor"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span>{user.githubUsername}</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default GithubProfile
