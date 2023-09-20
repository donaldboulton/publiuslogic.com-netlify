'use client'

import * as React from 'react'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Container, Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
import { loadConfettiPreset } from 'tsparticles-preset-confetti'

const options = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'emitter',
      },
    },
    modes: {
      emitters: {
        direction: 'none',
        spawnColor: {
          value: '#ff0000',
          animation: {
            h: {
              enable: true,
              offset: {
                min: -1.4,
                max: 1.4,
              },
              speed: 0.1,
              sync: false,
            },
            l: {
              enable: true,
              offset: {
                min: 20,
                max: 80,
              },
              speed: 0,
              sync: false,
            },
          },
        },
        life: {
          count: 1,
          duration: 0.1,
          delay: 0.6,
        },
        rate: {
          delay: 0.1,
          quantity: 100,
        },
        size: {
          width: 0,
          height: 0,
        },
      },
    },
  },
  background: {
    color: {
      value: 'transparent',
    },
  },
  particles: {
    shape: {
      type: 'circle',
    },
    color: {
      value: ['#FF5A86', '#953AFE', '#FFC326', '#46C0FF'],
    },
  },
  preset: 'confetti',
}

const ParticlesContainerConfetti = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine)
    await loadFull(engine)
    await loadConfettiPreset(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container)
  }, [])

  return (
    <Particles
      className="background"
      options={options}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    />
  )
}

export default ParticlesContainerConfetti
