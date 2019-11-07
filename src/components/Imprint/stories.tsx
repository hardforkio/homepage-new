import '../../scss/main.scss'
import React from 'react'
import { storiesOf } from '@storybook/react'
import { ImprintComponent } from '.'
import { Imprint as ImprintData } from '../../data/imprint'

const ENGLISH_IMPRINT: ImprintData = {
  headline: 'Imprint',
  subHeadline: 'Hardfork Company',
  metaTitle:
    'This is displayed in the title bar and shows you are on the imprint page of Hardfork',
  content: '# Markdown headline\nMarkdown content',
}

const GERMAN_IMPRINT: ImprintData = {
  headline: 'Impressum',
  subHeadline: 'Hardfork GmbH',
  metaTitle: 'Hardfork Impressum',
  content: '# Markdown abschnitt\nMarkdown inhalt',
}

storiesOf('Imprint', module)
  .add('german', () => <ImprintComponent {...GERMAN_IMPRINT} />)
  .add('english', () => <ImprintComponent {...ENGLISH_IMPRINT} />)
