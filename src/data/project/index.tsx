import { Technology, StringifiedTechnologies } from '../technology'
import { TranslationCollection, Locale, filterByLocale } from '../i18n'
import * as R from 'ramda'
import { useLocale } from '../../utils/hooks'
import { convertToObjectList } from '../helpers'
import { Head } from '../../components/Head'
import { graphql, useStaticQuery } from 'gatsby'

export type ProjectData = {
  usedTechnologies: Technology[]
  slug: string
  head: Head
} & TranslatedProjectData

interface TranslatedProjectData {
  client: string
  clientLink: string
  reference: string
  image: string
  product: string
  application: string
  responsibilities: string
}

export type ProjectDataOnDisk = {
  usedTechnologies: StringifiedTechnologies
  slug: string
  head: TranslationCollection<Head>
} & TranslationCollection<TranslatedProjectData>

export const useGetProjects = (locale: Locale): ProjectData[] => {
  const jsonData: ProjectDataOnDisk[] = useLoadFiles()
  return R.map(translateAndConvert(locale), jsonData)
}

export const useProjects: () => ProjectData[] = R.pipe(
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

export const translateAndConvert = (
  locale: Locale,
): ((data: ProjectDataOnDisk) => ProjectData) =>
  R.pipe(filterByLocale(locale), deserializeTechnologies)

export const deserializeTechnologies: (
  data: Omit<ProjectData, 'usedTechnologies'> & {
    usedTechnologies: StringifiedTechnologies
  },
) => ProjectData = R.evolve({
  usedTechnologies: convertToObjectList,
})
