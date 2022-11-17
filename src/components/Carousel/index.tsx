import * as React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
}

const CarouselPage = ({ data }) => {
  return (
    <Slider {...settings} className="overflow-hidden">
      <Img fluid={data.image1.childImageSharp.fluid} />
      <Img fluid={data.image2.childImageSharp.fluid} />
    </Slider>
  )
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "my-image-1-path.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "my-image-2-path.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default CarouselPage
