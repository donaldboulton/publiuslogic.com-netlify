"use client"

import * as React from 'react'
import { FC, useState, Fragment } from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import Lightbox from 'react-18-image-lightbox'

import ImageColWrapper from './image-col-wrapper'

import './style.css'

interface ImageProp {
  full: IGatsbyImageData
  thumb: IGatsbyImageData
  thumbAlt?: string
  title?: string
  caption?: string
}

interface GalleryProps {
  images: ImageProp[]
  imgClass?: string
  lightboxOptions?: object
  onClose?: () => void
  customWrapper?: FC
}

const Gallery: FC<GalleryProps> = ({
  images = [],
  imgClass = '',
  lightboxOptions = {},
  onClose = {},
  customWrapper = ImageColWrapper,
}) => {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const prevIndex = (index + images.length - 1) % images.length
  const nextIndex = (index + images.length + 1) % images.length
  const ImgColWrapper = customWrapper

  {
    /* URLs for full width images*/
  }
  const mainSrc = images[index]?.full?.images?.fallback?.src
  const nextSrc = images[nextIndex]?.full?.images?.fallback?.src
  const prevSrc = images[prevIndex]?.full?.images?.fallback?.src

  const onCloseLightbox = () => {
    onClose()
    setIsOpen(false)
  }

  return (
    <Fragment>
      <div className="grid grid-flow-row grid-flow-col auto-rows-max grid-rows-4 gap-y-2">
        {images.map((img, imgIndex) => {
          const thumbImage = getImage(img.thumb)
          if (!thumbImage) {
            return null
          }
          return (
            <ImgColWrapper
              key={imgIndex}
              onClick={() => {
                setIsOpen(true)
                setIndex(imgIndex)
              }}
            >
              <GatsbyImage image={thumbImage} className={imgClass} title={img.title} alt={img.thumbAlt || ''} />
            </ImgColWrapper>
          )
        })}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={mainSrc || ''}
          nextSrc={nextSrc || ''}
          prevSrc={prevSrc || ''}
          onCloseRequest={onCloseLightbox}
          onMovePrevRequest={() => setIndex(prevIndex)}
          onMoveNextRequest={() => setIndex(nextIndex)}
          imageTitle={images[index].title}
          imageCaption={images[index].caption}
          {...lightboxOptions}
        />
      )}
    </Fragment>
  )
}

export default Gallery
