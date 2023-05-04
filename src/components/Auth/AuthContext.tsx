import * as React from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { Session, User, createClient } from '@supabase/supabase-js'
import { Database } from '@/lib/schema'

const supabase =
  process.env.SUPABASE_URL && process.env.SUPABASE_KEY
    ? createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
    : undefined

export const AuthContext = createContext<{ user: User | null; session: Session | null }>({
  user: null,
  session: null,
})

export const AuthContextProvider = (props: any) => {
  const [userSession, setUserSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserSession(session)
      setUser(session?.user ?? null)
    })

    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(`Supabase auth event: ${event}`)
      setUserSession(session)
      setUser(session?.user ?? null)
    })

    return () => {
      authListener.subscription
    }
  }, [])

  const value = {
    userSession,
    user,
  }
  return <AuthContext.Provider value={value} {...props} />
}

export const useUser = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a AuthContextProvider.')
  }
  return context
}