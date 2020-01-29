import '../../scss/main.scss'

import { storiesOf } from '@storybook/react'
import * as R from 'ramda'
import React from 'react'
import { Container } from 'reactstrap'

import { Team } from './'
import { fakeMembers } from './data/fakeMembers'

const HEADER = 'Our Team'
const SUBHEADER = '...'
const FOOTER = `
  A somehow long statement stating that we really care for whatever
  you want us to care for and we really need you to join us.
`

storiesOf('Team', module)
  .add('3 members', () => (
    <Container>
      <Team
        header={HEADER}
        subheader={SUBHEADER}
        members={R.slice(0, 3, fakeMembers)}
        footer={FOOTER}
      />
    </Container>
  ))
  .add('5 members', () => (
    <Container>
      <Team
        header={HEADER}
        subheader={SUBHEADER}
        members={R.slice(0, 5, fakeMembers)}
        footer={FOOTER}
      />
    </Container>
  ))
  .add('7 members', () => (
    <Container>
      <Team
        header={HEADER}
        subheader={SUBHEADER}
        members={R.slice(0, 7, fakeMembers)}
        footer={FOOTER}
      />
    </Container>
  ))
