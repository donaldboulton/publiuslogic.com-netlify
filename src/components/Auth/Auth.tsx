import React from 'react'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Database } from '@lib/schema'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient<Database>(supabaseUrl, supabaseKey)

export default function AuthForm() {
  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    })
  }

  async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
  }

  async function signInWithSpotify() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'spotify',
    })
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <Auth
      supabaseClient={supabase}
      view="magic_link"
      appearance={{ theme: ThemeSupa }}
      theme="dark"
      providers={['github', 'google', 'spotify']}
      redirectTo="https://publiuslogic.com/user-profile"
    />
  )
}
