import React from 'react'
import '../../scss/main.scss'
import { storiesOf } from '@storybook/react'
import { DispatchActionLink } from '../../storybook/helpers'
import { Footer as FooterComponent } from './component'

storiesOf('Footer', module).add('default', () => (
  <FooterComponent
    ExternalLink={DispatchActionLink}
    InternalLink={DispatchActionLink}
    copyrightText="© 2017-2019 Hardfork GmbH"
    imprintLinkText="Impressum"
    githubLinkURL="https://github.com/hardforkio"
    contactEmail="contact@hardfork.io"
  />
))
