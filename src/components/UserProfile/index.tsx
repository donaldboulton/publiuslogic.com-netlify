import * as React from 'react'
import { ReactNode, FC } from 'react'

interface UserProfileProps {
  children: ReactNode
  link: string
  buttonLink: string
  description: string
  title: string
  titleLink: string
}

const UserProfile: FC<UserProfileProps> = props => {
  const { children, link, buttonLink, description, title, titleLink } = props
  return (
    <>
      <div className="left-0 mx-1 w-80 flex-none flex-nowrap">
        <div class="mx-auto max-w-sm space-y-1 rounded-xl py-1 px-2 shadow-lg sm:flex sm:items-center sm:space-y-0 sm:space-x-4 sm:py-1">
          <div className="justify-left w-24">{children}</div>
          <div class="space-y-1 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-lg font-semibold text-black">
                <a href={link} target="_blank" rel="noopener noreferrer" aria-describedby={description}>
                  {description}
                </a>
              </p>
              <p class="font-medium text-slate-500">
                <a href={titleLink} target="_blank" rel="noopener noreferrer" aria-describedby={title}>
                  {title}
                </a>
              </p>
            </div>
            <a href={buttonLink} target="_blank" rel="noopener noreferrer" aria-describedby="Contact">
              <button class="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                Contact
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile
