import React, { FunctionComponent } from 'react'
import '../../scss/main.scss'
import { PreviewProps, getJSON } from './helpers'
import { TranslationCollection, getTranslations } from '../../data/i18n'
import { TeamData, TeamMemberData } from '../../data/team'
import { Team } from '../../components/Team'
import { Container } from 'reactstrap'
import * as R from 'ramda'

const HEADER = 'Our Team'
const SUBHEAD = '...'
const FOOTER = `
  A somehow long statement stating that we really care for whatever
  you want us to care for and we really need you to join us.
`

export const TeamPreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const team: TranslationCollection<TeamData> = getJSON(entry)
  //return <>{R.map(Team, getTranslations(team))}</>
  return (
    <Container>
      <Team header={HEADER} subheader={SUBHEAD} members={[]} footer={FOOTER} />
    </Container>
  )
}

export default TeamPreview
