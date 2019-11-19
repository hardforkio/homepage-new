import React, { FunctionComponent } from 'react'
import '../../scss/main.scss'
import { PreviewProps, getJSON } from './helpers'
import { filterByLocale } from '../../data/i18n'
import { Team } from '../../components/Team'
import * as R from 'ramda'
import { expandCollection } from '../../data/helpers'

const expandTeamMembers = R.partial(expandCollection, [
  'teamMember',
  './member/',
])

export const TeamPreview: FunctionComponent<PreviewProps> = ({ entry }) => {
  const data = R.pipe(getJSON, expandTeamMembers, filterByLocale('de'))(entry)
  return <Team {...data} />
}

export default TeamPreview
