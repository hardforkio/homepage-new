import React, { FunctionComponent } from 'react'
import { TitleBanner } from '../TitleBanner/index'
import { ContentWrap } from '../Content/index'
import { Imprint as ImprintData, useImprint } from '../../data/imprint'
import ReactMarkdown from 'react-commonmark'

export const ImprintComponent: FunctionComponent<ImprintData> = ({
  content,
  headline,
  subHeadline,
}) => (
  <article>
    <TitleBanner title={headline} subtitle={subHeadline} />
    <ContentWrap>
      <ReactMarkdown source={content} />
    </ContentWrap>
  </article>
)

export const Imprint: FunctionComponent<{}> = () => {
  const imprint: ImprintData = useImprint()
  return <ImprintComponent {...imprint} />
}
