import * as React from 'react'
import { MDXEmbedProvider } from 'mdx-embed'

export function wrapRootElement({ element }) {
  return (
    <MDXEmbedProvider>{element}</MDXEmbedProvider>
  )
}
