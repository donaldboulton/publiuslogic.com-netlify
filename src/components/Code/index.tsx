import * as React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useMDXScope } from 'gatsby-plugin-mdx/context'
import { Disclosure } from '@headlessui/react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { LazyMotion, m, useMotionValue, useTransform } from 'framer-motion'
import dracula from 'prism-react-renderer/themes/dracula'
import rangeParser from 'parse-numeric-range'
import Confetti from 'react-dom-confetti'
import useSound from 'use-sound'
import clapping from '../../../static/audio/clapping.mp3'
import Title from '@/components/CodeTitle'
import Section from '@/components/Section'
import DisclosureButton from '@/components/DisclosureButton'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

const getParams = (className = '') => {
  const [lang = '', params = ''] = className.split(':')
  return [lang.split('language-').pop().split('{').shift()].concat(
    params.split('&').reduce((merged, param) => {
      const [key, value] = param.split('=')
      merged[key] = value
      return merged
    }, {})
  )
}

const copyToClipboard = str => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

const ButtonWrapper = props => (
  <div
    style={{
      backgroundColor: '#0f172a',
      borderTopRightRadius: '12px',
      borderTopLeftRadius: '12px',
      position: 'relative',
      alignItems: 'center',
    }}
    {...props}
  />
)

const Wrapper = props => (
  <div
    style={{
      position: 'relative',
      backgroundColor: '#0f172a',
      borderBottomRightRadius: '12px',
      borderBottomLeftRadius: '12px',
    }}
    {...props}
  />
)

const ConfettiWrapper = props => <div style={{ position: 'absolute', top: 0, right: 0 }} {...props} />

const Button = props => (
  <button
    style={{
      border: 'none',
      boxShadow: 'none',
      textDecoration: 'none',
      position: 'absolute',
      top: '8px',
      right: 0,
      marginRight: '10px',
      marginBottom: '10px',
    }}
    {...props}
  />
)

let highlightStart = false
const highlightClassName = 'highlight-line'

const highlightLine = (lineArray, lineProps) => {
  let shouldExclude = false
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  lineArray.forEach((line, i) => {
    const content = line.content

    if (content.replace(/\s/g, '').includes('//highlight-line')) {
      lineProps.className = `${lineProps.className} ${highlightClassName}`
      line.content = content.replace('// highlight-line', '').replace('//highlight-line', '')
    }

    if (!!highlightStart && content.replace(/\s/g, '') === '//highlight-end') {
      highlightStart = false
      shouldExclude = true
    }

    if (content.replace(/\s/g, '') === '//highlight-start') {
      highlightStart = true
      shouldExclude = true
    }
  })

  if (!!highlightStart) {
    lineProps.className = `${lineProps.className} ${highlightClassName}`
  }

  return shouldExclude
}

const calculateLinesToHighlight = meta => {
  const RE = /{([\d,-]+)}/
  if (RE.test(meta)) {
    const strlineNumbers = RE.exec(meta)[1]
    const lineNumbers = rangeParser(strlineNumbers)
    return index => lineNumbers.includes(index + 1)
  } else {
    return () => false
  }
}

