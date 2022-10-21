import * as React from 'react'
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { LazyMotion, m, useMotionValue, useTransform } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

const DisclosureButton = ({ className, ...props }) => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const handleClick = event => {
    buttonRef.current.disabled = true

    console.log('button clicked')
  }
  const duration = 0.4
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

  return (
    <div>
      <Disclosure.Button className="ml-3 h-10 w-10" aria-label="Show Code">
        <m.svg
          baseProfile="tiny"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 307.8 230.9"
          className="m-2 h-10 w-10 active:stroke-0"
        >
          <m.path
            fill="#FFF"
            d="M76.3 129.1l-29.6 29.6L30 142v58.9h58.9l-16.7-16.8 29.5-29.5zM101.7 76.3L72.2 46.7 88.9 30H30v58.9l16.7-16.7 29.6 29.5zM206.1 154.6l29.5 29.5-16.7 16.8h58.9V142l-16.7 16.7-29.6-29.6zM231.5 101.7l29.6-29.5 16.7 16.7V30h-58.9l16.7 16.7-29.5 29.6z"
            initial={false}
            animate={open ? 'enterDiscloserScreen' : 'exitDiscloserScreen'}
            variants={enterDiscloserScreenIconVariants}
            transition={{ duration }}
            onClick={async () => {
              open()
              handleClick()
            }}
          />
          <path
            fill="#FFF"
            d="M10 61.3V10h51.3V0H0v61.3zM246.5 10h51.3v51.3h10V0h-61.3zM297.8 169.3v51.6h-51.3v10h61.3v-61.6zM61.3 220.9H10v-51.6H0v61.6h61.3z"
          />
          <m.path
            fill="#FFF"
            d="M55.4 200.9L85 171.3l16.7 16.7v-58.9H42.8l16.8 16.8L30 175.4zM30 55.4L59.6 85l-16.8 16.7h58.9V42.8L85 59.6 55.4 30zM277.8 175.4l-29.6-29.5 16.8-16.8h-58.9V188l16.7-16.7 29.6 29.6zM252.4 30l-29.6 29.6-16.7-16.8v58.9H265L248.2 85l29.6-29.6zM10 61.3V10h51.3V0H0v61.3zM246.5 10h51.3v51.3h10V0h-61.3zM297.8 169.3v51.6h-51.3v10h61.3v-61.6zM61.3 220.9H10v-51.6H0v61.6h61.3z"
            initial={false}
            animate={open ? 'enterDiscloserScreen' : 'exitDiscloserScreen'}
            variants={exitDiscloserScreenIconVariants}
            style={{ pathLength, opacity }}
            transition={{ duration }}
            onClick={async () => {
              close()
              handleClick()
            }}
          />
        </m.svg>
      </Disclosure.Button>
    </div>
  )
}

export default DisclosureButton
