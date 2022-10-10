import { useEffect } from 'react'
import L from 'leaflet'

/* eslint-disable-next-line valid-typeof */
const isBrowser = typeof window !== 'undefined'
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
let leaflet
if (isBrowser) {
  leaflet = require('leaflet')
}

export default function useConfigureLeafletRed() {
  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl

    L.Icon.Default.mergeOptions({
      /* eslint @typescript-eslint/no-var-requires: "off" */
      iconRetinaUrl: require('../components/Map/images/Red/marker-icon-2x.png').default,
      iconUrl: require('../components/Map/images/Red/marker-icon.png').default,
      shadowUrl: require('../components/Map/images/marker-shadow.png').default,
    })
  }, [])
}
