import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import { ContentWrap } from './'
import { Container } from 'reactstrap'

storiesOf('ContentWrap', module)
  .add('Sections', () => (
    <ContentWrap>
      <div>
        <h2>Header</h2>
        <p>Paragraph</p>
        <h3>Header</h3>
        <p>Paragraph</p>
        <h4>Header</h4>
        <p>Paragraph</p>
      </div>
    </ContentWrap>
  ))
  .add('List', () => (
    <ContentWrap>
      <div>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Third</li>
        </ul>
      </div>
    </ContentWrap>
  ))
  .add('List in Container', () => (
    <Container>
      <ContentWrap>
        <div>
          <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
          </ul>
        </div>
      </ContentWrap>
    </Container>
  ))
