import test from 'tape'
import { ProjectData } from './index'
import { deserializeTechnologies } from './helpers'

test('converter', assert => {
  const projectWithString = {
    title: '',
    slug: '',
    usedTechnologies: [
      '{"name":"ReactJS","link":"https://reactjs.org/"}',
      '{"name":"Typescript","link":"https://www.typescriptlang.org/"}',
    ],

    client: '',
    clientLink: '',
    reference: '',
    product: '',
    application: '',
    responsibilities: '',
    image: '/img/mock.jpg',
    head: {
      title: '',
      meta: {
        description: '',
        keywords: '',
      },
    },
  }

  const projectWithObject: ProjectData = {
    ...projectWithString,
    usedTechnologies: [
      {
        name: 'ReactJS',
        link: 'https://reactjs.org/',
      },
      {
        name: 'Typescript',
        link: 'https://www.typescriptlang.org/',
      },
    ],
  }

  assert.deepEqual(
    deserializeTechnologies(projectWithString),
    projectWithObject,
    'Should convert only the technologies to objects',
  )
  assert.end()
})
