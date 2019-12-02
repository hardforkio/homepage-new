import { Technology, StringifiedTechnologies } from '../technology'
import { TranslationCollection, Locale, filterByLocale } from '../i18n'
import * as R from 'ramda'
import { useLocale } from '../../utils/hooks'
import { convertTechnologies } from '../helpers'
import { Head } from '../../components/Head'
import { graphql, useStaticQuery } from 'gatsby'

interface TranslatedProjectProps {
  client: string
  clientLink: string
  reference: string
  image: string
  product: string
  application: string
  responsibilities: string
}

export type ProjectProps = {
  usedTechnologies: Technology[]
  slug: string
  head: Head
} & TranslatedProjectProps

type ProjectPropsOnDisk = {
  usedTechnologies: StringifiedTechnologies // Apparently the relation widget returns a list of stringified Technology objects. They are parsed later in the component whre they are used.
  slug: string
  head: TranslationCollection<Head>
} & TranslationCollection<TranslatedProjectProps>

export const useGetProjects = (locale: Locale): ProjectProps[] => {
  const projects = useLoadFiles()
  const filteredProjects = filterByLocale(locale)(projects)
  return convertTechnologies(filteredProjects)
}

export const useProjects: () => ProjectProps[] = R.pipe(
  useLocale,
  useGetProjects,
)

const useLoadFiles = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allProjectJson {
          nodes {
            slug
            title
            usedTechnologies
            translations {
              locale
              value {
                application
                client
                clientLink
                image
                product
                reference
                responsibilities
              }
            }
            head {
              translations {
                locale
                value {
                  title
                  meta {
                    description
                    keywords
                  }
                }
              }
            }
          }
        }
      }
    `,
  )
  return data.allProjectJson.nodes
}
