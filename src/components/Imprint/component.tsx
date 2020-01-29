import React, { FunctionComponent } from 'react'
import ReactMarkdown from 'react-commonmark'
import { Container } from 'reactstrap'

import { Imprint as ImprintData } from '../../data/imprint/types'
import { TitleBanner } from '../TitleBanner/index'

export const ImprintComponent: FunctionComponent<ImprintData> = ({
  content,
  headline,
  subheadline,
}) => (
  <article>
    <TitleBanner title={headline} subtitle={subheadline} />

    <Container className="py-5">
      <ReactMarkdown source={content} />
    </Container>
  </article>
)
