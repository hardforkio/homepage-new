import React, { FunctionComponent } from 'react'
import { TitleBanner } from '../TitleBanner'
import { FAQEntry } from '../../data/faqEntry'
import { ContentWrap } from '../Content'
import { mapToComponent } from '../../utils/helpers'
import ReactMarkdown from 'react-commonmark'

export const FAQComponent: FunctionComponent<{
  faqEntries: FAQEntry[]
  title: string
  subtitle: string
}> = ({ faqEntries, title, subtitle }) => (
  <>
    <TitleBanner title={title} subtitle={subtitle} />
    <ContentWrap>{mapToComponent(FAQEntryComponent, faqEntries)}</ContentWrap>
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
