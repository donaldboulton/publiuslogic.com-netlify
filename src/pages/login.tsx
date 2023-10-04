'use client'

import * as React from 'react'
import { forwardRef, useState, useEffect } from 'react'
import type { HeadProps } from 'gatsby'
import Layout from '@/components/Layout'
import PageTransition from '@/components/PageTransition'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Account from '@/components/Auth/account'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '@/components/Seo'
import OGImage from '../../static/images/undraw/undraw_Account_re_o7id.png'
import ColumnGridTwo from '@/components/ColumnGridTwo'
import { supabase } from '@/lib/supabase'
import { SuspenseHelper } from '@/components/SuspenseHelper'

const TodoList = React.lazy(() => import('@/components/TodoList'))
const LeftText = React.lazy(() => import('@/components/LeftText'))

const ogimage = {
    src: OGImage,
    width: 1400,
    height: 450,
}

type LoginRef = React.ForwardedRef<HTMLDivElement>

function Login(props, ref: LoginRef) {
    const [session, setSession] = useState(null)
    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
        })

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })

        return () => subscription.unsubscribe()
    }, [])

    const getURL = () => {
        let url = process?.env?.API_URL ?? 'http://localhost:3000/' // Set this to your site URL in production env.
        // Make sure to include `https://` when not localhost.
        url = url.includes('http') ? url : `https://${url}`
        // Make sure to include a trailing `/`.
        url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
        return url
    }

    async function signInWithGitHub() {
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

    async function signInWithEmail() {
        const { data, error } = await supabase.auth.signInWithOtp({
            email: { email },
            options: {
                emailRedirectTo: getURL(),
            },
        })
    }

    async function signOut() {
        const { error } = await supabase.auth.signOut()
    }

    return (
        <Layout>
            <PageTransition ref={ref}>
                <div className="mb-20 ml-8">
                    <div className="mb-4 pt-10">
                        <SuspenseHelper fallback={<div>Loading...</div>}>
                            <LeftText>PubliusLogic Login</LeftText>
                        </SuspenseHelper>
                    </div>
                    <ColumnGridTwo>
                        <div className="glow mb-24 mr-20 mt-10 text-slate-200 lg:col-span-2 lg:mt-0">
                            <div className="m-auto w-72 bg-slate-950 px-6 py-4 text-slate-400">
                                {!session ? (
                                    <Auth
                                        supabaseClient={supabase}
                                        view="magic_link"
                                        providers={[
                                            'github',
                                            'google',
                                            'spotify',
                                        ]}
                                        theme="dark"
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
                                    />
                                ) : (
                                    <>
                                        <ColumnGridTwo>
                                            <Account
                                                key={session.user.id}
                                                session={session}
                                            />
                                            <div className="mx-auto flex h-full min-w-[250px] max-w-[600px] flex-col items-center justify-center p-4">
                                                <SuspenseHelper
                                                    fallback={
                                                        <div>Loading...</div>
                                                    }
                                                >
                                                    <TodoList
                                                        session={session}
                                                    />
                                                </SuspenseHelper>
                                            </div>
                                        </ColumnGridTwo>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="right-0 -mt-10">
                            <StaticImage
                                className="self-center rounded-lg opacity-60"
                                src="../../static/img/planets.jpg"
                                placeholder="blurred"
                                width={840}
                                height={427}
                                quality={95}
                                formats={['auto', 'webp', 'avif']}
                                alt="Planets"
                                loading="eager"
                            />
                        </div>
                    </ColumnGridTwo>
                </div>
            </PageTransition>
        </Layout>
    )
}

export default forwardRef(Login)

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function Head(props: HeadProps) {
    return (
        <>
            <Seo
                type="page"
                title="Login"
                description="Login To PubliusLogic."
                image={ogimage}
                pathname="/search"
            >
                <title>Login Page</title>
                <meta name="description" content="PubliusLogic Login Page." />
                <link
                    rel="sitemap"
                    type="application/xml"
                    title="Sitemap"
                    href="/sitemap.xml"
                />
            </Seo>
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    about: {
                        '@id': 'https://publiuslogic.com',
                    },
                    audience: 'public',
                    abstract:
                        'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
                    author: {
                        '@id': 'https://donboulton.com',
                    },
                    copyrightHolder: {
                        '@id': 'https://publiuslogic.com',
                    },
                    copyrightYear: '2022',
                    creator: {
                        '@id': 'https://publiuslogic.com',
                    },
                    description: 'PubliusLogic name means to Publish Logic',
                    image: {
                        '@type': 'ImageObject',
                        url: ogimage,
                        width: '1400',
                        height: '450',
                    },
                    inLanguage: 'en',
                    name: 'PubliusLogic',
                    publisher: {
                        '@id': 'https://publiuslogic.com',
                    },
                    url: 'https://publiuslogic.com',
                    potentialAction: {
                        '@type': 'SearchAction',
                        target: {
                            '@type': 'EntryPoint',
                            urlTemplate:
                                'https://query.publiuslogic.com/search?q={search_term_string}',
                        },
                        'query-input': 'required name=search_term_string',
                    },
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebPage',
                    name: 'Login',
                    url: 'https://publiuslogic.com/Login',
                    image: {
                        '@type': 'ImageObject',
                        url: 'https://publiuslogic.com/static/images/undraw/undraw_Super_thank_you_re_f8bo.png',
                        width: '1400',
                        height: '450',
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: 'Mansbooks',
                    },
                    license: 'http://publiuslogic.com/blog/0bsd-licence',
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    description: 'Breadcrumbs list',
                    itemListElement: [
                        {
                            '@type': 'ListItem',
                            item: {
                                '@id': 'https://publiuslogic.com',
                                name: 'PubliusLogic',
                            },
                            position: '1',
                        },
                        {
                            '@type': 'ListItem',
                            item: {
                                '@id': 'https://publiuslogic.com/login',
                                name: 'Login',
                            },
                            position: '2',
                        },
                    ],
                    numberOfItems: '2',
                    name: 'Breadcrumbs',
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@id': 'https://publiuslogic.com',
                    '@type': 'Organization',
                    address: 'OKC, Middle Earth',
                    contactPoint: {
                        '@type': 'ContactPoint',
                        email: 'donaldboulton@gmail.com',
                        telephone: '+405-863-2165',
                    },
                    description:
                        'PubliusLogic has Topics on Creation, Law, USA and World Governments, Life Matters. Our Main focus is the Re-Creation of Mankind to the Spiritual Beings you have forgotten about, as you only live in the Flesh. Your Soul and Spirit you deny.',
                    email: 'donaldboulton@gmail.com',
                    founder: {
                        '@id': 'https://donboulton.com',
                    },
                    location: 'OKC, Middle Earth',
                    image: {
                        '@type': 'ImageObject',
                        url: ogimage,
                        width: '1400',
                        height: '450',
                    },
                    logo: {
                        '@type': 'ImageObject',
                        url: 'data:image/png;base64,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',
                    },
                    name: 'PubliusLogic',
                    sameAs: [
                        'mailto:donaldboulton@gmail.com',
                        'tel:+405-863-2165',
                        'https://www.facebook.com/donboulton',
                        'https://www.instagram.com/boulton3662',
                        'https://twitter.com/donboulton',
                        'https://www.linkedin.com/donboulton',
                        'https://github.com/donaldboulton/',
                    ],
                    url: 'https://publiuslogic.com',
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Person',
                    '@id': 'https://donboulton.com',
                    name: 'Donald Boulton',
                    url: 'https://donboulton.com',
                    worksFor: {
                        '@id': 'https://publiuslogic.com',
                    },
                })}
            </script>
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    url: 'https://www.publiuslogic.com/',
                    potentialAction: {
                        '@type': 'SearchAction',
                        target: {
                            '@type': 'EntryPoint',
                            urlTemplate:
                                'https://query.publiuslogic.com/search?q={search_term_string}',
                        },
                        'query-input': 'required name=search_term_string',
                    },
                })}
            </script>
        </>
    )
}
