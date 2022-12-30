import * as React from 'react'
import { ReactNode, FC } from 'react'

interface LeftProps {
  children: ReactNode
  link: string
  buttonLink: string
  description: string
  title: string
  titleLink: string
}

const Left: FC<LeftProps> = props => {
  const { children, link, buttonLink, description, title, titleLink, ...delegated } = props
  return (
    <>
    <div className="left-0 mb-6 mt-1 pt-4">
      <div class="py-2 px-8 max-w-sm mx-auto bg-slate-300 dark:bg-slate-900 rounded-xl shadow-lg space-y-1 sm:py-1 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
        <div
            className="flex justify-left"
            {...delegated}
        >
          {children}
        </div>
        <div class="text-center space-y-2 sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg text-black font-semibold">
              <a href={link} target="_blank">
                 {description}
              </a>
              </p>
              <p class="text-slate-500 font-medium">
              <a href={titleLink} target="_blank">
                {title}
              </a>
              </p>
            </div>
            <a href={buttonLink} target="_blank">
               <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Contact</button>
            </a>
        </div>
    </div>
    </div>
    </>
  )
}

export default Left
