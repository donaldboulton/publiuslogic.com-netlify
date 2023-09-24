import { useEffect } from 'react'
import L from 'leaflet'

/* eslint-disable-next-line valid-typeof */
const isBrowser = typeof window !== 'undefined'
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
let leaflet
if (isBrowser) {
  leaflet = require('leaflet')
}

export default function useConfigureLeaflet() {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      /* eslint @typescript-eslint/no-var-requires: "off" */
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
      iconUrl: require('leaflet/dist/images/marker-icon.png').default,
      shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
    })
  }, [])
}
