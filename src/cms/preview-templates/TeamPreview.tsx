import React, { FunctionComponent } from 'react'
import '../../scss/main.scss'
import { PreviewProps, getJSON } from './helpers'
import { getTranslations } from '../../data/i18n'
import { Team } from '../../components/Team'
import * as R from 'ramda'
import { expandTeamMembers } from '../../data/team'
import { Container } from 'reactstrap'

export const TeamPreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const data = R.pipe(getJSON, expandTeamMembers, getTranslations)(entry)
  return (
    <Container>
      <Team {...data[0]} />
      <Team {...data[1]} />
    </Container>
  )
}
