import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import { ContentWrap } from './'

storiesOf('ContentWrap', module).add('Three Sections', () => (
  <ContentWrap>
    <div>
      <h2>Header</h2>
      Section content.
      <h3>Header</h3>
      Section content.
      <h4>Header</h4>
      Section content.
    </div>
  </ContentWrap>
))
