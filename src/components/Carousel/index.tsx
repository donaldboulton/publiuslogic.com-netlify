import * as React from 'react'
import { useState, FC, ReactNode } from 'react'
import * as CSS from 'csstype'
import { m, LazyMotion } from 'framer-motion'

const loadFeatures = () => import('@/components/FramerFeatures').then(res => res.default)

interface SlideProps {
  children: ReactNode
  className: string
  activeSlideName: string
  slideName: string
}

export const slideShow: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'sans-serif',
  height: '100%',
  width: '100%',
}

export const slideMain: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'sans-serif',
  height: '100%',
  width: '100%',
}

export const slides: CSS.Properties = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
}

export const slideName: CSS.Properties = {
  backgroundColor: 'LightSteelBlue',
  color: 'DarkSlateGrey',
}

export const slideMainDiv: CSS.Properties = {
  position: 'relative',
  border: '3px solid DarkSlateGrey',
  width: '380px',
  height: '700px',
  overflow: 'hidden',
}

const Slide: FC<SlideProps> = props => {
  const { children, slideName, activeSlideName, className } = props
  if (activeSlideName !== slideName) {
    return null
  }

  return (
    <div style={slideShow} className={className}>
      {children}
    </div>
  )
}

const Slides = ({ children, slideDirection }) => {
  return (
    <m.div
      style={slides}
      variants={{
        enter: slideDirection => ({
          x: slideDirection === 'backward' ? '-100%' : '100%',
        }),
        center: { x: 0 },
        exit: slideDirection => ({
          x: slideDirection === 'backward' ? '100%' : '-100%',
        }),
      }}
      custom={slideDirection}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 2.4 }}
    >
      {children}
    </m.div>
  )
}

const MainSettingsSlide = ({ activeSlideName, onNavigateSidebar }) => {
  return (
    <Slide slideName="main-settings" activeSlideName={activeSlideName} style={slideName}>
      <h2>Main Settings</h2>
      <div className="mt-20">
        <button onClick={() => onNavigateSidebar({ slideName: 'change-language' })} className="mr-4">
          Change Language
        </button>
        <button onClick={() => onNavigateSidebar({ slideName: 'blocked-sites' })}>See Blocked Sites</button>
      </div>
    </Slide>
  )
}

const ChangeLanguageSlide = ({ activeSlideName, onNavigateSidebar }) => {
  return (
    <Slide slideName="change-language" activeSlideName={activeSlideName} className="bg-slate-800 text-slate-200">
      <h2>Change Language</h2>
      <div className="mt-20">
        <button
          className="mr-4"
          onClick={() =>
            onNavigateSidebar({
              slideName: 'main-settings',
              direction: 'backward',
            })
          }
        >
          Back
        </button>
        <button onClick={() => onNavigateSidebar({ slideName: 'language-details' })}>See language details</button>
      </div>
    </Slide>
  )
}

const LanguageDetailsSlide = ({ activeSlideName, onNavigateSidebar }) => {
  return (
    <Slide slideName="language-details" activeSlideName={activeSlideName}>
      <h2>Language Details</h2>
      <div className="mt-12">
        <button
          onClick={() =>
            onNavigateSidebar({
              slideName: 'change-language',
              direction: 'backward',
            })
          }
        >
          Back
        </button>
      </div>
    </Slide>
  )
}

const BlockedSitesSlide = ({ activeSlideName, onNavigateSidebar }) => {
  return (
    <Slide slideName="blocked-sites" activeSlideName={activeSlideName}>
      <h2>Blocked Sites</h2>
      <div className="mt-12">
        <button
          onClick={() =>
            onNavigateSidebar({
              slideName: 'main-settings',
              direction: 'backward',
            })
          }
        >
          Back
        </button>
      </div>
    </Slide>
  )
}

export default function SlideShow() {
  const [[activeSlideName, slideDirection], setSlide] = useState(['main-settings', 'forward'])

  const onNavigateSidebar = ({ slideName, direction = 'forward' }) => {
    setSlide([slideName, direction])
  }

  return (
    <div style={slideMainDiv}>
      <LazyMotion initial={false} custom={slideDirection} features={loadFeatures}>
        <Slides key={activeSlideName} activeSlideName={activeSlideName} slideDirection={slideDirection}>
          <MainSettingsSlide activeSlideName={activeSlideName} onNavigateSidebar={onNavigateSidebar} />
          <ChangeLanguageSlide activeSlideName={activeSlideName} onNavigateSidebar={onNavigateSidebar} />
          <LanguageDetailsSlide activeSlideName={activeSlideName} onNavigateSidebar={onNavigateSidebar} />
          <BlockedSitesSlide activeSlideName={activeSlideName} onNavigateSidebar={onNavigateSidebar} />
        </Slides>
      </LazyMotion>
    </div>
  )
}
