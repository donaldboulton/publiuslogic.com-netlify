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
    getChildContext() {}

    render() {}
    /* @typescript-eslint/no-unused-vars */
    getChildTransformations(children) {}

    getTransformations() {}
    /* @typescript-eslint/no-unused-vars */
    normalizeOptions(...options) {}
    /* @typescript-eslint/no-unused-vars */
    getURL(extendedProps) {}
  }

  export const CloudinaryContext: React.FC<CloudinaryContextProps>

  export const Video: React.FC<PropsWithChildren<VideoProps>>

  export const Transformation: React.FC<TransformationProps>
}
