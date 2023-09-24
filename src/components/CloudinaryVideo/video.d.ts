import * as React from 'react'

interface CloudinaryContextProps {
  cloudName: string
}

interface VideoProps extends JSX.IntrinsicElements.video {
  publicId: string
}

interface TransformationProps {
  quality: string
}

declare module '@cloudinary/react' {
  class CloudinaryComponent {
    constructor(props, context) {}

    getChildContext() {}

    render() {}

    getChildTransformations(children) {}

    getTransformations() {}

    normalizeOptions(...options) {}

    getURL(extendedProps) {}

    typesFrom(configParams) {}
  }

  export const CloudinaryContext: React.FC<CloudinaryContextProps>

  export const Video: React.FC<PropsWithChildren<VideoProps>>

  export const Transformation: React.FC<TransformationProps>
}
