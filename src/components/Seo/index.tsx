import * as React from 'react'
import { ReactNode, FC } from 'react'

type SEOProps = {
  title?: string
  description?: string
  pathname?: string
  children: ReactNode
}

const SEO: FC<React.PropsWithChildren<SEOProps>> = ({ title, description, image, pathname, children }) => {
  return (
    <>
      <meta name="robots" content="index" />
      <link href="https://github.com/donaldboulton" rel="me" />
      <link href="https://twitter.com/donboulton" rel="me" />
      <link href="https://facebook.com/don.boulton" rel="me" />
      <link href="https://www.instagram.com/boulton3662" rel="me" />
      <link href="https://www.linkedin.com/donboulton" rel="me" />
      <link href="mailto:donaldboulton@gmail.com" rel="me" />
      <link rel="robots" href="https://publiuslogic.com/robots.txt" />
      <link rel="webmention" href="https://webmention.io/publiuslogic.com/webmention" />
      <link rel="pingback" href="https://webmention.io/publiuslogic.com/xmlrpc" />
      {children}
    </>
  )
}

export default SEO
