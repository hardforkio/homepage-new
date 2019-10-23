import React from 'react'
import { storiesOf } from '@storybook/react'

import ArticleHeader from '../src/components/ArticleHeader'

storiesOf('components/ArticleHeader', module)
  .add('banner', () => (<ArticleHeader />))
  .add('banner with title', () => (<ArticleHeader title='title' subtitle='subtitle' />))

