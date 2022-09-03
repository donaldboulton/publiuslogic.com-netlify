import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from './src/components/Code'
import { preToCodeBlock } from 'mdx-utils'
import { GoogleAuthProvider } from '@/components/GoogleAuthProvider'

const Acronym = props => <abbr style={{ color: '#8b5cf6' }} {...props} />

// components is its own object outside of render so that the references to
// components are stable
const components = {
  abbr: Acronym,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre className="gatsby-highlight" {...preProps} />
    }
  },
}
export const wrapRootElement = ({ element }) => (
  <GoogleAuthProvider>
    <MDXProvider components={components}>{element}</MDXProvider>
  </GoogleAuthProvider>
)
