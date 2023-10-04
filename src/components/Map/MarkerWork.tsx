import * as React from 'react'
import { useRef } from 'react'
import { useMap, Marker, Tooltip, Popup } from 'react-leaflet'

export default function MarkerWork(props) {
    const map = useMap()
    const markerRefWork = useRef(null)

    return (
        <div>
            <Marker ref={markerRefWork} position={[35.609775, -97.549442]}>
                <Popup>Corner Work</Popup>
                <Tooltip>My Work Place!</Tooltip>
            </Marker>
        </div>
    )
}
