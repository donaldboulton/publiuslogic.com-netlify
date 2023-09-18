import React from 'react'
import { useState } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import WavingHand from '@/components/WavingHand'
import loadable from '@loadable/component'

const Applause = loadable(() => import('@/components/Applause'))

const Bio = () => {
  return (
    <>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10">
          <StaticImage
            className="bio-avatar mb-4 ring ring-purple-500 ring-offset-4"
            layout="fixed"
            formats={['auto', 'webp']}
            src="../../../static/img/donald-boulton.jpg"
            width={48}
            height={48}
            quality={95}
            alt="Profile picture"
            loading="eager"
          />
        </div>
        <div className="-mt-1 text-center sm:ml-4 sm:mt-0 sm:text-left items-center">
          <div className="text-base leading-6">
            <WavingHand /> <span className="font-medium"> Developed and Written by: </span>{' '}
            <span className="font-medium italic">Donald Boulton</span>
            <Applause />
          </div>
          <div
            className="-mt-2 z-30 p-4 text-sm items-center"
          >
            I Build Websites with React and Love{" "}
            <span role="img" aria-label="Love">
              ❤️
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bio
