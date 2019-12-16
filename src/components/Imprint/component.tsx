import React, { FunctionComponent } from 'react'
import { TitleBanner } from '../TitleBanner/index'
import { Imprint as ImprintData } from '../../data/imprint/types'
import ReactMarkdown from 'react-commonmark'
import { Container } from 'reactstrap'

export const ImprintComponent: FunctionComponent<ImprintData> = ({
  content,
  headline,
  subheadline,
}) => (
  <article>
    <TitleBanner title={headline} subtitle={subheadline} />

    <Container>
      <ReactMarkdown source={content} />
    </Container>
  </article>
)
