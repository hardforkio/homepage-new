import * as R from 'ramda'

// see: https://webpack.js.org/guides/dependency-management/#context-module-api
export const importAll = <T extends {}>(
  context: __WebpackModuleApi.RequireContext,
) => context.keys().map(context) as T[]

export const filterDataByUuid = (
  relationPath: string[],
  relationData: any[],
  collection: any,
) =>
  R.filter(
    R.pipe(
      R.prop('uuid'),
      R.flip(R.includes)(R.path(relationPath, collection)),
    ),
    relationData,
  )

export const parseString = JSON.parse

export const convertToObjectList: (list: string[]) => any = R.map(parseString)

// TODO: Add typings.
export const expandRelation: (
  relationPath: string[],
  relationData: any[],
  collection: any,
) => any = R.ifElse(
  R.converge(R.hasPath, [R.nthArg(0), R.nthArg(2)]),
  R.converge(R.assocPath, [R.nthArg(0), filterDataByUuid, R.nthArg(2)]),
  R.nthArg(2),
)
