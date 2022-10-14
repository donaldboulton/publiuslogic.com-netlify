import * as React from 'react'
import { useRef } from 'react'
import { MapContainer, TileLayer, Circle, LayerGroup, FeatureGroup, Rectangle, Popup } from 'react-leaflet'
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js'
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'
import AddLocate from "@/lib/addLocate"
import useConfigureLeaflet from '@/hooks/useConfigureLeaflet'
import useHasMounted from '@/hooks/useHasMounted'
import MarkerHome from './MarkerHome'
import MarkerWork from './MarkerWork'
import MarkerHangOut from './MarkerHangOut'

const isBrowser = typeof window !== 'undefined'
let leaflet
if (isBrowser) {
  leaflet = require('leaflet')
}

function Map() {
  useConfigureLeaflet()
  const hasMounted = useHasMounted()
  const mapRef = useRef(null)
  const center = [35.590607, -97.43913]
  const rectangle = [
    [35.507745, -97.58331],
    [35.500509, -97.578358],
  ]

  const fillBlueOptions = { fillColor: 'blue' }
  const fillRedOptions = { fillColor: 'red' }
  const greenOptions = { color: 'green', fillColor: 'green' }
  const purpleOptions = { color: 'purple' }
  if (typeof window !== 'undefined') {
    return (
      <div>
        {useHasMounted && (
          <MapContainer
            className="markercluster-map"
            center={center}
            zoom={11}
            fullscreenControl={true}
            scrollWheelZoom={false}
            whenCreated={map => {
              mapRef.current = map
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LayerGroup>
              <Circle center={center} pathOptions={fillBlueOptions} radius={300} />
              <Circle center={center} pathOptions={fillRedOptions} radius={100} stroke={false} />
              <LayerGroup>
                <Circle center={[35.609775, -97.549442]} pathOptions={greenOptions} radius={200} />
              </LayerGroup>
            </LayerGroup>
            <FeatureGroup pathOptions={purpleOptions}>
              <Popup>My Will Rodgers Park Hangout</Popup>
              <Circle center={[35.501429, -97.581642]} radius={100} />
              <Rectangle bounds={rectangle} />
            </FeatureGroup>
            <MarkerHome />
            <MarkerWork />
            <MarkerHangOut />
            <AddLocate />
          </MapContainer>
        )}
      </div>
    )
  } else {
    return <div className="h-96" />
  }
}

export default Map
