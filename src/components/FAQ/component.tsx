import * as R from 'ramda'
import React, { FunctionComponent } from 'react'
import ReactMarkdown from 'react-commonmark'
import { Container } from 'reactstrap'

import { FAQEntry } from '../../data/faqEntry/types'
import { mapToComponent } from '../../utils/helpers'
import { TitleBanner } from '../TitleBanner'

export const FAQComponent: FunctionComponent<{
  faqEntries: FAQEntry[]
  headline: string
  subheadline: string
}> = ({ faqEntries, headline, subheadline }) => (
  <>
    <TitleBanner title={headline} subtitle={subheadline} />
    <Container className="py-5">
      {mapToComponent(
        FAQEntryComponent,
        preventUndefinedFAQEntries(faqEntries),
      )}
    </Container>
  </>
)

const FAQEntryComponent: FunctionComponent<{
  question: string
  answer: string
}> = ({ question, answer }) => (
  <div>
    <h5>{question}</h5>
    <div className="pb-5">
      <ReactMarkdown source={answer} containerTagName="p" />
    </div>
  </div>
)

const preventUndefinedFAQEntries: (
  faqEntries: FAQEntry[],
) => FAQEntry[] = R.defaultTo([{ question: '', answer: '' }])
