import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import { FAQComponent } from './component'

const faqEntries = [
  {
    question: 'What is the best thing to eat?',
    answer: 'Pumpkin spiced pizza!',
  },
  {
    question: 'What is the best thing to hear?',
    answer: 'Put markdown here!',
  },
]

storiesOf('FAQ Section', module).add('default', () => (
  <FAQComponent
    faqEntries={faqEntries}
    headline="FAQs"
    subheadline="The things you want to know"
  />
))
