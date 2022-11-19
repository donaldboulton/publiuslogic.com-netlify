import * as React from 'react'
import { useState, useEffect } from 'react'
import Typist from '@/components/TypistCore/Typist'

function BioTypist() {
  const [count, setCount] = useState(1)

  useEffect(() => {
    console.log('Count: ' + count)
    setCount(1)
  }, [count])

  return (
    <div>
      {count ? (
        <Typist avgTypingDelay={50} onTypingDone={() => setCount(29)} cursor={{ hideWhenDone: true }}>
          <span> I grew up and live in OKC OK!</span>
          <Typist.Backspace count={28} delay={800} />
          <span>
            {' '}
            Develop Websites with React and{' '}
            <span role="img" aria-label="Love">
              ❤️
            </span>
          </span>
        </Typist>
      ) : (
        ''
      )}
    </div>
  )
}

export default BioTypist
