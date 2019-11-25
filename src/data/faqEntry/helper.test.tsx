import test from 'tape'
import { hasFAQEntries, FAQPage } from '.'

const FAQ_PAGE_EMTPY: FAQPage = {
  headline: 'Test',
  subheadline: 'Test',
  faqEntries: [],
  head: {
    title: 't',
    meta: {
      keywords: 't',
      description: 't',
    },
  },
}

const FAQ_PAGE_WITH_ENTRIES: FAQPage = {
  headline: 'Test',
  subheadline: 'Test',
  faqEntries: [{ question: 'Is this a test', answer: 'Yes it is' }],
  head: {
    title: 't',
    meta: {
      keywords: 't',
      description: 't',
    },
  },
}

test('the faq page has entries', test => {
  test.false(hasFAQEntries(FAQ_PAGE_EMTPY), 'The faq page has no entries')
  test.true(hasFAQEntries(FAQ_PAGE_WITH_ENTRIES), 'The faq page has entries')
  test.end()
})
