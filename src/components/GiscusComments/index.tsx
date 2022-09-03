import * as React from 'react'
import Giscus from '@/lib/Giscus'

function GiscusComments() {
  return (
    <Giscus
      repo="donaldboulton/publiuslogic.com"
      repoId="R_kgDOGwQWPQ"
      category="Ideas"
      categoryId="DIC_kwDOGwQWPc4CA6Ie"
      mapping="pathname"
      term="PubliusLogic Discussions!"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme="dark"
      lang="en"
    />
  )
}

export default GiscusComments
