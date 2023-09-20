import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Code } from './src/components/Code'
import { preToCodeBlock } from 'mdx-utils'
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
import ListGrid from './src/components/ListGrid'
import VideoOne from './src/components/CloudinaryVideo/videoOne'
import VideoTwo from './src/components/CloudinaryVideo/videoTwo'
import VideoThree from './src/components/CloudinaryVideo/videoThree'
import Love from './src/components/CloudinaryVideo/love'
import CloudinaryVideo from './src/components/CloudinaryVideo'
import Accordion from './src/components/Accordion'
import SingleAccordion from './src/components/SingleAccordion'
import Table from './src/components/Table'
import Modal from './src/components/Modal'
import Section from './src/components/Section'
import HoverMenu from './src/components/HoverMenu'
import Left from './src/components/Left'
import LeftText from './src/components/LeftText'
import ColumnGridTwo from './src/components/ColumnGridTwo'
import ColumnGridThree from './src/components/ColumnGridThree'
import VideoWrapper from './src/components/VideoWrapper'
import UserProfile from './src/components/UserProfile'
import Stacked from './src/components/Stacked'

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
  ListGrid: ListGrid,
  CloudinaryVideo: CloudinaryVideo,
  VideoOne: VideoOne,
  VideoTwo: VideoTwo,
  VideoThree: VideoThree,
  Accordion: Accordion,
  SingleAccordion: SingleAccordion,
  Table: Table,
  Modal: Modal,
  Section: Section,
  HoverMenu: HoverMenu,
  Left: Left,
  Love: Love,
  LeftText: LeftText,
  ColumnGridTwo: ColumnGridTwo,
  ColumnGridThree: ColumnGridThree,
  VideoWrapper: VideoWrapper,
  UserProfile: UserProfile,
  Stacked: Stacked,
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre className="gatsby-highlight" {...preProps} />
    }
  },
}
export const wrapRootElement = ({ element }) => <MDXProvider components={components}>{element}</MDXProvider>
