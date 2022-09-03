import * as React from 'react'

import GatsbyImage from '../../../static/svg/undraw/undraw_gatsbyjs_st4g.svg'
import TailwindImage from '../../../static/svg/undraw/undraw_tailwind_css_1egw.svg'
import ReactImage from '../../../static/svg/undraw/undraw_react_y-7-wq.svg'
import WavyHr from '@/components/WavyHr'

const callouts = [
  {
    name: 'Gatsby v4.21.0',
    description: 'Gatsby is a React-based open-source framework for creating websites and apps.',
    imageSrc: GatsbyImage,
    imageAlt: 'Gatsby drawing',
    href: 'https://gatsbyjs.com',
  },
  {
    name: 'TailwindCSS v3.1.8',
    description: 'A utility-first CSS framework that can be composed to build any design, directly in your markup.',
    imageSrc: TailwindImage,
    imageAlt: 'TailwindCSS drawing',
    href: 'https://tailwindcss.com',
  },
  {
    name: 'React v18.2.0',
    description: 'A JavaScript library for building user interfaces.',
    imageSrc: ReactImage,
    imageAlt: 'React drawing',
    href: 'https://reactjs.org',
  },
]

export default function FindOutMore() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-8 sm:py-10 lg:py-12 lg:max-w-none">
          <h2 className="text-lg mb-2 font-extrabold">Technology and Design</h2>
          <WavyHr />
          <div className="mt-4 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map(callout => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-contain"
                  />
                </div>
                <h3 className="mt-6 text-2xl">
                  <a
                    className="text-indigo-500 hover:text-indigo-600"
                    href={callout.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    area-label="Find Out More"
                  >
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
