import React from 'react'
import Giscus from '@/lib/Giscus'
import Section from '@/components/Section'

function GiscusComments() {
  return (
    <Section>
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
    </Section>
  )
}

export default GiscusComments
