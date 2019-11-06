import { Locale, Markdown } from '..'

export interface Imprint {
  headline: string
  subHeadline: string
  metaTitle: string
  content: Markdown
}

/*In the long term we may want to modify/configure netlify Cms to output a .ts file that contains the data
  as a constant, and replace the useImprints implementation with a function hat simply returns this constant.
*/

const ENGLISH_IMPRINTS = [
  {
    headline: 'Imprint',
    subHeadline: 'Fancy Imprint',
    metaTitle: 'This is displayed in the title bar',
    content: '# Markdown headline\nMarkdown content',
  },
]

const GERMAN_IMPRINTS = [
  {
    headline: 'Impressum',
    subHeadline: 'Tolles Imprint',
    metaTitle: 'Das ist der titel',
    content: '# Markdown abschnitt\nMarkdown inhalt',
  },
]

export const useImprints = (language: Locale): Imprint[] =>
  language === 'en' ? ENGLISH_IMPRINTS : GERMAN_IMPRINTS

/**
 * In the medium term we may want to replace the following with code that simply parses the markdown files in this folder
 * directly, without going through gatsby's graphql interface
 */

export default useImprints
