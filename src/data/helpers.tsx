import * as R from 'ramda'
import { ProjectProps } from './project'

export const importSingleFile: <T extends {} = any>(
  path: string,
) => Promise<T> = path =>
  import(path)
    .then(x => x.default)
    .catch(x => console.error(x))

export const importFiles: <T extends {} = any>(
  directory: string,
  files: string[],
) => Promise<T[]> = R.curry((directory, files) =>
  Promise.all(
    R.pipe(
      R.map(file => `${directory}${file}.json`),
      R.map(importSingleFile),
    )(files),
  ),
)

export const expandCollection: <S>(
  name: string,
  path: string,
  data: any,
) => Promise<S> = async (name, path, data) =>
  R.ifElse(
    R.has(name),
    R.set(R.lensProp(name), await importFiles(path, R.prop(name)(data))),
    R.identity,
  )(data)

export const parseString = JSON.parse

export const convertToObjectList: (list: string[]) => any = R.map(parseString)

export const filterBySlug = (slug: string) =>
  R.pipe<ProjectProps[], ProjectProps[], ProjectProps>(
    R.filter(R.propEq('slug', slug)),
    R.head,
  )

export const convertTechnologies: (data: any) => any = R.evolve({
  usedTechnologies: convertToObjectList,
})
