declare module '*.jpg'

declare module '*.png' {
  const content: string
  export default content
}
