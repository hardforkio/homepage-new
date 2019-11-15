import * as R from 'ramda'

const importAll = (r: any) => r.keys().map(r)
/**
 * Implements ```import data from './*.json'```
 *
 * From https://webpack.js.org/guides/dependency-management/#context-module-api
 */
export const importData: <T>(
  path: string,
  includeSubdirs: boolean,
) => T[] = R.pipe(
  R.partialRight(require.context, [/\.json$/]),
  importAll,
)
