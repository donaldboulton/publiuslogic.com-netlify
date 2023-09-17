import * as React from 'react'
import { useRef } from 'react'
import { Marker, Tooltip, Popup } from 'react-leaflet'

export default function MarkerHangOut() {
  const markerRefHangOut = useRef(null)

  return (
    <div>
      <Marker ref={markerRefHangOut} position={[35.501429, -97.581642]}>
        <Popup>My HangOut!</Popup>
        <Tooltip>Will Rodgers Park / Disk Golf</Tooltip>
      </Marker>
    </div>
  )
}
