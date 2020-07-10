import * as R from 'ramda'

interface ImageData {
  relativePath: string
  childImageSharp: {
    fluid: any
  }
}

export interface QueryData {
  allFile: QueryEdges
}

interface QueryEdges {
  edges: ReadonlyArray<QueryNode>
}

interface QueryNode {
  node: ImageData
}

export const getImages = R.path(['allFile', 'edges']) as (
  data: QueryData,
) => ReadonlyArray<QueryNode>

const isImage = R.pathEq(['node', 'relativePath'])

export const getNodeByFilename = (filename: string) =>
  R.find(isImage(R.replace('/img/', '', filename)))

export const getFluidImageDataForImage = (
  src: string,
): ((allImagesQueryData: QueryData) => any) =>
  R.pipe(
    getImages,
    getNodeByFilename(src),
    R.path(['node', 'childImageSharp', 'fluid']),
  )
