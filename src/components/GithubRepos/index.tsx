import * as React from 'react'
import { useEffect, useState } from 'react'
import BouncingBall from '@/components/BouncingBall'

function GithubRepos() {
  const [repo, setRepo] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getGitHubRepo = async () => {
      const response = await fetch('/api/repo.js', {
        method: 'GET',
      })

      setUser(response.data.repo)
      setIsLoading(false)
    }

    getGitHubRepo()
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
            <h2 className="font-bold text-2xl">{user.name}</h2>
            <a className="text-rose-400 hover:text-rose-500" href={user.blog_url} target="_blank" rel="noreferrer">
              {repo.owner}
            </a>
            <p className="flex justify-center max-w-md m-auto text-slate-900 hover:text-slate-700 dark:text-slate-200 dark:hover:text-slate-200 my-2 mb-6">
              {repo.repo}
            </p>
          </div>
        </>
      )}
    </section>
  )
}

export default GithubRepos