export const Code = ({ codeString, className, metastring, ...props }) => {
  const ref = useRef()
  const [isClicked, setIsClicked] = useState(false)
  const duration = 0.4
  const svgVariants = {
    hover: (isClicked: boolean) => ({
      scale: isClicked ? 1 : 1.05,
    }),
    pressed: (isClicked: boolean) => ({
      scale: isClicked ? 1 : 0.95,
    }),
    idle: {
      scale: 1,
    },
  }

  const clipboardIconVariants = {
    clicked: { opacity: 0 },
    unclicked: { opacity: 1 },
  }

  const tickVariants = {
    pressed: (isClicked: boolean) => ({ pathLength: isClicked ? 0.85 : 0.05 }),
    clicked: { pathLength: 1 },
    unclicked: { pathLength: 0 },
  }

  const enterDiscloserScreenIconVariants = {
    enterDiscloserScreen: { opacity: 0 },
    exitDiscloserScreen: { opacity: 1 },
  }

  const exitDiscloserScreenIconVariants = {
    enterDiscloserScreen: { pathLength: 1 },
    exitDiscloserScreen: { pathLength: 0 },
  }

  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0, 0.5], [0, 1])
  const [isCopied, setIsCopied] = useState(false)
  const [play] = useSound(clapping)
  const doApplause = () => {
    if (!isCopied) {
      setIsCopied(true)
    }
  }
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  const [language, { title = '' }] = getParams(className)
  const ifTitle = (title || language) && { marginTop: '0px' }

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => setIsClicked(false), 3000)
    }
  }, [isClicked])

  const buttonRef = useRef(null)
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const handleClick = event => {
    buttonRef.current.disabled = true

    console.log('button clicked')
  }
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const handleCopy = event => {
    buttonRef.current.disabled = false
  }

  const components = useMDXScope()
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} scope={components}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    )
  } else {
    return (
      <>
        <LazyMotion features={loadFeatures}>
          <Section>
            <Wrapper ref={ref} className="overscroll-contain opacity-75">
              <Disclosure>
                {({ open }) => (
                  <>
                    <ButtonWrapper className="flex place-content-between">
                      <DisclosureButton ref={buttonRef} />
                      <div>
                        <Button
                          css={{
                            background: 'transparent',
                            padding: '2px',
                            border: '1px',
                            borderRadius: '3px',
                            borderColor: '#800080',
                            cursor: isClicked ? 'default' : 'pointer',
                            marginBottom: '20px',
                          }}
                          aria-label="Copy to clipboard"
                          title="Copy to clipboard"
                          disabled={isClicked}
                          onClick={() => {
                            setIsClicked(true)
                            copyToClipboard(codeString)
                            setIsCopied(true)
                            setTimeout(() => setIsCopied(false), 3000)
                            doApplause()
                            play()
                            handleCopy()
                          }}
                        >
                          <m.svg
                            initial="idle"
                            whileHover="hover"
                            whileTap="pressed"
                            transition={{ duration }}
                            variants={svgVariants}
                            custom={isClicked}
                            className="h-10 w-10"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <m.path
                              d="M20.8511 9.46338H11.8511C10.7465 9.46338 9.85107 10.3588 9.85107 11.4634V20.4634C9.85107 21.5679 10.7465 22.4634 11.8511 22.4634H20.8511C21.9556 22.4634 22.8511 21.5679 22.8511 20.4634V11.4634C22.8511 10.3588 21.9556 9.46338 20.8511 9.46338Z"
                              stroke="#949699"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={false}
                              animate={isClicked ? 'clicked' : 'unclicked'}
                              variants={clipboardIconVariants}
                              custom={isClicked}
                              transition={{ duration }}
                            />
                            <m.path
                              d="M5.85107 15.4634H4.85107C4.32064 15.4634 3.81193 15.2527 3.43686 14.8776C3.06179 14.5025 2.85107 13.9938 2.85107 13.4634V4.46338C2.85107 3.93295 3.06179 3.42424 3.43686 3.04917C3.81193 2.67409 4.32064 2.46338 4.85107 2.46338H13.8511C14.3815 2.46338 14.8902 2.67409 15.2653 3.04917C15.6404 3.42424 15.8511 3.93295 15.8511 4.46338V5.46338"
                              stroke="#949699"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={false}
                              animate={isClicked ? 'clicked' : 'unclicked'}
                              variants={clipboardIconVariants}
                              custom={isClicked}
                              transition={{ duration }}
                            />
                            <m.path
                              d="M20 6L9 17L4 12"
                              stroke="#5184f9"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={false}
                              animate={isClicked ? 'clicked' : 'unclicked'}
                              variants={tickVariants}
                              style={{ pathLength, opacity }}
                              custom={isClicked}
                              transition={{ duration }}
                            />
                          </m.svg>
                        </Button>
                      </div>
                    </ButtonWrapper>
                    <Title className="code-title p-2" text={title}>
                      {language}
                    </Title>
                    <Highlight {...defaultProps} code={codeString} language={language} theme={dracula}>
                      {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <Disclosure.Panel className="gatsby-highlight nav-scroll" data-language={language}>
                          <pre
                            className={className}
                            data-language={language}
                            style={{
                              ...style,
                              ...ifTitle,
                              padding: '2rem',
                              position: 'relative',
                              maxHeight: '400px',
                            }}
                          >
                            {tokens.map((line, i) => {
                              const lineProps = getLineProps({ line, key: i })
                              const shouldExclude = highlightLine(line, lineProps)
                              if (shouldHighlightLine(i)) {
                                lineProps.className = `${lineProps.className} highlight-line`
                              }
                              return !shouldExclude ? (
                                <div {...lineProps} key={i}>
                                  <span className="line-number-style">{i + 1}</span>
                                  {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                  ))}
                                </div>
                              ) : null
                            })}
                          </pre>
                        </Disclosure.Panel>
                      )}
                    </Highlight>
                    <ConfettiWrapper>
                      <Confetti active={isCopied} config={config} />
                    </ConfettiWrapper>
                  </>
                )}
              </Disclosure>
            </Wrapper>
          </Section>
        </LazyMotion>
      </>
    )
  }
}
