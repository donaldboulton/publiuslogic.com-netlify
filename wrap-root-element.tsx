import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from './src/components/Code'
import { preToCodeBlock } from 'mdx-utils'
import { GoogleAuthProvider } from './src/components/GoogleAuthProvider'
import A from './src/components/A'
import FindOutMore from './src/components/FindOutMore'
import Features from './src/components/Features'
import Cta from './src/components/CTA'
import Callout from './src/components/Callout'
import CalloutDanger from './src/components/Callout/CalloutDanger'
import CalloutLabel from './src/components/Callout/CalloutLabel'
import WavyHr from './src/components/WavyHr'
import Center from './src/components/Center'
import CenterItem from './src/components/CenterItem'
import List from './src/components/List'
import ListItem from './src/components/List/ListItem'
import ListGrid from './src/components/ListGrid'
import Tooltip from './src/components/Tooltip'
import VideoOne from './src/components/CloudinaryVideo/videoOne'
import VideoTwo from './src/components/CloudinaryVideo/videoTwo'
import VideoThree from './src/components/CloudinaryVideo/videoThree'
import CloudinaryVideo from './src/components/CloudinaryVideo'
import Accordion from './src/components/Accordion'
import SingleAccordion from './src/components/SingleAccordion'
import Table from './src/components/Table'
import Modal from './src/components/Modal'
import Section from './src/components/Section'
import Typing from './src/components/Typing'
import Popper from './src/components/Popper'
import SimpleCarousel from './src/components/SimpleCarousel/SimpleCarousel'

const Acronym = props => <abbr style={{ color: '#8b5cf6' }} {...props} />

const components = {
  abbr: Acronym,
  A: A,
  FindOutMore: FindOutMore,
  Center: Center,
  CenterItem: CenterItem,
  Cta: Cta,
  Features: Features,
  WavyHr: WavyHr,
  Callout: Callout,
  CalloutDanger: CalloutDanger,
  CalloutLabel: CalloutLabel,
  List: List,
  ListItem: ListItem,
  ListGrid: ListGrid,
  Tooltip: Tooltip,
  CloudinaryVideo: CloudinaryVideo,
  VideoOne: VideoOne,
  VideoTwo: VideoTwo,
  VideoThree: VideoThree,
  Accordion: Accordion,
  SingleAccordion: SingleAccordion,
  Table: Table,
  Modal: Modal,
  Section: Section,
  Typing: Typing,
  Popper: Popper,
  SimpleCarousel, SimpleCarousel,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre className="gatsby-highlight" {...preProps} />
    }
  },
}
export const wrapRootElement = ({ element }) => (
  <GoogleAuthProvider>
    <MDXProvider components={components}>{element}</MDXProvider>
  </GoogleAuthProvider>
)
