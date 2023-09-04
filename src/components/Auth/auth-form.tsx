'use client'

import * as React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase'
export default function AuthForm() {
  const getURL = () => {
    let url =
      process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
      process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
      'http://localhost:3000/'
    // Make sure to include `https://` when not localhost.
    url = url.includes('http') ? url : `https://${url}`
    // Make sure to include a trailing `/`.
    url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
    return url
  }

  async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: getURL(),
      },
    })
  }
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: getURL(),
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
  }

  async function signInWithSpotify() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'spotify',
      options: {
        redirectTo: getURL(),
      },
    })
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <div className="auth-widget">
      <Auth
        supabaseClient={supabase}
        view="magic_link"
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: 'red',
                brandAccent: 'darkred',
              },
            },
          },
        }}
        theme="dark"
        providers={['github', 'google', 'spotify']}
      />
    </div>
  )
}
