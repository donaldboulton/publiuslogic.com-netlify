'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import Avatar from './avatar'
import { supabase } from '@/lib/supabase'
import { Database } from '@/lib/database.types'

type Profile = Database['public']['Tables']['profile']['Row']

export default function Account({ session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState<Profile[]>([])
  const [website, setWebsite] = useState<Profile[]>([])
  const [avatarUrl, setAvatarUrl] = useState<Profile[]>([])

  useEffect(() => {
    async function getProfile() {
      setLoading(true)
      const { user } = session

      let { data, error } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()

      if (error) {
        console.warn(error)
      } else if (data) {
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }

      setLoading(false)
    }

    getProfile()
  }, [session])

  async function updateProfile(event) {
    event.preventDefault()

    setLoading(true)
    const { user } = session

    const updates = {
      id: user.id,
      username,
      website,
      avatar_url,
      updated_at: new Date(),
    }

    let { error } = await supabase.from('profiles').upsert(updates)

    if (error) {
      alert(error.message)
    }
    setLoading(false)
  }
  return (
    <form onSubmit={updateProfile} className="form-widget">
      <Avatar
        uid={user!.id}
        url={avatarUrl}
        size={150}
        onUpload={url => {
          setAvatarUrl(url)
          updateProfile({ fullname, username, website, avatar_url: url })
        }}
      />
      <div className="col-span-6">
        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300" htmlFor="email">
          Email
        </label>
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
          value={session?.user.email}
          className="mb-3 block w-full appearance-none rounded border-slate-800 bg-slate-900 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-300 focus:border-wine-300 focus:outline-none focus:ring-wine-200 sm:text-sm"
          disabled
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="fullName" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300">
          Full Name
        </label>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-slate-700 bg-slate-800 pl-3 pr-3 text-slate-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-5 w-5 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
        <input
          id="fullName"
          type="text"
          value={fullname || ''}
          onChange={e => setFullname(e.target.value)}
          className="mb-3 block w-full appearance-none rounded border-slate-800 bg-slate-900 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-300 focus:border-wine-300 focus:outline-none focus:ring-wine-200 sm:text-sm"
        />
      </div>
      <div className="col-span-6">
        <label htmlFor="username" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300">
          Username
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-slate-700 bg-slate-800 pl-3 pr-3 text-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 text-red-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <input
            id="username"
            type="text"
            value={username || ''}
            onChange={e => setUsername(e.target.value)}
            className="mb-3 block w-full appearance-none rounded border-slate-800 bg-slate-900 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-300 focus:border-wine-300 focus:outline-none focus:ring-wine-200 sm:text-sm"
          />
        </div>
      </div>
      <div className="col-span-6">
        <label htmlFor="website" className="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-300">
          Website
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-l-md border border-r-0 border-slate-700 bg-slate-800 pl-3 pr-3 text-slate-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-slate-300"
              fill="currentColor"
              aria-hidden="true"
              viewBox="0 0 20 20"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
          </div>
          <input
            id="website"
            type="url"
            value={website || ''}
            onChange={e => setWebsite(e.target.value)}
            className="mb-3 block w-full appearance-none rounded border-slate-800 bg-slate-900 p-2.5 px-4 py-3 pl-14 leading-tight text-slate-300 focus:border-wine-300 focus:outline-none focus:ring-wine-200 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <button
          className="button primary block"
          onClick={() => updateProfile({ fullname, username, website, avatar_url })}
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
    </form>
  )
}
