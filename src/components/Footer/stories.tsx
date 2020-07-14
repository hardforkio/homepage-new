import '../../scss/main.scss'

import { storiesOf } from '@storybook/react'
import React from 'react'

import { DispatchActionLink } from '../../storybook/helpers'
import { FooterComponent } from './component'

storiesOf('Footer', module).add('default', () => (
  <FooterComponent
    ExternalLink={DispatchActionLink}
    InternalLink={DispatchActionLink}
    copyrightText="© 2017-2019 Hardfork GmbH"
    imprintLinkText="Impressum"
    imprintLink="/de/imprint"
    privacyLinkText="Datenschutzerklärung"
    privacyLink="/de/privacy-policy"
    githubLinkURL="https://github.com/hardforkio"
    contactEmail="contact@hardfork.io"
  />
))
