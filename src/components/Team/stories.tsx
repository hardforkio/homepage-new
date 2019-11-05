import '../../scss/main.scss'

import React from 'react'
import { storiesOf } from '@storybook/react'
import * as R from 'ramda'

import { Team } from './'
import fakeMembers from './data/fakeMembers'

const HEADER = 'Our Team'
const SUBHEAD = '...'
const FOOTER = `
  A somehow long statement stating that we really care for whatever
  you want us to care for and we really need you to join us.
`

storiesOf('Team', module)
  .add('3 members', () => (
    <div className="container">
      <Team
        header={HEADER}
        subhead={SUBHEAD}
        members={R.slice(0, 3, fakeMembers)}
        footer={FOOTER}
      />
    </div>
  ))
  .add('5 members', () => (
    <div className="container">
      <Team
        header={HEADER}
        subhead={SUBHEAD}
        members={R.slice(0, 5, fakeMembers)}
        footer={FOOTER}
      />
    </div>
  ))
