import test from 'tape'

import { getImages, getNodeByFilename } from './helpers'

const queryData = {
  allFile: {
    edges: [
      {
        node: {
          relativePath: 'coffee-gear.png',
          childImageSharp: {
            fluid: {
              originalName: 'coffee-gear.png',
            },
          },
        },
      },
      {
        node: {
          relativePath: 'coffee.png',
          childImageSharp: {
            fluid: {
              originalName: 'coffee.png',
            },
          },
        },
      },
    ],
  },
}

test('pluckImagesFromQueryData', t => {
  t.plan(1)
  t.equal(getImages(queryData).length, 2, 'should return list of images.')
})

test('getNodeByFileName', t => {
  t.plan(1)
  t.deepEqual(
    getNodeByFilename('coffee.png')(getImages(queryData)),
    {
      node: {
        relativePath: 'coffee.png',
        childImageSharp: {
          fluid: {
            originalName: 'coffee.png',
          },
        },
      },
    },
    'should return correct node.',
  )
})
