import * as React from 'react'
import { ReactNode, FC } from 'react'
import Typist from 'react-typist-component'

export type Delay = number | (() => number)
export type Splitter = (str: string) => string[]
interface TypistProps {
  children: ReactNode
  typingDelay?: Delay
  backspaceDelay?: Delay
  loop?: boolean
  pause?: boolean
  startDelay?: number
  finishDelay?: number
  onTypingDone?: () => void
  splitter?: Splitter;
  cursor?: string | React.ReactElement
  disabled?: boolean
  restartKey?: any
}

const Typing: FC<TypistProps> = props => {
    const { children } = props
  return (
    <Typist typingDelay={100} cursor={<span className='cursor'>|</span>}>
      This is a typo
      <br />
      <Typist.Backspace count={5} />
      <Typist.Delay ms={1500} />
      react component
      <Typist.Paste>
        <div>
          use
          <div>deeper div</div>
        </div>
      </Typist.Paste>
    </Typist>
  )
}

export default Typing