import '../../scss/main.scss'

import { storiesOf } from '@storybook/react'
import React from 'react'

import { Imprint as ImprintData } from '../../data/imprint/types'
import { ImprintComponent } from './component'

const ENGLISH_IMPRINT: ImprintData = {
  headline: 'Imprint',
  subheadline: 'Hardfork Company',
  content: '# Markdown headline\nMarkdown content',
  head: {
    title: 'Hardfork',
    meta: {
      description: 'Hardfork',
      keywords: 'Software Development',
    },
  },
}

const GERMAN_IMPRINT: ImprintData = {
  headline: 'Impressum',
  subheadline: 'Hardfork GmbH',
  content: '# Markdown abschnitt\nMarkdown inhalt',
  head: {
    title: 'Hardfork',
    meta: {
      description: 'Hardfork',
      keywords: 'Software Development',
    },
  },
}

storiesOf('Imprint', module)
  .add('german', () => <ImprintComponent {...GERMAN_IMPRINT} />)
  .add('english', () => <ImprintComponent {...ENGLISH_IMPRINT} />)
