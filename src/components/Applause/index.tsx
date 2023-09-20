'use client'

import * as React from 'react'
import { useState, useEffect } from 'react'
import useSound from 'use-sound'
import clapping from '../../../static/audio/clapping.mp3'
import Confetti from '@/components/DomConfetti'
import axios from 'axios'
import { useLocation } from '@reach/router'
import useIsClient from '../../hooks/useIsClient'

const confettiConfig = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 3000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
}

const Wrapper = props => <span style={{ position: 'relative' }} {...props} />

const ConfettiWrapper = props => <span style={{ position: 'absolute', top: 0, right: 0 }} {...props} />
const API = 'https://api.applause-button.com'
const VERSION = '3.0.0'

const HEADERS = {
  'Content-Type': 'text/plain',
}

const ApplauseButton = ({ props }) => {
  const location = useLocation()
  const url = location.pathname
  const [count, setCount] = useState(0)
  const [isClapped, setIsClapped] = useState(false)
  const [play] = useSound(clapping)

  const getClaps = async url => {
    const query = url ? `?url=${url}` : ''
    /* eslint-disable-next-line no-return-await */
    return await axios.get(`${API}/get-claps${query}`, {
      headers: HEADERS,
    })
  }

  const updateClaps = async (url, claps = 1) => {
    console.log(claps)
    const query = url ? `?url=${url}` : ''
    /* eslint-disable-next-line no-return-await */
    return await axios.post(`${API}/update-claps${query}`, JSON.stringify(`${claps},${VERSION}`), {
      headers: HEADERS,
    })
  }

  const doApplause = () => {
    if (!isClapped) {
      console.log('do clapping')
      const callBackend = async () => {
        const result = await updateClaps(url, 1)
        setCount(result.data)
        setIsClapped(true)
      }
      callBackend()
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getClaps(url)
      console.log(result)
      setCount(result.data)
    }
    fetchData()
  }, [])
  const { key } = useIsClient()
  return (
    <Wrapper key={key}>
      <span
        style={{
          cursor: 'pointer',
          padding: '1em',
        }}
        onClick={() => {
          doApplause()
          play()
        }}
      >
        {isClapped ? '🤟🎉' : '🎉'}
        {` ${count}`}
      </span>
      <ConfettiWrapper>
        <Confetti active={isClapped} config={confettiConfig} {...props} />
      </ConfettiWrapper>
    </Wrapper>
  )
}

export default ApplauseButton
