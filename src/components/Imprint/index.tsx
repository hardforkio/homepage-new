import React, { FunctionComponent } from 'react'
import Helmet from 'react-helmet'
import { ArticleHeader } from '../ArticleHeader/index'
import { ContentWrap } from '../Content/index'
import { Imprint as ImprintData } from '../../data/imprint'
import ReactMarkdown from 'react-commonmark'

export const ImprintComponent: FunctionComponent<ImprintData> = ({
  content,
}) => (
  <article>
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
    <ArticleHeader title={imprint.headline} subtitle={imprint.subHeadline} />
    <ImprintComponent {...imprint} />
  </div>
)
