import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { FC } from 'react'

import { getFluidImageDataForImage, QueryData } from './helpers'

interface CMSImageProps {
  src: string
  alt: string
  className?: string
}

export const CMSImage: FC<CMSImageProps> = ({ src, alt, className }) => {
  const allImagesQueryData = useStaticQuery<QueryData>(allCMSImages)
  const fluidImageData = getFluidImageDataForImage(src)(allImagesQueryData)
  return <Img fluid={fluidImageData} alt={alt} className={className} />
}

/* You might wonder why we query for all the images. This is because gatsby
 * has no dynamic queries. */
const allCMSImages = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "cms-images" } }) {
      edges {
        node {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
