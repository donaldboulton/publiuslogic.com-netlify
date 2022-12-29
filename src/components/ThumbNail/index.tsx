import * as React from 'react'
import { FC } from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import GetAngie from '@/utils/getAngie'
import Thumb from './Thumb'

interface ImageSharpEdge {
  node: {
    childImageSharp: {
      thumb: IGatsbyImageData
      full: IGatsbyImageData
    }
  }
}

interface ThumbNailGalleryProps {
  data: {
    images: {
      edges: ImageSharpEdge[]
      name: string
      caption: string
    }
  }
}

const CustomWrapper = ({ children, onClick }) => (
  <div className="bg-gray-300 p-1 text-slate-900 dark:bg-slate-800 dark:text-slate-200" onClick={onClick}>
    {children}
  </div>
)

const ThumbNailGallery: FC<ThumbNailGalleryProps> = ({ data }) => {
  const images = GetAngie(({ node }, index) => ({
    ...node.childImageSharp,
    caption: `Image ${index}`,
  }))

  const lightboxOptions = {
    imageLoadErrorMessage: 'Cannot Load image',
    nextLabel: 'Next',
    prevLabel: 'Previous',
    zoomInLabel: 'Zoom',
    zoomOutLabel: 'Zoom Out',
    closeLabel: 'Close',
  }

  const onClose = () => {
    console.log('Lightbox was closed')
  }

  return (
    <>
      <div className="search-beams z-30 -mt-4">
        <section class="mb-4 overflow-hidden">
          <div class="center container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div class="-m-1 flex flex-wrap justify-center md:-m-2">
              <div class="flex flex-wrap">
                <div class="w-full p-1 md:p-2">
                  <Thumb
                    imgClass="block object-cover object-center w-full h-full rounded-lg border-double border-4 border-fuchsia-800"
                    images={images}
                    lightboxOptions={lightboxOptions}
                    customWrapper={CustomWrapper}
                    onClose={onClose}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ThumbNailGallery
