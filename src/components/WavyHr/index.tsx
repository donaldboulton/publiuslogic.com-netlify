import * as React from 'react'
import { FC } from 'react'

interface WavyHrProps {
  className?: string
}

const WavyHr: FC<WavyHrProps> = ({ className = '' }) => (
  <div className="text-center">
    <hr className={`text-rose-800 ${className}`}></hr>
  </div>
)

export default WavyHr
