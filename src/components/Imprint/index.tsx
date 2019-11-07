import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { ArticleHeader } from '../ArticleHeader/index'
import { ContentWrap } from '../Content/index'
import { Imprint as ImprintData } from '../../data/imprint'
import ReactMarkdown from 'react-commonmark'

export const ImprintComponent: FunctionComponent<ImprintData> = ({
  headline,
  subHeadline,
  content,
}) => (
  <article>
    <ArticleHeader title={headline} subtitle={subHeadline} />
    <ContentWrap>
      <div>
        <ReactMarkdown source={content} />
      </div>
    </ContentWrap>
  </article>
)

export const Imprint: FunctionComponent<{ imprint: ImprintData }> = ({
  imprint,
}) => (
  <div>
    <Helmet>
      <title>{imprint.metaTitle}</title>
    </Helmet>
    <ImprintComponent {...imprint} />
  </div>
)
