import { graphql } from 'gatsby'

export const GatsbyImageColors = graphql`
  fragment GatsbyImageColors on FileFields {
    colors {
      vibrant
      darkVibrant
      lightVibrant
      muted
      darkMuted
      lightMuted
    }
  }
`
