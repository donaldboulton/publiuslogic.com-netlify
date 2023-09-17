import * as React from 'react'
import { useRef } from 'react'
import { Marker, Tooltip, Popup } from 'react-leaflet'

export default function MarkerHome() {
  const markerRefHome = useRef(null)

  return (
    <div>
      <Marker ref={markerRefHome} position={[35.501429, -97.581642]}>
        <Popup>My Home!</Popup>
        <Tooltip>My Mobile RV Home! Rays RV</Tooltip>
      </Marker>
    </div>
  )
}
