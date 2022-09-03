import React from 'react'
import Applause from '@/components/Applause'
import { StaticImage } from 'gatsby-plugin-image'
import BioTypist from '@/components/BioTypest'
import WavingHand from '@/components/WavingHand'

const Bio = () => {
  return (
    <>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10">
          <StaticImage
            className="bio-avatar mb-4 ring ring-purple-500 ring-offset-4"
            layout="fixed"
            formats={['auto', 'webp']}
            src="../../../static/assets/donald-boulton.jpg"
            width={48}
            height={48}
            quality={95}
            alt="Profile picture"
            loading="eager"
          />
        </div>
        <div className="-mt-1 text-center sm:mt-0 sm:ml-4 sm:text-left">
          <div className="text-base leading-6">
            <WavingHand />{' '}
            <span className="font-medium text-slate-900 dark:text-slate-200"> Developed and Written by: </span>{' '}
            <span className="italic font-medium text-slate-900 dark:text-slate-200">Donald Boulton</span>
            <Applause />
          </div>
          <div className="mt-1 ml-4 text-base">
            <BioTypist />
          </div>
        </div>
      </div>
    </>
  )
}

export default Bio
