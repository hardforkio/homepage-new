import { Locale, Markdown } from '..'
import { graphql, useStaticQuery } from 'gatsby'
import { QueryResult, getTranslationsFromQuery } from '../queryHelpers'

export interface Imprint {
  headline: string
  subHeadline: string
  metaTitle: string
  content: Markdown
}

/**
 * Returns all the imprints in the CMS.
 * @param locale
 */
export const useImprints = (locale: Locale): Imprint[] => {
  const data: QueryResult<Imprint> = useStaticQuery(IMPRINTS_QUERY)
  return getTranslationsFromQuery<Imprint>(locale)(data)
}
export default useImprints

/*In the long term we may want to modify/configure netlify Cms to output a .ts file that contains the data
  as a constant, and replace the useImprints implementation with a function hat simply returns this constant.
  Note: It can already be configured to output json or yaml instead of markdown.
*/

/*
 * Maybe we should just import the files in this folder, without first loading them into graphql and then fetching them from there
 */

const IMPRINTS_QUERY = graphql`
  query Imprints {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "imprint" } } }) {
      nodes {
        frontmatter {
          translations {
            content
            headline
            locale
            metaTitle
            subHeadline
          }
        }
      }
    }
  }
`
