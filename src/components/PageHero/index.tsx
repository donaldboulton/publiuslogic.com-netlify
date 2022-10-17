import * as React from 'react'

interface PageHeroProps {
  title: string
  description?: string
  image?: string
}

import defaultImage from '../../../static/svg/undraw/undraw_programming_re_kg9v.svg'

const PageHero = ({ title, description, image }: PageHeroProps) => (
  <div className="relative mx-auto mb-4 h-96 w-full max-w-screen-xl text-white md:mb-0">
    <div className="absolute left-0 bottom-0 z-10 h-full w-full bg-gradient-to-t from-gray-700"></div>
    <img
      src={image ? image : defaultImage}
      alt="featured image"
      className="absolute left-0 top-0 z-0 h-full w-full transform-gpu object-contain sm:scale-50 md:scale-75"
    />

    <div className="absolute bottom-0 left-0 z-20 p-4">
      <h1 className="text-lg font-bold leading-tight text-gray-300">{title}</h1>
      <h2 className="text-md font-medium italic text-gray-300">{description}</h2>
    </div>
  </div>
)
export default PageHero
