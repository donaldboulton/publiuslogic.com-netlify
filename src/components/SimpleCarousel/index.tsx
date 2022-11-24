import * as React from 'react'
import { FC, ReactNode, Component } from 'react'
import { Carousel } from 'nuka-carousel'

interface SimpleCarouselConfig {
  containerClassName?: string
  nextButtonClassName?: string
  nextButtonOnClick?: (event: React.MouseEvent) => void
  nextButtonStyle?: CSSProperties
  nextButtonText?: ReactNode
  pagingDotsClassName?: string
  pagingDotsContainerClassName?: string
  pagingDotsOnClick?: (event: React.MouseEvent) => void
  pagingDotsStyle?: CSSProperties
  prevButtonClassName?: string
  prevButtonOnClick?: (event: React.MouseEvent) => void
  prevButtonStyle?: CSSProperties
  prevButtonText?: ReactNode
}

export default class extends Component {
  render() {
  return (
    <div className="flex items-center justify-center">
      <Carousel
        slidesToShow={3}
        renderTopCenterControls={({ currentSlide }) => <div>Slide: {currentSlide}</div>}
        renderCenterLeftControls={({ previousDisabled, previousSlide }) => (
          <button onClick={previousSlide} disabled={previousDisabled}>
            Previous
          </button>
        )}
        renderCenterRightControls={({ nextDisabled, nextSlide }) => (
          <button onClick={nextSlide} disabled={nextDisabled}>
            Next
          </button>
        )}
      >
        <img src="https://unsplash.it/473/205" />
        <img src="https://unsplash.it/474/205" />
        <img src="https://unsplash.it/475/205" />
        <img src="https://unsplash.it/476/205" />
        <img src="https://unsplash.it/477/205" />
        <img src="https://unsplash.it/478/205" />
        <img src="https://unsplash.it/479/205" />
      </Carousel>
    </div>
  )
  }
}

export default SimpleCarousel
