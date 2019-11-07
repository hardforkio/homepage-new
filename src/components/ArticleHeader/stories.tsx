import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import { ArticleHeaderComponent } from '.'

storiesOf('Article Header', module).add('default', () => (
  <ArticleHeaderComponent title="Jobs" subtitle="Hardfork.io | Berlin" />
))
