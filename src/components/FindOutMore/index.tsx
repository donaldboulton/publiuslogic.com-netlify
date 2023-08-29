import * as React from 'react'
import Section from '@/components/Section'
import GatsbyImage from '../../../static/svg/undraw/undraw_gatsbyjs_st4g.svg'
import TailwindImage from '../../../static/svg/undraw/undraw_tailwind_css_1egw.svg'
import ReactImage from '../../../static/svg/undraw/undraw_react_y-7-wq.svg'
import WavyHr from '@/components/WavyHr'

const callouts = [
  {
    name: 'Gatsby v5.12.0',
    description: 'Gatsby is a React-based open-source framework for creating websites and apps.',
    imageSrc: GatsbyImage,
    imageAlt: 'Gatsby drawing',
    href: 'https://gatsbyjs.com',
  },
  {
    name: 'TailwindCSS v3.3.2',
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
    <Section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-10 lg:max-w-none lg:py-12">
          <h2 className="mb-2 text-lg font-extrabold">Technology and Design</h2>
          <WavyHr />
          <div className="mt-4 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map(callout => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-contain object-center"
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
    </Section>
  )
}
