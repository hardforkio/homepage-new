import '../../scss/main.scss'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { ImprintComponent } from '.'
import { Imprint as ImprintData } from '../../data/imprint'

const ENGLISH_IMPRINT: ImprintData = {
  headline: 'Imprint',
  title: 'Hardfork',
  subHeadline: 'Hardfork Company',
  content: '# Markdown headline\nMarkdown content',
  seo: {
    metaDescription: 'Hardfork',
    metaKeywords: 'Software Development',
  },
}

const GERMAN_IMPRINT: ImprintData = {
  headline: 'Impressum',
  title: 'Hardfork',
  subHeadline: 'Hardfork GmbH',
  content: '# Markdown abschnitt\nMarkdown inhalt',
  seo: {
    metaDescription: 'Hardfork',
    metaKeywords: 'Software Development',
  },
}

storiesOf('Imprint', module)
  .add('german', () => <ImprintComponent {...GERMAN_IMPRINT} />)
  .add('english', () => <ImprintComponent {...ENGLISH_IMPRINT} />)
