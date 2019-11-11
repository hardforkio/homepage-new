import React, { FunctionComponent } from 'react'
import { ArticleHeader } from '../ArticleHeader/index'
import { ContentWrap } from '../Content/index'
import { Imprint as ImprintData, useImprint } from '../../data/imprint'
import ReactMarkdown from 'react-commonmark'

export const ImprintComponent: FunctionComponent<ImprintData> = ({
  content,
  headline,
  subHeadline,
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

export const Imprint: FunctionComponent<{}> = () => {
  const imprint: ImprintData = useImprint()
  return <ImprintComponent {...imprint} />
}
