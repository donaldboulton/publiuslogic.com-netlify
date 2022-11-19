import { graphql, useStaticQuery } from 'gatsby'

export type UseAngieType = {
  data: {
    images: {
      edges: ImageSharpEdge[]
      name: string
    }
  }
}

const UseAngie = (): UseAngieType => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: {relativeDirectory: {eq: "angie"}}, sort: {name: ASC}) {
        edges {
          node {
            childImageSharp {
              thumb: gatsbyImageData(width: 300, height: 300, placeholder: BLURRED)
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
            caption: name
          }
        }
      }
    }
  `)
}

export default UseAngie
