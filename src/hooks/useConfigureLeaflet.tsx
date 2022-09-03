import * as React from 'react'
import { useEffect } from 'react'
import L from 'leaflet'

/* eslint-disable-next-line valid-typeof */
if (typeof window !== undefined) {
  require('leaflet')
}

export default function useConfigureLeaflet() {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
      iconUrl: require('leaflet/dist/images/marker-icon.png').default,
      shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    })
  }, [])
}
