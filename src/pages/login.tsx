import * as React from 'react'
import { useEffect, useState } from 'react'
import type { HeadProps } from 'gatsby'
import { Link } from 'gatsby'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { supabase } from '@/lib/supabase'
import getUrl from '@/lib/getUrl'
import Account from '@/components/Account'
import { StaticImage } from 'gatsby-plugin-image'
import LeftText from '@/components/LeftText'
import ColumnGridTwo from '@/components/ColumnGridTwo'
import Seo from '@/components/Seo'
import Stars from '@/components/Stars'
import TodoList from '@/components/TodoList'
import OGImage from '../../static/images/undraw/undraw_Account_re_o7id.png'

const ogimage = {
  src: OGImage,
  width: 1400,
  height: 450,
}

const Login = ({ email }) => {
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
    <>
      <Stars />
      <div className="login-beams flex min-h-full flex-col">
        <div className="bg-scale-100 flex flex-1 flex-col text-slate-300 opacity-70">
          <div className="absolute top-0 mx-auto w-full px-8 pt-6 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10">
              <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                <div className="flex w-full items-center justify-between md:w-auto">
                  <Link href="/">
                    <span className="relative inline-block overflow-hidden">
                      <StaticImage
                        layout="fixed"
                        className="h-8 w-8 self-center rounded-lg"
                        src="../../static/img/apple-touch-icon-32x32.png"
                        width={32}
                        height={32}
                        quality={95}
                        alt="Home"
                        loading="lazy"
                      />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="hidden items-center space-x-3 md:ml-10 md:flex md:pr-4">
                <Link rel="noreferrer" href="/about">
                  <button
                    type="button"
                    className="font-regular text-scale-1200 bg-scale-100 hover:bg-scale-300 border-scale-600 hover:border-scale-700 dark:border-scale-700 hover:dark:border-scale-800 dark:bg-scale-500 dark:hover:bg-scale-600 focus-visible:outline-brand-600 relative inline-flex cursor-pointer items-center justify-center space-x-2 rounded-md border px-2.5 py-1 text-center text-xs shadow-sm outline-none outline-0 transition-all duration-200 ease-out focus-visible:outline-4 focus-visible:outline-offset-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="sbui-icon "
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>{' '}
                    <span className="truncate">About PubliusLogic</span>{' '}
                  </button>
                </Link>
              </div>
            </nav>
          </div>
          <div className="flex flex-1">
            <div className="bg-scale-200 border-scale-500 flex flex-1 flex-shrink-0 flex-col items-center border-r border-slate-900 px-5 pb-8 pt-16 shadow-lg">
              <div className="flex w-[330px] flex-1 flex-col justify-center sm:w-[384px]">
                <div className="mb-10">
                  <LeftText className="mb-2 mt-8 text-2xl lg:text-3xl">Welcome back</LeftText>
                  <h2 className="text-scale-1100 text-sm">Sign in to your account</h2>
                </div>
                <div className="flex flex-col gap-5">
                  {!session ? (
                    <div className="auth-widget">
                      <Auth
                        supabaseClient={supabase}
                        view="magic_link"
                        appearance={{
                          theme: ThemeSupa,
                        }}
                        theme="dark"
                        providers={['google', 'spotify']}
                      />
                    </div>
                  ) : (
                    <>
                      <ColumnGridTwo>
                        <Account key={session.user.id} session={session} />
                        <div
                          className="flex h-full w-full flex-col items-center justify-center p-4"
                          style={{ minWidth: 250, maxWidth: 600, margin: 'auto' }}
                        >
                          <TodoList session={session} />
                        </div>
                      </ColumnGridTwo>
                    </>
                  )}
                </div>
              </div>
            </div>
            <aside className="form-beams hidden flex-1 flex-shrink basis-1/4 flex-col items-center justify-center xl:flex">
              <div className="relative flex flex-col gap-6">
                <div className="absolute -left-11 -top-12 select-none">
                  <span className="text-scale-600 text-[160px] leading-none">“</span>
                </div>
                <blockquote className="z-10 max-w-lg text-3xl">
                  All week I was migrating my project from Regis to
                  <a href="https://supabase.com/launch-week">@supabase</a>
                  <blockquote>
                    Because it is the best, fastest and simple!!! I like design and API for it's understandability.{' '}
                  </blockquote>
                  <blockquote>
                    <a href="https://supabase.com/launch-week">Supabase Launch week 9.</a> Just try it! 🧪
                  </blockquote>
                </blockquote>
                <div className="absolute -right-12 -bottom-12 select-none">
                  <span className="text-scale-600 text-[160px] leading-none">“</span>
                </div>
                <a
                  href="https://twitter.com/donboulton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <StaticImage
                    layout="fixed"
                    className="h-8 w-8 self-center rounded-lg"
                    src="../../static/img/donald-boulton-32x32.png"
                    width={32}
                    height={32}
                    quality={95}
                    alt="Donald Boulton"
                    loading="lazy"
                  />
                  <div className="flex flex-col">
                    <cite className="text-scale-1100 whitespace-nowrap font-medium not-italic">@donboulton</cite>
                  </div>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function Head(props: HeadProps) {
  return (
    <>
      <Seo type="page" title="Login" description="Login To PubliusLogic." image={ogimage} pathname="/search">
        <title>Login Page</title>
        <meta name="description" content="PubliusLogic Login Page." />
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
        <link rel="rss" type="application/rss+xml" title="Rss" href="/rss.xml" />
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
              urlTemplate: 'https://query.publiuslogic.com/search?q={search_term_string}',
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
              urlTemplate: 'https://query.publiuslogic.com/search?q={search_term_string}',
            },
            'query-input': 'required name=search_term_string',
          },
        })}
      </script>
    </>
  )
}
