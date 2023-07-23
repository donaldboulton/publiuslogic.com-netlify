import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { useUser, useSupabaseClient, useSession } from '@supabase/auth-helpers-react'
import { Database } from '@lib/schema'
import Avatar from './avatar'

type Profiles = Database['public']['Tables']['profiles']['Row']

export default function Account() {
  const supabase = useSupabaseClient<Database>()
  const session = useSession()
  const user = useUser()
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState<Profiles['username']>(null)
  const [website, setWebsite] = useState<Profiles['website']>(null)
  const [avatar_url, setAvatarUrl] = useState<Profiles['avatar_url']>(null)

  useEffect(() => {
    getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: Profiles['username']
    website: Profiles['website']
    avatar_url: Profiles['avatar_url']
  }) {
    try {
      setLoading(true)
      if (!user) throw new Error('No user')

      const updates = {
        id: user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      }

      let { error } = await supabase.from('profiles').upsert(updates)
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  async function signInWithGitHub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
  }

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'http://localhost:9000/auth/callback',
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
  }

  async function signInWithSlack() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'slack',
    })
  }

  async function signInWithSpotify() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'spotify',
    })
  }

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: process.env.GATSBY_PUBLIC_ADMIN_EMAILS,
      password: process.env.ADMIN_PASSWORD,
    })
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <div className="form-widget ml-8">
      <div className="mb-2 p-4">
        <Avatar
          uid={user.id}
          url={avatar_url}
          size={150}
          onUpload={url => {
            setAvatarUrl(url)
            updateProfile({ username, website, avatar_url: url })
          }}
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="email" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300">
          Email address
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-slate-700 bg-slate-800 pl-3 pr-3 text-slate-300">
            <svg
              aria-hidden="true"
              className="h-5 w-5 text-slate-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <input
            id="email"
            type="text"
            value={session.user.email}
            disabled
            autoComplete="on"
            placeholder="Email"
            className="mt-1 block w-full rounded-md border-slate-800 bg-slate-900 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-300 shadow-sm focus:border-blue-400 focus:ring-blue-300 sm:text-sm"
          />
        </div>
      </div>
      <div className="col-span-6 mt-2">
        <label htmlFor="username" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300">
          UserName
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-slate-700 bg-slate-800 pl-3 pr-3 text-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5 text-slate-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <input
            id="username"
            type="text"
            value={username || ''}
            onChange={e => setUsername(e.target.value)}
            disabled
            placeholder="UserName"
            className="mt-1 block w-full rounded-md border-slate-800 bg-slate-900 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-300 shadow-sm focus:border-blue-400 focus:ring-blue-300 sm:text-sm"
          />
        </div>
      </div>
      <div className="col-span-6 mt-2">
        <label htmlFor="website" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300">
          Website
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-slate-700 bg-slate-800 pl-3 pr-3 text-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5 text-slate-300"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </div>
          <input
            id="website"
            type="website"
            value={website || ''}
            onChange={e => setWebsite(e.target.value)}
            disabled
            placeholder="Website"
            className="mt-1 block w-full rounded-md border-slate-800 bg-slate-900 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-300 shadow-sm focus:border-blue-400 focus:ring-blue-300 sm:text-sm"
          />
        </div>
      </div>

      <div className="mb-4 mt-4">
        <button
          className="button primary block"
          onClick={() => updateProfile({ username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>

      <div className="mb-4">
        <button className="button block" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  )
}
