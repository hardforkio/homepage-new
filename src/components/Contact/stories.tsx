import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import { DispatchActionLink } from '../../storybook/helpers'
import { ContactSection } from '.'

const HEADLINE = 'We want YOU!'
const DESCRIPTION = 'To take action and apply for a job click the button.'
const BUTTONLABEL = 'Click here!'

storiesOf('Contact Form', module).add('default', () => (
  <ContactSection
    headline={HEADLINE}
    description={DESCRIPTION}
    buttonLabel={BUTTONLABEL}
    Link={DispatchActionLink}
    url="https://example.org"
  />
))
