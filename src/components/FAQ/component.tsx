import React, { FunctionComponent } from 'react'
import { TitleBanner } from '../TitleBanner'
import { FAQEntry } from '../../data/faqEntry'
import { ContentWrap } from '../Content'
import { mapToComponent } from '../../utils/helpers'
import ReactMarkdown from 'react-commonmark'
import * as R from 'ramda'

export const FAQComponent: FunctionComponent<{
  faqEntries: FAQEntry[]
  headline: string
  subheadline: string
}> = ({ faqEntries, headline, subheadline }) => (
  <>
    <TitleBanner title={headline} subtitle={subheadline} />
    <ContentWrap>
      {mapToComponent(
        FAQEntryComponent,
        preventUndefinedFAQEntries(faqEntries),
      )}
    </ContentWrap>
  </>
)

const FAQEntryComponent: FunctionComponent<{
  question: string
  answer: string
}> = ({ question, answer }) => (
  <div>
    <h5>{question}</h5>
    <div className="pb-5">
      <ReactMarkdown source={answer} />
    </div>
  </div>
)

const preventUndefinedFAQEntries: (
  faqEntries: FAQEntry[],
) => FAQEntry[] = R.defaultTo([{ question: '', answer: '' }])
