import * as React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { getUrl } from '@/lib/getUrl'
import { supabase } from '@/lib/supabase'

export default function AuthForm() {
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
